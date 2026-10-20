/* EG2038 Glossary Data — all terms across all units */

const glossaryData = {
  u1: {
    name: "Unit 1 — Introduction to Thermodynamics",
    terms: [
      ["System", "The macroscopic part of the universe being investigated. In metallurgical thermodynamics, the alloy system involving all its phases"],
      ["Surrounding", "Whatever is around the system and interacts with it"],
      ["Isolated system", "A system that does not interact with its surrounding at all — no mass, no energy exchange"],
      ["Open system", "A system that exchanges both mass and energy with its surrounding"],
      ["Closed system", "A system that exchanges energy, but not mass, with its surrounding"],
      ["State variables", "Physical quantities defining the state of a system (temperature, pressure, volume, composition, etc.)"],
      ["Intensive variable", "A state variable independent of the size of the system, e.g. temperature, pressure, composition"],
      ["Extensive variable", "A state variable that depends on the size of the system, e.g. volume, mass, total energy"],
      ["Phase", "A portion of a system with homogeneous properties and composition, physically distinct from other parts of the system"],
      ["Component", "The minimum number of chemical species needed to build up all the phases in a system"],
      ["Composition", "The relative quantities of each component present in a system"],
      ["Microstructure", "The nature, morphology, proportion and distribution of the phases present in an alloy"],
      ["Grain", "A volume of phase distinguishable from the rest of that phase by its crystal orientation"],
      ["(Equilibrium) phase diagram", "A composition-vs-temperature plot identifying the equilibrium phases present in a system"],
      ["Phase transformation", "The conversion of one or more phases in an alloy into a new phase or mixture of phases, occurring to increase phase stability"],
      ["Equilibrium", "A state of stability where no further change is possible under the specified conditions. All systems move towards equilibrium if left undisturbed"],
      ["Metastable state", "A local (not global) energy minimum. Stable against small disturbances, but can transform to a lower-energy state if it acquires enough energy to cross the activation energy barrier"],
      ["Activation energy", "The energy barrier that must be overcome to move a system from a metastable state to a more stable one"],
      ["Driving force (thermodynamic)", "The drop in free energy between a metastable (or unstable) state and the stable state it can transform into — what makes a transformation thermodynamically favourable"],
      ["Kinetics", "The study of the rate at which a thermodynamically feasible change actually proceeds — distinct from whether it happens at all"],
      ["Heat (Q)", "Energy in transit — the transfer of thermal energy between a system and its surroundings without involving mechanical work"],
      ["Work (W)", "Energy transfer by the action of a force; for a system at pressure P undergoing a volume change ΔV, W = PΔV"],
      ["Internal energy (U)", "The total potential energy (bonding, electrostatic interaction) and kinetic energy (motion) of the atoms or molecules in a system"],
      ["Enthalpy (H)", "A measure of the heat content of a system, H = U + PV. At constant pressure, the heat absorbed or released in a transformation equals ΔH"],
      ["Entropy (S)", "A measure of the disorder in a system. By the second law, the entropy of a closed system increases in any spontaneous process"],
      ["Gibbs free energy (G)", "The thermodynamic potential G = H − TS that determines phase stability at constant temperature and pressure. The stable state has the lowest G; a transformation occurs only if ΔG < 0"],
      ["Heat capacity (C)", "The quantity of heat required to raise the temperature of a substance by one degree; specific heat capacity is heat capacity per unit mass, commonly measured by DSC calorimetry"],
      ["Third law of thermodynamics", "States that the entropy of a perfect crystal is zero at absolute zero (0 K); this provides the reference point used to calculate absolute entropy at any other temperature"]
    ]
  },
  u2: {
    name: "Unit 2 - Solution Thermodynamics",
    terms: [
      ["Mole fraction", "The fraction of the atoms (moles) in a mixture that are of one component. For a binary alloy \\(X_A + X_B = 1\\)"],
      ["Molar free energy", "Free energy per mole of material. The unit-2 graphs of \\(G\\) against \\(X_B\\) all use molar free energy"],
      ["Free energy of mixing", "\\(\\Delta G_{\\mathrm{mix}} = \\Delta H_{\\mathrm{mix}} - T\\Delta S_{\\mathrm{mix}}\\). The change in free energy when pure A and B form a solution. Negative means mixing is favourable"],
      ["Enthalpy of mixing (heat of solution)", "\\(\\Delta H_{\\mathrm{mix}}\\). Heat released (negative) or absorbed (positive) when A and B mix, caused by the change in bonding"],
      ["Entropy of mixing", "\\(\\Delta S_{\\mathrm{mix}}\\). The increase in entropy on mixing, from the extra ways to arrange the atoms. Always positive"],
      ["Configurational entropy", "The part of the entropy that comes from the number of different ways the atoms can be arranged, as opposed to thermal entropy"],
      ["Boltzmann equation", "\\(S = k\\ln\\omega\\). Links entropy to \\(\\omega\\), the number of ways of arranging the system"],
      ["Ideal solution", "A solution where A-A, B-B and A-B bonds have equal energy, so \\(\\Delta H_{\\mathrm{mix}} = 0\\) and mixing is driven purely by entropy"],
      ["Regular solution", "A solution with unequal bond energies, giving \\(\\Delta H_{\\mathrm{mix}} = \\Omega X_A X_B\\), while entropy of mixing stays the same as in the ideal case"],
      ["Bond energy parameter (ε)", "\\(\\varepsilon = E_{AB} - \\tfrac12(E_{AA}+E_{BB})\\). Negative means A-B bonds are preferred; positive means like-atom bonds are preferred"],
      ["Regular solution parameter (Ω)", "\\(\\Omega = N_a z\\varepsilon\\). The bond energy parameter scaled to one mole, with \\(z\\) the number of bonds per atom. Same sign as \\(\\varepsilon\\)"],
      ["Ordering", "A tendency for unlike atoms to sit next to each other (A-B bonds), which happens when \\(\\varepsilon < 0\\)"],
      ["Clustering", "A tendency for like atoms to group together (A-A and B-B bonds), which happens when \\(\\varepsilon > 0\\) at low temperature"],
      ["Miscibility gap", "A composition range, at a given temperature, where a single mixed phase is unstable and the alloy splits into two phases of the same crystal structure but different composition (\\(\\alpha' + \\alpha''\\)). It comes from a positive \\(\\Delta H_{\\mathrm{mix}}\\), which puts a hump in the \\(\\Delta G_{\\mathrm{mix}}\\) curve, and it appears on a phase diagram as a dome-shaped two-phase region"],
      ["Substitutional alloy", "A solid solution where solute atoms replace solvent atoms on lattice sites. Occurs when atomic sizes are similar, e.g. brass (Cu-Zn)"],
      ["Interstitial alloy", "A solid solution where small solute atoms sit in the gaps between solvent atoms, e.g. carbon in iron (steel)"],
      ["Intermediate phase", "A phase with a different crystal structure to the pure components, stable over a range of compositions"],
      ["Intermetallic compound", "An intermediate phase with a very narrow composition range, so a fixed formula \\(A_mB_n\\). Its free energy curve is narrow and steep"],
      ["Chemical potential (μ)", "\\(\\mu_A = (\\partial G'/\\partial n_A)_{T,P,n_B}\\). The change in total free energy when a small amount of A is added. Also called partial molar free energy. Equal in both phases at equilibrium"]
    ]
  },
  u3: {
    name: "Unit 3 - Using Phase Diagrams",
    terms: [
      ["Tie line","A horizontal (constant temperature) line drawn across a two-phase field. Its ends sit on the phase boundaries, and the compositions at the ends are the compositions of the two phases in equilibrium"],
      ["Lever rule","The method for finding the mass fraction of each phase in a two-phase field. A phase's fraction is the length of the tie line arm on the opposite side of the alloy composition, divided by the whole tie line length"],
      ["Mass fraction (W)","The fraction of the alloy's mass that is in a given phase. The lever rule gives mass fractions. Multiply by 100 for wt%"],
      ["Volume fraction (V)","The fraction of the alloy's volume taken up by a phase. This is what a micrograph shows as area fraction. Found from the mass fractions and the phase densities"],
      ["Isomorphous system","A binary system in which the two components dissolve in each other in all proportions in both the liquid and the solid, e.g. Cu-Ni. The diagram has a liquid field, one solid field and a two-phase band"],
      ["Liquidus","The line on a phase diagram above which the alloy is completely liquid. Crossing it on cooling, the first solid begins to form"],
      ["Solidus","The line below which the alloy is completely solid. Crossing it on cooling, the last of the liquid disappears"],
      ["Solvus","The solubility limit line of a solid phase. Cooling an alloy across it means the phase can no longer hold all its solute, so a second solid phase precipitates"],
      ["Eutectic reaction","On cooling, one liquid transforms into two solid phases at a fixed temperature, \\(L \\rightarrow \\alpha + \\beta\\). In Pb-Sn this happens at 183 °C and 61.9 wt% Sn"],
      ["Eutectoid reaction","On cooling, one solid phase transforms into two new solid phases at a fixed temperature. In Fe-C, austenite → ferrite + cementite at 727 °C and 0.76 wt% C"],
      ["Peritectic reaction","On cooling, a liquid and a solid react to form a new solid phase at a fixed temperature, \\(L + \\alpha \\rightarrow \\beta\\). In Fe-C, liquid + δ-ferrite → austenite at 1493 °C"],
      ["Reaction naming code", "eu- means one phase becomes two. peri- means two phases become one. -tic means a liquid is involved. -toid means the same reaction entirely in the solid"],
      ["Hypoeutectic","An alloy with less solute than the eutectic composition (in Pb-Sn, between 18.3 and 61.9 wt% Sn). It forms pro-eutectic α, then eutectic"],
      ["Hypereutectic","An alloy with more solute than the eutectic composition (in Pb-Sn, between 61.9 and 97.8 wt% Sn). It forms pro-eutectic β, then eutectic"],
      ["Pro-eutectic phase","The solid phase that forms from the liquid before the eutectic temperature is reached, in an off-eutectic alloy. It appears as larger grains sitting in the eutectic matrix"],
      ["Microconstituent","A region of the microstructure with its own distinct appearance, such as pro-eutectic α or the eutectic. A microconstituent can contain more than one phase: the eutectic is α + β"],
      ["Lamellar structure","A microstructure of alternating thin parallel plates of two phases, as in the eutectic"],
      ["Co-operative growth","Two phases growing side by side from the liquid so that the solute rejected by one is absorbed by the other, keeping diffusion distances short. It produces the lamellar eutectic"],
      ["Hypo-peritectic","A peritectic-system alloy between the \\(\\alpha_p\\) and \\(\\beta_p\\) compositions. After the peritectic reaction, excess α is left inside a β matrix"],
      ["Hyper-peritectic","A peritectic-system alloy between the \\(\\beta_p\\) and \\(L_p\\) compositions. After the peritectic reaction, excess liquid is left, which continues to solidify as β"],
      ["Austenite (γ)","The face-centred cubic solid solution of carbon in iron. Dissolves up to 2.14 wt% C, at 1147 °C"],
      ["Ferrite (α)","The body-centred cubic solid solution of carbon in iron. Dissolves only up to about 0.02 wt% C"],
      ["Cementite (Fe₃C)","The iron carbide compound, containing 6.7 wt% C"]
    ]
  },
  u4: {
    name: "Unit 4 - Construction of Phase Diagrams",
    terms: [
      ["Heterogeneous equilibrium", "Equilibrium between two or more phases that coexist. Each phase has its own free energy curve, and the compositions settle where the total free energy of the mixture is lowest"],
      ["Common tangent", "A single straight line touching the free energy curves of two phases. The two touching points are the equilibrium compositions of the phases, and they are what gets plotted on the phase diagram. The line gives equal chemical potentials in both phases"],
      ["Ordered phase", "A solid solution in which A and B atoms sit in regular, preferred positions instead of at random. It forms when \\(\\Delta H_{\\mathrm{mix}} < 0\\) and is written \\(\\alpha'\\). It melts at a higher temperature than either pure component"],
      ["Invariant reaction", "A transformation between phases of fixed composition at a fixed temperature under equilibrium conditions. It appears as a horizontal line on the phase diagram. The eutectic, eutectoid, peritectic and peritectoid reactions are the four examples"],
      ["Peritectoid reaction", "On cooling, two solid phases react to form a new solid phase at a fixed temperature, \\(\\alpha + \\beta \\rightarrow \\gamma\\). Slide example: \\((\\mathrm{Ti}) + \\mathrm{TiAg} \\rightarrow \\mathrm{Ti_2Ag}\\)"],
      ["Critical temperature (T_c)", "The temperature above which a miscibility gap no longer exists. For a regular solution \\(T_c = \\Omega / 2R\\), so stronger repulsion between A and B (bigger \\(\\Omega\\)) gives a higher \\(T_c\\). Standard regular solution result, not on the lecture slides"],
      ["Terminal solid solution", "A solid solution based on one of the pure components, found at an end of the phase diagram, such as \\(\\alpha\\) at the A edge"],
      ["Congruent transformation", "A transformation in which the composition of the phases involved does not change. Examples: melting and solidification, ordering, allotropic transformation"],
      ["Allotropic transformation", "A pure element changing to a different crystal structure, such as iron changing from BCC to FCC on heating"],
      ["Polymorphic transformation", "The same change of crystal structure as an allotropic one, but in an alloy (a phase containing more than one element)"]
    ]
  }
};

/* Side-by-side comparisons, shown in term previews and expanded glossary entries */
const glossaryComparisons = [
  { terms: ["Isolated system", "Closed system", "Open system"],
    rows: [
      ["Exchanges mass?", "No", "No", "Yes"],
      ["Exchanges energy?", "No", "Yes", "Yes"]
    ] },
  { terms: ["Intensive variable", "Extensive variable"],
    rows: [
      ["Depends on system size?", "No", "Yes"],
      ["Examples", "T, P, composition, molar quantities", "V, U, H, S, G, mass"]
    ] },
  { terms: ["Equilibrium", "Metastable state"],
    rows: [
      ["Gibbs energy", "Global minimum", "Local minimum"],
      ["Stability", "Stable indefinitely", "Persists until an energy barrier is overcome"],
      ["Examples", "Stable phases from the phase diagram", "Diamond, martensite, glass"]
    ] },
  { terms: ["Driving force", "Kinetics"],
    rows: [
      ["Question answered", "Can the change happen? (ΔG < 0)", "How fast does it happen?"],
      ["Controlled by", "Thermodynamics (G)", "Activation energy, diffusion, temperature"]
    ] },
  { terms: ["Heat", "Work"],
    rows: [
      ["Energy transferred by", "A temperature difference", "A force acting through a distance"],
      ["Type", "Path function", "Path function"]
    ] },
  { terms: ["Enthalpy", "Entropy", "Gibbs free energy"],
    rows: [
      ["Symbol", "H", "S", "G = H − TS"],
      ["Measures", "Heat content at constant pressure", "Disorder / number of arrangements", "Stability at constant T and P"]
    ] },
  { terms: ["Phase", "Component"],
    rows: [
      ["What it is", "Physically distinct, homogeneous region", "Chemically independent constituent"],
      ["Example", "Liquid, α, β", "Cu, Ni, or a compound such as Fe₃C"]
    ] },
  { terms: ["Ideal solution", "Regular solution"],
    rows: [
      ["ΔH_mix", "0", "Ω X_A X_B"],
      ["ΔS_mix", "Ideal configurational entropy", "Same as ideal (random mixing assumed)"],
      ["Bonding", "A–B bonds same as A–A and B–B", "A–B bonds differ (Ω ≠ 0)"]
    ] },
  { terms: ["Enthalpy of mixing", "Entropy of mixing"],
    rows: [
      ["Origin", "Bond energy changes on mixing", "More possible arrangements"],
      ["Sign", "Positive, negative or zero", "Always positive (favours mixing)"]
    ] },
  { terms: ["Ordering", "Clustering"],
    rows: [
      ["Ω", "Negative (A–B bonds favoured)", "Positive (like bonds favoured)"],
      ["Result", "Ordered arrangement, intermetallics", "Clusters of like atoms, miscibility gap"]
    ] },
  { terms: ["Substitutional alloy", "Interstitial alloy"],
    rows: [
      ["Solute sits", "On host lattice sites", "In gaps between host atoms"],
      ["Solute size", "Similar to host", "Much smaller (C, N, H)"],
      ["Example", "Cu–Ni", "C in Fe"]
    ] },
  { terms: ["Intermediate phase", "Intermetallic compound"],
    rows: [
      ["Composition", "Exists over a range", "Narrow, fixed stoichiometry"],
      ["On a phase diagram", "A field between the terminal solutions", "A near-vertical line"]
    ] },
  {"terms":["Eutectic reaction","Eutectoid reaction","Peritectic reaction","Peritectoid reaction"],"rows":[["On cooling","L → α + β","γ → α + Fe₃C","L + α → β","α + β → γ"],
      ["Prefix","eu-: one into two","eu-: one into two","peri-: two into one","peri-: two into one"],
      ["Ending","-tic: liquid involved","-toid: all solid","-tic: liquid involved","-toid: all solid"],
      ["Starts from","One liquid","One solid","A liquid and a solid","Two solids"],
      ["Ends with","Two solids","Two solids","One solid","One solid"],
      ["Example","Pb-Sn, 183 °C","Fe-C, 727 °C","Fe-C, 1493 °C","Ti-Ag (slide)"]]},
  {"terms":["Hypoeutectic","Hypereutectic"],"rows":[["Composition","Below the eutectic","Above the eutectic"],
      ["Pro-eutectic phase (Pb-Sn)","α (Pb-rich)","β (Sn-rich)"],
      ["Final microstructure","Pro-eutectic α in eutectic","Pro-eutectic β in eutectic"]]},
  {"terms":["Liquidus","Solidus","Solvus"],"rows":[["Separates","Liquid from liquid + solid","Liquid + solid from solid","A single solid from solid + second solid"],
      ["Crossing it on cooling","First solid appears","Last liquid disappears","A second solid precipitates"]]},
  {"terms":["Phase","Microconstituent"],"rows":[["What it is","Physically distinct, homogeneous region","Region with a distinct look in the microstructure"],
      ["Eutectic example","α and β are two phases","The eutectic is one microconstituent"],
      ["Pb-30 wt% Sn","85.3% α, 14.7% β","73.2% pro-eutectic α, 26.8% eutectic"]]},
  {"terms":["Mass fraction (W)","Volume fraction (V)"],"rows":[["Found from","The lever rule","Mass fractions and densities"],
      ["Seen on a micrograph?","Not directly","Yes, as area fraction"]]},
  {"terms":["Hypo-peritectic","Hyper-peritectic"],"rows":[["Composition","Between \\(\\alpha_p\\) and \\(\\beta_p\\)","Between \\(\\beta_p\\) and \\(L_p\\)"],
      ["Left over after the reaction","Excess α","Excess liquid"],
      ["Final structure","β matrix with α remnants","All β"]]},
  {"terms": ["Allotropic transformation", "Polymorphic transformation"], "rows": [["Applies to", "A pure element", "An alloy phase (more than one element)"], ["What changes", "Crystal structure", "Crystal structure"]]},
  {"terms": ["Terminal solid solution", "Intermediate phase"], "rows": [["Crystal structure", "That of a pure component", "Different from either component"], ["Position on the diagram", "At the ends", "Between the ends"]]},
  {"terms": ["Ordered phase", "Miscibility gap"], "rows": [["\\(\\Delta H_{\\mathrm{mix}}\\)", "Negative", "Positive"], ["A-B atoms", "Prefer each other", "Prefer their own kind"], ["Result in the solid", "Regular arrangement, higher melting point", "Splits into \\(\\alpha' + \\alpha''\\)"]]}
];
