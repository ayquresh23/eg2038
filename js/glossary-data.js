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
  },
  u5: {
    name: "Unit 5 - Limitations of Thermodynamics",
    terms: [
      ["Kinetics", "The study of the rates and mechanisms of transformations. Decides how fast a thermodynamically possible change happens"],
      ["Coring", "Composition gradient inside each grain of a non-equilibrium cast alloy, because solid-state diffusion could not keep up during cooling. Also called solute segregation"],
      ["Solute segregation", "Uneven distribution of solute within or between grains, produced during solidification. Coring is the within-grain case"],
      ["Homogenising heat treatment", "Holding a cored casting at an elevated temperature below the solidus so diffusion can even out the composition"],
      ["Activated state", "The highest-energy configuration atoms must pass through on the way from the initial to the final state"],
      ["Activation energy", "The energy barrier between the initial state and the activated state (\\(\\Delta G_a\\) per atom or \\(\\Delta H_a\\) per mole). Sets the rate, not the feasibility"],
      ["Arrhenius equation", "Rate \\(\\propto \\exp(-\\Delta G_a/kT)\\) or \\(\\exp(-\\Delta H_a/RT)\\). Rates of thermally activated processes rise exponentially with temperature"],
      ["Diffusion", "Net movement of atoms through a material driven by a gradient in chemical potential. The most fundamental process controlling transformation rates"],
      ["Diffusion couple", "Two blocks of different composition joined and heated so that their atoms diffuse into each other"],
      ["Diffusion flux", "Quantity of atoms (number or mass) passing through unit cross-sectional area per unit time, J"],
      ["Diffusivity", "The diffusion coefficient D (m\\(^2\\) s\\(^{-1}\\)). Strongly temperature dependent: \\(D = D_0\\exp(-\\Delta H_a/RT)\\)"],
      ["Steady-state diffusion", "Diffusion where the flux does not change with time and the concentration profile is linear. Described by Fick's first law"],
      ["Fick's first law", "\\(J = -D\\,\\partial C/\\partial x\\). Flux is proportional to the concentration gradient and runs down it"],
      ["Transient-state diffusion", "Unsteady diffusion where the concentration at a point changes with time. Described by Fick's second law"],
      ["Fick's second law", "\\(\\partial C/\\partial t = D\\,\\partial^2 C/\\partial x^2\\). Concentration changes at a rate set by the curvature of the profile"],
      ["Vacancy diffusion", "Atoms jump into neighbouring vacant lattice sites. Needs vacancies, so it is slower. Used by substitutional atoms"],
      ["Interstitial diffusion", "Small atoms hop between interstitial sites, which are nearly always free, so it is faster. E.g. C, N, H in iron"],
      ["Uphill diffusion", "Diffusion up a concentration gradient, from low to high concentration, as in spinodal decomposition. Still lowers G"],
      ["Chemical potential gradient", "The true driver of diffusion. Atoms move from high to low chemical potential until it is uniform (equilibrium)"]
    ]
  },
  u6: {
    name: "Unit 6 - Solidification: Nucleation",
    terms: [
      ["Solidification", "Transformation of a liquid into a solid, usually from a non-crystalline to a crystalline structure"],
      ["Undercooling", "How far below the equilibrium melting point the liquid is, \\(\\Delta T = T_m - T\\). Also called supercooling"],
      ["Driving force for solidification", "Free energy saved per unit volume by freezing, \\(\\Delta G_V \\approx -L_V\\Delta T/T_m\\). Zero at \\(T_m\\), grows with undercooling"],
      ["Latent heat of fusion", "Heat released on freezing (absorbed on melting). \\(L\\) per mole or \\(L_V\\) per unit volume"],
      ["Cooling curve", "Plot of melt temperature against time. Shows nucleation undercooling, recalescence and the growth plateau"],
      ["Recalescence", "Temperature rise of the melt after nucleation, caused by latent heat released by the new crystals. Stops further nucleation"],
      ["Nucleation", "Formation of the first stable crystals of a new phase. The first stage of solidification"],
      ["Homogeneous nucleation", "Nucleation evenly through the whole liquid with no preferred sites. Needs a large undercooling (about 0.2\\(T_m\\)) and a very clean melt"],
      ["Heterogeneous nucleation", "Nucleation on a pre-existing surface such as a mould wall or particle. Lower barrier, small undercooling. Always the case in practical casting"],
      ["Interfacial energy", "Energy per unit area of an interface, e.g. \\(\\gamma_{SL}\\) for solid-liquid. Positive because interface atoms have broken bonds"],
      ["Embryo", "A solid cluster smaller than the critical size. Unstable: it lowers its energy by dissolving back into the liquid"],
      ["Nucleus", "A solid cluster larger than the critical size. Stable: it lowers its energy by growing"],
      ["Critical nucleus size", "\\(r^* = -2\\gamma_{SL}/\\Delta G_V\\), the radius at the peak of the \\(\\Delta G_r\\) curve. Falls as \\(1/\\Delta T\\)"],
      ["Nucleation barrier", "\\(\\Delta G^* = 16\\pi\\gamma_{SL}^3/3(\\Delta G_V)^2\\), the free energy barrier to forming a stable nucleus. Falls as \\(1/\\Delta T^2\\)"],
      ["Big Bang nucleation", "The sudden burst of homogeneous nucleation at the undercooling where the largest liquid clusters reach critical size"],
      ["Contact angle", "Wetting angle \\(\\theta\\) between a spherical-cap nucleus and the substrate. Smaller angle, easier nucleation"],
      ["Spherical cap model", "Heterogeneous nucleus treated as a cap of a sphere of radius \\(r^*\\) on a flat surface"],
      ["Shape factor S(θ)", "\\(S(\\theta) = (2 + \\cos\\theta)(1 - \\cos\\theta)^2/4 \\le 1\\). Multiplies the homogeneous barrier to give the heterogeneous one"],
      ["Nucleant", "The substrate (particle or surface) on which a heterogeneous nucleus forms"],
      ["Grain refinement", "Producing a finer grain size, which raises strength and toughness (Hall-Petch)"],
      ["Inoculation", "Chemical grain refinement: adding a small amount of an agent that supplies well-matched particles for heterogeneous nucleation"],
      ["Master alloy", "A concentrated alloy added to a melt to deliver an alloying element or refiner, e.g. Al-5Ti-1B"],
      ["Hall-Petch relationship", "\\(\\sigma_y = \\sigma_0 + k/\\sqrt{d}\\). Yield strength rises as grain size falls"],
      ["Poisoning", "Loss of refiner effectiveness because alloying elements react with the nucleating particles, e.g. Al-Ti-B in Al-Si"],
      ["Fading", "Loss of refining efficiency when an inoculated melt is held before casting"]
    ]
  },
  u7: {
    name: "Unit 7 - Solidification: Growth",
    terms: [
      ["Growth", "Second stage of solidification: existing crystals grow as atoms from the liquid join the solid, with the interface near \\(T_m\\)"],
      ["Superheat", "How far above the liquidus the melt is when poured"],
      ["Planar interface", "A flat solid-liquid front. Stable when the liquid ahead is above its liquidus"],
      ["Dendrite", "Tree-like crystal with primary, secondary and tertiary arms along preferred directions (‹100› cubic, ‹10̄10› hcp)"],
      ["Thermal dendrite", "Dendrite in a pure metal growing into thermally undercooled liquid. Not visible after full solidification"],
      ["Solidification range", "Temperature interval between liquidus and solidus over which an alloy freezes"],
      ["Partition coefficient", "\\(k = X_S/X_L\\), ratio of solid to liquid composition at the same temperature. \\(k < 1\\) means solute is rejected"],
      ["Solute rejection", "Expulsion of solute from the growing solid into the liquid at the interface when \\(k < 1\\)"],
      ["Constitutional supercooling", "Liquid ahead of an alloy front lying below its local liquidus because of solute pile-up, even though it may be hotter than the solid"],
      ["Critical temperature gradient", "The liquidus slope at the interface. Actual gradients steeper than this keep a planar front stable"],
      ["Cellular growth", "Front breaks into an array of convex cells (about six neighbours each) when a thin constitutionally supercooled zone exists"],
      ["Columnar dendritic growth", "Directional dendrites growing from the mould wall with a positive gradient and a wide supercooled zone. Also called cellular dendritic"],
      ["Free dendritic growth", "Dendrites growing in all directions into liquid with a negative temperature gradient. Found in the casting centre"],
      ["Interface-controlled growth", "Growth limited by atom attachment. Atomically smooth interface, faceted crystals"],
      ["Diffusion-controlled growth", "Growth limited by atom transport to the interface. Atomically rough interface, smooth rounded crystals and dendrites"],
      ["Faceted growth", "Growth as flat crystal planes with sharp edges, from an atomically smooth interface"],
      ["Ingot structure", "Three-zone grain structure of a casting: chill zone, columnar zone, central equiaxed zone"],
      ["Chill zone", "Thin outer layer of fine, random equiaxed grains nucleated on the cold mould wall"],
      ["Columnar zone", "Long grains grown inward parallel to the heat flow, favourably oriented grains winning"],
      ["Central equiaxed zone", "Coarse, random equiaxed grains in the casting centre, from surviving chill crystals, fragments and nucleation in supercooled liquid"],
      ["Equiaxed grain", "A grain with roughly equal dimensions in all directions"],
      ["Hot tearing", "Cracking of a casting in the last stages of solidification, when shrinking solid cannot be fed with liquid"],
      ["Low superheat casting", "Pouring close to the liquidus so chill crystals survive and the columnar zone is suppressed"],
      ["Physical grain refinement", "Grain refinement by external fields (stirring, shearing, MHD, vibration, current pulses, ultrasound) causing strong convection"],
      ["Dendrite fragmentation", "Breaking of dendrite arms by convection, each fragment becoming a new grain (grain multiplication)"],
      ["Ultrasonication", "Applying high-intensity ultrasound to a melt; strong convection plus ~1000 atm cavitation pressure pulses enhance nucleation"],
      ["Investment casting", "Lost-wax process: ceramic shell built round a wax pattern, wax removed, shell fired and filled. Used for turbine blades"],
      ["Directional solidification", "Controlled heat extraction from one end so columnar grains grow along the part. Used for creep-resistant turbine blades"],
      ["Single crystal casting", "Casting a whole part as one grain using a grain selector, removing all grain boundaries"],
      ["Metallic glass", "Amorphous metal formed by cooling so fast that crystals cannot nucleate. No grains or dislocations; high strength and resilience"],
      ["Melt spinning", "Rapid solidification method: molten jet onto a spinning cooled wheel, producing thin ribbon at about 10\\(^6\\) K s\\(^{-1}\\)"]
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
  {"terms": ["Ordered phase", "Miscibility gap"], "rows": [["\\(\\Delta H_{\\mathrm{mix}}\\)", "Negative", "Positive"], ["A-B atoms", "Prefer each other", "Prefer their own kind"], ["Result in the solid", "Regular arrangement, higher melting point", "Splits into \\(\\alpha' + \\alpha''\\)"]]},
  /* U5-U7 comparisons */
  {"terms": ["Homogeneous nucleation","Heterogeneous nucleation"], "rows": [["Where","Anywhere in the liquid","On a mould wall or particle"],["Nucleus shape","Sphere","Spherical cap"],["Critical radius","\\(r^*\\)","Same \\(r^*\\)"],["Barrier","\\(\\Delta G^*_{hom}\\)","\\(\\Delta G^*_{hom} S(\\theta)\\)"],["Undercooling needed","About 0.2\\(T_m\\)","A few K or less"]]},
  {"terms": ["Embryo","Nucleus"], "rows": [["Size","\\(r < r^*\\)","\\(r > r^*\\)"],["Adding atoms","Raises G","Lowers G"],["Fate","Dissolves","Grows"]]},
  {"terms": ["Steady-state diffusion","Transient-state diffusion"], "rows": [["Flux","Constant in time","Changes with time"],["Profile","Linear","Curved, evolving"],["Law","Fick's first","Fick's second"]]},
  {"terms": ["Vacancy diffusion","Interstitial diffusion"], "rows": [["Who uses it","Substitutional atoms","Small atoms (C, N, H)"],["Needs","A vacant neighbour site","A free interstitial (almost always)"],["Speed","Slower","Faster"]]},
  {"terms": ["Thermal dendrite","Constitutional supercooling"], "rows": [["System","Pure metal","Alloy"],["Cause of undercooling","Liquid colder than \\(T_m\\)","Solute lowers the local liquidus"],["Liquid hotter than solid?","No","Can be"]]},
  {"terms": ["Interface-controlled growth","Diffusion-controlled growth"], "rows": [["Slow step","Atom attachment","Atom transport"],["Interface (atomic scale)","Smooth","Rough"],["Crystal shape","Faceted, angular","Smooth, rounded, dendritic"]]},
  {"terms": ["Inoculation","Physical grain refinement"], "rows": [["Method","Add nucleating particles","External field, strong convection"],["Alloy range","Specific alloys","Universal"],["Melt cleanliness","Leaves particles behind","Clean"]]},
  {"terms": ["Chill zone","Central equiaxed zone"], "rows": [["Grain size","Very fine","Coarse"],["Origin","Mass nucleation on the cold mould","Survivors, fragments, nucleation in supercooled liquid"],["Cooling","Very fast","Slow"]]}
];
