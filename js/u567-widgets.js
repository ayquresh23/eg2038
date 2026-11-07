/* EG2038 Units 5-7: interactive widgets.
   Hydrates <div class="solw" data-w="..."> placeholders written into content-data.js.
   Widgets: nuc (nucleation barrier explorer), cs (constitutional supercooling explorer).
   Reuses the .u4w card styles from u4-widgets.js (injected here too, in case Unit 4 is absent).
   No dependencies. Hidden in Revise mode (learn-only). */
(function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var uid = 0;

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
  function clamp(v, lo, hi) { return Math.min(Math.max(v, lo), hi); }

  function Plot(parent, W, H, m, label) {
    this.m = m; this.w = W - m.l - m.r; this.h = H - m.t - m.b;
    this.svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, 'class': 'u4-svg', role: 'img', 'aria-label': label || '' }, parent);
    this.cid = 'u567c' + (++uid);
    var cp = el('clipPath', { id: this.cid }, this.svg);
    el('rect', { x: m.l, y: m.t, width: this.w, height: this.h }, cp);
    this.xr = [0, 1]; this.yr = [0, 1];
  }
  Plot.prototype.X = function (v) { return this.m.l + (v - this.xr[0]) / (this.xr[1] - this.xr[0]) * this.w; };
  Plot.prototype.Y = function (v) { return this.m.t + this.h - (v - this.yr[0]) / (this.yr[1] - this.yr[0]) * this.h; };
  Plot.prototype.text = function (x, y, s, cls, anchor) {
    var t = el('text', { x: x, y: y, 'class': cls || '', 'text-anchor': anchor || 'start' }, this.svg);
    t.innerHTML = s;
    return t;
  };
  Plot.prototype.frame = function (xl, yl) {
    var m = this.m, b = m.t + this.h;
    el('line', { x1: m.l, y1: b, x2: m.l + this.w, y2: b, 'class': 'ax' }, this.svg);
    el('line', { x1: m.l, y1: m.t, x2: m.l, y2: b, 'class': 'ax' }, this.svg);
    if (xl) this.text(m.l + this.w / 2, b + 34, xl, 'lab', 'middle');
    if (yl) {
      var t = this.text(14, m.t + this.h / 2, yl, 'lab', 'middle');
      t.setAttribute('transform', 'rotate(-90 14 ' + (m.t + this.h / 2) + ')');
    }
  };
  Plot.prototype.path = function (cls, clip) {
    var n = el('path', { 'class': cls, fill: 'none' }, this.svg);
    if (clip) n.setAttribute('clip-path', 'url(#' + this.cid + ')');
    return n;
  };
  Plot.prototype.line = function (cls, clip) {
    var n = el('line', { 'class': cls }, this.svg);
    if (clip) n.setAttribute('clip-path', 'url(#' + this.cid + ')');
    return n;
  };
  Plot.prototype.setLine = function (n, x1, y1, x2, y2) {
    n.setAttribute('x1', this.X(x1)); n.setAttribute('y1', this.Y(y1));
    n.setAttribute('x2', this.X(x2)); n.setAttribute('y2', this.Y(y2));
  };
  Plot.prototype.curveD = function (f, x0, x1, n) {
    var s = '', i, x;
    for (i = 0; i <= n; i++) {
      x = x0 + (x1 - x0) * i / n;
      s += (i ? 'L' : 'M') + this.X(x).toFixed(1) + ',' + this.Y(f(x)).toFixed(1);
    }
    return s;
  };

  function card(host, title, prompt) {
    host.classList.add('u4w', 'learn-only');
    host.innerHTML = '<div class="u4w-head"><span class="u4w-chip">Try it live</span><span class="u4w-title">' + title + '</span></div>' +
      '<p class="u4w-prompt">' + prompt + '</p><div class="u4w-body"><div class="u4w-fig"></div><div class="u4w-side"></div></div>';
    return { fig: host.querySelector('.u4w-fig'), side: host.querySelector('.u4w-side') };
  }
  function slider(parent, o) {
    var w = h('label', 'u4w-slider', parent);
    w.innerHTML = '<span class="u4w-slider-l">' + o.label + '<b></b></span><input type="range" min="' + o.min + '" max="' + o.max + '" step="' + o.step + '" value="' + o.value + '" aria-label="' + o.aria + '">';
    var inp = w.querySelector('input'), out = w.querySelector('b');
    function show() { out.innerHTML = o.fmt(+inp.value); }
    inp.addEventListener('input', function () { show(); o.onInput(+inp.value); });
    show();
    return { get: function () { return +inp.value; }, set: function (v) { inp.value = v; show(); } };
  }
  function buttons(parent, items, fn) {
    var wrap = h('div', 'u4w-btns', parent), bs = [];
    items.forEach(function (it, i) {
      var b = h('button', 'u4w-btn', wrap, it.label);
      b.type = 'button';
      b.addEventListener('click', function () { bs.forEach(function (x) { x.classList.remove('right'); }); b.classList.add('right'); fn(it, i); });
      bs.push(b);
    });
    return bs;
  }
  function pill(text, color) { return '<span class="u4w-pill" style="--pc:' + color + '">' + text + '</span>'; }
  function row(k, v) { return '<div class="u4w-row"><span>' + k + '</span><b>' + v + '</b></div>'; }
  function notice(parent, summary, html) {
    var d = h('details', '', parent);
    d.innerHTML = '<summary>' + summary + '</summary>' + html;
  }
  function sci(v, d) {
    if (v === 0) return '0';
    var e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
    if (e >= -2 && e <= 3) return v.toFixed(d == null ? 2 : d);
    return m.toFixed(d == null ? 2 : d) + ' &#215; 10<sup>' + e + '</sup>';
  }

  /* ───────── widget A: nucleation barrier explorer ───────── */

  // Property data: standard textbook values (Porter & Easterling; Turnbull), not from the lecture slides.
  var MATS = {
    Cu: { name: 'Copper', Tm: 1356, gam: 0.177, LV: 1.88e9, Va: 1.18e-29, maxU: 236 },
    Al: { name: 'Aluminium', Tm: 933, gam: 0.093, LV: 1.07e9, Va: 1.66e-29, maxU: 160 }
  };
  var kB = 1.380649e-23;

  function wNuc(host) {
    var ui = card(host, 'Nucleation barrier explorer',
      'Drag the undercooling to see the barrier collapse. Then lower the contact angle to see why a mould wall or an inoculant particle makes nucleation so much easier.');
    var mat = MATS.Cu;
    var P = new Plot(ui.fig, 640, 330, { l: 58, r: 18, t: 16, b: 50 }, 'Free energy of a solid cluster against radius, homogeneous and heterogeneous');
    P.frame('cluster radius r (nm)', '&#916;G (&#215;10&#8315;&#185;&#8313; J)');
    var zero = P.line('zero');
    var gHom = P.path('w-s', true), gHet = P.path('w-c', true);
    var vS = P.line('vline', true);
    var lHom = P.text(0, 0, 'homogeneous', 'lab-s', 'start'), lHet = P.text(0, 0, 'heterogeneous', 'reg', 'start');
    lHet.setAttribute('style', 'fill:var(--teal);font-weight:600;font-size:13px');
    var ticks = el('g', {}, P.svg);

    var side = ui.side;
    buttons(side, [{ label: 'Copper', k: 'Cu' }, { label: 'Aluminium', k: 'Al' }], function (it) { mat = MATS[it.k]; update(); })[0].classList.add('right');
    var sT = slider(side, { label: 'Undercooling &#916;T ', min: 5, max: 400, step: 1, value: 236, aria: 'Undercooling in kelvin', fmt: function (v) { return v + ' K'; }, onInput: update });
    var sA = slider(side, { label: 'Contact angle &#952; ', min: 5, max: 180, step: 1, value: 60, aria: 'Contact angle in degrees', fmt: function (v) { return v + '&#176;'; }, onInput: update });
    var out = h('div', 'u4w-readout', side); out.setAttribute('aria-live', 'polite');
    notice(side, 'What to notice',
      '<ul><li>Double the undercooling and <strong>r*</strong> halves, but <strong>&#916;G*</strong> drops to a quarter (it goes as 1/&#916;T&#178;).</li>' +
      '<li>The critical radius is the <strong>same</strong> for both curves. Only the barrier height changes, by the factor S(&#952;).</li>' +
      '<li>At &#952; = 180&#176; the two curves sit on top of each other: a surface the solid will not wet gives no help at all.</li>' +
      '<li>The barrier is compared with the thermal energy kT. As a rough textbook guide, nucleation becomes noticeable once &#916;G* falls to roughly 60 to 80 kT.</li></ul>' +
      '<p class="u4w-note">Property values are standard textbook figures, not from the lecture slides. The maths is exactly the lecture equations.</p>');

    function update() {
      var dT = sT.get(), th = sA.get() * Math.PI / 180, c = Math.cos(th);
      var S = (2 + c) * (1 - c) * (1 - c) / 4;
      var dGv = -mat.LV * dT / mat.Tm;
      var rs = -2 * mat.gam / dGv;
      var Gs = 16 * Math.PI * Math.pow(mat.gam, 3) / (3 * dGv * dGv);
      var T = mat.Tm - dT, kT = kB * Math.max(T, 1);
      var rn = rs * 1e9, Gu = 1e-19;
      var fHom = function (r) { var m = r * 1e-9; return (4 / 3 * Math.PI * m * m * m * dGv + 4 * Math.PI * m * m * mat.gam) / Gu; };
      var fHet = function (r) { return fHom(r) * S; };
      P.xr = [0, rn * 2.6];
      var top = Gs / Gu;
      P.yr = [-top * 1.25, top * 1.35];
      P.setLine(zero, P.xr[0], 0, P.xr[1], 0);
      gHom.setAttribute('d', P.curveD(fHom, 0, P.xr[1], 140));
      gHet.setAttribute('d', P.curveD(fHet, 0, P.xr[1], 140));
      P.setLine(vS, rn, P.yr[0], rn, P.yr[1]);
      lHom.setAttribute('x', P.X(rn) + 8); lHom.setAttribute('y', P.Y(top) - 6);
      lHet.setAttribute('x', P.X(rn) + 8); lHet.setAttribute('y', Math.min(P.Y(top * S) - 6, P.Y(0) - 22));
      // ticks
      while (ticks.firstChild) ticks.removeChild(ticks.firstChild);
      var step = niceStep(P.xr[1] / 5), x;
      for (x = step; x < P.xr[1] * 0.999; x += step) {
        el('line', { x1: P.X(x), y1: P.m.t + P.h, x2: P.X(x), y2: P.m.t + P.h + 5, 'class': 'ax' }, ticks);
        var tt = el('text', { x: P.X(x), y: P.m.t + P.h + 18, 'class': 'tick', 'text-anchor': 'middle' }, ticks); tt.textContent = +x.toFixed(2);
      }
      var yt = el('text', { x: P.m.l - 6, y: P.Y(top) + 4, 'class': 'tick', 'text-anchor': 'end' }, ticks); yt.textContent = +top.toPrecision(2);
      var y0 = el('text', { x: P.m.l - 6, y: P.Y(0) + 4, 'class': 'tick', 'text-anchor': 'end' }, ticks); y0.textContent = '0';
      el('text', { x: P.X(rn), y: P.m.t + 12, 'class': 'lab-t', 'text-anchor': 'middle' }, ticks).textContent = 'r*';

      var nHom = 4 / 3 * Math.PI * Math.pow(rs, 3) / mat.Va, ratioHom = Gs / kT, ratioHet = Gs * S / kT;
      var guide = function (r) { return r > 80 ? pill('out of reach', 'var(--coral)') : (r > 60 ? pill('borderline', 'var(--amber)') : pill('within reach', 'var(--teal)')); };
      out.innerHTML =
        row('Driving force &#916;G<sub>V</sub>', sci(dGv / 1e6, 1) + ' MJ m<sup>&#8722;3</sup>') +
        row('Critical radius r*', rn.toFixed(2) + ' nm') +
        row('Atoms in a homogeneous nucleus', Math.round(nHom).toLocaleString()) +
        row('Atoms in the cap (&#215; S(&#952;))', Math.max(1, Math.round(nHom * S)).toLocaleString()) +
        row('Shape factor S(&#952;)', S < 0.001 ? S.toExponential(1) : S.toFixed(3)) +
        row('&#916;G*<sub>hom</sub>', sci(Gs, 2) + ' J &#8776; ' + Math.round(ratioHom) + ' kT ' + guide(ratioHom)) +
        row('&#916;G*<sub>het</sub>', sci(Gs * S, 2) + ' J &#8776; ' + (ratioHet < 1 ? ratioHet.toFixed(2) : Math.round(ratioHet)) + ' kT ' + guide(ratioHet)) +
        '<p class="u4w-note">' + mat.name + ': T<sub>m</sub> = ' + mat.Tm + ' K, measured maximum undercooling &#8776; ' + mat.maxU + ' K (lecture table).</p>';
    }
    function niceStep(v) { var p = Math.pow(10, Math.floor(Math.log10(v))), m = v / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; }
    update();
  }

  /* ───────── widget B: constitutional supercooling explorer ───────── */

  function wCS(host) {
    var ui = card(host, 'Steepen the gradient, flatten the front',
      'The orange curve is the liquidus temperature set by the solute pile-up. The red line is the real temperature in the liquid, set by how the casting loses heat. Drag the gradient and watch the supercooled zone and the growth form change.');
    var P = new Plot(ui.fig, 640, 300, { l: 58, r: 18, t: 16, b: 46 }, 'Liquidus temperature and actual temperature ahead of the interface');
    P.xr = [0, 1]; P.yr = [-0.35, 1.25];
    P.frame('distance into the liquid &#8594;', 'temperature');
    var d = 0.16, dT0 = 1; // boundary layer width, solidification range (normalised)
    var TL = function (x) { return dT0 * (1 - Math.exp(-x / d)); };
    var Gc = dT0 / d;
    var zone = el('path', { 'class': 'zone', 'clip-path': 'url(#' + P.cid + ')' }, P.svg);
    var pl = P.path('w-l', true), pa = P.path('w-t', true);
    P.text(P.X(0.98), P.Y(1) - 8, 'liquidus', 'reg-l', 'end');
    var la = P.text(0, 0, 'actual', 'lab-t', 'start');
    P.text(P.m.l - 6, P.Y(0) + 4, 'T<tspan dy="4" font-size="9">3</tspan>', 'tick', 'end');
    P.text(P.m.l - 6, P.Y(1) + 4, 'T<tspan dy="4" font-size="9">1</tspan>', 'tick', 'end');
    pl.setAttribute('d', P.curveD(TL, 0, 1, 160));
    var icon = el('g', { transform: 'translate(0,0)' }, el('svg', { viewBox: '0 0 640 110', 'class': 'u4-svg', role: 'img', 'aria-label': 'Sketch of the growth form' }, ui.fig));

    var side = ui.side;
    var sG = slider(side, { label: 'Actual gradient in the liquid (&#215; critical) ', min: -0.6, max: 1.6, step: 0.02, value: 0.3, aria: 'Actual temperature gradient as a multiple of the critical gradient', fmt: function (v) { return v.toFixed(2); }, onInput: update });
    var out = h('div', 'u4w-readout', side); out.setAttribute('aria-live', 'polite');
    notice(side, 'What to notice',
      '<ul><li>At 1.00 the red line is exactly tangent to the liquidus at the interface. Any steeper and no liquid is supercooled: the front stays <strong>planar</strong>.</li>' +
      '<li>Just below critical, a thin zone appears and the front breaks into <strong>cells</strong>.</li>' +
      '<li>Shallower still, the zone deepens and cells sprout side arms: <strong>columnar dendrites</strong>, the usual case in castings.</li>' +
      '<li>Below zero the liquid is colder than the solid as well. Heat flows into the liquid and crystals grow in all directions: <strong>free dendrites</strong>.</li></ul>' +
      '<p class="u4w-note">The lecture gives the sequence, not numbers. The 1.00 boundary is exact for this model; where cells turn into dendrites (0.55 here) is illustrative only.</p>');

    var REG = [
      { k: 'planar', name: 'Plane front growth', c: 'var(--teal)', txt: 'Liquid ahead is above its liquidus everywhere. A bump melts back.' },
      { k: 'cell', name: 'Cellular growth', c: 'var(--blue)', txt: 'Thin supercooled zone. Bumps survive and grow as an array of cells, each with about six neighbours.' },
      { k: 'col', name: 'Columnar dendritic growth', c: 'var(--purple)', txt: 'Wide supercooled zone. Cell walls become unstable and grow side arms, but heat still leaves through the solid, so growth is directional.' },
      { k: 'free', name: 'Free dendritic growth', c: 'var(--coral)', txt: 'Liquid is thermally and constitutionally undercooled. Heat flows into the liquid in every direction, so dendrite arms grow every way.' }
    ];

    function drawIcon(k) {
      while (icon.firstChild) icon.removeChild(icon.firstChild);
      var g = icon, sx = 120, i, y;
      el('rect', { x: 20, y: 8, width: 100, height: 94, fill: 'rgba(59,130,232,0.14)' }, g);
      var st = 'stroke:var(--blue);stroke-width:2;fill:none';
      if (k === 'planar') { el('line', { x1: sx, y1: 8, x2: sx, y2: 102, style: st }, g); }
      if (k === 'cell') {
        var dd = 'M' + sx + ',8';
        for (i = 0; i < 6; i++) { y = 8 + i * 15.6; dd += ' Q' + (sx + 26) + ',' + (y + 7.8) + ' ' + sx + ',' + (y + 15.6); }
        el('path', { d: dd, style: st }, g);
      }
      if (k === 'col') {
        for (i = 0; i < 4; i++) {
          y = 18 + i * 25;
          el('line', { x1: sx, y1: y, x2: sx + 120, y2: y, style: st }, g);
          for (var j = 1; j < 6; j++) {
            el('line', { x1: sx + j * 20, y1: y, x2: sx + j * 20 + 4, y2: y - 7, style: st }, g);
            el('line', { x1: sx + j * 20, y1: y, x2: sx + j * 20 + 4, y2: y + 7, style: st }, g);
          }
        }
      }
      if (k === 'free') {
        el('line', { x1: sx, y1: 8, x2: sx, y2: 102, style: st }, g);
        var cx = 300, cy = 55;
        [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (v) {
          el('line', { x1: cx, y1: cy, x2: cx + v[0] * 44, y2: cy + v[1] * 44, style: st }, g);
          for (var j = 1; j < 4; j++) {
            var px = cx + v[0] * j * 11, py = cy + v[1] * j * 11, L = 10 - j * 2;
            el('line', { x1: px, y1: py, x2: px + v[1] * L, y2: py + v[0] * L, style: st }, g);
            el('line', { x1: px, y1: py, x2: px - v[1] * L, y2: py - v[0] * L, style: st }, g);
          }
        });
        var tx = el('text', { x: 300, y: 108, 'class': 'cap', 'text-anchor': 'middle' }, g); tx.textContent = 'crystal growing freely in the melt';
      }
      var a = el('text', { x: 70, y: 60, 'class': 'cap', 'text-anchor': 'middle' }, g); a.textContent = 'solid';
      var b = el('text', { x: 560, y: 60, 'class': 'cap', 'text-anchor': 'middle' }, g); b.textContent = 'liquid';
    }

    var last = null;
    function update() {
      var gm = sG.get(), G = gm * Gc;
      var Ta = function (x) { return G * x; };
      pa.setAttribute('d', P.curveD(Ta, 0, 1, 2));
      var xe = 1, top = '', bot = [], i, x, depth = 0;
      for (i = 1; i <= 200; i++) { x = i / 200; if (Ta(x) >= TL(x)) { xe = x; break; } }
      if (gm < 1) {
        for (i = 0; i <= 120; i++) { x = xe * i / 120; top += (i ? 'L' : 'M') + P.X(x).toFixed(1) + ',' + P.Y(TL(x)).toFixed(1); depth = Math.max(depth, TL(x) - Ta(x)); }
        for (i = 120; i >= 0; i--) { x = xe * i / 120; top += 'L' + P.X(x).toFixed(1) + ',' + P.Y(Ta(x)).toFixed(1); }
        zone.setAttribute('d', top + 'Z');
      } else zone.setAttribute('d', '');
      var ly = clamp(Ta(0.7), P.yr[0] + 0.08, P.yr[1] - 0.05);
      la.setAttribute('x', P.X(0.7) + 6); la.setAttribute('y', P.Y(ly) + (gm < 0 ? -8 : 16));
      var r = gm >= 1 ? REG[0] : gm >= 0.55 ? REG[1] : gm > 0 ? REG[2] : REG[3];
      if (r !== last) { drawIcon(r.k); last = r; }
      out.innerHTML = row('Growth form', pill(r.name, r.c)) +
        row('Supercooled zone width', gm >= 1 ? 'none' : (gm <= 0 ? 'whole melt ahead' : Math.round(xe * 100) + '% of plot')) +
        row('Deepest undercooling', gm >= 1 ? '0' : (depth / dT0 * 100).toFixed(0) + '% of solidification range') +
        '<p class="u4w-note">' + r.txt + '</p>';
    }
    update();
  }

  /* ───────── styles (same rules as u4-widgets.js) ───────── */
  var CSS = /*__CSS__*/[
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

  var MAP = { nuc: wNuc, cs: wCS };

  function init() {
    var nodes = document.querySelectorAll('.solw[data-w]');
    if (!nodes.length) return;
    if (CSS && !document.getElementById('u567-css')) {
      var st = document.createElement('style');
      st.id = 'u567-css';
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    nodes.forEach(function (n) {
      var fn = MAP[n.getAttribute('data-w')];
      if (!fn || n.getAttribute('data-ready')) return;
      try { fn(n); n.setAttribute('data-ready', '1'); }
      catch (e) { if (window.console) console.error('u567-widgets:', n.getAttribute('data-w'), e); }
    });
  }

  window.U567Widgets = { init: init };
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
  }
})();
