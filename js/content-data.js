// EG2038 Study Site — content data
// Schema documented in study-site-core/js/render.js
window.SITE_CONFIG = {
  "slug": "eg2038",
  "topicIds": ["u1"],
  "navOrder": ["u1"],
  "topicColors": {
    "u1": "#00a87a"
  },
  "topicLabels": {
    "u1": "Intro to Thermodynamics"
  }
};

window.SITE_CONTENT = {
  "home": {
    "tag": "Microstructure Evolution & Control in Metallic Materials — Swansea University",
    "title": "EG2038 Study Site",
    "subtitle": "Thermodynamics and kinetics as the twin forces behind every microstructure: why phases form, when they're stable, and how alloying, processing and heat treatment control the properties that follow. Built out unit by unit as the module runs.",
    "stats": [
      { "value": "1 of 10", "label": "Units built" },
      { "value": "28", "label": "Terms" },
      { "value": "8", "label": "Formulas" },
      { "value": "10", "label": "Exam Traps" }
    ],
    "extra": [
      { "type": "raw", "html": "<h2>Quick reference</h2>" },
      {
        "type": "raw",
        "html": "<div class=\"card-grid\">\n      <div class=\"topic-card\" onclick=\"showSection('formulas')\" style=\"--bar-color:#00a87a\">\n        <div class=\"topic-num\">Reference</div>\n        <div class=\"topic-title\">📐 Formula Sheet</div>\n        <div class=\"topic-desc\">Every equation covered so far. Variables defined, units flagged.</div>\n      </div>\n      <div class=\"topic-card\" onclick=\"showSection('glossary')\" style=\"--bar-color:#2fa15c\">\n        <div class=\"topic-num\">Reference</div>\n        <div class=\"topic-title\">📚 Glossary</div>\n        <div class=\"topic-desc\">28 terms from Unit 1. Instant search, topic filter, and flashcard mode.</div>\n      </div>\n      <div class=\"topic-card\" onclick=\"showSection('traps')\" style=\"--bar-color:#e04545\">\n        <div class=\"topic-num\">Reference</div>\n        <div class=\"topic-title\">⚠️ MCQ Traps</div>\n        <div class=\"topic-desc\">Plausible-but-wrong claims the exam uses. Know what's actually true.</div>\n      </div>\n    </div>"
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
    { "soon": true, "numLabel": "Unit 2", "title": "Solution Thermodynamics", "desc": "Coming soon — added once covered in lectures.", "color": "#3b82e8", "sections": [] },
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
    }
  ],
  "trapsSubtitle": "Plausible-but-wrong claims the exam uses. Read each one. Know what's actually true.",
  "glossaryIntro": "Search across all terms instantly. Filter by unit."
};
