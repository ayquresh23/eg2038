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
      ["Miscibility gap", "A composition range where a single mixed phase is unstable and the alloy splits into two phases of different composition, because the \\(\\Delta G_{\\mathrm{mix}}\\) curve has a hump"],
      ["Substitutional alloy", "A solid solution where solute atoms replace solvent atoms on lattice sites. Occurs when atomic sizes are similar, e.g. brass (Cu-Zn)"],
      ["Interstitial alloy", "A solid solution where small solute atoms sit in the gaps between solvent atoms, e.g. carbon in iron (steel)"],
      ["Intermediate phase", "A phase with a different crystal structure to the pure components, stable over a range of compositions"],
      ["Intermetallic compound", "An intermediate phase with a very narrow composition range, so a fixed formula \\(A_mB_n\\). Its free energy curve is narrow and steep"],
      ["Chemical potential (μ)", "\\(\\mu_A = (\\partial G'/\\partial n_A)_{T,P,n_B}\\). The change in total free energy when a small amount of A is added. Also called partial molar free energy. Equal in both phases at equilibrium"]
    ]
  }
};
