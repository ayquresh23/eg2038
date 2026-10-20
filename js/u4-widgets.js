/* EG2038 Unit 4: interactive widgets.
   Hydrates <div class="u4w" data-w="..."> placeholders written into content-data.js.
   Widgets: tangent, iso, dial, eut, quiz. No dependencies. Hidden in Revise mode (learn-only).
   All free energy curves are schematic; the numerics are real (lower convex hull of the curves). */
(function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var RG = 8.314;
  var uid = 0;

  /* ───────── numerics ───────── */

  // Lower convex hull of the lowest curve at each x. fns: {name: x => G}. Returns [{x, y, p}].
  function lowerEnvelope(fns, N, x0, x1) {
    var pts = [], i, p, x, y, best;
    for (i = 0; i <= N; i++) {
      x = x0 + (x1 - x0) * i / N;
      best = null;
      for (p in fns) {
        y = fns[p](x);
        if (best === null || y < best.y) best = { x: x, y: y, p: p };
      }
      pts.push(best);
    }
    var h = [], q, a, b;
    for (i = 0; i < pts.length; i++) {
      q = pts[i];
      while (h.length >= 2) {
        a = h[h.length - 2]; b = h[h.length - 1];
        if ((b.x - a.x) * (q.y - a.y) - (b.y - a.y) * (q.x - a.x) <= 0) h.pop(); else break;
      }
      h.push(q);
    }
    return h;
  }

  // The hull edges that are tie lines: different phases, or a long jump within one phase (a miscibility gap).
  function tieEdges(h, step) {
    var out = [], i, a, b;
    for (i = 0; i < h.length - 1; i++) {
      a = h[i]; b = h[i + 1];
      if (a.p !== b.p || (b.x - a.x) > 3.5 * step) out.push({ a: a, b: b });
    }
    return out;
  }

  // What is stable at overall composition x0? Returns {two, a, b, wa, wb, g}.
  function stateAt(h, x0, step, fns) {
    var i, a, b;
    for (i = 0; i < h.length - 1; i++) {
      a = h[i]; b = h[i + 1];
      if (x0 >= a.x && x0 <= b.x) {
        if (a.p !== b.p || (b.x - a.x) > 3.5 * step) {
          var wa = (b.x - x0) / (b.x - a.x), wb = 1 - wa;
          return { two: true, a: a, b: b, wa: wa, wb: wb, g: a.y + (b.y - a.y) * (x0 - a.x) / (b.x - a.x) };
        }
        return { two: false, p: a.p, g: fns[a.p](x0) };
      }
    }
    b = h[h.length - 1];
    return { two: false, p: b.p, g: fns[b.p](x0) };
  }

  function clamp(v, lo, hi) { return Math.min(Math.max(v, lo), hi); }
  function ent(x) { x = clamp(x, 1e-9, 1 - 1e-9); return x * Math.log(x) + (1 - x) * Math.log(1 - x); }
  function f2(v) { return v.toFixed(2); }

  /* ───────── tiny DOM helpers ───────── */

  function el(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag), k;
    for (k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function h(tag, cls, parent, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    if (parent) parent.appendChild(n);
    return n;
  }

  function Plot(parent, W, H, m, label) {
    this.m = m; this.w = W - m.l - m.r; this.h = H - m.t - m.b;
    this.svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, 'class': 'u4-svg', role: 'img', 'aria-label': label || '' }, parent);
    this.cid = 'u4c' + (++uid);
    var cp = el('clipPath', { id: this.cid }, this.svg);
    el('rect', { x: m.l, y: m.t, width: this.w, height: this.h }, cp);
    this.xr = [0, 1]; this.yr = [0, 1];
  }
  Plot.prototype.X = function (v) { return this.m.l + (v - this.xr[0]) / (this.xr[1] - this.xr[0]) * this.w; };
  Plot.prototype.Y = function (v) { return this.m.t + this.h - (v - this.yr[0]) / (this.yr[1] - this.yr[0]) * this.h; };
  Plot.prototype.axes = function (xl, yl) {
    var m = this.m, b = m.t + this.h;
    el('line', { x1: m.l, y1: b, x2: m.l + this.w, y2: b, 'class': 'ax' }, this.svg);
    el('line', { x1: m.l, y1: m.t, x2: m.l, y2: b, 'class': 'ax' }, this.svg);
    if (xl) this.text(m.l + this.w / 2, b + 38, xl, 'lab', 'middle');
    if (yl) {
      var t = this.text(14, m.t + this.h / 2, yl, 'lab', 'middle');
      t.setAttribute('transform', 'rotate(-90 14 ' + (m.t + this.h / 2) + ')');
    }
  };
  Plot.prototype.text = function (x, y, s, cls, anchor) {
    var t = el('text', { x: x, y: y, 'class': cls || '', 'text-anchor': anchor || 'start' }, this.svg);
    t.innerHTML = s;
    return t;
  };
  Plot.prototype.line = function (cls, clip) {
    var n = el('line', { 'class': cls }, this.svg);
    if (clip) n.setAttribute('clip-path', 'url(#' + this.cid + ')');
    return n;
  };
  Plot.prototype.path = function (cls, clip) {
    var n = el('path', { 'class': cls, fill: 'none' }, this.svg);
    if (clip) n.setAttribute('clip-path', 'url(#' + this.cid + ')');
    return n;
  };
  Plot.prototype.dot = function (cls, r) { return el('circle', { 'class': cls, r: r || 5 }, this.svg); };
  Plot.prototype.setLine = function (n, x1, y1, x2, y2) {
    n.setAttribute('x1', this.X(x1)); n.setAttribute('y1', this.Y(y1));
    n.setAttribute('x2', this.X(x2)); n.setAttribute('y2', this.Y(y2));
  };
  Plot.prototype.setDot = function (n, x, y) { n.setAttribute('cx', this.X(x)); n.setAttribute('cy', this.Y(y)); };
  Plot.prototype.curveD = function (f, x0, x1, n) {
    var s = '', i, x;
    for (i = 0; i <= n; i++) {
      x = x0 + (x1 - x0) * i / n;
      s += (i ? 'L' : 'M') + this.X(x).toFixed(1) + ',' + this.Y(f(x)).toFixed(1);
    }
    return s;
  };
  Plot.prototype.ptsD = function (pts) {
    return pts.map(function (p, i) { return (i ? 'L' : 'M') + this.X(p[0]).toFixed(1) + ',' + this.Y(p[1]).toFixed(1); }, this).join('');
  };
  Plot.prototype.show = function (n, on) { n.style.display = on ? '' : 'none'; };

  function card(host, title, prompt) {
    host.classList.add('u4w', 'learn-only');
    host.innerHTML = '<div class="u4w-head"><span class="u4w-chip">Try it live</span><span class="u4w-title">' + title + '</span></div>' +
      '<p class="u4w-prompt">' + prompt + '</p><div class="u4w-body"><div class="u4w-fig"></div><div class="u4w-side"></div></div>';
    return { fig: host.querySelector('.u4w-fig'), side: host.querySelector('.u4w-side'), host: host };
  }

  function slider(parent, o) {
    var w = h('label', 'u4w-slider', parent);
    w.innerHTML = '<span class="u4w-slider-l">' + o.label + '<b></b></span><input type="range" min="' + o.min + '" max="' + o.max + '" step="' + o.step + '" value="' + o.value + '" aria-label="' + o.aria + '">';
    var inp = w.querySelector('input'), out = w.querySelector('b');
    function show() { out.textContent = o.fmt(+inp.value); }
    inp.addEventListener('input', function () { show(); o.onInput(+inp.value); });
    show();
    return { inp: inp, set: function (v) { inp.value = v; show(); }, get: function () { return +inp.value; } };
  }

  function button(parent, text, fn, cls) {
    var b = h('button', 'u4w-btn' + (cls ? ' ' + cls : ''), parent, text);
    b.type = 'button';
    b.addEventListener('click', fn);
    return b;
  }

  function pill(text, color) { return '<span class="u4w-pill" style="--pc:' + color + '">' + text + '</span>'; }
  function row(k, v) { return '<div class="u4w-row"><span>' + k + '</span><b>' + v + '</b></div>'; }
  function bar(parts) {
    var s = '<div class="u4w-bar">';
    parts.forEach(function (p) { s += '<i style="width:' + (p.w * 100).toFixed(1) + '%;background:' + p.c + '"></i>'; });
    s += '</div><div class="u4w-barkey">';
    parts.forEach(function (p) { s += '<span><em style="background:' + p.c + '"></em>' + p.n + ' ' + f2(p.w) + '</span>'; });
    return s + '</div>';
  }
  function notice(parent, summary, html) {
    var d = h('details', '', parent);
    d.innerHTML = '<summary>' + summary + '</summary>' + html;
  }

  var C = { a: 'var(--blue)', b: 'var(--amber)', l: 'var(--amber)', s: 'var(--blue)', t: 'var(--coral)', p: 'var(--purple)' };

  /* ───────── widget A: common tangent explorer ───────── */

  function wTangent(host) {
    var ui = card(host, 'Drag the alloy: when does it split?',
      'Slide the overall composition X<sub>0</sub>. Near the ends the alloy is happy as one phase. Somewhere in the middle it can do better by splitting into two.');
    var fa = function (x) { return 2 * (x - 0.28) * (x - 0.28) + 0.10; };
    var fb = function (x) { return 2 * (x - 0.74) * (x - 0.74) + 0.04; };
    var F = { a: fa, b: fb }, N = 600, step = 1 / N;
    var hull = lowerEnvelope(F, N, 0, 1);
    var ties = tieEdges(hull, step), t1 = ties[0].a, t2 = ties[0].b;
    var slope = (t2.y - t1.y) / (t2.x - t1.x);
    var lineG = function (x) { return t1.y + slope * (x - t1.x); };

    var P = new Plot(ui.fig, 640, 330, { l: 52, r: 18, t: 14, b: 62 }, 'Free energy curves for two phases with a common tangent');
    P.yr = [0.02, 0.60];
    P.axes('composition (mole fraction of B)', 'molar free energy');
    P.text(P.X(0), P.m.t + P.h + 16, 'A', 'tick', 'middle');
    P.text(P.X(1), P.m.t + P.h + 16, 'B', 'tick', 'middle');
    P.path('w-a', true).setAttribute('d', P.curveD(fa, 0, 1, 120));
    P.path('w-b', true).setAttribute('d', P.curveD(fb, 0, 1, 120));
    P.text(P.X(0.05), P.Y(fa(0.05)) - 10, '&alpha;', 'lab-a', 'end');
    P.text(P.X(0.96), P.Y(fb(0.96)) - 10, '&beta;', 'lab-b', 'start');
    var tl = P.line('w-t dash', true);
    P.setLine(tl, t1.x - 0.12, lineG(t1.x - 0.12), t2.x + 0.12, lineG(t2.x + 0.12));
    var zone = el('rect', { 'class': 'zone', x: P.X(t1.x), y: P.m.t + P.h + 44, width: P.X(t2.x) - P.X(t1.x), height: 6, rx: 3 }, P.svg);
    P.text((P.X(t1.x) + P.X(t2.x)) / 2, P.m.t + P.h + 57, 'splitting pays off here', 'zonelab', 'middle');
    var vl = P.line('vline'), dS = P.dot('dot-s', 5), dE = P.dot('dot-e', 6);

    var side = ui.side;
    var sl = slider(side, { label: 'Alloy composition X<sub>0</sub> ', min: 0.02, max: 0.98, step: 0.01, value: 0.42, aria: 'Alloy composition', fmt: f2, onInput: update });
    var out = h('div', 'u4w-readout', side); out.setAttribute('aria-live', 'polite');
    notice(side, 'What to notice',
      '<ul><li>The dashed line is the <strong>common tangent</strong>. It touches the &alpha; curve at X<sub>&alpha;e</sub> and the &beta; curve at X<sub>&beta;e</sub>.</li><li>Outside those two compositions the coral and grey dots sit on top of each other: no saving, so single phase.</li><li>Between them the coral dot sits <em>below</em> both curves. That gap is the free energy saved by splitting.</li><li>The two phases are always X<sub>&alpha;e</sub> and X<sub>&beta;e</sub>. Only their <em>amounts</em> change as you slide X<sub>0</sub> (lever rule).</li></ul>');

    function update() {
      var x0 = sl.get(), s = stateAt(hull, x0, step, F);
      var ga = fa(x0), gb = fb(x0), single = Math.min(ga, gb), sp = ga <= gb ? 'a' : 'b';
      P.setLine(vl, x0, P.yr[0], x0, P.yr[1]);
      P.setDot(dS, x0, single); dS.setAttribute('class', 'dot-s ' + (sp === 'a' ? 'fa' : 'fb'));
      P.setDot(dE, x0, s.g);
      var html = row('Equilibrium', s.two ? pill('&alpha; + &beta;', C.t) : (s.p === 'a' ? pill('&alpha; only', C.a) : pill('&beta; only', C.b)));
      if (s.two) {
        html += row('Phase compositions', 'X<sub>&alpha;e</sub> = ' + f2(s.a.x) + ', X<sub>&beta;e</sub> = ' + f2(s.b.x));
        html += bar([{ w: s.wa, c: C.a, n: '&alpha;' }, { w: s.wb, c: C.b, n: '&beta;' }]);
      }
      html += row('Best single phase', (sp === 'a' ? '&alpha;' : '&beta;') + ' at G = ' + single.toFixed(3));
      html += row('Free energy saved by splitting', '<span style="color:var(--coral)">' + (single - s.g).toFixed(3) + '</span>');
      out.innerHTML = html;
    }
    update();
  }

  /* ───────── widget B: isomorphous builder ───────── */

  function wIso(host) {
    var ui = card(host, 'Build the diagram: cool an alloy',
      'The left plot is the free energy picture at one temperature. The right plot is the phase diagram being built from it. Drag the temperature, or press play to cool the alloy.');
    var TA = 1000, TB = 700, S = 3, N = 400, step = 1 / N;
    var GS = function (T, x) { return T * ent(x); };
    var GL = function (T, x) { return S * (1 - x) * (TA - T) + S * x * (TB - T) + T * ent(x); };
    function comps(T) {
      var KA = Math.exp(S * (TA - T) / T), KB = Math.exp(S * (TB - T) / T);
      var xl = (KA - 1) / (KA - KB);
      return [KB * xl, xl];
    }
    var Tlo = 600, Thi = 1100;

    var P = new Plot(ui.fig, 640, 330, { l: 30, r: 10, t: 14, b: 40 }, 'Free energy of solid and liquid');
    P.axes('composition', null);
    P.text(P.X(0), P.m.t + P.h + 14, 'A', 'tick', 'middle');
    P.text(P.X(1), P.m.t + P.h + 14, 'B', 'tick', 'middle');
    var cS = P.path('w-s', true), cL = P.path('w-l', true), tl = P.line('w-t dash', true), vl = P.line('vline');
    var dC = P.dot('dot-t', 5), dD = P.dot('dot-t', 5);
    var tC = P.text(0, 0, 'c', 'lab-t', 'middle'), tD = P.text(0, 0, 'd', 'lab-t', 'middle');
    P.text(P.m.l + 6, P.m.t + 12, 'free energy at this T', 'cap', 'start');
    P.text(P.m.l + P.w - 56, P.m.t + 12, 'solid', 'lab-s', 'end');
    P.text(P.m.l + P.w - 4, P.m.t + 12, 'liquid', 'lab-l', 'end');

    var Q = new Plot(ui.fig, 640, 330, { l: 38, r: 22, t: 14, b: 40 }, 'Isomorphous phase diagram');
    Q.xr = [0, 1]; Q.yr = [Tlo - 20, Thi + 40];
    Q.axes('composition', 'temperature');
    Q.text(Q.X(0), Q.m.t + Q.h + 14, 'A', 'tick', 'middle');
    Q.text(Q.X(1), Q.m.t + Q.h + 14, 'B', 'tick', 'middle');
    var up = [], lo = [], T, i;
    for (i = 0; i <= 80; i++) { T = TA - (TA - TB) * i / 80; up.push([comps(T)[0], T]); }
    for (i = 80; i >= 0; i--) { T = TA - (TA - TB) * i / 80; lo.push([comps(T)[1], T]); }
    var lens = el('path', { 'class': 'lens', d: Q.ptsD(up.concat(lo)) + 'Z' }, Q.svg);
    var solidus = el('path', { 'class': 'bnd', d: Q.ptsD(up), fill: 'none' }, Q.svg);
    var liquidus = el('path', { 'class': 'bnd', d: Q.ptsD(lo.slice().reverse()), fill: 'none' }, Q.svg);
    Q.text(Q.X(0.22), Q.Y(1075), 'L', 'reg-l', 'middle');
    Q.text(Q.X(0.80), Q.Y(655), 'S', 'reg-s', 'middle');
    Q.text(Q.X(0.50), Q.Y(1013), 'S + L', 'reg', 'middle');
    Q.text(Q.m.l + 4, Q.Y(TA) - 6, 'T<tspan dy="3" font-size="9">m(A)</tspan>', 'tick', 'start');
    Q.text(Q.X(1) - 2, Q.Y(TB) + 26, 'T<tspan dy="3" font-size="9">m(B)</tspan>', 'tick', 'end');
    var iso = Q.line('isot dash'), tie = Q.line('tieline'), dAl = Q.dot('dot-alloy', 6), eC = Q.dot('dot-t', 4.5), eD = Q.dot('dot-t', 4.5);

    var side = ui.side;
    var play = null, timer = null;
    var sT = slider(side, { label: 'Temperature ', min: Tlo, max: Thi, step: 5, value: 850, aria: 'Temperature', fmt: function (v) { return v + ' (arb.)'; }, onInput: function () { stop(); update(); } });
    var sX = slider(side, { label: 'Alloy composition X<sub>0</sub> ', min: 0.05, max: 0.95, step: 0.01, value: 0.5, aria: 'Alloy composition', fmt: f2, onInput: update });
    var btns = h('div', 'u4w-btns', side);
    play = button(btns, '&#9654; Cool the alloy', function () { timer ? stop() : start(); });
    var out = h('div', 'u4w-readout', side); out.setAttribute('aria-live', 'polite');
    notice(side, 'What to notice',
      '<ul><li><strong>Above both melting points</strong> the liquid curve is lowest everywhere, so there is no tangent: all liquid.</li><li><strong>In between</strong> the curves cross and a common tangent appears. Its touching points are <strong>c</strong> (solid) and <strong>d</strong> (liquid).</li><li>Those two compositions are exactly where the isotherm meets the <strong>solidus</strong> (c) and the <strong>liquidus</strong> (d) on the right.</li><li><strong>Below both melting points</strong> the solid curve is lowest: all solid.</li></ul>');

    function start() {
      if (sT.get() <= Tlo + 5) sT.set(Thi);
      play.innerHTML = '&#10073;&#10073; Pause';
      timer = setInterval(function () {
        var t = sT.get() - 4;
        if (t <= Tlo) { t = Tlo; stop(); }
        sT.set(t); update();
      }, 40);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } play.innerHTML = '&#9654; Cool the alloy'; }

    function update() {
      var T = sT.get(), x0 = sX.get();
      var F = { s: function (x) { return GS(T, x); }, l: function (x) { return GL(T, x); } };
      var g0 = [], i, x, ys = [];
      for (i = 0; i <= 40; i++) { x = i / 40; ys.push(F.s(x), F.l(x)); }
      var lo2 = Math.min.apply(null, ys), hi2 = Math.max.apply(null, ys), pad = (hi2 - lo2) * 0.1;
      P.yr = [lo2 - pad, hi2 + pad];
      cS.setAttribute('d', P.curveD(F.s, 0, 1, 100));
      cL.setAttribute('d', P.curveD(F.l, 0, 1, 100));
      var hull = lowerEnvelope(F, N, 0, 1), ties = tieEdges(hull, step), st = stateAt(hull, x0, step, F);
      P.setLine(vl, x0, P.yr[0], x0, P.yr[1]);
      var hasTie = ties.length > 0, ca, cb;
      P.show(tl, hasTie); P.show(dC, hasTie); P.show(dD, hasTie); P.show(tC, hasTie); P.show(tD, hasTie);
      if (hasTie) {
        ca = ties[0].a; cb = ties[0].b;
        var sl = (cb.y - ca.y) / (cb.x - ca.x), g = function (xx) { return ca.y + sl * (xx - ca.x); };
        P.setLine(tl, ca.x - 0.2, g(ca.x - 0.2), cb.x + 0.2, g(cb.x + 0.2));
        P.setDot(dC, ca.x, ca.y); P.setDot(dD, cb.x, cb.y);
        tC.setAttribute('x', P.X(ca.x) - 10); tC.setAttribute('y', P.Y(ca.y) + 18);
        tD.setAttribute('x', P.X(cb.x) + 10); tD.setAttribute('y', P.Y(cb.y) - 10);
      }
      // right: isotherm and alloy
      Q.setLine(iso, 0, T, 1, T);
      var inBand = T > TB && T < TA, cc = inBand ? comps(T) : null;
      Q.show(tie, inBand); Q.show(eC, inBand); Q.show(eD, inBand);
      if (inBand) {
        Q.setLine(tie, cc[0], T, cc[1], T); Q.setDot(eC, cc[0], T); Q.setDot(eD, cc[1], T);
      }
      Q.setDot(dAl, x0, T);
      var html;
      if (st.two) {
        var sw = st.a.p === 's' ? st.wa : st.wb, lw = 1 - sw;
        html = row('State', pill('solid + liquid', C.t)) +
          row('Solid (c)', 'X = ' + f2(st.a.p === 's' ? st.a.x : st.b.x)) +
          row('Liquid (d)', 'X = ' + f2(st.a.p === 'l' ? st.a.x : st.b.x)) +
          bar([{ w: sw, c: C.s, n: 'solid' }, { w: lw, c: C.l, n: 'liquid' }]);
      } else if (st.p === 'l') {
        html = row('State', pill('all liquid', C.l)) + '<p class="u4w-note">The liquid curve is lowest at X<sub>0</sub>, so nothing has frozen yet.</p>';
      } else {
        html = row('State', pill('all solid', C.s)) + '<p class="u4w-note">The solid curve is lowest at X<sub>0</sub>: fully frozen.</p>';
      }
      out.innerHTML = html;
    }
    update();
  }

  /* ───────── widget C: the mixing enthalpy dial ───────── */

  function wDial(host) {
    var ui = card(host, 'Turn the mixing-enthalpy dial',
      'Free energy of mixing for a regular solution (Unit 2): &Delta;G<sub>mix</sub> = &Omega;X(1&minus;X) + RT[X ln X + (1&minus;X) ln(1&minus;X)]. Slide &Omega; between attraction and repulsion, then change the temperature.');
    var P = new Plot(ui.fig, 640, 330, { l: 58, r: 18, t: 14, b: 62 }, 'Free energy of mixing against composition');
    P.yr = [-16000, 9000];
    P.axes('composition (mole fraction of B)', 'free energy of mixing (kJ/mol)');
    P.text(P.X(0), P.m.t + P.h + 16, 'A', 'tick', 'middle');
    P.text(P.X(1), P.m.t + P.h + 16, 'B', 'tick', 'middle');
    [-12000, -6000, 0, 6000].forEach(function (v) { P.text(P.m.l - 6, P.Y(v) + 4, String(v / 1000), 'tick', 'end'); });
    var zero = P.line('zero dash'); P.setLine(zero, 0, 0, 1, 0);
    P.text(P.X(1) - 2, P.Y(0) - 6, 'unmixed A + B', 'cap', 'end');
    var curve = P.path('w-c', true), tan = P.line('w-t dash', true);
    var zone = el('rect', { 'class': 'zone', x: 0, y: P.m.t + P.h + 44, width: 0, height: 6, rx: 3 }, P.svg);
    var zlab = P.text(0, P.m.t + P.h + 57, 'miscibility gap', 'zonelab', 'middle');
    var d1 = P.dot('dot-t', 5), d2 = P.dot('dot-t', 5);

    var side = ui.side;
    var out;
    var sO = slider(side, { label: '&Omega; (mixing enthalpy) ', min: -20000, max: 30000, step: 500, value: 16000, aria: 'Omega, mixing enthalpy parameter', fmt: function (v) { return (v > 0 ? '+' : '') + (v / 1000).toFixed(1) + ' kJ/mol'; }, onInput: update });
    var sT = slider(side, { label: 'Temperature ', min: 200, max: 1600, step: 20, value: 500, aria: 'Temperature', fmt: function (v) { return v + ' K'; }, onInput: update });
    var btns = h('div', 'u4w-btns', side);
    button(btns, 'Ideal', function () { sO.set(0); sT.set(600); update(); });
    button(btns, 'Atoms repel', function () { sO.set(16000); sT.set(500); update(); });
    button(btns, 'Atoms attract', function () { sO.set(-12000); sT.set(600); update(); });
    out = h('div', 'u4w-readout', side); out.setAttribute('aria-live', 'polite');
    notice(side, 'What to notice',
      '<ul><li><strong>&Omega; = 0:</strong> only entropy acts. One dip, mixing favourable everywhere.</li><li><strong>&Omega; &gt; 0 (repel):</strong> the middle of the curve is pushed up. At low T the curve grows two dips and the common tangent marks the <strong>miscibility gap</strong>.</li><li><strong>Raise T:</strong> the entropy term grows and the two dips merge. The gap closes at the critical temperature T<sub>c</sub> = &Omega;/2R.</li><li><strong>&Omega; &lt; 0 (attract):</strong> the curve dips deeper than ideal. Unlike neighbours are favoured, which is the ordering tendency.</li></ul>');

    function update() {
      var Om = sO.get(), T = sT.get();
      var f = function (x) { return Om * x * (1 - x) + RG * T * ent(x); };
      curve.setAttribute('d', P.curveD(function (x) { return f(clamp(x, 1e-6, 1 - 1e-6)); }, 0, 1, 160));
      var N = 500, step = 1 / N, hull = lowerEnvelope({ c: f }, N, 1e-6, 1 - 1e-6), ties = tieEdges(hull, step);
      var gap = ties.length ? ties[0] : null;
      P.show(tan, !!gap); P.show(d1, !!gap); P.show(d2, !!gap); P.show(zone, !!gap); P.show(zlab, !!gap);
      if (gap) {
        P.setLine(tan, gap.a.x - 0.1, gap.a.y + (gap.b.y - gap.a.y) / (gap.b.x - gap.a.x) * (-0.1), gap.b.x + 0.1, gap.b.y + (gap.b.y - gap.a.y) / (gap.b.x - gap.a.x) * 0.1);
        P.setDot(d1, gap.a.x, gap.a.y); P.setDot(d2, gap.b.x, gap.b.y);
        zone.setAttribute('x', P.X(gap.a.x)); zone.setAttribute('width', P.X(gap.b.x) - P.X(gap.a.x));
        zlab.setAttribute('x', (P.X(gap.a.x) + P.X(gap.b.x)) / 2);
      }
      var Tc = Om > 0 ? Om / (2 * RG) : null, html, label;
      if (Math.abs(Om) < 250) { label = pill('ideal', C.a); html = '<p class="u4w-note">&Delta;H<sub>mix</sub> = 0. Entropy alone drives mixing, so &Delta;G<sub>mix</sub> is negative at every composition.</p>'; }
      else if (Om < 0) { label = pill('attraction', C.p); html = '<p class="u4w-note">&Delta;H<sub>mix</sub> &lt; 0. Unlike neighbours are favoured, so the curve sits below the ideal one. In a solid this is the ordering tendency.</p>'; }
      else if (gap) { label = pill('miscibility gap', C.t); html = row('Gap compositions', 'X = ' + f2(gap.a.x) + ' and ' + f2(gap.b.x)) + '<p class="u4w-note">&Delta;H<sub>mix</sub> &gt; 0 and T is below T<sub>c</sub>. The solution splits into two phases of the same structure (&alpha;&prime; + &alpha;&Prime;).</p>'; }
      else { label = pill('one solution', C.a); html = '<p class="u4w-note">&Delta;H<sub>mix</sub> &gt; 0 but T is above T<sub>c</sub>. Entropy wins and a single solution is stable at every composition.</p>'; }
      out.innerHTML = row('Regime', label) + row('&Delta;H<sub>mix</sub> at X = 0.5', (Om * 0.25 / 1000).toFixed(1) + ' kJ/mol') + (Tc ? row('Critical temperature T<sub>c</sub>', Math.round(Tc) + ' K') : '') + html;
    }
    update();
  }

  /* ───────── widget D: how a eutectic appears ───────── */

  function wEut(host) {
    var ui = card(host, 'Watch the eutectic appear',
      'Three free energy curves: &alpha; (A-rich), &beta; (B-rich) and the liquid L. Lowering the temperature lifts the liquid curve relative to the solids. Drag the temperature to the eutectic and watch the tangents.');
    var xcA = 0.12, cA = 0.0, xcB = 0.88, cB = 0.02, k0 = 3, kL = 1.6, xl = 0.5, dL = 0.07;
    var m0 = (cA - cB) / (xcA - xcB);
    var b0 = cA - m0 * xcA - m0 * m0 / (4 * k0);
    var cL = b0 + m0 * xl + m0 * m0 / (4 * kL);
    var xAE = xcA + m0 / (2 * k0), xBE = xcB + m0 / (2 * k0), xLE = xl + m0 / (2 * kL);
    function kk(t) { return k0 * (1 - 0.22 * t); }
    function curves(t) {
      return {
        a: function (x) { return kk(t) * (x - xcA) * (x - xcA) + cA; },
        b: function (x) { return kk(t) * (x - xcB) * (x - xcB) + cB; },
        l: function (x) { return kL * (x - xl) * (x - xl) + cL - dL * t; }
      };
    }
    var N = 500, step = 1 / N;
    var NAMES = { a: '&alpha;', b: '&beta;', l: 'L' }, COL = { a: C.a, b: C.p, l: C.l };

    // build the phase diagram boundaries once
    var series = {};
    function push(key, t, xa, xb) { (series[key] = series[key] || []).push([t, xa, xb]); }
    var t, hull, ties, i;
    for (t = -1; t <= 1.0001; t += 0.025) {
      if (Math.abs(t) < 0.02) continue;
      hull = lowerEnvelope(curves(t), N, 0, 1); ties = tieEdges(hull, step);
      for (i = 0; i < ties.length; i++) push(ties[i].a.p + ties[i].b.p, t, ties[i].a.x, ties[i].b.x);
    }

    var P = new Plot(ui.fig, 640, 330, { l: 30, r: 10, t: 14, b: 40 }, 'Free energy curves for alpha, beta and liquid');
    P.yr = [-0.10, 0.28];
    P.axes('composition', null);
    P.text(P.X(0), P.m.t + P.h + 14, 'A', 'tick', 'middle');
    P.text(P.X(1), P.m.t + P.h + 14, 'B', 'tick', 'middle');
    var cva = P.path('w-a', true), cvb = P.path('w-p', true), cvl = P.path('w-l', true);
    P.text(P.X(0.02), P.m.t + 14, '&alpha;', 'lab-a', 'start');
    P.text(P.X(0.98), P.m.t + 14, '&beta;', 'lab-p', 'end');
    P.text(P.X(0.5), P.m.t + 14, 'L', 'lab-l', 'middle');
    var tl1 = P.line('w-t dash', true), tl2 = P.line('w-t dash', true), vl = P.line('vline');
    var dots = [P.dot('dot-t', 5), P.dot('dot-t', 5), P.dot('dot-t', 5), P.dot('dot-t', 5)];
    var banner = P.text(P.m.l + P.w / 2, P.m.t + P.h - 12, '', 'banner', 'middle');

    var Q = new Plot(ui.fig, 640, 330, { l: 38, r: 10, t: 14, b: 40 }, 'Eutectic phase diagram being built');
    Q.yr = [-1.12, 1.12];
    Q.axes('composition', 'temperature');
    Q.text(Q.X(0), Q.m.t + Q.h + 14, 'A', 'tick', 'middle');
    Q.text(Q.X(1), Q.m.t + Q.h + 14, 'B', 'tick', 'middle');
    function ser(key, which) {
      var s = series[key]; if (!s) return [];
      return s.slice().sort(function (p, q) { return p[0] - q[0]; }).map(function (r) { return [which === 0 ? r[1] : r[2], r[0]]; });
    }
    // the hull is sampled on a grid, so tie-line ends jitter by one step; smooth interior points (ends stay fixed)
    function smooth(pts) {
      var p = pts.map(function (r) { return [r[0], r[1]]; }), pass, j, q;
      for (pass = 0; pass < 4; pass++) {
        q = p.map(function (r) { return [r[0], r[1]]; });
        for (j = 1; j < p.length - 1; j++) q[j][0] = (p[j - 1][0] + 2 * p[j][0] + p[j + 1][0]) / 4;
        p = q;
      }
      return p;
    }
    function bnd(pts) { el('path', { 'class': 'bnd', d: Q.ptsD(smooth(pts)), fill: 'none' }, Q.svg); }
    var alS = ser('al', 0).reverse(), alL = ser('al', 1).reverse(), lbL = ser('lb', 0).reverse(), lbS = ser('lb', 1).reverse();
    var abA = ser('ab', 0), abB = ser('ab', 1);
    // t > 0 series run from high T down to the eutectic; add the invariant points at t = 0
    function tail(pts, x) { return pts.concat([[x, 0]]); }
    function head(pts, x) { return [[x, 0]].concat(pts); }
    var posAL = function (key, w) { return ser(key, w).filter(function (p) { return p[1] > 0; }).sort(function (a, b) { return b[1] - a[1]; }); };
    bnd(tail(posAL('al', 0), xAE)); bnd(tail(posAL('al', 1), xLE));
    bnd(tail(posAL('lb', 0), xLE)); bnd(tail(posAL('lb', 1), xBE));
    var negA = ser('ab', 0).filter(function (p) { return p[1] < 0; }).sort(function (a, b) { return b[1] - a[1]; });
    var negB = ser('ab', 1).filter(function (p) { return p[1] < 0; }).sort(function (a, b) { return b[1] - a[1]; });
    bnd(head(negA, xAE)); bnd(head(negB, xBE));
    var eline = Q.line('bnd'); Q.setLine(eline, xAE, 0, xBE, 0);
    Q.text(Q.X(xBE) + 6, Q.Y(0) - 5, 'T<tspan dy="3" font-size="9">E</tspan>', 'tick', 'start');
    Q.text(Q.X(0.04), Q.Y(-0.7), '&alpha;', 'reg-a', 'start');
    Q.text(Q.X(0.96), Q.Y(-0.7), '&beta;', 'reg-p', 'end');
    Q.text(Q.X(0.5), Q.Y(0.75), 'L', 'reg-l', 'middle');
    Q.text(Q.X(0.2), Q.Y(0.3), '&alpha; + L', 'reg', 'middle');
    Q.text(Q.X(0.8), Q.Y(0.3), 'L + &beta;', 'reg', 'middle');
    Q.text(Q.X(0.5), Q.Y(-0.6), '&alpha; + &beta;', 'reg', 'middle');
    var iso = Q.line('isot dash'), dAl = Q.dot('dot-alloy', 6);

    var side = ui.side;
    var sT = slider(side, { label: 'Temperature ', min: -1, max: 1, step: 0.025, value: 0.4, aria: 'Temperature relative to the eutectic', fmt: function (v) { return Math.abs(v) < 0.0125 ? 'at T_E' : (v > 0 ? 'above T_E' : 'below T_E'); }, onInput: update });
    var sX = slider(side, { label: 'Alloy composition X<sub>0</sub> ', min: 0.03, max: 0.97, step: 0.01, value: 0.3, aria: 'Alloy composition', fmt: f2, onInput: update });
    var btns = h('div', 'u4w-btns', side);
    button(btns, 'Jump to T<sub>E</sub>', function () { sT.set(0); update(); });
    var out = h('div', 'u4w-readout', side); out.setAttribute('aria-live', 'polite');
    notice(side, 'What to notice',
      '<ul><li><strong>Above T<sub>E</sub>:</strong> two separate tangents, one for &alpha; with L and one for L with &beta;. These are the two liquidus branches.</li><li><strong>At T<sub>E</sub>:</strong> a <em>single</em> straight line touches all three curves. Three phases share one tangent, so nothing is left free: temperature and all three compositions are fixed. That is what <strong>invariant</strong> means.</li><li><strong>Below T<sub>E</sub>:</strong> the liquid curve is lifted clear and only the &alpha;&ndash;&beta; tangent remains.</li></ul>');

    function update() {
      var tt = sT.get(), x0 = sX.get(), F = curves(tt), at = Math.abs(tt) < 0.0125;
      var ys = [], i, x;
      cva.setAttribute('d', P.curveD(F.a, 0, 1, 100));
      cvb.setAttribute('d', P.curveD(F.b, 0, 1, 100));
      cvl.setAttribute('d', P.curveD(F.l, 0, 1, 100));
      P.setLine(vl, x0, P.yr[0], x0, P.yr[1]);
      var hull = lowerEnvelope(F, N, 0, 1), ties = tieEdges(hull, step), st = stateAt(hull, x0, step, F);
      var lines = [tl1, tl2], used = 0;
      dots.forEach(function (d) { P.show(d, false); });
      lines.forEach(function (l) { P.show(l, false); });
      function drawTie(a, b, ln) {
        var sl = (b.y - a.y) / (b.x - a.x), g = function (xx) { return a.y + sl * (xx - a.x); };
        P.setLine(ln, a.x - 0.08, g(a.x - 0.08), b.x + 0.08, g(b.x + 0.08)); P.show(ln, true);
      }
      if (at) {
        var a0 = { x: xAE, y: F.a(xAE) }, b0 = { x: xBE, y: F.b(xBE) };
        drawTie(a0, b0, tl1);
        P.setDot(dots[0], xAE, F.a(xAE)); P.setDot(dots[1], xLE, F.l(xLE)); P.setDot(dots[2], xBE, F.b(xBE));
        for (i = 0; i < 3; i++) P.show(dots[i], true);
        banner.textContent = 'one line touches all three curves';
      } else {
        ties.slice(0, 2).forEach(function (e, j) {
          drawTie(e.a, e.b, lines[j]);
          P.setDot(dots[used], e.a.x, e.a.y); P.show(dots[used], true); used++;
          P.setDot(dots[used], e.b.x, e.b.y); P.show(dots[used], true); used++;
        });
        banner.textContent = '';
      }
      Q.setLine(iso, 0, tt, 1, tt); Q.setDot(dAl, x0, tt);
      var html;
      if (at) {
        if (x0 >= xAE && x0 <= xBE) {
          html = row('State', pill('&alpha; + L + &beta;', C.t)) +
            row('Compositions', '&alpha; ' + f2(xAE) + ', L ' + f2(xLE) + ', &beta; ' + f2(xBE)) +
            '<p class="u4w-note">The eutectic reaction L &rarr; &alpha; + &beta; runs at this one temperature. The amounts of each phase depend on how far it has gone.</p>';
        } else {
          html = row('State', x0 < xAE ? pill('&alpha; only', C.a) : pill('&beta; only', C.p)) + '<p class="u4w-note">This alloy is outside the eutectic line, so the eutectic reaction does not touch it.</p>';
        }
      } else if (st.two) {
        var na = NAMES[st.a.p], nb = NAMES[st.b.p];
        html = row('State', pill(na + ' + ' + nb, C.t)) +
          row('Compositions', na + ' ' + f2(st.a.x) + ', ' + nb + ' ' + f2(st.b.x)) +
          bar([{ w: st.wa, c: COL[st.a.p], n: na }, { w: st.wb, c: COL[st.b.p], n: nb }]);
      } else {
        html = row('State', pill(NAMES[st.p] + (st.p === 'l' ? ' (all liquid)' : ' only'), COL[st.p]));
      }
      out.innerHTML = html;
    }
    update();
  }

  /* ───────── widget E: name that reaction ───────── */

  function wQuiz(host) {
    var ui = card(host, 'Name that transformation',
      'Eight quick ones. Count the phases on each side of the change and ask whether a liquid is involved. If the composition never changes, it is not an invariant reaction at all.');
    var OPTS = [
      { id: 'eut', t: 'Eutectic' }, { id: 'eutoid', t: 'Eutectoid' }, { id: 'per', t: 'Peritectic' },
      { id: 'peroid', t: 'Peritectoid' }, { id: 'cong', t: 'Congruent' }
    ];
    var Q = [
      { f: ['L', '&alpha; + &beta;'], a: 'eut', why: 'One liquid above the line, two solids below: a liquid splitting into two solids is <strong>eutectic</strong>.' },
      { f: ['&gamma;', '&alpha; + Fe<sub>3</sub>C'], a: 'eutoid', why: 'One solid splits into two solids, no liquid: <strong>eutectoid</strong>.' },
      { f: ['L + &delta;', '&gamma;'], a: 'per', why: 'A liquid and a solid combine into one solid: <strong>peritectic</strong>.' },
      { f: ['&alpha; + &beta;', '&gamma;'], a: 'peroid', why: 'Two solids combine into one solid, no liquid: <strong>peritectoid</strong>.' },
      { x: 'Pure iron changes from BCC to FCC on heating.', a: 'cong', why: 'A pure element changing structure (allotropic). The composition does not change, so it is <strong>congruent</strong>, not an invariant reaction between phases of different composition.' },
      { x: '(Ti) + TiAg &rarr; Ti<sub>2</sub>Ag on cooling.', a: 'peroid', why: 'Two solids react to form a new solid: <strong>peritectoid</strong>. This one is on the lecture slides.' },
      { x: 'Pb-Sn liquid at 61.9 wt% Sn freezes at 183 &deg;C into &alpha; + &beta;.', a: 'eut', why: 'A single liquid splits into two solids at one fixed temperature: <strong>eutectic</strong>.' },
      { x: 'Pure copper melts.', a: 'cong', why: 'Solid and liquid have the same composition, so melting is <strong>congruent</strong>.' }
    ];
    var order, idx, score, answered;
    var box = h('div', 'u4q', ui.fig);
    var side = ui.side;
    var tally = h('div', 'u4w-readout', side);
    notice(side, 'Quick rules',
      '<ul><li>One phase above, two below: <strong>splitting</strong> (eutectic if liquid, eutectoid if solid).</li><li>Two phases above, one below: <strong>combining</strong> (peritectic if liquid is involved, peritectoid if not).</li><li>Same composition before and after: <strong>congruent</strong>.</li></ul>');

    function shuffle(a) {
      var r = a.slice(), i, j, t;
      for (i = r.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = r[i]; r[i] = r[j]; r[j] = t; }
      return r;
    }
    function start() { order = shuffle(Q); idx = 0; score = 0; show(); }
    function show() {
      answered = false;
      if (idx >= order.length) { done(); return; }
      var q = order[idx], s = '';
      if (q.f) {
        s = '<svg viewBox="0 0 320 130" class="u4-svg u4q-fig" role="img" aria-label="Fields just above and below a horizontal line"><line x1="30" y1="65" x2="290" y2="65" class="bnd"/>' +
          '<text x="160" y="40" text-anchor="middle" class="qf">' + q.f[0] + '</text><text x="160" y="104" text-anchor="middle" class="qf">' + q.f[1] + '</text>' +
          '<text x="34" y="30" class="cap">just above the line</text><text x="34" y="122" class="cap">just below the line</text></svg>';
      } else {
        s = '<p class="u4q-text">' + q.x + '</p>';
      }
      box.innerHTML = '<div class="u4q-n">Question ' + (idx + 1) + ' of ' + order.length + '</div>' + s + '<div class="u4q-opts"></div><div class="u4q-fb" aria-live="polite"></div>';
      var o = box.querySelector('.u4q-opts');
      OPTS.forEach(function (op) {
        var b = button(o, op.t, function () { answer(op.id, b); });
        b.dataset.id = op.id;
      });
      tallyUpdate();
    }
    function answer(id, btn) {
      if (answered) return;
      answered = true;
      var q = order[idx], ok = id === q.a;
      if (ok) score++;
      box.querySelectorAll('.u4w-btn').forEach(function (b) {
        b.disabled = true;
        if (b.dataset.id === q.a) b.classList.add('right');
        else if (b === btn) b.classList.add('wrong');
      });
      var fb = box.querySelector('.u4q-fb');
      fb.innerHTML = '<p class="u4q-why ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? 'Correct.' : 'Not quite.') + '</b> ' + q.why + '</p>';
      button(fb, idx + 1 >= order.length ? 'See score' : 'Next &rarr;', function () { idx++; show(); }, 'next');
      tallyUpdate();
    }
    function tallyUpdate() {
      tally.innerHTML = row('Score', score + ' / ' + Math.min(idx + (answered ? 1 : 0), order.length));
    }
    function done() {
      var msg = score === order.length ? 'Clean sweep.' : score >= 6 ? 'Solid. Check the ones you missed in the rules on the right.' : 'Worth another go. Use the rules on the right: count phases, then check for a liquid.';
      box.innerHTML = '<div class="u4q-n">Finished</div><p class="u4q-text"><b>' + score + ' / ' + order.length + '.</b> ' + msg + '</p>';
      button(box, 'Try again (shuffled)', start);
      tally.innerHTML = row('Final score', score + ' / ' + order.length);
    }
    start();
  }

  /* ───────── styles ───────── */

  var CSS = [
    '.u4w{background:var(--bg-elev);border:1px solid var(--border);border-top:3px solid var(--coral);border-radius:var(--radius);padding:18px 20px 20px;margin:22px 0}',
    '.u4w-head{display:flex;align-items:center;gap:10px;margin-bottom:4px;flex-wrap:wrap}',
    '.u4w-chip{font-family:"IBM Plex Mono",monospace;font-size:10px;text-transform:uppercase;letter-spacing:.8px;color:#fff;background:var(--coral);padding:2px 8px;border-radius:4px;font-weight:600}',
    '.u4w-title{font-weight:700;color:var(--text);font-size:15px}',
    '.u4w-prompt{margin:4px 0 14px;font-size:14px;line-height:1.6}',
    '.u4w-body{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:18px;align-items:start}',
    '.u4w-fig{display:grid;gap:12px}',
    '@media(max-width:860px){.u4w-body{grid-template-columns:1fr}}',
    '.u4-svg{width:100%;height:auto;display:block;background:var(--bg);border:1px solid var(--border-soft);border-radius:8px}',
    '.u4-svg text{font-family:Inter,system-ui,sans-serif;font-size:12px;fill:var(--text-2)}',
    '.u4-svg .lab{font-size:12px;fill:var(--muted)}.u4-svg .tick{font-size:12px;fill:var(--muted)}.u4-svg .cap{font-size:11px;fill:var(--muted)}',
    '.u4-svg .reg{font-size:12px;fill:var(--text-2)}.u4-svg .reg-l,.u4-svg .lab-l{fill:var(--amber);font-weight:600;font-size:14px}.u4-svg .reg-s,.u4-svg .lab-s{fill:var(--blue);font-weight:600;font-size:14px}',
    '.u4-svg .reg-a,.u4-svg .lab-a{fill:var(--blue);font-weight:600;font-size:15px}.u4-svg .reg-p,.u4-svg .lab-p,.u4-svg .lab-b{fill:var(--purple);font-weight:600;font-size:15px}',
    '.u4-svg .lab-t{fill:var(--coral);font-weight:700;font-size:13px}.u4-svg .zonelab{font-size:11px;fill:var(--coral)}.u4-svg .banner{font-size:12px;fill:var(--coral);font-weight:600}',
    '.u4-svg .qf{font-size:20px;fill:var(--text);font-weight:600}',
    '.u4-svg .ax{stroke:var(--muted);stroke-width:1.5}.u4-svg .vline{stroke:var(--dim);stroke-width:1.2;stroke-dasharray:4 4}',
    '.u4-svg .zero{stroke:var(--dim);stroke-width:1}.u4-svg .dash{stroke-dasharray:7 5}',
    '.u4-svg .w-a{stroke:var(--blue);stroke-width:2.2}.u4-svg .w-b{stroke:var(--amber);stroke-width:2.2}.u4-svg .w-p{stroke:var(--purple);stroke-width:2.2}',
    '.u4-svg .w-s{stroke:var(--blue);stroke-width:2.2}.u4-svg .w-l{stroke:var(--amber);stroke-width:2.2}.u4-svg .w-c{stroke:var(--teal);stroke-width:2.4}',
    '.u4-svg .w-t{stroke:var(--coral);stroke-width:2}.u4-svg .bnd{stroke:var(--text-2);stroke-width:2;fill:none}.u4-svg .isot{stroke:var(--muted);stroke-width:1.2}',
    '.u4-svg .tieline{stroke:var(--coral);stroke-width:3}.u4-svg .lens{fill:rgba(224,128,0,.10);stroke:none}',
    '.u4-svg .zone{fill:rgba(224,69,69,.35)}',
    '.u4-svg .dot-s{stroke:var(--bg);stroke-width:1.5}.u4-svg .dot-s.fa{fill:var(--blue)}.u4-svg .dot-s.fb{fill:var(--amber)}',
    '.u4-svg .dot-e,.u4-svg .dot-t{fill:var(--coral);stroke:var(--bg);stroke-width:1.5}.u4-svg .dot-alloy{fill:var(--text);stroke:var(--coral);stroke-width:2.5}',
    '.u4w-slider{display:block;margin:0 0 14px}',
    '.u4w-slider-l{display:flex;justify-content:space-between;gap:8px;font-family:"IBM Plex Mono",monospace;font-size:11px;color:var(--text-2);margin-bottom:5px}',
    '.u4w-slider-l b{color:var(--text);font-weight:600}',
    '.u4w-slider input{width:100%;accent-color:var(--coral);cursor:pointer}',
    '.u4w-btns{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}',
    '.u4w-btn{background:var(--surface);border:1px solid var(--border);color:var(--text-2);padding:7px 12px;border-radius:6px;font-family:"IBM Plex Mono",monospace;font-size:11px;cursor:pointer;transition:all .15s}',
    '.u4w-btn:hover:not(:disabled){border-color:var(--coral);color:var(--text)}.u4w-btn:disabled{cursor:default;opacity:.85}',
    '.u4w-btn.right{border-color:var(--teal);color:var(--teal);background:rgba(0,168,122,.10)}.u4w-btn.wrong{border-color:var(--coral);color:var(--coral);background:rgba(224,69,69,.10)}',
    '.u4w-btn.next{margin-top:8px;border-color:var(--coral);color:var(--coral)}',
    '.u4w-readout{background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:10px 14px;font-size:13.5px;line-height:1.55;color:var(--text-2)}',
    '.u4w-row{display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:5px 0;border-bottom:1px dashed var(--border-soft)}',
    '.u4w-row:last-of-type{border-bottom:none}.u4w-row b{color:var(--text);font-weight:600;text-align:right}',
    '.u4w-note{margin:8px 0 2px;font-size:13px;line-height:1.6}',
    '.u4w-pill{display:inline-block;padding:2px 9px;border-radius:999px;border:1px solid var(--pc);color:var(--pc);font-size:12.5px;font-weight:600}',
    '.u4w-bar{display:flex;height:10px;border-radius:5px;overflow:hidden;margin:8px 0 4px;background:var(--surface-2)}.u4w-bar i{display:block;height:100%}',
    '.u4w-barkey{display:flex;gap:14px;font-family:"IBM Plex Mono",monospace;font-size:11px;color:var(--text-2);margin-bottom:6px}',
    '.u4w-barkey em{display:inline-block;width:8px;height:8px;border-radius:2px;margin-right:5px}',
    '.u4w details{margin-top:12px;font-size:13.5px;color:var(--text-2)}',
    '.u4w summary{cursor:pointer;color:var(--coral);font-family:"IBM Plex Mono",monospace;font-size:11px;text-transform:uppercase;letter-spacing:.6px}',
    '.u4w details ul{margin:8px 0 0 18px;font-size:13.5px}',
    '.u4q{background:var(--bg);border:1px solid var(--border-soft);border-radius:8px;padding:16px 18px;min-height:250px}',
    '.u4q-n{font-family:"IBM Plex Mono",monospace;font-size:10px;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);margin-bottom:10px}',
    '.u4q-text{font-size:16px;color:var(--text);margin:6px 0 16px}',
    '.u4q-fig{max-width:360px;margin:0 auto 14px;border:none}',
    '.u4q-opts{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px}',
    '.u4q-why{margin:14px 0 0;padding:10px 12px;border-radius:6px;font-size:13.5px;line-height:1.6}',
    '.u4q-why.ok{background:rgba(0,168,122,.10);border-left:2px solid var(--teal)}.u4q-why.no{background:rgba(224,69,69,.08);border-left:2px solid var(--coral)}',
    '@media print{.u4w{display:none!important}}'
  ].join('\n');

  /* ───────── hydrate ───────── */

  var MAP = { tangent: wTangent, iso: wIso, dial: wDial, eut: wEut, quiz: wQuiz };

  function init() {
    var nodes = document.querySelectorAll('.u4w[data-w]');
    if (!nodes.length) return;
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);
    nodes.forEach(function (n) {
      var fn = MAP[n.getAttribute('data-w')];
      if (!fn || n.getAttribute('data-ready')) return;
      try { fn(n); n.setAttribute('data-ready', '1'); }
      catch (e) { if (window.console) console.error('u4-widgets:', n.getAttribute('data-w'), e); }
    });
  }

  window.U4Widgets = { core: { lowerEnvelope: lowerEnvelope, tieEdges: tieEdges, stateAt: stateAt }, init: init };
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
  }
})();
