// EG2038 Study Site — content data
// Schema documented in study-site-core/js/render.js
window.SITE_CONFIG = {
  "wikiHint": "metallurgy",
  "slug": "eg2038",
  "topicIds": [
    "u1",
    "u2",
    "u3",
    "u4",
    "u5",
    "u6",
    "u7"
  ],
  "navOrder": [
    "u1",
    "u2",
    "u3",
    "u4",
    "u5",
    "u6",
    "u7"
  ],
  "topicColors": {
    "u1": "#00a87a",
    "u2": "#3b82e8",
    "u3": "#8855f5",
    "u4": "#e04545",
    "u5": "#d89800",
    "u6": "#e08000",
    "u7": "#e03f78"
  },
  "topicLabels": {
    "u1": "Intro to Thermodynamics",
    "u2": "Solution Thermodynamics",
    "u3": "Using Phase Diagrams",
    "u4": "Construction of Phase Diagrams",
    "u5": "Limitations of Thermodynamics",
    "u6": "Solidification: Nucleation",
    "u7": "Solidification: Growth"
  }
};

window.SITE_CONTENT = {
  "home": {
    "tag": "Microstructure Evolution & Control in Metallic Materials — Swansea University",
    "title": "EG2038 Study Site",
    "subtitle": "Thermodynamics and kinetics as the twin forces behind every microstructure: why phases form, when they're stable, and how alloying, processing and heat treatment control the properties that follow. Built out unit by unit as the module runs.",
    "stats": [
      {
        "value": "7 of 10",
        "label": "Units built"
      },
      {
        "value": "155",
        "label": "Terms"
      },
      {
        "value": "37",
        "label": "Formulas"
      },
      {
        "value": "75",
        "label": "Exam Traps"
      }
    ],
    "extra": [
      {
        "type": "raw",
        "html": "<h2>Quick reference</h2>"
      },
      {
        "type": "raw",
        "html": "<div class=\"card-grid\">\n      <div class=\"topic-card\" onclick=\"showSection('formulas')\" style=\"--bar-color:#00a87a\">\n        <div class=\"topic-num\">Reference</div>\n        <div class=\"topic-title\">📐 Formula Sheet</div>\n        <div class=\"topic-desc\">Every equation covered so far. Variables defined, units flagged.</div>\n      </div>\n      <div class=\"topic-card\" onclick=\"showSection('glossary')\" style=\"--bar-color:#2fa15c\">\n        <div class=\"topic-num\">Reference</div>\n        <div class=\"topic-title\">📚 Glossary</div>\n        <div class=\"topic-desc\">155 terms from Units 1 to 7. Instant search, topic filter, and flashcard mode.</div>\n      </div>\n      <div class=\"topic-card\" onclick=\"showSection('traps')\" style=\"--bar-color:#e04545\">\n        <div class=\"topic-num\">Reference</div>\n        <div class=\"topic-title\">⚠️ MCQ Traps</div>\n        <div class=\"topic-desc\">Plausible-but-wrong claims the exam uses. Know what's actually true.</div>\n      </div>\n    </div>"
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
            {
              "href": "#u1-why",
              "label": "Why microstructure matters"
            },
            {
              "href": "#u1-thermo-kinetics",
              "label": "Thermodynamics vs kinetics"
            },
            {
              "href": "#u1-stability",
              "label": "Stability, metastability and activation energy"
            },
            {
              "href": "#u1-terminology",
              "label": "Terminology"
            },
            {
              "href": "#u1-firstlaw",
              "label": "First law of thermodynamics"
            },
            {
              "href": "#u1-enthalpy",
              "label": "Enthalpy"
            },
            {
              "href": "#u1-entropy",
              "label": "Entropy & the second law"
            },
            {
              "href": "#u1-gibbs",
              "label": "Gibbs free energy"
            },
            {
              "href": "#u1-measuring",
              "label": "Measuring the parameters"
            }
          ]
        },
        {
          "type": "h2",
          "id": "u1-why",
          "text": "Why Microstructure Matters"
        },
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
            {
              "title": "Alloying",
              "color": "#00a87a",
              "text": "Changing composition. Pure Al (soft, ductile) vs Al-Si alloy (hard, rigid) — same base element, different phases present."
            },
            {
              "title": "Processing",
              "color": "#00a87a",
              "text": "Changing how the metal is worked. A Damascus sword's legendary properties came from forging and folding technique, not a different alloy."
            },
            {
              "title": "Heat treatment",
              "color": "#00a87a",
              "text": "A type of secondary processing that changes properties without altering the manufactured geometry. Example: Al-Cu aircraft fuselage alloy is heat treated for strength."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Stability matters as much as optimisation",
          "html": "<p>Producing the optimum microstructure for an application isn't enough on its own — that microstructure also has to stay <strong>stable under the operating environment</strong>. Ti, Ni, steel and Al alloys all lose specific strength differently as temperature rises, which is why a jet engine uses Ni-superalloy turbine blades in the hottest section and Ti-alloy blades further back — each alloy's high-temperature strength curve decides where it can be used.</p>"
        },
        {
          "type": "h2",
          "id": "u1-thermo-kinetics",
          "text": "Thermodynamics vs Kinetics"
        },
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
        {
          "type": "h2",
          "id": "u1-stability",
          "text": "Stability, Metastability and Activation Energy"
        },
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
        {
          "type": "h2",
          "id": "u1-terminology",
          "text": "Terminology"
        },
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
        {
          "type": "h2",
          "id": "u1-firstlaw",
          "text": "First Law of Thermodynamics"
        },
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
        {
          "type": "h2",
          "id": "u1-enthalpy",
          "text": "Enthalpy"
        },
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
        {
          "type": "h2",
          "id": "u1-entropy",
          "text": "Entropy & the Second Law"
        },
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
        {
          "type": "h2",
          "id": "u1-gibbs",
          "text": "Gibbs Free Energy"
        },
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
            {
              "symbol": "H",
              "desc": "enthalpy (heat content)"
            },
            {
              "symbol": "S",
              "desc": "entropy (disorder)"
            },
            {
              "symbol": "T",
              "desc": "absolute temperature of the system"
            }
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
        {
          "type": "h2",
          "id": "u1-measuring",
          "text": "Measuring the Thermodynamic Parameters"
        },
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
            {
              "symbol": "C",
              "desc": "quantity of heat required to raise the temperature of a substance by one degree"
            },
            {
              "symbol": "C_P",
              "desc": "specific heat capacity at constant pressure (specific = per unit mass)"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "ΔH and ΔS from heat capacity",
          "eqs": [
            "\\Delta H = \\int C_P \\, dT \\qquad \\Delta S = \\int \\frac{C_P}{T} \\, dT"
          ],
          "note": "<strong>Reference points (the convention):</strong> H = 0 at 298 K (room temperature); S = 0 at 0 K (absolute zero), from the <strong>third law</strong> of thermodynamics. Absolute values of H, S, G aren't physically meaningful on their own — only the <em>changes</em> (ΔH, ΔS, ΔG for large changes; ∂H, ∂S, ∂G for small ones) matter for predicting transformations. C<sub>P</sub> tends towards a limit of roughly 3R at high temperature for a pure metal."
        },
        {
          "type": "h2",
          "id": "",
          "text": "Unit 1 essentials"
        },
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
    {
      "id": "u5",
      "numLabel": "Unit 5 of 10",
      "color": "#d89800",
      "title": "Limitations of Thermodynamics (Intro to Kinetics)",
      "subtitle": "Units 1 to 4 answered one question: which phases <em>should</em> form. This unit shows where that answer breaks down in real metals, and brings in the second half of the story: how fast a change happens, set by an activation barrier and by the diffusion of atoms.",
      "desc": "Why real microstructures deviate from the phase diagram: coring, activation energy and the Arrhenius rate law, Fick's first and second laws, vacancy vs interstitial diffusion, and chemical potential as the true driver.",
      "difficulty": "Medium",
      "readTime": "25 min",
      "sections": [
        {
          "type": "toc",
          "title": "In this unit",
          "items": [
            {
              "href": "#u5-big",
              "label": "What thermodynamics cannot tell you"
            },
            {
              "href": "#u5-coring",
              "label": "Coring: when the diagram is wrong"
            },
            {
              "href": "#u5-rate",
              "label": "Rate of transformation"
            },
            {
              "href": "#u5-diff",
              "label": "Diffusion: the mechanism"
            },
            {
              "href": "#u5-fick1",
              "label": "Steady state: Fick's first law"
            },
            {
              "href": "#u5-fick2",
              "label": "Transient state: Fick's second law"
            },
            {
              "href": "#u5-mech",
              "label": "Vacancy vs interstitial diffusion"
            },
            {
              "href": "#u5-why",
              "label": "What actually drives diffusion"
            }
          ]
        },
        {
          "type": "h2",
          "id": "u5-big",
          "text": "What Thermodynamics Cannot Tell You"
        },
        {
          "type": "p",
          "text": "A map can tell you the valley is lower than the hill you are standing on. It cannot tell you how long the walk down will take, or whether there is a ridge in the way. A phase diagram is that map. It shows the <strong>equilibrium</strong> phases, the state of lowest Gibbs free energy, and nothing about the route or the time.",
          "class": ""
        },
        {
          "type": "p",
          "text": "Diamond is the classic case. At room temperature and pressure graphite has the lower free energy, so diamond should turn into graphite. It never does on any timescale that matters, because the atoms cannot rearrange fast enough. The change is <strong>favourable</strong> but practically <strong>irrelevant</strong>.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Thermodynamics",
              "color": "#d89800",
              "text": "Which state is most stable, and whether a change is possible (\\(\\Delta G < 0\\)). Read straight off a phase diagram."
            },
            {
              "title": "Kinetics",
              "color": "#d89800",
              "text": "How fast the change happens and by what mechanism. Controlled mainly by <strong>atomic diffusion</strong>, which needs time and temperature."
            },
            {
              "title": "Observed microstructure",
              "color": "#d89800",
              "text": "What you actually see under the microscope. Often <em>not</em> what the diagram predicts, e.g. coring or an incomplete peritectic reaction."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>You need both: thermodynamics to say what is possible, kinetics to say what actually forms in the time available.</p>"
        },
        {
          "type": "h2",
          "id": "u5-coring",
          "text": "Coring: When the Phase Diagram Is Wrong"
        },
        {
          "type": "p",
          "text": "Think of making tea by adding milk while stirring the cup but never the cloud already at the bottom. The liquid evens out instantly, the sediment never does. Solidifying alloys behave the same way: atoms in the liquid mix easily, atoms in the solid barely move.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "The equilibrium prediction (Cu-35 wt% Ni)"
        },
        {
          "type": "list",
          "items": [
            "At every temperature in the two-phase region, the tie line gives the solid composition (on the solidus) and the liquid composition (on the liquidus)",
            "Equilibrium assumes <strong>both</strong> phases stay uniform: as the temperature drops, all the solid already formed adjusts to the new solidus composition",
            "The final \\(\\alpha\\) grains therefore end up uniform at <strong>35 wt% Ni</strong>, the alloy composition"
          ]
        },
        {
          "type": "h3",
          "text": "What really happens at a normal cooling rate"
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: a cored Cu-35 wt% Ni grain (compositions from the lecture slide)</div>\n<svg viewBox=\"0 0 640 300\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Cross-section of three cored grains, each with concentric layers. The centre was the first solid to form at about 1260 degrees C with 46 weight percent nickel, then layers of 40, 35 and 31 weight percent nickel formed at progressively lower temperatures.\">\n<rect x=\"40\" y=\"35\" width=\"250\" height=\"240\" rx=\"10\" fill=\"#e04545\" fill-opacity=\"0.08\" stroke=\"#5e5e6c\" stroke-width=\"1.2\"/><polygon points=\"184.9,110.0 185.2,123.9 181.0,137.1 172.5,148.2 161.5,156.1 149.6,161.2 137.7,164.5 126.0,167.0 113.8,168.7 100.9,168.9 87.6,166.2 75.4,159.6 66.0,149.2 60.7,136.4 59.3,122.9 60.9,110.0 64.0,98.1 67.7,86.7 72.2,75.3 78.5,64.0 87.6,53.8 99.4,46.6 113.0,43.6 126.8,45.4 139.2,51.0 149.6,58.8 158.3,67.4 166.3,76.3 173.9,86.0 180.6,97.1 184.9,110.0\" fill=\"#f8d4cc\" stroke=\"#b05040\" stroke-width=\"0.8\"/><polygon points=\"168.1,110.0 168.4,120.3 165.2,130.1 159.0,138.3 150.8,144.2 141.9,148.0 133.1,150.4 124.4,152.3 115.4,153.6 105.8,153.7 95.9,151.7 86.9,146.8 79.9,139.1 76.0,129.6 75.0,119.6 76.1,110.0 78.4,101.2 81.2,92.7 84.6,84.2 89.2,75.8 95.9,68.3 104.7,62.9 114.8,60.8 125.0,62.1 134.2,66.2 141.9,72.0 148.4,78.4 154.4,85.0 160.0,92.2 165.0,100.4 168.1,110.0\" fill=\"#f0a898\" stroke=\"#b05040\" stroke-width=\"0.8\"/><polygon points=\"152.4,110.0 152.6,116.9 150.5,123.6 146.3,129.1 140.8,133.1 134.8,135.6 128.9,137.2 123.0,138.5 116.9,139.4 110.4,139.5 103.8,138.1 97.7,134.8 93.0,129.6 90.3,123.2 89.7,116.4 90.4,110.0 92.0,104.0 93.8,98.4 96.1,92.6 99.3,87.0 103.8,81.9 109.7,78.3 116.5,76.8 123.4,77.7 129.6,80.5 134.8,84.4 139.2,88.7 143.2,93.2 147.0,98.0 150.3,103.6 152.4,110.0\" fill=\"#e0705f\" stroke=\"#b05040\" stroke-width=\"0.8\"/><polygon points=\"136.7,110.0 136.8,113.6 135.7,117.0 133.6,119.9 130.7,121.9 127.6,123.2 124.6,124.1 121.5,124.7 118.4,125.2 115.1,125.2 111.6,124.5 108.5,122.8 106.1,120.1 104.7,116.8 104.3,113.3 104.7,110.0 105.5,106.9 106.5,104.0 107.7,101.0 109.3,98.1 111.6,95.5 114.7,93.6 118.2,92.9 121.8,93.3 124.9,94.8 127.6,96.8 129.9,99.0 132.0,101.3 133.9,103.8 135.6,106.7 136.7,110.0\" fill=\"#c0392b\" stroke=\"#b05040\" stroke-width=\"0.8\"/><polygon points=\"275.2,170.0 273.6,182.4 268.0,193.6 259.7,202.5 250.3,209.2 240.7,214.5 231.0,219.2 220.6,223.3 209.1,226.0 196.8,225.9 184.9,222.1 174.9,214.5 168.1,204.1 164.5,192.5 163.4,181.0 163.6,170.0 164.4,159.2 166.0,148.2 169.4,136.9 175.6,126.3 184.9,117.9 196.5,113.1 208.9,112.3 220.8,115.0 231.3,119.8 240.7,125.5 249.6,131.5 258.4,138.5 266.4,147.1 272.5,157.8 275.2,170.0\" fill=\"#f8d4cc\" stroke=\"#b05040\" stroke-width=\"0.8\"/><polygon points=\"259.6,170.0 258.4,179.2 254.3,187.5 248.2,194.1 241.2,199.1 234.1,203.0 226.9,206.5 219.2,209.6 210.6,211.6 201.5,211.5 192.7,208.7 185.3,203.0 180.2,195.3 177.5,186.7 176.7,178.1 176.8,170.0 177.5,162.0 178.7,153.8 181.2,145.4 185.8,137.6 192.7,131.3 201.3,127.8 210.5,127.2 219.3,129.2 227.1,132.8 234.1,137.0 240.7,141.5 247.2,146.6 253.2,153.0 257.7,160.9 259.6,170.0\" fill=\"#f0a898\" stroke=\"#b05040\" stroke-width=\"0.8\"/><polygon points=\"245.1,170.0 244.3,176.2 241.5,181.8 237.4,186.2 232.7,189.6 227.9,192.3 223.0,194.6 217.8,196.7 212.1,198.0 205.9,198.0 200.0,196.1 195.0,192.2 191.5,187.0 189.7,181.2 189.2,175.5 189.3,170.0 189.7,164.6 190.5,159.1 192.2,153.5 195.3,148.1 200.0,143.9 205.8,141.5 212.0,141.2 217.9,142.5 223.2,144.9 227.9,147.7 232.3,150.8 236.7,154.2 240.7,158.5 243.8,163.9 245.1,170.0\" fill=\"#e0705f\" stroke=\"#b05040\" stroke-width=\"0.8\"/><polygon points=\"230.5,170.0 230.1,173.2 228.7,176.1 226.5,178.4 224.1,180.1 221.6,181.5 219.1,182.7 216.4,183.8 213.5,184.5 210.3,184.4 207.2,183.4 204.7,181.5 202.9,178.8 202.0,175.8 201.7,172.8 201.7,170.0 201.9,167.2 202.4,164.4 203.2,161.5 204.8,158.7 207.2,156.6 210.2,155.3 213.4,155.1 216.5,155.8 219.2,157.0 221.6,158.5 223.9,160.1 226.2,161.9 228.3,164.1 229.8,166.8 230.5,170.0\" fill=\"#c0392b\" stroke=\"#b05040\" stroke-width=\"0.8\"/><polygon points=\"162.5,215.0 159.0,225.4 154.4,234.8 149.4,243.7 143.7,252.4 136.4,260.8 127.1,267.6 115.9,271.5 104.1,271.3 93.0,267.3 83.7,260.5 76.5,252.2 70.7,243.6 65.5,234.8 60.7,225.5 57.1,215.0 55.9,203.5 58.1,191.9 64.2,181.7 73.2,174.1 83.7,169.5 94.5,167.4 104.9,166.6 115.1,166.5 125.6,167.1 136.4,169.2 147.0,173.9 155.9,181.6 161.8,192.0 163.8,203.6 162.5,215.0\" fill=\"#f8d4cc\" stroke=\"#b05040\" stroke-width=\"0.8\"/><polygon points=\"149.0,215.0 146.3,222.7 143.0,229.7 139.3,236.3 135.0,242.8 129.6,249.0 122.7,254.0 114.4,256.9 105.6,256.8 97.4,253.8 90.5,248.7 85.1,242.6 80.8,236.2 77.0,229.7 73.4,222.8 70.8,215.0 69.8,206.5 71.5,197.9 76.0,190.3 82.7,184.7 90.5,181.3 98.5,179.7 106.2,179.1 113.8,179.0 121.5,179.5 129.6,181.0 137.5,184.5 144.1,190.2 148.4,197.9 149.9,206.5 149.0,215.0\" fill=\"#f0a898\" stroke=\"#b05040\" stroke-width=\"0.8\"/><polygon points=\"136.3,215.0 134.5,220.2 132.2,224.9 129.7,229.3 126.9,233.7 123.2,237.9 118.5,241.3 113.0,243.2 107.0,243.2 101.5,241.2 96.9,237.7 93.2,233.6 90.3,229.3 87.7,224.9 85.4,220.2 83.6,215.0 82.9,209.2 84.1,203.5 87.1,198.4 91.6,194.6 96.9,192.3 102.3,191.2 107.5,190.8 112.5,190.8 117.8,191.0 123.2,192.1 128.5,194.4 133.0,198.3 135.9,203.5 136.9,209.3 136.3,215.0\" fill=\"#e0705f\" stroke=\"#b05040\" stroke-width=\"0.8\"/><polygon points=\"123.6,215.0 122.6,217.7 121.5,220.1 120.2,222.4 118.7,224.7 116.8,226.8 114.4,228.6 111.5,229.6 108.5,229.5 105.6,228.5 103.2,226.7 101.4,224.6 99.8,222.4 98.5,220.1 97.3,217.7 96.4,215.0 96.0,212.0 96.6,209.0 98.2,206.4 100.5,204.4 103.2,203.3 106.0,202.7 108.7,202.5 111.3,202.5 114.0,202.6 116.8,203.2 119.6,204.4 121.9,206.4 123.4,209.1 123.9,212.0 123.6,215.0\" fill=\"#c0392b\" stroke=\"#b05040\" stroke-width=\"0.8\"/><text x=\"165.0\" y=\"26.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">one cored grain, sectioned</text><text x=\"330.0\" y=\"60.0\" fill=\"#a0a0ac\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">Layer (centre &#8594; edge)</text><rect x=\"330\" y=\"78\" width=\"18\" height=\"18\" rx=\"3\" fill=\"#c0392b\" stroke=\"#b05040\" stroke-width=\"0.8\"/><text x=\"358.0\" y=\"92.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">first solid, ~1260 &#176;C</text><text x=\"600.0\" y=\"92.0\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">46 wt% Ni</text><rect x=\"330\" y=\"108\" width=\"18\" height=\"18\" rx=\"3\" fill=\"#e0705f\" stroke=\"#b05040\" stroke-width=\"0.8\"/><text x=\"358.0\" y=\"122.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">formed ~1240 &#176;C</text><text x=\"600.0\" y=\"122.0\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">40 wt% Ni</text><rect x=\"330\" y=\"138\" width=\"18\" height=\"18\" rx=\"3\" fill=\"#f0a898\" stroke=\"#b05040\" stroke-width=\"0.8\"/><text x=\"358.0\" y=\"152.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">formed ~1220 &#176;C</text><text x=\"600.0\" y=\"152.0\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">35 wt% Ni</text><rect x=\"330\" y=\"168\" width=\"18\" height=\"18\" rx=\"3\" fill=\"#f8d4cc\" stroke=\"#b05040\" stroke-width=\"0.8\"/><text x=\"358.0\" y=\"182.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">last solid, ~1205 &#176;C</text><text x=\"600.0\" y=\"182.0\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">31 wt% Ni</text><text x=\"330.0\" y=\"222.0\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">Average of the whole grain = 35 wt% Ni,</text><text x=\"330.0\" y=\"240.0\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">but no single layer is 35 wt% Ni throughout.</text><text x=\"330.0\" y=\"264.0\" fill=\"#90909c\" font-size=\"11\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">Cu-35 wt% Ni, cooled too fast for the solid to keep up</text>\n</svg>\n<p style=\"text-align:center;margin-top:6px\">Each layer has the solidus composition at the temperature it froze. The solid underneath never had time to re-equilibrate.</p>\n</div>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Step by step on the slide (Cu-35 wt% Ni)",
          "html": "<ul><li><strong>~1260 &#176;C:</strong> first solid forms at 46 wt% Ni, from liquid of 35 wt% Ni</li><li><strong>~1240 &#176;C:</strong> new solid at the solidus is 40 wt% Ni, but the 46 wt% core cannot change. The <em>average</em> solid is about 42 wt% Ni. Liquid is 29 wt% Ni</li><li><strong>~1220 &#176;C:</strong> the equilibrium solidus for this alloy is reached, but the average solid is only about 38 wt% Ni, so liquid (24 wt% Ni) is still present. Solidification is <strong>not</strong> finished where the diagram says it should be</li><li><strong>~1205 &#176;C:</strong> the last solid (31 wt% Ni) forms from liquid of about 21 wt% Ni. Only now does the average solid reach 35 wt% Ni and solidification ends</li></ul>"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Why the liquid keeps up",
              "color": "#d89800",
              "text": "Diffusion in a liquid is fast, and the liquid is stirred by convection. It stays at the liquidus composition for each temperature."
            },
            {
              "title": "Why the solid does not",
              "color": "#d89800",
              "text": "Solid-state diffusion is orders of magnitude slower. Each layer keeps the composition it froze with."
            },
            {
              "title": "The result",
              "color": "#d89800",
              "text": "Layers of different composition in each grain: <strong>coring</strong>, also called <strong>solute segregation</strong>."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Consequences and the fix",
          "html": "<ul><li><strong>Inhomogeneous properties:</strong> strength, corrosion resistance and melting behaviour vary across each grain</li><li><strong>Solidification finishes below the equilibrium solidus</strong> (about 1205 &#176;C instead of about 1220 &#176;C on the slide)</li><li><strong>Fix:</strong> a <strong>homogenising heat treatment</strong> at an elevated temperature <em>below the solidus</em>. Holding it there gives atoms time to diffuse and even out the layers</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Why \"below the solidus\" matters (beyond the slide)",
          "html": "<p>The last, Ni-poor layers of a cored grain melt at a lower temperature than the equilibrium solidus suggests. Heating a cored casting just under the equilibrium solidus can partially melt those regions at the grain boundaries (sometimes called incipient melting). This is standard practice knowledge rather than a lecture point.</p>"
        },
        {
          "type": "example",
          "label": "Try it: explain a cored grain",
          "q": "A Cu-35 wt% Ni casting is sectioned and analysed. The centre of a grain reads 46 wt% Ni and the edge 31 wt% Ni. The phase diagram says the solid should be 35 wt% Ni. Explain the readings and say how to remove the difference.",
          "steps": [
            "The centre was the first solid to form, high in the two-phase region, where the solidus composition is 46 wt% Ni",
            "Each later layer formed at a lower temperature, with a lower solidus Ni content, down to 31 wt% Ni for the last layer",
            "Diffusion in the solid was too slow to bring the earlier layers down to the current solidus composition, so the gradient was frozen in"
          ],
          "answer": "The grain is cored. A homogenising anneal below the solidus lets Ni and Cu diffuse until the grain is uniform at 35 wt% Ni, which is the equilibrium the diagram predicted."
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>The diagram assumes infinite time for diffusion. Coring is what you get when the solid cannot keep up.</p>"
        },
        {
          "type": "h2",
          "id": "u5-rate",
          "text": "Rate of Transformation: the Activation Barrier"
        },
        {
          "type": "p",
          "text": "Pushing a boulder from one valley into a lower one still means rolling it over the ridge first. The drop between valleys is the <strong>driving force</strong>. The height of the ridge is the <strong>activation energy</strong>. A deep valley on the far side does not help if nobody can get the boulder over the top.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: the energy path of a transformation (schematic)</div>\n<svg viewBox=\"0 0 640 310\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Free energy against progress of a transformation. The initial state at G1 must climb a hump to the activated state, the activation energy, before dropping to the lower final state at G2. The drop from G1 to G2 is the driving force.\">\n<line x1=\"70.0\" y1=\"270.0\" x2=\"70.0\" y2=\"36.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"70.0,24.0 65.2,34.2 74.8,34.2\" fill=\"#5e5e6c\"/><line x1=\"70.0\" y1=\"270.0\" x2=\"594.0\" y2=\"270.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"606.0,270.0 595.8,265.2 595.8,274.8\" fill=\"#5e5e6c\"/><polyline points=\"70.0,173.4 73.2,173.4 76.4,173.4 79.6,173.4 82.8,173.4 85.9,173.4 89.1,173.4 92.3,173.4 95.5,173.4 98.7,173.4 101.9,173.4 105.1,173.4 108.3,173.4 111.4,173.4 114.6,173.4 117.8,173.4 121.0,173.4 124.2,173.4 127.4,173.4 130.6,173.4 133.8,173.4 136.9,173.4 140.1,173.4 143.3,173.4 146.5,173.4 149.7,173.4 152.9,173.4 156.1,173.3 159.3,173.3 162.4,173.3 165.6,173.2 168.8,173.2 172.0,173.1 175.2,173.0 178.4,172.9 181.6,172.8 184.8,172.6 187.9,172.3 191.1,172.1 194.3,171.7 197.5,171.2 200.7,170.7 203.9,170.1 207.1,169.5 210.3,168.7 213.4,167.9 216.6,166.9 219.8,165.7 223.0,164.3 226.2,162.6 229.4,160.7 232.6,158.5 235.8,156.0 238.9,153.1 242.1,149.9 245.3,146.3 248.5,142.3 251.7,138.0 254.9,133.4 258.1,128.4 261.3,123.1 264.4,117.7 267.6,112.0 270.8,106.3 274.0,100.5 277.2,94.8 280.4,89.3 283.6,84.0 286.8,79.1 289.9,74.6 293.1,70.7 296.3,67.4 299.5,64.8 302.7,63.1 305.9,62.1 309.1,62.1 312.3,63.0 315.4,64.8 318.6,67.5 321.8,71.1 325.0,75.5 328.2,80.7 331.4,86.6 334.6,93.1 337.8,100.2 340.9,107.6 344.1,115.4 347.3,123.4 350.5,131.5 353.7,139.6 356.9,147.7 360.1,155.6 363.3,163.3 366.4,170.6 369.6,177.6 372.8,184.3 376.0,190.5 379.2,196.2 382.4,201.6 385.6,206.4 388.8,210.8 391.9,214.8 395.1,218.3 398.3,221.5 401.5,224.2 404.7,226.7 407.9,228.7 411.1,230.5 414.3,232.0 417.4,233.2 420.6,234.2 423.8,235.0 427.0,235.6 430.2,236.1 433.4,236.5 436.6,236.7 439.8,237.0 442.9,237.2 446.1,237.3 449.3,237.4 452.5,237.5 455.7,237.6 458.9,237.6 462.1,237.7 465.3,237.7 468.4,237.7 471.6,237.8 474.8,237.8 478.0,237.8 481.2,237.8 484.4,237.8 487.6,237.8 490.8,237.8 493.9,237.8 497.1,237.8 500.3,237.8 503.5,237.8 506.7,237.8 509.9,237.8 513.1,237.8 516.3,237.8 519.4,237.8 522.6,237.8 525.8,237.8 529.0,237.8 532.2,237.8 535.4,237.8 538.6,237.8 541.8,237.8 544.9,237.8 548.1,237.8 551.3,237.8 554.5,237.8 557.7,237.8 560.9,237.8 564.1,237.8 567.3,237.8 570.4,237.8 573.6,237.8 576.8,237.8 580.0,237.8\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/><line x1=\"70.0\" y1=\"173.4\" x2=\"386.2\" y2=\"173.4\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><line x1=\"452.5\" y1=\"237.8\" x2=\"580.0\" y2=\"237.8\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><line x1=\"253.6\" y1=\"63.0\" x2=\"376.0\" y2=\"63.0\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><circle cx=\"312.3\" cy=\"63.0\" r=\"5\" fill=\"#e04545\"/><line x1=\"274.0\" y1=\"68.0\" x2=\"274.0\" y2=\"168.4\" stroke=\"#e04545\" stroke-width=\"1.4\"/><polygon points=\"274.0,59.0 270.0,67.5 278.0,67.5\" fill=\"#e04545\"/><polygon points=\"274.0,177.4 270.0,168.9 278.0,168.9\" fill=\"#e04545\"/><text x=\"266.0\" y=\"122.2\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">&#916;G<tspan dy=\"4\" font-size=\"10\">a</tspan></text><line x1=\"406.6\" y1=\"178.4\" x2=\"406.6\" y2=\"232.8\" stroke=\"#00a87a\" stroke-width=\"1.4\"/><polygon points=\"406.6,169.4 402.6,177.9 410.6,177.9\" fill=\"#00a87a\"/><polygon points=\"406.6,241.8 402.6,233.3 410.6,233.3\" fill=\"#00a87a\"/><text x=\"414.6\" y=\"209.6\" fill=\"#00a87a\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">&#916;G (driving force)</text><line x1=\"386.2\" y1=\"173.4\" x2=\"416.8\" y2=\"173.4\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text x=\"312.3\" y=\"51.0\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">activated state</text><text x=\"105.7\" y=\"163.4\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">initial state</text><text x=\"544.3\" y=\"227.8\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">final state</text><text x=\"60.0\" y=\"177.4\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">G<tspan dy=\"4\" font-size=\"10\">1</tspan></text><text x=\"60.0\" y=\"241.8\" fill=\"#90909c\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">G<tspan dy=\"4\" font-size=\"10\">2</tspan></text><text x=\"335.0\" y=\"296.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">progress of the transformation &#8594;</text><text x=\"28.0\" y=\"150.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" transform=\"rotate(-90 28.0 150.0)\">free energy G</text>\n</svg>\n<p style=\"text-align:center;margin-top:6px\">The driving force \\(\\Delta G\\) says the change is <strong>possible</strong>. The barrier \\(\\Delta G_a\\) decides how <strong>fast</strong> it happens.</p>\n</div>"
        },
        {
          "type": "p",
          "text": "For a transformation from an initial state to a final state, atoms must pass through a higher-energy <strong>activated state</strong>. Thermal vibration supplies the energy, and only a small fraction of atoms have enough at any instant. That fraction follows a Boltzmann factor:",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Probability of reaching the activated state",
          "eqs": [
            "p_a \\propto \\exp\\left(-\\frac{\\Delta G_a}{kT}\\right)"
          ],
          "vars": [
            {
              "symbol": "\\(\\Delta G_a\\)",
              "desc": "activation energy per atom (J)"
            },
            {
              "symbol": "\\(k\\)",
              "desc": "Boltzmann constant, \\(1.38 \\times 10^{-23}\\ \\mathrm{J\\,K^{-1}}\\)"
            },
            {
              "symbol": "\\(T\\)",
              "desc": "absolute temperature (K)"
            }
          ]
        },
        {
          "type": "p",
          "text": "The rate of transformation depends on how often atoms reach the activated state, so it carries the same exponential. This is the <strong>Arrhenius equation</strong>:",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Arrhenius rate law",
          "eqs": [
            "\\text{rate} \\propto \\exp\\left(-\\frac{\\Delta G_a}{kT}\\right) \\qquad \\text{rate} \\propto \\exp\\left(-\\frac{\\Delta H_a}{RT}\\right)"
          ],
          "vars": [
            {
              "symbol": "\\(\\Delta H_a\\)",
              "desc": "activation enthalpy per mole (J mol\\(^{-1}\\))"
            },
            {
              "symbol": "\\(R\\)",
              "desc": "universal gas constant, \\(8.314\\ \\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)"
            }
          ],
          "note": "Same law, two unit systems: per atom with \\(k\\), or per mole with \\(R\\). \\(R = N_A k\\), so the two exponents are identical numbers. Never mix them (J per atom over \\(RT\\) gives nonsense)."
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "What the exponential means in practice",
          "html": "<ul><li>The rate depends on the barrier height, <strong>not</strong> on the size of the driving force. A very favourable change can still be very slow</li><li>Because temperature sits inside an exponential, a modest rise in \\(T\\) can speed a process up by orders of magnitude (see the example in the next section)</li><li>This is why heat treatments are done hot: annealing, homogenising and ageing all rely on making diffusion fast enough to finish in hours, not centuries</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>\\(\\Delta G\\) says whether. \\(\\Delta G_a\\) and temperature say how fast.</p>"
        },
        {
          "type": "h2",
          "id": "u5-diff",
          "text": "Diffusion: the Mechanism Behind the Rate"
        },
        {
          "type": "p",
          "text": "Drop food colouring into still water and it spreads out on its own, with no stirring. Metal atoms do the same in a solid, just far more slowly. Diffusion is the most fundamental process controlling the rate of a transformation, because almost every change in microstructure needs atoms to move.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: a Cu-Ni diffusion couple flattening out over time</div>\n<svg viewBox=\"0 0 640 300\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Concentration of copper and nickel against distance across a copper-nickel diffusion couple. At time zero there is a sharp step at the joint. At later times t1, t2, t3 the profiles become progressively smoother S-shaped curves, and at equilibrium te both sit flat at 50 percent.\">\n<line x1=\"70.0\" y1=\"250.0\" x2=\"70.0\" y2=\"36.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"70.0,24.0 65.2,34.2 74.8,34.2\" fill=\"#5e5e6c\"/><line x1=\"70.0\" y1=\"250.0\" x2=\"594.0\" y2=\"250.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"606.0,250.0 595.8,245.2 595.8,254.8\" fill=\"#5e5e6c\"/><line x1=\"325.0\" y1=\"40.0\" x2=\"325.0\" y2=\"250.0\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><polyline points=\"70.0,50.0 325.0,50.0 325.0,250.0 580.0,250.0\" fill=\"none\" stroke=\"#e08000\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-dasharray=\"6 4\"/><polyline points=\"70.0,250.0 325.0,250.0 325.0,50.0 580.0,50.0\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-dasharray=\"6 4\"/><polyline points=\"70.0,50.0 73.6,50.0 77.3,50.0 80.9,50.0 84.6,50.0 88.2,50.0 91.9,50.0 95.5,50.0 99.1,50.0 102.8,50.0 106.4,50.0 110.1,50.0 113.7,50.0 117.4,50.0 121.0,50.0 124.6,50.0 128.3,50.0 131.9,50.0 135.6,50.0 139.2,50.0 142.9,50.0 146.5,50.0 150.1,50.0 153.8,50.0 157.4,50.0 161.1,50.0 164.7,50.0 168.4,50.0 172.0,50.0 175.6,50.0 179.3,50.0 182.9,50.0 186.6,50.0 190.2,50.0 193.9,50.0 197.5,50.0 201.1,50.0 204.8,50.0 208.4,50.0 212.1,50.0 215.7,50.0 219.4,50.0 223.0,50.0 226.6,50.0 230.3,50.0 233.9,50.0 237.6,50.0 241.2,50.0 244.9,50.0 248.5,50.0 252.1,50.0 255.8,50.0 259.4,50.0 263.1,50.0 266.7,50.0 270.4,50.0 274.0,50.0 277.6,50.0 281.3,50.1 284.9,50.1 288.6,50.4 292.2,50.9 295.9,52.1 299.5,54.3 303.1,58.3 306.8,64.9 310.4,74.8 314.1,88.7 317.7,106.4 321.4,127.3 325.0,150.0 328.6,172.7 332.3,193.6 335.9,211.3 339.6,225.2 343.2,235.1 346.9,241.7 350.5,245.7 354.1,247.9 357.8,249.1 361.4,249.6 365.1,249.9 368.7,249.9 372.4,250.0 376.0,250.0 379.6,250.0 383.3,250.0 386.9,250.0 390.6,250.0 394.2,250.0 397.9,250.0 401.5,250.0 405.1,250.0 408.8,250.0 412.4,250.0 416.1,250.0 419.7,250.0 423.4,250.0 427.0,250.0 430.6,250.0 434.3,250.0 437.9,250.0 441.6,250.0 445.2,250.0 448.9,250.0 452.5,250.0 456.1,250.0 459.8,250.0 463.4,250.0 467.1,250.0 470.7,250.0 474.4,250.0 478.0,250.0 481.6,250.0 485.3,250.0 488.9,250.0 492.6,250.0 496.2,250.0 499.9,250.0 503.5,250.0 507.1,250.0 510.8,250.0 514.4,250.0 518.1,250.0 521.7,250.0 525.4,250.0 529.0,250.0 532.6,250.0 536.3,250.0 539.9,250.0 543.6,250.0 547.2,250.0 550.9,250.0 554.5,250.0 558.1,250.0 561.8,250.0 565.4,250.0 569.1,250.0 572.7,250.0 576.4,250.0 580.0,250.0\" fill=\"none\" stroke=\"#e08000\" stroke-width=\"2\" stroke-linejoin=\"round\"/><polyline points=\"70.0,250.0 73.6,250.0 77.3,250.0 80.9,250.0 84.6,250.0 88.2,250.0 91.9,250.0 95.5,250.0 99.1,250.0 102.8,250.0 106.4,250.0 110.1,250.0 113.7,250.0 117.4,250.0 121.0,250.0 124.6,250.0 128.3,250.0 131.9,250.0 135.6,250.0 139.2,250.0 142.9,250.0 146.5,250.0 150.1,250.0 153.8,250.0 157.4,250.0 161.1,250.0 164.7,250.0 168.4,250.0 172.0,250.0 175.6,250.0 179.3,250.0 182.9,250.0 186.6,250.0 190.2,250.0 193.9,250.0 197.5,250.0 201.1,250.0 204.8,250.0 208.4,250.0 212.1,250.0 215.7,250.0 219.4,250.0 223.0,250.0 226.6,250.0 230.3,250.0 233.9,250.0 237.6,250.0 241.2,250.0 244.9,250.0 248.5,250.0 252.1,250.0 255.8,250.0 259.4,250.0 263.1,250.0 266.7,250.0 270.4,250.0 274.0,250.0 277.6,250.0 281.3,249.9 284.9,249.9 288.6,249.6 292.2,249.1 295.9,247.9 299.5,245.7 303.1,241.7 306.8,235.1 310.4,225.2 314.1,211.3 317.7,193.6 321.4,172.7 325.0,150.0 328.6,127.3 332.3,106.4 335.9,88.7 339.6,74.8 343.2,64.9 346.9,58.3 350.5,54.3 354.1,52.1 357.8,50.9 361.4,50.4 365.1,50.1 368.7,50.1 372.4,50.0 376.0,50.0 379.6,50.0 383.3,50.0 386.9,50.0 390.6,50.0 394.2,50.0 397.9,50.0 401.5,50.0 405.1,50.0 408.8,50.0 412.4,50.0 416.1,50.0 419.7,50.0 423.4,50.0 427.0,50.0 430.6,50.0 434.3,50.0 437.9,50.0 441.6,50.0 445.2,50.0 448.9,50.0 452.5,50.0 456.1,50.0 459.8,50.0 463.4,50.0 467.1,50.0 470.7,50.0 474.4,50.0 478.0,50.0 481.6,50.0 485.3,50.0 488.9,50.0 492.6,50.0 496.2,50.0 499.9,50.0 503.5,50.0 507.1,50.0 510.8,50.0 514.4,50.0 518.1,50.0 521.7,50.0 525.4,50.0 529.0,50.0 532.6,50.0 536.3,50.0 539.9,50.0 543.6,50.0 547.2,50.0 550.9,50.0 554.5,50.0 558.1,50.0 561.8,50.0 565.4,50.0 569.1,50.0 572.7,50.0 576.4,50.0 580.0,50.0\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2\" stroke-linejoin=\"round\"/><polyline points=\"70.0,50.0 73.6,50.0 77.3,50.0 80.9,50.0 84.6,50.0 88.2,50.0 91.9,50.0 95.5,50.0 99.1,50.0 102.8,50.0 106.4,50.0 110.1,50.0 113.7,50.0 117.4,50.0 121.0,50.0 124.6,50.0 128.3,50.0 131.9,50.0 135.6,50.0 139.2,50.0 142.9,50.0 146.5,50.0 150.1,50.0 153.8,50.0 157.4,50.0 161.1,50.0 164.7,50.0 168.4,50.0 172.0,50.0 175.6,50.0 179.3,50.0 182.9,50.0 186.6,50.0 190.2,50.0 193.9,50.0 197.5,50.0 201.1,50.0 204.8,50.0 208.4,50.0 212.1,50.1 215.7,50.1 219.4,50.1 223.0,50.2 226.6,50.2 230.3,50.4 233.9,50.5 237.6,50.7 241.2,51.0 244.9,51.4 248.5,51.8 252.1,52.5 255.8,53.3 259.4,54.3 263.1,55.6 266.7,57.3 270.4,59.2 274.0,61.6 277.6,64.5 281.3,67.8 284.9,71.7 288.6,76.2 292.2,81.2 295.9,86.9 299.5,93.2 303.1,100.1 306.8,107.5 310.4,115.3 314.1,123.6 317.7,132.2 321.4,141.1 325.0,150.0 328.6,158.9 332.3,167.8 335.9,176.4 339.6,184.7 343.2,192.5 346.9,199.9 350.5,206.8 354.1,213.1 357.8,218.8 361.4,223.8 365.1,228.3 368.7,232.2 372.4,235.5 376.0,238.4 379.6,240.8 383.3,242.7 386.9,244.4 390.6,245.7 394.2,246.7 397.9,247.5 401.5,248.2 405.1,248.6 408.8,249.0 412.4,249.3 416.1,249.5 419.7,249.6 423.4,249.8 427.0,249.8 430.6,249.9 434.3,249.9 437.9,249.9 441.6,250.0 445.2,250.0 448.9,250.0 452.5,250.0 456.1,250.0 459.8,250.0 463.4,250.0 467.1,250.0 470.7,250.0 474.4,250.0 478.0,250.0 481.6,250.0 485.3,250.0 488.9,250.0 492.6,250.0 496.2,250.0 499.9,250.0 503.5,250.0 507.1,250.0 510.8,250.0 514.4,250.0 518.1,250.0 521.7,250.0 525.4,250.0 529.0,250.0 532.6,250.0 536.3,250.0 539.9,250.0 543.6,250.0 547.2,250.0 550.9,250.0 554.5,250.0 558.1,250.0 561.8,250.0 565.4,250.0 569.1,250.0 572.7,250.0 576.4,250.0 580.0,250.0\" fill=\"none\" stroke=\"#e08000\" stroke-width=\"2\" stroke-linejoin=\"round\"/><polyline points=\"70.0,250.0 73.6,250.0 77.3,250.0 80.9,250.0 84.6,250.0 88.2,250.0 91.9,250.0 95.5,250.0 99.1,250.0 102.8,250.0 106.4,250.0 110.1,250.0 113.7,250.0 117.4,250.0 121.0,250.0 124.6,250.0 128.3,250.0 131.9,250.0 135.6,250.0 139.2,250.0 142.9,250.0 146.5,250.0 150.1,250.0 153.8,250.0 157.4,250.0 161.1,250.0 164.7,250.0 168.4,250.0 172.0,250.0 175.6,250.0 179.3,250.0 182.9,250.0 186.6,250.0 190.2,250.0 193.9,250.0 197.5,250.0 201.1,250.0 204.8,250.0 208.4,250.0 212.1,249.9 215.7,249.9 219.4,249.9 223.0,249.8 226.6,249.8 230.3,249.6 233.9,249.5 237.6,249.3 241.2,249.0 244.9,248.6 248.5,248.2 252.1,247.5 255.8,246.7 259.4,245.7 263.1,244.4 266.7,242.7 270.4,240.8 274.0,238.4 277.6,235.5 281.3,232.2 284.9,228.3 288.6,223.8 292.2,218.8 295.9,213.1 299.5,206.8 303.1,199.9 306.8,192.5 310.4,184.7 314.1,176.4 317.7,167.8 321.4,158.9 325.0,150.0 328.6,141.1 332.3,132.2 335.9,123.6 339.6,115.3 343.2,107.5 346.9,100.1 350.5,93.2 354.1,86.9 357.8,81.2 361.4,76.2 365.1,71.7 368.7,67.8 372.4,64.5 376.0,61.6 379.6,59.2 383.3,57.3 386.9,55.6 390.6,54.3 394.2,53.3 397.9,52.5 401.5,51.8 405.1,51.4 408.8,51.0 412.4,50.7 416.1,50.5 419.7,50.4 423.4,50.2 427.0,50.2 430.6,50.1 434.3,50.1 437.9,50.1 441.6,50.0 445.2,50.0 448.9,50.0 452.5,50.0 456.1,50.0 459.8,50.0 463.4,50.0 467.1,50.0 470.7,50.0 474.4,50.0 478.0,50.0 481.6,50.0 485.3,50.0 488.9,50.0 492.6,50.0 496.2,50.0 499.9,50.0 503.5,50.0 507.1,50.0 510.8,50.0 514.4,50.0 518.1,50.0 521.7,50.0 525.4,50.0 529.0,50.0 532.6,50.0 536.3,50.0 539.9,50.0 543.6,50.0 547.2,50.0 550.9,50.0 554.5,50.0 558.1,50.0 561.8,50.0 565.4,50.0 569.1,50.0 572.7,50.0 576.4,50.0 580.0,50.0\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2\" stroke-linejoin=\"round\"/><polyline points=\"70.0,50.0 73.6,50.0 77.3,50.0 80.9,50.0 84.6,50.0 88.2,50.0 91.9,50.0 95.5,50.0 99.1,50.1 102.8,50.1 106.4,50.1 110.1,50.1 113.7,50.1 117.4,50.1 121.0,50.2 124.6,50.2 128.3,50.2 131.9,50.3 135.6,50.4 139.2,50.4 142.9,50.5 146.5,50.6 150.1,50.7 153.8,50.8 157.4,51.0 161.1,51.2 164.7,51.4 168.4,51.6 172.0,51.8 175.6,52.1 179.3,52.5 182.9,52.9 186.6,53.3 190.2,53.8 193.9,54.3 197.5,55.0 201.1,55.6 204.8,56.4 208.4,57.3 212.1,58.2 215.7,59.2 219.4,60.4 223.0,61.6 226.6,63.0 230.3,64.5 233.9,66.1 237.6,67.8 241.2,69.7 244.9,71.7 248.5,73.9 252.1,76.2 255.8,78.6 259.4,81.2 263.1,84.0 266.7,86.9 270.4,90.0 274.0,93.2 277.6,96.6 281.3,100.1 284.9,103.7 288.6,107.5 292.2,111.4 295.9,115.3 299.5,119.4 303.1,123.6 306.8,127.9 310.4,132.2 314.1,136.6 317.7,141.1 321.4,145.5 325.0,150.0 328.6,154.5 332.3,158.9 335.9,163.4 339.6,167.8 343.2,172.1 346.9,176.4 350.5,180.6 354.1,184.7 357.8,188.6 361.4,192.5 365.1,196.3 368.7,199.9 372.4,203.4 376.0,206.8 379.6,210.0 383.3,213.1 386.9,216.0 390.6,218.8 394.2,221.4 397.9,223.8 401.5,226.1 405.1,228.3 408.8,230.3 412.4,232.2 416.1,233.9 419.7,235.5 423.4,237.0 427.0,238.4 430.6,239.6 434.3,240.8 437.9,241.8 441.6,242.7 445.2,243.6 448.9,244.4 452.5,245.0 456.1,245.7 459.8,246.2 463.4,246.7 467.1,247.1 470.7,247.5 474.4,247.9 478.0,248.2 481.6,248.4 485.3,248.6 488.9,248.8 492.6,249.0 496.2,249.2 499.9,249.3 503.5,249.4 507.1,249.5 510.8,249.6 514.4,249.6 518.1,249.7 521.7,249.8 525.4,249.8 529.0,249.8 532.6,249.9 536.3,249.9 539.9,249.9 543.6,249.9 547.2,249.9 550.9,249.9 554.5,250.0 558.1,250.0 561.8,250.0 565.4,250.0 569.1,250.0 572.7,250.0 576.4,250.0 580.0,250.0\" fill=\"none\" stroke=\"#e08000\" stroke-width=\"2\" stroke-linejoin=\"round\"/><polyline points=\"70.0,250.0 73.6,250.0 77.3,250.0 80.9,250.0 84.6,250.0 88.2,250.0 91.9,250.0 95.5,250.0 99.1,249.9 102.8,249.9 106.4,249.9 110.1,249.9 113.7,249.9 117.4,249.9 121.0,249.8 124.6,249.8 128.3,249.8 131.9,249.7 135.6,249.6 139.2,249.6 142.9,249.5 146.5,249.4 150.1,249.3 153.8,249.2 157.4,249.0 161.1,248.8 164.7,248.6 168.4,248.4 172.0,248.2 175.6,247.9 179.3,247.5 182.9,247.1 186.6,246.7 190.2,246.2 193.9,245.7 197.5,245.0 201.1,244.4 204.8,243.6 208.4,242.7 212.1,241.8 215.7,240.8 219.4,239.6 223.0,238.4 226.6,237.0 230.3,235.5 233.9,233.9 237.6,232.2 241.2,230.3 244.9,228.3 248.5,226.1 252.1,223.8 255.8,221.4 259.4,218.8 263.1,216.0 266.7,213.1 270.4,210.0 274.0,206.8 277.6,203.4 281.3,199.9 284.9,196.3 288.6,192.5 292.2,188.6 295.9,184.7 299.5,180.6 303.1,176.4 306.8,172.1 310.4,167.8 314.1,163.4 317.7,158.9 321.4,154.5 325.0,150.0 328.6,145.5 332.3,141.1 335.9,136.6 339.6,132.2 343.2,127.9 346.9,123.6 350.5,119.4 354.1,115.3 357.8,111.4 361.4,107.5 365.1,103.7 368.7,100.1 372.4,96.6 376.0,93.2 379.6,90.0 383.3,86.9 386.9,84.0 390.6,81.2 394.2,78.6 397.9,76.2 401.5,73.9 405.1,71.7 408.8,69.7 412.4,67.8 416.1,66.1 419.7,64.5 423.4,63.0 427.0,61.6 430.6,60.4 434.3,59.2 437.9,58.2 441.6,57.3 445.2,56.4 448.9,55.6 452.5,55.0 456.1,54.3 459.8,53.8 463.4,53.3 467.1,52.9 470.7,52.5 474.4,52.1 478.0,51.8 481.6,51.6 485.3,51.4 488.9,51.2 492.6,51.0 496.2,50.8 499.9,50.7 503.5,50.6 507.1,50.5 510.8,50.4 514.4,50.4 518.1,50.3 521.7,50.2 525.4,50.2 529.0,50.2 532.6,50.1 536.3,50.1 539.9,50.1 543.6,50.1 547.2,50.1 550.9,50.1 554.5,50.0 558.1,50.0 561.8,50.0 565.4,50.0 569.1,50.0 572.7,50.0 576.4,50.0 580.0,50.0\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"70.0\" y1=\"150.0\" x2=\"580.0\" y2=\"150.0\" stroke=\"#00a87a\" stroke-width=\"2.4\"/><text x=\"335.2\" y=\"44.0\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">t<tspan dy=\"4\" font-size=\"10\">0</tspan></text><text x=\"291.9\" y=\"118.0\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">t<tspan dy=\"4\" font-size=\"10\">1</tspan></text><text x=\"248.5\" y=\"118.0\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">t<tspan dy=\"4\" font-size=\"10\">2</tspan></text><text x=\"184.8\" y=\"118.0\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">t<tspan dy=\"4\" font-size=\"10\">3</tspan></text><text x=\"108.3\" y=\"142.0\" fill=\"#00a87a\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">t<tspan dy=\"4\" font-size=\"10\">e</tspan> (uniform)</text><text x=\"108.3\" y=\"42.0\" fill=\"#e08000\" font-size=\"14\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">Cu</text><text x=\"541.8\" y=\"42.0\" fill=\"#3b82e8\" font-size=\"14\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">Ni</text><text x=\"62.0\" y=\"54.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">100</text><text x=\"62.0\" y=\"154.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">50</text><text x=\"62.0\" y=\"254.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">0</text><text x=\"325.0\" y=\"268.0\" fill=\"#90909c\" font-size=\"11\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">original joint</text><text x=\"335.0\" y=\"290.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">distance along the couple &#8594;</text><text x=\"26.0\" y=\"140.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" transform=\"rotate(-90 26.0 140.0)\">concentration (at.%)</text>\n</svg>\n<p style=\"text-align:center;margin-top:6px\">Each curve is a snapshot. Atoms move from high to low concentration, the step smooths into an S, and diffusion stops once the bar is uniform (\\(t_e\\)).</p>\n</div>"
        },
        {
          "type": "list",
          "items": [
            "A block of Cu and a block of Ni are joined to make a <strong>diffusion couple</strong> and heated (below the solidus)",
            "Cu atoms diffuse into the Ni and Ni atoms into the Cu. The concentration profile changes with time (\\(t_0 \\to t_1 \\to t_2 \\to t_3\\))",
            "Net diffusion runs from <strong>high to low concentration</strong> (we refine this statement at the end of the unit)",
            "When the whole block is uniform, net diffusion stops: that is equilibrium (\\(t_e\\))"
          ]
        },
        {
          "type": "h2",
          "id": "u5-fick1",
          "text": "Steady State: Fick's First Law"
        },
        {
          "type": "p",
          "text": "Picture a water pipe with a fixed pressure difference across it: the flow rate settles to a constant. In <strong>steady-state</strong> diffusion the concentrations at each end are held fixed, so the flow of atoms (the <strong>flux</strong>) does not change with time and the concentration varies linearly through the material. Hydrogen leaking through a steel pressure-vessel wall, or carbon passing through a thin iron membrane between two gases, are standard examples.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Fick's first law",
          "eqs": [
            "J = -D\\,\\frac{\\partial C}{\\partial x}"
          ],
          "vars": [
            {
              "symbol": "\\(J\\)",
              "desc": "diffusion flux: quantity passing through unit area per unit time (quantity m\\(^{-2}\\) s\\(^{-1}\\))"
            },
            {
              "symbol": "\\(\\partial C/\\partial x\\)",
              "desc": "concentration gradient (quantity m\\(^{-4}\\), i.e. quantity m\\(^{-3}\\) per m)"
            },
            {
              "symbol": "\\(D\\)",
              "desc": "diffusivity, or diffusion coefficient (m\\(^2\\) s\\(^{-1}\\))"
            }
          ],
          "note": "The minus sign means atoms move <strong>down</strong> the concentration gradient, from high to low. <strong>Units check:</strong> the slide lists \\(D\\) as m\\(^{-2}\\) s\\(^{-1}\\). That is a typo: from \\(J = -D\\,\\partial C/\\partial x\\), D must be m\\(^2\\) s\\(^{-1}\\)."
        },
        {
          "type": "formulablock",
          "name": "Temperature dependence of diffusivity",
          "eqs": [
            "D = D_0 \\exp\\left(-\\frac{\\Delta H_a}{RT}\\right)"
          ],
          "vars": [
            {
              "symbol": "\\(D_0\\)",
              "desc": "pre-exponential factor (m\\(^2\\) s\\(^{-1}\\))"
            },
            {
              "symbol": "\\(\\Delta H_a\\)",
              "desc": "activation enthalpy for diffusion (J mol\\(^{-1}\\))"
            }
          ],
          "note": "Diffusion is an activated process, so \\(D\\) follows the Arrhenius law from the previous section."
        },
        {
          "type": "example",
          "label": "Try it: steady-state flux",
          "q": "A 2 mm thick plate has its two faces held at solute concentrations of 1.2 kg m\\(^{-3}\\) and 0.4 kg m\\(^{-3}\\). \\(D = 3 \\times 10^{-11}\\) m\\(^2\\) s\\(^{-1}\\). Find the steady-state flux.",
          "steps": [
            "Steady state, so the gradient is linear: \\(\\partial C/\\partial x = (0.4 - 1.2)/0.002 = -400\\) kg m\\(^{-4}\\)",
            "\\(J = -D\\,\\partial C/\\partial x = -(3 \\times 10^{-11})(-400)\\)"
          ],
          "answer": "\\(J = 1.2 \\times 10^{-8}\\) kg m\\(^{-2}\\) s\\(^{-1}\\), positive, so flowing from the 1.2 face towards the 0.4 face."
        },
        {
          "type": "example",
          "label": "Try it: how much does 200 K matter?",
          "q": "For a diffusing species \\(D_0 = 1.0 \\times 10^{-4}\\) m\\(^2\\) s\\(^{-1}\\) and \\(\\Delta H_a = 150\\) kJ mol\\(^{-1}\\). Compare \\(D\\) at 800 K and at 1000 K.",
          "steps": [
            "\\(D_{800} = 10^{-4} \\exp\\left(-\\frac{150000}{8.314 \\times 800}\\right) = 10^{-4} \\times e^{-22.55} = 1.6 \\times 10^{-14}\\) m\\(^2\\) s\\(^{-1}\\)",
            "\\(D_{1000} = 10^{-4} \\exp\\left(-\\frac{150000}{8.314 \\times 1000}\\right) = 10^{-4} \\times e^{-18.04} = 1.5 \\times 10^{-12}\\) m\\(^2\\) s\\(^{-1}\\)",
            "Ratio \\(D_{1000}/D_{800} \\approx 91\\)"
          ],
          "answer": "A 200 K rise makes diffusion about 90 times faster. A homogenising treatment that takes an hour at 1000 K would take almost four days at 800 K. Always convert to kelvin and kJ to J."
        },
        {
          "type": "h2",
          "id": "u5-fick2",
          "text": "Transient State: Fick's Second Law"
        },
        {
          "type": "p",
          "text": "Most real cases are not steady. In the diffusion couple, the concentration at any point keeps changing until the bar is uniform. This is <strong>unsteady</strong> or <strong>transient-state</strong> diffusion, and it may eventually settle into a steady state if the boundary conditions allow it.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Fick's second law",
          "eqs": [
            "\\frac{\\partial C}{\\partial t} = D\\,\\frac{\\partial^2 C}{\\partial x^2}"
          ],
          "vars": [
            {
              "symbol": "\\(C\\)",
              "desc": "concentration (quantity m\\(^{-3}\\))"
            },
            {
              "symbol": "\\(t\\)",
              "desc": "time (s)"
            },
            {
              "symbol": "\\(D\\)",
              "desc": "diffusivity (m\\(^2\\) s\\(^{-1}\\)), assumed independent of concentration"
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Reading the equation",
          "html": "<ul><li>The rate of change of concentration at a point is set by the <strong>curvature</strong> of the profile there, not its slope</li><li>Where the profile is curved like a valley (\\(\\partial^2 C/\\partial x^2 > 0\\)) concentration rises; where it is curved like a hill it falls. Sharp features smooth out first</li><li>A straight-line profile has zero curvature, so nothing changes: that is exactly the steady state of the first law</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>First law: flux from the slope, constant in time. Second law: change in time from the curvature.</p>"
        },
        {
          "type": "h2",
          "id": "u5-mech",
          "text": "Vacancy vs Interstitial Diffusion"
        },
        {
          "type": "p",
          "text": "Moving through a crowded concert is easy if you are small enough to slip through gaps, and slow if you must wait for someone to step out of a seat. Atoms have the same two options.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Vacancy diffusion",
              "color": "#d89800",
              "text": "An atom jumps into a neighbouring <strong>vacant</strong> lattice site. Needs a vacancy next door, so it depends on the vacancy concentration. <strong>Slow</strong>, especially at low temperature. Used by substitutional atoms (e.g. Cu and Ni in the couple) and by self-diffusion."
            },
            {
              "title": "Interstitial diffusion",
              "color": "#d89800",
              "text": "A small atom hops between the <strong>interstitial</strong> gaps of the lattice. Interstitial sites are almost always free, so no waiting. <strong>Faster</strong>. Used by small atoms such as C, N and H in iron."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Where the activation energy comes from",
          "html": "<p>Either way, the jumping atom must squeeze between neighbours that are forced apart to open a path. That distortion raises the Gibbs energy along the way: the hump in the energy path is the activation energy for the jump, which is why \\(D = D_0 \\exp(-\\Delta H_a/RT)\\) for both mechanisms. For vacancy diffusion the barrier is effectively higher, because a vacancy has to be present as well.</p>"
        },
        {
          "type": "h2",
          "id": "u5-why",
          "text": "What Actually Drives Diffusion"
        },
        {
          "type": "p",
          "text": "\"Atoms move from high to low concentration\" is the everyday rule, and Fick's first law is written that way. But it is a consequence, not the cause. The real driver is the same one as in every unit so far: <strong>a fall in Gibbs free energy</strong>.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Normal (downhill) diffusion",
              "color": "#d89800",
              "text": "In a solution that likes to mix, B atoms leaving a B-rich region for an A-rich region lowers the free energy of the mixture (\\(G_3 \\to G_4\\) on the slide). Here that happens to be <strong>down</strong> the concentration gradient."
            },
            {
              "title": "Uphill diffusion",
              "color": "#d89800",
              "text": "In <strong>spinodal decomposition</strong> (clustering within a solution, Unit 2), atoms move <strong>up</strong> the concentration gradient, from low to high. It sounds wrong, but clustering lowers \\(G\\) for that system, so diffusion goes that way."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "The universal statement: chemical potential",
          "html": "<ul><li>Atoms diffuse from regions of <strong>high chemical potential</strong> to regions of <strong>low chemical potential</strong></li><li>Diffusion stops when the chemical potential of each component is the <strong>same everywhere</strong>. That is the equilibrium condition from Unit 4: \\(\\mu_A^{1} = \\mu_A^{2}\\), \\(\\mu_B^{1} = \\mu_B^{2}\\), the common tangent</li><li>In a normal solution, high concentration of B means high \\(\\mu_B\\), so \"down the chemical potential gradient\" and \"down the concentration gradient\" agree. Inside a spinodal they disagree, and chemical potential wins</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Diffusion runs down the chemical potential gradient. Usually that is also down the concentration gradient, but not always.</p>"
        }
      ]
    },
    {
      "id": "u6",
      "numLabel": "Unit 6 of 10",
      "color": "#e08000",
      "title": "Solidification: Nucleation",
      "subtitle": "Every cast, welded or 3D-printed metal part starts as liquid. This unit covers the first step of freezing: why the liquid has to be cooled below its melting point before any solid appears, how big the first stable crystal must be, and how foreign surfaces and inoculants make that step easy enough to control grain size.",
      "desc": "Driving force for solidification, cooling curves, homogeneous nucleation (critical radius and energy barrier), the effect of undercooling, heterogeneous nucleation and the spherical cap, and grain refinement by inoculation.",
      "difficulty": "Medium-Hard",
      "readTime": "35 min",
      "sections": [
        {
          "type": "toc",
          "title": "In this unit",
          "items": [
            {
              "href": "#u6-why",
              "label": "Why solidification matters"
            },
            {
              "href": "#u6-drive",
              "label": "The driving force"
            },
            {
              "href": "#u6-cool",
              "label": "Reading a cooling curve"
            },
            {
              "href": "#u6-hom",
              "label": "Homogeneous nucleation"
            },
            {
              "href": "#u6-crit",
              "label": "Critical radius and energy barrier"
            },
            {
              "href": "#u6-under",
              "label": "The effect of undercooling"
            },
            {
              "href": "#u6-tn",
              "label": "When does it actually happen?"
            },
            {
              "href": "#u6-het",
              "label": "Heterogeneous nucleation"
            },
            {
              "href": "#u6-inoc",
              "label": "Grain refinement by inoculation"
            }
          ]
        },
        {
          "type": "h2",
          "id": "u6-why",
          "text": "Why Solidification Matters"
        },
        {
          "type": "p",
          "text": "A forged crankshaft and a rolled car body panel never look cast, but both began life as a cast ingot or slab. Solidification is the most important phase transformation in metal processing, because almost every metal component passes through it. The microstructure it leaves, grain size and shape above all, carries through to the finished part.",
          "class": ""
        },
        {
          "type": "p",
          "text": "Solidification is the change from liquid to solid, which for metals usually means from a <strong>non-crystalline</strong> to a <strong>crystalline</strong> structure. The exception is extremely rapid cooling, which can freeze the disordered liquid structure into a <strong>metallic glass</strong> (Unit 7 case study).",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Casting",
              "color": "#e08000",
              "text": "Ingot casting, continuous casting (slabs and billets for rolling), and shape casting (finished parts straight from the mould)."
            },
            {
              "title": "Joining and printing",
              "color": "#e08000",
              "text": "Fusion welding and metal additive manufacturing are both tiny moving castings: a melt pool that solidifies behind the heat source."
            },
            {
              "title": "Special routes",
              "color": "#e08000",
              "text": "Single crystal growth (turbine blades), and rapid solidification (fine or glassy structures)."
            }
          ]
        },
        {
          "type": "h2",
          "id": "u6-drive",
          "text": "The Driving Force for Solidification"
        },
        {
          "type": "p",
          "text": "Water at 0 &#176;C does not freeze by itself: it can sit there as liquid indefinitely. It needs to be a little colder first. Metals are the same. At the melting point solid and liquid have exactly equal free energy, so there is nothing to gain by freezing. The gain, and so the drive to freeze, only appears <strong>below</strong> \\(T_m\\).",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: why liquid metal wants to freeze below its melting point</div>\n<svg viewBox=\"0 0 640 320\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Molar free energy of solid and liquid against temperature. Both fall with temperature but the liquid curve falls more steeply, so they cross at the melting point Tm. Below Tm the solid is lower; at a temperature T below Tm the gap Delta G is the driving force for solidification, and the distance from T to Tm is the undercooling Delta T.\">\n<line x1=\"70.0\" y1=\"260.0\" x2=\"70.0\" y2=\"36.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"70.0,24.0 65.2,34.2 74.8,34.2\" fill=\"#5e5e6c\"/><line x1=\"70.0\" y1=\"260.0\" x2=\"594.0\" y2=\"260.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"606.0,260.0 595.8,255.2 595.8,264.8\" fill=\"#5e5e6c\"/><polyline points=\"85.3,90.4 90.1,91.3 94.9,92.1 99.7,92.9 104.5,93.8 109.3,94.6 114.1,95.5 118.9,96.3 123.7,97.2 128.4,98.1 133.2,98.9 138.0,99.8 142.8,100.7 147.6,101.6 152.4,102.5 157.2,103.4 162.0,104.3 166.8,105.2 171.6,106.1 176.4,107.0 181.2,108.0 186.0,108.9 190.8,109.8 195.6,110.8 200.4,111.7 205.2,112.7 209.9,113.6 214.7,114.6 219.5,115.5 224.3,116.5 229.1,117.5 233.9,118.5 238.7,119.4 243.5,120.4 248.3,121.4 253.1,122.4 257.9,123.4 262.7,124.4 267.5,125.5 272.3,126.5 277.1,127.5 281.9,128.5 286.6,129.6 291.4,130.6 296.2,131.7 301.0,132.7 305.8,133.8 310.6,134.8 315.4,135.9 320.2,137.0 325.0,138.0 329.8,139.1 334.6,140.2 339.4,141.3 344.2,142.4 349.0,143.5 353.8,144.6 358.6,145.7 363.4,146.8 368.1,148.0 372.9,149.1 377.7,150.2 382.5,151.4 387.3,152.5 392.1,153.6 396.9,154.8 401.7,156.0 406.5,157.1 411.3,158.3 416.1,159.5 420.9,160.6 425.7,161.8 430.5,163.0 435.3,164.2 440.1,165.4 444.9,166.6 449.6,167.8 454.4,169.0 459.2,170.2 464.0,171.5 468.8,172.7 473.6,173.9 478.4,175.2 483.2,176.4 488.0,177.7 492.8,178.9 497.6,180.2 502.4,181.4 507.2,182.7 512.0,184.0 516.8,185.3 521.6,186.5 526.3,187.8 531.1,189.1 535.9,190.4 540.7,191.7 545.5,193.0 550.3,194.4 555.1,195.7 559.9,197.0 564.7,198.3\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/><polyline points=\"192.4,53.5 196.1,55.3 199.8,57.0 203.6,58.7 207.3,60.5 211.0,62.3 214.7,64.0 218.5,65.8 222.2,67.6 225.9,69.4 229.6,71.2 233.4,73.0 237.1,74.8 240.8,76.6 244.5,78.4 248.2,80.3 252.0,82.1 255.7,83.9 259.4,85.8 263.1,87.6 266.9,89.5 270.6,91.3 274.3,93.2 278.0,95.1 281.8,97.0 285.5,98.9 289.2,100.7 292.9,102.6 296.6,104.6 300.4,106.5 304.1,108.4 307.8,110.3 311.5,112.2 315.3,114.2 319.0,116.1 322.7,118.1 326.4,120.0 330.2,122.0 333.9,123.9 337.6,125.9 341.3,127.9 345.0,129.9 348.8,131.9 352.5,133.9 356.2,135.9 359.9,137.9 363.7,139.9 367.4,141.9 371.1,143.9 374.8,146.0 378.6,148.0 382.3,150.1 386.0,152.1 389.7,154.2 393.4,156.2 397.2,158.3 400.9,160.4 404.6,162.5 408.3,164.6 412.1,166.7 415.8,168.8 419.5,170.9 423.2,173.0 426.9,175.1 430.7,177.2 434.4,179.4 438.1,181.5 441.8,183.6 445.6,185.8 449.3,187.9 453.0,190.1 456.7,192.3 460.5,194.4 464.2,196.6 467.9,198.8 471.6,201.0 475.3,203.2 479.1,205.4 482.8,207.6 486.5,209.8 490.2,212.1 494.0,214.3 497.7,216.5 501.4,218.8 505.1,221.0 508.9,223.3 512.6,225.5 516.3,227.8 520.0,230.1 523.7,232.4 527.5,234.6 531.2,236.9 534.9,239.2 538.6,241.5 542.4,243.8 546.1,246.2 549.8,248.5 553.5,250.8 557.3,253.1 561.0,255.5 564.7,257.8\" fill=\"none\" stroke=\"#e08000\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/><text x=\"95.5\" y=\"114.2\" fill=\"#3b82e8\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">G<tspan dy=\"4\" font-size=\"10\">S</tspan> (solid)</text><text x=\"207.7\" y=\"64.7\" fill=\"#e08000\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">G<tspan dy=\"4\" font-size=\"10\">L</tspan> (liquid)</text><line x1=\"386.2\" y1=\"152.2\" x2=\"386.2\" y2=\"260.0\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text x=\"386.2\" y=\"278.0\" fill=\"#a0a0ac\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">T<tspan dy=\"4\" font-size=\"10\">m</tspan></text><line x1=\"284.2\" y1=\"92.2\" x2=\"284.2\" y2=\"260.0\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text x=\"284.2\" y=\"278.0\" fill=\"#a0a0ac\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">T</text><circle cx=\"386.2\" cy=\"152.2\" r=\"4.5\" fill=\"#e04545\"/><line x1=\"270.2\" y1=\"103.2\" x2=\"270.2\" y2=\"124.0\" stroke=\"#e04545\" stroke-width=\"1.4\"/><polygon points=\"270.2,94.2 266.2,102.7 274.2,102.7\" fill=\"#e04545\"/><polygon points=\"270.2,133.0 266.2,124.5 274.2,124.5\" fill=\"#e04545\"/><text x=\"262.2\" y=\"117.6\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">&#916;G</text><line x1=\"284.2\" y1=\"226.0\" x2=\"386.2\" y2=\"226.0\" stroke=\"#00a87a\" stroke-width=\"1.4\"/><polygon points=\"280.2,226.0 288.7,222.0 288.7,230.0\" fill=\"#00a87a\"/><polygon points=\"390.2,226.0 381.7,222.0 381.7,230.0\" fill=\"#00a87a\"/><text x=\"335.2\" y=\"220.0\" fill=\"#00a87a\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">&#916;T</text><text x=\"146.5\" y=\"248.0\" fill=\"#3b82e8\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#8592; solid stable</text><text x=\"508.6\" y=\"50.0\" fill=\"#e08000\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">liquid stable &#8594;</text><text x=\"335.0\" y=\"302.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">temperature &#8594;</text><text x=\"28.0\" y=\"145.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" transform=\"rotate(-90 28.0 145.0)\">molar free energy</text>\n</svg>\n<p style=\"text-align:center;margin-top:6px\">The liquid curve is steeper because the liquid has more entropy (slope \\(= -S\\)). The further below \\(T_m\\), the bigger the gap \\(\\Delta G\\).</p>\n</div>"
        },
        {
          "type": "p",
          "text": "Stability is the familiar trade-off between enthalpy and entropy (\\(G = H - TS\\)). The solid has lower enthalpy, the liquid higher entropy. Above \\(T_m\\) entropy wins and the liquid is stable; below \\(T_m\\) enthalpy wins and the solid is stable. The temperature gap \\(\\Delta T = T_m - T\\) is the <strong>undercooling</strong> (or supercooling), and it is the key parameter for everything in this unit.",
          "class": ""
        },
        {
          "type": "example",
          "label": "Derivation: the driving force in measurable terms",
          "q": "Show that the free energy change on solidification at an undercooling \\(\\Delta T\\) is \\(\\Delta G \\approx -L\\Delta T/T_m\\). (The slide refers you to the pre-recorded lecture for this; it is reproduced from the lecture notes.)",
          "steps": [
            "At temperature \\(T\\): \\(\\Delta G = G_S - G_L = \\Delta H - T\\Delta S\\)",
            "At \\(T_m\\) the phases are in equilibrium, so \\(\\Delta G = \\Delta H - T_m\\Delta S = 0\\), giving \\(\\Delta S = \\Delta H / T_m\\)",
            "On freezing, heat is released: \\(\\Delta H = -L\\), where \\(L\\) is the latent heat of fusion. So \\(\\Delta S = -L/T_m\\)",
            "For small undercooling, \\(\\Delta H\\) and \\(\\Delta S\\) barely change with temperature, so substitute: \\(\\Delta G \\approx -L + T\\dfrac{L}{T_m} = -L\\dfrac{T_m - T}{T_m}\\)"
          ],
          "answer": "\\(\\Delta G \\approx -\\dfrac{L\\Delta T}{T_m}\\) per mole. Every term is experimentally measurable. Per unit volume (more useful for nucleation) use the volumetric latent heat: \\(\\Delta G_V = -\\dfrac{L_V\\Delta T}{T_m}\\)."
        },
        {
          "type": "formulablock",
          "name": "Driving force for solidification",
          "eqs": [
            "\\Delta G_V = G_V^S - G_V^L \\approx -\\frac{L_V\\,\\Delta T}{T_m}"
          ],
          "vars": [
            {
              "symbol": "\\(\\Delta G_V\\)",
              "desc": "free energy change per unit volume (J m\\(^{-3}\\)), negative below \\(T_m\\)"
            },
            {
              "symbol": "\\(L_V\\)",
              "desc": "latent heat of fusion per unit volume (J m\\(^{-3}\\))"
            },
            {
              "symbol": "\\(\\Delta T\\)",
              "desc": "undercooling, \\(T_m - T\\) (K)"
            }
          ],
          "note": "The driving force grows linearly with undercooling. Double the undercooling, double the drive."
        },
        {
          "type": "h2",
          "id": "u6-cool",
          "text": "Reading a Cooling Curve"
        },
        {
          "type": "p",
          "text": "A thermocouple in a cooling melt is the simplest experiment in solidification: plot temperature against time and the curve tells the whole story.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: cooling curves for homogeneous and heterogeneous nucleation (schematic)</div>\n<svg viewBox=\"0 0 640 300\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Temperature against time for a cooling melt. The liquid cools below the melting point, dips to a minimum where nucleation happens, then jumps back up towards the melting point as latent heat is released, holds on a plateau during growth, and finally cools again once fully solid. A homogeneous curve dips far below Tm; a heterogeneous curve dips only slightly.\">\n<line x1=\"70.0\" y1=\"250.0\" x2=\"70.0\" y2=\"32.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"70.0,20.0 65.2,30.2 74.8,30.2\" fill=\"#5e5e6c\"/><line x1=\"70.0\" y1=\"250.0\" x2=\"594.0\" y2=\"250.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"606.0,250.0 595.8,245.2 595.8,254.8\" fill=\"#5e5e6c\"/><line x1=\"70.0\" y1=\"132.3\" x2=\"570.0\" y2=\"132.3\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text x=\"62.0\" y=\"136.3\" fill=\"#a0a0ac\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">T<tspan dy=\"4\" font-size=\"10\">m</tspan></text><polyline points=\"70.0,46.7 72.6,49.4 75.1,52.1 77.7,54.7 80.2,57.4 82.8,60.1 85.3,62.8 87.9,65.4 90.4,68.1 93.0,70.8 95.5,73.5 98.1,76.1 100.6,78.8 103.2,81.5 105.7,84.2 108.3,86.8 110.8,89.5 113.4,92.2 115.9,94.9 118.5,97.5 121.0,100.2 123.6,102.9 126.1,105.6 128.7,108.2 131.2,110.9 133.8,113.6 136.3,116.3 138.9,118.9 141.4,121.6 144.0,124.3 146.5,127.0 149.1,129.6 151.6,132.3 154.2,135.0 156.7,137.7 159.3,140.3 161.8,143.0 164.4,145.7 166.9,148.4 169.5,151.0 172.0,153.7 174.6,156.4 177.1,159.1 179.6,161.7 182.2,164.4 184.8,167.1 187.3,169.8 189.9,172.4 192.4,175.1 195.0,177.8 197.5,180.5 200.1,183.1 202.6,185.8 205.2,188.5 207.7,191.2 210.3,193.8 212.8,196.5 215.4,199.2 217.9,201.9 220.5,204.5 223.0,207.2 225.6,209.9 228.1,212.6 230.7,215.2 233.2,217.9 235.8,204.9 238.3,192.2 240.9,180.2 243.4,169.1 246.0,159.2 248.5,150.7 251.1,143.9 253.6,138.9 256.2,135.9 258.7,135.0 261.3,135.0 263.8,135.0 266.4,135.0 268.9,135.0 271.5,135.0 274.0,135.0 276.6,135.0 279.1,135.0 281.7,135.0 284.2,135.0 286.8,135.0 289.3,135.1 291.9,135.1 294.4,135.1 297.0,135.1 299.5,135.1 302.1,135.1 304.6,135.1 307.2,135.1 309.7,135.1 312.3,135.1 314.8,135.1 317.4,135.2 319.9,135.2 322.5,135.2 325.0,135.2 327.6,135.2 330.1,135.2 332.7,135.2 335.2,135.2 337.8,135.2 340.3,135.2 342.9,135.2 345.4,135.2 348.0,135.3 350.5,135.3 353.1,135.3 355.6,135.3 358.2,135.3 360.7,135.3 363.3,135.3 365.8,135.3 368.3,135.3 370.9,135.3 373.5,135.3 376.0,135.3 378.6,135.4 381.1,135.4 383.7,135.4 386.2,135.4 388.8,135.4 391.3,135.4 393.9,135.4 396.4,135.4 399.0,135.4 401.5,135.4 404.1,135.4 406.6,135.5 409.2,135.5 411.7,135.5 414.3,135.5 416.8,135.5 419.4,135.5 421.9,135.5 424.5,135.5 427.0,135.5 429.6,135.5 432.1,135.5 434.7,135.5 437.2,135.6 439.8,135.6 442.3,135.6 444.9,135.6 447.4,135.6 450.0,135.6 452.5,135.6 455.1,135.6 457.6,135.6 460.2,135.6 462.7,135.6 465.3,135.6 467.8,136.2 470.4,137.9 472.9,139.6 475.5,141.3 478.0,143.0 480.6,144.7 483.1,146.4 485.7,148.1 488.2,149.8 490.8,151.6 493.3,153.3 495.9,155.0 498.4,156.7 501.0,158.4 503.5,160.1 506.1,161.8 508.6,163.5 511.2,165.3 513.7,167.0 516.3,168.7 518.8,170.4 521.4,172.1 523.9,173.8 526.5,175.5 529.0,177.2 531.6,179.0 534.1,180.7 536.7,182.4 539.2,184.1 541.8,185.8 544.3,187.5 546.9,189.2 549.4,190.9 552.0,192.6 554.5,194.4 557.1,196.1 559.6,197.8 562.2,199.5 564.7,201.2 567.3,202.9 569.8,204.6 572.3,206.3 574.9,208.1 577.5,209.8 580.0,211.5\" fill=\"none\" stroke=\"#e04545\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><text x=\"233.2\" y=\"235.9\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\"></text><polyline points=\"70.0,46.7 72.6,49.2 75.1,51.6 77.7,54.1 80.2,56.6 82.8,59.0 85.3,61.5 87.9,64.0 90.4,66.5 93.0,68.9 95.5,71.4 98.1,73.9 100.6,76.3 103.2,78.8 105.7,81.3 108.3,83.7 110.8,86.2 113.4,88.7 115.9,91.1 118.5,93.6 121.0,96.1 123.6,98.6 126.1,101.0 128.7,103.5 131.2,106.0 133.8,108.4 136.3,110.9 138.9,113.4 141.4,115.8 144.0,118.3 146.5,120.8 149.1,123.2 151.6,125.7 154.2,128.2 156.7,130.7 159.3,133.1 161.8,135.6 164.4,138.1 166.9,140.5 169.5,143.0 172.0,145.5 174.6,147.9 177.1,148.4 179.6,145.8 182.2,143.3 184.8,141.0 187.3,138.8 189.9,137.0 192.4,135.4 195.0,134.2 197.5,133.3 200.1,132.9 202.6,132.9 205.2,132.9 207.7,132.9 210.3,132.9 212.8,132.9 215.4,132.9 217.9,133.0 220.5,133.0 223.0,133.0 225.6,133.0 228.1,133.0 230.7,133.0 233.2,133.0 235.8,133.0 238.3,133.0 240.9,133.0 243.4,133.0 246.0,133.0 248.5,133.1 251.1,133.1 253.6,133.1 256.2,133.1 258.7,133.1 261.3,133.1 263.8,133.1 266.4,133.1 268.9,133.1 271.5,133.1 274.0,133.1 276.6,133.2 279.1,133.2 281.7,133.2 284.2,133.2 286.8,133.2 289.3,133.2 291.9,133.2 294.4,133.2 297.0,133.2 299.5,133.2 302.1,133.2 304.6,133.2 307.2,133.3 309.7,133.3 312.3,133.3 314.8,133.3 317.4,133.3 319.9,133.3 322.5,133.3 325.0,133.3 327.6,133.3 330.1,133.3 332.7,133.3 335.2,133.3 337.8,133.4 340.3,133.4 342.9,133.4 345.4,133.4 348.0,133.4 350.5,133.4 353.1,133.4 355.6,133.4 358.2,133.4 360.7,133.4 363.3,133.4 365.8,133.5 368.3,133.5 370.9,133.5 373.5,133.5 376.0,133.5 378.6,133.5 381.1,133.5 383.7,133.5 386.2,133.5 388.8,133.5 391.3,133.5 393.9,133.5 396.4,133.6 399.0,133.6 401.5,133.6 404.1,133.6 406.6,133.6 409.2,133.6 411.7,133.6 414.3,133.6 416.8,133.6 419.4,133.6 421.9,133.6 424.5,133.6 427.0,133.7 429.6,133.7 432.1,133.7 434.7,133.7 437.2,133.7 439.8,133.7 442.3,133.7 444.9,133.7 447.4,133.7 450.0,133.7 452.5,133.7 455.1,133.8 457.6,133.8 460.2,133.8 462.7,133.8 465.3,133.8 467.8,134.1 470.4,135.8 472.9,137.5 475.5,139.2 478.0,140.9 480.6,142.7 483.1,144.4 485.7,146.1 488.2,147.8 490.8,149.5 493.3,151.2 495.9,152.9 498.4,154.6 501.0,156.4 503.5,158.1 506.1,159.8 508.6,161.5 511.2,163.2 513.7,164.9 516.3,166.6 518.8,168.3 521.4,170.0 523.9,171.8 526.5,173.5 529.0,175.2 531.6,176.9 534.1,178.6 536.7,180.3 539.2,182.0 541.8,183.7 544.3,185.5 546.9,187.2 549.4,188.9 552.0,190.6 554.5,192.3 557.1,194.0 559.6,195.7 562.2,197.4 564.7,199.2 567.3,200.9 569.8,202.6 572.3,204.3 574.9,206.0 577.5,207.7 580.0,209.4\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><text x=\"176.1\" y=\"167.4\" fill=\"#3b82e8\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\"></text><line x1=\"386.2\" y1=\"40.0\" x2=\"411.7\" y2=\"40.0\" stroke=\"#e04545\" stroke-width=\"2.2\"/><text x=\"421.9\" y=\"44.0\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">homogeneous: dips ~0.2T<tspan dy=\"4\" font-size=\"9\">m</tspan></text><line x1=\"386.2\" y1=\"60.0\" x2=\"411.7\" y2=\"60.0\" stroke=\"#3b82e8\" stroke-width=\"2.2\"/><text x=\"421.9\" y=\"64.0\" fill=\"#3b82e8\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">heterogeneous: dips a few K</text><text x=\"325.0\" y=\"122.3\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">plateau: growth at ~T<tspan dy=\"4\" font-size=\"9\">m</tspan></text><text x=\"508.6\" y=\"196.5\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">all solid,</text><text x=\"508.6\" y=\"211.5\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">cools again</text><text x=\"268.9\" y=\"183.7\" fill=\"#e08000\" font-size=\"11\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">recalescence: latent heat</text><text x=\"268.9\" y=\"197.7\" fill=\"#e08000\" font-size=\"11\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">warms the melt back up</text><text x=\"335.0\" y=\"276.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">time &#8594;</text><text x=\"28.0\" y=\"138.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" transform=\"rotate(-90 28.0 138.0)\">temperature</text>\n</svg>\n<p style=\"text-align:center;margin-top:6px\">The minimum is where nucleation happens. After it, latent heat lifts the melt back towards \\(T_m\\) and no new crystals form: the rest is growth.</p>\n</div>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Reading the curve, left to right",
          "html": "<ul><li><strong>Liquid cools below \\(T_m\\).</strong> Nothing happens at \\(T_m\\): no solid can form yet</li><li><strong>Minimum temperature = nucleation.</strong> Lots of solid crystals suddenly appear. The depth of this dip is the <strong>nucleation undercooling</strong> \\(\\Delta T_N\\)</li><li><strong>Temperature jumps back up</strong> (recalescence). The latent heat released by all those new crystals warms the melt. No new crystals can form, so nucleation stops</li><li><strong>Plateau near \\(T_m\\) = growth.</strong> The liquid turns to solid by growth of crystals that already exist</li><li><strong>Final drop:</strong> all liquid is gone, so fast cooling resumes</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Solidification is a two-stage process: <strong>nucleation</strong> (the dip) then <strong>growth</strong> (the plateau). Unit 6 is the dip, Unit 7 the plateau.</p>"
        },
        {
          "type": "h2",
          "id": "u6-hom",
          "text": "Homogeneous Nucleation"
        },
        {
          "type": "p",
          "text": "Blowing a soap bubble is hardest at the very start: when it is tiny, almost all your effort goes into stretching the surface. Once it is big enough, it grows easily. A solid crystal forming in a liquid has the same problem.",
          "class": ""
        },
        {
          "type": "p",
          "text": "<strong>Homogeneous nucleation</strong> means solid crystals forming evenly through the whole volume of liquid, with <strong>no preferred sites</strong>. It needs a large undercooling and a very clean melt. Consider a spherical cluster of solid of radius \\(r\\). Two things happen when it forms:",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Volume free energy (negative)",
              "color": "#e08000",
              "text": "Liquid becomes solid, which has lower free energy below \\(T_m\\). Saving \\(= V_S\\,\\Delta G_V = \\tfrac{4}{3}\\pi r^3 \\Delta G_V\\). Grows as \\(r^3\\)."
            },
            {
              "title": "Surface free energy (positive)",
              "color": "#e08000",
              "text": "A new solid-liquid interface is created. Interface atoms have fewer solid neighbours: broken bonds, higher enthalpy. Cost \\(= A_{SL}\\,\\gamma_{SL} = 4\\pi r^2 \\gamma_{SL}\\). Grows as \\(r^2\\)."
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Free energy of a spherical cluster",
          "eqs": [
            "\\Delta G_r = V_S\\,\\Delta G_V + A_{SL}\\,\\gamma_{SL} = \\tfrac{4}{3}\\pi r^3\\,\\Delta G_V + 4\\pi r^2\\,\\gamma_{SL}"
          ],
          "vars": [
            {
              "symbol": "\\(\\gamma_{SL}\\)",
              "desc": "solid-liquid interfacial energy per unit area (J m\\(^{-2}\\)), positive, assumed isotropic"
            },
            {
              "symbol": "\\(\\Delta G_V\\)",
              "desc": "driving force per unit volume, negative"
            }
          ]
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: free energy of a spherical solid cluster against its radius</div>\n<svg viewBox=\"0 0 640 340\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Free energy change against radius for a spherical solid forming in liquid. The surface term rises as r squared, the volume term falls as r cubed, and their sum rises to a maximum Delta G star at the critical radius r star before falling. Clusters smaller than r star shrink, larger ones grow.\">\n<line x1=\"70.0\" y1=\"300.0\" x2=\"70.0\" y2=\"32.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"70.0,20.0 65.2,30.2 74.8,30.2\" fill=\"#5e5e6c\"/><line x1=\"70.0\" y1=\"150.0\" x2=\"594.0\" y2=\"150.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"606.0,150.0 595.8,145.2 595.8,154.8\" fill=\"#5e5e6c\"/><polyline points=\"70.0,150.0 75.9,149.9 81.8,149.6 87.7,149.1 93.5,148.5 99.4,147.6 105.3,146.6 111.2,145.4 117.1,144.0 123.0,142.3 128.8,140.6 134.7,138.6 140.6,136.4 146.5,134.0 152.4,131.5 158.3,128.7 164.2,125.8 170.0,122.7 175.9,119.4 181.8,115.9 187.7,112.2 193.6,108.3 199.5,104.3 205.3,100.0 211.2,95.6 217.1,90.9 223.0,86.1 228.9,81.1 234.8,75.9 240.7,70.5 246.5,64.9 252.4,59.2 258.3,53.2 264.2,47.1 270.1,40.8 276.0,34.2 281.8,27.5\" fill=\"none\" stroke=\"#8855f5\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-dasharray=\"7 5\"/><polyline points=\"70.0,150.0 76.4,150.0 82.8,150.0 89.1,150.1 95.5,150.2 101.9,150.3 108.3,150.5 114.6,150.8 121.0,151.2 127.4,151.8 133.8,152.4 140.1,153.2 146.5,154.2 152.9,155.3 159.3,156.6 165.6,158.1 172.0,159.8 178.4,161.8 184.8,164.0 191.1,166.5 197.5,169.2 203.9,172.3 210.3,175.6 216.6,179.2 223.0,183.2 229.4,187.5 235.8,192.2 242.1,197.3 248.5,202.7 254.9,208.6 261.3,214.9 267.6,221.6 274.0,228.7 280.4,236.4 286.8,244.4 293.1,253.0 299.5,262.1 305.9,271.7 312.3,281.9 318.6,292.5\" fill=\"none\" stroke=\"#00a87a\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-dasharray=\"7 5\"/><polyline points=\"70.0,150.0 73.5,150.0 77.0,149.9 80.5,149.7 84.1,149.5 87.6,149.2 91.1,148.9 94.6,148.5 98.1,148.0 101.6,147.6 105.1,147.0 108.7,146.5 112.2,145.8 115.7,145.2 119.2,144.5 122.7,143.8 126.2,143.0 129.7,142.2 133.3,141.4 136.8,140.6 140.3,139.7 143.8,138.9 147.3,138.0 150.8,137.1 154.3,136.2 157.9,135.2 161.4,134.3 164.9,133.4 168.4,132.4 171.9,131.5 175.4,130.5 178.9,129.6 182.5,128.7 186.0,127.8 189.5,126.9 193.0,126.0 196.5,125.1 200.0,124.2 203.5,123.4 207.1,122.6 210.6,121.8 214.1,121.1 217.6,120.4 221.1,119.7 224.6,119.0 228.1,118.4 231.7,117.9 235.2,117.3 238.7,116.9 242.2,116.4 245.7,116.1 249.2,115.7 252.8,115.5 256.3,115.3 259.8,115.1 263.3,115.0 266.8,115.0 270.3,115.0 273.8,115.2 277.4,115.4 280.9,115.6 284.4,116.0 287.9,116.4 291.4,116.9 294.9,117.5 298.4,118.2 302.0,118.9 305.5,119.8 309.0,120.7 312.5,121.8 316.0,122.9 319.5,124.2 323.0,125.5 326.6,127.0 330.1,128.6 333.6,130.3 337.1,132.0 340.6,134.0 344.1,136.0 347.6,138.1 351.2,140.4 354.7,142.8 358.2,145.3 361.7,148.0 365.2,150.8 368.7,153.7 372.2,156.8 375.8,160.0 379.3,163.3 382.8,166.8 386.3,170.5 389.8,174.3 393.3,178.2 396.8,182.3 400.4,186.6 403.9,191.0 407.4,195.6 410.9,200.3 414.4,205.2 417.9,210.3 421.4,215.5 425.0,221.0 428.5,226.6 432.0,232.3 435.5,238.3 439.0,244.4 442.5,250.8 446.0,257.3 449.6,264.0 453.1,270.9 456.6,278.0 460.1,285.3 463.6,292.8\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/><line x1=\"266.2\" y1=\"115.0\" x2=\"266.2\" y2=\"150.0\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><line x1=\"70.0\" y1=\"115.0\" x2=\"266.2\" y2=\"115.0\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><circle cx=\"266.2\" cy=\"115.0\" r=\"5\" fill=\"#e04545\"/><text x=\"266.2\" y=\"168.0\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">r*</text><text x=\"62.0\" y=\"119.0\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">&#916;G*</text><text x=\"262.2\" y=\"42.0\" fill=\"#8855f5\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">surface: +4&#960;r&#178;&#947;<tspan dy=\"4\" font-size=\"10\">SL</tspan></text><text x=\"289.7\" y=\"292.0\" fill=\"#00a87a\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">volume: (4/3)&#960;r&#179;&#916;G<tspan dy=\"4\" font-size=\"10\">V</tspan></text><text x=\"434.8\" y=\"207.6\" fill=\"#3b82e8\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">total &#916;G<tspan dy=\"4\" font-size=\"10\">r</tspan></text><text x=\"158.3\" y=\"186.0\" fill=\"#e08000\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">embryos shrink</text><text x=\"374.0\" y=\"98.0\" fill=\"#00a87a\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">nuclei grow</text><line x1=\"217.1\" y1=\"181.0\" x2=\"109.2\" y2=\"181.0\" stroke=\"#e08000\" stroke-width=\"1.2\"/><polygon points=\"104.2,181.0 112.7,177.0 112.7,185.0\" fill=\"#e08000\"/><text x=\"62.0\" y=\"154.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">0</text><text x=\"570.2\" y=\"168.0\" fill=\"#a0a0ac\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-style=\"italic\">r</text><text x=\"26.0\" y=\"163.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" transform=\"rotate(-90 26.0 163.0)\">free energy change</text>\n</svg>\n<p style=\"text-align:center;margin-top:6px\">Small clusters are mostly surface, so they cost energy. Past \\(r^*\\) the volume term wins and adding atoms lowers \\(G\\).</p>\n</div>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Embryo or nucleus?",
          "html": "<ul><li>For small \\(r\\) the \\(r^2\\) surface term dominates, so adding atoms <em>raises</em> \\(G\\). These clusters are <strong>embryos</strong>: unstable, they dissolve back into the liquid</li><li>For large \\(r\\) the \\(r^3\\) volume term dominates, so adding atoms <em>lowers</em> \\(G\\). These are <strong>nuclei</strong>: stable, they keep growing</li><li>The crossover is the maximum of the curve: the <strong>critical nucleus size</strong> \\(r^*\\), with height \\(\\Delta G^*\\), the <strong>free energy barrier to nucleation</strong> (its activation energy, in Unit 5 terms)</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>A crystal must pay for its surface before it can profit from its volume. \\(r^*\\) is the break-even size.</p>"
        },
        {
          "type": "h2",
          "id": "u6-crit",
          "text": "Critical Radius and Energy Barrier"
        },
        {
          "type": "example",
          "label": "Derivation: r* and ΔG*",
          "q": "Find the critical radius and the energy barrier from \\(\\Delta G_r = \\tfrac{4}{3}\\pi r^3 \\Delta G_V + 4\\pi r^2 \\gamma_{SL}\\). (Again the slide points to the pre-recorded lecture; this follows the lecture notes.)",
          "steps": [
            "Differentiate: \\(\\dfrac{\\partial \\Delta G_r}{\\partial r} = 4\\pi r^2 \\Delta G_V + 8\\pi r \\gamma_{SL}\\)",
            "At the maximum this is zero: \\(4\\pi r^2 \\Delta G_V = -8\\pi r\\gamma_{SL}\\), so \\(r^* = -\\dfrac{2\\gamma_{SL}}{\\Delta G_V}\\) (positive, because \\(\\Delta G_V < 0\\))",
            "Substitute back: \\(\\Delta G^* = \\tfrac{4}{3}\\pi \\dfrac{-8\\gamma_{SL}^3}{\\Delta G_V^3}\\Delta G_V + 4\\pi\\dfrac{4\\gamma_{SL}^2}{\\Delta G_V^2}\\gamma_{SL} = \\dfrac{16\\pi\\gamma_{SL}^3}{\\Delta G_V^2}\\left(1 - \\tfrac{2}{3}\\right)\\)",
            "Now replace \\(\\Delta G_V\\) with \\(-L_V\\Delta T/T_m\\) to get both in measurable terms"
          ],
          "answer": "\\(r^* = -\\dfrac{2\\gamma_{SL}}{\\Delta G_V} = \\left(\\dfrac{2\\gamma_{SL}T_m}{L_V}\\right)\\dfrac{1}{\\Delta T}\\) and \\(\\Delta G^* = \\dfrac{16\\pi\\gamma_{SL}^3}{3(\\Delta G_V)^2} = \\left(\\dfrac{16\\pi\\gamma_{SL}^3 T_m^2}{3L_V^2}\\right)\\dfrac{1}{(\\Delta T)^2}\\)"
        },
        {
          "type": "formulablock",
          "name": "Critical nucleus size",
          "eqs": [
            "r^* = -\\frac{2\\gamma_{SL}}{\\Delta G_V} = \\left(\\frac{2\\gamma_{SL}T_m}{L_V}\\right)\\frac{1}{\\Delta T}"
          ],
          "vars": [
            {
              "symbol": "Scaling",
              "desc": "\\(r^* \\propto 1/\\Delta T\\)"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Free energy barrier to nucleation",
          "eqs": [
            "\\Delta G^* = \\frac{16\\pi\\gamma_{SL}^3}{3(\\Delta G_V)^2} = \\left(\\frac{16\\pi\\gamma_{SL}^3T_m^2}{3L_V^2}\\right)\\frac{1}{(\\Delta T)^2}"
          ],
          "vars": [
            {
              "symbol": "Scaling",
              "desc": "\\(\\Delta G^* \\propto 1/(\\Delta T)^2\\)"
            }
          ],
          "note": "The \\(\\gamma_{SL}^3\\) is why the interfacial energy dominates everything: a small cut in \\(\\gamma\\) cuts the barrier a lot. Heterogeneous nucleation exploits exactly this."
        },
        {
          "type": "raw",
          "html": "<div class=\"solw learn-only\" data-w=\"nuc\"></div>"
        },
        {
          "type": "example",
          "label": "Try it: how small is a critical nucleus?",
          "q": "Pure copper: \\(T_m = 1356\\) K, \\(\\gamma_{SL} = 0.177\\) J m\\(^{-2}\\), \\(L_V = 1.88 \\times 10^{9}\\) J m\\(^{-3}\\), atomic volume \\(1.18 \\times 10^{-29}\\) m\\(^3\\). Find \\(r^*\\), \\(\\Delta G^*\\) and the number of atoms in the nucleus at \\(\\Delta T = 236\\) K. (Property values are standard textbook data, not from the slides; 236 K is the lecture's measured maximum for Cu.)",
          "steps": [
            "\\(\\Delta G_V = -\\dfrac{1.88 \\times 10^{9} \\times 236}{1356} = -3.27 \\times 10^{8}\\) J m\\(^{-3}\\)",
            "\\(r^* = \\dfrac{2 \\times 0.177}{3.27 \\times 10^{8}} = 1.08 \\times 10^{-9}\\) m \\(\\approx 1.1\\) nm",
            "\\(\\Delta G^* = \\dfrac{16\\pi (0.177)^3}{3(3.27 \\times 10^{8})^2} = 8.7 \\times 10^{-19}\\) J",
            "Atoms: \\(\\tfrac{4}{3}\\pi (1.08 \\times 10^{-9})^3 / 1.18 \\times 10^{-29} \\approx 450\\)"
          ],
          "answer": "The critical nucleus is about 1 nm across and holds roughly 450 atoms. The barrier is about 56 times the thermal energy \\(kT\\) at 1120 K, which is just low enough for nucleation to start. That is why homogeneous nucleation in Cu only happens around this undercooling."
        },
        {
          "type": "h2",
          "id": "u6-under",
          "text": "The Effect of Undercooling"
        },
        {
          "type": "p",
          "text": "Cool further and the volume term (\\(\\propto \\Delta T\\)) gets stronger while the surface cost stays the same. The whole \\(\\Delta G_r\\) curve sinks and its peak moves left.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "As undercooling increases",
          "html": "<ul><li>The <strong>critical nucleus size</strong> \\(r^*\\) falls (\\(\\propto 1/\\Delta T\\))</li><li>The <strong>energy barrier</strong> \\(\\Delta G^*\\) falls faster (\\(\\propto 1/\\Delta T^2\\))</li><li>So nucleation becomes easier the colder the liquid. More undercooling means more driving force</li></ul>"
        },
        {
          "type": "example",
          "label": "Try it: scaling without numbers",
          "q": "A melt nucleates at an undercooling \\(\\Delta T_1\\). If the undercooling were three times larger, what would happen to \\(r^*\\) and \\(\\Delta G^*\\)?",
          "steps": [
            "\\(r^* \\propto 1/\\Delta T\\): three times the undercooling gives \\(r^*/3\\)",
            "\\(\\Delta G^* \\propto 1/\\Delta T^2\\): three times the undercooling gives \\(\\Delta G^*/9\\)"
          ],
          "answer": "The critical radius drops to a third, the barrier to a ninth. Exam questions love this: square the factor for \\(\\Delta G^*\\), do not just divide."
        },
        {
          "type": "h2",
          "id": "u6-tn",
          "text": "When Does Homogeneous Nucleation Actually Happen?"
        },
        {
          "type": "p",
          "text": "If more undercooling always makes nucleation easier, why does it happen at one particular temperature rather than gradually? The answer is in the structure of the liquid.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Clusters in the liquid",
          "html": "<ul><li>A liquid metal is not completely random. Tiny clusters with a solid-like arrangement (short-range order) constantly form and dissolve</li><li>The size of the largest cluster, \\(r_{max}\\), grows as the liquid gets colder. The critical size \\(r^*\\) shrinks as the liquid gets colder</li><li>At a specific undercooling \\(\\Delta T_N\\) the two meet: the biggest clusters reach critical size and become stable nuclei</li><li>Above \\(\\Delta T_N\\) essentially nothing; at \\(\\Delta T_N\\) a sudden explosion of solid, called <strong>\"Big Bang\" nucleation</strong></li></ul>"
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\"><div class=\"concept-box-title\">Maximum undercooling measured for pure metals (lecture table)</div><div style=\"overflow-x:auto\"><table style=\"width:100%;border-collapse:collapse;font-size:14px;margin:6px 0\"><thead><tr><th style=\"text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--text)\">Metal</th><th style=\"text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--text)\">Max undercooling (K)</th><th style=\"text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--text)\">Metal</th><th style=\"text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--text)\">Max undercooling (K)</th></tr></thead><tbody><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Cadmium</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">110</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Gold</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">230</td></tr><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Lead</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">153</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Copper</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">236</td></tr><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Aluminium</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">160</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Iron</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">286</td></tr><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Tin</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">187</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Nickel</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">365</td></tr><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Silver</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">227</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Niobium</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">525</td></tr></tbody></table></div><p style=\"margin-top:8px\">Rule of thumb for pure metals: \\(\\Delta T_N \\approx 0.2\\,T_m\\) (in kelvin).</p></div>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "The discrepancy",
          "html": "<p>Real castings start to solidify with an undercooling of about <strong>1 K</strong>, sometimes as little as 0.1 &#176;C, not hundreds of kelvin. So homogeneous nucleation almost never happens in practice. Something must be lowering the barrier: the mould wall and impurity particles in the melt. That is heterogeneous nucleation.</p>"
        },
        {
          "type": "h2",
          "id": "u6-het",
          "text": "Heterogeneous Nucleation"
        },
        {
          "type": "p",
          "text": "Condensation forms on a cold glass, not in mid-air. Bubbles in a fizzy drink stream from scratches on the glass. In both cases an existing surface removes most of the cost of making a new one. Solid metal forms on mould walls and impurity particles for the same reason.",
          "class": ""
        },
        {
          "type": "p",
          "text": "<strong>Heterogeneous nucleation</strong> happens at preferential sites such as the mould wall or an impurity particle. The nucleus takes the shape of a <strong>spherical cap</strong> sitting on the surface:",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: a solid nucleus as a spherical cap on a surface</div>\n<svg viewBox=\"0 0 640 270\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"A solid nucleus sitting on a mould wall as a spherical cap, with contact angle theta at its edge. Three surface tensions act at the edge: gamma ML along the wall outwards, gamma SM along the wall inwards, and gamma SL along the cap surface at angle theta. Their horizontal balance gives gamma ML equals gamma SM plus gamma SL cos theta.\">\n<defs><clipPath id=\"capclip\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"190\"/></clipPath></defs><rect x=\"40\" y=\"190\" width=\"440\" height=\"50\" fill=\"#d8d8de\" fill-opacity=\"0.55\" stroke=\"#5e5e6c\" stroke-width=\"1.2\"/><text x=\"260.0\" y=\"222.0\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">mould wall / particle (M)</text><path d=\"M 146.1 190 A 120 120 0 0 1 353.9 190 Z\" fill=\"#3b82e8\" fill-opacity=\"0.18\" stroke=\"#3b82e8\" stroke-width=\"2.4\"/><text x=\"250.0\" y=\"160.0\" fill=\"#3b82e8\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">solid (S)</text><text x=\"120.0\" y=\"70.0\" fill=\"#e08000\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">liquid (L)</text><line x1=\"353.9\" y1=\"190.0\" x2=\"306.4\" y2=\"107.7\" stroke=\"#e04545\" stroke-width=\"2\"/><polygon points=\"305.4,106.0 305.4,106.0 305.4,106.0\" fill=\"#e04545\"/><polygon points=\"303.9,103.4 314.3,111.3 305.6,116.3\" fill=\"#e04545\"/><text x=\"297.4\" y=\"95.1\" fill=\"#e04545\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">&#947;<tspan dy=\"4\" font-size=\"10\">SL</tspan></text><line x1=\"353.9\" y1=\"190.0\" x2=\"423.9\" y2=\"190.0\" stroke=\"#00a87a\" stroke-width=\"2\"/><polygon points=\"431.9,190.0 421.7,185.2 421.7,194.8\" fill=\"#00a87a\"/><text x=\"433.9\" y=\"184.0\" fill=\"#00a87a\" font-size=\"13\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">&#947;<tspan dy=\"4\" font-size=\"10\">ML</tspan></text><line x1=\"353.9\" y1=\"190.0\" x2=\"293.9\" y2=\"190.0\" stroke=\"#8855f5\" stroke-width=\"2\"/><polygon points=\"285.9,190.0 296.1,185.2 296.1,194.8\" fill=\"#8855f5\"/><text x=\"283.9\" y=\"208.0\" fill=\"#8855f5\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">&#947;<tspan dy=\"4\" font-size=\"10\">SM</tspan></text><path d=\"M 319.9 190 A 34 34 0 0 1 336.9 160.6\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"1.4\"/><text x=\"309.9\" y=\"178.0\" fill=\"#a0a0ac\" font-size=\"15\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">&#952;</text><circle cx=\"353.9\" cy=\"190.0\" r=\"3.5\" fill=\"#5e5e6c\"/><text x=\"530.0\" y=\"80.0\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">Force balance at the edge:</text><text x=\"530.0\" y=\"102.0\" fill=\"#a0a0ac\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#947;<tspan dy=\"4\" font-size=\"10\">ML</tspan><tspan dy=\"-4\"> = &#947;</tspan><tspan dy=\"4\" font-size=\"10\">SM</tspan><tspan dy=\"-4\"> + &#947;</tspan><tspan dy=\"4\" font-size=\"10\">SL</tspan><tspan dy=\"-4\"> cos &#952;</tspan></text><text x=\"530.0\" y=\"140.0\" fill=\"#00a87a\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">small &#952;: flat cap, few atoms</text><text x=\"530.0\" y=\"160.0\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">&#952; = 180&#176;: full sphere</text><text x=\"530.0\" y=\"176.0\" fill=\"#90909c\" font-size=\"11\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">(no help from the wall)</text>\n</svg>\n<p style=\"text-align:center;margin-top:6px\">The cap has the same radius of curvature \\(r^*\\) as the homogeneous nucleus, but it is only a slice of the sphere, so far fewer atoms are needed.</p>\n</div>"
        },
        {
          "type": "formulablock",
          "name": "Balance of interfacial tensions (contact angle)",
          "eqs": [
            "\\gamma_{ML} = \\gamma_{SM} + \\gamma_{SL}\\cos\\theta \\qquad \\cos\\theta = \\frac{\\gamma_{ML} - \\gamma_{SM}}{\\gamma_{SL}}"
          ],
          "vars": [
            {
              "symbol": "\\(\\gamma_{ML},\\ \\gamma_{SM},\\ \\gamma_{SL}\\)",
              "desc": "mould-liquid, solid-mould and solid-liquid interfacial energies (J m\\(^{-2}\\))"
            },
            {
              "symbol": "\\(\\theta\\)",
              "desc": "contact (wetting) angle between the cap and the surface"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Free energy of a cap-shaped nucleus",
          "eqs": [
            "\\Delta G_{het} = V_S\\,\\Delta G_V + A_{SL}\\,\\gamma_{SL} + A_{SM}(\\gamma_{SM} - \\gamma_{ML})",
            "\\Delta G_{het} = \\left(\\tfrac{4}{3}\\pi r^3\\Delta G_V + 4\\pi r^2\\gamma_{SL}\\right)S(\\theta) = \\Delta G_{hom}\\,S(\\theta)"
          ],
          "vars": [
            {
              "symbol": "\\(A_{SM}(\\gamma_{SM} - \\gamma_{ML})\\)",
              "desc": "the area of mould-liquid interface that is <em>replaced</em> by mould-solid interface when the cap forms"
            },
            {
              "symbol": "\\(S(\\theta)\\)",
              "desc": "shape factor, \\(S(\\theta) = (2 + \\cos\\theta)(1 - \\cos\\theta)^2/4 \\le 1\\)"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Critical size and barrier, heterogeneous",
          "eqs": [
            "r^*_{het} = -\\frac{2\\gamma_{SL}}{\\Delta G_V} = r^*_{hom} \\qquad \\Delta G^*_{het} = \\frac{16\\pi\\gamma_{SL}^3}{3(\\Delta G_V)^2}S(\\theta) = \\Delta G^*_{hom}\\,S(\\theta)"
          ],
          "vars": [],
          "note": "Same critical radius, smaller barrier. The cap has the curvature of a sphere of radius \\(r^*\\) but is only a slice of it, so it contains far fewer atoms. Its volume is exactly \\(S(\\theta)\\) times the full sphere."
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\"><div class=\"concept-box-title\">How much the contact angle helps</div><div style=\"overflow-x:auto\"><table style=\"width:100%;border-collapse:collapse;font-size:14px;margin:6px 0\"><thead><tr><th style=\"text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--text)\">Contact angle θ</th><th style=\"text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--text)\">S(θ), calculated</th><th style=\"text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--text)\">Barrier vs homogeneous</th></tr></thead><tbody><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">10°</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">0.00017</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">about 1/6000 (slide rounds to 0.0001)</td></tr><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">30°</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">0.013</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">about 1/80 (slide quotes 0.02)</td></tr><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">60°</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">0.156</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">about 1/6</td></tr><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">90°</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">0.5</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">half (a hemisphere)</td></tr><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">180°</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">1</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">no help at all (a full sphere)</td></tr></tbody></table></div><p style=\"margin-top:8px\">The 30° value on the slide (0.02) does not match the formula, which gives 0.0129. Use the formula in calculations and expect the ~0.01 to 0.02 order of magnitude in multiple choice.</p></div>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "What this means",
          "html": "<ul><li>Smaller contact angle (better wetting of the surface by the solid) means a smaller \\(S(\\theta)\\) and a lower barrier, so nucleation needs <strong>even less undercooling</strong></li><li>In practical casting, nucleation is <strong>always heterogeneous</strong> and needs only a small undercooling</li><li>But ordinary sites (mould walls, oxide particles) are <strong>inefficient</strong>: their contact angle is large. Cracks and crevices in the mould help, because the solid can fill a corner with very few atoms</li><li>A low contact angle needs <strong>good crystallographic matching</strong> between the solid (nucleus) and the substrate (nucleant)</li></ul>"
        },
        {
          "type": "example",
          "label": "Try it: the payoff from a good nucleant",
          "q": "For a particular melt and undercooling \\(\\Delta G^*_{hom} = 8.7 \\times 10^{-19}\\) J. Find \\(\\Delta G^*_{het}\\) on a mould wall with \\(\\theta = 90^\\circ\\) and on an inoculant particle with \\(\\theta = 10^\\circ\\). What happens to \\(r^*\\)?",
          "steps": [
            "\\(\\theta = 90^\\circ\\): \\(\\cos\\theta = 0\\), \\(S = (2)(1)^2/4 = 0.5\\), so \\(\\Delta G^*_{het} = 4.3 \\times 10^{-19}\\) J",
            "\\(\\theta = 10^\\circ\\): \\(\\cos\\theta = 0.985\\), \\(S = (2.985)(0.0152)^2/4 = 1.7 \\times 10^{-4}\\), so \\(\\Delta G^*_{het} = 1.5 \\times 10^{-22}\\) J",
            "\\(r^*\\) depends only on \\(\\gamma_{SL}\\) and \\(\\Delta G_V\\), so it is unchanged in both cases"
          ],
          "answer": "The mould wall halves the barrier; the well-matched particle cuts it by a factor of about 6000, to well below \\(kT\\). That is why an inoculated melt nucleates at a fraction of a kelvin of undercooling."
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>A surface lowers the barrier by \\(S(\\theta)\\) without changing \\(r^*\\). The flatter the cap, the fewer atoms it needs.</p>"
        },
        {
          "type": "h2",
          "id": "u6-inoc",
          "text": "Grain Refinement by Inoculation"
        },
        {
          "type": "p",
          "text": "Every successful nucleus becomes one grain. More nuclei means more, smaller grains. That matters because fine grains make a metal both <strong>stronger</strong> and <strong>tougher</strong>, a rare case where you do not trade one for the other.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Hall-Petch relationship",
          "eqs": [
            "\\sigma_y = \\sigma_0 + \\frac{k}{\\sqrt{d}}"
          ],
          "vars": [
            {
              "symbol": "\\(\\sigma_y\\)",
              "desc": "yield strength"
            },
            {
              "symbol": "\\(\\sigma_0\\)",
              "desc": "friction stress (resistance of the lattice itself)"
            },
            {
              "symbol": "\\(k\\)",
              "desc": "strengthening coefficient (material constant)"
            },
            {
              "symbol": "\\(d\\)",
              "desc": "average grain size"
            }
          ],
          "note": "Grain boundaries block dislocations, so more boundaries per unit length means a higher yield strength."
        },
        {
          "type": "example",
          "label": "Try it: how much does refinement buy?",
          "q": "An aluminium alloy has \\(\\sigma_0 = 20\\) MPa and \\(k = 0.07\\) MPa m\\(^{1/2}\\) (illustrative values). Compare the yield strength for grain sizes of 1 mm (coarse, uninoculated) and 100 \\(\\mu\\)m (inoculated).",
          "steps": [
            "\\(d = 1 \\times 10^{-3}\\) m: \\(\\sigma_y = 20 + 0.07/\\sqrt{0.001} = 20 + 2.2 = 22.2\\) MPa",
            "\\(d = 1 \\times 10^{-4}\\) m: \\(\\sigma_y = 20 + 0.07/\\sqrt{0.0001} = 20 + 7 = 27\\) MPa"
          ],
          "answer": "A tenfold refinement raises the grain-boundary contribution by \\(\\sqrt{10} \\approx 3.2\\) times. Refining to 10 \\(\\mu\\)m would give about 42 MPa."
        },
        {
          "type": "p",
          "text": "Since casting nucleation is always heterogeneous, the route to fine grains is to make heterogeneous nucleation <strong>more efficient</strong>. <strong>Chemical grain refinement</strong>, or <strong>inoculation</strong>, adds a small amount of another element or master alloy that supplies insoluble particles (often intermetallics) with good crystallographic matching to the solid. They show very low nucleation undercooling on the cooling curve and refine the grain size dramatically.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Al-5Ti-1B in aluminium",
              "color": "#e08000",
              "text": "Less than 1% of master alloy added to Al alloys. The TiB\\(_2\\) particles (and probably Al\\(_3\\)Ti) match the Al lattice well and nucleate Al grains. The cooling curve shows a large drop in nucleation undercooling."
            },
            {
              "title": "Zr in magnesium",
              "color": "#e08000",
              "text": "Pure Zr added to Mg alloys. Zr particles have good crystallographic matching with Mg and refine pure Mg from coarse grains to a fine structure."
            }
          ]
        },
        {
          "type": "h3",
          "text": "Limitations of chemical grain refinement"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Poisoning",
              "color": "#e08000",
              "text": "Not universal. Some alloying elements react with the nucleating particles and kill them: Al-5Ti-1B is ineffective in <strong>Al-Si</strong> alloys, and Zr is ineffective in <strong>Mg-Al</strong> alloys."
            },
            {
              "title": "Fading",
              "color": "#e08000",
              "text": "Refining efficiency falls quickly if the melt is held before casting (particles settle or react). A serious problem for large industrial castings."
            },
            {
              "title": "Property degradation",
              "color": "#e08000",
              "text": "Less than 1% of the added particles actually nucleate a grain. The rest stay trapped as agglomerates, hurting corrosion, fatigue and machinability."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Why this matters for additive manufacturing",
          "html": "<p>Metal 3D printing commonly produces <strong>large columnar grains</strong> growing up through the layers, which also leads to cracking. Controlling nucleation in the melt pool is therefore an active research area, including <strong>new alloy design</strong> specifically for additive manufacturing.</p>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "An alternative: native refinement through a peritectic (Al-Zr)",
          "html": "<ul><li>Add a small amount of Zr (e.g. 0.2%) to aluminium</li><li>Around <strong>715 &#176;C</strong>: L &#8594; L + Al\\(_3\\)Zr. Al\\(_3\\)Zr particles form in the melt itself</li><li>At <strong>660.5 &#176;C</strong> (peritectic): L + Al\\(_3\\)Zr &#8594; Al</li><li>Al\\(_3\\)Zr matches the Al lattice well, so the particles grown inside the melt act as nucleants without adding foreign agglomerates</li><li>Physical refinement (stirring, ultrasound) is the other alternative, covered in Unit 7</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Grain size is set at nucleation. Add well-matched particles (inoculation) to get many grains, but watch for poisoning, fading and leftover particles.</p>"
        }
      ]
    },
    {
      "id": "u7",
      "numLabel": "Unit 7 of 10",
      "color": "#e03f78",
      "title": "Solidification: Growth",
      "subtitle": "Once nuclei exist, the rest of the liquid freezes by growth. This unit explains why a growing front can stay flat or break up into cells and tree-like dendrites, how solute piled up ahead of the front creates constitutional supercooling, and how all of this produces the three-zone ingot structure and the ways industry gets rid of it.",
      "desc": "Interface stability in pure metals and alloys, dendrites, constitutional supercooling and the four growth forms, faceted vs non-faceted growth, the ingot structure, and chemical vs physical grain refinement, with turbine-blade and metallic-glass case studies.",
      "difficulty": "Medium-Hard",
      "readTime": "35 min",
      "sections": [
        {
          "type": "toc",
          "title": "In this unit",
          "items": [
            {
              "href": "#u7-pure",
              "label": "Growth in pure metals"
            },
            {
              "href": "#u7-dend",
              "label": "Dendrites"
            },
            {
              "href": "#u7-alloy",
              "label": "Growth in alloys: solute rejection"
            },
            {
              "href": "#u7-cs",
              "label": "Constitutional supercooling"
            },
            {
              "href": "#u7-forms",
              "label": "Four growth forms"
            },
            {
              "href": "#u7-atomic",
              "label": "Diffusion vs interface control"
            },
            {
              "href": "#u7-ingot",
              "label": "The ingot structure"
            },
            {
              "href": "#u7-fix",
              "label": "Getting rid of the ingot structure"
            },
            {
              "href": "#u7-cases",
              "label": "Case studies"
            }
          ]
        },
        {
          "type": "h2",
          "id": "u7-pure",
          "text": "Growth in Pure Metals"
        },
        {
          "type": "p",
          "text": "Ice on a pond grows as a smooth sheet because heat leaves upwards through the ice into cold air. Frost on a car windscreen grows as feathery branches because the surrounding air is colder than the crystal. The difference is the direction in which heat escapes, and it decides the shape of a growing metal crystal too.",
          "class": ""
        },
        {
          "type": "p",
          "text": "After nucleation, solidification continues by <strong>growth</strong> at a small undercooling, with the solid-liquid interface sitting at almost exactly \\(T_m\\). In a pure metal, growth is limited by how fast heat (the melt superheat plus the latent heat) can be carried away from the interface: either through the solid or through the liquid.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: why the direction of heat flow decides the shape of the front in a pure metal</div>\n<svg viewBox=\"0 0 640 310\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Two panels. Left: temperature rises from solid into liquid, so the liquid ahead of the interface is above the melting point; a small bump on the interface sits in hot liquid and melts back, so a planar front is stable. Right: temperature falls into the liquid, which is undercooled below the melting point; a bump finds colder liquid and grows faster, so the planar front is unstable and dendrites form.\">\n<line x1=\"40.0\" y1=\"170.0\" x2=\"40.0\" y2=\"40.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"40.0,30.0 35.2,40.2 44.8,40.2\" fill=\"#5e5e6c\"/><text x=\"34.0\" y=\"44.0\" fill=\"#a0a0ac\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" font-style=\"italic\">T</text><line x1=\"40.0\" y1=\"105.0\" x2=\"280.0\" y2=\"105.0\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text x=\"284.0\" y=\"109.0\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">T<tspan dy=\"4\" font-size=\"10\">m</tspan></text><rect x=\"40\" y=\"40\" width=\"110\" height=\"130\" fill=\"#3b82e8\" fill-opacity=\"0.08\"/><line x1=\"150.0\" y1=\"40.0\" x2=\"150.0\" y2=\"170.0\" stroke=\"#5e5e6c\" stroke-width=\"1.2\"/><text x=\"95.0\" y=\"186.0\" fill=\"#3b82e8\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">solid</text><text x=\"215.0\" y=\"186.0\" fill=\"#e08000\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">liquid</text><polyline points=\"40.0,150.0 150.0,105.0 280.0,52.0\" fill=\"none\" stroke=\"#e04545\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/><rect x=\"40\" y=\"200\" width=\"240\" height=\"70\" fill=\"none\"/><polyline points=\"150.0,200.0 150.0,226.0 160.0,235.0 150.0,244.0 150.0,270.0\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"172.0\" y1=\"235.0\" x2=\"156.0\" y2=\"235.0\" stroke=\"#00a87a\" stroke-width=\"1.2\"/><polygon points=\"150.0,235.0 156.8,231.8 156.8,238.2\" fill=\"#00a87a\"/><text x=\"180.0\" y=\"239.0\" fill=\"#00a87a\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">bump melts back</text><text x=\"160.0\" y=\"24.0\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">Liquid hotter than solid (heat out through the solid)</text><text x=\"160.0\" y=\"286.0\" fill=\"#00a87a\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">planar front STABLE</text><line x1=\"360.0\" y1=\"170.0\" x2=\"360.0\" y2=\"40.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"360.0,30.0 355.2,40.2 364.8,40.2\" fill=\"#5e5e6c\"/><text x=\"354.0\" y=\"44.0\" fill=\"#a0a0ac\" font-size=\"13\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\" font-style=\"italic\">T</text><line x1=\"360.0\" y1=\"105.0\" x2=\"600.0\" y2=\"105.0\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text x=\"604.0\" y=\"109.0\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">T<tspan dy=\"4\" font-size=\"10\">m</tspan></text><rect x=\"360\" y=\"40\" width=\"110\" height=\"130\" fill=\"#3b82e8\" fill-opacity=\"0.08\"/><line x1=\"470.0\" y1=\"40.0\" x2=\"470.0\" y2=\"170.0\" stroke=\"#5e5e6c\" stroke-width=\"1.2\"/><text x=\"415.0\" y=\"186.0\" fill=\"#3b82e8\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">solid</text><text x=\"535.0\" y=\"186.0\" fill=\"#e08000\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">liquid</text><polyline points=\"360.0,110.0 470.0,105.0 600.0,150.0\" fill=\"none\" stroke=\"#e04545\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/><rect x=\"360\" y=\"200\" width=\"240\" height=\"70\" fill=\"none\"/><polyline points=\"470.0,200.0 470.0,226.0 498.0,232.0 498.0,238.0 470.0,244.0 470.0,270.0\" fill=\"none\" stroke=\"#3b82e8\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"502.0\" y1=\"235.0\" x2=\"520.0\" y2=\"235.0\" stroke=\"#e04545\" stroke-width=\"1.2\"/><polygon points=\"526.0,235.0 519.2,231.8 519.2,238.2\" fill=\"#e04545\"/><text x=\"528.0\" y=\"239.0\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">bump runs ahead</text><text x=\"480.0\" y=\"24.0\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"600\">Liquid colder than solid (heat out into the liquid)</text><text x=\"480.0\" y=\"286.0\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">planar front UNSTABLE: dendrites</text>\n</svg>\n<p style=\"text-align:center;margin-top:6px\">Same metal, same \\(T_m\\) at the interface. Only the slope of the temperature in the liquid changes the outcome.</p>\n</div>"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Heat out through the solid",
              "color": "#e03f78",
              "text": "<strong>Beginning of solidification, from the mould wall.</strong> Superheated liquid is poured, so the liquid is <em>hotter</em> than the solid. A bump on the interface pokes into liquid above \\(T_m\\) and melts back. The <strong>planar interface is stable</strong>."
            },
            {
              "title": "Heat out into the liquid",
              "color": "#e03f78",
              "text": "<strong>End of solidification, in the bulk melt.</strong> Crystals nucleated on particles in the melt sit in liquid that is <em>colder</em> than \\(T_m\\) (supercooled). A bump reaches colder liquid, grows faster, and runs ahead. The <strong>planar interface is unstable</strong>."
            }
          ]
        },
        {
          "type": "h2",
          "id": "u7-dend",
          "text": "Dendrites"
        },
        {
          "type": "p",
          "text": "An unstable interface grows protrusions in many directions. These grow into arms, which sprout their own side arms, giving a tree-like crystal called a <strong>dendrite</strong> (Greek <em>dendron</em>, tree). A snowflake is a dendrite of ice.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Key facts",
          "html": "<ul><li>Primary, secondary and tertiary arms grow along specific crystallographic directions: <strong>&#8249;100&#8250; in cubic metals</strong> and <strong>&#8249;10&#772;10&#8250; in hcp metals</strong></li><li>In pure metals the dendrites form purely from growth into thermally undercooled liquid: <strong>thermal dendrites</strong></li><li>They are not visible in the final microstructure of a pure metal: each dendrite fills in to become one polygonal grain. You only see them if the remaining liquid is drained or etched differently (as in alloys)</li></ul>"
        },
        {
          "type": "h2",
          "id": "u7-alloy",
          "text": "Growth in Alloys: Solute Rejection"
        },
        {
          "type": "p",
          "text": "Freeze salty water and the ice that forms is almost pure; the salt is pushed out into the water next to it. Alloys do the same. A pure metal freezes at one temperature, but an alloy freezes over a <strong>solidification range</strong>, and the solid that forms is leaner in solute than the liquid it came from.",
          "class": ""
        },
        {
          "type": "p",
          "text": "Take an alloy of composition \\(X_0\\) in a system where solute lowers the melting point (so \\(k < 1\\)). The first solid is \\(kX_0\\). The solute it rejects piles up in a thin layer of liquid at the interface, while far away the liquid stays at \\(X_0\\).",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Equilibrium partition coefficient",
          "eqs": [
            "k = \\frac{X_S}{X_L}"
          ],
          "vars": [
            {
              "symbol": "\\(X_S,\\ X_L\\)",
              "desc": "solidus and liquidus compositions at the same temperature (tie-line ends)"
            },
            {
              "symbol": "\\(k < 1\\)",
              "desc": "solid holds less solute than the liquid: solute is rejected at the front"
            }
          ],
          "note": "Read straight off the phase diagram. With straight solidus and liquidus lines \\(k\\) is constant."
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "The compositions at the front (lecture figure)",
          "html": "<ul><li><strong>At \\(T_1\\) (liquidus of \\(X_0\\)):</strong> first solid forms with composition \\(kX_0\\)</li><li><strong>During steady growth:</strong> the solid forming has the bulk composition \\(X_0\\), so the liquid it is in equilibrium with at the interface must be \\(X_0/k\\). The interface sits at \\(T_3\\), the solidus temperature of \\(X_0\\)</li><li><strong>Ahead of the front:</strong> liquid composition falls from \\(X_0/k\\) back to \\(X_0\\) over a thin boundary layer</li></ul>"
        },
        {
          "type": "example",
          "label": "Try it: compositions at the front",
          "q": "An alloy contains 2 wt% solute and the partition coefficient is \\(k = 0.25\\). What is the composition of the first solid, and of the liquid at the interface once growth is steady?",
          "steps": [
            "First solid: \\(kX_0 = 0.25 \\times 2 = 0.5\\) wt%",
            "Steady state: solid forms at \\(X_0 = 2\\) wt%, so interface liquid is \\(X_0/k = 2/0.25 = 8\\) wt%"
          ],
          "answer": "0.5 wt% for the first solid, 8 wt% in the liquid right at the interface. A smaller \\(k\\) means a bigger pile-up and a stronger tendency to constitutional supercooling."
        },
        {
          "type": "h2",
          "id": "u7-cs",
          "text": "Constitutional Supercooling"
        },
        {
          "type": "p",
          "text": "Here is the trick of alloy solidification. The solute pile-up changes the <strong>liquidus temperature</strong> of the liquid ahead of the front, point by point, as read from the phase diagram. Solute-rich liquid at the interface has a low liquidus (\\(T_3\\)); liquid further out has the bulk liquidus (\\(T_1\\)).",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: constitutional supercooling ahead of a growing alloy front</div>\n<svg viewBox=\"0 0 640 360\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Two stacked plots against distance from the solid-liquid interface. Top: the solid has composition k X0, the liquid at the interface is enriched to X0 over k, decaying back to the bulk X0 further out. Bottom: the liquidus temperature therefore rises from T3 at the interface to T1 far away, while the actual temperature rises in a straight line. Where the actual temperature lies below the local liquidus, shaded, the liquid is constitutionally supercooled even though it is hotter than the solid.\">\n<line x1=\"80.0\" y1=\"140.0\" x2=\"80.0\" y2=\"30.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"80.0,20.0 75.2,30.2 84.8,30.2\" fill=\"#5e5e6c\"/><line x1=\"80.0\" y1=\"140.0\" x2=\"590.0\" y2=\"140.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><rect x=\"80\" y=\"30\" width=\"90\" height=\"110\" fill=\"#3b82e8\" fill-opacity=\"0.08\"/><line x1=\"170.0\" y1=\"30.0\" x2=\"170.0\" y2=\"140.0\" stroke=\"#5e5e6c\" stroke-width=\"1.2\"/><line x1=\"80.0\" y1=\"129.2\" x2=\"170.0\" y2=\"129.2\" stroke=\"#3b82e8\" stroke-width=\"2.4\"/><polyline points=\"170.0,42.9 174.2,48.1 178.4,52.9 182.6,57.3 186.8,61.3 191.0,65.0 195.2,68.4 199.4,71.5 203.6,74.4 207.8,77.1 212.0,79.5 216.2,81.8 220.4,83.8 224.6,85.7 228.8,87.5 233.0,89.1 237.2,90.6 241.4,92.0 245.6,93.2 249.8,94.4 254.0,95.4 258.2,96.4 262.4,97.3 266.6,98.1 270.8,98.9 275.0,99.6 279.2,100.2 283.4,100.8 287.6,101.4 291.8,101.9 296.0,102.3 300.2,102.8 304.4,103.2 308.6,103.5 312.8,103.8 317.0,104.1 321.2,104.4 325.4,104.7 329.6,104.9 333.8,105.1 338.0,105.3 342.2,105.5 346.4,105.7 350.6,105.8 354.8,106.0 359.0,106.1 363.2,106.2 367.4,106.4 371.6,106.5 375.8,106.6 380.0,106.6 384.2,106.7 388.4,106.8 392.6,106.9 396.8,106.9 401.0,107.0 405.2,107.0 409.4,107.1 413.6,107.1 417.8,107.2 422.0,107.2 426.2,107.2 430.4,107.3 434.6,107.3 438.8,107.3 443.0,107.4 447.2,107.4 451.4,107.4 455.6,107.4 459.8,107.4 464.0,107.5 468.2,107.5 472.4,107.5 476.6,107.5 480.8,107.5 485.0,107.5 489.2,107.5 493.4,107.5 497.6,107.5 501.8,107.6 506.0,107.6 510.2,107.6 514.4,107.6 518.6,107.6 522.8,107.6 527.0,107.6 531.2,107.6 535.4,107.6 539.6,107.6 543.8,107.6 548.0,107.6 552.2,107.6 556.4,107.6 560.6,107.6 564.8,107.6 569.0,107.6 573.2,107.6 577.4,107.6 581.6,107.6 585.8,107.6 590.0,107.6\" fill=\"none\" stroke=\"#e08000\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/><text x=\"74.0\" y=\"46.9\" fill=\"#e08000\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">X<tspan dy=\"4\" font-size=\"10\">0</tspan>/k</text><text x=\"74.0\" y=\"111.6\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">X<tspan dy=\"4\" font-size=\"10\">0</tspan></text><text x=\"74.0\" y=\"133.2\" fill=\"#3b82e8\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">kX<tspan dy=\"4\" font-size=\"10\">0</tspan></text><line x1=\"80.0\" y1=\"107.6\" x2=\"590.0\" y2=\"107.6\" stroke=\"#90909c\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><text x=\"190.0\" y=\"38.9\" fill=\"#e08000\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">solute piles up</text><text x=\"586.0\" y=\"101.6\" fill=\"#90909c\" font-size=\"11\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">bulk melt</text><text x=\"30.0\" y=\"85.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" transform=\"rotate(-90 30.0 85.0)\">solute</text><line x1=\"80.0\" y1=\"320.0\" x2=\"80.0\" y2=\"175.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><polygon points=\"80.0,165.0 75.2,175.2 84.8,175.2\" fill=\"#5e5e6c\"/><line x1=\"80.0\" y1=\"320.0\" x2=\"590.0\" y2=\"320.0\" stroke=\"#5e5e6c\" stroke-width=\"1.5\"/><rect x=\"80\" y=\"175\" width=\"90\" height=\"145\" fill=\"#3b82e8\" fill-opacity=\"0.08\"/><line x1=\"170.0\" y1=\"175.0\" x2=\"170.0\" y2=\"320.0\" stroke=\"#5e5e6c\" stroke-width=\"1.2\"/><polygon points=\"174.2,274.1 178.4,268.3 182.6,263.0 186.8,258.0 191.0,253.5 195.2,249.3 199.4,245.5 203.6,242.0 207.8,238.7 212.0,235.7 216.2,233.0 220.4,230.5 224.6,228.1 228.8,226.0 233.0,224.0 237.2,222.2 241.4,220.5 245.6,219.0 249.8,217.6 254.0,216.3 258.2,215.1 262.4,214.0 266.6,213.0 270.8,212.1 275.0,211.2 279.2,210.4 283.4,209.7 287.6,209.0 291.8,208.4 296.0,207.9 300.2,207.3 304.4,206.9 308.6,206.4 312.8,206.0 317.0,205.6 321.2,205.3 325.4,205.0 329.6,204.7 333.8,204.4 338.0,204.2 342.2,204.0 346.4,203.8 350.6,203.6 354.8,203.4 359.0,203.2 363.2,203.1 367.4,202.9 371.6,202.8 375.8,202.7 380.0,202.6 384.2,202.5 388.4,202.4 392.6,202.3 396.8,202.2 401.0,202.2 405.2,202.1 409.4,202.0 413.6,202.0 417.8,201.9 422.0,201.9 426.2,201.9 430.4,201.8 434.6,201.8 438.8,201.7 443.0,201.7 447.2,201.7 451.4,201.7 455.6,201.6 459.8,201.6 464.0,201.6 468.2,201.6 472.4,201.6 476.6,201.5 476.6,202.5 472.4,203.6 468.2,204.6 464.0,205.7 459.8,206.8 455.6,207.8 451.4,208.9 447.2,210.0 443.0,211.1 438.8,212.1 434.6,213.2 430.4,214.3 426.2,215.3 422.0,216.4 417.8,217.5 413.6,218.5 409.4,219.6 405.2,220.7 401.0,221.7 396.8,222.8 392.6,223.9 388.4,224.9 384.2,226.0 380.0,227.1 375.8,228.1 371.6,229.2 367.4,230.3 363.2,231.3 359.0,232.4 354.8,233.5 350.6,234.5 346.4,235.6 342.2,236.7 338.0,237.7 333.8,238.8 329.6,239.9 325.4,240.9 321.2,242.0 317.0,243.1 312.8,244.2 308.6,245.2 304.4,246.3 300.2,247.4 296.0,248.4 291.8,249.5 287.6,250.6 283.4,251.6 279.2,252.7 275.0,253.8 270.8,254.8 266.6,255.9 262.4,257.0 258.2,258.0 254.0,259.1 249.8,260.2 245.6,261.2 241.4,262.3 237.2,263.4 233.0,264.4 228.8,265.5 224.6,266.6 220.4,267.6 216.2,268.7 212.0,269.8 207.8,270.8 203.6,271.9 199.4,273.0 195.2,274.0 191.0,275.1 186.8,276.2 182.6,277.3 178.4,278.3 174.2,279.4\" fill=\"#e04545\" fill-opacity=\"0.28\"/><polyline points=\"170.0,280.5 174.2,274.1 178.4,268.3 182.6,263.0 186.8,258.0 191.0,253.5 195.2,249.3 199.4,245.5 203.6,242.0 207.8,238.7 212.0,235.7 216.2,233.0 220.4,230.5 224.6,228.1 228.8,226.0 233.0,224.0 237.2,222.2 241.4,220.5 245.6,219.0 249.8,217.6 254.0,216.3 258.2,215.1 262.4,214.0 266.6,213.0 270.8,212.1 275.0,211.2 279.2,210.4 283.4,209.7 287.6,209.0 291.8,208.4 296.0,207.9 300.2,207.3 304.4,206.9 308.6,206.4 312.8,206.0 317.0,205.6 321.2,205.3 325.4,205.0 329.6,204.7 333.8,204.4 338.0,204.2 342.2,204.0 346.4,203.8 350.6,203.6 354.8,203.4 359.0,203.2 363.2,203.1 367.4,202.9 371.6,202.8 375.8,202.7 380.0,202.6 384.2,202.5 388.4,202.4 392.6,202.3 396.8,202.2 401.0,202.2 405.2,202.1 409.4,202.0 413.6,202.0 417.8,201.9 422.0,201.9 426.2,201.9 430.4,201.8 434.6,201.8 438.8,201.7 443.0,201.7 447.2,201.7 451.4,201.7 455.6,201.6 459.8,201.6 464.0,201.6 468.2,201.6 472.4,201.6 476.6,201.5 480.8,201.5 485.0,201.5 489.2,201.5 493.4,201.5 497.6,201.5 501.8,201.5 506.0,201.5 510.2,201.5 514.4,201.4 518.6,201.4 522.8,201.4 527.0,201.4 531.2,201.4 535.4,201.4 539.6,201.4 543.8,201.4 548.0,201.4 552.2,201.4 556.4,201.4 560.6,201.4 564.8,201.4 569.0,201.4 573.2,201.4 577.4,201.4 581.6,201.4 585.8,201.4 590.0,201.4\" fill=\"none\" stroke=\"#e08000\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/><polyline points=\"170.0,280.5 207.8,270.8 245.6,261.2 283.4,251.6 321.2,242.0 359.0,232.4 396.8,222.8 434.6,213.2 472.4,203.6 510.2,194.0 548.0,184.4\" fill=\"none\" stroke=\"#e04545\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/><text x=\"359.0\" y=\"195.2\" fill=\"#e08000\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">liquidus temperature</text><text x=\"422.0\" y=\"236.4\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">actual temperature</text><text x=\"283.4\" y=\"233.7\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">constitutionally</text><text x=\"283.4\" y=\"248.7\" fill=\"#e04545\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">supercooled</text><text x=\"74.0\" y=\"284.5\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">T<tspan dy=\"4\" font-size=\"10\">3</tspan></text><text x=\"74.0\" y=\"205.4\" fill=\"#a0a0ac\" font-size=\"12\" text-anchor=\"end\" font-family=\"Inter,system-ui,sans-serif\">T<tspan dy=\"4\" font-size=\"10\">1</tspan></text><text x=\"125.0\" y=\"338.0\" fill=\"#3b82e8\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">solid</text><text x=\"380.0\" y=\"338.0\" fill=\"#e08000\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\">liquid  (distance x &#8594;)</text><text x=\"30.0\" y=\"247.5\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"middle\" font-family=\"Inter,system-ui,sans-serif\" transform=\"rotate(-90 30.0 247.5)\">temperature</text>\n</svg>\n<p style=\"text-align:center;margin-top:6px\">The liquid is <em>hotter</em> than the solid everywhere, yet in the shaded zone it sits below its own liquidus. That undercooling comes from composition, not from heat.</p>\n</div>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Why it is called constitutional",
          "html": "<ul><li>The <strong>actual temperature</strong> of the liquid is set by heat flow, and in a casting it usually rises into the liquid (liquid hotter than solid)</li><li>Yet in the shaded region the actual temperature is <strong>below the local liquidus</strong>, so that liquid is supercooled</li><li>This supercooling comes from <strong>composition</strong> (the constitution of the phase diagram), not from heat. Hence <strong>constitutional supercooling</strong></li><li>So, unlike in a pure metal, an alloy front can be unstable even when the liquid is hotter than the solid</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>A pure metal needs a colder liquid to go unstable. An alloy only needs liquid below its <em>own</em> liquidus, which solute pile-up provides.</p>"
        },
        {
          "type": "h2",
          "id": "u7-forms",
          "text": "Four Growth Forms"
        },
        {
          "type": "p",
          "text": "The liquidus profile is fixed by the solute. What the caster controls is the actual temperature gradient in the liquid. Starting steep and getting shallower, the front passes through four forms (lecture figure, cases 1 to 4):",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "1. Plane front",
              "color": "#e03f78",
              "text": "Actual gradient <strong>steeper than the critical gradient</strong> (the slope of the liquidus at the interface). No liquid is supercooled; a bump melts back. Flat front."
            },
            {
              "title": "2. Cellular",
              "color": "#e03f78",
              "text": "Gradient <strong>just below critical</strong>. A thin supercooled zone. Bumps survive and grow into an array of convex <strong>cells</strong> growing against the heat flow; each cell usually has <strong>six neighbours</strong>. No side arms."
            },
            {
              "title": "3. Columnar dendritic",
              "color": "#e03f78",
              "text": "Gradient lower still but <strong>still positive</strong>. A wide supercooled zone; cell walls become unstable and sprout side arms. Heat still leaves through the solid, so growth is directional. <strong>The most common form in castings</strong>, growing in from the mould wall."
            },
            {
              "title": "4. Free dendritic",
              "color": "#e03f78",
              "text": "Gradient <strong>negative</strong>: liquid both thermally and constitutionally undercooled. Latent heat flows into the liquid in every direction, so a crystal grows arms all round, like a pure-metal thermal dendrite. Seen in the <strong>centre</strong> of a casting."
            }
          ]
        },
        {
          "type": "raw",
          "html": "<div class=\"solw learn-only\" data-w=\"cs\"></div>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Going further: the constitutional supercooling criterion (not on the slides)",
          "html": "<p>A standard textbook result makes case 1 quantitative: a planar front is stable when \\(G_L / v \\ge \\Delta T_0 / D_L\\), where \\(G_L\\) is the actual temperature gradient in the liquid, \\(v\\) the growth velocity, \\(\\Delta T_0\\) the solidification range of the alloy and \\(D_L\\) the solute diffusivity in the liquid. It explains why fast growth, shallow gradients and wide freezing ranges all push towards dendrites. Not lectured, so treat it as background.</p>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "A bonus: constitutional supercooling helps inoculation",
          "html": "<p>Synchrotron X-ray imaging of solidifying alloys (lecture slide) shows new grains nucleating on inoculant particles inside the constitutionally supercooled zone ahead of the front. The supercooled zone gives particles the undercooling they need to activate, so solute and inoculant work together in grain refinement.</p>"
        },
        {
          "type": "h2",
          "id": "u7-atomic",
          "text": "Diffusion vs Interface Control"
        },
        {
          "type": "p",
          "text": "Growth needs two steps in series, like a factory where parts must first be delivered and then assembled. Whichever step is slower sets the pace, and also sets the shape of the crystal.",
          "class": ""
        },
        {
          "type": "list",
          "items": [
            "<strong>Diffusion:</strong> atoms move from the liquid to the solid-liquid interface",
            "<strong>Interface reaction:</strong> those atoms attach to the solid"
          ]
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Interface-controlled growth",
              "color": "#e03f78",
              "text": "Diffusion fast, attachment slow. Atoms only stick at a few favoured sites (steps and ledges), so the interface is <strong>atomically smooth</strong>. The crystal grows as flat planes with sharp edges: a <strong>faceted</strong> solid, e.g. Si in Al-Si alloys."
            },
            {
              "title": "Diffusion-controlled growth",
              "color": "#e03f78",
              "text": "Attachment fast, diffusion slow. Atoms stick anywhere, so the interface is <strong>atomically rough</strong>. The crystal follows the diffusion field and grows <strong>smooth, rounded</strong> (non-faceted) shapes and dendrites. Typical of metals."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Watch the wording",
          "html": "<p>The slide says \"atomically smooth interface: rough faceted solid\" and \"atomically rough interface: smooth rounded solid\". Smooth at the atomic scale gives the jagged, angular crystal you see; rough at the atomic scale gives the smooth rounded one. The two \"roughs\" are at different scales, which is exactly the kind of thing a multiple choice question can twist.</p>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Not assessed: Monte Carlo simulation",
          "html": "<p>The lecture shows the lecturer's Monte Carlo simulations of growth morphology: diffusion roughens the interface, attachment and capillary forces smooth it, giving dendritic shapes when diffusion dominates and compact shapes when the interface reaction dominates. The slides mark this case study as <strong>not assessed</strong>.</p>"
        },
        {
          "type": "h2",
          "id": "u7-ingot",
          "text": "The Ingot Structure"
        },
        {
          "type": "p",
          "text": "Cut a large casting in half, polish and etch it, and you nearly always see the same three zones. Ingots (also called billets, blooms or blanks depending on size and shape) are the starting point for rolled, forged and extruded products, so this structure matters well beyond foundries.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\">\n<div class=\"concept-box-title\">Diagram: the three zones of an ingot cross-section (schematic)</div>\n<svg viewBox=\"0 0 640 330\" style=\"width:100%;height:auto;max-width:640px;display:block;margin:4px auto 0\" role=\"img\" aria-label=\"Square ingot cross-section. A thin outer band of tiny chill grains lines the mould wall, long columnar grains run inward perpendicular to each wall, and the centre is filled with larger equiaxed grains.\">\n<rect x=\"22\" y=\"22\" width=\"286\" height=\"286\" fill=\"none\" stroke=\"#5e5e6c\" stroke-width=\"4\"/><circle cx=\"33.0\" cy=\"37.3\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"42.9\" cy=\"35.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"53.2\" cy=\"36.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"61.0\" cy=\"36.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"71.3\" cy=\"36.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"80.1\" cy=\"36.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"89.5\" cy=\"35.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"97.1\" cy=\"36.6\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"107.1\" cy=\"34.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"116.1\" cy=\"35.9\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"125.8\" cy=\"36.9\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"132.4\" cy=\"36.0\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"143.8\" cy=\"36.6\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"151.9\" cy=\"36.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"161.7\" cy=\"37.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"169.1\" cy=\"35.5\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"179.5\" cy=\"35.5\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"186.5\" cy=\"35.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"196.3\" cy=\"35.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"206.8\" cy=\"36.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"215.2\" cy=\"37.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"222.2\" cy=\"35.3\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"232.7\" cy=\"36.0\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"241.3\" cy=\"35.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"251.7\" cy=\"34.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"259.1\" cy=\"35.5\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"269.0\" cy=\"37.3\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"277.5\" cy=\"35.0\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"286.2\" cy=\"35.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"295.1\" cy=\"35.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"293.5\" cy=\"34.6\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"294.3\" cy=\"42.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"295.2\" cy=\"52.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"295.1\" cy=\"61.9\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"294.4\" cy=\"70.5\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"294.0\" cy=\"80.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"295.3\" cy=\"88.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"294.6\" cy=\"96.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"294.3\" cy=\"106.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"293.5\" cy=\"115.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"294.9\" cy=\"125.6\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"292.8\" cy=\"134.5\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"292.7\" cy=\"142.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"293.0\" cy=\"150.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"295.5\" cy=\"159.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"294.4\" cy=\"168.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"293.9\" cy=\"178.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"292.9\" cy=\"188.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"295.2\" cy=\"197.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"295.2\" cy=\"206.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"294.8\" cy=\"213.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"292.5\" cy=\"222.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"292.7\" cy=\"231.0\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"294.4\" cy=\"240.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"294.7\" cy=\"250.5\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"294.6\" cy=\"258.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"295.1\" cy=\"267.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"293.6\" cy=\"278.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"292.9\" cy=\"286.5\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"292.5\" cy=\"296.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"295.9\" cy=\"295.3\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"285.1\" cy=\"295.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"276.6\" cy=\"295.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"268.7\" cy=\"294.5\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"258.8\" cy=\"293.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"249.6\" cy=\"294.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"240.2\" cy=\"294.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"233.1\" cy=\"294.6\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"223.5\" cy=\"292.6\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"213.3\" cy=\"295.3\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"204.4\" cy=\"294.6\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"197.7\" cy=\"292.6\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"188.6\" cy=\"295.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"180.0\" cy=\"295.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"170.3\" cy=\"293.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"159.7\" cy=\"294.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"152.6\" cy=\"293.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"141.7\" cy=\"293.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"134.7\" cy=\"294.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"124.1\" cy=\"294.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"116.2\" cy=\"293.5\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"107.2\" cy=\"293.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"96.6\" cy=\"293.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"90.0\" cy=\"295.5\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"79.9\" cy=\"295.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"71.8\" cy=\"293.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"61.9\" cy=\"292.9\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"52.5\" cy=\"294.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"44.3\" cy=\"295.3\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"34.4\" cy=\"293.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"35.8\" cy=\"294.5\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"36.5\" cy=\"286.6\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"36.2\" cy=\"277.5\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"36.8\" cy=\"268.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"36.8\" cy=\"258.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"35.4\" cy=\"250.6\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"35.1\" cy=\"242.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"35.4\" cy=\"231.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"36.5\" cy=\"223.3\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"34.7\" cy=\"215.3\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"37.0\" cy=\"206.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"37.2\" cy=\"197.0\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"37.4\" cy=\"186.1\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"36.8\" cy=\"178.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"36.7\" cy=\"170.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"34.6\" cy=\"159.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"34.7\" cy=\"150.3\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"34.8\" cy=\"141.0\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"36.3\" cy=\"134.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"35.1\" cy=\"123.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"35.1\" cy=\"116.0\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"35.2\" cy=\"106.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"37.5\" cy=\"97.3\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"36.5\" cy=\"89.3\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"35.7\" cy=\"79.2\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"34.7\" cy=\"69.7\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"36.9\" cy=\"62.9\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"35.0\" cy=\"53.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"36.0\" cy=\"42.4\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><circle cx=\"35.1\" cy=\"34.8\" r=\"3.6\" fill=\"#f3c7bd\" stroke=\"#b05040\" stroke-width=\"0.6\"/><line x1=\"42.0\" y1=\"42.0\" x2=\"101.0\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"51.5\" y1=\"42.0\" x2=\"106.0\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"60.9\" y1=\"42.0\" x2=\"110.9\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"70.4\" y1=\"42.0\" x2=\"115.8\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"79.8\" y1=\"42.0\" x2=\"120.7\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"89.3\" y1=\"42.0\" x2=\"125.6\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"98.8\" y1=\"42.0\" x2=\"130.6\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"108.2\" y1=\"42.0\" x2=\"135.5\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"117.7\" y1=\"42.0\" x2=\"140.4\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"127.2\" y1=\"42.0\" x2=\"145.3\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"136.6\" y1=\"42.0\" x2=\"150.2\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"146.1\" y1=\"42.0\" x2=\"155.2\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"155.5\" y1=\"42.0\" x2=\"160.1\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"165.0\" y1=\"42.0\" x2=\"165.0\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"174.5\" y1=\"42.0\" x2=\"169.9\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"183.9\" y1=\"42.0\" x2=\"174.8\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"193.4\" y1=\"42.0\" x2=\"179.8\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"202.8\" y1=\"42.0\" x2=\"184.7\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"212.3\" y1=\"42.0\" x2=\"189.6\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"221.8\" y1=\"42.0\" x2=\"194.5\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"231.2\" y1=\"42.0\" x2=\"199.4\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"240.7\" y1=\"42.0\" x2=\"204.4\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"250.2\" y1=\"42.0\" x2=\"209.3\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"259.6\" y1=\"42.0\" x2=\"214.2\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"269.1\" y1=\"42.0\" x2=\"219.1\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"278.5\" y1=\"42.0\" x2=\"224.0\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"42.0\" x2=\"229.0\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"42.0\" x2=\"229.0\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"51.5\" x2=\"229.0\" y2=\"106.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"60.9\" x2=\"229.0\" y2=\"110.9\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"70.4\" x2=\"229.0\" y2=\"115.8\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"79.8\" x2=\"229.0\" y2=\"120.7\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"89.3\" x2=\"229.0\" y2=\"125.6\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"98.8\" x2=\"229.0\" y2=\"130.6\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"108.2\" x2=\"229.0\" y2=\"135.5\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"117.7\" x2=\"229.0\" y2=\"140.4\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"127.2\" x2=\"229.0\" y2=\"145.3\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"136.6\" x2=\"229.0\" y2=\"150.2\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"146.1\" x2=\"229.0\" y2=\"155.2\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"155.5\" x2=\"229.0\" y2=\"160.1\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"165.0\" x2=\"229.0\" y2=\"165.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"174.5\" x2=\"229.0\" y2=\"169.9\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"183.9\" x2=\"229.0\" y2=\"174.8\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"193.4\" x2=\"229.0\" y2=\"179.8\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"202.8\" x2=\"229.0\" y2=\"184.7\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"212.3\" x2=\"229.0\" y2=\"189.6\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"221.8\" x2=\"229.0\" y2=\"194.5\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"231.2\" x2=\"229.0\" y2=\"199.4\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"240.7\" x2=\"229.0\" y2=\"204.4\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"250.2\" x2=\"229.0\" y2=\"209.3\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"259.6\" x2=\"229.0\" y2=\"214.2\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"269.1\" x2=\"229.0\" y2=\"219.1\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"278.5\" x2=\"229.0\" y2=\"224.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"288.0\" x2=\"229.0\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"288.0\" y1=\"288.0\" x2=\"229.0\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"278.5\" y1=\"288.0\" x2=\"224.0\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"269.1\" y1=\"288.0\" x2=\"219.1\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"259.6\" y1=\"288.0\" x2=\"214.2\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"250.2\" y1=\"288.0\" x2=\"209.3\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"240.7\" y1=\"288.0\" x2=\"204.4\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"231.2\" y1=\"288.0\" x2=\"199.4\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"221.8\" y1=\"288.0\" x2=\"194.5\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"212.3\" y1=\"288.0\" x2=\"189.6\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"202.8\" y1=\"288.0\" x2=\"184.7\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"193.4\" y1=\"288.0\" x2=\"179.8\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"183.9\" y1=\"288.0\" x2=\"174.8\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"174.5\" y1=\"288.0\" x2=\"169.9\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"165.0\" y1=\"288.0\" x2=\"165.0\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"155.5\" y1=\"288.0\" x2=\"160.1\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"146.1\" y1=\"288.0\" x2=\"155.2\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"136.6\" y1=\"288.0\" x2=\"150.2\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"127.2\" y1=\"288.0\" x2=\"145.3\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"117.7\" y1=\"288.0\" x2=\"140.4\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"108.2\" y1=\"288.0\" x2=\"135.5\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"98.8\" y1=\"288.0\" x2=\"130.6\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"89.3\" y1=\"288.0\" x2=\"125.6\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"79.8\" y1=\"288.0\" x2=\"120.7\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"70.4\" y1=\"288.0\" x2=\"115.8\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"60.9\" y1=\"288.0\" x2=\"110.9\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"51.5\" y1=\"288.0\" x2=\"106.0\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"288.0\" x2=\"101.0\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"288.0\" x2=\"101.0\" y2=\"229.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"278.5\" x2=\"101.0\" y2=\"224.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"269.1\" x2=\"101.0\" y2=\"219.1\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"259.6\" x2=\"101.0\" y2=\"214.2\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"250.2\" x2=\"101.0\" y2=\"209.3\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"240.7\" x2=\"101.0\" y2=\"204.4\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"231.2\" x2=\"101.0\" y2=\"199.4\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"221.8\" x2=\"101.0\" y2=\"194.5\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"212.3\" x2=\"101.0\" y2=\"189.6\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"202.8\" x2=\"101.0\" y2=\"184.7\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"193.4\" x2=\"101.0\" y2=\"179.8\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"183.9\" x2=\"101.0\" y2=\"174.8\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"174.5\" x2=\"101.0\" y2=\"169.9\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"165.0\" x2=\"101.0\" y2=\"165.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"155.5\" x2=\"101.0\" y2=\"160.1\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"146.1\" x2=\"101.0\" y2=\"155.2\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"136.6\" x2=\"101.0\" y2=\"150.2\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"127.2\" x2=\"101.0\" y2=\"145.3\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"117.7\" x2=\"101.0\" y2=\"140.4\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"108.2\" x2=\"101.0\" y2=\"135.5\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"98.8\" x2=\"101.0\" y2=\"130.6\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"89.3\" x2=\"101.0\" y2=\"125.6\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"79.8\" x2=\"101.0\" y2=\"120.7\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"70.4\" x2=\"101.0\" y2=\"115.8\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"60.9\" x2=\"101.0\" y2=\"110.9\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"51.5\" x2=\"101.0\" y2=\"106.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><line x1=\"42.0\" y1=\"42.0\" x2=\"101.0\" y2=\"101.0\" stroke=\"#3b82e8\" stroke-width=\"1\"/><polygon points=\"124.2,114.0 114.0,121.2 102.7,120.7 97.8,110.4 105.7,96.7 120.0,101.6\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"129.2,145.4 120.2,153.6 107.2,154.9 103.2,139.2 108.5,129.0 121.7,133.7\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"123.0,163.8 115.4,174.1 101.2,173.1 97.4,162.1 107.0,150.7 120.1,152.3\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"126.4,190.5 119.9,200.1 108.5,199.5 104.2,187.2 111.6,177.9 121.0,180.4\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"130.0,215.0 120.1,226.1 107.7,224.6 103.2,212.7 111.8,200.7 126.0,201.6\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"150.3,114.5 143.7,124.6 128.8,121.8 124.1,110.1 132.9,98.0 146.8,102.6\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"155.3,138.9 146.9,149.1 132.3,148.8 127.6,135.3 137.4,127.8 149.5,129.5\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"152.1,166.8 145.1,176.8 130.6,173.4 125.9,161.7 134.8,151.6 145.6,154.2\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"151.9,193.8 142.5,203.0 131.7,201.2 125.2,189.7 132.9,181.0 145.8,180.3\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"148.7,216.9 139.9,227.4 126.8,224.3 124.7,212.1 131.0,200.5 144.9,204.2\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"175.7,114.6 167.6,123.8 154.1,121.6 148.3,107.6 155.8,99.8 170.3,101.7\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"179.7,138.8 171.2,147.7 157.8,146.1 155.7,133.2 160.2,121.1 175.9,124.2\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"175.3,163.1 166.4,175.7 156.0,171.6 150.0,161.8 158.1,152.5 171.0,152.5\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"178.5,194.0 167.7,205.5 156.2,202.8 152.3,189.0 159.5,181.1 171.2,182.0\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"180.2,215.5 170.6,229.1 159.4,227.9 156.4,213.9 162.7,203.8 176.6,203.5\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"201.9,115.1 191.6,125.9 180.6,123.3 173.2,110.7 185.0,103.6 196.2,104.1\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"203.3,145.4 195.9,153.1 182.3,152.6 177.6,141.0 184.2,130.7 199.4,131.0\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"200.3,169.2 190.3,176.6 177.9,176.9 173.2,163.2 181.1,154.7 193.4,157.2\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"200.2,189.7 191.6,200.2 178.3,200.3 176.0,187.3 182.7,176.3 198.2,177.2\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"203.3,221.8 193.5,234.9 181.1,230.1 178.3,219.2 185.7,207.4 196.6,209.8\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"230.1,116.5 221.7,124.0 209.8,122.7 204.4,110.2 215.2,102.5 225.7,103.2\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"228.5,139.0 219.5,149.7 209.1,146.1 202.4,137.0 209.8,126.1 223.4,128.1\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"231.6,167.9 224.7,176.5 213.2,176.3 208.4,163.2 217.4,155.7 227.8,156.9\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"233.2,192.7 223.1,202.3 212.4,201.6 205.9,191.0 214.1,180.1 228.2,180.8\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><polygon points=\"232.0,220.1 226.1,229.7 211.2,229.1 206.7,216.2 216.0,207.8 229.8,208.7\" fill=\"#00a87a\" fill-opacity=\"0.15\" stroke=\"#00a87a\" stroke-width=\"1\"/><line x1=\"296.0\" y1=\"65.0\" x2=\"337.0\" y2=\"80.0\" stroke=\"#90909c\" stroke-width=\"1\"/><text x=\"345.0\" y=\"76.0\" fill=\"#e04545\" font-size=\"14\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">Chill zone</text><text x=\"345.0\" y=\"94.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">fine, equiaxed, random orientation</text><text x=\"345.0\" y=\"110.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">many nuclei on the cold mould wall</text><line x1=\"265.0\" y1=\"135.0\" x2=\"337.0\" y2=\"160.0\" stroke=\"#90909c\" stroke-width=\"1\"/><text x=\"345.0\" y=\"156.0\" fill=\"#3b82e8\" font-size=\"14\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">Columnar zone</text><text x=\"345.0\" y=\"174.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">long grains, parallel to heat flow</text><text x=\"345.0\" y=\"190.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">&#8249;100&#8250; grains win the race (cubic metals)</text><line x1=\"195.0\" y1=\"195.0\" x2=\"337.0\" y2=\"240.0\" stroke=\"#90909c\" stroke-width=\"1\"/><text x=\"345.0\" y=\"236.0\" fill=\"#00a87a\" font-size=\"14\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\" font-weight=\"700\">Central equiaxed zone</text><text x=\"345.0\" y=\"254.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">coarse, equiaxed, random orientation</text><text x=\"345.0\" y=\"270.0\" fill=\"#90909c\" font-size=\"12\" text-anchor=\"start\" font-family=\"Inter,system-ui,sans-serif\">few nuclei, slow cooling, mostly in alloys</text>\n</svg>\n</div>"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Chill zone",
              "color": "#e03f78",
              "text": "The mould is much colder than the melt. On pouring, the liquid touching the wall is highly undercooled, so a large number of nuclei form there. Some are swept into the hot melt by pouring and convection and melt back. Survivors impinge on each other quickly: <strong>very fine, equiaxed, randomly oriented</strong> grains of similar size."
            },
            {
              "title": "Columnar zone",
              "color": "#e03f78",
              "text": "Nucleation releases latent heat and stops further nucleation. Heat now leaves through the solid and mould wall, so the chill crystals grow inward along the heat flow. Grains whose favoured direction (&#8249;100&#8250; cubic, &#8249;10&#772;10&#8250; hcp) lies close to the heat flow win the race and crowd out the rest. Except in very pure metals, growth is cellular or dendritic."
            },
            {
              "title": "Central equiaxed zone",
              "color": "#e03f78",
              "text": "Solid growing in the bulk melt ahead of the columnar front, once the melt has cooled below its liquidus. A network of equiaxed grains <strong>blocks</strong> the columnar grains. Fewer nuclei and slow cooling, so the grains are <strong>coarse</strong>. Rarely seen in pure metals, where the columnar zone can run to the centre."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Where do the central equiaxed grains come from?",
          "html": "<ul><li><strong>Nuclei from the chill zone</strong> carried into the melt that survive once it has cooled enough</li><li><strong>Independent nucleation</strong> on impurity particles in the constitutionally supercooled liquid ahead of the columnar front (the reason this zone is an alloy feature)</li><li><strong>Detached dendrite arms</strong> broken off columnar dendrites by convection, which drift to the centre and grow</li><li>(In some cases, crystals showering down from the top surface, which cools in contact with air)</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Problems with the ingot structure",
          "html": "<ul><li>Inhomogeneous microstructure and properties across the section</li><li><strong>Anisotropic</strong> mechanical properties from the long columnar grains</li><li>Large grain size, so poor mechanical performance (Hall-Petch, Unit 6)</li><li>Macro- and microsegregation</li><li>Shrinkage porosity and <strong>hot tearing</strong>, because liquid cannot feed through the columnar network in the final stages</li></ul><p style=\"margin-top:8px\">A fine, equiaxed, uniform structure fixes most of these: it feeds liquid better, spreads porosity out, and largely removes hot tearing and segregation. Achieving it is one of the casting industry's top priorities.</p>"
        },
        {
          "type": "h2",
          "id": "u7-fix",
          "text": "Getting Rid of the Ingot Structure"
        },
        {
          "type": "raw",
          "html": "<div class=\"concept-box\"><div class=\"concept-box-title\">Three routes compared</div><div style=\"overflow-x:auto\"><table style=\"width:100%;border-collapse:collapse;font-size:14px;margin:6px 0\"><thead><tr><th style=\"text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--text)\"></th><th style=\"text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--text)\">Chemical refinement</th><th style=\"text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--text)\">Low superheat casting</th><th style=\"text-align:left;padding:7px 10px;border-bottom:2px solid var(--border);color:var(--text)\">Physical refinement (external field)</th></tr></thead><tbody><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">How</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Inoculant particles nucleate grains everywhere</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Pour close to the liquidus so more melt is undercooled and chill crystals survive</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Strong forced convection (stirring, shearing, fields, ultrasound) during solidification</td></tr><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Works for</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Specific alloys only</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Small castings</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Any alloy (universal)</td></tr><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Main drawback</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Poisoning, fading, leftover particles, re-addition after remelting</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Low fluidity, incomplete mould filling, poor in large castings; hardly used</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Equipment and scale-up; still largely research and development</td></tr><tr><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Industrial status</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">The standard industrial solution</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Rarely practised</td><td style=\"padding:7px 10px;border-bottom:1px solid var(--border-soft);vertical-align:top\">Emerging (ultrasound most promising)</td></tr></tbody></table></div></div>"
        },
        {
          "type": "h3",
          "text": "Chemical grain refinement: why it is not enough"
        },
        {
          "type": "list",
          "items": [
            "Many important alloys have <strong>no chemical refiner</strong> because of poisoning (e.g. Al-Si, Mg-Al)",
            "It stops working if the alloy is <strong>remelted</strong>, so more must be added (cost, composition drift)",
            "It stops working if the melt is <strong>held</strong> before casting (fading)",
            "Only about <strong>1%</strong> of the particles nucleate grains (0.1 to 1% in the notes). The rest segregate as stress raisers and worsen fatigue"
          ]
        },
        {
          "type": "h3",
          "text": "Low superheat casting"
        },
        {
          "type": "p",
          "text": "With <strong>high superheat</strong>, chill crystals formed on pouring are stripped off by convection and dissolve in the hot melt. With <strong>low superheat</strong>, most of the melt becomes undercooled on contact with the mould, many more chill crystals form, and they survive to fill the casting with equiaxed grains. It can remove the columnar zone in small castings (e.g. Sn-15 wt% Pb cast with 15 &#176;C rather than 125 &#176;C superheat) but loses effectiveness in large ones.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Physical grain refinement"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "External fields used",
              "color": "#e03f78",
              "text": "Intense mechanical stirring or shearing, magnetohydrodynamic (MHD) flow, DC magnetic fields, mould vibration, electric current pulses, high-intensity ultrasound."
            },
            {
              "title": "Why they refine",
              "color": "#e03f78",
              "text": "Strong fluid flow; temperature homogenisation (latent heat dispersed); particle coarsening (less constitutional undercooling); <strong>dendrite fragmentation</strong> (a grain multiplier); dispersion of nucleants; enhanced heterogeneous nucleation (ultrasound)."
            },
            {
              "title": "Advantages",
              "color": "#e03f78",
              "text": "Universal (any alloy). No insoluble particles added, so melt cleanliness and fatigue performance are preserved."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "High-intensity ultrasound",
          "html": "<ul><li>Gives very strong convection <strong>and</strong> pressure pulses of around <strong>1000 atm</strong> (cavitation)</li><li>The pressure shifts the equilibrium melting point and forces the melt to wet insoluble particles, so heterogeneous nucleation is enhanced</li><li>In pure Al and Al-10% Cu it gives finer grains than Al-5Ti-1B inoculation</li><li><strong>Al-Si:</strong> refines the primary \\(\\alpha\\)-Al, the Si particles and the eutectic together, which chemical refiners cannot do (and Al-Ti-B is poisoned by Si anyway)</li><li><strong>Recycled Al (cans to cars):</strong> Fe impurities form a \"Chinese script\" Al-Si-Fe intermetallic that lowers toughness. Ultrasound turns it into compact particles, improving fracture toughness, strength and ductility</li><li><strong>Al-Zr peritectic:</strong> Al\\(_3\\)Zr refines Al but tends to settle. Ultrasound applied early in the liquid refines and disperses the Al\\(_3\\)Zr and slows settling, giving stronger refinement</li></ul>"
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Industry uses chemical refiners because they are easy. Physical methods, ultrasound above all, work on any alloy and leave the melt clean.</p>"
        },
        {
          "type": "h2",
          "id": "u7-cases",
          "text": "Case Studies"
        },
        {
          "type": "h3",
          "text": "Gas turbine blades"
        },
        {
          "type": "p",
          "text": "The hottest parts of a jet engine run in gas hotter than their own melting point, under huge centrifugal load, for thousands of hours. The failure mode is <strong>creep</strong>, and creep in these alloys concentrates at grain boundaries, especially those lying across the stress. Ti alloys serve the cooler fan blades; Ni superalloys keep their strength to the highest temperatures and are used in the turbine.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Equiaxed (conventionally cast)",
              "color": "#e03f78",
              "text": "Grain boundaries in every direction, including across the blade axis. Lowest creep resistance."
            },
            {
              "title": "Directionally solidified (DS)",
              "color": "#e03f78",
              "text": "Heat removed from one end through a water-cooled chill as the mould is withdrawn from the furnace. Columnar grains run along the blade, so no boundaries lie across the main stress."
            },
            {
              "title": "Single crystal (SC)",
              "color": "#e03f78",
              "text": "A helical <strong>single crystal selector</strong> above the chill lets only one grain through into the blade. No grain boundaries at all: the highest temperature capability."
            }
          ]
        },
        {
          "type": "p",
          "text": "This is the ingot lesson used deliberately: columnar growth, normally a defect, is controlled until only one grain survives. The blades are made by <strong>investment casting</strong> (the lost-wax process): wax pattern <strong>assembly</strong>, <strong>investing</strong> in ceramic slurry, <strong>stuccoing</strong>, <strong>dewaxing</strong>, <strong>firing</strong> the shell, <strong>pouring</strong>, <strong>knockout</strong> of the shell and <strong>finishing</strong>. The lecture's chart shows blade temperature capability rising steadily from wrought to conventionally cast, DS and finally SC alloys.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Metallic glass"
        },
        {
          "type": "p",
          "text": "Cool a melt fast enough and nucleation never gets the chance to happen: the atoms are frozen in their disordered liquid arrangement. In <strong>melt spinning</strong>, a jet of molten alloy hits a spinning cooled wheel and solidifies as a thin ribbon at cooling rates of the order of a million kelvin per second.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Structure",
              "color": "#e03f78",
              "text": "Disordered, glassy (liquid-like). <strong>No crystals, no grain boundaries, no dislocations.</strong>"
            },
            {
              "title": "Properties",
              "color": "#e03f78",
              "text": "Very high strength and <strong>resilience</strong> (ability to store elastic energy), from a large elastic limit (around 2%, roughly ten times a crystalline metal). Good corrosion resistance."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "tip",
          "title": "In one line",
          "html": "<p>Turbine blades control growth until one grain is left; metallic glass prevents nucleation so no grain forms at all. Both are solidification control taken to the limit.</p>"
        }
      ]
    },
    {
      "soon": true,
      "numLabel": "Unit 8",
      "title": "Metalforming (Hot and Cold Work)",
      "desc": "Coming soon — added once covered in lectures.",
      "color": "#2fa15c",
      "sections": []
    },
    {
      "soon": true,
      "numLabel": "Unit 9",
      "title": "The Fe-C System",
      "desc": "Coming soon — added once covered in lectures.",
      "color": "#3b82e8",
      "sections": []
    },
    {
      "soon": true,
      "numLabel": "Unit 10",
      "title": "Precipitation Strengthening",
      "desc": "Coming soon — added once covered in lectures.",
      "color": "#8855f5",
      "sections": []
    }
  ],
  "extraSections": null,
  "formulaSheet": [
    {
      "heading": "U1 — Introduction to Thermodynamics",
      "blocks": [
        {
          "type": "formulablock",
          "name": "First law of thermodynamics",
          "eqs": [
            "Q = \\Delta U + W \\qquad \\Delta U = Q - P\\Delta V"
          ]
        },
        {
          "type": "formulablock",
          "name": "Enthalpy",
          "eqs": [
            "H = U + PV \\qquad \\Delta H = Q \\text{ (at constant P)} \\qquad \\Delta H \\approx \\Delta U \\text{ (solid/liquid)}"
          ]
        },
        {
          "type": "formulablock",
          "name": "Gibbs free energy",
          "eqs": [
            "G = H - TS"
          ]
        },
        {
          "type": "formulablock",
          "name": "Equilibrium & transformation conditions",
          "eqs": [
            "\\Delta G = 0 \\text{ (equilibrium)} \\qquad \\Delta G = \\Delta H - T\\Delta S < 0 \\text{ (transformation occurs)}"
          ]
        },
        {
          "type": "formulablock",
          "name": "Heat capacity",
          "eqs": [
            "C_P = \\left(\\frac{\\partial Q}{\\partial T}\\right)_P = \\left(\\frac{\\partial H}{\\partial T}\\right)_P"
          ]
        },
        {
          "type": "formulablock",
          "name": "ΔH and ΔS from C_P",
          "eqs": [
            "\\Delta H = \\int C_P \\, dT \\qquad \\Delta S = \\int \\frac{C_P}{T} \\, dT"
          ],
          "vars": [
            {
              "symbol": "Ref.",
              "desc": "H = 0 at 298 K; S = 0 at 0 K (third law)"
            }
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
    },
    {
      "heading": "U5 - Limitations of Thermodynamics (Kinetics)",
      "blocks": [
        {
          "type": "formulablock",
          "name": "Arrhenius rate law",
          "eqs": [
            "\\text{rate} \\propto \\exp\\left(-\\frac{\\Delta G_a}{kT}\\right) = \\exp\\left(-\\frac{\\Delta H_a}{RT}\\right)"
          ],
          "vars": [
            {
              "symbol": "\\(k\\)",
              "desc": "\\(1.38 \\times 10^{-23}\\) J K\\(^{-1}\\), per atom"
            },
            {
              "symbol": "\\(R\\)",
              "desc": "\\(8.314\\) J mol\\(^{-1}\\) K\\(^{-1}\\), per mole"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Fick's first law (steady state)",
          "eqs": [
            "J = -D\\,\\frac{\\partial C}{\\partial x}"
          ],
          "vars": [
            {
              "symbol": "Units",
              "desc": "\\(J\\): quantity m\\(^{-2}\\) s\\(^{-1}\\); \\(D\\): m\\(^2\\) s\\(^{-1}\\)"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Diffusivity",
          "eqs": [
            "D = D_0\\exp\\left(-\\frac{\\Delta H_a}{RT}\\right)"
          ],
          "vars": []
        },
        {
          "type": "formulablock",
          "name": "Fick's second law (transient)",
          "eqs": [
            "\\frac{\\partial C}{\\partial t} = D\\,\\frac{\\partial^2 C}{\\partial x^2}"
          ],
          "vars": []
        }
      ]
    },
    {
      "heading": "U6 - Solidification: Nucleation",
      "blocks": [
        {
          "type": "formulablock",
          "name": "Driving force",
          "eqs": [
            "\\Delta G \\approx -\\frac{L\\Delta T}{T_m} \\qquad \\Delta G_V \\approx -\\frac{L_V\\Delta T}{T_m}"
          ],
          "vars": [
            {
              "symbol": "\\(\\Delta T\\)",
              "desc": "\\(T_m - T\\)"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Homogeneous nucleus",
          "eqs": [
            "\\Delta G_r = \\tfrac{4}{3}\\pi r^3\\Delta G_V + 4\\pi r^2\\gamma_{SL}"
          ],
          "vars": []
        },
        {
          "type": "formulablock",
          "name": "Critical radius",
          "eqs": [
            "r^* = -\\frac{2\\gamma_{SL}}{\\Delta G_V} = \\left(\\frac{2\\gamma_{SL}T_m}{L_V}\\right)\\frac{1}{\\Delta T}"
          ],
          "vars": []
        },
        {
          "type": "formulablock",
          "name": "Nucleation barrier",
          "eqs": [
            "\\Delta G^* = \\frac{16\\pi\\gamma_{SL}^3}{3(\\Delta G_V)^2} = \\left(\\frac{16\\pi\\gamma_{SL}^3T_m^2}{3L_V^2}\\right)\\frac{1}{(\\Delta T)^2}"
          ],
          "vars": []
        },
        {
          "type": "formulablock",
          "name": "Contact angle (spherical cap)",
          "eqs": [
            "\\gamma_{ML} = \\gamma_{SM} + \\gamma_{SL}\\cos\\theta"
          ],
          "vars": []
        },
        {
          "type": "formulablock",
          "name": "Heterogeneous nucleation",
          "eqs": [
            "\\Delta G^*_{het} = \\Delta G^*_{hom}\\,S(\\theta) \\qquad r^*_{het} = r^*_{hom} \\qquad S(\\theta) = \\frac{(2 + \\cos\\theta)(1 - \\cos\\theta)^2}{4}"
          ],
          "vars": [
            {
              "symbol": "Values",
              "desc": "\\(S(10^\\circ) = 0.00017\\), \\(S(30^\\circ) = 0.013\\), \\(S(90^\\circ) = 0.5\\), \\(S(180^\\circ) = 1\\)"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Hall-Petch",
          "eqs": [
            "\\sigma_y = \\sigma_0 + \\frac{k}{\\sqrt{d}}"
          ],
          "vars": []
        }
      ]
    },
    {
      "heading": "U7 - Solidification: Growth",
      "blocks": [
        {
          "type": "formulablock",
          "name": "Partition coefficient",
          "eqs": [
            "k = \\frac{X_S}{X_L}"
          ],
          "vars": []
        },
        {
          "type": "formulablock",
          "name": "Compositions at an alloy front",
          "eqs": [
            "X_S^{\\text{first}} = kX_0 \\qquad X_L^{\\text{interface}} = \\frac{X_0}{k}\\ \\text{(steady state)}"
          ],
          "vars": [
            {
              "symbol": "Interface temperature",
              "desc": "Steady state: the solidus temperature of \\(X_0\\)"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Planar front stability",
          "eqs": [
            "G_{\\text{actual}} \\ge \\left.\\frac{dT_L}{dx}\\right|_{x=0} \\ \\Rightarrow\\ \\text{planar}"
          ],
          "vars": [],
          "note": "Lecture statement: the actual gradient must exceed the critical (liquidus) gradient. Textbook form, not lectured: \\(G_L/v \\ge \\Delta T_0/D_L\\)."
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
    },
    {
      "heading": "Unit 5 - Limitations of Thermodynamics",
      "items": [
        {
          "tag": "U5 - T1",
          "claim": "\"A slowly cooled alloy always matches the phase diagram, so coring cannot happen in castings.\"",
          "truth": "<strong>FALSE.</strong> Normal casting rates are far too fast for solid-state diffusion to keep up. Coring is the normal state of an as-cast alloy; the diagram's uniform 35 wt% Ni grain needs near-infinite time."
        },
        {
          "tag": "U5 - T2",
          "claim": "\"In a cored Cu-35 wt% Ni alloy solidification finishes at the equilibrium solidus.\"",
          "truth": "<strong>FALSE.</strong> Because the average solid is Ni-richer than the current solidus, liquid remains below the equilibrium solidus. On the slide, solidification ends at about 1205 &#176;C, not at about 1220 &#176;C."
        },
        {
          "tag": "U5 - T3",
          "claim": "\"Homogenising should be done just above the solidus so diffusion is as fast as possible.\"",
          "truth": "<strong>FALSE.</strong> Homogenising is done at an elevated temperature <strong>below</strong> the solidus. Above it the alloy would partially melt."
        },
        {
          "tag": "U5 - T4",
          "claim": "\"A transformation with a large driving force will be fast.\"",
          "truth": "<strong>FALSE.</strong> Rate is set by the activation energy and temperature (Arrhenius), not by \\(\\Delta G\\). Diamond to graphite is favourable but effectively never happens."
        },
        {
          "tag": "U5 - T5",
          "claim": "\"\\(\\exp(-\\Delta G_a/kT)\\) and \\(\\exp(-\\Delta H_a/RT)\\) give different answers.\"",
          "truth": "<strong>FALSE.</strong> They are the same law: \\(k\\) is per atom, \\(R\\) per mole, \\(R = N_A k\\). They only differ if you put a per-mole energy over \\(kT\\) or a per-atom one over \\(RT\\)."
        },
        {
          "tag": "U5 - T6",
          "claim": "\"Diffusivity D has units of m\\(^{-2}\\) s\\(^{-1}\\).\"",
          "truth": "<strong>FALSE.</strong> That appears on the slide but is a typo. From \\(J = -D\\,\\partial C/\\partial x\\), \\(D\\) is m\\(^2\\) s\\(^{-1}\\)."
        },
        {
          "tag": "U5 - T7",
          "claim": "\"In steady-state diffusion the concentration at each point changes linearly with time.\"",
          "truth": "<strong>FALSE.</strong> In steady state the concentration at each point does not change with time at all. It is the profile across the material that is linear (in distance)."
        },
        {
          "tag": "U5 - T8",
          "claim": "\"Vacancy diffusion is faster than interstitial diffusion because vacancies give atoms more room.\"",
          "truth": "<strong>FALSE.</strong> Interstitial diffusion is faster: interstitial sites are almost always free, while vacancy diffusion must wait for a vacancy next to the atom."
        },
        {
          "tag": "U5 - T9",
          "claim": "\"Atoms always diffuse from high to low concentration.\"",
          "truth": "<strong>FALSE.</strong> They diffuse down the chemical potential gradient. In spinodal decomposition that is <strong>up</strong> the concentration gradient (uphill diffusion)."
        },
        {
          "tag": "U5 - T10",
          "claim": "\"Diffusion stops when the concentration is the same everywhere.\"",
          "truth": "<strong>FALSE.</strong> It stops when the <strong>chemical potential</strong> of each component is the same everywhere. In a two-phase alloy at equilibrium the phases have different compositions but equal chemical potentials."
        }
      ]
    },
    {
      "heading": "Unit 6 - Solidification: Nucleation",
      "items": [
        {
          "tag": "U6 - T1",
          "claim": "\"A pure liquid metal starts to freeze as soon as it reaches \\(T_m\\).\"",
          "truth": "<strong>FALSE.</strong> At \\(T_m\\) the driving force is zero. Some undercooling is always needed for nucleation; homogeneously about 0.2\\(T_m\\), heterogeneously a few K or less."
        },
        {
          "tag": "U6 - T2",
          "claim": "\"The temperature rise after nucleation on a cooling curve means the melt is being reheated by the furnace.\"",
          "truth": "<strong>FALSE.</strong> It is recalescence: latent heat released by the new crystals. It stops further nucleation, and the rest of solidification is growth."
        },
        {
          "tag": "U6 - T3",
          "claim": "\"Embryos smaller than \\(r^*\\) are stable but grow slowly.\"",
          "truth": "<strong>FALSE.</strong> Below \\(r^*\\) adding atoms raises the free energy, so embryos are unstable and dissolve back into the liquid."
        },
        {
          "tag": "U6 - T4",
          "claim": "\"Doubling the undercooling halves the nucleation barrier.\"",
          "truth": "<strong>FALSE.</strong> \\(\\Delta G^* \\propto 1/\\Delta T^2\\), so doubling the undercooling cuts the barrier to a quarter. It is \\(r^*\\) that halves."
        },
        {
          "tag": "U6 - T5",
          "claim": "\"Heterogeneous nucleation is easier because the critical radius is smaller.\"",
          "truth": "<strong>FALSE.</strong> The critical radius is the <strong>same</strong>. The barrier falls by \\(S(\\theta)\\) because the cap is only a slice of the sphere and needs far fewer atoms."
        },
        {
          "tag": "U6 - T6",
          "claim": "\"A larger contact angle gives better heterogeneous nucleation.\"",
          "truth": "<strong>FALSE.</strong> Smaller angle means better wetting, smaller \\(S(\\theta)\\) and a lower barrier. At 180&#176; the surface gives no help at all."
        },
        {
          "tag": "U6 - T7",
          "claim": "\"Homogeneous nucleation is common in industrial casting because melts are kept very clean.\"",
          "truth": "<strong>FALSE.</strong> In practical casting nucleation is always heterogeneous. Real castings nucleate at about 1 K of undercooling, far below the hundreds of kelvin needed homogeneously."
        },
        {
          "tag": "U6 - T8",
          "claim": "\"Mould walls are efficient nucleation sites, so inoculants are unnecessary.\"",
          "truth": "<strong>FALSE.</strong> Mould walls and oxide particles have large contact angles and are inefficient. Well-matched inoculant particles are what give fine grains."
        },
        {
          "tag": "U6 - T9",
          "claim": "\"Most of the particles added in an Al-5Ti-1B master alloy each nucleate a grain.\"",
          "truth": "<strong>FALSE.</strong> Under 1% do. The rest stay in the casting as agglomerates and can hurt fatigue, corrosion and machinability."
        },
        {
          "tag": "U6 - T10",
          "claim": "\"Al-5Ti-1B works for every aluminium alloy.\"",
          "truth": "<strong>FALSE.</strong> It is poisoned in Al-Si alloys. Likewise Zr does not refine Mg-Al alloys."
        }
      ]
    },
    {
      "heading": "Unit 7 - Solidification: Growth",
      "items": [
        {
          "tag": "U7 - T1",
          "claim": "\"A planar front in a pure metal is unstable when growing from the mould wall into superheated liquid.\"",
          "truth": "<strong>FALSE.</strong> When the liquid is hotter than the solid, a bump melts back, so the planar front is stable. Instability needs liquid colder than \\(T_m\\), i.e. heat flowing into the liquid."
        },
        {
          "tag": "U7 - T2",
          "claim": "\"Thermal dendrites are clearly visible in a polished section of a fully solid pure metal.\"",
          "truth": "<strong>FALSE.</strong> Each dendrite fills in to a polygonal grain, so in a pure metal the dendritic shape is not visible after solidification."
        },
        {
          "tag": "U7 - T3",
          "claim": "\"Constitutional supercooling can only happen when the liquid is colder than the solid.\"",
          "truth": "<strong>FALSE.</strong> It happens with liquid hotter than the solid. The liquid only has to be below its own <em>local liquidus</em>, which the solute pile-up lowers."
        },
        {
          "tag": "U7 - T4",
          "claim": "\"In steady-state alloy growth the liquid at the interface has the bulk composition \\(X_0\\).\"",
          "truth": "<strong>FALSE.</strong> The solid forming has composition \\(X_0\\), so the interface liquid is enriched to \\(X_0/k\\). The bulk \\(X_0\\) is only reached away from the front."
        },
        {
          "tag": "U7 - T5",
          "claim": "\"Free dendritic growth happens at the mould wall where cooling is fastest.\"",
          "truth": "<strong>FALSE.</strong> Columnar dendrites grow from the mould wall (positive gradient, directional heat flow). Free dendrites grow in the centre, where the gradient is negative."
        },
        {
          "tag": "U7 - T6",
          "claim": "\"An atomically rough interface gives a rough, faceted crystal.\"",
          "truth": "<strong>FALSE.</strong> Atomically <strong>smooth</strong> (interface-controlled) gives faceted crystals. Atomically rough (diffusion-controlled) gives smooth, rounded crystals."
        },
        {
          "tag": "U7 - T7",
          "claim": "\"The central equiaxed zone forms from the chill crystals only.\"",
          "truth": "<strong>FALSE.</strong> Three sources: surviving chill crystals, independent nucleation in constitutionally supercooled liquid, and dendrite arms broken off by convection."
        },
        {
          "tag": "U7 - T8",
          "claim": "\"A pure metal ingot always shows a large central equiaxed zone.\"",
          "truth": "<strong>FALSE.</strong> In pure metals the columnar zone often runs to the centre. The central equiaxed zone mainly relies on constitutional supercooling, an alloy effect."
        },
        {
          "tag": "U7 - T9",
          "claim": "\"Casting with high superheat helps produce fine equiaxed grains.\"",
          "truth": "<strong>FALSE.</strong> High superheat remelts chill crystals swept into the bulk. <strong>Low</strong> superheat lets them survive, though it hurts fluidity and mould filling."
        },
        {
          "tag": "U7 - T10",
          "claim": "\"Physical grain refinement, like inoculation, only works for specific alloy systems.\"",
          "truth": "<strong>FALSE.</strong> Physical methods are universal and add no insoluble particles. Being alloy-specific is a limitation of chemical refinement."
        },
        {
          "tag": "U7 - T11",
          "claim": "\"Single crystal turbine blades are used because they are stronger at room temperature.\"",
          "truth": "<strong>FALSE.</strong> The point is high-temperature <strong>creep</strong> resistance: removing grain boundaries, especially those across the stress, where creep damage concentrates."
        }
      ]
    }
  ],
  "trapsSubtitle": "Plausible-but-wrong claims the exam uses. Read each one. Know what's actually true.",
  "glossaryIntro": "Search across all terms instantly. Filter by unit."
};
