// EG2038 Study Site — content data
// Schema documented in study-site-core/js/render.js
window.SITE_CONFIG = {
  "wikiHint": "metallurgy",
  "slug": "eg2038",
  "topicIds": ["u1", "u2", "u3", "u4"],
  "navOrder": ["u1", "u2", "u3", "u4"],
  "topicColors": {
    "u1": "#00a87a",
    "u2": "#3b82e8",
    "u3": "#8855f5",
    "u4": "#e04545"
  },
  "topicLabels": {
    "u1": "Intro to Thermodynamics",
    "u2": "Solution Thermodynamics",
    "u3": "Using Phase Diagrams",
    "u4": "Construction of Phase Diagrams"
  }
};

window.SITE_CONTENT = {
  "home": {
    "tag": "Microstructure Evolution & Control in Metallic Materials — Swansea University",
    "title": "EG2038 Study Site",
    "subtitle": "Thermodynamics and kinetics as the twin forces behind every microstructure: why phases form, when they're stable, and how alloying, processing and heat treatment control the properties that follow. Built out unit by unit as the module runs.",
    "stats": [
      { "value": "4 of 10", "label": "Units built" },
      { "value": "80", "label": "Terms" },
      { "value": "23", "label": "Formulas" },
      { "value": "44", "label": "Exam Traps" }
    ],
    "extra": [
      { "type": "raw", "html": "<h2>Quick reference</h2>" },
      {
        "type": "raw",
        "html": "<div class=\"card-grid\">\n      <div class=\"topic-card\" onclick=\"showSection('formulas')\" style=\"--bar-color:#00a87a\">\n        <div class=\"topic-num\">Reference</div>\n        <div class=\"topic-title\">📐 Formula Sheet</div>\n        <div class=\"topic-desc\">Every equation covered so far. Variables defined, units flagged.</div>\n      </div>\n      <div class=\"topic-card\" onclick=\"showSection('glossary')\" style=\"--bar-color:#2fa15c\">\n        <div class=\"topic-num\">Reference</div>\n        <div class=\"topic-title\">📚 Glossary</div>\n        <div class=\"topic-desc\">80 terms from Units 1 to 4. Instant search, topic filter, and flashcard mode.</div>\n      </div>\n      <div class=\"topic-card\" onclick=\"showSection('traps')\" style=\"--bar-color:#e04545\">\n        <div class=\"topic-num\">Reference</div>\n        <div class=\"topic-title\">⚠️ MCQ Traps</div>\n        <div class=\"topic-desc\">Plausible-but-wrong claims the exam uses. Know what's actually true.</div>\n      </div>\n    </div>"
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
      "subtitle": "Alloys are mixtures, so before you can read a phase diagram you need to know what mixing does to free energy. This unit builds that up from ideal solutions, to atoms with bonding preferences, to real alloys, and finishes with the chemical potential that later units use to construct phase diagrams.",
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
              "text": "Each component's share of the free energy. The tool used to build phase diagrams."
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
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: \\(\\varepsilon > 0\\) at high and low temperature</div>\n<svg viewBox=\"0 0 640 340\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Free energy of mixing against composition for a regular solution with positive epsilon: a single smooth dip at high temperature, and a curve with a central hump flanked by two shallow dips at low temperature\"><defs></defs>\n<line x1=\"90\" y1=\"30\" x2=\"90\" y2=\"290\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<polygon points=\"90,24 85,34 95,34\" fill=\"#5e5e6c\"/>\n<line x1=\"90\" y1=\"290\" x2=\"590\" y2=\"290\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<polygon points=\"597,290 587,285 587,295\" fill=\"#5e5e6c\"/>\n<text x=\"340\" y=\"328\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\"></text>\n<text x=\"42\" y=\"160\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" transform=\"rotate(-90 42 160)\" font-family=\"Inter,system-ui,sans-serif\">free energy of mixing, ΔG/RT</text>\n<text x=\"340\" y=\"328\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">composition, X<tspan font-size=\"10\" dy=\"3\">B</tspan><tspan dy=\"-3\">&#8203;</tspan>  →</text>\n<line x1=\"90\" y1=\"121.1\" x2=\"590\" y2=\"121.1\" stroke=\"#5e5e6c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/>\n<text x=\"586\" y=\"114.0810810810811\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">ΔG<tspan font-size=\"10\" dy=\"3\">mix</tspan><tspan dy=\"-3\">&#8203;</tspan> = 0</text>\n<path d=\"M90.0,121.4 L91.3,126.3 L92.5,130.2 L93.8,133.6 L95.0,136.8 L96.3,139.7 L97.5,142.5 L98.8,145.2 L100.0,147.7 L101.3,150.1 L102.5,152.4 L103.8,154.7 L105.0,156.9 L106.3,159.0 L107.5,161.0 L108.8,163.0 L110.0,164.9 L111.3,166.8 L112.5,168.6 L113.8,170.4 L115.0,172.2 L116.3,173.9 L117.5,175.5 L118.8,177.2 L120.0,178.8 L121.3,180.3 L122.5,181.9 L123.8,183.4 L125.0,184.8 L126.3,186.3 L127.5,187.7 L128.8,189.1 L130.0,190.4 L131.3,191.8 L132.5,193.1 L133.8,194.4 L135.0,195.7 L136.3,196.9 L137.5,198.1 L138.8,199.3 L140.0,200.5 L141.3,201.7 L142.5,202.9 L143.8,204.0 L145.0,205.1 L146.3,206.2 L147.5,207.3 L148.8,208.4 L150.0,209.4 L151.3,210.4 L152.5,211.4 L153.8,212.4 L155.0,213.4 L156.3,214.4 L157.5,215.4 L158.8,216.3 L160.0,217.2 L161.3,218.2 L162.5,219.1 L163.8,220.0 L165.0,220.8 L166.3,221.7 L167.5,222.6 L168.8,223.4 L170.0,224.2 L171.3,225.1 L172.5,225.9 L173.8,226.7 L175.0,227.4 L176.3,228.2 L177.5,229.0 L178.8,229.7 L180.0,230.5 L181.3,231.2 L182.5,231.9 L183.8,232.7 L185.0,233.4 L186.3,234.1 L187.5,234.8 L188.8,235.4 L190.0,236.1 L191.3,236.8 L192.5,237.4 L193.8,238.0 L195.0,238.7 L196.3,239.3 L197.5,239.9 L198.8,240.5 L200.0,241.1 L201.3,241.7 L202.5,242.3 L203.8,242.9 L205.0,243.5 L206.3,244.0 L207.5,244.6 L208.8,245.1 L210.0,245.6 L211.3,246.2 L212.5,246.7 L213.8,247.2 L215.0,247.7 L216.3,248.2 L217.5,248.7 L218.8,249.2 L220.0,249.7 L221.3,250.2 L222.5,250.6 L223.8,251.1 L225.0,251.5 L226.3,252.0 L227.5,252.4 L228.8,252.9 L230.0,253.3 L231.3,253.7 L232.5,254.1 L233.8,254.6 L235.0,255.0 L236.3,255.4 L237.5,255.7 L238.8,256.1 L240.0,256.5 L241.3,256.9 L242.5,257.3 L243.8,257.6 L245.0,258.0 L246.3,258.3 L247.5,258.7 L248.8,259.0 L250.0,259.4 L251.3,259.7 L252.5,260.0 L253.8,260.3 L255.0,260.6 L256.3,260.9 L257.5,261.2 L258.8,261.5 L260.0,261.8 L261.3,262.1 L262.5,262.4 L263.8,262.7 L265.0,263.0 L266.3,263.2 L267.5,263.5 L268.8,263.7 L270.0,264.0 L271.3,264.2 L272.5,264.5 L273.8,264.7 L275.0,265.0 L276.3,265.2 L277.5,265.4 L278.8,265.6 L280.0,265.8 L281.3,266.0 L282.5,266.2 L283.8,266.4 L285.0,266.6 L286.3,266.8 L287.5,267.0 L288.8,267.2 L290.0,267.4 L291.3,267.5 L292.5,267.7 L293.8,267.9 L295.0,268.0 L296.3,268.2 L297.5,268.3 L298.8,268.5 L300.0,268.6 L301.3,268.7 L302.5,268.9 L303.8,269.0 L305.0,269.1 L306.3,269.2 L307.5,269.4 L308.8,269.5 L310.0,269.6 L311.3,269.7 L312.5,269.8 L313.8,269.9 L315.0,269.9 L316.3,270.0 L317.5,270.1 L318.8,270.2 L320.0,270.3 L321.3,270.3 L322.5,270.4 L323.8,270.4 L325.0,270.5 L326.3,270.5 L327.5,270.6 L328.8,270.6 L330.0,270.7 L331.3,270.7 L332.5,270.7 L333.8,270.7 L335.0,270.8 L336.3,270.8 L337.5,270.8 L338.8,270.8 L340.0,270.8 L341.2,270.8 L342.5,270.8 L343.7,270.8 L345.0,270.8 L346.2,270.7 L347.5,270.7 L348.7,270.7 L350.0,270.7 L351.2,270.6 L352.5,270.6 L353.7,270.5 L355.0,270.5 L356.2,270.4 L357.5,270.4 L358.7,270.3 L360.0,270.3 L361.2,270.2 L362.5,270.1 L363.7,270.0 L365.0,269.9 L366.2,269.9 L367.5,269.8 L368.7,269.7 L370.0,269.6 L371.2,269.5 L372.5,269.4 L373.7,269.2 L375.0,269.1 L376.2,269.0 L377.5,268.9 L378.7,268.7 L380.0,268.6 L381.2,268.5 L382.5,268.3 L383.7,268.2 L385.0,268.0 L386.2,267.9 L387.5,267.7 L388.7,267.5 L390.0,267.4 L391.2,267.2 L392.5,267.0 L393.7,266.8 L395.0,266.6 L396.2,266.4 L397.5,266.2 L398.7,266.0 L400.0,265.8 L401.2,265.6 L402.5,265.4 L403.7,265.2 L405.0,265.0 L406.2,264.7 L407.5,264.5 L408.7,264.2 L410.0,264.0 L411.2,263.7 L412.5,263.5 L413.7,263.2 L415.0,263.0 L416.2,262.7 L417.5,262.4 L418.7,262.1 L420.0,261.8 L421.2,261.5 L422.5,261.2 L423.7,260.9 L425.0,260.6 L426.2,260.3 L427.5,260.0 L428.7,259.7 L430.0,259.4 L431.2,259.0 L432.5,258.7 L433.7,258.3 L435.0,258.0 L436.2,257.6 L437.5,257.3 L438.7,256.9 L440.0,256.5 L441.2,256.1 L442.5,255.7 L443.7,255.4 L445.0,255.0 L446.2,254.6 L447.5,254.1 L448.7,253.7 L450.0,253.3 L451.2,252.9 L452.5,252.4 L453.7,252.0 L455.0,251.5 L456.2,251.1 L457.5,250.6 L458.7,250.2 L460.0,249.7 L461.2,249.2 L462.5,248.7 L463.7,248.2 L465.0,247.7 L466.2,247.2 L467.5,246.7 L468.7,246.2 L470.0,245.6 L471.2,245.1 L472.5,244.6 L473.7,244.0 L475.0,243.5 L476.2,242.9 L477.5,242.3 L478.7,241.7 L480.0,241.1 L481.2,240.5 L482.5,239.9 L483.7,239.3 L485.0,238.7 L486.2,238.0 L487.5,237.4 L488.7,236.8 L490.0,236.1 L491.2,235.4 L492.5,234.8 L493.7,234.1 L495.0,233.4 L496.2,232.7 L497.5,231.9 L498.7,231.2 L500.0,230.5 L501.2,229.7 L502.5,229.0 L503.7,228.2 L505.0,227.4 L506.2,226.7 L507.5,225.9 L508.7,225.1 L510.0,224.2 L511.2,223.4 L512.5,222.6 L513.7,221.7 L515.0,220.8 L516.2,220.0 L517.5,219.1 L518.7,218.2 L520.0,217.2 L521.2,216.3 L522.5,215.4 L523.7,214.4 L525.0,213.4 L526.2,212.4 L527.5,211.4 L528.7,210.4 L530.0,209.4 L531.2,208.4 L532.5,207.3 L533.7,206.2 L535.0,205.1 L536.2,204.0 L537.5,202.9 L538.7,201.7 L540.0,200.5 L541.2,199.3 L542.5,198.1 L543.7,196.9 L545.0,195.7 L546.2,194.4 L547.5,193.1 L548.7,191.8 L550.0,190.4 L551.2,189.1 L552.5,187.7 L553.7,186.3 L555.0,184.8 L556.2,183.4 L557.5,181.9 L558.7,180.3 L560.0,178.8 L561.2,177.2 L562.5,175.5 L563.7,173.9 L565.0,172.2 L566.2,170.4 L567.5,168.6 L568.7,166.8 L570.0,164.9 L571.2,163.0 L572.5,161.0 L573.7,159.0 L575.0,156.9 L576.2,154.7 L577.5,152.4 L578.7,150.1 L580.0,147.7 L581.2,145.2 L582.5,142.5 L583.7,139.7 L585.0,136.8 L586.2,133.6 L587.5,130.2 L588.7,126.3 L590.0,121.4\" fill=\"none\" stroke=\"#00a87a\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>\n<path d=\"M90.0,121.3 L91.3,124.6 L92.5,126.8 L93.8,128.5 L95.0,130.0 L96.3,131.3 L97.5,132.5 L98.8,133.5 L100.0,134.4 L101.3,135.2 L102.5,135.9 L103.8,136.5 L105.0,137.1 L106.3,137.7 L107.5,138.1 L108.8,138.5 L110.0,138.9 L111.3,139.2 L112.5,139.5 L113.8,139.8 L115.0,140.0 L116.3,140.2 L117.5,140.4 L118.8,140.5 L120.0,140.6 L121.3,140.7 L122.5,140.7 L123.8,140.8 L125.0,140.8 L126.3,140.8 L127.5,140.8 L128.8,140.7 L130.0,140.7 L131.3,140.6 L132.5,140.5 L133.8,140.4 L135.0,140.3 L136.3,140.1 L137.5,140.0 L138.8,139.9 L140.0,139.7 L141.3,139.5 L142.5,139.3 L143.8,139.1 L145.0,138.9 L146.3,138.7 L147.5,138.5 L148.8,138.2 L150.0,138.0 L151.3,137.8 L152.5,137.5 L153.8,137.2 L155.0,137.0 L156.3,136.7 L157.5,136.4 L158.8,136.1 L160.0,135.9 L161.3,135.6 L162.5,135.3 L163.8,135.0 L165.0,134.7 L166.3,134.3 L167.5,134.0 L168.8,133.7 L170.0,133.4 L171.3,133.1 L172.5,132.7 L173.8,132.4 L175.0,132.1 L176.3,131.7 L177.5,131.4 L178.8,131.1 L180.0,130.7 L181.3,130.4 L182.5,130.0 L183.8,129.7 L185.0,129.4 L186.3,129.0 L187.5,128.7 L188.8,128.3 L190.0,128.0 L191.3,127.6 L192.5,127.3 L193.8,126.9 L195.0,126.6 L196.3,126.2 L197.5,125.9 L198.8,125.5 L200.0,125.2 L201.3,124.8 L202.5,124.5 L203.8,124.1 L205.0,123.8 L206.3,123.4 L207.5,123.1 L208.8,122.7 L210.0,122.4 L211.3,122.0 L212.5,121.7 L213.8,121.4 L215.0,121.0 L216.3,120.7 L217.5,120.3 L218.8,120.0 L220.0,119.7 L221.3,119.3 L222.5,119.0 L223.8,118.7 L225.0,118.4 L226.3,118.0 L227.5,117.7 L228.8,117.4 L230.0,117.1 L231.3,116.8 L232.5,116.4 L233.8,116.1 L235.0,115.8 L236.3,115.5 L237.5,115.2 L238.8,114.9 L240.0,114.6 L241.3,114.3 L242.5,114.0 L243.8,113.7 L245.0,113.4 L246.3,113.2 L247.5,112.9 L248.8,112.6 L250.0,112.3 L251.3,112.0 L252.5,111.8 L253.8,111.5 L255.0,111.2 L256.3,111.0 L257.5,110.7 L258.8,110.5 L260.0,110.2 L261.3,110.0 L262.5,109.7 L263.8,109.5 L265.0,109.2 L266.3,109.0 L267.5,108.8 L268.8,108.5 L270.0,108.3 L271.3,108.1 L272.5,107.9 L273.8,107.7 L275.0,107.4 L276.3,107.2 L277.5,107.0 L278.8,106.8 L280.0,106.6 L281.3,106.4 L282.5,106.3 L283.8,106.1 L285.0,105.9 L286.3,105.7 L287.5,105.5 L288.8,105.4 L290.0,105.2 L291.3,105.0 L292.5,104.9 L293.8,104.7 L295.0,104.6 L296.3,104.4 L297.5,104.3 L298.8,104.2 L300.0,104.0 L301.3,103.9 L302.5,103.8 L303.8,103.6 L305.0,103.5 L306.3,103.4 L307.5,103.3 L308.8,103.2 L310.0,103.1 L311.3,103.0 L312.5,102.9 L313.8,102.8 L315.0,102.7 L316.3,102.6 L317.5,102.6 L318.8,102.5 L320.0,102.4 L321.3,102.3 L322.5,102.3 L323.8,102.2 L325.0,102.2 L326.3,102.1 L327.5,102.1 L328.8,102.0 L330.0,102.0 L331.3,102.0 L332.5,102.0 L333.8,101.9 L335.0,101.9 L336.3,101.9 L337.5,101.9 L338.8,101.9 L340.0,101.9 L341.2,101.9 L342.5,101.9 L343.7,101.9 L345.0,101.9 L346.2,101.9 L347.5,102.0 L348.7,102.0 L350.0,102.0 L351.2,102.0 L352.5,102.1 L353.7,102.1 L355.0,102.2 L356.2,102.2 L357.5,102.3 L358.7,102.3 L360.0,102.4 L361.2,102.5 L362.5,102.6 L363.7,102.6 L365.0,102.7 L366.2,102.8 L367.5,102.9 L368.7,103.0 L370.0,103.1 L371.2,103.2 L372.5,103.3 L373.7,103.4 L375.0,103.5 L376.2,103.6 L377.5,103.8 L378.7,103.9 L380.0,104.0 L381.2,104.2 L382.5,104.3 L383.7,104.4 L385.0,104.6 L386.2,104.7 L387.5,104.9 L388.7,105.0 L390.0,105.2 L391.2,105.4 L392.5,105.5 L393.7,105.7 L395.0,105.9 L396.2,106.1 L397.5,106.3 L398.7,106.4 L400.0,106.6 L401.2,106.8 L402.5,107.0 L403.7,107.2 L405.0,107.4 L406.2,107.7 L407.5,107.9 L408.7,108.1 L410.0,108.3 L411.2,108.5 L412.5,108.8 L413.7,109.0 L415.0,109.2 L416.2,109.5 L417.5,109.7 L418.7,110.0 L420.0,110.2 L421.2,110.5 L422.5,110.7 L423.7,111.0 L425.0,111.2 L426.2,111.5 L427.5,111.8 L428.7,112.0 L430.0,112.3 L431.2,112.6 L432.5,112.9 L433.7,113.2 L435.0,113.4 L436.2,113.7 L437.5,114.0 L438.7,114.3 L440.0,114.6 L441.2,114.9 L442.5,115.2 L443.7,115.5 L445.0,115.8 L446.2,116.1 L447.5,116.4 L448.7,116.8 L450.0,117.1 L451.2,117.4 L452.5,117.7 L453.7,118.0 L455.0,118.4 L456.2,118.7 L457.5,119.0 L458.7,119.3 L460.0,119.7 L461.2,120.0 L462.5,120.3 L463.7,120.7 L465.0,121.0 L466.2,121.4 L467.5,121.7 L468.7,122.0 L470.0,122.4 L471.2,122.7 L472.5,123.1 L473.7,123.4 L475.0,123.8 L476.2,124.1 L477.5,124.5 L478.7,124.8 L480.0,125.2 L481.2,125.5 L482.5,125.9 L483.7,126.2 L485.0,126.6 L486.2,126.9 L487.5,127.3 L488.7,127.6 L490.0,128.0 L491.2,128.3 L492.5,128.7 L493.7,129.0 L495.0,129.4 L496.2,129.7 L497.5,130.0 L498.7,130.4 L500.0,130.7 L501.2,131.1 L502.5,131.4 L503.7,131.7 L505.0,132.1 L506.2,132.4 L507.5,132.7 L508.7,133.1 L510.0,133.4 L511.2,133.7 L512.5,134.0 L513.7,134.3 L515.0,134.7 L516.2,135.0 L517.5,135.3 L518.7,135.6 L520.0,135.9 L521.2,136.1 L522.5,136.4 L523.7,136.7 L525.0,137.0 L526.2,137.2 L527.5,137.5 L528.7,137.8 L530.0,138.0 L531.2,138.2 L532.5,138.5 L533.7,138.7 L535.0,138.9 L536.2,139.1 L537.5,139.3 L538.7,139.5 L540.0,139.7 L541.2,139.9 L542.5,140.0 L543.7,140.1 L545.0,140.3 L546.2,140.4 L547.5,140.5 L548.7,140.6 L550.0,140.7 L551.2,140.7 L552.5,140.8 L553.7,140.8 L555.0,140.8 L556.2,140.8 L557.5,140.7 L558.7,140.7 L560.0,140.6 L561.2,140.5 L562.5,140.4 L563.7,140.2 L565.0,140.0 L566.2,139.8 L567.5,139.5 L568.7,139.2 L570.0,138.9 L571.2,138.5 L572.5,138.1 L573.7,137.7 L575.0,137.1 L576.2,136.5 L577.5,135.9 L578.7,135.2 L580.0,134.4 L581.2,133.5 L582.5,132.5 L583.7,131.3 L585.0,130.0 L586.2,128.5 L587.5,126.8 L588.7,124.6 L590.0,121.3\" fill=\"none\" stroke=\"#e04545\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>\n<text x=\"340.0\" y=\"230.7929664053869\" fill=\"#00a87a\" font-size=\"12.5\" font-weight=\"600\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">high T: one smooth dip</text>\n<text x=\"340.0\" y=\"246.7929664053869\" fill=\"#00a87a\" font-size=\"11.5\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">(random mixing)</text>\n<text x=\"340.0\" y=\"89.87404748646799\" fill=\"#e04545\" font-size=\"12.5\" font-weight=\"600\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">low T: hump in the middle</text>\n<circle cx=\"125.4\" cy=\"140.8\" r=\"5\" fill=\"#e04545\" stroke=\"#0c0c10\" stroke-width=\"1.5\"/>\n<circle cx=\"554.6\" cy=\"140.8\" r=\"5\" fill=\"#e04545\" stroke=\"#0c0c10\" stroke-width=\"1.5\"/>\n<text x=\"129.375\" y=\"170.7909950490024\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">A-rich</text>\n<text x=\"550.625\" y=\"170.79099504900242\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">B-rich</text>\n<text x=\"90\" y=\"306\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">pure A</text>\n<text x=\"590\" y=\"306\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">pure B</text>\n</svg>\n<p style=\"margin-top:14px;margin-bottom:0\">A hump means a 50:50 mixture has <em>higher</em> free energy than splitting into an A-rich and a B-rich region. The alloy un-mixes into two phases: a <strong>miscibility gap</strong>. A later unit puts this on a phase diagram. (Plotted from \\(\\Delta G_{\\mathrm{mix}}/RT = (\\Omega/RT)X_AX_B + X_A\\ln X_A + X_B\\ln X_B\\) with \\(\\Omega/RT = 1\\) and \\(3\\).)</p>\n</div>"
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
          "title": "Why this matters for phase diagrams"
        },
        {
          "type": "formulablock",
          "name": "Equilibrium between two phases",
          "eqs": [
            "\\mu_A^{\\alpha} = \\mu_A^{\\beta} \\qquad \\mu_B^{\\alpha} = \\mu_B^{\\beta}"
          ],
          "note": "On a \\(G\\) against \\(X_B\\) graph, \\(\\mu_A\\) and \\(\\mu_B\\) are where the tangent at a given composition hits the left and right edges. Two phases are in equilibrium when <strong>one straight line touches both of their curves</strong>. That is the common tangent construction, and it is how phase diagrams are built."
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
    {
      "id": "u3",
      "numLabel": "Unit 3 of 10",
      "title": "Using Phase Diagrams",
      "subtitle": "A phase diagram is a map of what is stable at each temperature and composition. This unit turns it into a calculator: identify the phases, read their compositions off a tie line, find their proportions with the lever rule, then predict the microstructure a slowly cooled alloy ends up with.",
      "sections": [
        {
          "type": "toc",
          "title": "In this unit",
          "items": [
            {
              "href": "#u3-big",
              "label": "The big picture"
            },
            {
              "href": "#u3-phases",
              "label": "Phases and their compositions"
            },
            {
              "href": "#u3-lever",
              "label": "Proportions: the lever rule"
            },
            {
              "href": "#u3-volume",
              "label": "What you calculate vs what you see"
            },
            {
              "href": "#u3-iso",
              "label": "Isomorphous systems (Cu-Ni)"
            },
            {
              "href": "#u3-eutectic",
              "label": "Eutectic systems (Pb-Sn)"
            },
            {
              "href": "#u3-lamellar",
              "label": "Why eutectics are lamellar"
            },
            {
              "href": "#u3-peritectic",
              "label": "Peritectic systems"
            }
          ]
        },
        {
          "type": "h2",
          "id": "u3-big",
          "text": "The Big Picture"
        },
        {
          "type": "p",
          "text": "Solder is a good place to start. The tin-lead solder that held electronics together for decades sits close to the eutectic composition of the Pb-Sn system, so it melts and freezes at one sharp temperature instead of going slushy over a range. That choice was made by reading a phase diagram. A phase diagram is a map: give it a temperature and an overall composition, and it tells you which phases are present, what each one is made of, and how much of each there is.",
          "class": ""
        },
        {
          "type": "p",
          "text": "Unit 2 showed where the map comes from (free energy curves and common tangents). This unit is about reading it. Every question here follows the same three steps.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "1. Find the point",
              "color": "#8855f5",
              "text": "Mark the alloy's overall composition \\(C_0\\) on the horizontal axis and the temperature on the vertical axis. The field the point lands in tells you which phases exist."
            },
            {
              "title": "2. Name the phases",
              "color": "#8855f5",
              "text": "One-phase field: that phase, with composition \\(C_0\\). Two-phase field: draw a horizontal tie line through the point. Where it ends on the field boundaries gives each phase's composition."
            },
            {
              "title": "3. Find the proportions",
              "color": "#8855f5",
              "text": "In a two-phase field, apply the lever rule to the tie line. For a microstructure, trace the alloy down from the liquid and note what forms in each field it crosses."
            }
          ]
        },
        {
          "type": "h2",
          "id": "u3-phases",
          "text": "Phases and Their Compositions"
        },
        {
          "type": "p",
          "text": "The tie line is always <strong>horizontal</strong>, because two phases can only be in equilibrium at the same temperature. Its ends touch the phase boundaries on either side of the two-phase field, and where each end lands on the composition axis is the composition of that phase. That is usually <em>not</em> the alloy's own composition.",
          "class": ""
        },
        {
          "type": "p",
          "text": "The first example uses the Fe-C diagram. Keep the one from the lecture slides open beside these notes, since the figure itself is not reproduced here. The later Pb-Sn, Cu-Ni and peritectic examples have schematic diagrams on this page.",
          "class": ""
        },
        {
          "type": "example",
          "label": "Worked example: reading the Fe-C diagram",
          "q": "Name the phases, and the composition of each, for three Fe-C alloys: Fe-1 wt% C at 1200 °C, Fe-4 wt% C at 600 °C, and Fe-3 wt% C at 1000 °C.",
          "steps": [
            "Fe-1 wt% C at 1200 °C: the point sits inside the austenite (γ) field. One phase, austenite, with the full 1 wt% C",
            "Fe-4 wt% C at 600 °C: the point sits in the ferrite + cementite field, so the phases are ferrite (α) and cementite (Fe₃C)",
            "Fe-3 wt% C at 1000 °C: the point is in the austenite + cementite field. Draw the horizontal tie line. Its left end meets the austenite boundary at about 1.7 wt% C and its right end meets cementite at 6.7 wt% C"
          ],
          "answer": "At 1000 °C the Fe-3 wt% C alloy is austenite (about 1.7 wt% C) plus cementite (6.7 wt% C). Neither phase has the alloy's own 3 wt% C."
        },
        {
          "type": "h3",
          "text": "Three reactions to recognise"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Invariant reactions on the Fe-C diagram",
          "html": "<ul><li><strong>Peritectic</strong> at 1493 °C, Fe-0.16 wt% C: liquid + δ-ferrite → austenite</li><li><strong>Eutectic</strong> at 1147 °C, Fe-4.3 wt% C: liquid → austenite (2.14 wt% C) + cementite (6.7 wt% C)</li><li><strong>Eutectoid</strong> at 727 °C, Fe-0.76 wt% C: austenite (0.76 wt% C) → ferrite (0.02 wt% C) + cementite (6.7 wt% C)</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "The naming code",
          "html": "<ul><li><strong>eu-</strong> means <strong>one becomes two</strong>. <strong>peri-</strong> means <strong>two become one</strong></li><li><strong>-tic</strong> means a <strong>liquid</strong> is involved. <strong>-toid</strong> means the same reaction played out entirely in the <strong>solid</strong></li></ul><p style=\"margin-top:8px\">Pick one prefix and one ending and you have named the reaction: eutectic is a liquid splitting in two, peritectic is a liquid and a solid combining into one. Unit 4 meets the all-solid pair (eutectoid and peritectoid) in full.</p><p style=\"margin-top:8px\">The rest of this unit uses the Pb-Sn eutectic (183 °C, 61.9 wt% Sn) and generic peritectic diagrams. Unit 9 returns to Fe-C in full.</p>"
        },
        {
          "type": "h2",
          "id": "u3-lever",
          "text": "Proportions: The Lever Rule"
        },
        {
          "type": "p",
          "text": "Picture a seesaw. A heavy child and a light child balance when the heavy one sits closer to the pivot. The tie line works the same way: the alloy composition \\(C_0\\) is the pivot, and the two phase compositions are the seats. The phase whose composition is <strong>closer to \\(C_0\\)</strong> is the one there is more of.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: the tie line as a lever</div>\n<svg viewBox=\"0 0 640 250\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"A horizontal tie line across a two-phase field with the alloy composition C0 as the pivot. The left arm R runs from CL to C0 and the right arm S runs from C0 to C-alpha.\">\n<defs><marker id=\"u3A\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#8855f5\"/></marker><marker id=\"u3S\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#8855f5\"/></marker></defs>\n<line x1=\"60\" y1=\"190\" x2=\"590\" y2=\"190\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<polygon points=\"597,190 587,185 587,195\" fill=\"#5e5e6c\"/>\n<line x1=\"140\" y1=\"100\" x2=\"140\" y2=\"190\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/>\n<line x1=\"290\" y1=\"100\" x2=\"290\" y2=\"190\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/>\n<line x1=\"510\" y1=\"100\" x2=\"510\" y2=\"190\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/>\n<line x1=\"140\" y1=\"100\" x2=\"510\" y2=\"100\" stroke=\"#8855f5\" stroke-width=\"3\"/>\n<polygon points=\"290,108 278,130 302,130\" fill=\"#5e5e6c\" opacity=\"0.55\"/>\n<circle cx=\"140\" cy=\"100\" r=\"5.5\" fill=\"#8855f5\"/>\n<circle cx=\"510\" cy=\"100\" r=\"5.5\" fill=\"#8855f5\"/>\n<circle cx=\"290\" cy=\"100\" r=\"6.5\" fill=\"#e04545\"/>\n<text x=\"140\" y=\"80\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">liquid</text>\n<text x=\"290\" y=\"80\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">alloy (pivot)</text>\n<text x=\"510\" y=\"80\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#945; solid</text>\n<line x1=\"144\" y1=\"158\" x2=\"286\" y2=\"158\" stroke=\"#8855f5\" stroke-width=\"1.5\" marker-start=\"url(#u3S)\" marker-end=\"url(#u3A)\"/>\n<line x1=\"294\" y1=\"158\" x2=\"506\" y2=\"158\" stroke=\"#8855f5\" stroke-width=\"1.5\" marker-start=\"url(#u3S)\" marker-end=\"url(#u3A)\"/>\n<text x=\"215\" y=\"148\" fill=\"#5e5e6c\" font-size=\"15\" font-style=\"italic\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">R</text>\n<text x=\"400\" y=\"148\" fill=\"#5e5e6c\" font-size=\"15\" font-style=\"italic\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">S</text>\n<text x=\"137\" y=\"214\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">C</text><text x=\"145\" y=\"218\" fill=\"#90909c\" font-size=\"10\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">L</text>\n<text x=\"287\" y=\"214\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">C</text><text x=\"295\" y=\"218\" fill=\"#90909c\" font-size=\"10\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">0</text>\n<text x=\"507\" y=\"214\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">C</text><text x=\"515\" y=\"218\" fill=\"#90909c\" font-size=\"10\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">&#945;</text>\n<text x=\"590\" y=\"236\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">composition &#8594;</text>\n</svg>\n<p style=\"text-align:center;margin-top:6px\">\\(R = C_0 - C_L\\)&nbsp;&nbsp;&nbsp;\\(S = C_\\alpha - C_0\\)&nbsp;&nbsp;&nbsp;\\(W_\\alpha = \\dfrac{R}{R+S}\\)&nbsp;&nbsp;&nbsp;\\(W_L = \\dfrac{S}{R+S}\\)</p>\n</div>"
        },
        {
          "type": "formulablock",
          "name": "Lever rule",
          "eqs": [
            "W_\\alpha = \\frac{C_0 - C_L}{C_\\alpha - C_L} \\qquad W_L = \\frac{C_\\alpha - C_0}{C_\\alpha - C_L}",
            "W_\\alpha + W_L = 1"
          ],
          "vars": [
            {
              "symbol": "\\(C_0\\)",
              "desc": "overall alloy composition (wt%)"
            },
            {
              "symbol": "\\(C_L,\\ C_\\alpha\\)",
              "desc": "phase compositions, read from the two ends of the tie line"
            },
            {
              "symbol": "\\(W\\)",
              "desc": "mass fraction. Multiply by 100 for wt%"
            }
          ],
          "note": "Each fraction is the length of the arm on the <strong>opposite</strong> side of the alloy point from that phase, divided by the whole tie line. For \\(\\alpha\\) the numerator is \\(C_0 - C_L\\), the arm that reaches towards the liquid end."
        },
        {
          "type": "h3",
          "text": "Where it comes from"
        },
        {
          "type": "formulablock",
          "name": "Mass balance",
          "eqs": [
            "W_L + W_\\alpha = 1",
            "C_0 = C_L W_L + C_\\alpha W_\\alpha",
            "C_0 = C_L W_L + C_\\alpha (1 - W_L) \\;\\Rightarrow\\; W_L = \\frac{C_\\alpha - C_0}{C_\\alpha - C_L}"
          ],
          "note": "The first line says the fractions add to one. The second is conservation of mass: the amount of B in the alloy has to equal the amount shared between the two phases. Substitute and rearrange and the lever rule drops out."
        },
        {
          "type": "example",
          "label": "Worked example: Cu-35 wt% Ni at 1250 °C",
          "q": "A Cu-35 wt% Ni alloy at 1250 °C sits in the α + liquid field. The tie line meets the liquidus at 31.5 wt% Ni and the solidus at 42.5 wt% Ni. How much of each phase is there?",
          "steps": [
            "Read off the pieces: \\(C_0 = 35\\), \\(C_L = 31.5\\), \\(C_\\alpha = 42.5\\) (all wt% Ni). Tie line length: \\(42.5 - 31.5 = 11\\)",
            "\\(W_\\alpha = (35 - 31.5)/11 = 3.5/11 = 0.318\\)",
            "\\(W_L = (42.5 - 35)/11 = 7.5/11 = 0.682\\)"
          ],
          "answer": "31.8 wt% α (42.5 wt% Ni) and 68.2 wt% liquid (31.5 wt% Ni). They add to 100, and liquid is the larger share because 35 sits closer to 31.5 than to 42.5."
        },
        {
          "type": "p",
          "text": "At 1300 °C the same alloy is entirely liquid, and at 1175 °C it is entirely α. Single-phase fields need no lever rule: the phase is 100% and has composition \\(C_0\\).",
          "class": ""
        },
        {
          "type": "example",
          "label": "Worked example: Pb-40 wt% Sn at two temperatures",
          "q": "Find the phases, their compositions and their proportions for a Pb-40 wt% Sn alloy at 210 °C and at 150 °C.",
          "steps": [
            "At 210 °C the alloy is in α + L. The tie line reaches α at 17 wt% Sn and the liquid at 52 wt% Sn",
            "\\(W_\\alpha = (52 - 40)/(52 - 17) = 12/35 = 34.3\\%\\) and \\(W_L = (40 - 17)/(52 - 17) = 23/35 = 65.7\\%\\)",
            "At 150 °C the alloy is in α + β. The tie line reaches α at 10 wt% Sn and β at 98 wt% Sn",
            "\\(W_\\alpha = (98 - 40)/(98 - 10) = 58/88 = 65.9\\%\\) and \\(W_\\beta = (40 - 10)/(98 - 10) = 30/88 = 34.1\\%\\)"
          ],
          "answer": "Same alloy, two different pairs of phases, and the balance swings from mostly liquid to mostly α. Always redraw the tie line at the temperature you are asked about."
        },
        {
          "type": "example",
          "label": "Try it: lever rule on Fe-C",
          "q": "Fe-3 wt% C at 1000 °C is austenite (1.7 wt% C) plus cementite (6.7 wt% C). How much of each?",
          "steps": [
            "Tie line length: \\(6.7 - 1.7 = 5.0\\)",
            "\\(W_\\gamma = (6.7 - 3)/5.0 = 3.7/5.0 = 0.74\\)",
            "\\(W_{\\mathrm{Fe_3C}} = (3 - 1.7)/5.0 = 1.3/5.0 = 0.26\\)"
          ],
          "answer": "74 wt% austenite and 26 wt% cementite. (Worked from the compositions on the lecture's Fe-C slide.)"
        },
        {
          "type": "h2",
          "id": "u3-volume",
          "text": "What You Calculate vs What You See"
        },
        {
          "type": "p",
          "text": "The lever rule gives <strong>mass</strong> fractions. A micrograph shows <strong>area</strong> fractions, which stand in for volume fractions. If the two phases have different densities the numbers differ, so convert.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Mass fraction to volume fraction",
          "eqs": [
            "V_\\alpha = \\frac{W_\\alpha/\\rho_\\alpha}{W_\\alpha/\\rho_\\alpha + W_L/\\rho_L} \\qquad V_L = \\frac{W_L/\\rho_L}{W_\\alpha/\\rho_\\alpha + W_L/\\rho_L}"
          ],
          "vars": [
            {
              "symbol": "\\(\\rho_\\alpha,\\ \\rho_L\\)",
              "desc": "densities of the two phases"
            }
          ],
          "note": "Divide each mass by its density to get a volume, then take each volume as a share of the total. A dense phase takes up less volume than its mass share suggests."
        },
        {
          "type": "example",
          "label": "Worked example: 50:50 by mass",
          "q": "A mixture is 50 wt% Pb and 50 wt% Sn. Treat the two phases as pure Pb (11.3 g/cm³) and pure Sn (7.3 g/cm³), which are rounded textbook values, not lecture data. What is the volume fraction of Pb?",
          "steps": [
            "Volume of Pb in 100 g: \\(50/11.3 = 4.42\\ \\mathrm{cm^3}\\)",
            "Volume of Sn in 100 g: \\(50/7.3 = 6.85\\ \\mathrm{cm^3}\\)",
            "\\(V_{\\mathrm{Pb}} = 4.42/(4.42 + 6.85) = 0.39\\)"
          ],
          "answer": "Pb is 50 wt% but only about 39 vol%, because it is the denser metal. In a micrograph Pb would cover noticeably less than half the area."
        },
        {
          "type": "h2",
          "id": "u3-iso",
          "text": "Microstructure in an Isomorphous System (Cu-Ni)"
        },
        {
          "type": "p",
          "text": "Cupronickel is used for coins and seawater pipework, and Cu-Ni is the textbook isomorphous system: the two metals dissolve in each other in every proportion, so the diagram has a liquid field, one solid α field and a two-phase band between them. To predict a microstructure, take an alloy and follow it down from the liquid, stopping at each field it crosses. The overall composition never changes on the way down. Only the phases and their compositions do.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: following Cu-35 wt% Ni down from the liquid (schematic)</div>\n<svg viewBox=\"0 0 640 340\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Schematic Cu-Ni isomorphous phase diagram between 20 and 50 weight percent nickel. A dashed vertical line at 35 weight percent Ni passes through five marked points: a in the liquid, b on the liquidus, c inside the two-phase band with a tie line from 32 to 43 weight percent Ni, d on the solidus, and e in the solid alpha field.\">\n<line x1=\"70\" y1=\"40\" x2=\"70\" y2=\"270\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"70,34 65,44 75,44\" fill=\"#5e5e6c\"/>\n<line x1=\"70\" y1=\"270\" x2=\"600\" y2=\"270\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"607,270 597,265 597,275\" fill=\"#5e5e6c\"/>\n<path d=\"M70,198 L590,78\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\"/>\n<path d=\"M70,242 L590,122\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\"/>\n<line x1=\"330\" y1=\"270\" x2=\"330\" y2=\"70\" stroke=\"#8855f5\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<line x1=\"278\" y1=\"150\" x2=\"468.7\" y2=\"150\" stroke=\"#8855f5\" stroke-width=\"3\"/>\n<circle cx=\"278\" cy=\"150\" r=\"4.5\" fill=\"#8855f5\"/><circle cx=\"468.7\" cy=\"150\" r=\"4.5\" fill=\"#8855f5\"/>\n<text x=\"270\" y=\"154\" fill=\"#8855f5\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">32</text>\n<text x=\"476.7\" y=\"154\" fill=\"#8855f5\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">43</text>\n<circle cx=\"330\" cy=\"100\" r=\"5\" fill=\"#e04545\"/>\n<text x=\"341\" y=\"104\" fill=\"#e04545\" font-size=\"14\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">a</text>\n<circle cx=\"330\" cy=\"138\" r=\"5\" fill=\"#e04545\"/>\n<text x=\"341\" y=\"132\" fill=\"#e04545\" font-size=\"14\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">b</text>\n<circle cx=\"330\" cy=\"150\" r=\"5\" fill=\"#e04545\"/>\n<text x=\"342\" y=\"168\" fill=\"#e04545\" font-size=\"14\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">c</text>\n<circle cx=\"330\" cy=\"182\" r=\"5\" fill=\"#e04545\"/>\n<text x=\"341\" y=\"186\" fill=\"#e04545\" font-size=\"14\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">d</text>\n<circle cx=\"330\" cy=\"220\" r=\"5\" fill=\"#e04545\"/>\n<text x=\"341\" y=\"224\" fill=\"#e04545\" font-size=\"14\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">e</text>\n<text x=\"174\" y=\"80\" fill=\"#5e5e6c\" font-size=\"15\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">L</text>\n<text x=\"503.3\" y=\"170\" fill=\"#5e5e6c\" font-size=\"15\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#945;</text>\n<text x=\"425.3\" y=\"126\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#945; + L</text>\n<text x=\"174\" y=\"234\" fill=\"#5e5e6c\" font-size=\"15\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#945;</text>\n<line x1=\"70\" y1=\"270\" x2=\"70\" y2=\"276\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<text x=\"70\" y=\"292\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">20</text>\n<line x1=\"243.3\" y1=\"270\" x2=\"243.3\" y2=\"276\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<text x=\"243.3\" y=\"292\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">30</text>\n<line x1=\"416.7\" y1=\"270\" x2=\"416.7\" y2=\"276\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<text x=\"416.7\" y=\"292\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">40</text>\n<line x1=\"590\" y1=\"270\" x2=\"590\" y2=\"276\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<text x=\"590\" y=\"292\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">50</text>\n<line x1=\"330\" y1=\"270\" x2=\"330\" y2=\"278\" stroke=\"#8855f5\" stroke-width=\"2\"/>\n<text x=\"330\" y=\"308\" fill=\"#8855f5\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">C₀ = 35</text>\n<text x=\"330\" y=\"330\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">composition (wt% Ni) &#8594;</text>\n<text x=\"30\" y=\"155\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" transform=\"rotate(-90 30 155)\" font-family=\"Inter,system-ui,sans-serif\">temperature</text>\n</svg>\n</div>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Cooling a Cu-35 wt% Ni alloy",
          "html": "<ul><li><strong>a, above the liquidus:</strong> 100 wt% liquid</li><li><strong>b, just inside the two-phase band:</strong> still about 100 wt% liquid, with the first tiny α crystals appearing. These first crystals are Ni-rich (about 46 wt% Ni on the lecture figure)</li><li><strong>c, mid-band:</strong> \\(C_L = 32\\) and \\(C_\\alpha = 43\\) wt% Ni, so \\(W_\\alpha = (35 - 32)/(43 - 32) = 27.3\\%\\) and \\(W_L = (43 - 35)/(43 - 32) = 72.7\\%\\)</li><li><strong>d, just above the solidus:</strong> almost all α (about 35 wt% Ni). The last of the liquid is Cu-rich (about 24 wt% Ni)</li><li><strong>e, below the solidus:</strong> 100 wt% α at 35 wt% Ni, as a polycrystalline solid</li></ul>"
        },
        {
          "type": "p",
          "text": "The pattern: as the alloy cools, the α composition slides down the solidus, the liquid composition slides down the liquidus, and the α fraction climbs from 0 to 100%. All of this assumes atoms have time to diffuse so each phase keeps up with the changing equilibrium composition. The later units on kinetics and solidification are where that assumption is tested.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "A labelling quirk in the lecture slide",
          "html": "<p>The slide heading says Cu-34 wt% Ni, but the dashed line, the tie lines and every calculation on it use <strong>35 wt% Ni</strong>. These notes use 35.</p>"
        },
        {
          "type": "h2",
          "id": "u3-eutectic",
          "text": "Microstructure in a Eutectic System (Pb-Sn)"
        },
        {
          "type": "p",
          "text": "The Pb-Sn diagram has a eutectic (eu-: one becomes two): one liquid composition (61.9 wt% Sn) that freezes at one fixed temperature (183 °C) into two solids at once. Pb and Sn dissolve in each other only a little, so the solids are α (Pb-rich, up to 18.3 wt% Sn at 183 °C) and β (Sn-rich, up to 97.8 wt% Sn).",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: Pb-Sn eutectic (schematic, not to scale)</div>\n<svg viewBox=\"0 0 640 348\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Schematic Pb-Sn eutectic phase diagram, not to scale. Liquid on top, alpha and beta solid solutions at the sides, the eutectic isotherm at 183 degrees C between 18.3, 61.9 and 97.8 weight percent tin, and three marked alloy compositions C1, C3 and C2.\">\n<defs><marker id=\"u3A2\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#8855f5\"/></marker><marker id=\"u3S2\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#8855f5\"/></marker><marker id=\"u3A3\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#e08000\"/></marker><marker id=\"u3S3\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto-start-reverse\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#e08000\"/></marker></defs>\n<line x1=\"70\" y1=\"40\" x2=\"70\" y2=\"270\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"270\" x2=\"600\" y2=\"270\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<polygon points=\"70,34 65,44 75,44\" fill=\"#5e5e6c\"/>\n<polygon points=\"607,270 597,265 597,275\" fill=\"#5e5e6c\"/>\n<path d=\"M70,45.8 Q236.4,98.6 391.9,144.5\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<path d=\"M590,110.9 L391.9,144.5\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<path d=\"M70,45.8 Q111.6,122.6 165.2,144.5\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<path d=\"M165.2,144.5 Q132.4,222 85.6,239.1\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<path d=\"M590,110.9 L578.6,144.5\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<path d=\"M578.6,144.5 Q585.8,215.1 586.9,249.4\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<line x1=\"165.2\" y1=\"144.5\" x2=\"578.6\" y2=\"144.5\" stroke=\"#5e5e6c\" stroke-width=\"2\"/>\n<line x1=\"122\" y1=\"270\" x2=\"122\" y2=\"52\" stroke=\"#8855f5\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<text x=\"119\" y=\"46\" fill=\"#8855f5\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">C</text><text x=\"127\" y=\"50\" fill=\"#8855f5\" font-size=\"10\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">1</text>\n<line x1=\"226\" y1=\"270\" x2=\"226\" y2=\"52\" stroke=\"#8855f5\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<text x=\"223\" y=\"46\" fill=\"#8855f5\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">C</text><text x=\"231\" y=\"50\" fill=\"#8855f5\" font-size=\"10\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">3</text>\n<line x1=\"391.9\" y1=\"270\" x2=\"391.9\" y2=\"52\" stroke=\"#8855f5\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<text x=\"388.9\" y=\"46\" fill=\"#8855f5\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">C</text><text x=\"396.9\" y=\"50\" fill=\"#8855f5\" font-size=\"10\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">2</text>\n<text x=\"340.4\" y=\"64.3\" fill=\"#5e5e6c\" font-size=\"15\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">L</text>\n<text x=\"168.8\" y=\"123.3\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#945; + L</text>\n<text x=\"506.8\" y=\"129.4\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#946; + L</text>\n<text x=\"96\" y=\"187.7\" fill=\"#5e5e6c\" font-size=\"14\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#945;</text>\n<text x=\"340.4\" y=\"204.9\" fill=\"#5e5e6c\" font-size=\"14\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#945; + &#946;</text>\n<text x=\"587.4\" y=\"167.1\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">&#946;</text>\n<text x=\"486\" y=\"161.5\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">183 &#176;C</text>\n<line x1=\"165.2\" y1=\"270\" x2=\"165.2\" y2=\"276\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<text x=\"165.2\" y=\"290\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">18.3</text>\n<line x1=\"391.9\" y1=\"270\" x2=\"391.9\" y2=\"276\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<text x=\"391.9\" y=\"290\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">61.9</text>\n<line x1=\"578.6\" y1=\"270\" x2=\"578.6\" y2=\"276\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<text x=\"578.6\" y=\"290\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">97.8</text>\n<line x1=\"168.2\" y1=\"303\" x2=\"388.9\" y2=\"303\" stroke=\"#8855f5\" stroke-width=\"1.5\" marker-start=\"url(#u3S2)\" marker-end=\"url(#u3A2)\"/>\n<line x1=\"394.9\" y1=\"303\" x2=\"575.6\" y2=\"303\" stroke=\"#e08000\" stroke-width=\"1.5\" marker-start=\"url(#u3S3)\" marker-end=\"url(#u3A3)\"/>\n<text x=\"278.54999999999995\" y=\"321\" fill=\"#8855f5\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">hypoeutectic</text>\n<text x=\"485.25\" y=\"321\" fill=\"#e08000\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">hypereutectic</text>\n<text x=\"32\" y=\"150\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" transform=\"rotate(-90 32 150)\" font-family=\"Inter,system-ui,sans-serif\">temperature</text>\n<text x=\"330\" y=\"341\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">composition (wt% Sn) &#8594;</text>\n<text x=\"70\" y=\"290\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">Pb</text>\n</svg>\n</div>"
        },
        {
          "type": "h3",
          "text": "Three kinds of alloy"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "C₁: a dilute alloy that stays inside the α solubility limit",
          "html": "<ul><li><strong>Above the liquidus:</strong> all liquid</li><li><strong>Between liquidus and solidus:</strong> α crystals grow in the liquid</li><li><strong>Below the solidus:</strong> all α grains</li><li><strong>Below the solvus:</strong> α can no longer hold all its Sn, so small β particles precipitate inside the α grains</li></ul><p style=\"margin-top:8px\">Precipitating a second phase out of a solid like this is the basis of precipitation strengthening, the last unit of the module.</p>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "C₂: the eutectic composition (61.9 wt% Sn)",
          "html": "<ul><li><strong>Above 183 °C:</strong> all liquid, all the way down</li><li><strong>At 183 °C:</strong> the whole liquid transforms into α (18.3 wt% Sn) and β (97.8 wt% Sn) together, with no freezing range</li><li><strong>Result:</strong> a fine, alternating-layer (lamellar) mixture of α and β</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "C₃: off-eutectic alloys (hypo and hyper)",
          "html": "<ul><li><strong>Hypoeutectic</strong> (between 18.3 and 61.9 wt% Sn, e.g. 30 wt% Sn): α crystals form from the liquid between the liquidus and 183 °C. These are <strong>pro-eutectic α</strong>, formed before the eutectic. By 183 °C the leftover liquid has reached 61.9 wt% Sn and freezes as the lamellar eutectic. Final structure: large pro-eutectic α grains sitting in a eutectic matrix</li><li><strong>Hypereutectic</strong> (between 61.9 and 97.8 wt% Sn): the same story with <strong>β</strong> as the pro-eutectic phase</li></ul>"
        },
        {
          "type": "example",
          "label": "Worked example: Pb-30 wt% Sn just below 183 °C",
          "q": "A hypoeutectic Pb-30 wt% Sn alloy is cooled to just below 183 °C. Find the fractions of pro-eutectic α and eutectic, and then of α and β as phases.",
          "steps": [
            "Just before 183 °C the alloy is α (18.3 wt% Sn) plus liquid (61.9 wt% Sn). That liquid becomes the eutectic, so the same tie line gives the microconstituents",
            "Pro-eutectic α: \\((61.9 - 30)/(61.9 - 18.3) = 31.9/43.6 = 73.2\\%\\)",
            "Eutectic: \\((30 - 18.3)/43.6 = 11.7/43.6 = 26.8\\%\\)",
            "Now as phases. Use the tie line from α (18.3) to β (97.8), length 79.5: \\(W_\\alpha = (97.8 - 30)/79.5 = 85.3\\%\\) and \\(W_\\beta = (30 - 18.3)/79.5 = 14.7\\%\\)"
          ],
          "answer": "73.2% pro-eutectic α and 26.8% eutectic by microconstituent, but 85.3% α and 14.7% β by phase. Microconstituents are the regions you see; phases are what the material is made of."
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Check that the two views agree",
          "html": "<p>The eutectic itself is 45.2 wt% α and 54.8 wt% β (tie line at 61.9: \\(35.9/79.5\\) and \\(43.6/79.5\\)). So the total α is \\(73.2 + 0.452 \\times 26.8 = 85.3\\%\\) and the β is \\(0.548 \\times 26.8 = 14.7\\%\\). Same answer, reached through the eutectic.</p>"
        },
        {
          "type": "h2",
          "id": "u3-lamellar",
          "text": "Why Eutectics Are Lamellar"
        },
        {
          "type": "p",
          "text": "Under a microscope a eutectic looks like stripes, not a random scatter of grains. That is a neat case of Unit 1's split between thermodynamics and kinetics, and it is worth being able to argue it both ways.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "The argument in four steps",
          "html": "<ul><li><strong>Interfaces cost energy.</strong> Every boundary between two phases raises the Gibbs free energy, and a lamellar structure is mostly boundary. Thermodynamically it is a poor arrangement</li><li><strong>But growing it is hard.</strong> α (18.3 wt% Sn) and β (97.8 wt% Sn) both have to grow out of liquid at 61.9 wt% Sn. The two solids differ hugely in composition, so Pb and Sn have to be sorted by diffusion</li><li><strong>Side by side solves the problem.</strong> The Sn rejected by a growing α layer is exactly what the neighbouring β layer needs, and the Pb rejected by β is what α needs. Atoms only travel across one thin layer. This is called <strong>co-operative growth</strong></li><li><strong>Verdict:</strong> kinetically favoured, thermodynamically inefficient. Cool further below the eutectic temperature and atoms can only move shorter distances, so the layers form even thinner, despite the extra interface</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Link to Unit 1",
          "html": "<p>Thermodynamics says which phases are possible. Kinetics decides how they end up arranged. The lamellar eutectic is the arrangement that is easiest to build, not the one with the lowest free energy.</p>"
        },
        {
          "type": "h2",
          "id": "u3-peritectic",
          "text": "Microstructure in a Peritectic System"
        },
        {
          "type": "p",
          "text": "Steels with roughly 0.1 to 0.17 wt% C have a reputation for being awkward to cast continuously, and the peritectic in the Fe-C diagram is a big part of why. A peritectic is the odd one out, because it is the peri- reaction where two become one: on cooling, a liquid and a solid react to make a new solid, \\(L + \\alpha \\rightarrow \\beta\\), at the peritectic temperature \\(T_p\\). What you get depends on where the alloy sits relative to the three compositions on the horizontal line: \\(\\alpha_p\\), \\(\\beta_p\\) and \\(L_p\\), from left to right.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: a peritectic system with three alloys (schematic, not to scale)</div>\n<svg viewBox=\"0 0 640 328\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Schematic peritectic phase diagram, not to scale. The peritectic isotherm at temperature Tp runs from the alpha composition on the left through the beta composition to the liquid composition on the right. Three dashed alloy lines are marked: hypo-peritectic between the alpha and beta compositions, peritectic at the beta composition, and hyper-peritectic between the beta and liquid compositions.\">\n<line x1=\"70\" y1=\"40\" x2=\"70\" y2=\"270\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"70,34 65,44 75,44\" fill=\"#5e5e6c\"/>\n<line x1=\"70\" y1=\"270\" x2=\"600\" y2=\"270\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"607,270 597,265 597,275\" fill=\"#5e5e6c\"/>\n<path d=\"M70,60 Q330,95 455,165 L590,228\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<path d=\"M70,60 Q150,100 185,165\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<path d=\"M185,165 Q160,215 150,270\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<path d=\"M330,165 Q450,190 590,230\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<path d=\"M330,165 Q290,215 268,270\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<line x1=\"185\" y1=\"165\" x2=\"455\" y2=\"165\" stroke=\"#5e5e6c\" stroke-width=\"2\"/>\n<line x1=\"255\" y1=\"270\" x2=\"255\" y2=\"50\" stroke=\"#8855f5\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<text x=\"255\" y=\"44\" fill=\"#8855f5\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">hypo</text>\n<line x1=\"330\" y1=\"270\" x2=\"330\" y2=\"50\" stroke=\"#e04545\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<text x=\"330\" y=\"44\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">peritectic</text>\n<line x1=\"392\" y1=\"270\" x2=\"392\" y2=\"50\" stroke=\"#e08000\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<text x=\"392\" y=\"44\" fill=\"#e08000\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">hyper</text>\n<text x=\"350\" y=\"85\" fill=\"#5e5e6c\" font-size=\"15\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">L</text>\n<text x=\"222\" y=\"112\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">L + &#945;</text>\n<text x=\"112\" y=\"220\" fill=\"#5e5e6c\" font-size=\"15\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#945;</text>\n<text x=\"222\" y=\"232\" fill=\"#5e5e6c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#945; + &#946;</text>\n<text x=\"440\" y=\"240\" fill=\"#5e5e6c\" font-size=\"15\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#946;</text>\n<line x1=\"520\" y1=\"206\" x2=\"545\" y2=\"246\" stroke=\"#90909c\" stroke-width=\"1\"/>\n<text x=\"560\" y=\"258\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">L + &#946;</text>\n<text x=\"45\" y=\"169\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">T</text><text x=\"53\" y=\"173\" fill=\"#90909c\" font-size=\"10\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">p</text>\n<text x=\"162\" y=\"183\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#945;</text><text x=\"170\" y=\"187\" fill=\"#90909c\" font-size=\"10\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">p</text>\n<text x=\"345\" y=\"183\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#946;</text><text x=\"353\" y=\"187\" fill=\"#90909c\" font-size=\"10\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">p</text>\n<text x=\"452\" y=\"183\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">L</text><text x=\"460\" y=\"187\" fill=\"#90909c\" font-size=\"10\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">p</text>\n<text x=\"70\" y=\"290\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">A</text>\n<text x=\"590\" y=\"290\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">B</text>\n<text x=\"330\" y=\"316\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">composition (wt% B) &#8594;</text>\n<text x=\"30\" y=\"155\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" transform=\"rotate(-90 30 155)\" font-family=\"Inter,system-ui,sans-serif\">temperature</text>\n</svg>\n</div>"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "At the peritectic composition (\\(C_0 = \\beta_p\\))",
              "color": "#8855f5",
              "text": "Above \\(T_p\\): liquid + α. At \\(T_p\\) the liquid and α react and are used up together. Below \\(T_p\\): all β."
            },
            {
              "title": "Hypo-peritectic (between \\(\\alpha_p\\) and \\(\\beta_p\\))",
              "color": "#8855f5",
              "text": "Not enough liquid to use up all the α. After the reaction, the leftover α sits inside a β matrix. Below \\(T_p\\): α + β."
            },
            {
              "title": "Hyper-peritectic (between \\(\\beta_p\\) and \\(L_p\\))",
              "color": "#8855f5",
              "text": "Not enough α to use up the liquid. Leftover liquid keeps solidifying as β through the L + β band. Below the β solidus: all β."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Treat these as equilibrium predictions only",
          "html": "<p>The lecture stresses that peritectic microstructures often depart strongly from this picture, for kinetic reasons, and defers the detail to EG-286. The usual explanation is that the new β forms as a shell around each α grain. The shell separates the α from the liquid, so the reaction can only continue by diffusion through solid β, which is slow. Real alloys can therefore keep α or liquid that equilibrium says should be gone.</p>"
        },
        {
          "type": "h2",
          "id": "",
          "text": "Unit 3 essentials"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "html": "<ul><li>Three steps: locate \\((T, C_0)\\), name the phases (horizontal tie line in a two-phase field), then apply the lever rule</li><li>One-phase field: 100% of that phase at composition \\(C_0\\)</li><li>Lever rule: a phase's fraction is the <strong>opposite</strong> arm over the whole tie line. Closer to \\(C_0\\) means more of that phase</li><li>The lever rule gives mass fractions. Convert with densities to compare with a micrograph</li><li>Overall composition never changes on cooling. Phase compositions slide along the boundaries</li><li>Naming code: <strong>eu-</strong> one becomes two, <strong>peri-</strong> two become one, <strong>-tic</strong> a liquid is involved, <strong>-toid</strong> the all-solid version</li><li>Eutectic: \\(L \\rightarrow \\alpha + \\beta\\). Pb-Sn at 183 °C and 61.9 wt% Sn. Lamellar through co-operative growth, so thermodynamically costly but kinetically favoured</li><li>Hypo: pro-eutectic α + eutectic. Hyper: pro-eutectic β + eutectic. Pb-30 wt% Sn: 73.2% pro-eutectic α and 26.8% eutectic, which is 85.3% α and 14.7% β as phases</li><li>Peritectic: \\(L + \\alpha \\rightarrow \\beta\\). Hypo leaves α behind, hyper leaves liquid behind. Real microstructures often differ (EG-286)</li><li>Fe-C: peritectic 1493 °C / 0.16 wt% C, eutectic 1147 °C / 4.3 wt% C, eutectoid 727 °C / 0.76 wt% C</li></ul>",
          "titleLearn": "Quick recap",
          "titleRevise": "EXAM CHEAT SHEET"
        }
      ],
      "essentialsTitle": null,
      "essentialsHeading": null,
      "essentials": null,
      "desc": "Identifying phases and their compositions, the lever rule, mass and volume fractions, and predicting equilibrium microstructures in isomorphous, eutectic and peritectic systems.",
      "difficulty": "Medium",
      "readTime": "30 min",
      "color": "#8855f5"
    },
    {
      "id": "u4",
      "numLabel": "Unit 4 of 10",
      "title": "Construction of Phase Diagrams",
      "subtitle": "Unit 3 read phase diagrams. This unit shows where they come from: free energy curves for each phase, a common tangent between them, and a projection of the tangent points onto a temperature against composition plot. It then reads what a diagram's shape says about how A and B atoms interact, and lists the four invariant reactions.",
      "sections": [
        {
          "type": "toc",
          "title": "In this unit",
          "items": [
            {
              "href": "#u4-big",
              "label": "The big picture"
            },
            {
              "href": "#u4-hetero",
              "label": "Equilibrium between two phases"
            },
            {
              "href": "#u4-iso",
              "label": "Building an isomorphous diagram"
            },
            {
              "href": "#u4-dial",
              "label": "The mixing enthalpy dial"
            },
            {
              "href": "#u4-gap",
              "label": "Atoms that repel: the miscibility gap"
            },
            {
              "href": "#u4-order",
              "label": "Atoms that attract: ordered alloys"
            },
            {
              "href": "#u4-eut",
              "label": "From three curves to an invariant line"
            },
            {
              "href": "#u4-invariant",
              "label": "Invariant reactions"
            },
            {
              "href": "#u4-types",
              "label": "Eutectic and peritectic diagram types"
            },
            {
              "href": "#u4-congruent",
              "label": "Congruent transformations"
            },
            {
              "href": "#u4-check",
              "label": "Check yourself"
            }
          ]
        },
        {
          "type": "h2",
          "id": "u4-big",
          "text": "The Big Picture"
        },
        {
          "type": "p",
          "text": "A topographic map is built from thousands of height readings, then summarised as contour lines. A phase diagram is the same trick applied to free energy. Someone works out the free energy of every phase at one temperature, finds which phase (or pair of phases) is lowest at each composition, and records the answer. Do that at many temperatures, stack the results, and you have the diagram you used in Unit 3.",
          "class": ""
        },
        {
          "type": "p",
          "text": "Unit 2 supplied the free energy curves (ideal and regular solutions, ordering, clustering). Unit 3 used finished diagrams. This unit joins the two: how a diagram is constructed from the curves, and what its shape says about how A and B atoms feel about each other.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "1. Draw the curves",
              "color": "#e04545",
              "text": "At one temperature, plot molar free energy against composition for every phase that could exist (liquid, each solid structure)."
            },
            {
              "title": "2. Find the lowest option",
              "color": "#e04545",
              "text": "Where one curve is lowest, that single phase is stable. Where two curves compete, a common tangent between them marks the two-phase region."
            },
            {
              "title": "3. Project and repeat",
              "color": "#e04545",
              "text": "Plot the tangent points at this temperature on a temperature against composition grid. Repeat at many temperatures. The points trace the phase boundaries."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>A phase diagram is a summary of free energy curves: lowest curve wins, and common tangents mark where two phases share the work.</p>"
        },
        {
          "type": "h2",
          "id": "u4-hetero",
          "text": "Equilibrium Between Two Phases"
        },
        {
          "type": "p",
          "text": "Oil and vinegar will not form one smooth liquid. Shake them and they settle into two layers, each with its own composition. Alloys do the same thing in the solid state when A and B prefer different crystal structures. Say the A-rich end likes to be \\(\\alpha\\) (BCC) and the B-rich end likes to be \\(\\beta\\) (FCC).",
          "class": ""
        },
        {
          "type": "p",
          "text": "Each phase then has its <strong>own</strong> free energy curve. The \\(\\alpha\\) curve has its low point on the A-rich side, because forcing a B-rich alloy into the \\(\\alpha\\) structure costs free energy. The \\(\\beta\\) curve is the mirror image. The curves cross somewhere in the middle, and the lecture asks the key question: what happens to alloys near the crossover?",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: free energy curves for two phases and the common tangent (schematic)</div>\n<svg viewBox=\"0 0 640 340\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Molar free energy against composition for two phases, alpha and beta. A common tangent line touches the alpha curve at one composition and the beta curve at another. For an alloy composition X0 between them, a mixture of the two phases lies on the tangent line and has lower free energy than either single phase.\">\n<line x1=\"70\" y1=\"40\" x2=\"70\" y2=\"262\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"70,34 65,44 75,44\" fill=\"#5e5e6c\"/>\n<line x1=\"70\" y1=\"262\" x2=\"600\" y2=\"262\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"607,262 597,257 597,267\" fill=\"#5e5e6c\"/>\n<polyline points=\"70.0,176.3 75.8,180.7 81.7,185.0 87.5,189.1 93.4,193.0 99.2,196.8 105.1,200.3 110.9,203.7 116.7,206.9 122.6,209.9 128.4,212.7 134.3,215.3 140.1,217.8 146.0,220.0 151.8,222.1 157.6,224.0 163.5,225.8 169.3,227.3 175.2,228.7 181.0,229.8 186.9,230.8 192.7,231.6 198.5,232.3 204.4,232.7 210.2,233.0 216.1,233.0 221.9,232.9 227.8,232.6 233.6,232.2 239.4,231.5 245.3,230.7 251.1,229.7 257.0,228.5 262.8,227.1 268.7,225.5 274.5,223.7 280.3,221.8 286.2,219.7 292.0,217.4 297.9,214.9 303.7,212.2 309.6,209.4 315.4,206.4 321.2,203.2 327.1,199.8 332.9,196.2 338.8,192.4 344.6,188.5 350.4,184.3 356.3,180.0 362.1,175.5 368.0,170.9 373.8,166.0 379.7,161.0 385.5,155.7 391.3,150.3 397.2,144.7 403.0,139.0 408.9,133.0 414.7,126.9 420.6,120.5 426.4,114.0 432.2,107.3 438.1,100.5 443.9,93.4 449.8,86.2 455.6,78.8 461.5,71.2 467.3,63.4 473.1,55.4\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n<polyline points=\"181.0,54.0 186.9,62.5 192.7,70.8 198.5,78.9 204.4,86.8 210.2,94.6 216.1,102.1 221.9,109.5 227.8,116.7 233.6,123.7 239.4,130.5 245.3,137.2 251.1,143.7 257.0,149.9 262.8,156.0 268.7,162.0 274.5,167.7 280.3,173.2 286.2,178.6 292.0,183.8 297.9,188.8 303.7,193.6 309.6,198.3 315.4,202.7 321.2,207.0 327.1,211.1 332.9,215.0 338.8,218.7 344.6,222.2 350.4,225.6 356.3,228.8 362.1,231.8 368.0,234.6 373.8,237.2 379.7,239.6 385.5,241.9 391.3,244.0 397.2,245.9 403.0,247.6 408.9,249.1 414.7,250.5 420.6,251.6 426.4,252.6 432.2,253.4 438.1,254.0 443.9,254.4 449.8,254.7 455.6,254.8 461.5,254.6 467.3,254.3 473.1,253.9 479.0,253.2 484.8,252.3 490.7,251.3 496.5,250.1 502.4,248.7 508.2,247.1 514.0,245.4 519.9,243.4 525.7,241.3 531.6,239.0 537.4,236.5 543.3,233.8 549.1,230.9 554.9,227.9 560.8,224.7 566.6,221.3 572.5,217.7 578.3,213.9 584.2,209.9 590.0,205.8\" fill=\"none\" stroke=\"#e08000\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n<polyline points=\"132.4,226.2 538.0,263.1\" fill=\"none\" stroke=\"#e04545\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-dasharray=\"7 5\"/>\n<circle cx=\"198.6\" cy=\"232.3\" r=\"5\" fill=\"#e04545\"/>\n<line x1=\"198.6\" y1=\"238.3\" x2=\"198.6\" y2=\"262\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/>\n<circle cx=\"437.8\" cy=\"254.0\" r=\"5\" fill=\"#e04545\"/>\n<line x1=\"437.8\" y1=\"260.0\" x2=\"437.8\" y2=\"262\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/>\n<line x1=\"288.4\" y1=\"210.8\" x2=\"288.4\" y2=\"262\" stroke=\"#5e5e6c\" stroke-width=\"1.2\" stroke-dasharray=\"5 4\"/>\n<circle cx=\"288.4\" cy=\"218.8\" r=\"4.5\" fill=\"#3b82e8\"/>\n<circle cx=\"288.4\" cy=\"180.6\" r=\"4.5\" fill=\"#e08000\"/>\n<circle cx=\"288.4\" cy=\"240.4\" r=\"5.5\" fill=\"#e04545\"/>\n<text x=\"299.4\" y=\"176.6\" fill=\"#e08000\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" >G<tspan dy=\"4\" font-size=\"10\">&#946;</tspan></text>\n<text x=\"299.4\" y=\"223.8\" fill=\"#3b82e8\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" >G<tspan dy=\"4\" font-size=\"10\">&#945;</tspan></text>\n<text x=\"299.4\" y=\"256.4\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" >G<tspan dy=\"4\" font-size=\"10\">e</tspan> (mixture of &#945; + &#946;)</text>\n<text x=\"106.4\" y=\"191.1\" fill=\"#3b82e8\" font-size=\"16\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" >&#945;</text>\n<text x=\"564.0\" y=\"214.8\" fill=\"#e08000\" font-size=\"16\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" >&#946;</text>\n<text x=\"70.0\" y=\"282.0\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >A</text>\n<text x=\"590.0\" y=\"282.0\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >B</text>\n<text x=\"198.6\" y=\"282.0\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >X<tspan dy=\"4\" font-size=\"10\">&#945;e</tspan></text>\n<text x=\"437.8\" y=\"282.0\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >X<tspan dy=\"4\" font-size=\"10\">&#946;e</tspan></text>\n<text x=\"288.4\" y=\"282.0\" fill=\"#5e5e6c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >X<tspan dy=\"4\" font-size=\"10\">0</tspan></text>\n<text x=\"330.0\" y=\"334.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >composition (mole fraction of B) &#8594;</text>\n<text x=\"28.0\" y=\"160.0\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" transform=\"rotate(-90 28 160)\">molar free energy</text>\n</svg>\n<p style=\"text-align:center;margin-top:6px\">The tangent touches \\(\\alpha\\) at \\(X^{\\alpha}_{e}\\) and \\(\\beta\\) at \\(X^{\\beta}_{e}\\). At \\(X_0\\) the mixture (\\(G_e\\)) sits below both single phases (\\(G_\\alpha\\) and \\(G_\\beta\\)).</p>\n</div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"u4w learn-only\" data-w=\"tangent\"></div>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Why the alloy splits in two",
          "html": "<ul><li><strong>Single phase:</strong> an alloy at \\(X_0\\) as pure \\(\\alpha\\) has free energy on the \\(\\alpha\\) curve, or on the \\(\\beta\\) curve if it were all \\(\\beta\\). The lower of the two is the best single-phase option</li><li><strong>Two phases:</strong> the atoms can instead separate into \\(\\alpha\\) and \\(\\beta\\) of different compositions. The free energy of such a mixture is a weighted average, so it lies on the straight line joining the two phase points</li><li><strong>Lowest possible line:</strong> slide the pair of phase compositions until the line cannot go any lower. That is the <strong>common tangent</strong>, touching \\(\\alpha\\) at \\(X^{\\alpha}_{e}\\) and \\(\\beta\\) at \\(X^{\\beta}_{e}\\)</li><li><strong>Equilibrium:</strong> once the phases reach \\(X^{\\alpha}_{e}\\) and \\(X^{\\beta}_{e}\\) no further change lowers the free energy. For every alloy between those two compositions, \\(G_e\\) on the tangent beats both single phases</li></ul>"
        },
        {
          "type": "formulablock",
          "name": "Condition for equilibrium between two phases",
          "eqs": [
            "\\mu_A^{\\alpha} = \\mu_A^{\\beta} \\qquad \\mu_B^{\\alpha} = \\mu_B^{\\beta}",
            "W_\\alpha = \\frac{X^{\\beta}_{e} - X_0}{X^{\\beta}_{e} - X^{\\alpha}_{e}} \\qquad W_\\beta = \\frac{X_0 - X^{\\alpha}_{e}}{X^{\\beta}_{e} - X^{\\alpha}_{e}}"
          ],
          "vars": [
            {
              "symbol": "\\(\\mu_i^{\\phi}\\)",
              "desc": "chemical potential of component \\(i\\) in phase \\(\\phi\\)"
            },
            {
              "symbol": "\\(X^{\\alpha}_{e},\\ X^{\\beta}_{e}\\)",
              "desc": "equilibrium compositions, the tangent points"
            }
          ],
          "note": "The chemical potential of each component is the same in both phases, but the compositions are not. Graphically that is one straight line touching both curves. The second line is the lever rule again, now written in mole fractions, so it gives <strong>mole</strong> fractions of the phases. Unit 3's version used wt%, which gives mass fractions."
        },
        {
          "type": "example",
          "label": "Try it: lever rule in mole fractions",
          "q": "The common tangent touches \\(\\alpha\\) at \\(X^{\\alpha}_{e} = 0.25\\) and \\(\\beta\\) at \\(X^{\\beta}_{e} = 0.70\\). An alloy has \\(X_0 = 0.40\\). What fraction of it is \\(\\alpha\\)?",
          "steps": [
            "The arm for \\(\\alpha\\) is the <strong>opposite</strong> one: \\(X^{\\beta}_{e} - X_0 = 0.70 - 0.40 = 0.30\\)",
            "The whole tie line is \\(X^{\\beta}_{e} - X^{\\alpha}_{e} = 0.70 - 0.25 = 0.45\\)",
            "\\(W_\\alpha = 0.30 / 0.45 = 0.667\\), and \\(W_\\beta = (0.40 - 0.25)/0.45 = 0.333\\)"
          ],
          "answer": "Two thirds \\(\\alpha\\) and one third \\(\\beta\\), by moles. Sanity check: \\(X_0\\) is closer to \\(X^{\\alpha}_{e}\\), so there should be more \\(\\alpha\\). The two fractions add to 1."
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Why one tangent gives equal chemical potentials",
          "html": "<p>Extend a tangent to the two vertical edges of the plot. Its intercepts are \\(\\mu_A\\) (at the A edge) and \\(\\mu_B\\) (at the B edge) for the phase it touches. A single straight line touching both curves has one pair of intercepts, so both phases share the same \\(\\mu_A\\) and the same \\(\\mu_B\\). This intercept construction is a standard result and is not drawn on the lecture slide.</p>"
        },
        {
          "type": "example",
          "label": "Try it: explain the split",
          "q": "An alloy sits at a composition in the crossover region, where the \\(\\alpha\\) and \\(\\beta\\) curves intersect. Why is it not simply single-phase \\(\\alpha\\) or single-phase \\(\\beta\\)?",
          "steps": [
            "At the crossover both single-phase options are high, because the alloy is far from the minimum of either curve",
            "A mixture of \\(\\alpha\\) near \\(X^{\\alpha}_{e}\\) and \\(\\beta\\) near \\(X^{\\beta}_{e}\\) has a free energy on the common tangent",
            "The tangent lies below both curves between the two tangent points, so the mixture has the lower free energy"
          ],
          "answer": "The two-phase mixture is more stable than either single phase, so the alloy separates into \\(\\alpha + \\beta\\) with the compositions set by the tangent points. That is exactly the two-phase field you read with tie lines in Unit 3."
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Two phases coexist when one straight line touches both curves. Same slope, same chemical potentials, different compositions.</p>"
        },
        {
          "type": "h2",
          "id": "u4-iso",
          "text": "Building an Isomorphous Diagram"
        },
        {
          "type": "p",
          "text": "Cu-Ni coins and cupronickel seawater pipes rely on a system where the two metals mix freely in every proportion, in both the liquid and the solid. That is the <strong>isomorphous</strong> system. The simplest way to build it is to treat both liquid and solid as ideal solutions, so \\(\\Delta H_{\\mathrm{mix}} = 0\\) in each, and compare the two free energy curves at three temperatures. Take \\(T_m(A)\\) above \\(T_m(B)\\).",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: building the diagram from free energy curves (schematic)</div>\n<svg viewBox=\"0 0 640 372\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Building an isomorphous phase diagram from free energy curves. Left: three small free energy against composition plots for the liquid and solid at a temperature T1 above both melting points, T2 between them and T3 below both. At T1 the liquid curve is lowest everywhere, at T3 the solid curve is lowest everywhere, and at T2 a common tangent touches the solid curve at c and the liquid curve at d. Right: the resulting phase diagram with liquid on top, solid below, a two phase band between, and the three temperatures drawn as horizontal lines, with the tie line at T2 running from c to d.\">\n<line x1=\"52\" y1=\"12\" x2=\"52\" y2=\"108\" stroke=\"#5e5e6c\" stroke-width=\"1.2\"/>\n<line x1=\"52\" y1=\"108\" x2=\"236\" y2=\"108\" stroke=\"#5e5e6c\" stroke-width=\"1.2\"/>\n<polyline points=\"52.0,22.3 54.6,26.5 57.2,29.5 59.8,32.1 62.4,34.4 65.0,36.5 67.7,38.4 70.3,40.2 72.9,41.9 75.5,43.4 78.1,44.9 80.7,46.2 83.3,47.5 85.9,48.7 88.5,49.8 91.1,50.9 93.7,51.8 96.3,52.7 99.0,53.6 101.6,54.4 104.2,55.1 106.8,55.8 109.4,56.4 112.0,57.0 114.6,57.5 117.2,58.0 119.8,58.4 122.4,58.8 125.0,59.1 127.7,59.4 130.3,59.6 132.9,59.8 135.5,59.9 138.1,60.0 140.7,60.1 143.3,60.1 145.9,60.0 148.5,59.9 151.1,59.8 153.7,59.6 156.3,59.4 159.0,59.1 161.6,58.8 164.2,58.4 166.8,58.0 169.4,57.5 172.0,57.0 174.6,56.4 177.2,55.8 179.8,55.1 182.4,54.4 185.0,53.6 187.7,52.7 190.3,51.8 192.9,50.9 195.5,49.8 198.1,48.7 200.7,47.5 203.3,46.2 205.9,44.9 208.5,43.4 211.1,41.9 213.7,40.2 216.3,38.4 219.0,36.5 221.6,34.4 224.2,32.1 226.8,29.5 229.4,26.5 232.0,22.3\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<polyline points=\"52.0,37.2 54.6,42.0 57.2,45.6 59.8,48.9 62.4,51.8 65.0,54.6 67.7,57.2 70.3,59.6 72.9,61.9 75.5,64.1 78.1,66.2 80.7,68.2 83.3,70.1 85.9,71.9 88.5,73.7 91.1,75.4 93.7,77.0 96.3,78.6 99.0,80.1 101.6,81.5 104.2,82.9 106.8,84.2 109.4,85.5 112.0,86.7 114.6,87.9 117.2,89.0 119.8,90.1 122.4,91.1 125.0,92.1 127.7,93.0 130.3,93.9 132.9,94.7 135.5,95.5 138.1,96.2 140.7,96.9 143.3,97.5 145.9,98.1 148.5,98.7 151.1,99.2 153.7,99.7 156.3,100.1 159.0,100.4 161.6,100.8 164.2,101.0 166.8,101.3 169.4,101.4 172.0,101.6 174.6,101.6 177.2,101.7 179.8,101.6 182.4,101.5 185.0,101.4 187.7,101.2 190.3,100.9 192.9,100.6 195.5,100.2 198.1,99.7 200.7,99.2 203.3,98.5 205.9,97.8 208.5,97.0 211.1,96.1 213.7,95.1 216.3,94.0 219.0,92.7 221.6,91.2 224.2,89.6 226.8,87.6 229.4,85.2 232.0,81.8\" fill=\"none\" stroke=\"#e08000\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<text x=\"44.0\" y=\"20.0\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" >T<tspan dy=\"4\" font-size=\"10\">1</tspan></text>\n<text x=\"52.0\" y=\"122.0\" fill=\"#90909c\" font-size=\"11\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >A</text>\n<text x=\"232.0\" y=\"122.0\" fill=\"#90909c\" font-size=\"11\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >B</text>\n<text x=\"222.4\" y=\"108.4\" fill=\"#e08000\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" >L</text>\n<text x=\"222.4\" y=\"28.2\" fill=\"#3b82e8\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" >S</text>\n<line x1=\"52\" y1=\"124\" x2=\"52\" y2=\"220\" stroke=\"#5e5e6c\" stroke-width=\"1.2\"/>\n<line x1=\"52\" y1=\"220\" x2=\"236\" y2=\"220\" stroke=\"#5e5e6c\" stroke-width=\"1.2\"/>\n<polyline points=\"52.0,165.3 54.6,169.7 57.2,173.0 59.8,175.8 62.4,178.2 65.0,180.5 67.7,182.6 70.3,184.5 72.9,186.3 75.5,187.9 78.1,189.5 80.7,190.9 83.3,192.3 85.9,193.6 88.5,194.8 91.1,195.9 93.7,197.0 96.3,197.9 99.0,198.9 101.6,199.7 104.2,200.5 106.8,201.2 109.4,201.9 112.0,202.5 114.6,203.1 117.2,203.6 119.8,204.0 122.4,204.4 125.0,204.8 127.7,205.1 130.3,205.3 132.9,205.5 135.5,205.7 138.1,205.8 140.7,205.8 143.3,205.8 145.9,205.8 148.5,205.7 151.1,205.5 153.7,205.3 156.3,205.1 159.0,204.8 161.6,204.4 164.2,204.0 166.8,203.6 169.4,203.1 172.0,202.5 174.6,201.9 177.2,201.2 179.8,200.5 182.4,199.7 185.0,198.9 187.7,197.9 190.3,197.0 192.9,195.9 195.5,194.8 198.1,193.6 200.7,192.3 203.3,190.9 205.9,189.5 208.5,187.9 211.1,186.3 213.7,184.5 216.3,182.6 219.0,180.5 221.6,178.2 224.2,175.8 226.8,173.0 229.4,169.7 232.0,165.3\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<polyline points=\"52.0,134.3 54.6,139.7 57.2,143.8 59.8,147.5 62.4,150.9 65.0,154.0 67.7,157.0 70.3,159.8 72.9,162.5 75.5,165.1 78.1,167.5 80.7,169.9 83.3,172.1 85.9,174.3 88.5,176.4 91.1,178.4 93.7,180.4 96.3,182.2 99.0,184.0 101.6,185.8 104.2,187.5 106.8,189.1 109.4,190.7 112.0,192.2 114.6,193.6 117.2,195.1 119.8,196.4 122.4,197.7 125.0,198.9 127.7,200.1 130.3,201.3 132.9,202.4 135.5,203.4 138.1,204.4 140.7,205.4 143.3,206.3 145.9,207.1 148.5,207.9 151.1,208.7 153.7,209.4 156.3,210.0 159.0,210.6 161.6,211.2 164.2,211.7 166.8,212.1 169.4,212.5 172.0,212.8 174.6,213.1 177.2,213.3 179.8,213.5 182.4,213.6 185.0,213.7 187.7,213.6 190.3,213.6 192.9,213.4 195.5,213.2 198.1,212.9 200.7,212.5 203.3,212.0 205.9,211.5 208.5,210.8 211.1,210.0 213.7,209.2 216.3,208.1 219.0,207.0 221.6,205.6 224.2,204.0 226.8,202.1 229.4,199.8 232.0,196.2\" fill=\"none\" stroke=\"#e08000\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<text x=\"44.0\" y=\"132.0\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" >T<tspan dy=\"4\" font-size=\"10\">2</tspan></text>\n<text x=\"52.0\" y=\"234.0\" fill=\"#90909c\" font-size=\"11\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >A</text>\n<text x=\"232.0\" y=\"234.0\" fill=\"#90909c\" font-size=\"11\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >B</text>\n<polyline points=\"79.1,197.0 204.9,218.7\" fill=\"none\" stroke=\"#e04545\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-dasharray=\"5 4\"/>\n<circle cx=\"118.7\" cy=\"203.8\" r=\"4\" fill=\"#e04545\"/>\n<text x=\"109.7\" y=\"219.8\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >c</text>\n<circle cx=\"165.3\" cy=\"211.8\" r=\"4\" fill=\"#e04545\"/>\n<text x=\"174.3\" y=\"202.8\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >d</text>\n<line x1=\"52\" y1=\"236\" x2=\"52\" y2=\"332\" stroke=\"#5e5e6c\" stroke-width=\"1.2\"/>\n<line x1=\"52\" y1=\"332\" x2=\"236\" y2=\"332\" stroke=\"#5e5e6c\" stroke-width=\"1.2\"/>\n<polyline points=\"52.0,305.2 54.6,307.5 57.2,309.1 59.8,310.5 62.4,311.8 65.0,312.9 67.7,313.9 70.3,314.9 72.9,315.8 75.5,316.6 78.1,317.4 80.7,318.2 83.3,318.9 85.9,319.5 88.5,320.1 91.1,320.7 93.7,321.2 96.3,321.7 99.0,322.1 101.6,322.6 104.2,323.0 106.8,323.3 109.4,323.7 112.0,324.0 114.6,324.3 117.2,324.5 119.8,324.8 122.4,325.0 125.0,325.1 127.7,325.3 130.3,325.4 132.9,325.5 135.5,325.6 138.1,325.6 140.7,325.7 143.3,325.7 145.9,325.6 148.5,325.6 151.1,325.5 153.7,325.4 156.3,325.3 159.0,325.1 161.6,325.0 164.2,324.8 166.8,324.5 169.4,324.3 172.0,324.0 174.6,323.7 177.2,323.3 179.8,323.0 182.4,322.6 185.0,322.1 187.7,321.7 190.3,321.2 192.9,320.7 195.5,320.1 198.1,319.5 200.7,318.9 203.3,318.2 205.9,317.4 208.5,316.6 211.1,315.8 213.7,314.9 216.3,313.9 219.0,312.9 221.6,311.8 224.2,310.5 226.8,309.1 229.4,307.5 232.0,305.2\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<polyline points=\"52.0,246.3 54.6,249.2 57.2,251.5 59.8,253.5 62.4,255.4 65.0,257.2 67.7,258.9 70.3,260.5 72.9,262.0 75.5,263.5 78.1,264.9 80.7,266.3 83.3,267.6 85.9,268.9 88.5,270.2 91.1,271.4 93.7,272.5 96.3,273.7 99.0,274.8 101.6,275.8 104.2,276.9 106.8,277.9 109.4,278.9 112.0,279.8 114.6,280.7 117.2,281.6 119.8,282.5 122.4,283.3 125.0,284.2 127.7,284.9 130.3,285.7 132.9,286.5 135.5,287.2 138.1,287.9 140.7,288.5 143.3,289.2 145.9,289.8 148.5,290.4 151.1,290.9 153.7,291.5 156.3,292.0 159.0,292.5 161.6,292.9 164.2,293.4 166.8,293.8 169.4,294.2 172.0,294.5 174.6,294.9 177.2,295.2 179.8,295.4 182.4,295.7 185.0,295.9 187.7,296.1 190.3,296.2 192.9,296.3 195.5,296.4 198.1,296.4 200.7,296.4 203.3,296.4 205.9,296.3 208.5,296.2 211.1,296.0 213.7,295.7 216.3,295.4 219.0,295.0 221.6,294.5 224.2,293.9 226.8,293.1 229.4,292.1 232.0,290.5\" fill=\"none\" stroke=\"#e08000\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n<text x=\"44.0\" y=\"244.0\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" >T<tspan dy=\"4\" font-size=\"10\">3</tspan></text>\n<text x=\"52.0\" y=\"346.0\" fill=\"#90909c\" font-size=\"11\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >A</text>\n<text x=\"232.0\" y=\"346.0\" fill=\"#90909c\" font-size=\"11\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >B</text>\n<text x=\"222.4\" y=\"286.9\" fill=\"#e08000\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" >L</text>\n<text x=\"222.4\" y=\"328.7\" fill=\"#3b82e8\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" >S</text>\n<text x=\"142.0\" y=\"364.0\" fill=\"#90909c\" font-size=\"11\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >free energy curves at three temperatures</text>\n<line x1=\"330\" y1=\"22\" x2=\"330\" y2=\"332\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"330,16 325,26 335,26\" fill=\"#5e5e6c\"/>\n<line x1=\"330\" y1=\"332\" x2=\"594\" y2=\"332\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"601,332 591,327 591,337\" fill=\"#5e5e6c\"/>\n<polyline points=\"586.0,258.6 584.4,256.6 582.7,254.6 581.0,252.6 579.3,250.7 577.5,248.7 575.7,246.7 573.9,244.7 572.0,242.7 570.1,240.7 568.1,238.7 566.1,236.7 564.0,234.7 561.9,232.7 559.8,230.8 557.6,228.8 555.4,226.8 553.1,224.8 550.8,222.8 548.5,220.8 546.1,218.8 543.7,216.8 541.2,214.8 538.7,212.8 536.1,210.9 533.5,208.9 530.9,206.9 528.2,204.9 525.5,202.9 522.7,200.9 519.9,198.9 517.1,196.9 514.2,194.9 511.2,192.9 508.3,190.9 505.2,189.0 502.2,187.0 499.1,185.0 495.9,183.0 492.7,181.0 489.5,179.0 486.2,177.0 482.9,175.0 479.5,173.0 476.1,171.0 472.7,169.1 469.2,167.1 465.6,165.1 462.1,163.1 458.4,161.1 454.8,159.1 451.1,157.1 447.3,155.1 443.5,153.1 439.7,151.1 435.8,149.1 431.9,147.2 427.9,145.2 423.9,143.2 419.9,141.2 415.8,139.2 411.7,137.2 407.5,135.2 403.3,133.2 399.0,131.2 394.7,129.2 390.3,127.3 386.0,125.3 381.5,123.3 377.1,121.3 372.5,119.3 368.0,117.3 363.4,115.3 358.7,113.3 354.1,111.3 349.3,109.3 344.6,107.4 339.7,105.4 334.9,103.4 330.0,101.4\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n<polyline points=\"586.0,258.6 580.3,256.6 574.7,254.6 569.3,252.6 563.9,250.7 558.7,248.7 553.6,246.7 548.5,244.7 543.6,242.7 538.8,240.7 534.0,238.7 529.4,236.7 524.8,234.7 520.3,232.7 515.9,230.8 511.6,228.8 507.4,226.8 503.2,224.8 499.1,222.8 495.1,220.8 491.1,218.8 487.2,216.8 483.4,214.8 479.6,212.8 475.9,210.9 472.2,208.9 468.6,206.9 465.1,204.9 461.6,202.9 458.2,200.9 454.8,198.9 451.5,196.9 448.2,194.9 444.9,192.9 441.7,190.9 438.6,189.0 435.5,187.0 432.4,185.0 429.4,183.0 426.4,181.0 423.4,179.0 420.5,177.0 417.6,175.0 414.8,173.0 412.0,171.0 409.2,169.1 406.4,167.1 403.7,165.1 401.1,163.1 398.4,161.1 395.8,159.1 393.2,157.1 390.6,155.1 388.1,153.1 385.6,151.1 383.1,149.1 380.7,147.2 378.2,145.2 375.8,143.2 373.4,141.2 371.1,139.2 368.7,137.2 366.4,135.2 364.1,133.2 361.8,131.2 359.6,129.2 357.4,127.3 355.1,125.3 353.0,123.3 350.8,121.3 348.6,119.3 346.5,117.3 344.4,115.3 342.3,113.3 340.2,111.3 338.1,109.3 336.1,107.4 334.0,105.4 332.0,103.4 330.0,101.4\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n<line x1=\"330\" y1=\"49.0\" x2=\"586\" y2=\"49.0\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/>\n<text x=\"322.0\" y=\"53.0\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" >T<tspan dy=\"4\" font-size=\"10\">1</tspan></text>\n<line x1=\"330\" y1=\"180.0\" x2=\"586\" y2=\"180.0\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/>\n<text x=\"322.0\" y=\"184.0\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" >T<tspan dy=\"4\" font-size=\"10\">2</tspan></text>\n<line x1=\"330\" y1=\"311.0\" x2=\"586\" y2=\"311.0\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/>\n<text x=\"322.0\" y=\"315.0\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" >T<tspan dy=\"4\" font-size=\"10\">3</tspan></text>\n<line x1=\"424.9\" y1=\"180.0\" x2=\"491.1\" y2=\"180.0\" stroke=\"#e04545\" stroke-width=\"3\"/>\n<circle cx=\"424.9\" cy=\"180.0\" r=\"4.5\" fill=\"#e04545\"/>\n<text x=\"424.9\" y=\"171.0\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >c</text>\n<circle cx=\"491.1\" cy=\"180.0\" r=\"4.5\" fill=\"#e04545\"/>\n<text x=\"491.1\" y=\"171.0\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >d</text>\n<text x=\"406.8\" y=\"59.4\" fill=\"#e08000\" font-size=\"16\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >L</text>\n<text x=\"539.9\" y=\"290.1\" fill=\"#3b82e8\" font-size=\"16\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >S</text>\n<text x=\"447.8\" y=\"92.6\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >S + L</text>\n<line x1=\"458.0\" y1=\"96.6\" x2=\"416.9\" y2=\"153.8\" stroke=\"#90909c\" stroke-width=\"0.9\"/>\n<text x=\"330.0\" y=\"350.0\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >A</text>\n<text x=\"586.0\" y=\"350.0\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >B</text>\n<line x1=\"326\" y1=\"101.4\" x2=\"330\" y2=\"101.4\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<text x=\"336.0\" y=\"93.4\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" >T<tspan dy=\"4\" font-size=\"10\">m(A)</tspan></text>\n<line x1=\"586\" y1=\"258.6\" x2=\"590\" y2=\"258.6\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/>\n<text x=\"594.0\" y=\"262.6\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" >T<tspan dy=\"4\" font-size=\"10\">m(B)</tspan></text>\n<text x=\"458.0\" y=\"366.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" >composition &#8594;</text>\n<text x=\"300.0\" y=\"20.0\" fill=\"#90909c\" font-size=\"1\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" ></text>\n</svg>\n<p style=\"text-align:center;margin-top:6px\">Schematic only: drawn from the ideal-solution free energy equations, with an exaggerated entropy of fusion so the two-phase band is easy to see.</p>\n</div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"u4w learn-only\" data-w=\"iso\"></div>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Three temperatures, three answers",
          "html": "<ul><li><strong>\\(T_1\\), above both melting points:</strong> the liquid curve is lowest at every composition. Every alloy is liquid</li><li><strong>\\(T_2\\), between the melting points:</strong> pure A is below its melting point so it is solid, but pure B is above its own so it is liquid. The curves cross. The common tangent touches the solid curve at <strong>c</strong> and the liquid curve at <strong>d</strong>. Alloys to the left of c are solid, to the right of d are liquid, and between c and d they are solid + liquid</li><li><strong>\\(T_3\\), below both melting points:</strong> the solid curve is lowest everywhere. Every alloy is solid</li></ul><p style=\"margin-top:8px\">Plot c and d against \\(T_2\\) on the diagram, then repeat at many temperatures. The c points trace the <strong>solidus</strong> and the d points trace the <strong>liquidus</strong>.</p>"
        },
        {
          "type": "example",
          "label": "Try it: read the curves",
          "q": "At \\(T_2\\), which phase is stable for pure A and which for pure B? Which curve do the two end points tell you is lower on each side?",
          "steps": [
            "\\(T_2 < T_m(A)\\), so A is below its melting point: the solid curve is lower at the A edge",
            "\\(T_2 > T_m(B)\\), so B is above its melting point: the liquid curve is lower at the B edge"
          ],
          "answer": "Solid is lower on the A side and liquid is lower on the B side, which forces the curves to cross. The crossover is what makes a two-phase band between c and d."
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Link to Unit 3",
          "html": "<p>Unit 3 followed a Cu-35 wt% Ni alloy down the finished diagram. This is where the liquid-to-solid band it travelled through comes from: a stack of common tangents, one per temperature.</p>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Cooling an isomorphous alloy slides a common tangent along the diagram: c traces the solidus, d traces the liquidus.</p>"
        },
        {
          "type": "h2",
          "id": "u4-dial",
          "text": "The Mixing Enthalpy Dial"
        },
        {
          "type": "p",
          "text": "Think of \\(\\Delta H_{\\mathrm{mix}}\\) as a dial with three settings. Everything on the next two pages (gaps, ordering) comes from turning it. The free energy of mixing has an enthalpy term and an entropy term, and the regular solution model from Unit 2 writes them out:",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Regular solution: free energy of mixing",
          "eqs": [
            "\\Delta G_{\\mathrm{mix}} = \\underbrace{\\Omega X_A X_B}_{\\Delta H_{\\mathrm{mix}}} + RT\\,(X_A \\ln X_A + X_B \\ln X_B)"
          ],
          "vars": [
            {
              "symbol": "\\(\\Omega\\)",
              "desc": "interaction parameter, positive when unlike atoms repel and negative when they attract"
            },
            {
              "symbol": "\\(RT(\\ldots)\\)",
              "desc": "the entropy term. Always favours mixing, and grows with temperature"
            }
          ],
          "note": "Enthalpy and entropy compete. The dial sets the enthalpy, the temperature sets how strong the entropy is."
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "\\(\\Delta H_{\\mathrm{mix}} = 0\\)",
              "color": "#e04545",
              "text": "Ideal. Isomorphous diagram, a simple lens between the melting points."
            },
            {
              "title": "\\(\\Delta H_{\\mathrm{mix}} > 0\\) in the solid",
              "color": "#e04545",
              "text": "Unlike atoms repel. Miscibility gap in the solid, liquid stable down to a lower temperature."
            },
            {
              "title": "\\(\\Delta H_{\\mathrm{mix}} < 0\\) in the solid",
              "color": "#e04545",
              "text": "Unlike atoms attract. Ordered phase \\(\\alpha'\\), melting at a higher temperature than either pure metal."
            }
          ]
        },
        {
          "type": "raw",
          "html": "<div class=\"u4w learn-only\" data-w=\"dial\"></div>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Positive \\(\\Delta H_{\\mathrm{mix}}\\): the curve grows a bump and splits. Negative: it digs deeper. Higher temperature always pushes back toward one smooth dip.</p>"
        },
        {
          "type": "h2",
          "id": "u4-gap",
          "text": "Atoms That Repel: the Miscibility Gap"
        },
        {
          "type": "p",
          "text": "Think about oil and water again, but in a crystal. Suppose A and B mix happily and ideally in the liquid (\\(\\Delta H_{\\mathrm{mix}} = 0\\)) but dislike each other in the solid (\\(\\Delta H_{\\mathrm{mix}} > 0\\)), so each atom would rather sit next to its own kind. This is the clustering case from Unit 2, where a positive \\(\\Delta H_{\\mathrm{mix}}\\) fights the entropy gain.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Liquid, ideal",
              "color": "#e04545",
              "text": "Mixing costs no enthalpy, so the liquid curve keeps its usual single dip."
            },
            {
              "title": "Solid, unfavourable mixing",
              "color": "#e04545",
              "text": "The positive \\(\\Delta H_{\\mathrm{mix}}\\) pushes the middle of the solid curve up. At low temperature the entropy term is too weak to win, so the curve develops two dips."
            },
            {
              "title": "Result on the diagram",
              "color": "#e04545",
              "text": "A common tangent between the two dips makes a region where the solid splits into \\(\\alpha' + \\alpha''\\): same crystal structure, different compositions."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Two features to remember",
          "html": "<ul><li><strong>The gap:</strong> below a certain temperature a single solid solution is unstable and separates into \\(\\alpha'\\) and \\(\\alpha''\\), two solutions of the same crystal structure. This is a miscibility gap</li><li><strong>The liquid survives longer:</strong> because A and B repel in the solid, the liquid is stable down to a lower temperature than the melting point of pure A or pure B. The liquidus and solidus dip to a minimum between the two melting points</li></ul><p style=\"margin-top:8px\">The lecture gives several example diagrams of this type as figures only. Keep one open beside these notes.</p>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "How hot before the gap closes?",
          "html": "<p>Heating strengthens the entropy term until the two dips merge back into one. For the regular solution model that happens at the <strong>critical temperature</strong></p><p style=\"text-align:center;margin:8px 0\">\\(T_c = \\dfrac{\\Omega}{2R}\\)</p><p>Above \\(T_c\\) there is no gap at any composition. A bigger \\(\\Omega\\) (stronger dislike between A and B) means a higher \\(T_c\\). This is a standard result of the regular solution model, and it is not on the lecture slides. Try it in the dial above.</p>"
        },
        {
          "type": "example",
          "label": "Try it: when does the gap close?",
          "q": "A solid solution has \\(\\Omega = +12\\) kJ/mol. Above what temperature is it a single phase at every composition? (\\(R = 8.314\\) J/mol K)",
          "steps": [
            "Use \\(T_c = \\Omega / 2R\\) with \\(\\Omega = 12\\,000\\) J/mol",
            "\\(T_c = 12\\,000 / (2 \\times 8.314) = 12\\,000 / 16.63\\)",
            "\\(T_c \\approx 722\\) K, which is about 449 °C"
          ],
          "answer": "Above roughly 722 K there is no miscibility gap. Below it the solution splits into \\(\\alpha' + \\alpha''\\) over a range of compositions that widens as it cools. This is the solid alone: a real diagram also has to account for the liquid."
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Atoms that dislike each other split into two solutions of the same structure at low T. Heat closes the gap at \\(T_c\\).</p>"
        },
        {
          "type": "h2",
          "id": "u4-order",
          "text": "Atoms That Attract: Ordered Alloys"
        },
        {
          "type": "p",
          "text": "Now flip the sign. If A and B atoms prefer each other (\\(\\Delta H_{\\mathrm{mix}} < 0\\)), the solid wants a neat arrangement where unlike atoms are neighbours, like alternating colours on a chessboard. That is <strong>ordering</strong>, and the ordered solid is written \\(\\alpha'\\) on the diagram. β-brass (CuZn) is the textbook example, though it is not on the slides.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "What the diagram shows",
          "html": "<ul><li><strong>Higher melting point:</strong> strong A-B attraction stabilises the solid, so melting is harder and happens at a higher temperature than for pure A or pure B</li><li><strong>Very strong attraction:</strong> the ordered phase can extend all the way up to the melting temperature, so there is no disordered solid in between</li></ul><p style=\"margin-top:8px\">Compare with the miscibility gap: positive \\(\\Delta H_{\\mathrm{mix}}\\) makes the liquid last longer, negative \\(\\Delta H_{\\mathrm{mix}}\\) makes the solid last longer.</p>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Atoms that like each other form a regular pattern and hold on to the solid longer, so the ordered phase melts above both pure metals.</p>"
        },
        {
          "type": "h2",
          "id": "u4-eut",
          "text": "From Three Curves to an Invariant Line"
        },
        {
          "type": "p",
          "text": "Time to put three curves on one plot: the A-rich solid \\(\\alpha\\), the B-rich solid \\(\\beta\\), and the liquid L. Solder is the everyday case, a tin-lead mix that melts at one sharp temperature instead of softening gradually. Here is the free energy story behind that.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Three regimes as the temperature falls",
          "html": "<ul><li><strong>Hot:</strong> the liquid curve is low in the middle. There are two common tangents, one between \\(\\alpha\\) and L and one between L and \\(\\beta\\). Those give the two-phase fields \\(\\alpha + L\\) and \\(L + \\beta\\)</li><li><strong>Cooling:</strong> the liquid curve rises relative to the solids, so the two tangents slide toward each other</li><li><strong>At the eutectic temperature:</strong> the two tangents merge into <strong>one line touching all three curves</strong>. Three phases are in equilibrium, which can only happen at one temperature and one liquid composition. That is why the horizontal line on the diagram is invariant</li><li><strong>Colder:</strong> the liquid curve is above the common tangent of \\(\\alpha\\) and \\(\\beta\\), so the liquid disappears. Only \\(\\alpha + \\beta\\) remains</li></ul>"
        },
        {
          "type": "raw",
          "html": "<div class=\"u4w learn-only\" data-w=\"eut\"></div>"
        },
        {
          "type": "conceptbox",
          "variant": "warn",
          "title": "What this widget is, and is not",
          "html": "<p>The curves are simple parabolas chosen so the shape of the story is clear. They are not data for a real alloy, so the boundaries come out nearly straight. The logic (common tangents, then one tangent touching three curves) is exactly the lecture construction.</p>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>At the eutectic temperature one straight line touches \\(\\alpha\\), L and \\(\\beta\\) together. That single line is the horizontal line on the diagram.</p>"
        },
        {
          "type": "h2",
          "id": "u4-invariant",
          "text": "Invariant Reactions"
        },
        {
          "type": "p",
          "text": "Solder melting at one sharp temperature, and a steel changing structure at one fixed temperature on slow cooling, are both <strong>invariant reactions</strong>: transformations between phases of <em>fixed composition</em> at a <em>fixed temperature</em> under equilibrium conditions. On a phase diagram they appear as horizontal lines. There are four to know, each written as it happens on cooling.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Eutectic",
              "color": "#e04545",
              "text": "A liquid transforms into two solids.<br>\\(L \\rightarrow \\alpha + \\beta\\)"
            },
            {
              "title": "Eutectoid",
              "color": "#e04545",
              "text": "One solid transforms into two new solids.<br>\\(\\gamma \\rightarrow \\alpha + \\beta\\)"
            },
            {
              "title": "Peritectic",
              "color": "#e04545",
              "text": "A liquid and a solid react to form a new solid.<br>\\(L + \\alpha \\rightarrow \\gamma\\)"
            },
            {
              "title": "Peritectoid",
              "color": "#e04545",
              "text": "Two solids react to form a new solid.<br>\\(\\alpha + \\beta \\rightarrow \\gamma\\). On the slides: \\((\\mathrm{Ti}) + \\mathrm{TiAg} \\rightarrow \\mathrm{Ti_2Ag}\\)"
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "How to spot them on a diagram",
          "html": "<p><strong>The naming code:</strong> <strong>eu-</strong> means one becomes two, <strong>peri-</strong> means two become one, <strong>-tic</strong> means a liquid is involved, and <strong>-toid</strong> is the all-solid version.</p><p style=\"margin-top:8px\">Find the horizontal line and look at the fields just above and just below it at the composition where the reaction happens.</p><ul><li><strong>One phase above, two below:</strong> the phase splits. A liquid splitting is <strong>eutectic</strong>, a solid splitting is <strong>eutectoid</strong></li><li><strong>Two phases above, one below:</strong> two phases combine. If one of them is liquid it is <strong>peritectic</strong>, if both are solid it is <strong>peritectoid</strong></li></ul><p style=\"margin-top:8px\">Not every horizontal line is an invariant reaction. A tie line inside a two-phase field is also horizontal, but it is only a tool for reading compositions. The invariant line is the one drawn on the diagram where three phases meet.</p>"
        },
        {
          "type": "formulablock",
          "name": "The four invariant reactions (on cooling)",
          "eqs": [
            "\\text{Eutectic: } L \\rightarrow \\alpha + \\beta \\qquad \\text{Eutectoid: } \\gamma \\rightarrow \\alpha + \\beta",
            "\\text{Peritectic: } L + \\alpha \\rightarrow \\gamma \\qquad \\text{Peritectoid: } \\alpha + \\beta \\rightarrow \\gamma"
          ],
          "vars": [
            {
              "symbol": "Rule",
              "desc": "liquid involved means eutectic or peritectic; solids only means eutectoid or peritectoid"
            }
          ]
        },
        {
          "type": "example",
          "label": "Try it: name that reaction",
          "q": "Classify each reaction on cooling: (a) \\(L + \\delta \\rightarrow \\gamma\\) at 1493 °C in Fe-C, (b) \\(L \\rightarrow \\gamma + \\mathrm{Fe_3C}\\) at 1147 °C, (c) \\(\\gamma \\rightarrow \\alpha + \\mathrm{Fe_3C}\\) at 727 °C, (d) \\((\\mathrm{Ti}) + \\mathrm{TiAg} \\rightarrow \\mathrm{Ti_2Ag}\\).",
          "steps": [
            "(a) A liquid and a solid combine into one solid: <strong>peritectic</strong>",
            "(b) One liquid splits into two solids: <strong>eutectic</strong>",
            "(c) One solid splits into two solids: <strong>eutectoid</strong>",
            "(d) Two solids combine into one solid, no liquid: <strong>peritectoid</strong>"
          ],
          "answer": "Count the phases on each side, then ask whether a liquid is involved. (a) to (c) are the Fe-C reactions from Unit 3, and Unit 9 returns to them in full."
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Count the phases above and below the line, then ask whether a liquid is involved. That names the reaction.</p>"
        },
        {
          "type": "h2",
          "id": "u4-types",
          "text": "Eutectic and Peritectic Diagram Types"
        },
        {
          "type": "p",
          "text": "Not every eutectic diagram is built the same way, and the lecture shows two flavours side by side. The slides give these as figures, so the explanations below are the free energy reasoning behind them.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Eutectic, same crystal structure",
              "color": "#e04545",
              "text": "\\(\\alpha\\) and \\(\\beta\\) share one structure. This is the miscibility gap diagram, with the liquid curve dropping low enough to cut across the solid's gap."
            },
            {
              "title": "Eutectic, different structures",
              "color": "#e04545",
              "text": "\\(\\alpha\\) and \\(\\beta\\) have their own free energy curves, as in the two-phase construction earlier, and the liquid curve dips between them."
            },
            {
              "title": "Peritectic with an intermediate phase",
              "color": "#e04545",
              "text": "The product phase sits between the two ends of the diagram. The slide labels the end phase a terminal solid solution and the middle one an intermediate phase."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Two labels worth knowing",
          "html": "<ul><li><strong>Terminal solid solution:</strong> a solid solution based on one pure component, found at an end of the diagram (such as \\(\\alpha\\) at the A edge)</li><li><strong>Intermediate phase:</strong> a phase with a different crystal structure from either pure component, found between the ends and stable over a composition range (Unit 2)</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Eutectic diagrams come in two flavours (same or different crystal structures). Terminal solutions sit at the ends, intermediate phases in the middle.</p>"
        },
        {
          "type": "h2",
          "id": "u4-congruent",
          "text": "Congruent Transformations"
        },
        {
          "type": "p",
          "text": "A <strong>congruent</strong> transformation is one where the composition of the phases involved does not change. Pure copper melting is the everyday case: solid copper becomes liquid copper, and nothing about the composition changes. The lecture lists melting and solidification, ordering and miscibility gap, and allotropic transformation as examples.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Allotropic transformation",
              "color": "#e04545",
              "text": "A pure element changes to a different crystal structure. Iron going from BCC to FCC on heating is the classic example."
            },
            {
              "title": "Polymorphic transformation",
              "color": "#e04545",
              "text": "The same change of crystal structure, but in an alloy (a phase with more than one element)."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Do not confuse these",
          "html": "<p>Congruent means the <em>composition</em> stays the same. It does not mean the phase stays the same: melting changes solid into liquid but is still congruent. The invariant reactions above are the opposite, since there the compositions of the phases change.</p>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Congruent means the composition does not change. Melting a pure metal is congruent. Invariant reactions are not.</p>"
        },
        {
          "type": "h2",
          "id": "u4-check",
          "text": "Check Yourself"
        },
        {
          "type": "p",
          "text": "Eight quick questions. Each one describes a transformation and you name it. Wrong answers explain themselves, so a miss is useful.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"u4w learn-only\" data-w=\"quiz\"></div>"
        },
        {
          "type": "h2",
          "id": "",
          "text": "Unit 4 essentials"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "html": "<ul><li>A phase diagram is built from free energy curves: draw every phase's curve at one temperature, find the lowest option, project the result, repeat</li><li>Each phase has its own curve. Two phases coexist along a <strong>common tangent</strong>. Its touching points are the equilibrium compositions \\(X^{\\alpha}_{e}\\) and \\(X^{\\beta}_{e}\\)</li><li>Equilibrium between phases: \\(\\mu_A^{\\alpha} = \\mu_A^{\\beta}\\) and \\(\\mu_B^{\\alpha} = \\mu_B^{\\beta}\\). Same chemical potentials, different compositions</li><li>Isomorphous (\\(\\Delta H_{\\mathrm{mix}} = 0\\)): above both melting points all liquid, below both all solid, between them a common tangent c to d gives the two-phase band. The c points trace the solidus, the d points the liquidus</li><li>\\(\\Delta H_{\\mathrm{mix}} > 0\\) in the solid: miscibility gap (\\(\\alpha' + \\alpha''\\)), liquid stable to below both melting points. Regular solution: gap closes at \\(T_c = \\Omega/2R\\)</li><li>Eutectic temperature: one straight line touches the \\(\\alpha\\), L and \\(\\beta\\) curves together, which is why the reaction is invariant</li><li>\\(\\Delta H_{\\mathrm{mix}} < 0\\) in the solid: ordering (\\(\\alpha'\\)), melting above both pure melting points, ordered phase may reach the melting temperature</li><li>Invariant reactions on cooling: eutectic \\(L \\rightarrow \\alpha + \\beta\\), eutectoid \\(\\gamma \\rightarrow \\alpha + \\beta\\), peritectic \\(L + \\alpha \\rightarrow \\gamma\\), peritectoid \\(\\alpha + \\beta \\rightarrow \\gamma\\). Horizontal lines on the diagram</li><li>Congruent: no change of composition (melting, ordering, allotropic). Allotropic is for a pure element, polymorphic for an alloy</li></ul>",
          "titleLearn": "Quick recap",
          "titleRevise": "EXAM CHEAT SHEET"
        }
      ],
      "essentialsTitle": null,
      "essentialsHeading": null,
      "essentials": null,
      "desc": "How phase diagrams are built from free energy curves: common tangents, isomorphous diagrams, miscibility gaps, ordering, invariant reactions and congruent transformations.",
      "difficulty": "Medium",
      "readTime": "35 min",
      "color": "#e04545"
    },
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
    },
    {
      "heading": "U3 - Using Phase Diagrams",
      "blocks": [
        {
          "type": "formulablock",
          "name": "Lever rule",
          "eqs": [
            "W_\\alpha = \\frac{C_0 - C_L}{C_\\alpha - C_L} \\qquad W_L = \\frac{C_\\alpha - C_0}{C_\\alpha - C_L}",
            "W_\\alpha + W_L = 1"
          ],
          "vars": [
            {
              "symbol": "\\(C_0\\)",
              "desc": "overall alloy composition"
            },
            {
              "symbol": "\\(C_L,\\ C_\\alpha\\)",
              "desc": "phase compositions at the ends of the tie line"
            },
            {
              "symbol": "Rule",
              "desc": "fraction of a phase = opposite arm / whole tie line"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Lever rule from mass balance",
          "eqs": [
            "C_0 = C_L W_L + C_\\alpha W_\\alpha \\qquad W_L + W_\\alpha = 1"
          ]
        },
        {
          "type": "formulablock",
          "name": "Mass fraction to volume fraction",
          "eqs": [
            "V_\\alpha = \\frac{W_\\alpha/\\rho_\\alpha}{W_\\alpha/\\rho_\\alpha + W_L/\\rho_L} \\qquad V_L = \\frac{W_L/\\rho_L}{W_\\alpha/\\rho_\\alpha + W_L/\\rho_L}"
          ],
          "vars": [
            {
              "symbol": "Why",
              "desc": "micrographs show area (volume) fraction, not mass fraction"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Hypoeutectic alloy just below the eutectic temperature",
          "eqs": [
            "W_{\\text{pro-}\\alpha} = \\frac{C_E - C_0}{C_E - C_\\alpha} \\qquad W_{\\text{eu}} = \\frac{C_0 - C_\\alpha}{C_E - C_\\alpha}",
            "W_\\alpha = \\frac{C_\\beta - C_0}{C_\\beta - C_\\alpha} \\qquad W_\\beta = \\frac{C_0 - C_\\alpha}{C_\\beta - C_\\alpha}"
          ],
          "vars": [
            {
              "symbol": "\\(C_\\alpha,\\ C_E,\\ C_\\beta\\)",
              "desc": "18.3, 61.9 and 97.8 wt% Sn for Pb-Sn"
            },
            {
              "symbol": "Hyper",
              "desc": "pro-eutectic \\(\\beta\\) = \\((C_0 - C_E)/(C_\\beta - C_E)\\), eutectic = \\((C_\\beta - C_0)/(C_\\beta - C_E)\\)"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Invariant reactions (on cooling)",
          "eqs": [
            "\\text{Eutectic: } L \\rightarrow \\alpha + \\beta \\qquad \\text{Peritectic: } L + \\alpha \\rightarrow \\beta",
            "\\text{Eutectoid (Fe-C): } \\gamma \\rightarrow \\alpha + \\mathrm{Fe_3C}"
          ],
          "vars": [
            {
              "symbol": "Pb-Sn",
              "desc": "eutectic at 183 °C, 61.9 wt% Sn"
            },
            {
              "symbol": "Fe-C",
              "desc": "peritectic 1493 °C / 0.16 wt% C, eutectic 1147 °C / 4.3 wt% C, eutectoid 727 °C / 0.76 wt% C"
            }
          ]
        }
      ]
    },
    {
      "heading": "U4 - Construction of Phase Diagrams",
      "blocks": [
        {
          "type": "formulablock",
          "name": "Equilibrium between two phases",
          "eqs": [
            "\\mu_A^{\\alpha} = \\mu_A^{\\beta} \\qquad \\mu_B^{\\alpha} = \\mu_B^{\\beta}"
          ],
          "vars": [
            {
              "symbol": "Graphically",
              "desc": "one common tangent touches both free energy curves"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Lever rule on the common tangent (mole fractions)",
          "eqs": [
            "W_\\alpha = \\frac{X^{\\beta}_{e} - X_0}{X^{\\beta}_{e} - X^{\\alpha}_{e}} \\qquad W_\\beta = \\frac{X_0 - X^{\\alpha}_{e}}{X^{\\beta}_{e} - X^{\\alpha}_{e}}"
          ],
          "note": "Gives mole fractions. Unit 3's wt% version gives mass fractions."
        },
        {
          "type": "formulablock",
          "name": "Sign of the enthalpy of mixing and the diagram it builds",
          "eqs": [
            "\\Delta H_{\\mathrm{mix}} = 0: \\text{ isomorphous} \\qquad \\Delta H_{\\mathrm{mix}} > 0: \\text{ miscibility gap} \\qquad \\Delta H_{\\mathrm{mix}} < 0: \\text{ ordering}"
          ],
          "vars": [
            {
              "symbol": "Solid",
              "desc": "the sign refers to mixing in the solid; the liquid is taken as ideal in the lecture examples"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Regular solution: free energy of mixing and critical temperature",
          "eqs": [
            "\\Delta G_{\\mathrm{mix}} = \\Omega X_A X_B + RT\\,(X_A \\ln X_A + X_B \\ln X_B)",
            "T_c = \\frac{\\Omega}{2R}"
          ],
          "vars": [
            {
              "symbol": "\\(\\Omega\\)",
              "desc": "interaction parameter: positive for repulsion (gap), negative for attraction (ordering)"
            },
            {
              "symbol": "\\(T_c\\)",
              "desc": "temperature above which the miscibility gap closes"
            }
          ],
          "note": "The \\(T_c\\) result is standard for the regular solution model but is not on the lecture slides."
        },
        {
          "type": "formulablock",
          "name": "The four invariant reactions (on cooling)",
          "eqs": [
            "\\text{Eutectic: } L \\rightarrow \\alpha + \\beta \\qquad \\text{Eutectoid: } \\gamma \\rightarrow \\alpha + \\beta",
            "\\text{Peritectic: } L + \\alpha \\rightarrow \\gamma \\qquad \\text{Peritectoid: } \\alpha + \\beta \\rightarrow \\gamma"
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
    },
    {
      "heading": "Unit 3 - Using Phase Diagrams",
      "items": [
        {
          "tag": "U3 - T1",
          "claim": "\"In a single-phase field, find the phase composition by drawing a tie line.\"",
          "truth": "<strong>FALSE.</strong> A tie line is only for two-phase fields. In a single-phase field the one phase makes up 100% of the alloy and has the alloy's own composition \\(C_0\\)."
        },
        {
          "tag": "U3 - T2",
          "claim": "\"A tie line can be drawn at any angle, as long as it passes through the alloy point.\"",
          "truth": "<strong>FALSE.</strong> A tie line is <strong>horizontal</strong>. Two phases in equilibrium must be at the same temperature, so the line is isothermal."
        },
        {
          "tag": "U3 - T3",
          "claim": "\"The lever rule uses the arm on the same side of the alloy point as the phase you want.\"",
          "truth": "<strong>FALSE.</strong> It uses the <strong>opposite</strong> arm. For \\(\\alpha\\) the numerator is \\(C_0 - C_L\\), not \\(C_\\alpha - C_0\\). A quick check: the phase whose composition is closer to \\(C_0\\) must come out as the larger fraction."
        },
        {
          "tag": "U3 - T4",
          "claim": "\"As an alloy cools through a two-phase field, its overall composition changes.\"",
          "truth": "<strong>FALSE.</strong> The overall composition stays at \\(C_0\\) at every temperature. What changes is the composition of each phase (sliding along the boundaries) and the proportions of the phases."
        },
        {
          "tag": "U3 - T5",
          "claim": "\"The lever rule weight fractions are what you would measure as area fractions on a micrograph.\"",
          "truth": "<strong>FALSE.</strong> The lever rule gives <strong>mass</strong> fractions. A micrograph shows area (volume) fractions. If the phases have different densities you must convert, and the denser phase takes up less volume than its mass share."
        },
        {
          "tag": "U3 - T6",
          "claim": "\"A eutectic reaction is one solid phase transforming into two new solid phases.\"",
          "truth": "<strong>FALSE.</strong> That is a <strong>eutectoid</strong> reaction. A eutectic reaction starts from a <strong>liquid</strong>: \\(L \\rightarrow \\alpha + \\beta\\)."
        },
        {
          "tag": "U3 - T7",
          "claim": "\"In a hypoeutectic Pb-Sn alloy the pro-eutectic phase is β.\"",
          "truth": "<strong>FALSE.</strong> Hypoeutectic means less Sn than the eutectic (below 61.9 wt% Sn), so the pro-eutectic phase is Pb-rich <strong>α</strong>. Pro-eutectic β belongs to hypereutectic alloys."
        },
        {
          "tag": "U3 - T8",
          "claim": "\"For Pb-30 wt% Sn just below 183 °C, the fraction of pro-eutectic α equals the fraction of α in the alloy.\"",
          "truth": "<strong>FALSE.</strong> Pro-eutectic α is 73.2%, but total α is 85.3%. The eutectic also contains α, so the total α is the pro-eutectic α plus the α inside the eutectic. Microconstituents and phases are different counts."
        },
        {
          "tag": "U3 - T9",
          "claim": "\"The lamellar eutectic structure is the lowest free energy arrangement of α and β.\"",
          "truth": "<strong>FALSE.</strong> Lamellae contain a huge amount of interface, which raises free energy. The structure forms because co-operative growth keeps diffusion distances short. It is <strong>kinetically favoured</strong>, not thermodynamically optimal."
        },
        {
          "tag": "U3 - T10",
          "claim": "\"An alloy at the eutectic composition freezes over a temperature range, like a solid solution.\"",
          "truth": "<strong>FALSE.</strong> At the eutectic composition the liquid freezes at one fixed temperature (183 °C for Pb-Sn), as it would for a pure metal. Off-eutectic alloys are the ones that freeze over a range."
        },
        {
          "tag": "U3 - T11",
          "claim": "\"In a Cu-Ni alloy, the first crystals to form have the same composition as the liquid.\"",
          "truth": "<strong>FALSE.</strong> The first α crystals are richer in Ni than the liquid (about 46 wt% Ni against 35 wt% Ni in the lecture example). The tie line ends are different compositions by definition."
        },
        {
          "tag": "U3 - T12",
          "claim": "\"In a hyper-peritectic alloy, excess α is left after the peritectic reaction.\"",
          "truth": "<strong>FALSE.</strong> Hyper-peritectic alloys have excess <strong>liquid</strong> left over, which carries on solidifying as β. It is the <strong>hypo</strong>-peritectic alloys that are left with excess α."
        }
      ]
    },
    {
      "heading": "Unit 4 - Construction of Phase Diagrams",
      "items": [
        {
          "tag": "U4 - T1",
          "claim": "\"The common tangent touches each free energy curve at its minimum.\"",
          "truth": "<strong>FALSE.</strong> The tangent points are where one straight line has the same slope on both curves. For two curves of different height and shape these sit away from the curve minima."
        },
        {
          "tag": "U4 - T2",
          "claim": "\"An alloy in the crossover region takes whichever single-phase free energy is lower.\"",
          "truth": "<strong>FALSE.</strong> Between the two tangent points a mixture of the two phases lies on the common tangent, which is below both single-phase curves. The alloy separates into two phases."
        },
        {
          "tag": "U4 - T3",
          "claim": "\"At equilibrium between \\(\\alpha\\) and \\(\\beta\\), the two phases have the same composition.\"",
          "truth": "<strong>FALSE.</strong> What is equal is the chemical potential of each component, \\(\\mu_A^{\\alpha} = \\mu_A^{\\beta}\\) and \\(\\mu_B^{\\alpha} = \\mu_B^{\\beta}\\). The compositions \\(X^{\\alpha}_{e}\\) and \\(X^{\\beta}_{e}\\) are different."
        },
        {
          "tag": "U4 - T4",
          "claim": "\"In an isomorphous system above both melting points, the solid free energy curve is lowest.\"",
          "truth": "<strong>FALSE.</strong> Above both melting points the liquid curve is lowest at every composition, so every alloy is liquid. The solid curve is lowest everywhere only below both melting points."
        },
        {
          "tag": "U4 - T5",
          "claim": "\"A miscibility gap forms because A and B atoms attract each other.\"",
          "truth": "<strong>FALSE.</strong> A miscibility gap comes from a positive \\(\\Delta H_{\\mathrm{mix}}\\): unlike atoms repel, so each prefers its own kind and the solid splits into \\(\\alpha'\\) and \\(\\alpha''\\). Attraction (negative \\(\\Delta H_{\\mathrm{mix}}\\)) gives ordering."
        },
        {
          "tag": "U4 - T6",
          "claim": "\"An ordered alloy melts at a lower temperature than either pure component.\"",
          "truth": "<strong>FALSE.</strong> The strong A-B attraction makes the ordered solid hard to melt, so it melts at a <em>higher</em> temperature than pure A or pure B. It is the miscibility gap case where the liquid is stable below both melting points."
        },
        {
          "tag": "U4 - T7",
          "claim": "\"Every horizontal line on a phase diagram is an invariant reaction.\"",
          "truth": "<strong>FALSE.</strong> Tie lines inside two-phase fields are horizontal too, but they only let you read off compositions. An invariant reaction is the horizontal line on the diagram where three phases meet."
        },
        {
          "tag": "U4 - T8",
          "claim": "\"A peritectoid reaction involves a liquid.\"",
          "truth": "<strong>FALSE.</strong> Peritectoid is two <strong>solids</strong> reacting to form a new solid, \\(\\alpha + \\beta \\rightarrow \\gamma\\). With a liquid and a solid it is peritectic."
        },
        {
          "tag": "U4 - T9",
          "claim": "\"The two solid phases in a eutectic system must have different crystal structures.\"",
          "truth": "<strong>FALSE.</strong> The lecture shows both kinds. If the solids share a structure, the eutectic is the liquid cutting across a solid miscibility gap. If they differ, each has its own free energy curve."
        },
        {
          "tag": "U4 - T10",
          "claim": "\"Melting cannot be a congruent transformation, because the phase changes.\"",
          "truth": "<strong>FALSE.</strong> Congruent means the <em>composition</em> does not change, not that the phase stays the same. Melting and solidification are listed as congruent. Invariant reactions are the opposite: there the phase compositions change."
        },
        {
          "tag": "U4 - T11",
          "claim": "\"Allotropic and polymorphic transformations are the same thing.\"",
          "truth": "<strong>FALSE.</strong> Both are changes of crystal structure, but <strong>allotropic</strong> is for a pure element and <strong>polymorphic</strong> is for an alloy (a phase with more than one element)."
        },
        {
          "tag": "U4 - T12",
          "claim": "\"A miscibility gap persists at every temperature, as long as \\(\\Delta H_{\\mathrm{mix}}\\) is positive.\"",
          "truth": "<strong>FALSE.</strong> Raising the temperature strengthens the entropy term until the two dips merge. For a regular solution the gap closes at \\(T_c = \\Omega/2R\\) and above it the solution is single phase at every composition."
        },
        {
          "tag": "U4 - T13",
          "claim": "\"At the eutectic temperature the liquid has two tangents, one to each solid.\"",
          "truth": "<strong>FALSE.</strong> Above the eutectic there are two separate tangents (\\(\\alpha\\) to L and L to \\(\\beta\\)). At the eutectic temperature they merge into <strong>one</strong> line touching all three curves, which is what makes the reaction invariant."
        },
        {
          "tag": "U4 - T14",
          "claim": "\"Cooling lowers the liquid free energy curve relative to the solids, so the liquid becomes more stable.\"",
          "truth": "<strong>FALSE.</strong> Cooling raises the liquid curve relative to the solid curves. That is why the liquid eventually disappears. Heating does the opposite."
        }
      ]
    }
  ],
  "trapsSubtitle": "Plausible-but-wrong claims the exam uses. Read each one. Know what's actually true.",
  "glossaryIntro": "Search across all terms instantly. Filter by unit."
};
