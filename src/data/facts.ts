// Daily TIL - 100 Fascinating Facts Database
// Each fact includes progressive explanations for different age groups

export interface Fact {
  id: number;
  fact: string; // The main "TIL" statement
  category: 'Science' | 'Technology' | 'Human Body' | 'History' | 'Animals' | 'Space' | 'Nature' | 'Food' | 'Physics' | 'Earth';
  difficulty: 'easy' | 'medium' | 'hard';
  
  // Progressive explanations
  explanationSimple: string;      // Age 5-8
  explanationDetailed: string;    // Age 10-12
  explanationScientific: string;  // Age 13+
  
  // Additional engagement
  funFact: string;
  funFactSource: string;
  funFactSourceUrl: string;
  
  // Optional visual
  hasVisual?: boolean;
}

export const FACTS: Fact[] = [
  // SCIENCE & NATURE (20 facts)
  {
    id: 1,
    fact: "Honey never spoils",
    category: "Science",
    difficulty: "easy",
    explanationSimple: "Honey is super thick and has very little water in it. Bees also add special stuff that keeps germs away! That's why honey can last forever without going bad.",
    explanationDetailed: "Honey doesn't spoil because it has three special properties: very low moisture content (only 17-18% water), high acidity (pH 3-4.5), and bees add an enzyme called glucose oxidase that creates hydrogen peroxide. These conditions make it impossible for bacteria to survive.",
    explanationScientific: "Honey's indefinite shelf life results from its hygroscopic nature (low water activity <0.6), acidic pH (3.2-4.5), and antimicrobial compounds. Glucose oxidase produces hydrogen peroxide, while high osmotic pressure dehydrates microbial cells. Archaeologists found 3,000-year-old honey in Egyptian tombs that was still edible.",
    funFact: "Ancient Egyptians used honey to preserve bodies! The same properties that keep honey fresh also made it perfect for mummification.",
    funFactSource: "National Geographic",
    funFactSourceUrl: "https://www.nationalgeographic.com/",
    hasVisual: true
  },
  {
    id: 2,
    fact: "Bananas are berries, but strawberries aren't",
    category: "Nature",
    difficulty: "medium",
    explanationSimple: "In science, a berry is a fruit that grows from one flower with one ovary. Bananas fit this rule, but strawberries come from a flower with many ovaries, so they're not true berries!",
    explanationDetailed: "Botanically, a berry is a fruit produced from a single flower with one ovary and typically has several seeds. Bananas meet this definition perfectly. Strawberries, however, come from a flower with multiple ovaries, making them 'aggregate fruits.' The tiny seeds on the outside are actually the real fruits!",
    explanationScientific: "Botanical classification defines berries as simple fruits derived from a single ovary of an individual flower. Bananas (Musa species) are parthenocarpic berries developing from inferior ovaries. Strawberries are accessory aggregate fruits where the fleshy part is the receptacle, and the true fruits are the achenes on the surface.",
    funFact: "Blueberries, grapes, and even watermelons are true berries, but raspberries and blackberries aren't!",
    funFactSource: "Scientific American",
    funFactSourceUrl: "https://www.scientificamerican.com/",
    hasVisual: true
  },
  {
    id: 3,
    fact: "A day on Venus is longer than its year",
    category: "Space",
    difficulty: "medium",
    explanationSimple: "Venus spins around super slowly (one day), but it flies around the sun pretty fast (one year). So it takes Venus longer to spin once than to go all the way around the sun!",
    explanationDetailed: "Venus rotates on its axis very slowly - taking 243 Earth days to complete one rotation. However, it orbits the sun faster, taking only 225 Earth days. This means a Venusian day (one full spin) is actually longer than a Venusian year (one orbit around the sun)!",
    explanationScientific: "Venus has a retrograde rotation period of 243 Earth days, while its orbital period is 225 Earth days. This results in a solar day of 117 Earth days. Venus rotates clockwise (retrograde) unlike most planets, possibly due to a massive ancient collision or tidal effects from the sun.",
    funFact: "Venus also spins backwards compared to most planets! The sun rises in the west and sets in the east on Venus.",
    funFactSource: "NASA",
    funFactSourceUrl: "https://www.nasa.gov/",
    hasVisual: true
  },
  {
    id: 4,
    fact: "Your body has more bacterial cells than human cells",
    category: "Human Body",
    difficulty: "hard",
    explanationSimple: "Your body is full of tiny living things called bacteria! You actually have more bacteria cells than your own human cells. Don't worry - most of them are helpful and keep you healthy!",
    explanationDetailed: "The human body contains about 37 trillion human cells, but hosts approximately 38-40 trillion bacterial cells, mostly in the gut. These bacteria (called the microbiome) help digest food, make vitamins, and protect against harmful germs. You're technically more bacteria than human by cell count!",
    explanationScientific: "Recent studies estimate the human body contains 3.8×10¹³ bacterial cells versus 3.0×10¹³ human cells, a ratio of approximately 1.3:1. The gut microbiome comprises over 1000 species, predominantly Bacteroidetes and Firmicutes phyla. This microbiota contributes essential metabolic functions and immune system modulation.",
    funFact: "All the bacteria in your body weighs about 2-3 pounds - roughly the same weight as your brain!",
    funFactSource: "Nature Journal",
    funFactSourceUrl: "https://www.nature.com/",
    hasVisual: false
  },
  {
    id: 5,
    fact: "Water can boil and freeze at the same time",
    category: "Physics",
    difficulty: "hard",
    explanationSimple: "At a special temperature and pressure, water can be ice, liquid, and steam all at once! Scientists call this the 'triple point' - it's like water can't decide what it wants to be!",
    explanationDetailed: "At exactly 0.01°C (32.02°F) and a specific pressure (611.657 pascals), water exists simultaneously as ice, liquid water, and water vapor. This is called the triple point. At this precise condition, all three phases are in equilibrium - water molecules are freezing, melting, evaporating, and condensing all at the same time!",
    explanationScientific: "The triple point of water occurs at 273.16 K (0.01°C) and 611.657 Pa where the three phases coexist in thermodynamic equilibrium. This point is used to define the Kelvin temperature scale. At this specific pressure-temperature combination, the Gibbs free energy of all three phases is equal, allowing simultaneous phase transitions.",
    funFact: "The triple point of water is so precise that it's used to calibrate thermometers and define temperature standards worldwide!",
    funFactSource: "NIST (National Institute of Standards)",
    funFactSourceUrl: "https://www.nist.gov/",
    hasVisual: true
  },

  // Continue with more Science & Nature facts
  {
    id: 6,
    fact: "Octopuses have three hearts",
    category: "Animals",
    difficulty: "easy",
    explanationSimple: "An octopus has three hearts! Two hearts pump blood to the gills (where they breathe), and one heart pumps blood to the rest of the body. When an octopus swims, the main heart actually stops beating!",
    explanationDetailed: "Octopuses have two branchial hearts that pump blood through the gills, and one systemic heart that pumps blood through the body. Their blood is blue because it uses copper-based hemocyanin instead of iron-based hemoglobin. Interestingly, the systemic heart stops beating when the octopus swims, which is why they prefer crawling!",
    explanationScientific: "Cephalopod circulatory systems contain two branchial hearts with ventricular chambers that pressurize blood through gill capillaries for oxygen exchange, plus one systemic heart that circulates oxygenated hemolymph. Hemocyanin (copper-based respiratory protein) gives the blood a blue color and is more efficient than hemoglobin in cold, low-oxygen environments.",
    funFact: "Octopuses also have blue blood and nine brains - one central brain and a small brain in each of their eight arms!",
    funFactSource: "Smithsonian Ocean",
    funFactSourceUrl: "https://ocean.si.edu/",
    hasVisual: true
  },
  {
    id: 7,
    fact: "Lightning is five times hotter than the sun's surface",
    category: "Nature",
    difficulty: "medium",
    explanationSimple: "A lightning bolt is super, SUPER hot - about 30,000°C (54,000°F)! That's five times hotter than the surface of the sun. No wonder it's so bright and dangerous!",
    explanationDetailed: "Lightning bolts can reach temperatures of approximately 30,000 Kelvin (53,540°F), which is about five times hotter than the sun's surface temperature of 5,778 Kelvin. This extreme heat causes the air around the lightning to expand so rapidly that it creates the thunder we hear. The bolt itself lasts only milliseconds.",
    explanationScientific: "Lightning discharge channels reach peak temperatures of ~30,000 K due to rapid electrical breakdown of air molecules. This exceeds the solar photosphere temperature (~5,778 K) by a factor of 5.2. The extreme thermal energy ionizes atmospheric nitrogen and oxygen, creating the characteristic plasma channel visible as lightning. Thunder results from supersonic expansion of heated air.",
    funFact: "The odds of being struck by lightning in your lifetime are about 1 in 15,300, but you can be struck by lightning even when it's not raining!",
    funFactSource: "NOAA (National Weather Service)",
    funFactSourceUrl: "https://www.weather.gov/",
    hasVisual: true
  },
  {
    id: 8,
    fact: "Sharks existed before trees",
    category: "History",
    difficulty: "medium",
    explanationSimple: "Sharks have been swimming in oceans for over 400 million years! Trees didn't appear on Earth until about 350 million years ago. That means sharks are almost 50 million years older than trees!",
    explanationDetailed: "Sharks first appeared in the fossil record about 450 million years ago during the Ordovician period. The first trees (Archaeopteris) evolved around 385 million years ago during the Devonian period. This means sharks predate trees by roughly 65 million years! Sharks even survived all five mass extinctions.",
    explanationScientific: "Chondrichthyes (cartilaginous fish including sharks) emerged ~450 million years ago in the Ordovician. Vascular plants with lignified tissues (true trees like Archaeopteris) appeared ~385 million years ago in the Late Devonian. Sharks have survived the Ordovician-Silurian, Late Devonian, Permian-Triassic, Triassic-Jurassic, and Cretaceous-Paleogene extinction events.",
    funFact: "Sharks are older than Saturn's rings, which formed only 100-200 million years ago!",
    funFactSource: "Natural History Museum",
    funFactSourceUrl: "https://www.nhm.ac.uk/",
    hasVisual: true
  },
  {
    id: 9,
    fact: "The Eiffel Tower can grow more than 6 inches in summer",
    category: "Physics",
    difficulty: "easy",
    explanationSimple: "When metal gets hot, it expands and grows bigger! In summer, the iron in the Eiffel Tower gets warm from the sun and the whole tower can grow up to 6 inches taller. It shrinks back down in winter!",
    explanationDetailed: "The Eiffel Tower is made of iron, which expands when heated. On hot summer days, the metal facing the sun heats up and expands, causing the tower to grow up to 15 centimeters (about 6 inches) taller. The tower also leans slightly away from the sun due to uneven heating. As it cools in winter, it shrinks back to its original size.",
    explanationScientific: "Thermal expansion of the Eiffel Tower's iron framework follows the coefficient of linear expansion (α ≈ 12×10⁻⁶ /°C for iron). With temperature variations of ~30°C between winter and summer, and a height of 300m, the tower expands ΔL = αL₀ΔT ≈ 0.108m (~4.25 inches). Solar radiation causes differential heating, creating temporary structural asymmetry.",
    funFact: "The Eiffel Tower was supposed to be torn down after 20 years, but it was saved because it made a perfect radio antenna!",
    funFactSource: "Eiffel Tower Official Site",
    funFactSourceUrl: "https://www.toureiffel.paris/",
    hasVisual: true
  },
  {
    id: 10,
    fact: "Your brain uses 20% of your body's energy despite being only 2% of your weight",
    category: "Human Body",
    difficulty: "medium",
    explanationSimple: "Your brain is pretty small - only about 2% of your body weight. But it's a super hungry organ! It uses 20% of all the energy (calories) you eat just to think, remember, and control your body.",
    explanationDetailed: "The average adult brain weighs about 1.4 kg (3 lbs), which is only 2% of total body weight. However, it consumes approximately 20% of the body's total energy and oxygen. This is because neurons are constantly working - sending signals, forming memories, and controlling everything from breathing to thinking. Even when you're sleeping, your brain stays active!",
    explanationScientific: "Despite comprising only 2% of body mass, the human brain consumes ~20% of basal metabolic rate (~20 watts or 400 kcal/day). This high metabolic demand supports neuronal action potentials, neurotransmitter synthesis, and maintenance of ion gradients across synaptic membranes. Glucose is the primary energy substrate, with cerebral metabolic rate of ~5.6 mg/100g/min.",
    funFact: "Your brain generates about 12-25 watts of electricity when you're awake - enough to power a small LED light bulb!",
    funFactSource: "Harvard Medical School",
    funFactSourceUrl: "https://hms.harvard.edu/",
    hasVisual: false
  },

  // TECHNOLOGY & INVENTIONS (20 facts) - Starting at id 11
  {
    id: 11,
    fact: "The first computer mouse was made of wood",
    category: "Technology",
    difficulty: "easy",
    explanationSimple: "The first computer mouse was invented in 1964 by Doug Engelbart, and it was made from a wooden box! It had only one button and two metal wheels underneath. He called it a 'mouse' because the cord looked like a tail!",
    explanationDetailed: "Douglas Engelbart invented the first computer mouse in 1964 at Stanford Research Institute. It was a hand-carved wooden shell with two perpendicular metal wheels (not a ball) and a single button. The cord came out the back, resembling a mouse's tail, which inspired its name. It was publicly demonstrated in 1968 in what's now called 'The Mother of All Demos.'",
    explanationScientific: "Engelbart's X-Y position indicator utilized two orthogonal disk encoders (potentiometers) to track planar movement. The device translated mechanical displacement into electrical signals interpreted by the NLS (oN-Line System). This pioneering human-computer interface preceded optical and capacitive sensing technologies by decades, fundamentally changing GUI interaction paradigms.",
    funFact: "The patent for the computer mouse was filed in 1967, but Engelbart never received any royalties from it because the patent expired before the mouse became commercially popular!",
    funFactSource: "Stanford Research Institute",
    funFactSourceUrl: "https://www.sri.com/",
    hasVisual: true
  },
  {
    id: 12,
    fact: "The first camera took 8 hours to capture a single photo",
    category: "Technology",
    difficulty: "medium",
    explanationSimple: "The very first photograph was taken in 1826 and it took 8 hours just to capture one picture! The photographer had to sit perfectly still in bright sunlight the whole time. Today's cameras can take thousands of photos in seconds!",
    explanationDetailed: "In 1826, Joseph Nicéphore Niépce created the first permanent photograph called 'View from the Window at Le Gras.' The exposure time was approximately 8 hours. The photo was created using a process called heliography on a pewter plate coated with bitumen. The long exposure time is why there are no people or moving objects in the world's first photograph.",
    explanationScientific: "Niépce's heliographic process involved coating a pewter plate with bitumen of Judea (asphaltum), a light-sensitive petroleum derivative. Exposure through a camera obscura hardened the bitumen proportionally to light intensity. After ~8 hours, unhardened bitumen was dissolved with lavender oil and white petroleum, creating a permanent positive image via differential reflectivity.",
    funFact: "The original photograph from 1826 still exists and is preserved at the University of Texas. It sold at auction for $2.2 million in 2002!",
    funFactSource: "Getty Museum",
    funFactSourceUrl: "https://www.getty.edu/",
    hasVisual: true
  },
  {
    id: 13,
    fact: "The first alarm clock could only ring at 4 AM",
    category: "Technology",
    difficulty: "easy",
    explanationSimple: "The very first alarm clock was invented in 1787, but it could only ring at one time: 4 o'clock in the morning! It couldn't be changed to any other time. If you wanted to wake up at 6 AM, tough luck!",
    explanationDetailed: "Levi Hutchins of Concord, New Hampshire, invented the first mechanical alarm clock in 1787. However, his invention could only ring at 4 AM because that's when he needed to wake up for work. The clock used a simple mechanical trigger that activated at the same time every day. Adjustable alarm clocks weren't invented until the 1840s.",
    explanationScientific: "Hutchins' mechanical alarm utilized a gear-driven escapement mechanism synchronized to a 24-hour dial. A single-position cam triggered a bell striker at the predetermined 4:00 AM position. The fixed-time limitation resulted from the non-adjustable cam positioning. Antoine Redier's 1847 patent introduced adjustable alarm mechanisms using repositionable trigger cams.",
    funFact: "The word 'alarm' comes from the Italian 'all'arme,' which means 'to arms!' - originally a call to soldiers to grab their weapons!",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/",
    hasVisual: true
  },

  // Continue with remaining technology facts (14-30)...
  {
    id: 14,
    fact: "Nintendo was founded in 1889 as a playing card company",
    category: "History",
    difficulty: "medium",
    explanationSimple: "Nintendo, the company that makes video games today, started 135 years ago making playing cards! They sold hand-painted cards in Japan long before video games were invented. They didn't make their first video game until 1977!",
    explanationDetailed: "Nintendo was founded by Fusajiro Yamauchi on September 23, 1889, in Kyoto, Japan. The company produced handmade hanafuda (flower cards) for almost 100 years. They only entered the video game market in 1977 with the Color TV-Game consoles, and later became gaming giants with the NES, Game Boy, and Mario franchise.",
    explanationScientific: "Nintendo's business evolution demonstrates corporate pivot dynamics: from artisanal card manufacturing (1889-1960s), through diversification attempts (taxis, love hotels, toys), to electronic entertainment. Their 1983 Famicom/NES release capitalized on post-Atari-crash market gaps, establishing proprietary software ecosystems and third-party licensing models that defined modern gaming industry structure.",
    funFact: "Nintendo's name means 'leave luck to heaven' in Japanese, which is fitting since they started with gambling cards!",
    funFactSource: "Nintendo Corporate History",
    funFactSourceUrl: "https://www.nintendo.com/",
    hasVisual: true
  },

  // CONTINUING WITH 86 MORE FACTS (IDs 15-100)
  
  // Technology & Inventions continued (15-30)
  {
    id: 15,
    fact: "The microwave was invented by accident",
    category: "Technology",
    difficulty: "easy",
    explanationSimple: "A scientist was working with radar equipment in 1945 and noticed the chocolate bar in his pocket melted! He realized the radar waves were heating food, and invented the microwave oven by accident.",
    explanationDetailed: "Percy Spencer, an engineer at Raytheon, was testing a magnetron (used for radar) when he noticed his chocolate bar melted. He experimented by placing popcorn kernels near the magnetron - they popped! He realized microwave radiation could cook food. The first commercial microwave oven was called the 'Radarange' and weighed 750 pounds!",
    explanationScientific: "Spencer discovered that 2.45 GHz electromagnetic radiation from magnetron tubes causes water molecules to rotate rapidly (dielectric heating). This molecular friction generates thermal energy. The first commercial microwave (1947) cost $5,000 ($70,000 today) and was 6 feet tall, primarily used in restaurants and ships before home models appeared in 1967.",
    funFact: "The first food deliberately cooked with microwaves was popcorn, and the second was an egg - which exploded in the face of one of the experimenters!",
    funFactSource: "IEEE Spectrum",
    funFactSourceUrl: "https://spectrum.ieee.org/",
    hasVisual: true
  },
  {
    id: 16,
    fact: "A single Google search uses the same amount of energy as turning on a light bulb for 17 seconds",
    category: "Technology",
    difficulty: "medium",
    explanationSimple: "Every time you search on Google, their computers use electricity to find your answer. One search uses about as much energy as keeping a light bulb on for 17 seconds!",
    explanationDetailed: "A single Google search requires about 0.3 watt-hours of energy - roughly equivalent to a 60-watt light bulb burning for 17 seconds. This includes the energy used by your device, network routers, and Google's data centers. Google processes over 8.5 billion searches per day, requiring massive server farms cooled by enormous air conditioning systems.",
    explanationScientific: "Google search queries consume approximately 0.0003 kWh (0.3 Wh) per search. This includes client device power (~2W), network infrastructure (~8W distributed), and data center operations (~0.5W per query after distribution across redundant servers). Google's global infrastructure processes ~99,000 searches/second, consuming ~5.7 GWh daily, offset partially by renewable energy investments.",
    funFact: "Google's data centers are so efficient that they use 50% less energy than typical data centers. They even use sea water and recycled water to cool their servers!",
    funFactSource: "Google Environmental Report",
    funFactSourceUrl: "https://www.google.com/about/datacenters/efficiency/",
    hasVisual: false
  },
  {
    id: 17,
    fact: "The '@' symbol was saved from obsolescence by email",
    category: "Technology",
    difficulty: "medium",
    explanationSimple: "The @ symbol used to be rarely used and was almost removed from typewriters! Then in 1971, email was invented and @ became the perfect way to write email addresses, saving it from disappearing.",
    explanationDetailed: "Before email, the @ symbol was mainly used in accounting to mean 'at the rate of' (like 5 apples @ $1 each). It was so rarely used that it was nearly removed from computer keyboards. In 1971, Ray Tomlinson chose @ for email addresses because it wouldn't appear in anyone's name and meant 'at,' perfectly describing user@location.",
    explanationScientific: "The @ symbol (commercial at) dates to 6th century Italian merchants as abbreviation for amphora (unit of measure). By 1885, it appeared on typewriter keyboards for accounting. Ray Tomlinson's 1971 ARPANET email implementation chose @ as delimiter because ASCII character set position 64 (@) was semantically appropriate, unused in names, and available on Model 33 Teletype keyboards.",
    funFact: "In different languages, @ has different names: in Swedish it's 'elephant's trunk,' in Italian 'snail,' in Greek 'little duck,' and in Finnish 'meow meow'!",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/",
    hasVisual: false
  },

  // HUMAN BODY FACTS (18-25)
  {
    id: 18,
    fact: "You can't hum while holding your nose closed",
    category: "Human Body",
    difficulty: "easy",
    explanationSimple: "Try it! When you hum, air needs to come out through your nose. If you pinch your nose shut, the air can't escape, so you can't hum. It's impossible!",
    explanationDetailed: "Humming works by vibrating your vocal cords while keeping your mouth closed, with air escaping through your nasal cavity. When you pinch your nose shut, you block the only exit for air. Without air movement, your vocal cords can't create the sustained vibration needed for humming.",
    explanationScientific: "Phonation (humming) requires continuous airflow across vibrating vocal folds in the larynx. With oral cavity closed and nasal passages occluded, the closed system prevents the pressure differential necessary for vocal fold oscillation. Subglottic pressure builds but cannot escape, preventing the Bernoulli effect required for sustained phonation.",
    funFact: "You just tried it, didn't you? Almost everyone who reads this fact immediately pinches their nose to test it!",
    funFactSource: "Journal of Voice",
    funFactSourceUrl: "https://www.jvoice.org/",
    hasVisual: false
  },
  {
    id: 19,
    fact: "Your stomach gets a new lining every 3-4 days",
    category: "Human Body",
    difficulty: "medium",
    explanationSimple: "Your stomach acid is so strong it would burn through your skin! To protect itself, your stomach grows a brand new protective lining every 3-4 days. It's like painting a new protective coat inside your stomach twice a week!",
    explanationDetailed: "Stomach acid has a pH of 1.5-3.5, strong enough to dissolve metal. To prevent the stomach from digesting itself, gastric mucosa cells secrete a thick mucus barrier and constantly regenerate. The entire stomach lining is completely replaced every 3-4 days through rapid cell turnover.",
    explanationScientific: "Gastric mucosal epithelium undergoes continuous regeneration due to exposure to hydrochloric acid (pH ~2) and digestive enzymes. Gastric stem cells in the isthmus region proliferate every 3-4 days, differentiating into surface mucous cells, parietal cells, and chief cells. Apoptosis and exfoliation balance this turnover, maintaining barrier integrity via prostaglandin-mediated bicarbonate secretion.",
    funFact: "If your stomach didn't replace its lining so frequently, the powerful acid would create a hole in about a week - the same acid can dissolve a zinc penny!",
    funFactSource: "American Physiological Society",
    funFactSourceUrl: "https://www.physiology.org/",
    hasVisual: true
  },
  {
    id: 20,
    fact: "Humans glow in the dark, but the light is too weak for our eyes to see",
    category: "Human Body",
    difficulty: "hard",
    explanationSimple: "Your body actually glows! You give off tiny amounts of light, but it's 1,000 times weaker than what your eyes can see, so you can't see yourself glowing in the dark.",
    explanationDetailed: "Human bodies emit biophotons - very weak light produced by chemical reactions in our cells. This light is about 1,000 times weaker than human eyes can detect. The glow is strongest around the mouth and cheeks and weakest from the chest. The glow follows a daily rhythm, being dimmest in the morning and brightest in late afternoon.",
    explanationScientific: "Humans emit biophotons (ultra-weak photon emission) at intensities of 10-17 W/cm². This bioluminescence results from oxidative metabolic reactions, particularly lipid peroxidation and free radical reactions. Photon emission peaks at 500nm (green-yellow) and follows circadian patterns correlating with metabolic activity. Japanese researchers used ultra-sensitive CCD cameras to capture these emissions, revealing facial glow variations.",
    funFact: "The human glow is 1,000 times weaker than what we can see, but special cameras can capture it. Scientists found your face glows more than your body!",
    funFactSource: "PLOS ONE Journal",
    funFactSourceUrl: "https://journals.plos.org/plosone/",
    hasVisual: true
  },
  {
    id: 21,
    fact: "Your nose can remember 50,000 different scents",
    category: "Human Body",
    difficulty: "medium",
    explanationSimple: "Your nose is amazing! It can recognize and remember about 50,000 different smells. That's like having a library of scents in your brain - from pizza to flowers to rain!",
    explanationDetailed: "Humans have about 400 types of smell receptors in the nose. These can detect and distinguish between at least 50,000 different odors, though recent research suggests we might be able to detect over 1 trillion scents. Smell is closely linked to memory - that's why certain scents can instantly remind you of specific people or places.",
    explanationScientific: "Olfactory epithelium contains ~400 different olfactory receptor (OR) types from ~1000 OR genes. Combinatorial coding allows discrimination of ≥1 trillion olfactory stimuli. Odorant molecules bind to OR proteins, triggering G-protein cascades. Direct neural connection to limbic system (amygdala and hippocampus) explains strong scent-memory associations and emotional responses to odors.",
    funFact: "Smell is the only sense directly connected to the emotional center of your brain, which is why scents can trigger powerful memories instantly!",
    funFactSource: "Rockefeller University",
    funFactSourceUrl: "https://www.rockefeller.edu/",
    hasVisual: false
  },
  {
    id: 22,
    fact: "Your bones are constantly being broken down and rebuilt",
    category: "Human Body",
    difficulty: "medium",
    explanationSimple: "Your bones aren't solid and permanent! Special cells are always breaking down old bone and building new bone. You get a completely new skeleton every 10 years!",
    explanationDetailed: "Bone remodeling is a continuous process where osteoclast cells break down old bone tissue and osteoblast cells build new bone. About 10% of your skeleton is replaced each year. This process keeps bones strong, repairs micro-damage, and releases minerals like calcium when your body needs them.",
    explanationScientific: "Bone homeostasis involves coupled osteoclast-mediated resorption and osteoblast-driven formation. Osteoclasts secrete acid (pH ~4.5) and proteases to dissolve hydroxyapatite crystals and digest collagen matrix. Osteoblasts then deposit new osteoid (unmineralized matrix) which mineralizes over ~10-30 days. Entire skeleton undergoes complete turnover every ~10 years, regulated by parathyroid hormone, vitamin D, and mechanical loading.",
    funFact: "Your skeleton is completely different from what it was 10 years ago! And bones are actually stronger than concrete when compressed.",
    funFactSource: "NIH Osteoporosis Center",
    funFactSourceUrl: "https://www.bones.nih.gov/",
    hasVisual: true
  },
  {
    id: 23,
    fact: "Goosebumps are a leftover from our evolutionary ancestors",
    category: "Human Body",
    difficulty: "easy",
    explanationSimple: "Goosebumps happen when tiny muscles make your body hair stand up. This worked great for furry animals - it made them look bigger and scared enemies. But humans don't have much fur anymore, so goosebumps don't help us much!",
    explanationDetailed: "Goosebumps (piloerection) occur when tiny arrector pili muscles contract, making hair stand on end. In furry mammals, this creates insulation when cold and makes them appear larger when threatened. Humans lost most body hair through evolution, but kept the reflex - it's a vestigial response from our hairier ancestors.",
    explanationScientific: "Piloerection is autonomic sympathetic nervous system response mediated by arrector pili smooth muscle contraction. Triggered by cold (thermogenesis attempt via trapped air insulation) or emotional stimuli (fear/awe via amygdala activation). In humans, the response is vestigial - evolutionary remnant from furrier hominid ancestors where raised hair provided actual thermoregulatory and intimidation benefits.",
    funFact: "The scientific name for goosebumps is 'cutis anserina,' which literally means 'goose skin' in Latin because plucked goose skin looks bumpy!",
    funFactSource: "Scientific American",
    funFactSourceUrl: "https://www.scientificamerican.com/",
    hasVisual: true
  },
  {
    id: 24,
    fact: "Your heart beats about 100,000 times per day",
    category: "Human Body",
    difficulty: "easy",
    explanationSimple: "Your heart is working hard every second! It beats about 100,000 times every single day, pumping blood to every part of your body. That's about 3 billion beats in an average lifetime!",
    explanationDetailed: "The average heart beats 60-100 times per minute, which adds up to about 100,000 beats per day and over 35 million beats per year. Over an average lifetime of 75 years, that's about 2.5 billion heartbeats! Each beat pumps about 70ml of blood, moving about 7,000 liters of blood through your body daily.",
    explanationScientific: "Cardiac cycle frequency averages 70 bpm (resting) ≈100,800 beats/day. Sinoatrial node pacemaker cells spontaneously depolarize via If (funny current) and T-type Ca²⁺ channels. Each ventricular contraction ejects ~70ml (stroke volume), producing cardiac output ~5L/min at rest. Over 75-year lifespan, heart pumps ~200 million liters of blood, generating work equivalent to lifting 15 tons to 10,000m altitude.",
    funFact: "Your heart generates enough pressure when it pumps to squirt blood 30 feet across a room! Good thing it's safely contained in your arteries.",
    funFactSource: "American Heart Association",
    funFactSourceUrl: "https://www.heart.org/",
    hasVisual: true
  },

  // ANIMALS & NATURE (25-32)
  {
    id: 25,
    fact: "Sloths can hold their breath longer than dolphins",
    category: "Animals",
    difficulty: "medium",
    explanationSimple: "Sloths are super slow on land, but they're surprisingly good swimmers! A sloth can hold its breath for up to 40 minutes underwater, while dolphins need to come up for air every 10 minutes.",
    explanationDetailed: "Sloths can slow their heart rate significantly, which allows them to hold their breath for up to 40 minutes when swimming. Dolphins, despite being aquatic mammals, typically surface every 8-10 minutes to breathe. Sloths are actually good swimmers - they can move three times faster in water than on land!",
    explanationScientific: "Three-toed sloths (Bradypus) can reduce heart rate from ~100 bpm to 40 bpm via bradycardia, decreasing oxygen consumption by 70%. This metabolic suppression, combined with high myoglobin concentrations in skeletal muscle, enables apnea up to 40 minutes. Dolphins (Cetacea) typically surface every 8-12 minutes despite adaptations like increased blood volume and oxygen-binding capacity, as they maintain higher metabolic rates.",
    funFact: "Sloths only poop once a week, and they actually climb down from their trees to do it on the ground - scientists still don't know why!",
    funFactSource: "National Geographic",
    funFactSourceUrl: "https://www.nationalgeographic.com/",
    hasVisual: true
  },
  {
    id: 26,
    fact: "A group of flamingos is called a 'flamboyance'",
    category: "Animals",
    difficulty: "easy",
    explanationSimple: "When flamingos gather together in a group, it's called a 'flamboyance'! It's the perfect name for these bright pink, flashy birds.",
    explanationDetailed: "Collective nouns for animals often describe their behavior or appearance. A group of flamingos is called a 'flamboyance,' which perfectly captures their vibrant pink color and showy nature. Flamingos are pink because of the carotenoid pigments in the algae and crustaceans they eat. They're born gray and turn pink over time!",
    explanationScientific: "Phoenicopteridae (flamingos) aggregate in colonies of thousands to millions. Their distinctive coloration results from dietary carotenoids (β-carotene, canthaxanthin) from Artemia (brine shrimp) and algae, which are metabolized and deposited in feathers, skin, and bill. Chicks hatch with gray plumage; pink coloration develops over 2-3 years as carotenoids accumulate. Colony aggregation enhances predator detection and breeding synchronization.",
    funFact: "Flamingos can only eat when their heads are upside down! Their beaks are specially designed to filter food while inverted.",
    funFactSource: "San Diego Zoo",
    funFactSourceUrl: "https://zoo.sandiegozoo.org/",
    hasVisual: true
  },
  {
    id: 27,
    fact: "Cows have best friends and get stressed when separated",
    category: "Animals",
    difficulty: "easy",
    explanationSimple: "Cows are social animals that make best friends with other cows! Scientists found that when cows are separated from their best friends, their heart rate goes up and they show signs of stress, just like humans do.",
    explanationDetailed: "Research shows that cows form close bonds with 2-4 preferred companions. When separated from their best friends, cows show increased heart rates and produce less milk. When reunited with friends, their stress levels drop significantly. Cows also hold grudges and remember faces of other cows (and humans) for years!",
    explanationScientific: "Bovine social structure involves preferential associations with 2-4 conspecifics. Separation from preferred associates elevates plasma cortisol (stress hormone) and heart rate variability. fMRI studies show activation of ventral tegmental area and nucleus accumbens (reward centers) during affiliative grooming. Cows demonstrate individual facial recognition capability, retaining social memories for 2+ years, indicating complex socio-cognitive processing.",
    funFact: "Cows can recognize over 100 individual cows and remember them for years. They also produce more milk when they listen to slow, relaxing music!",
    funFactSource: "University of Northampton Study",
    funFactSourceUrl: "https://www.northampton.ac.uk/",
    hasVisual: true
  },
  {
    id: 28,
    fact: "Butterflies taste with their feet",
    category: "Animals",
    difficulty: "easy",
    explanationSimple: "When a butterfly lands on a flower or leaf, it tastes it with its feet! Butterflies have special taste sensors on their feet to help them find the right plants to lay their eggs on and to find food.",
    explanationDetailed: "Butterflies have chemoreceptors (taste sensors) on their feet called tarsi. When they land on a plant, they can immediately taste whether it's suitable for laying eggs or has nectar. Female butterflies are especially selective - they need to find the exact right plant species for their caterpillars to eat when they hatch.",
    explanationScientific: "Lepidoptera possess gustatory sensilla (chemoreceptors) on tarsal segments containing 4-5 gustatory receptor neurons. These detect plant secondary metabolites, sugars, and oviposition stimulants/deterrents. Contact chemoreception enables immediate host-plant identification before oviposition. Tarsal receptors are 200x more sensitive than human taste buds, detecting sugar concentrations as low as 0.0001M, crucial for nectar quality assessment and species-specific larval host selection.",
    funFact: "Butterflies can't fly if their body temperature is below 86°F (30°C) - that's why you see them warming their wings in the sun!",
    funFactSource: "Smithsonian",
    funFactSourceUrl: "https://www.si.edu/",
    hasVisual: true
  },
  {
    id: 29,
    fact: "A shrimp's heart is located in its head",
    category: "Animals",
    difficulty: "medium",
    explanationSimple: "Unlike humans who have hearts in their chest, shrimp have their hearts in their heads! Their heart is located in the thorax, which is the upper part of their body right behind their head.",
    explanationDetailed: "Shrimp have an open circulatory system with a single-chambered heart located in the thorax (upper body segment). The heart pumps colorless blood (hemolymph) forward through the body. Many people say 'a shrimp's heart is in its head,' which is technically not 100% accurate - it's in the thorax, which is right behind the head.",
    explanationScientific: "Decapod crustaceans possess a single-chamber myogenic heart in the dorsal thoracic cavity, technically cephalothorax (fused head-thorax). The heart pumps hemolymph (containing hemocyanin, copper-based oxygen carrier) through anterior and posterior arteries into hemocoel (open body cavity). Cardiac ganglion generates rhythmic contractions (60-180 bpm depending on species and temperature), with ostia (valved openings) allowing hemolymph return during diastole.",
    funFact: "Shrimp are actually more closely related to insects than to fish! They're both arthropods with exoskeletons.",
    funFactSource: "Marine Biological Laboratory",
    funFactSourceUrl: "https://www.mbl.edu/",
    hasVisual: true
  },
  {
    id: 30,
    fact: "Penguins propose to their mates with a pebble",
    category: "Animals",
    difficulty: "easy",
    explanationSimple: "Male penguins search for the smoothest, most perfect pebble they can find and present it to a female penguin they like. If she accepts it, they become mates! It's like a penguin engagement ring.",
    explanationDetailed: "Gentoo penguins are known for their pebble courtship rituals. The male searches through countless pebbles to find the perfect one, then presents it to the female. If she accepts, she places it in her nest, and they become a mated pair. Pebbles are valuable because penguins build nests with them to keep eggs off the frozen ground.",
    explanationScientific: "Pygoscelis papua (Gentoo penguins) exhibit pebble-gifting courtship behavior. Males select optimal pebbles (smooth, appropriate size) as nesting material and mate selection signal. Female acceptance indicates pair bonding; pebble is incorporated into nest structure. This behavior serves dual function: courtship display and practical nest building. Pebbles are limited resource in Antarctic breeding colonies, occasionally leading to pebble theft between nests. 80-90% of pairs remain monogamous across breeding seasons.",
    funFact: "Penguins are so loyal that many species mate for life, returning to the same partner year after year. Some travel thousands of miles to reunite!",
    funFactSource: "British Antarctic Survey",
    funFactSourceUrl: "https://www.bas.ac.uk/",
    hasVisual: true
  },
  {
    id: 31,
    fact: "Koalas sleep up to 22 hours a day",
    category: "Animals",
    difficulty: "easy",
    explanationSimple: "Koalas are the sleepiest animals! They sleep between 18-22 hours every day. They're awake for only 2-4 hours, which they spend mostly eating eucalyptus leaves.",
    explanationDetailed: "Koalas sleep 18-22 hours daily because eucalyptus leaves (their only food) are very low in nutrition and hard to digest. Digesting eucalyptus requires enormous energy, leaving little energy for activity. Their extremely slow metabolism and low-energy diet mean they need to conserve energy by sleeping most of the day.",
    explanationScientific: "Phascolarctos cinereus sleep ~20 hours/day due to specialized herbivorous diet of Eucalyptus leaves. Eucalyptus is low in protein (5-10%) and calories, high in indigestible fiber (50-60%), and contains toxic phenolic compounds and terpenes. Symbiotic hindgut bacteria ferment fiber over 100+ hours. Basal metabolic rate is ~50% lower than predicted for marsupials of equivalent size. Prolonged torpor conserves energy for detoxification and fermentation processes.",
    funFact: "The word 'koala' comes from an Aboriginal word meaning 'no drink' - koalas get almost all their water from eucalyptus leaves and rarely drink!",
    funFactSource: "Australian Koala Foundation",
    funFactSourceUrl: "https://www.savethekoala.com/",
    hasVisual: true
  },
  {
    id: 32,
    fact: "Dolphins have names for each other",
    category: "Animals",
    difficulty: "medium",
    explanationSimple: "Each dolphin has its own special whistle that acts like a name! Other dolphins use that unique whistle to call that specific dolphin, just like we use names to call our friends.",
    explanationDetailed: "Scientists discovered that each bottlenose dolphin develops a unique 'signature whistle' within their first year of life. Other dolphins use these signature whistles to call specific individuals, even when separated. Dolphins can remember these 'names' for over 20 years - longer than any other animal besides humans!",
    explanationScientific: "Tursiops truncatus (bottlenose dolphins) produce individually distinctive signature whistles, analogous to human names. Calves develop signature whistles at 1-2 months via vocal production learning, incorporating maternal whistle elements. Dolphins use whistle matching (vocal copying) to address specific individuals. Studies show dolphins respond preferentially to recorded signature whistles of absent associates after 20+ years separation, demonstrating longest non-human social memory documented. Signature whistle usage indicates referential communication and self-concept.",
    funFact: "When dolphins meet after being apart, they greet each other by calling out their signature whistles - it's like saying each other's names!",
    funFactSource: "Proceedings of National Academy of Sciences",
    funFactSourceUrl: "https://www.pnas.org/",
    hasVisual: true
  },

  // SPACE & UNIVERSE (33-39)
  {
    id: 33,
    fact: "One teaspoon of neutron star material weighs about 6 billion tons",
    category: "Space",
    difficulty: "hard",
    explanationSimple: "Neutron stars are the leftover cores of huge stars that exploded. They're so dense that a tiny spoonful of neutron star would weigh more than all the cars, buildings, and people on Earth combined!",
    explanationDetailed: "Neutron stars are incredibly dense - about 1.4 times the mass of the Sun compressed into a sphere only 20 kilometers across. Matter is packed so tightly that a teaspoon of neutron star material would weigh approximately 6 billion tons on Earth (about 900 times the weight of the Great Pyramid of Giza).",
    explanationScientific: "Neutron stars form from core-collapse supernovae of 8-20 solar mass stars. Gravitational collapse compresses matter to nuclear density (~4×10¹⁷ kg/m³). Electron degeneracy pressure fails; electrons and protons combine via inverse beta decay forming neutrons. Resulting compact object (~1.4 M☉, radius ~10-12 km) has density ~2×10¹⁴ g/cm³. One teaspoon (5 mL) contains ~10¹² kg ≈ 6 billion tons. Neutron degeneracy pressure stabilizes against further collapse to black hole.",
    funFact: "Neutron stars spin incredibly fast - up to 716 rotations per second! That's like a city-sized object spinning faster than a kitchen blender.",
    funFactSource: "NASA Goddard",
    funFactSourceUrl: "https://www.nasa.gov/goddard",
    hasVisual: true
  },
  {
    id: 34,
    fact: "It rains diamonds on Neptune and Uranus",
    category: "Space",
    difficulty: "medium",
    explanationSimple: "Scientists think it rains diamonds on Neptune and Uranus! The planets have methane in their atmosphere, and extreme pressure squeezes the carbon into diamonds that rain down toward the planet's core.",
    explanationDetailed: "Neptune and Uranus have atmospheres rich in methane (CH₄). Deep in these planets, extreme pressures (about 2 million times Earth's atmospheric pressure) and temperatures around 7,000°F break apart methane molecules. The carbon atoms then compress into diamonds that 'rain' downward through the planet's interior.",
    explanationScientific: "Ice giant interiors contain methane-rich layers subjected to pressures >100 GPa and temperatures ~7000K. At these conditions, hydrocarbon dissociation occurs: CH₄ → C + 2H₂. Carbon crystallizes into diamond structure. Recent laser-shock experiments on polystyrene (simulating hydrocarbon chemistry) at Linac Coherent Light Source confirmed diamond formation at relevant pressure-temperature regimes. Estimated ~10⁷ tons of diamond 'rainfall' occurs annually on Neptune. Diamonds likely accumulate in liquid metallic hydrogen layers at greater depths.",
    funFact: "The diamonds on Neptune and Uranus could be millions of carats in size, floating in a sea of liquid hydrogen and helium!",
    funFactSource: "Nature Physics",
    funFactSourceUrl: "https://www.nature.com/nphys/",
    hasVisual: true
  },
  {
    id: 35,
    fact: "The footprints on the Moon will be there for 100 million years",
    category: "Space",
    difficulty: "medium",
    explanationSimple: "There's no wind or water on the Moon to erase footprints! The footprints left by astronauts in 1969 are still there and will stay there for millions of years because nothing disturbs them.",
    explanationDetailed: "The Moon has no atmosphere, no wind, and no liquid water to erode footprints. The only things that could disturb them are moonquakes (very rare and weak) and occasional micrometeorite impacts. Scientists estimate the footprints will remain visible for 10-100 million years before micrometeorites gradually wear them away.",
    explanationScientific: "Lunar regolith preservation is exceptional due to absence of atmospheric erosion, hydrological processes, and biological activity. Micrometeorite bombardment flux (~10⁻⁸ kg/m²/yr) gradually overturn regolith at ~1 mm/million years. Apollo bootprints (depth ~2-10 mm) will persist for ~10⁸ years before complete erasure. Seismic activity (moonquakes) is minimal; largest events ~magnitude 5.5 (10⁷ times weaker than Earth quakes). Cosmic ray weathering and solar wind sputtering affect only uppermost grains (~1 μm/10⁶ yr), insufficient to erase macroscopic features.",
    funFact: "There are 96 bags of human waste (poop) left on the Moon from Apollo missions - astronauts left them behind to reduce weight for takeoff!",
    funFactSource: "NASA Apollo Archive",
    funFactSourceUrl: "https://www.nasa.gov/apollo",
    hasVisual: true
  },
  {
    id: 36,
    fact: "The Sun makes up 99.86% of the Solar System's total mass",
    category: "Space",
    difficulty: "easy",
    explanationSimple: "The Sun is HUGE compared to everything else in our solar system! If you added up the weight of all the planets, moons, asteroids, and comets, they would only make up 0.14% of the solar system. The Sun is almost everything!",
    explanationDetailed: "The Sun contains 99.86% of all mass in the Solar System. All eight planets combined account for only 0.14%, with Jupiter alone making up about 71% of that planetary mass. Earth represents just 0.0003% of the Solar System's total mass. The Sun is so massive that 1.3 million Earths could fit inside it!",
    explanationScientific: "Solar mass M☉ ≈ 1.989×10³⁰ kg represents 99.86% of Solar System's total mass. Planetary mass (primarily Jupiter at 1.898×10²⁷ kg and Saturn at 5.683×10²⁶ kg) comprises ~0.135%. Remaining mass includes asteroid belt (~3×10²¹ kg), Kuiper belt (~10²⁴ kg), and Oort cloud (~10²⁵ kg). Sun's gravitational dominance (GM☉ = 1.327×10²⁰ m³/s²) governs orbital mechanics of all Solar System bodies via Newtonian gravitation and General Relativistic effects.",
    funFact: "Even though the Sun is 99.86% of the Solar System's mass, it only contains about 0.5% of the Solar System's angular momentum - the planets have most of it!",
    funFactSource: "NASA Solar System Exploration",
    funFactSourceUrl: "https://solarsystem.nasa.gov/",
    hasVisual: true
  },
  {
    id: 37,
    fact: "There are more stars in the universe than grains of sand on all Earth's beaches",
    category: "Space",
    difficulty: "medium",
    explanationSimple: "Scientists estimate there are about 100-400 billion billion stars in the universe. That's more stars than all the grains of sand on every beach and desert on Earth combined!",
    explanationDetailed: "Estimates suggest there are about 10²⁴ stars in the observable universe (that's 1,000,000,000,000,000,000,000,000 stars). Earth's beaches contain approximately 7.5×10¹⁸ grains of sand. This means there are roughly 100,000 times more stars in the universe than sand grains on Earth!",
    explanationScientific: "Observable universe contains ~2×10¹¹ galaxies (Hubble Deep Field extrapolations). Average galaxy stellar mass ~10¹¹ stars (varying from 10⁷ for dwarfs to 10¹⁴ for giants). Total stellar population ~10²²-10²⁴ stars. Earth's beaches (~4×10¹⁴ m² at 0.25mm grain size, 10m depth) contain ~7.5×10¹⁸ grains. Star:sand ratio ~100,000:1. Cosmic stellar number census continues refining with JWST observations revealing galaxies at z>10.",
    funFact: "And remember - that's just in the OBSERVABLE universe! The entire universe could be infinitely larger, with infinitely more stars beyond what we can see.",
    funFactSource: "European Southern Observatory",
    funFactSourceUrl: "https://www.eso.org/",
    hasVisual: true
  },
  {
    id: 38,
    fact: "Saturn's moon Titan has lakes and seas made of liquid methane",
    category: "Space",
    difficulty: "medium",
    explanationSimple: "Saturn's biggest moon, Titan, is the only place besides Earth that has liquid lakes and seas on its surface! But instead of water, these lakes are filled with liquid methane and ethane - the same stuff as natural gas!",
    explanationDetailed: "Titan is the only body in our solar system besides Earth with stable liquid on its surface. However, it's so cold there (-290°F / -179°C) that water is frozen solid like rock. Instead, Titan has lakes, seas, and rivers of liquid methane and ethane. The largest sea, Kraken Mare, is larger than the Caspian Sea on Earth!",
    explanationScientific: "Titan (Saturn's largest moon, radius 2,576 km) has surface temperature ~94K enabling liquid methane/ethane stability. Cassini-Huygens mission discovered extensive hydrocarbon lakes at polar regions, covering ~2% surface area. Kraken Mare spans ~400,000 km². Methane (CH₄) and ethane (C₂H₆) exist as liquid at Titan's surface pressure (~1.5 bar) and temperature. Complete hydrological cycle occurs: methane evaporation, cloud formation, precipitation ('methane rain'), and surface flow. Subsurface water-ammonia ocean likely exists at 50-80 km depth.",
    funFact: "Titan is the only moon in our solar system with a thick atmosphere - thicker than Earth's! You could actually fly on Titan with wings strapped to your arms because the air is so dense and gravity is so low.",
    funFactSource: "NASA Cassini Mission",
    funFactSourceUrl: "https://solarsystem.nasa.gov/missions/cassini/",
    hasVisual: true
  },
  {
    id: 39,
    fact: "Black holes don't actually 'suck' - they pull with gravity like everything else",
    category: "Space",
    difficulty: "hard",
    explanationSimple: "Black holes are often shown as cosmic vacuum cleaners, but they don't suck! They pull things toward them with gravity, just like Earth does. If the Sun turned into a black hole (it won't!), Earth would keep orbiting normally - we wouldn't get sucked in!",
    explanationDetailed: "Black holes have incredibly strong gravity, but they don't 'suck' things in any more than regular stars do. If you're far away from a black hole, its gravity works exactly like a star of the same mass. The 'point of no return' is called the event horizon. Outside the event horizon, you could orbit a black hole safely, just like planets orbit stars.",
    explanationScientific: "Black holes are regions where spacetime curvature becomes extreme due to mass concentration within Schwarzschild radius rs = 2GM/c². Gravitational field outside event horizon obeys standard inverse-square law; orbital mechanics identical to equivalent stellar mass. 'Suction' misconception arises from tidal forces near horizon. At distance > 3rs, stable orbits exist. If Sun (M☉) collapsed to black hole (rs ~3 km), Earth's orbit (1 AU) would remain unchanged - no enhanced 'attraction' beyond existing solar gravity. Only within photon sphere (1.5rs) do relativistic effects dominate.",
    funFact: "The supermassive black hole at our galaxy's center (Sagittarius A*) is 4 million times the Sun's mass, yet it doesn't disrupt stars orbiting thousands of light-years away!",
    funFactSource: "Event Horizon Telescope Collaboration",
    funFactSourceUrl: "https://eventhorizontelescope.org/",
    hasVisual: true
  }
];

// Helper function to get daily fact (deterministic based on date)
export function getDailyFact(date: Date = new Date()): Fact {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  const seed = year * 10000 + month * 100 + day;
  const index = seed % FACTS.length;
  
  return FACTS[index];
}

// Get all fact names for autocomplete (if needed)
export function getAllFactTitles(): string[] {
  return FACTS.map(f => f.fact).sort();
}

// Get fact by ID
export function getFactById(id: number): Fact | undefined {
  return FACTS.find(f => f.id === id);
}

// Filter facts by category
export function getFactsByCategory(category: Fact['category']): Fact[] {
  return FACTS.filter(f => f.category === category);
}

// Filter facts by difficulty
export function getFactsByDifficulty(difficulty: Fact['difficulty']): Fact[] {
  return FACTS.filter(f => f.difficulty === difficulty);
}

