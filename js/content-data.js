// EG2038 Study Site — content data
// Schema documented in study-site-core/js/render.js
window.SITE_CONFIG = {
  "slug": "eg2038",
  "topicIds": ["u1", "u2"],
  "navOrder": ["u1", "u2"],
  "topicColors": {
    "u1": "#00a87a",
    "u2": "#3b82e8"
  },
  "topicLabels": {
    "u1": "Intro to Thermodynamics",
    "u2": "Solution Thermodynamics"
  }
};

window.SITE_CONTENT = {
  "home": {
    "tag": "Microstructure Evolution & Control in Metallic Materials — Swansea University",
    "title": "EG2038 Study Site",
    "subtitle": "Thermodynamics and kinetics as the twin forces behind every microstructure: why phases form, when they're stable, and how alloying, processing and heat treatment control the properties that follow. Built out unit by unit as the module runs.",
    "stats": [
      { "value": "2 of 10", "label": "Units built" },
      { "value": "47", "label": "Terms" },
      { "value": "15", "label": "Formulas" },
      { "value": "18", "label": "Exam Traps" }
    ],
    "extra": [
      { "type": "raw", "html": "<h2>Quick reference</h2>" },
      {
        "type": "raw",
        "html": "<div class=\"card-grid\">\n      <div class=\"topic-card\" onclick=\"showSection('formulas')\" style=\"--bar-color:#00a87a\">\n        <div class=\"topic-num\">Reference</div>\n        <div class=\"topic-title\">📐 Formula Sheet</div>\n        <div class=\"topic-desc\">Every equation covered so far. Variables defined, units flagged.</div>\n      </div>\n      <div class=\"topic-card\" onclick=\"showSection('glossary')\" style=\"--bar-color:#2fa15c\">\n        <div class=\"topic-num\">Reference</div>\n        <div class=\"topic-title\">📚 Glossary</div>\n        <div class=\"topic-desc\">47 terms from Units 1 and 2. Instant search, topic filter, and flashcard mode.</div>\n      </div>\n      <div class=\"topic-card\" onclick=\"showSection('traps')\" style=\"--bar-color:#e04545\">\n        <div class=\"topic-num\">Reference</div>\n        <div class=\"topic-title\">⚠️ MCQ Traps</div>\n        <div class=\"topic-desc\">Plausible-but-wrong claims the exam uses. Know what's actually true.</div>\n      </div>\n    </div>"
      }
    ]
  },
  "topics": [
    {
      "id": "u1",
      "numLabel": "Unit 1 of 10",
      "title": "Introduction to Thermodynamics",
      "subtitle": "Microstructure is the most fundamental lever for controlling a metal's properties. This unit builds the thermodynamic vocabulary — energy, entropy, Gibbs free energy — needed to predict which microstructures are even possible, before Units 2-5 show how to read that off a phase diagram.",
      "sections": [
        {
          "type": "toc",
          "title": "In this unit",
          "items": [
            { "href": "#u1-why", "label": "Why microstructure matters" },
            { "href": "#u1-thermo-kinetics", "label": "Thermodynamics vs kinetics" },
            { "href": "#u1-stability", "label": "Stability, metastability and activation energy" },
            { "href": "#u1-terminology", "label": "Terminology" },
            { "href": "#u1-firstlaw", "label": "First law of thermodynamics" },
            { "href": "#u1-enthalpy", "label": "Enthalpy" },
            { "href": "#u1-entropy", "label": "Entropy & the second law" },
            { "href": "#u1-gibbs", "label": "Gibbs free energy" },
            { "href": "#u1-measuring", "label": "Measuring the parameters" }
          ]
        },

        { "type": "h2", "id": "u1-why", "text": "Why Microstructure Matters" },
        {
          "type": "p",
          "text": "Different applications need different properties from the same base metal, and microstructure is the most fundamental way to control property.",
          "class": ""
        },
        {
          "type": "example",
          "label": "Worked example — same element, opposite behaviour",
          "q": "Pure Al is used for overhead power cable conductors. An Al-Si alloy is used for engine blocks. Both are aluminium-based. Why are their properties so different?",
          "steps": [
            "Overhead cable: pure Al, essentially single-phase — soft and ductile, easy to draw into wire and resists cracking as it flexes",
            "Engine block: Al-Si alloy — the Si phase makes the microstructure hard and rigid, able to hold its shape under load and heat"
          ],
          "answer": "Same base element, different microstructure, opposite mechanical behaviour — composition alone decides it here."
        },
        {
          "type": "h3",
          "text": "Three ways to control microstructure (and therefore property)"
        },
        {
          "type": "cardgrid",
          "cards": [
            { "title": "Alloying", "color": "#00a87a", "text": "Changing composition. Pure Al (soft, ductile) vs Al-Si alloy (hard, rigid) — same base element, different phases present." },
            { "title": "Processing", "color": "#00a87a", "text": "Changing how the metal is worked. A Damascus sword's legendary properties came from forging and folding technique, not a different alloy." },
            { "title": "Heat treatment", "color": "#00a87a", "text": "A type of secondary processing that changes properties without altering the manufactured geometry. Example: Al-Cu aircraft fuselage alloy is heat treated for strength." }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Stability matters as much as optimisation",
          "html": "<p>Producing the optimum microstructure for an application isn't enough on its own — that microstructure also has to stay <strong>stable under the operating environment</strong>. Ti, Ni, steel and Al alloys all lose specific strength differently as temperature rises, which is why a jet engine uses Ni-superalloy turbine blades in the hottest section and Ti-alloy blades further back — each alloy's high-temperature strength curve decides where it can be used.</p>"
        },

        { "type": "h2", "id": "u1-thermo-kinetics", "text": "Thermodynamics vs Kinetics" },
        {
          "type": "p",
          "text": "What fundamentally dictates microstructure formation? Two separate questions, and keeping them separate is the single most important idea in this unit.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Two different questions",
          "html": "<ul><li><strong>Thermodynamics</strong> — tells us <em>if</em> a change is feasible</li><li><strong>Kinetics</strong> — tells us <em>how fast</em> the change happens</li></ul><p style=\"margin-top:8px\">Thermodynamics never tells you about speed. A transformation can be thermodynamically certain and still take geological time.</p>"
        },
        {
          "type": "example",
          "label": "Worked example — iron, haematite and rust",
          "q": "Iron exists in nature mainly as haematite (an oxide) — its most stable state. Iron metal is extracted from ore and used as steel or cast iron — an unstable state. Left exposed, that steel eventually rusts back to oxide.",
          "steps": [
            "Thermodynamics tells us Fe <strong>will</strong> return to its oxide form (ΔG < 0 for the reaction)",
            "Kinetics tells us that process will be <strong>slow</strong> — years, not seconds"
          ],
          "answer": "A bridge built from steel isn't thermodynamically stable — it's kinetically slow to fail. That's the difference the exam expects you to state precisely."
        },
        {
          "type": "p",
          "text": "A transformation happens only when the associated energy change is negative (ΔE = E<sub>final</sub> − E<sub>initial</sub> &lt; 0); kinetics then decides how fast it proceeds. Everyday analogy: unstable = running (any disturbance moves it further away), metastable = sitting (stable to a small push, not a large one), stable = lying down (the lowest-energy resting state). All systems move towards equilibrium <em>if undisturbed</em>.",
          "class": "learn-only"
        },

        { "type": "h2", "id": "u1-stability", "text": "Stability, Metastability and Activation Energy" },
        {
          "type": "p",
          "text": "Plotting free energy against atomic arrangement gives an energy landscape: a global minimum (stable), and possible local minima (metastable) separated from it by an energy hill.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Reading the energy landscape",
          "html": "<ul><li><strong>Driving force</strong> — the vertical drop in free energy from the metastable state down to the stable state. This is what makes the transformation thermodynamically favourable.</li><li><strong>Activation energy barrier</strong> — the energy hill that has to be climbed to get from metastable to stable. Needs an external supply of energy to overcome.</li></ul><p style=\"margin-top:8px\">A metastable state does <strong>not</strong> automatically return to the stable state just because it's thermodynamically favourable — the barrier has to be overcome first.</p>"
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n          <div class=\"concept-box-title\">Diagram — the free energy landscape</div>\n          <svg viewBox=\"0 0 640 320\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Free energy plotted against arrangement of atoms, showing a metastable well, an unstable peak, a deeper stable well, activation energy, and driving force\">\n            <line x1=\"55\" y1=\"20\" x2=\"55\" y2=\"280\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n            <polygon points=\"55,14 50,24 60,24\" fill=\"#5e5e6c\"/>\n            <text x=\"32\" y=\"150\" fill=\"#90909c\" font-size=\"13\" font-family=\"Inter,system-ui,sans-serif\" transform=\"rotate(-90 32 150)\" text-anchor=\"middle\">free energy, G</text>\n            <line x1=\"55\" y1=\"280\" x2=\"605\" y2=\"280\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n            <polygon points=\"612,280 602,275 602,285\" fill=\"#5e5e6c\"/>\n            <text x=\"330\" y=\"305\" fill=\"#90909c\" font-size=\"13\" font-family=\"Inter,system-ui,sans-serif\" text-anchor=\"middle\">arrangement of atoms</text>\n            <path d=\"M75,150 C110,150 130,195 165,195 C200,195 230,75 280,75 C330,75 375,255 425,255 C470,255 520,232 585,228\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"2.5\"/>\n            <line x1=\"165\" y1=\"195\" x2=\"425\" y2=\"195\" stroke=\"#5e5e6c\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n            <line x1=\"280\" y1=\"195\" x2=\"280\" y2=\"79\" stroke=\"#8855f5\" stroke-width=\"2\" marker-start=\"url(#arrEnd)\" marker-end=\"url(#arrStart)\"/>\n            <text x=\"292\" y=\"135\" fill=\"#8855f5\" font-size=\"13\" font-weight=\"600\" font-family=\"Inter,system-ui,sans-serif\">activation energy</text>\n            <line x1=\"425\" y1=\"195\" x2=\"425\" y2=\"254\" stroke=\"#00a87a\" stroke-width=\"2\" marker-start=\"url(#arrEndG)\" marker-end=\"url(#arrStartG)\"/>\n            <text x=\"437\" y=\"230\" fill=\"#00a87a\" font-size=\"13\" font-weight=\"600\" font-family=\"Inter,system-ui,sans-serif\">driving force</text>\n            <defs>\n              <marker id=\"arrEnd\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#8855f5\"/></marker>\n              <marker id=\"arrStart\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#8855f5\"/></marker>\n              <marker id=\"arrEndG\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#00a87a\"/></marker>\n              <marker id=\"arrStartG\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#00a87a\"/></marker>\n            </defs>\n            <circle cx=\"165\" cy=\"195\" r=\"5.5\" fill=\"#d89800\" stroke=\"#0c0c10\" stroke-width=\"1.5\"/>\n            <text x=\"165\" y=\"216\" fill=\"#d89800\" font-size=\"12.5\" font-weight=\"600\" font-family=\"Inter,system-ui,sans-serif\" text-anchor=\"middle\">A — metastable</text>\n            <circle cx=\"280\" cy=\"75\" r=\"5.5\" fill=\"#e04545\" stroke=\"#0c0c10\" stroke-width=\"1.5\"/>\n            <text x=\"280\" y=\"58\" fill=\"#e04545\" font-size=\"12.5\" font-weight=\"600\" font-family=\"Inter,system-ui,sans-serif\" text-anchor=\"middle\">B — unstable</text>\n            <circle cx=\"425\" cy=\"255\" r=\"5.5\" fill=\"#00a87a\" stroke=\"#0c0c10\" stroke-width=\"1.5\"/>\n            <text x=\"425\" y=\"276\" fill=\"#00a87a\" font-size=\"12.5\" font-weight=\"600\" font-family=\"Inter,system-ui,sans-serif\" text-anchor=\"middle\">C — stable</text>\n          </svg>\n          <p style=\"margin-top:14px;margin-bottom:0\">Climbing from A to B costs the <strong style=\"color:#8855f5\">activation energy</strong>. Falling from A to C releases the <strong style=\"color:#00a87a\">driving force</strong> — the net energy drop that makes A → C thermodynamically favourable. Diamond sits at A; graphite sits at C; B is the enormous, practically unreachable barrier between them.</p>\n        </div>"
        },
        {
          "type": "example",
          "label": "Worked example — diamond and graphite",
          "q": "Graphite is the thermodynamically stable form of carbon at room temperature and pressure. Diamond is metastable. Why doesn't your diamond ring spontaneously turn into pencil lead?",
          "steps": [
            "Diamond sits in a deep local-minimum (metastable) well on the free energy landscape",
            "The activation energy barrier between diamond and graphite is enormous at room temperature — nowhere near enough thermal energy is available to climb it"
          ],
          "answer": "Diamond is thermodynamically unstable relative to graphite but kinetically frozen — for all practical purposes, permanently."
        },

        { "type": "h2", "id": "u1-terminology", "text": "Terminology" },
        {
          "type": "h3",
          "text": "General thermodynamics"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "html": "<ul><li><strong>System</strong> — the macroscopic part of the universe being investigated</li><li><strong>Surrounding</strong> — whatever is around the system and interacts with it</li><li><strong>Isolated system</strong> — does not interact with the surrounding at all</li><li><strong>Open system</strong> — exchanges both mass and energy with the surrounding</li><li><strong>Closed system</strong> — exchanges energy but not mass with the surrounding</li><li><strong>State variables</strong> — physical quantities defining the state of the system (T, P, V, C, etc.)</li><li><strong>Intensive variables</strong> — independent of system size (T, P, C)</li><li><strong>Extensive variables</strong> — depend on system size (V, mass, energy)</li></ul>"
        },
        {
          "type": "h3",
          "text": "Metallurgical thermodynamics"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "html": "<ul><li><strong>System</strong> — the alloy system, involving all phases</li><li><strong>Phase</strong> — a portion of the system with homogeneous properties and composition, physically distinct from the rest</li><li><strong>Component</strong> — the minimum number of chemical species that builds up all phases in the system</li><li><strong>Composition</strong> — relative quantities of each component in the system</li><li><strong>Microstructure</strong> — nature, morphology, proportion and distribution of the phases in the alloy</li><li><strong>Grain</strong> — a volume of phase distinguishable from the rest by its crystal orientation</li><li><strong>(Equilibrium) phase diagram</strong> — a composition-vs-temperature plot identifying the equilibrium phases in a system</li></ul>"
        },
        {
          "type": "example",
          "label": "Worked example — Al-16wt%Si micrograph",
          "q": "A micrograph of an Al-16wt%Si alloy shows two visibly distinct regions sitting on top of its Al-Si phase diagram.",
          "steps": [
            "The two visibly distinct regions in the micrograph are the <strong>phases</strong>",
            "Al and Si are the <strong>components</strong>",
            "\"16wt%Si\" is the <strong>composition</strong>"
          ],
          "answer": "The full composition-temperature plot behind the micrograph is the <strong>phase diagram</strong> — every term maps onto a real, visible feature."
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "html": "<p><strong>Phase transformation:</strong> conversion of one or more phases into a new phase or mixture of phases, occurring to increase phase stability.</p><p style=\"margin-top:8px\"><strong>Equilibrium:</strong> a state of stability where no further change is possible under the specified conditions. All systems move towards equilibrium if undisturbed.</p>"
        },

        { "type": "h2", "id": "u1-firstlaw", "text": "First Law of Thermodynamics" },
        {
          "type": "p",
          "text": "Relates heat, work and internal energy of a system.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "",
          "html": "<ul><li><strong>Heat, Q</strong> — energy in transit; transfer of thermal energy without involving mechanical work</li><li><strong>Temperature, T</strong> — measure of the average kinetic energy of atoms/molecules in the system</li><li><strong>Work, W</strong> — energy transfer by the action of a force; W = PΔV, where P is pressure and ΔV is the change in volume</li><li><strong>Internal energy, U</strong> — total potential energy (bonding, electrostatic interaction) plus kinetic energy (motion) of the atoms/molecules</li></ul>"
        },
        {
          "type": "formulablock",
          "name": "First law of thermodynamics",
          "eqs": [
            "Q = \\Delta U + W \\qquad \\Delta U = Q - P\\Delta V"
          ],
          "note": "<strong>Sign convention:</strong> heat entering the system is positive (ΔQ &gt; 0). Work done <em>by</em> the system is positive (PΔV &gt; 0)."
        },

        { "type": "h2", "id": "u1-enthalpy", "text": "Enthalpy" },
        {
          "type": "p",
          "text": "Enthalpy (H) is a measure of the heat content of the system.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Enthalpy",
          "eqs": [
            "H = U + PV",
            "\\Delta H = \\Delta U + P\\Delta V = Q \\quad \\text{(at constant P)}",
            "\\Delta H \\approx \\Delta U \\quad \\text{(solid/liquid transformations, } \\Delta V \\text{ small)}"
          ]
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Open question",
          "html": "<p>Nature prefers a low internal energy (strong bonding, order). So why does a solid ever melt, or a liquid boil? Enthalpy alone can't answer this — the answer needs entropy, next.</p>"
        },

        { "type": "h2", "id": "u1-entropy", "text": "Entropy & the Second Law" },
        {
          "type": "p",
          "text": "Entropy (S) is a measure of the disorder in the system.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Second law of thermodynamics",
          "html": "<p>Entropy of a (closed) system <strong>increases</strong> in a spontaneous (irreversible) process. The entropy of the universe is increasing with time.</p>"
        },
        {
          "type": "p",
          "text": "Nature prefers order (low internal energy), but disorder (high entropy) is far more prevalent because it is far more probable, especially once atoms have thermal mobility. Balancing these two competing tendencies — low energy vs high entropy — is exactly what Gibbs free energy does.",
          "class": ""
        },

        { "type": "h2", "id": "u1-gibbs", "text": "Gibbs Free Energy" },
        {
          "type": "p",
          "text": "The single quantity that decides whether a phase transformation will happen — the central result of this unit.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Gibbs free energy",
          "eqs": [
            "G = H - TS"
          ],
          "vars": [
            { "symbol": "H", "desc": "enthalpy (heat content)" },
            { "symbol": "S", "desc": "entropy (disorder)" },
            { "symbol": "T", "desc": "absolute temperature of the system" }
          ],
          "note": "\"Free\" refers to the energy <strong>available to do useful (non-PΔV) work</strong>."
        },
        {
          "type": "formulablock",
          "name": "Equilibrium and transformation conditions",
          "eqs": [
            "\\text{Equilibrium: } G_{final} - G_{initial} = \\Delta G = 0",
            "\\text{Transformation occurs if: } \\Delta G = \\Delta H - T\\Delta S < 0"
          ],
          "note": "Equilibrium (stable) state has the <strong>lowest G</strong>. This is a necessary condition, not a speed — thermodynamics still says nothing about how fast."
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Resolving the melting question",
          "html": "<p>Enthalpy dominates stability at low temperature (small TΔS term); entropy dominates at high temperature (large TΔS term). That's why an ordered, low-energy solid is stable at low T, but a disordered, high-entropy liquid or gas becomes favoured as T rises — the TΔS term eventually outweighs the enthalpy penalty and ΔG turns negative.</p>"
        },

        { "type": "h2", "id": "u1-measuring", "text": "Measuring the Thermodynamic Parameters" },
        {
          "type": "p",
          "text": "H, S and G aren't measured directly — they're built up from heat capacity, which is directly measurable with a calorimeter (commonly DSC — differential scanning calorimetry).",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Heat capacity",
          "eqs": [
            "C = \\frac{Q}{\\Delta T} \\qquad C_P = \\left(\\frac{\\partial Q}{\\partial T}\\right)_P = \\left(\\frac{\\partial H}{\\partial T}\\right)_P"
          ],
          "vars": [
            { "symbol": "C", "desc": "quantity of heat required to raise the temperature of a substance by one degree" },
            { "symbol": "C_P", "desc": "specific heat capacity at constant pressure (specific = per unit mass)" }
          ]
        },
        {
          "type": "formulablock",
          "name": "\u0394H and \u0394S from heat capacity",
          "eqs": [
            "\\Delta H = \\int C_P \\, dT \\qquad \\Delta S = \\int \\frac{C_P}{T} \\, dT"
          ],
          "note": "<strong>Reference points (the convention):</strong> H = 0 at 298 K (room temperature); S = 0 at 0 K (absolute zero), from the <strong>third law</strong> of thermodynamics. Absolute values of H, S, G aren't physically meaningful on their own — only the <em>changes</em> (ΔH, ΔS, ΔG for large changes; ∂H, ∂S, ∂G for small ones) matter for predicting transformations. C<sub>P</sub> tends towards a limit of roughly 3R at high temperature for a pure metal."
        },

        { "type": "h2", "id": "", "text": "Unit 1 essentials" },
        {
          "type": "conceptbox",
          "variant": "",
          "titleLearn": "Quick recap",
          "titleRevise": "EXAM CHEAT SHEET",
          "html": "<ul><li>Thermodynamics = <em>if</em> feasible; kinetics = <em>how fast</em>. Never confuse the two.</li><li>Stable = global minimum G; metastable = local minimum, separated from stable by an activation energy barrier (diamond → graphite)</li><li>A transformation occurs only if ΔG &lt; 0; ΔG = 0 at equilibrium</li><li>G = H − TS. Enthalpy dominates at low T, entropy dominates at high T — this is why solids melt</li><li>First law: Q = ΔU + PΔV. Heat in = +ve, work done by system = +ve</li><li>ΔH ≈ ΔU for solid/liquid transformations (ΔV small)</li><li>Reference points: H = 0 at 298 K; S = 0 at 0 K (third law) — only the <em>changes</em> in H, S, G matter, not their absolute values</li><li>C<sub>P</sub> is what's actually measured (by DSC); ΔH and ΔS are then obtained by integrating C<sub>P</sub> over T</li></ul>"
        }
      ],
      "essentialsTitle": null,
      "essentialsHeading": null,
      "essentials": null,
      "desc": "Why microstructure matters, thermodynamics vs kinetics, stability & metastability, general/metallurgical terminology, the first and second laws, enthalpy, entropy, Gibbs free energy, and how the parameters are measured.",
      "difficulty": "Medium",
      "readTime": "25 min",
      "color": "#00a87a"
    },
    {
      "id": "u2",
      "numLabel": "Unit 2 of 10",
      "title": "Solution Thermodynamics",
      "subtitle": "Alloys are mixtures, so before you can read a phase diagram you need to know what mixing does to free energy. This unit builds that up from ideal solutions, to atoms with bonding preferences, to real alloys, and finishes with the chemical potential that Unit 3 uses to construct phase diagrams.",
      "sections": [
        {
          "type": "toc",
          "title": "In this unit",
          "items": [
            {
              "href": "#u2-big",
              "label": "The big picture"
            },
            {
              "href": "#u2-setup",
              "label": "Mixing A and B"
            },
            {
              "href": "#u2-ideal",
              "label": "Ideal solutions"
            },
            {
              "href": "#u2-regular",
              "label": "Regular solutions"
            },
            {
              "href": "#u2-real",
              "label": "Real solutions"
            },
            {
              "href": "#u2-mu",
              "label": "Chemical potential"
            }
          ]
        },
        {
          "type": "h2",
          "id": "u2-big",
          "text": "The Big Picture"
        },
        {
          "type": "p",
          "text": "Shuffle red and blue cards together and they mix. Nobody has ever watched them un-shuffle themselves. Metals behave the same way: put atoms A and B together (Cu and Zn in brass, Fe and C in steel) and the question is whether mixing lowers the free energy, and by how much. Every idea in this unit is a version of that one question.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "html": "<p>\\(\\Delta G_{\\mathrm{mix}} = \\Delta H_{\\mathrm{mix}} - T\\Delta S_{\\mathrm{mix}}\\)</p><p style=\"margin-top:8px\">Mixing always raises entropy. So whether atoms mix freely, cluster together or pair up comes down to the sign and size of \\(\\Delta H_{\\mathrm{mix}}\\): how the atoms feel about each other's company.</p>",
          "title": "The one idea to hold onto"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "1. Ideal solutions",
              "color": "#3b82e8",
              "text": "Atoms are indifferent to their neighbours. Entropy does all the work."
            },
            {
              "title": "2. Regular solutions",
              "color": "#3b82e8",
              "text": "Atoms have bonding preferences. Enthalpy now fights or helps entropy."
            },
            {
              "title": "3. Real solutions",
              "color": "#3b82e8",
              "text": "Size mismatch and brand new phases. Where the simple models stop working."
            },
            {
              "title": "4. Chemical potential",
              "color": "#3b82e8",
              "text": "Each component's share of the free energy. The tool Unit 3 uses to build phase diagrams."
            }
          ]
        },
        {
          "type": "h2",
          "id": "u2-setup",
          "text": "Mixing A and B"
        },
        {
          "type": "p",
          "text": "Take one mole of alloy made of \\(X_A\\) moles of A and \\(X_B\\) moles of B. These are mole fractions, so they add up to 1. From here on, every free energy is per mole (molar).",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Mole fractions",
          "eqs": [
            "X_A + X_B = 1"
          ]
        },
        {
          "type": "p",
          "text": "<strong>Step 1: before mixing.</strong> Two separate lumps, pure A and pure B. The total free energy is just the weighted average of the two.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Free energy before mixing",
          "eqs": [
            "G_1 = X_A G_A + X_B G_B"
          ],
          "vars": [
            {
              "symbol": "\\(G_A, G_B\\)",
              "desc": "molar free energies of pure A and pure B"
            }
          ],
          "note": "On a graph of \\(G\\) against \\(X_B\\), this is a straight line from \\(G_A\\) (at \\(X_B = 0\\)) to \\(G_B\\) (at \\(X_B = 1\\))."
        },
        {
          "type": "p",
          "text": "<strong>Step 2: after mixing.</strong> Let the atoms form one homogeneous solid solution. The free energy shifts by \\(\\Delta G_{\\mathrm{mix}}\\).",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Free energy after mixing",
          "eqs": [
            "G_2 = G_1 + \\Delta G_{\\mathrm{mix}}",
            "\\Delta G_{\\mathrm{mix}} = \\Delta H_{\\mathrm{mix}} - T\\Delta S_{\\mathrm{mix}}"
          ],
          "vars": [
            {
              "symbol": "\\(\\Delta H_{\\mathrm{mix}}\\)",
              "desc": "heat of solution: heat released or absorbed as the bonds change"
            },
            {
              "symbol": "\\(\\Delta S_{\\mathrm{mix}}\\)",
              "desc": "entropy of mixed state minus entropy of unmixed state"
            }
          ],
          "note": "Mixing always increases entropy, so \\(\\Delta S_{\\mathrm{mix}} > 0\\). The enthalpy term decides everything else."
        },
        {
          "type": "h2",
          "id": "u2-ideal",
          "text": "Ideal Solutions"
        },
        {
          "type": "p",
          "text": "Picture two groups of identical-looking people mixing at a party, with nobody caring who they stand next to. That is an ideal solution.",
          "class": "learn-only"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "html": "<p>A and B have the same crystal structure, and A-A, B-B and A-B bonds all have the <strong>same energy</strong>. Swapping neighbours changes no bond energy, so:</p><p>\\(\\Delta H_{\\mathrm{mix}} = 0 \\quad\\Rightarrow\\quad \\Delta G_{\\mathrm{mix}} = -T\\Delta S_{\\mathrm{mix}}\\)</p><p style=\"margin-top:8px\">Entropy is the only thing driving the mixing.</p>",
          "title": "What makes a solution ideal"
        },
        {
          "type": "h3",
          "text": "Where the entropy comes from"
        },
        {
          "type": "p",
          "text": "Entropy has a thermal part (energy shared between atoms) and a configurational part (the number of ways to arrange the atoms). At constant \\(T\\) only the configurational part changes, so \\(\\Delta S_{\\mathrm{mix}}\\) is found by counting arrangements with Boltzmann's equation.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Boltzmann equation",
          "eqs": [
            "S = k\\ln\\omega"
          ],
          "vars": [
            {
              "symbol": "\\(\\omega\\)",
              "desc": "number of ways of arranging the atoms"
            },
            {
              "symbol": "\\(k\\)",
              "desc": "Boltzmann's constant"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Counting the arrangements",
          "eqs": [
            "\\text{Before mixing: } \\omega = 1 \\;\\Rightarrow\\; S_1 = k\\ln 1 = 0",
            "\\text{After mixing: } \\omega = \\frac{(N_A + N_B)!}{N_A!\\,N_B!}"
          ],
          "vars": [
            {
              "symbol": "\\(N_A, N_B\\)",
              "desc": "numbers of A and B atoms: \\(N_A = X_A N_a\\) and \\(N_B = X_B N_a\\)"
            },
            {
              "symbol": "\\(N_a\\)",
              "desc": "Avogadro's number"
            }
          ],
          "note": "Before mixing there is only one arrangement (all A on one side, all B on the other). After mixing there are enormous numbers of them."
        },
        {
          "type": "p",
          "text": "Simplifying with Stirling's approximation gives the result below. You need to know the result, not the algebra.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Entropy of mixing (ideal)",
          "eqs": [
            "\\Delta S_{\\mathrm{mix}} = -R\\left(X_A \\ln X_A + X_B \\ln X_B\\right)",
            "R = k N_a"
          ],
          "vars": [
            {
              "symbol": "\\(R\\)",
              "desc": "universal gas constant"
            }
          ],
          "note": "\\(X_A\\) and \\(X_B\\) are both less than 1, so their logs are negative and \\(\\Delta S_{\\mathrm{mix}}\\) is <strong>always positive</strong>."
        },
        {
          "type": "formulablock",
          "name": "Free energy of mixing (ideal)",
          "eqs": [
            "\\Delta G_{\\mathrm{mix}} = RT\\left(X_A \\ln X_A + X_B \\ln X_B\\right)",
            "G_2 = X_A G_A + X_B G_B + RT\\left(X_A \\ln X_A + X_B \\ln X_B\\right)"
          ],
          "note": "This is always <strong>negative</strong>, so ideal solutions always form spontaneously. It is zero at the pure ends (nothing to mix), most negative at \\(X_B = 0.5\\) (maximum randomness), and gets <strong>more negative as T rises</strong> because the \\(-T\\Delta S_{\\mathrm{mix}}\\) term grows."
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: free energy of an ideal solution</div>\n<svg viewBox=\"0 0 640 330\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Molar free energy against composition for an ideal solution: a straight line G1 between pure A and pure B, and a curve G2 sitting below it by the free energy of mixing\"><defs><marker id=\"id1E\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#00a87a\"/></marker><marker id=\"id1S\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#00a87a\"/></marker></defs>\n<line x1=\"90\" y1=\"30\" x2=\"90\" y2=\"270\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<polygon points=\"90,24 85,34 95,34\" fill=\"#5e5e6c\"/>\n<line x1=\"90\" y1=\"270\" x2=\"590\" y2=\"270\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<polygon points=\"597,270 587,265 587,275\" fill=\"#5e5e6c\"/>\n<text x=\"340\" y=\"308\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\"></text>\n<text x=\"42\" y=\"150\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" transform=\"rotate(-90 42 150)\" font-family=\"Inter,system-ui,sans-serif\">molar free energy, G</text>\n<text x=\"340\" y=\"308\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">composition, X<tspan font-size=\"10\" dy=\"3\">B</tspan><tspan dy=\"-3\">&#8203;</tspan>  →</text>\n<path d=\"M90.0,182.6 L94.2,181.8 L98.3,181.0 L102.5,180.2 L106.7,179.4 L110.8,178.6 L115.0,177.8 L119.2,177.0 L123.3,176.2 L127.5,175.4 L131.7,174.6 L135.8,173.7 L140.0,172.9 L144.2,172.1 L148.3,171.3 L152.5,170.5 L156.7,169.7 L160.8,168.9 L165.0,168.1 L169.2,167.3 L173.3,166.5 L177.5,165.7 L181.7,164.9 L185.8,164.1 L190.0,163.3 L194.2,162.5 L198.3,161.7 L202.5,160.9 L206.7,160.1 L210.8,159.3 L215.0,158.4 L219.2,157.6 L223.3,156.8 L227.5,156.0 L231.7,155.2 L235.8,154.4 L240.0,153.6 L244.2,152.8 L248.3,152.0 L252.5,151.2 L256.7,150.4 L260.8,149.6 L265.0,148.8 L269.2,148.0 L273.3,147.2 L277.5,146.4 L281.7,145.6 L285.8,144.8 L290.0,144.0 L294.2,143.2 L298.3,142.3 L302.5,141.5 L306.7,140.7 L310.8,139.9 L315.0,139.1 L319.2,138.3 L323.3,137.5 L327.5,136.7 L331.7,135.9 L335.8,135.1 L340.0,134.3 L344.2,133.5 L348.3,132.7 L352.5,131.9 L356.7,131.1 L360.8,130.3 L365.0,129.5 L369.2,128.7 L373.3,127.9 L377.5,127.1 L381.7,126.2 L385.8,125.4 L390.0,124.6 L394.2,123.8 L398.3,123.0 L402.5,122.2 L406.7,121.4 L410.8,120.6 L415.0,119.8 L419.2,119.0 L423.3,118.2 L427.5,117.4 L431.7,116.6 L435.8,115.8 L440.0,115.0 L444.2,114.2 L448.3,113.4 L452.5,112.6 L456.7,111.8 L460.8,111.0 L465.0,110.1 L469.2,109.3 L473.3,108.5 L477.5,107.7 L481.7,106.9 L485.8,106.1 L490.0,105.3 L494.2,104.5 L498.3,103.7 L502.5,102.9 L506.7,102.1 L510.8,101.3 L515.0,100.5 L519.2,99.7 L523.3,98.9 L527.5,98.1 L531.7,97.3 L535.8,96.5 L540.0,95.7 L544.2,94.9 L548.3,94.0 L552.5,93.2 L556.7,92.4 L560.8,91.6 L565.0,90.8 L569.2,90.0 L573.3,89.2 L577.5,88.4 L581.7,87.6 L585.8,86.8 L590.0,86.0\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-dasharray=\"5 4\" stroke-linejoin=\"round\"/>\n<path d=\"M90.0,182.6 L94.2,185.1 L98.3,186.8 L102.5,188.3 L106.7,189.5 L110.8,190.5 L115.0,191.5 L119.2,192.3 L123.3,193.1 L127.5,193.7 L131.7,194.3 L135.8,194.9 L140.0,195.4 L144.2,195.8 L148.3,196.2 L152.5,196.5 L156.7,196.8 L160.8,197.1 L165.0,197.3 L169.2,197.5 L173.3,197.6 L177.5,197.7 L181.7,197.8 L185.8,197.8 L190.0,197.8 L194.2,197.8 L198.3,197.7 L202.5,197.7 L206.7,197.5 L210.8,197.4 L215.0,197.3 L219.2,197.1 L223.3,196.9 L227.5,196.6 L231.7,196.4 L235.8,196.1 L240.0,195.8 L244.2,195.4 L248.3,195.1 L252.5,194.7 L256.7,194.3 L260.8,193.9 L265.0,193.5 L269.2,193.0 L273.3,192.5 L277.5,192.0 L281.7,191.5 L285.8,191.0 L290.0,190.4 L294.2,189.8 L298.3,189.2 L302.5,188.6 L306.7,188.0 L310.8,187.3 L315.0,186.6 L319.2,185.9 L323.3,185.2 L327.5,184.5 L331.7,183.7 L335.8,182.9 L340.0,182.1 L344.2,181.3 L348.3,180.5 L352.5,179.6 L356.7,178.8 L360.8,177.9 L365.0,177.0 L369.2,176.0 L373.3,175.1 L377.5,174.1 L381.7,173.1 L385.8,172.1 L390.0,171.1 L394.2,170.0 L398.3,169.0 L402.5,167.9 L406.7,166.8 L410.8,165.6 L415.0,164.5 L419.2,163.3 L423.3,162.1 L427.5,160.9 L431.7,159.7 L435.8,158.4 L440.0,157.1 L444.2,155.8 L448.3,154.5 L452.5,153.1 L456.7,151.8 L460.8,150.4 L465.0,149.0 L469.2,147.5 L473.3,146.0 L477.5,144.5 L481.7,143.0 L485.8,141.4 L490.0,139.8 L494.2,138.2 L498.3,136.6 L502.5,134.9 L506.7,133.2 L510.8,131.4 L515.0,129.7 L519.2,127.8 L523.3,126.0 L527.5,124.1 L531.7,122.1 L535.8,120.1 L540.0,118.1 L544.2,116.0 L548.3,113.8 L552.5,111.6 L556.7,109.3 L560.8,107.0 L565.0,104.5 L569.2,102.0 L573.3,99.3 L577.5,96.5 L581.7,93.5 L585.8,90.1 L590.0,86.0\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>\n<line x1=\"340.0\" y1=\"134.3\" x2=\"340.0\" y2=\"182.1\" stroke=\"#00a87a\" stroke-width=\"2\" marker-start=\"url(#id1S)\" marker-end=\"url(#id1E)\"/>\n<text x=\"352.0\" y=\"162.2135777293181\" fill=\"#00a87a\" font-size=\"14\" font-weight=\"600\" font-family=\"Inter,system-ui,sans-serif\">ΔG<tspan font-size=\"10\" dy=\"3\">mix</tspan><tspan dy=\"-3\">&#8203;</tspan></text>\n<circle cx=\"90\" cy=\"182.6\" r=\"5\" fill=\"#3b82e8\"/>\n<circle cx=\"590\" cy=\"86.0\" r=\"5\" fill=\"#3b82e8\"/>\n<text x=\"102\" y=\"170.6\" fill=\"#3b82e8\" font-size=\"14\" font-weight=\"600\" font-family=\"Inter,system-ui,sans-serif\">G<tspan font-size=\"10\" dy=\"3\">A</tspan><tspan dy=\"-3\">&#8203;</tspan></text>\n<text x=\"578\" y=\"76.0\" fill=\"#3b82e8\" font-size=\"14\" font-weight=\"600\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">G<tspan font-size=\"10\" dy=\"3\">B</tspan><tspan dy=\"-3\">&#8203;</tspan></text>\n<text x=\"200.0\" y=\"135.34799999999998\" fill=\"#90909c\" font-size=\"12.5\" font-family=\"Inter,system-ui,sans-serif\">G<tspan font-size=\"10\" dy=\"3\">1</tspan><tspan dy=\"-3\">&#8203;</tspan> (before mixing)</text>\n<text x=\"400.0\" y=\"194.52842473292344\" fill=\"#f0f0f5\" font-size=\"12.5\" font-weight=\"600\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">G<tspan font-size=\"10\" dy=\"3\">2</tspan><tspan dy=\"-3\">&#8203;</tspan> (after mixing)</text>\n<text x=\"90\" y=\"286\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">pure A</text>\n<text x=\"590\" y=\"286\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">pure B</text>\n</svg>\n<p style=\"margin-top:14px;margin-bottom:0\">The straight line \\(G_1\\) is the unmixed state. Mixing drops the free energy to the curve \\(G_2\\). The gap between them is \\(\\Delta G_{\\mathrm{mix}}\\), and it is biggest in the middle.</p>\n</div>"
        },
        {
          "type": "example",
          "label": "Worked example: equal mix at 1000 K",
          "q": "Two metals form an ideal solution. They are mixed in equal mole fractions at 1000 K. Find \\(\\Delta S_{\\mathrm{mix}}\\) and \\(\\Delta G_{\\mathrm{mix}}\\) per mole.",
          "steps": [
            "Equal mix: \\(X_A = X_B = 0.5\\)",
            "\\(\\Delta S_{\\mathrm{mix}} = -R(0.5\\ln 0.5 + 0.5\\ln 0.5) = R\\ln 2 = 8.314 \\times 0.693 \\approx 5.76\\ \\text{J mol}^{-1}\\text{K}^{-1}\\)",
            "\\(\\Delta G_{\\mathrm{mix}} = -T\\Delta S_{\\mathrm{mix}} = -1000 \\times 5.76 \\approx -5760\\ \\text{J mol}^{-1} = -5.76\\ \\text{kJ mol}^{-1}\\)"
          ],
          "answer": "Negative, so the metals mix spontaneously. It is purely entropy driven, so at 500 K the same mix would only drop by about 2.88 kJ/mol."
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "html": "<p>Near a pure end, the \\(\\ln\\) term makes the \\(\\Delta G_{\\mathrm{mix}}\\) curve plunge almost vertically. So even a trace of B lowers the free energy of A. Nature always favours a little impurity, which is why ultrapure metals are so hard to make. Purity has to be forced by processing, not by thermodynamics.</p>",
          "title": "Bonus: why ultrapure metals are so hard to make"
        },
        {
          "type": "h2",
          "id": "u2-regular",
          "text": "Regular Solutions"
        },
        {
          "type": "p",
          "text": "Now the guests at the party have opinions. Some want to mingle with the other group, others stick with their own. Real alloys are like this because an A-B bond is almost never exactly the average of an A-A and a B-B bond.",
          "class": "learn-only"
        },
        {
          "type": "h3",
          "text": "The key quantity: \\(\\varepsilon\\)"
        },
        {
          "type": "p",
          "text": "Three bond types exist: A-A, B-B and A-B. The number \\(\\varepsilon\\) compares the A-B bond with the average of the other two.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Bond energy comparison",
          "eqs": [
            "\\varepsilon = E_{AB} - \\tfrac{1}{2}\\left(E_{AA} + E_{BB}\\right)"
          ],
          "vars": [
            {
              "symbol": "\\(E_{AA}, E_{BB}, E_{AB}\\)",
              "desc": "bond energies of each bond type"
            }
          ],
          "note": "<strong>Bond energies are negative</strong>, so a more negative number means a stronger bond. This is where most people trip up."
        },
        {
          "type": "formulablock",
          "name": "Heat of mixing (regular solution)",
          "eqs": [
            "\\Delta H_{\\mathrm{mix}} = \\Omega X_A X_B",
            "\\Omega = N_a z \\varepsilon"
          ],
          "vars": [
            {
              "symbol": "\\(z\\)",
              "desc": "number of bonds per atom"
            },
            {
              "symbol": "\\(\\Omega\\)",
              "desc": "regular solution parameter: just \\(\\varepsilon\\) scaled up to one mole, so it has the same sign"
            }
          ],
          "note": "The \\(X_A X_B\\) comes from counting A-B bonds: the more mixed the atoms are, the more A-B bonds there are. Entropy is treated exactly as in the ideal case."
        },
        {
          "type": "formulablock",
          "name": "Free energy of mixing (regular solution)",
          "eqs": [
            "\\Delta G_{\\mathrm{mix}} = \\underbrace{\\Omega X_A X_B}_{\\Delta H_{\\mathrm{mix}}} + \\underbrace{RT\\left(X_A \\ln X_A + X_B \\ln X_B\\right)}_{-T\\Delta S_{\\mathrm{mix}}}"
          ]
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "\\(\\varepsilon < 0\\): unlike atoms attract",
              "color": "#3b82e8",
              "text": "A-B bonds are stronger. \\(\\Delta H_{\\mathrm{mix}} < 0\\) (exothermic, heat released). Atoms prefer unlike neighbours, so they <strong>order</strong>. Enthalpy and entropy both favour mixing."
            },
            {
              "title": "\\(\\varepsilon > 0\\): like atoms attract",
              "color": "#e04545",
              "text": "A-A and B-B bonds are stronger. \\(\\Delta H_{\\mathrm{mix}} > 0\\) (endothermic, heat absorbed). Atoms prefer their own kind, so they <strong>cluster</strong>. Enthalpy fights mixing, entropy pushes for it."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "html": "<ul><li><strong>Ordering</strong>: &beta;-brass (CuZn) arranges itself into an ordered pattern at low temperature</li><li><strong>Clustering</strong>: Al-Zn separates into Al-rich and Zn-rich regions at low temperature</li></ul>",
          "title": "Real alloys showing each behaviour"
        },
        {
          "type": "h3",
          "text": "The temperature battle"
        },
        {
          "type": "p",
          "text": "\\(\\Delta H_{\\mathrm{mix}}\\) and \\(T\\Delta S_{\\mathrm{mix}}\\) compete, and temperature decides who wins. This comes up in exams a lot.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "html": "<ul><li><strong>High T:</strong> the \\(T\\Delta S_{\\mathrm{mix}}\\) term is large, so \\(\\Delta G_{\\mathrm{mix}}\\) is one smooth dip whatever the sign of \\(\\varepsilon\\). Random mixing wins.</li><li><strong>Low T, \\(\\varepsilon < 0\\):</strong> enthalpy and entropy agree, the dip is deeper still, and atoms order.</li><li><strong>Low T, \\(\\varepsilon > 0\\):</strong> the positive \\(\\Delta H_{\\mathrm{mix}}\\) beats the entropy term near the middle composition. The curve grows a <strong>hump</strong> between two dips.</li></ul>",
          "title": "Who wins?"
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: \\(\\varepsilon > 0\\) at high and low temperature</div>\n<svg viewBox=\"0 0 640 340\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Free energy of mixing against composition for a regular solution with positive epsilon: a single smooth dip at high temperature, and a curve with a central hump flanked by two shallow dips at low temperature\"><defs></defs>\n<line x1=\"90\" y1=\"30\" x2=\"90\" y2=\"290\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<polygon points=\"90,24 85,34 95,34\" fill=\"#5e5e6c\"/>\n<line x1=\"90\" y1=\"290\" x2=\"590\" y2=\"290\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<polygon points=\"597,290 587,285 587,295\" fill=\"#5e5e6c\"/>\n<text x=\"340\" y=\"328\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\"></text>\n<text x=\"42\" y=\"160\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" transform=\"rotate(-90 42 160)\" font-family=\"Inter,system-ui,sans-serif\">free energy of mixing, ΔG/RT</text>\n<text x=\"340\" y=\"328\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">composition, X<tspan font-size=\"10\" dy=\"3\">B</tspan><tspan dy=\"-3\">&#8203;</tspan>  →</text>\n<line x1=\"90\" y1=\"121.1\" x2=\"590\" y2=\"121.1\" stroke=\"#5e5e6c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/>\n<text x=\"586\" y=\"114.0810810810811\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">ΔG<tspan font-size=\"10\" dy=\"3\">mix</tspan><tspan dy=\"-3\">&#8203;</tspan> = 0</text>\n<path d=\"M90.0,121.4 L91.3,126.3 L92.5,130.2 L93.8,133.6 L95.0,136.8 L96.3,139.7 L97.5,142.5 L98.8,145.2 L100.0,147.7 L101.3,150.1 L102.5,152.4 L103.8,154.7 L105.0,156.9 L106.3,159.0 L107.5,161.0 L108.8,163.0 L110.0,164.9 L111.3,166.8 L112.5,168.6 L113.8,170.4 L115.0,172.2 L116.3,173.9 L117.5,175.5 L118.8,177.2 L120.0,178.8 L121.3,180.3 L122.5,181.9 L123.8,183.4 L125.0,184.8 L126.3,186.3 L127.5,187.7 L128.8,189.1 L130.0,190.4 L131.3,191.8 L132.5,193.1 L133.8,194.4 L135.0,195.7 L136.3,196.9 L137.5,198.1 L138.8,199.3 L140.0,200.5 L141.3,201.7 L142.5,202.9 L143.8,204.0 L145.0,205.1 L146.3,206.2 L147.5,207.3 L148.8,208.4 L150.0,209.4 L151.3,210.4 L152.5,211.4 L153.8,212.4 L155.0,213.4 L156.3,214.4 L157.5,215.4 L158.8,216.3 L160.0,217.2 L161.3,218.2 L162.5,219.1 L163.8,220.0 L165.0,220.8 L166.3,221.7 L167.5,222.6 L168.8,223.4 L170.0,224.2 L171.3,225.1 L172.5,225.9 L173.8,226.7 L175.0,227.4 L176.3,228.2 L177.5,229.0 L178.8,229.7 L180.0,230.5 L181.3,231.2 L182.5,231.9 L183.8,232.7 L185.0,233.4 L186.3,234.1 L187.5,234.8 L188.8,235.4 L190.0,236.1 L191.3,236.8 L192.5,237.4 L193.8,238.0 L195.0,238.7 L196.3,239.3 L197.5,239.9 L198.8,240.5 L200.0,241.1 L201.3,241.7 L202.5,242.3 L203.8,242.9 L205.0,243.5 L206.3,244.0 L207.5,244.6 L208.8,245.1 L210.0,245.6 L211.3,246.2 L212.5,246.7 L213.8,247.2 L215.0,247.7 L216.3,248.2 L217.5,248.7 L218.8,249.2 L220.0,249.7 L221.3,250.2 L222.5,250.6 L223.8,251.1 L225.0,251.5 L226.3,252.0 L227.5,252.4 L228.8,252.9 L230.0,253.3 L231.3,253.7 L232.5,254.1 L233.8,254.6 L235.0,255.0 L236.3,255.4 L237.5,255.7 L238.8,256.1 L240.0,256.5 L241.3,256.9 L242.5,257.3 L243.8,257.6 L245.0,258.0 L246.3,258.3 L247.5,258.7 L248.8,259.0 L250.0,259.4 L251.3,259.7 L252.5,260.0 L253.8,260.3 L255.0,260.6 L256.3,260.9 L257.5,261.2 L258.8,261.5 L260.0,261.8 L261.3,262.1 L262.5,262.4 L263.8,262.7 L265.0,263.0 L266.3,263.2 L267.5,263.5 L268.8,263.7 L270.0,264.0 L271.3,264.2 L272.5,264.5 L273.8,264.7 L275.0,265.0 L276.3,265.2 L277.5,265.4 L278.8,265.6 L280.0,265.8 L281.3,266.0 L282.5,266.2 L283.8,266.4 L285.0,266.6 L286.3,266.8 L287.5,267.0 L288.8,267.2 L290.0,267.4 L291.3,267.5 L292.5,267.7 L293.8,267.9 L295.0,268.0 L296.3,268.2 L297.5,268.3 L298.8,268.5 L300.0,268.6 L301.3,268.7 L302.5,268.9 L303.8,269.0 L305.0,269.1 L306.3,269.2 L307.5,269.4 L308.8,269.5 L310.0,269.6 L311.3,269.7 L312.5,269.8 L313.8,269.9 L315.0,269.9 L316.3,270.0 L317.5,270.1 L318.8,270.2 L320.0,270.3 L321.3,270.3 L322.5,270.4 L323.8,270.4 L325.0,270.5 L326.3,270.5 L327.5,270.6 L328.8,270.6 L330.0,270.7 L331.3,270.7 L332.5,270.7 L333.8,270.7 L335.0,270.8 L336.3,270.8 L337.5,270.8 L338.8,270.8 L340.0,270.8 L341.2,270.8 L342.5,270.8 L343.7,270.8 L345.0,270.8 L346.2,270.7 L347.5,270.7 L348.7,270.7 L350.0,270.7 L351.2,270.6 L352.5,270.6 L353.7,270.5 L355.0,270.5 L356.2,270.4 L357.5,270.4 L358.7,270.3 L360.0,270.3 L361.2,270.2 L362.5,270.1 L363.7,270.0 L365.0,269.9 L366.2,269.9 L367.5,269.8 L368.7,269.7 L370.0,269.6 L371.2,269.5 L372.5,269.4 L373.7,269.2 L375.0,269.1 L376.2,269.0 L377.5,268.9 L378.7,268.7 L380.0,268.6 L381.2,268.5 L382.5,268.3 L383.7,268.2 L385.0,268.0 L386.2,267.9 L387.5,267.7 L388.7,267.5 L390.0,267.4 L391.2,267.2 L392.5,267.0 L393.7,266.8 L395.0,266.6 L396.2,266.4 L397.5,266.2 L398.7,266.0 L400.0,265.8 L401.2,265.6 L402.5,265.4 L403.7,265.2 L405.0,265.0 L406.2,264.7 L407.5,264.5 L408.7,264.2 L410.0,264.0 L411.2,263.7 L412.5,263.5 L413.7,263.2 L415.0,263.0 L416.2,262.7 L417.5,262.4 L418.7,262.1 L420.0,261.8 L421.2,261.5 L422.5,261.2 L423.7,260.9 L425.0,260.6 L426.2,260.3 L427.5,260.0 L428.7,259.7 L430.0,259.4 L431.2,259.0 L432.5,258.7 L433.7,258.3 L435.0,258.0 L436.2,257.6 L437.5,257.3 L438.7,256.9 L440.0,256.5 L441.2,256.1 L442.5,255.7 L443.7,255.4 L445.0,255.0 L446.2,254.6 L447.5,254.1 L448.7,253.7 L450.0,253.3 L451.2,252.9 L452.5,252.4 L453.7,252.0 L455.0,251.5 L456.2,251.1 L457.5,250.6 L458.7,250.2 L460.0,249.7 L461.2,249.2 L462.5,248.7 L463.7,248.2 L465.0,247.7 L466.2,247.2 L467.5,246.7 L468.7,246.2 L470.0,245.6 L471.2,245.1 L472.5,244.6 L473.7,244.0 L475.0,243.5 L476.2,242.9 L477.5,242.3 L478.7,241.7 L480.0,241.1 L481.2,240.5 L482.5,239.9 L483.7,239.3 L485.0,238.7 L486.2,238.0 L487.5,237.4 L488.7,236.8 L490.0,236.1 L491.2,235.4 L492.5,234.8 L493.7,234.1 L495.0,233.4 L496.2,232.7 L497.5,231.9 L498.7,231.2 L500.0,230.5 L501.2,229.7 L502.5,229.0 L503.7,228.2 L505.0,227.4 L506.2,226.7 L507.5,225.9 L508.7,225.1 L510.0,224.2 L511.2,223.4 L512.5,222.6 L513.7,221.7 L515.0,220.8 L516.2,220.0 L517.5,219.1 L518.7,218.2 L520.0,217.2 L521.2,216.3 L522.5,215.4 L523.7,214.4 L525.0,213.4 L526.2,212.4 L527.5,211.4 L528.7,210.4 L530.0,209.4 L531.2,208.4 L532.5,207.3 L533.7,206.2 L535.0,205.1 L536.2,204.0 L537.5,202.9 L538.7,201.7 L540.0,200.5 L541.2,199.3 L542.5,198.1 L543.7,196.9 L545.0,195.7 L546.2,194.4 L547.5,193.1 L548.7,191.8 L550.0,190.4 L551.2,189.1 L552.5,187.7 L553.7,186.3 L555.0,184.8 L556.2,183.4 L557.5,181.9 L558.7,180.3 L560.0,178.8 L561.2,177.2 L562.5,175.5 L563.7,173.9 L565.0,172.2 L566.2,170.4 L567.5,168.6 L568.7,166.8 L570.0,164.9 L571.2,163.0 L572.5,161.0 L573.7,159.0 L575.0,156.9 L576.2,154.7 L577.5,152.4 L578.7,150.1 L580.0,147.7 L581.2,145.2 L582.5,142.5 L583.7,139.7 L585.0,136.8 L586.2,133.6 L587.5,130.2 L588.7,126.3 L590.0,121.4\" fill=\"none\" stroke=\"#00a87a\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>\n<path d=\"M90.0,121.3 L91.3,124.6 L92.5,126.8 L93.8,128.5 L95.0,130.0 L96.3,131.3 L97.5,132.5 L98.8,133.5 L100.0,134.4 L101.3,135.2 L102.5,135.9 L103.8,136.5 L105.0,137.1 L106.3,137.7 L107.5,138.1 L108.8,138.5 L110.0,138.9 L111.3,139.2 L112.5,139.5 L113.8,139.8 L115.0,140.0 L116.3,140.2 L117.5,140.4 L118.8,140.5 L120.0,140.6 L121.3,140.7 L122.5,140.7 L123.8,140.8 L125.0,140.8 L126.3,140.8 L127.5,140.8 L128.8,140.7 L130.0,140.7 L131.3,140.6 L132.5,140.5 L133.8,140.4 L135.0,140.3 L136.3,140.1 L137.5,140.0 L138.8,139.9 L140.0,139.7 L141.3,139.5 L142.5,139.3 L143.8,139.1 L145.0,138.9 L146.3,138.7 L147.5,138.5 L148.8,138.2 L150.0,138.0 L151.3,137.8 L152.5,137.5 L153.8,137.2 L155.0,137.0 L156.3,136.7 L157.5,136.4 L158.8,136.1 L160.0,135.9 L161.3,135.6 L162.5,135.3 L163.8,135.0 L165.0,134.7 L166.3,134.3 L167.5,134.0 L168.8,133.7 L170.0,133.4 L171.3,133.1 L172.5,132.7 L173.8,132.4 L175.0,132.1 L176.3,131.7 L177.5,131.4 L178.8,131.1 L180.0,130.7 L181.3,130.4 L182.5,130.0 L183.8,129.7 L185.0,129.4 L186.3,129.0 L187.5,128.7 L188.8,128.3 L190.0,128.0 L191.3,127.6 L192.5,127.3 L193.8,126.9 L195.0,126.6 L196.3,126.2 L197.5,125.9 L198.8,125.5 L200.0,125.2 L201.3,124.8 L202.5,124.5 L203.8,124.1 L205.0,123.8 L206.3,123.4 L207.5,123.1 L208.8,122.7 L210.0,122.4 L211.3,122.0 L212.5,121.7 L213.8,121.4 L215.0,121.0 L216.3,120.7 L217.5,120.3 L218.8,120.0 L220.0,119.7 L221.3,119.3 L222.5,119.0 L223.8,118.7 L225.0,118.4 L226.3,118.0 L227.5,117.7 L228.8,117.4 L230.0,117.1 L231.3,116.8 L232.5,116.4 L233.8,116.1 L235.0,115.8 L236.3,115.5 L237.5,115.2 L238.8,114.9 L240.0,114.6 L241.3,114.3 L242.5,114.0 L243.8,113.7 L245.0,113.4 L246.3,113.2 L247.5,112.9 L248.8,112.6 L250.0,112.3 L251.3,112.0 L252.5,111.8 L253.8,111.5 L255.0,111.2 L256.3,111.0 L257.5,110.7 L258.8,110.5 L260.0,110.2 L261.3,110.0 L262.5,109.7 L263.8,109.5 L265.0,109.2 L266.3,109.0 L267.5,108.8 L268.8,108.5 L270.0,108.3 L271.3,108.1 L272.5,107.9 L273.8,107.7 L275.0,107.4 L276.3,107.2 L277.5,107.0 L278.8,106.8 L280.0,106.6 L281.3,106.4 L282.5,106.3 L283.8,106.1 L285.0,105.9 L286.3,105.7 L287.5,105.5 L288.8,105.4 L290.0,105.2 L291.3,105.0 L292.5,104.9 L293.8,104.7 L295.0,104.6 L296.3,104.4 L297.5,104.3 L298.8,104.2 L300.0,104.0 L301.3,103.9 L302.5,103.8 L303.8,103.6 L305.0,103.5 L306.3,103.4 L307.5,103.3 L308.8,103.2 L310.0,103.1 L311.3,103.0 L312.5,102.9 L313.8,102.8 L315.0,102.7 L316.3,102.6 L317.5,102.6 L318.8,102.5 L320.0,102.4 L321.3,102.3 L322.5,102.3 L323.8,102.2 L325.0,102.2 L326.3,102.1 L327.5,102.1 L328.8,102.0 L330.0,102.0 L331.3,102.0 L332.5,102.0 L333.8,101.9 L335.0,101.9 L336.3,101.9 L337.5,101.9 L338.8,101.9 L340.0,101.9 L341.2,101.9 L342.5,101.9 L343.7,101.9 L345.0,101.9 L346.2,101.9 L347.5,102.0 L348.7,102.0 L350.0,102.0 L351.2,102.0 L352.5,102.1 L353.7,102.1 L355.0,102.2 L356.2,102.2 L357.5,102.3 L358.7,102.3 L360.0,102.4 L361.2,102.5 L362.5,102.6 L363.7,102.6 L365.0,102.7 L366.2,102.8 L367.5,102.9 L368.7,103.0 L370.0,103.1 L371.2,103.2 L372.5,103.3 L373.7,103.4 L375.0,103.5 L376.2,103.6 L377.5,103.8 L378.7,103.9 L380.0,104.0 L381.2,104.2 L382.5,104.3 L383.7,104.4 L385.0,104.6 L386.2,104.7 L387.5,104.9 L388.7,105.0 L390.0,105.2 L391.2,105.4 L392.5,105.5 L393.7,105.7 L395.0,105.9 L396.2,106.1 L397.5,106.3 L398.7,106.4 L400.0,106.6 L401.2,106.8 L402.5,107.0 L403.7,107.2 L405.0,107.4 L406.2,107.7 L407.5,107.9 L408.7,108.1 L410.0,108.3 L411.2,108.5 L412.5,108.8 L413.7,109.0 L415.0,109.2 L416.2,109.5 L417.5,109.7 L418.7,110.0 L420.0,110.2 L421.2,110.5 L422.5,110.7 L423.7,111.0 L425.0,111.2 L426.2,111.5 L427.5,111.8 L428.7,112.0 L430.0,112.3 L431.2,112.6 L432.5,112.9 L433.7,113.2 L435.0,113.4 L436.2,113.7 L437.5,114.0 L438.7,114.3 L440.0,114.6 L441.2,114.9 L442.5,115.2 L443.7,115.5 L445.0,115.8 L446.2,116.1 L447.5,116.4 L448.7,116.8 L450.0,117.1 L451.2,117.4 L452.5,117.7 L453.7,118.0 L455.0,118.4 L456.2,118.7 L457.5,119.0 L458.7,119.3 L460.0,119.7 L461.2,120.0 L462.5,120.3 L463.7,120.7 L465.0,121.0 L466.2,121.4 L467.5,121.7 L468.7,122.0 L470.0,122.4 L471.2,122.7 L472.5,123.1 L473.7,123.4 L475.0,123.8 L476.2,124.1 L477.5,124.5 L478.7,124.8 L480.0,125.2 L481.2,125.5 L482.5,125.9 L483.7,126.2 L485.0,126.6 L486.2,126.9 L487.5,127.3 L488.7,127.6 L490.0,128.0 L491.2,128.3 L492.5,128.7 L493.7,129.0 L495.0,129.4 L496.2,129.7 L497.5,130.0 L498.7,130.4 L500.0,130.7 L501.2,131.1 L502.5,131.4 L503.7,131.7 L505.0,132.1 L506.2,132.4 L507.5,132.7 L508.7,133.1 L510.0,133.4 L511.2,133.7 L512.5,134.0 L513.7,134.3 L515.0,134.7 L516.2,135.0 L517.5,135.3 L518.7,135.6 L520.0,135.9 L521.2,136.1 L522.5,136.4 L523.7,136.7 L525.0,137.0 L526.2,137.2 L527.5,137.5 L528.7,137.8 L530.0,138.0 L531.2,138.2 L532.5,138.5 L533.7,138.7 L535.0,138.9 L536.2,139.1 L537.5,139.3 L538.7,139.5 L540.0,139.7 L541.2,139.9 L542.5,140.0 L543.7,140.1 L545.0,140.3 L546.2,140.4 L547.5,140.5 L548.7,140.6 L550.0,140.7 L551.2,140.7 L552.5,140.8 L553.7,140.8 L555.0,140.8 L556.2,140.8 L557.5,140.7 L558.7,140.7 L560.0,140.6 L561.2,140.5 L562.5,140.4 L563.7,140.2 L565.0,140.0 L566.2,139.8 L567.5,139.5 L568.7,139.2 L570.0,138.9 L571.2,138.5 L572.5,138.1 L573.7,137.7 L575.0,137.1 L576.2,136.5 L577.5,135.9 L578.7,135.2 L580.0,134.4 L581.2,133.5 L582.5,132.5 L583.7,131.3 L585.0,130.0 L586.2,128.5 L587.5,126.8 L588.7,124.6 L590.0,121.3\" fill=\"none\" stroke=\"#e04545\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>\n<text x=\"340.0\" y=\"230.7929664053869\" fill=\"#00a87a\" font-size=\"12.5\" font-weight=\"600\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">high T: one smooth dip</text>\n<text x=\"340.0\" y=\"246.7929664053869\" fill=\"#00a87a\" font-size=\"11.5\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">(random mixing)</text>\n<text x=\"340.0\" y=\"89.87404748646799\" fill=\"#e04545\" font-size=\"12.5\" font-weight=\"600\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">low T: hump in the middle</text>\n<circle cx=\"125.4\" cy=\"140.8\" r=\"5\" fill=\"#e04545\" stroke=\"#0c0c10\" stroke-width=\"1.5\"/>\n<circle cx=\"554.6\" cy=\"140.8\" r=\"5\" fill=\"#e04545\" stroke=\"#0c0c10\" stroke-width=\"1.5\"/>\n<text x=\"129.375\" y=\"170.7909950490024\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">A-rich</text>\n<text x=\"550.625\" y=\"170.79099504900242\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">B-rich</text>\n<text x=\"90\" y=\"306\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">pure A</text>\n<text x=\"590\" y=\"306\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">pure B</text>\n</svg>\n<p style=\"margin-top:14px;margin-bottom:0\">A hump means a 50:50 mixture has <em>higher</em> free energy than splitting into an A-rich and a B-rich region. The alloy un-mixes into two phases: a <strong>miscibility gap</strong>. Unit 3 puts this on a phase diagram. (Plotted from \\(\\Delta G_{\\mathrm{mix}}/RT = (\\Omega/RT)X_AX_B + X_A\\ln X_A + X_B\\ln X_B\\) with \\(\\Omega/RT = 1\\) and \\(3\\).)</p>\n</div>"
        },
        {
          "type": "h2",
          "id": "u2-real",
          "text": "Real Solutions"
        },
        {
          "type": "p",
          "text": "The regular solution model is a simplification. Real alloys add three complications.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Atomic size difference",
              "color": "#3b82e8",
              "text": "A size mismatch strains the lattice and changes \\(\\Delta H_{\\mathrm{mix}}\\). Similar sizes give a <strong>substitutional</strong> alloy (brass, Cu-Zn). Very different sizes give an <strong>interstitial</strong> alloy (carbon steel, C in Fe)."
            },
            {
              "title": "Not quite random",
              "color": "#3b82e8",
              "text": "At low T the atoms are rarely arranged completely at random. The real arrangement is a compromise between low internal energy and high entropy that gives the lowest \\(G\\)."
            },
            {
              "title": "New crystal structures",
              "color": "#3b82e8",
              "text": "Sometimes the lowest \\(G\\) comes from a <strong>different crystal structure</strong> to both A and B, over a range of compositions. This is an <strong>intermediate phase</strong>."
            }
          ]
        },
        {
          "type": "example",
          "label": "Worked example: brass vs steel",
          "q": "Why is Cu-Zn a substitutional alloy but Fe-C an interstitial one?",
          "steps": [
            "Cu and Zn atoms are similar in size, so Zn can sit on a Cu lattice site with little strain",
            "C atoms are much smaller than Fe atoms, so they fit into the gaps between Fe atoms instead of replacing them"
          ],
          "answer": "Atomic size mismatch decides which type of solid solution forms."
        },
        {
          "type": "h3",
          "text": "Intermediate phase vs intermetallic compound"
        },
        {
          "type": "p",
          "text": "Both are new phases with their own free energy curve dipping below the others. The difference is how much composition range they can tolerate.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: two kinds of new phase (schematic)</div>\n<svg viewBox=\"0 0 640 330\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Schematic free energy curves for an intermediate phase, with a wide composition range, and an intermetallic compound, with a very narrow steep curve, both dipping below the line joining the free energies of pure A and pure B\"><defs></defs>\n<line x1=\"90\" y1=\"30\" x2=\"90\" y2=\"270\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<polygon points=\"90,24 85,34 95,34\" fill=\"#5e5e6c\"/>\n<line x1=\"90\" y1=\"270\" x2=\"590\" y2=\"270\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<polygon points=\"597,270 587,265 587,275\" fill=\"#5e5e6c\"/>\n<text x=\"340\" y=\"308\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\"></text>\n<text x=\"42\" y=\"150\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" transform=\"rotate(-90 42 150)\" font-family=\"Inter,system-ui,sans-serif\">molar free energy, G</text>\n<text x=\"340\" y=\"308\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">composition, X<tspan font-size=\"10\" dy=\"3\">B</tspan><tspan dy=\"-3\">&#8203;</tspan>  →</text>\n<path d=\"M90.0,109.0 L590.0,90.6\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-dasharray=\"5 4\" stroke-linejoin=\"round\"/>\n<circle cx=\"90\" cy=\"109.0\" r=\"5\" fill=\"#3b82e8\"/>\n<circle cx=\"590\" cy=\"90.6\" r=\"5\" fill=\"#3b82e8\"/>\n<text x=\"102\" y=\"99.0\" fill=\"#3b82e8\" font-size=\"14\" font-weight=\"600\" font-family=\"Inter,system-ui,sans-serif\">G<tspan font-size=\"10\" dy=\"3\">A</tspan><tspan dy=\"-3\">&#8203;</tspan></text>\n<text x=\"578\" y=\"80.6\" fill=\"#3b82e8\" font-size=\"14\" font-weight=\"600\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">G<tspan font-size=\"10\" dy=\"3\">B</tspan><tspan dy=\"-3\">&#8203;</tspan></text>\n<path d=\"M305.9,101.1 L309.1,103.0 L312.4,104.9 L315.6,106.7 L318.8,108.4 L322.0,110.2 L325.3,111.8 L328.5,113.4 L331.7,115.0 L334.9,116.5 L338.2,118.0 L341.4,119.4 L344.6,120.7 L347.9,122.0 L351.1,123.3 L354.3,124.5 L357.5,125.7 L360.8,126.7 L364.0,127.8 L367.2,128.8 L370.5,129.7 L373.7,130.6 L376.9,131.5 L380.1,132.2 L383.4,133.0 L386.6,133.7 L389.8,134.3 L393.0,134.9 L396.3,135.4 L399.5,135.9 L402.7,136.3 L406.0,136.7 L409.2,137.0 L412.4,137.3 L415.6,137.5 L418.9,137.7 L422.1,137.8 L425.3,137.8 L428.5,137.8 L431.8,137.8 L435.0,137.7 L438.2,137.6 L441.5,137.4 L444.7,137.1 L447.9,136.8 L451.1,136.5 L454.4,136.1 L457.6,135.6 L460.8,135.1 L464.0,134.5 L467.3,133.9 L470.5,133.3 L473.7,132.6 L477.0,131.8 L480.2,131.0 L483.4,130.1 L486.6,129.2 L489.9,128.2 L493.1,127.2 L496.3,126.1 L499.5,125.0 L502.8,123.8 L506.0,122.6 L509.2,121.3 L512.5,119.9 L515.7,118.6 L518.9,117.1 L522.1,115.6 L525.4,114.1 L528.6,112.5 L531.8,110.9 L535.1,109.2 L538.3,107.4 L541.5,105.6 L544.7,103.8 L548.0,101.9 L551.2,99.9 L554.4,97.9 L557.6,95.8 L560.9,93.7 L564.1,91.6\" fill=\"none\" stroke=\"#d89800\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>\n<path d=\"M241.2,103.4 L241.6,106.8 L242.0,110.1 L242.3,113.4 L242.7,116.5 L243.1,119.5 L243.5,122.5 L243.9,125.4 L244.3,128.2 L244.6,130.9 L245.0,133.5 L245.4,136.0 L245.8,138.5 L246.2,140.8 L246.5,143.1 L246.9,145.3 L247.3,147.4 L247.7,149.4 L248.1,151.3 L248.5,153.2 L248.8,154.9 L249.2,156.6 L249.6,158.2 L250.0,159.6 L250.4,161.1 L250.8,162.4 L251.1,163.6 L251.5,164.8 L251.9,165.8 L252.3,166.8 L252.7,167.7 L253.1,168.5 L253.4,169.2 L253.8,169.9 L254.2,170.4 L254.6,170.9 L255.0,171.2 L255.4,171.5 L255.7,171.7 L256.1,171.8 L256.5,171.9 L256.9,171.8 L257.3,171.7 L257.6,171.4 L258.0,171.1 L258.4,170.7 L258.8,170.2 L259.2,169.7 L259.6,169.0 L259.9,168.3 L260.3,167.4 L260.7,166.5 L261.1,165.5 L261.5,164.4 L261.9,163.2 L262.2,162.0 L262.6,160.6 L263.0,159.2 L263.4,157.6 L263.8,156.0 L264.2,154.3 L264.5,152.6 L264.9,150.7 L265.3,148.7 L265.7,146.7 L266.1,144.6 L266.5,142.4 L266.8,140.1 L267.2,137.7 L267.6,135.2 L268.0,132.6 L268.4,130.0 L268.7,127.3 L269.1,124.4 L269.5,121.5 L269.9,118.6 L270.3,115.5 L270.7,112.3 L271.0,109.1 L271.4,105.7 L271.8,102.3\" fill=\"none\" stroke=\"#00a87a\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>\n<text x=\"439.0\" y=\"163.704\" fill=\"#d89800\" font-size=\"12.5\" font-weight=\"600\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">intermediate phase</text>\n<text x=\"439.0\" y=\"179.704\" fill=\"#d89800\" font-size=\"11.5\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">(wide range of composition)</text>\n<text x=\"250.5\" y=\"195.8728\" fill=\"#00a87a\" font-size=\"12.5\" font-weight=\"600\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">intermetallic compound</text>\n<text x=\"250.5\" y=\"211.8728\" fill=\"#00a87a\" font-size=\"11.5\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">(narrow, steep: fixed A<tspan font-size=\"10\" dy=\"3\">m</tspan><tspan dy=\"-3\">&#8203;</tspan>B<tspan font-size=\"10\" dy=\"3\">n</tspan><tspan dy=\"-3\">&#8203;</tspan>)</text>\n<text x=\"90\" y=\"286\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">pure A</text>\n<text x=\"590\" y=\"286\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">pure B</text>\n</svg>\n<p style=\"margin-top:14px;margin-bottom:0\">A wide curve means the phase is stable over a range of compositions: an <strong>intermediate phase</strong>. If the curve is so narrow and steep that straying from the ideal composition makes \\(G\\) shoot up, the phase has a fixed formula \\(A_mB_n\\) and is an <strong>intermetallic compound</strong>.</p>\n</div>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "html": "<p>The Al-Cu aircraft alloy from Unit 1 gets its strength from an intermetallic: Al<sub>2</sub>Cu. It has a fixed 2:1 ratio, so its free energy curve is a narrow spike.</p>",
          "title": "Example"
        },
        {
          "type": "h2",
          "id": "u2-mu",
          "text": "Chemical Potential"
        },
        {
          "type": "p",
          "text": "Think of the alloy as a meal. The chemical potential of an ingredient is how much it contributes to the total cost (free energy) once it is in the mix. That is not the same as what it costs on its own.",
          "class": "learn-only"
        },
        {
          "type": "formulablock",
          "name": "Definition",
          "eqs": [
            "\\mu_A = \\left(\\frac{\\partial G'}{\\partial n_A}\\right)_{T,P,n_B}"
          ],
          "vars": [
            {
              "symbol": "\\(G'\\)",
              "desc": "<em>total</em> free energy of the system (not per mole)"
            },
            {
              "symbol": "\\(n_A\\)",
              "desc": "moles of A"
            }
          ],
          "note": "\\(\\mu_A\\) is how much the total free energy changes when you add a tiny amount of A, holding \\(T\\), \\(P\\) and the amount of B fixed. It is also called the <strong>partial molar free energy</strong>."
        },
        {
          "type": "formulablock",
          "name": "Free energy of a solution in terms of \\(\\mu\\)",
          "eqs": [
            "G = \\mu_A X_A + \\mu_B X_B"
          ],
          "note": "Compare with \\(G_1 = X_A G_A + X_B G_B\\). Before mixing, each atom contributes its pure value, \\(G\\). After mixing, each atom contributes its chemical potential, \\(\\mu\\)."
        },
        {
          "type": "formulablock",
          "name": "Chemical potential in an ideal solution",
          "eqs": [
            "\\mu_A = G_A + RT\\ln X_A \\qquad \\mu_B = G_B + RT\\ln X_B"
          ],
          "note": "\\(\\ln X < 0\\), so \\(\\mu\\) is always <strong>lower</strong> than the pure value \\(G\\). Mixing lowers each component's free energy by \\(RT\\ln X\\)."
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "html": "<p>When two phases coexist in equilibrium, each component must have the <strong>same chemical potential in both phases</strong>.</p>",
          "title": "Why this matters for Unit 3"
        },
        {
          "type": "formulablock",
          "name": "Equilibrium between two phases",
          "eqs": [
            "\\mu_A^{\\alpha} = \\mu_A^{\\beta} \\qquad \\mu_B^{\\alpha} = \\mu_B^{\\beta}"
          ],
          "note": "On a \\(G\\) against \\(X_B\\) graph, \\(\\mu_A\\) and \\(\\mu_B\\) are where the tangent at a given composition hits the left and right edges. Two phases are in equilibrium when <strong>one straight line touches both of their curves</strong>. That is the common tangent construction, and it is how Unit 3 builds phase diagrams."
        },
        {
          "type": "h2",
          "id": "",
          "text": "Unit 2 essentials"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "html": "<ul><li>\\(\\Delta G_{\\mathrm{mix}} = \\Delta H_{\\mathrm{mix}} - T\\Delta S_{\\mathrm{mix}}\\), and \\(\\Delta S_{\\mathrm{mix}}\\) is always positive</li><li>Ideal: \\(\\Delta H_{\\mathrm{mix}} = 0\\), so \\(\\Delta G_{\\mathrm{mix}} = RT(X_A\\ln X_A + X_B\\ln X_B)\\). Always negative, most negative at \\(X_B = 0.5\\), more negative at higher \\(T\\)</li><li>Regular: \\(\\Delta H_{\\mathrm{mix}} = \\Omega X_A X_B\\) with \\(\\Omega = N_a z\\varepsilon\\)</li><li>\\(\\varepsilon < 0\\): ordering. \\(\\varepsilon > 0\\): clustering. At high \\(T\\) entropy wins and atoms mix randomly either way</li><li>Low \\(T\\) with \\(\\varepsilon > 0\\): a hump with two dips, which is a miscibility gap</li><li>Real solutions: size mismatch (substitutional vs interstitial), intermediate phases, and intermetallic compounds (narrow, steep \\(G\\) curve, fixed \\(A_mB_n\\))</li><li>Ideal solution: \\(\\mu_A = G_A + RT\\ln X_A\\). Two phases are in equilibrium when each component has the same \\(\\mu\\) in both</li></ul>",
          "titleLearn": "Quick recap",
          "titleRevise": "EXAM CHEAT SHEET"
        }
      ],
      "essentialsTitle": null,
      "essentialsHeading": null,
      "essentials": null,
      "desc": "Free energy of mixing, ideal and regular solutions, ordering and clustering, real solutions and intermetallic compounds, and chemical potential.",
      "difficulty": "Hard",
      "readTime": "20 min",
      "color": "#3b82e8"
    },
    { "soon": true, "numLabel": "Unit 3", "title": "Construction of Phase Diagrams", "desc": "Coming soon — added once covered in lectures.", "color": "#8855f5", "sections": [] },
    { "soon": true, "numLabel": "Unit 4", "title": "Interpretation of Phase Diagrams", "desc": "Coming soon — added once covered in lectures.", "color": "#e04545", "sections": [] },
    { "soon": true, "numLabel": "Unit 5", "title": "Limitations of Thermodynamics (Intro to Kinetics)", "desc": "Coming soon — added once covered in lectures.", "color": "#d89800", "sections": [] },
    { "soon": true, "numLabel": "Unit 6", "title": "Solidification — Nucleation", "desc": "Coming soon — added once covered in lectures.", "color": "#e08000", "sections": [] },
    { "soon": true, "numLabel": "Unit 7", "title": "Solidification — Growth", "desc": "Coming soon — added once covered in lectures.", "color": "#e03f78", "sections": [] },
    { "soon": true, "numLabel": "Unit 8", "title": "Metalforming (Hot and Cold Work)", "desc": "Coming soon — added once covered in lectures.", "color": "#2fa15c", "sections": [] },
    { "soon": true, "numLabel": "Unit 9", "title": "The Fe-C System", "desc": "Coming soon — added once covered in lectures.", "color": "#3b82e8", "sections": [] },
    { "soon": true, "numLabel": "Unit 10", "title": "Precipitation Strengthening", "desc": "Coming soon — added once covered in lectures.", "color": "#8855f5", "sections": [] }
  ],
  "extraSections": null,
  "formulaSheet": [
    {
      "heading": "U1 — Introduction to Thermodynamics",
      "blocks": [
        {
          "type": "formulablock",
          "name": "First law of thermodynamics",
          "eqs": ["Q = \\Delta U + W \\qquad \\Delta U = Q - P\\Delta V"]
        },
        {
          "type": "formulablock",
          "name": "Enthalpy",
          "eqs": ["H = U + PV \\qquad \\Delta H = Q \\text{ (at constant P)} \\qquad \\Delta H \\approx \\Delta U \\text{ (solid/liquid)}"]
        },
        {
          "type": "formulablock",
          "name": "Gibbs free energy",
          "eqs": ["G = H - TS"]
        },
        {
          "type": "formulablock",
          "name": "Equilibrium & transformation conditions",
          "eqs": ["\\Delta G = 0 \\text{ (equilibrium)} \\qquad \\Delta G = \\Delta H - T\\Delta S < 0 \\text{ (transformation occurs)}"]
        },
        {
          "type": "formulablock",
          "name": "Heat capacity",
          "eqs": ["C_P = \\left(\\frac{\\partial Q}{\\partial T}\\right)_P = \\left(\\frac{\\partial H}{\\partial T}\\right)_P"]
        },
        {
          "type": "formulablock",
          "name": "\u0394H and \u0394S from C_P",
          "eqs": ["\\Delta H = \\int C_P \\, dT \\qquad \\Delta S = \\int \\frac{C_P}{T} \\, dT"],
          "vars": [
            { "symbol": "Ref.", "desc": "H = 0 at 298 K; S = 0 at 0 K (third law)" }
          ]
        }
      ]
    },
    {
      "heading": "U2 - Solution Thermodynamics",
      "blocks": [
        {
          "type": "formulablock",
          "name": "Mole fractions & free energy before mixing",
          "eqs": [
            "X_A + X_B = 1 \\qquad G_1 = X_A G_A + X_B G_B"
          ]
        },
        {
          "type": "formulablock",
          "name": "Free energy of mixing",
          "eqs": [
            "G_2 = G_1 + \\Delta G_{\\mathrm{mix}} \\qquad \\Delta G_{\\mathrm{mix}} = \\Delta H_{\\mathrm{mix}} - T\\Delta S_{\\mathrm{mix}}"
          ]
        },
        {
          "type": "formulablock",
          "name": "Boltzmann entropy",
          "eqs": [
            "S = k\\ln\\omega \\qquad \\omega = \\frac{(N_A+N_B)!}{N_A!\\,N_B!}"
          ]
        },
        {
          "type": "formulablock",
          "name": "Ideal solution",
          "eqs": [
            "\\Delta H_{\\mathrm{mix}} = 0 \\qquad \\Delta S_{\\mathrm{mix}} = -R\\left(X_A\\ln X_A + X_B\\ln X_B\\right)",
            "\\Delta G_{\\mathrm{mix}} = RT\\left(X_A\\ln X_A + X_B\\ln X_B\\right)"
          ],
          "vars": [
            {
              "symbol": "\\(R\\)",
              "desc": "\\(R = kN_a\\), universal gas constant"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Regular solution",
          "eqs": [
            "\\varepsilon = E_{AB} - \\tfrac12\\left(E_{AA}+E_{BB}\\right) \\qquad \\Omega = N_a z\\varepsilon",
            "\\Delta H_{\\mathrm{mix}} = \\Omega X_A X_B",
            "\\Delta G_{\\mathrm{mix}} = \\Omega X_A X_B + RT\\left(X_A\\ln X_A + X_B\\ln X_B\\right)"
          ],
          "vars": [
            {
              "symbol": "Sign",
              "desc": "\\(\\varepsilon < 0\\): ordering. \\(\\varepsilon > 0\\): clustering"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Chemical potential",
          "eqs": [
            "\\mu_A = \\left(\\frac{\\partial G'}{\\partial n_A}\\right)_{T,P,n_B} \\qquad G = \\mu_A X_A + \\mu_B X_B",
            "\\mu_A = G_A + RT\\ln X_A \\qquad \\mu_B = G_B + RT\\ln X_B \\quad \\text{(ideal)}"
          ]
        },
        {
          "type": "formulablock",
          "name": "Two-phase equilibrium",
          "eqs": [
            "\\mu_A^{\\alpha} = \\mu_A^{\\beta} \\qquad \\mu_B^{\\alpha} = \\mu_B^{\\beta}"
          ]
        }
      ]
    }
  ],
  "formulaSheetSubtitle": "Every equation covered so far. Variables defined, units flagged. Grows as more units are added.",
  "traps": [
    {
      "heading": "Unit 1 — Introduction to Thermodynamics",
      "items": [
        {
          "tag": "U1 — T1",
          "claim": "\"If a reaction is thermodynamically favourable, it happens immediately.\"",
          "truth": "<strong>FALSE.</strong> Thermodynamics only tells you <em>if</em> a change is feasible (ΔG &lt; 0), never how fast. Kinetics decides the speed — a favourable transformation can still take years (steel rusting) or be effectively frozen (diamond to graphite)."
        },
        {
          "tag": "U1 — T2",
          "claim": "\"A metastable state will eventually return to the stable state on its own, given enough time.\"",
          "truth": "<strong>FALSE.</strong> A metastable state does not automatically return to the stable state just because it's thermodynamically favourable — the activation energy barrier has to be overcome first, which needs an external supply of energy. Without it, the metastable state can persist indefinitely."
        },
        {
          "tag": "U1 — T3",
          "claim": "\"The most stable state is always the one with the lowest internal energy.\"",
          "truth": "<strong>FALSE.</strong> Stability is decided by <strong>Gibbs free energy</strong> (G = H − TS), not internal energy alone. At high temperature the −TS term can dominate, making a higher-enthalpy, higher-entropy state (e.g. a liquid) more stable than a lower-energy, more ordered one (a solid)."
        },
        {
          "tag": "U1 — T4",
          "claim": "\"An isolated system can exchange energy with its surroundings, just not mass.\"",
          "truth": "<strong>FALSE.</strong> That description is a <strong>closed</strong> system. An <strong>isolated</strong> system exchanges neither mass nor energy with its surroundings at all."
        },
        {
          "tag": "U1 — T5",
          "claim": "\"Temperature and pressure are extensive variables.\"",
          "truth": "<strong>FALSE.</strong> T and P are <strong>intensive</strong> variables — independent of system size. Extensive variables (volume, mass, total energy) scale with the amount of material present."
        },
        {
          "tag": "U1 — T6",
          "claim": "\"ΔH ≈ ΔU always, for any phase transformation.\"",
          "truth": "<strong>FALSE.</strong> ΔH ≈ ΔU only holds when ΔV is small, which is the case for solid/liquid transformations. For transformations involving a gas, the PΔV term is not negligible and ΔH and ΔU can differ significantly."
        },
        {
          "tag": "U1 — T7",
          "claim": "\"Work done by the system on the surroundings is taken as negative in the sign convention used here.\"",
          "truth": "<strong>FALSE.</strong> In the convention used in this module, work done <em>by</em> the system is positive (PΔV &gt; 0), and heat entering the system is positive. Getting this sign convention backwards is one of the most common first-law mistakes."
        },
        {
          "tag": "U1 — T8",
          "claim": "\"The absolute value of a system's enthalpy or entropy is physically meaningful and should be quoted directly.\"",
          "truth": "<strong>FALSE.</strong> Absolute values of H, S and G are arbitrarily defined by convention (H = 0 at 298 K, S = 0 at 0 K). Only the <em>changes</em> — ΔH, ΔS, ΔG — are physically meaningful for predicting whether a transformation occurs."
        },
        {
          "tag": "U1 — T9",
          "claim": "\"At equilibrium, ΔG is large and negative.\"",
          "truth": "<strong>FALSE.</strong> At equilibrium, ΔG = 0 exactly. ΔG &lt; 0 is the condition for a transformation to be occurring (moving towards equilibrium), not the condition once equilibrium is reached."
        },
        {
          "tag": "U1 — T10",
          "claim": "\"Heat capacity C_P is calculated from ΔH; you can't measure it directly.\"",
          "truth": "<strong>FALSE.</strong> It's the other way round: C<sub>P</sub> is the quantity that's <strong>measured directly</strong> (typically by DSC calorimetry), and ΔH and ΔS are then <em>calculated</em> from C<sub>P</sub> by integration over temperature."
        }
      ]
    },
    {
      "heading": "Unit 2 - Solution Thermodynamics",
      "items": [
        {
          "tag": "U2 - T1",
          "claim": "\"\\(\\Delta S_{\\mathrm{mix}}\\) can be negative for an ideal solution.\"",
          "truth": "<strong>FALSE.</strong> \\(X_A\\) and \\(X_B\\) are less than 1, so \\(\\ln X\\) is negative and \\(\\Delta S_{\\mathrm{mix}} = -R(X_A\\ln X_A + X_B\\ln X_B)\\) is always positive. Mixing always increases configurational entropy."
        },
        {
          "tag": "U2 - T2",
          "claim": "\"An ideal solution forms because mixing releases heat.\"",
          "truth": "<strong>FALSE.</strong> In an ideal solution \\(\\Delta H_{\\mathrm{mix}} = 0\\) because all bond energies are equal. It forms purely because of the entropy gain, \\(\\Delta G_{\\mathrm{mix}} = -T\\Delta S_{\\mathrm{mix}}\\)."
        },
        {
          "tag": "U2 - T3",
          "claim": "\"If \\(\\varepsilon > 0\\), A and B will never mix.\"",
          "truth": "<strong>FALSE.</strong> At high temperature the \\(T\\Delta S_{\\mathrm{mix}}\\) term beats the positive \\(\\Delta H_{\\mathrm{mix}}\\) and the atoms mix randomly. Only at low temperature can the enthalpy penalty cause clustering and a miscibility gap."
        },
        {
          "tag": "U2 - T4",
          "claim": "\"A negative \\(\\varepsilon\\) means the A-A and B-B bonds are stronger than the A-B bond.\"",
          "truth": "<strong>FALSE.</strong> Bond energies are negative, so \\(\\varepsilon < 0\\) means \\(E_{AB}\\) is <em>more negative</em> than the average of \\(E_{AA}\\) and \\(E_{BB}\\): the A-B bond is <strong>stronger</strong>. That favours ordering."
        },
        {
          "tag": "U2 - T5",
          "claim": "\"The free energy of mixing of an ideal solution becomes less negative as temperature increases.\"",
          "truth": "<strong>FALSE.</strong> \\(\\Delta G_{\\mathrm{mix}} = RT(X_A\\ln X_A + X_B\\ln X_B)\\) grows in magnitude with \\(T\\), so it becomes <strong>more</strong> negative. Higher temperature increases the entropy contribution."
        },
        {
          "tag": "U2 - T6",
          "claim": "\"An intermediate phase and an intermetallic compound are the same thing.\"",
          "truth": "<strong>FALSE.</strong> An intermetallic compound is the special case of an intermediate phase with a very narrow, steep free energy curve and a fixed formula \\(A_mB_n\\). Other intermediate phases are stable over a wide composition range."
        },
        {
          "tag": "U2 - T7",
          "claim": "\"In an ideal solution, \\(\\mu_A\\) is higher than the pure molar free energy \\(G_A\\).\"",
          "truth": "<strong>FALSE.</strong> \\(\\mu_A = G_A + RT\\ln X_A\\) and \\(\\ln X_A < 0\\), so \\(\\mu_A < G_A\\). Mixing lowers the free energy contribution of each component."
        },
        {
          "tag": "U2 - T8",
          "claim": "\"After mixing, the molar free energy of the solution is still \\(X_A G_A + X_B G_B\\).\"",
          "truth": "<strong>FALSE.</strong> That is \\(G_1\\), the free energy <em>before</em> mixing. After mixing it is \\(G = \\mu_A X_A + \\mu_B X_B\\), which sits lower by \\(\\Delta G_{\\mathrm{mix}}\\) when mixing is favourable."
        }
      ]
    }
  ],
  "trapsSubtitle": "Plausible-but-wrong claims the exam uses. Read each one. Know what's actually true.",
  "glossaryIntro": "Search across all terms instantly. Filter by unit."
};
