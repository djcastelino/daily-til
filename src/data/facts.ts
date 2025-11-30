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
  },

  // EARTH & NATURE (40-47)
  {
    id: 40,
    fact: "Antarctica is the world's largest desert",
    category: "Earth",
    difficulty: "medium",
    explanationSimple: "When you think 'desert,' you probably picture hot sand. But deserts are actually defined by how little rain they get, not temperature! Antarctica gets almost no precipitation, making it the world's largest desert - even bigger than the Sahara!",
    explanationDetailed: "A desert is defined as a region receiving less than 10 inches (250mm) of precipitation per year. Antarctica receives only about 2 inches annually (mostly as snow). With 5.5 million square miles, it's the world's largest desert - almost twice the size of the Sahara Desert (3.6 million square miles).",
    explanationScientific: "Desert classification depends on precipitation (<250 mm/year), not temperature. Antarctica receives ~50mm annual precipitation (ice-equivalent), qualifying as a polar desert. The continent's 14 million km² area makes it Earth's largest desert, exceeding Sahara (9 million km²). Extreme cold (-89.2°C minimum recorded) reduces atmospheric moisture capacity via Clausius-Clapeyron relation, creating hyper-arid conditions. Katabatic winds (gravity-driven cold air descent) further reduce humidity.",
    funFact: "Antarctica is technically a desert, but it contains 70% of Earth's fresh water - all frozen as ice! If it all melted, sea levels would rise about 200 feet.",
    funFactSource: "Antarctic Treaty System",
    funFactSourceUrl: "https://www.ats.aq/",
    hasVisual: true
  },
  {
    id: 41,
    fact: "Trees can communicate and share nutrients through underground fungal networks",
    category: "Nature",
    difficulty: "medium",
    explanationSimple: "Trees are connected underground by tiny fungus threads that work like the internet! Trees use this 'Wood Wide Web' to share water, nutrients, and even warning signals about insects or disease with other trees.",
    explanationDetailed: "Trees connect through mycorrhizal networks - symbiotic relationships with fungi. The fungi attach to tree roots and spread through the soil, connecting different trees. Through these networks, trees can transfer carbon, nitrogen, and phosphorus. Mother trees (large, old trees) can even recognize and preferentially support their own offspring through these networks!",
    explanationScientific: "Mycorrhizal fungi form symbiotic associations with ~90% of plant species. Ectomycorrhizal networks create common mycelial networks (CMN) connecting multiple host trees. Carbon isotope studies demonstrate bidirectional C-transfer between trees via hyphae. Suzanne Simard's research showed Pseudotsuga menziesii (Douglas fir) transfers photosynthate to shaded Betula papyrifera (birch) seedlings. Networks span hectares; single Armillaria ostoyae mycelium covers 965 hectares. Trees also transmit defense signals (jasmonic acid, salicylic acid precursors) through CMN.",
    funFact: "The largest living organism on Earth is a fungal network in Oregon covering 2,385 acres - that's larger than 1,600 football fields!",
    funFactSource: "Nature Journal",
    funFactSourceUrl: "https://www.nature.com/",
    hasVisual: true
  },
  {
    id: 42,
    fact: "The world's oldest living tree is over 5,000 years old",
    category: "Nature",
    difficulty: "medium",
    explanationSimple: "A bristlecone pine tree in California named 'Methuselah' is over 5,000 years old! It was already ancient when the Egyptian pyramids were being built. Its exact location is kept secret to protect it.",
    explanationDetailed: "Methuselah, a Great Basin bristlecone pine, is 4,855+ years old (as of 2024), making it the oldest known non-clonal tree. It germinated around 2832 BCE - before Stonehenge was built! An even older bristlecone pine (5,067 years old) was discovered in 2012 but its location remains undisclosed for protection.",
    explanationScientific: "Pinus longaeva (Great Basin bristlecone pine) exhibits extreme longevity via stress-induced adaptations: dense resinous wood resists decay, slow growth in harsh conditions (high altitude, low precipitation), and segmented vascular system allowing partial die-back without tree death. Dendrochronology (tree-ring dating) confirmed ages >5000 years. Oldest living confirmed specimen is 5,067 years old. Clonal colonies (e.g., Pando aspen) exceed 80,000 years, but individual stems are younger.",
    funFact: "When Methuselah sprouted, woolly mammoths were still alive on remote Arctic islands! The last mammoths died out around 1650 BCE, over 1,000 years after this tree started growing.",
    funFactSource: "US Forest Service",
    funFactSourceUrl: "https://www.fs.usda.gov/",
    hasVisual: true
  },
  {
    id: 43,
    fact: "A single bolt of lightning contains enough energy to toast 100,000 slices of bread",
    category: "Nature",
    difficulty: "easy",
    explanationSimple: "One lightning bolt has about 1 billion joules of energy! That's enough electricity to toast 100,000 slices of bread, or power a 100-watt light bulb for 3 months straight.",
    explanationDetailed: "A typical lightning bolt contains about 1-5 billion joules of energy, though only about 250 kilowatt-hours is usable. The problem is lightning lasts only microseconds, releasing energy too quickly to capture efficiently. If we could harness it, one bolt could power an average house for a month!",
    explanationScientific: "Lightning discharge transfers ~1-5×10⁹ joules, though spatial-temporal distribution limits extractable energy to ~250 kWh. Peak current reaches ~30,000 A at ~100 million V potential difference. Energy dissipates primarily as heat (thunder shock wave), light (visible/UV emission), and electromagnetic radiation (radio waves). Duration ~0.2 seconds with multiple return strokes. Toasting 100,000 bread slices requires ~10⁶ joules (assuming 10J per slice), well within lightning energy budget. Energy capture remains impractical due to unpredictability and extreme peak power (10⁹ W).",
    funFact: "The Empire State Building gets struck by lightning about 25 times per year! It was designed with a lightning rod system to safely conduct the strikes to the ground.",
    funFactSource: "NOAA National Severe Storms Laboratory",
    funFactSourceUrl: "https://www.nssl.noaa.gov/",
    hasVisual: true
  },
  {
    id: 44,
    fact: "The Pacific Ocean is shrinking while the Atlantic Ocean is growing",
    category: "Earth",
    difficulty: "medium",
    explanationSimple: "The Pacific Ocean gets about 1 inch smaller every year, while the Atlantic Ocean grows by the same amount! This is happening because of plate tectonics - the Earth's crust is constantly moving, very, very slowly.",
    explanationDetailed: "Due to plate tectonics, the Pacific Ocean is shrinking by about 2-3 centimeters per year as oceanic crust subducts beneath continental plates around the 'Ring of Fire.' Meanwhile, the Atlantic Ocean grows by about 2-5 cm/year as new seafloor forms at the Mid-Atlantic Ridge through seafloor spreading. In about 200 million years, the Pacific might close completely!",
    explanationScientific: "Pacific Ocean contracts ~2-3 cm/year via subduction at convergent margins (Japan Trench, Peru-Chile Trench, Aleutian Trench). Atlantic expands ~2.5 cm/year (varies by latitude) at Mid-Atlantic Ridge divergent boundary where new oceanic lithosphere forms via basaltic magmatism. Wilson Cycle predicts eventual Pacific closure and supercontinent formation (Pangaea Proxima or Amasia) in ~200-300 million years. GPS measurements confirm plate velocities; Pacific Plate moves ~7-11 cm/year westward while Eurasian/North American plates separate.",
    funFact: "The Atlantic Ocean didn't exist 200 million years ago! It started forming when the supercontinent Pangaea split apart, and it's still growing today.",
    funFactSource: "USGS Earthquake Hazards Program",
    funFactSourceUrl: "https://earthquake.usgs.gov/",
    hasVisual: true
  },
  {
    id: 45,
    fact: "The Amazon rainforest produces 20% of the world's oxygen",
    category: "Nature",
    difficulty: "easy",
    explanationSimple: "The Amazon rainforest is often called the 'lungs of the Earth' because its trees produce about 20% of all the oxygen in our atmosphere! It's home to 10% of all species on Earth and covers 2.1 million square miles.",
    explanationDetailed: "The Amazon rainforest spans 2.1 million square miles across nine countries in South America. Its billions of trees produce roughly 20% of Earth's oxygen through photosynthesis. However, the forest also consumes most of that oxygen through respiration, so its net oxygen contribution is close to zero. Its real value is storing carbon and regulating global climate!",
    explanationScientific: "Amazon basin contains ~390 billion trees across 5.5 million km². Photosynthetic oxygen production ~20% of global terrestrial output (28% of terrestrial NEP). However, ecosystem respiration (plant/microbial) consumes equivalent oxygen, yielding near-zero net atmospheric O₂ contribution. Primary ecological value: carbon sequestration (~150-200 Pg C stored), evapotranspiration (8 trillion tons H₂O/year affecting global circulation), biodiversity (10% of species), and climate regulation via albedo and latent heat flux. Recent studies show Amazon transitioning from carbon sink to source due to deforestation.",
    funFact: "The Amazon River releases so much fresh water into the Atlantic Ocean that you can drink fresh water from the ocean 100 miles offshore!",
    funFactSource: "World Wildlife Fund",
    funFactSourceUrl: "https://www.worldwildlife.org/",
    hasVisual: true
  },
  {
    id: 46,
    fact: "Earthquakes happen millions of times per year, but most are too small to feel",
    category: "Earth",
    difficulty: "medium",
    explanationSimple: "The Earth shakes constantly! About 500,000 earthquakes happen every year, but humans can only feel about 100,000 of them. Most are tiny tremors that only sensitive instruments can detect.",
    explanationDetailed: "An estimated 500,000 detectable earthquakes occur annually worldwide. Of these, about 100,000 can be felt by humans, and roughly 100 cause damage. Major earthquakes (magnitude 7+) occur about 10-20 times per year. The Earth's tectonic plates are constantly moving and releasing energy, causing these quakes.",
    explanationScientific: "~500,000 earthquakes/year detected by seismographs globally. Magnitude distribution follows Gutenberg-Richter law: log₁₀N = a - bM (where N = number of events, M = magnitude). For every magnitude 6 earthquake, ~10 magnitude 5 events occur, ~100 magnitude 4, etc. Only M>2.5 typically felt by humans. Major damaging earthquakes (M>7) average 15/year. Caused by sudden elastic rebound at tectonic plate boundaries (90%), intraplate stress (9%), or volcanic/human activity (1%). Most occur at Pacific Ring of Fire.",
    funFact: "The largest earthquake ever recorded was magnitude 9.5 in Chile (1960). It was so powerful it made the entire Earth vibrate like a bell for several days!",
    funFactSource: "USGS Earthquake Hazards Program",
    funFactSourceUrl: "https://earthquake.usgs.gov/",
    hasVisual: true
  },
  {
    id: 47,
    fact: "Raindrops aren't actually shaped like teardrops",
    category: "Nature",
    difficulty: "easy",
    explanationSimple: "We always draw raindrops as teardrop-shaped, but real raindrops are round! Small ones are almost perfect spheres, while larger ones look more like hamburger buns - round on top and flat on the bottom because of air resistance.",
    explanationDetailed: "Small raindrops (under 1mm) are nearly perfect spheres due to surface tension. As raindrops grow larger (2-5mm), air resistance flattens the bottom, creating a hamburger bun or parachute shape. Drops larger than 5mm become unstable and break apart. The classic 'teardrop' shape we draw doesn't actually occur in nature!",
    explanationScientific: "Raindrop morphology determined by surface tension (γ ≈ 0.073 N/m for water) versus aerodynamic drag. Small droplets (d<1mm, We<1) maintain spherical shape via surface tension minimizing surface area. Larger drops (2-5mm diameter) experience Weber number We = ρv²d/γ >1, causing bottom flattening (oblate spheroid). Terminal velocity ~9 m/s for 5mm drop. Drops >5mm (We>12) undergo Rayleigh-Taylor instability, fragmenting into smaller droplets. 'Teardrop' misconception likely from stationary pendant drops, not falling rain.",
    funFact: "Raindrops fall at different speeds depending on size - small ones fall at 2 mph while large ones can fall at 20 mph! But they never fall faster because air resistance limits them.",
    funFactSource: "NOAA Weather Education",
    funFactSourceUrl: "https://www.noaa.gov/education",
    hasVisual: true
  },

  // FOOD & SCIENCE (48-55)
  {
    id: 48,
    fact: "Pineapple contains an enzyme that breaks down protein - that's why it makes your mouth tingle",
    category: "Food",
    difficulty: "medium",
    explanationSimple: "Ever notice your mouth feels weird after eating pineapple? That's because pineapple contains bromelain, a special enzyme that breaks down protein. Since your mouth is made of protein, the pineapple is literally digesting you while you eat it!",
    explanationDetailed: "Bromelain is a protein-digesting enzyme found in pineapple, especially in the core. When you eat fresh pineapple, bromelain breaks down proteins in your mouth and tongue, causing that tingly, sometimes painful sensation. Cooking destroys bromelain, which is why canned pineapple doesn't have this effect. Bromelain is so effective it's used as a meat tenderizer!",
    explanationScientific: "Bromelain is a cysteine protease (EC 3.4.22.32) from Ananas comosus that hydrolyzes peptide bonds in proteins. Fresh pineapple contains ~1000 mg/kg bromelain. Upon contact with oral mucosa, bromelain cleaves glycoprotein bonds in epithelial cells, causing mild proteolysis of tongue/cheek tissue. Thermal denaturation (>60°C) inactivates enzyme, eliminating effect in cooked/canned pineapple. Bromelain also prevents gelatin polymerization, precluding pineapple use in gelatin desserts. Medical applications include anti-inflammatory treatment and debridement.",
    funFact: "Because of bromelain, you can't make Jell-O with fresh pineapple - the enzyme prevents the gelatin from setting! But canned pineapple works fine because the heating process destroys the bromelain.",
    funFactSource: "Journal of Food Science",
    funFactSourceUrl: "https://ift.onlinelibrary.wiley.com/journal/17503841",
    hasVisual: true
  },
  {
    id: 49,
    fact: "Carrots were originally purple, not orange",
    category: "Food",
    difficulty: "easy",
    explanationSimple: "The first carrots grown thousands of years ago were purple or white, not orange! Orange carrots were developed by Dutch farmers in the 1600s, possibly to honor the Dutch royal family (the House of Orange).",
    explanationDetailed: "Wild carrots and the first domesticated varieties (in Afghanistan ~1000 years ago) were purple, white, or yellow. Orange carrots appeared in the Netherlands in the 17th century through selective breeding. Today, purple, yellow, red, and white carrots are making a comeback at farmer's markets!",
    explanationScientific: "Daucus carota subspecies sativus (cultivated carrot) originated in Central Asia ~10th century. Original varieties accumulated anthocyanins (purple pigment). Modern orange carrots result from 17th-century Dutch selection for β-carotene accumulation (provitamin A precursor, ~8-12 mg/100g). Mutation in Or gene increased carotenoid biosynthesis and chromoplast formation. Purple varieties contain cyanidin-based anthocyanins; yellow varieties have lutein; orange has α- and β-carotene. Nutritional profiles vary: purple highest in anthocyanins (antioxidants), orange highest in vitamin A precursors.",
    funFact: "Orange carrots are now the most common, but purple carrots are actually healthier - they contain anthocyanins (powerful antioxidants) in addition to the beta-carotene found in orange carrots!",
    funFactSource: "World Carrot Museum",
    funFactSourceUrl: "http://www.carrotmuseum.co.uk/",
    hasVisual: true
  },
  {
    id: 50,
    fact: "Chocolate was once used as currency by the Aztecs",
    category: "History",
    difficulty: "easy",
    explanationSimple: "The Aztecs valued cacao beans (used to make chocolate) so much that they used them as money! A turkey cost 100 cacao beans, and a slave cost 100 beans. They believed chocolate was a gift from the gods.",
    explanationDetailed: "In Aztec society (14th-16th century), cacao beans served as currency throughout the empire. Prices were standardized: a turkey cost 100 beans, an avocado cost 3 beans, and a rabbit cost 30 beans. The Aztecs also made a bitter chocolate drink reserved for nobles and warriors, which they believed gave strength and wisdom.",
    explanationScientific: "Theobroma cacao beans functioned as commodity money in Mesoamerican economies (1200-1521 CE). Standardized exchange rates existed: 1 xiquipilli (8,000 beans) = 3 gold pesos in colonial conversion. Cacao's value derived from: limited cultivation area (requiring tropical climate), high cultural/religious significance, and intrinsic consumption value. Aztecs consumed xocolātl (cacao, water, chili, vanilla) in ceremonial contexts. Spanish colonization (post-1521) introduced sugar, creating modern chocolate. Theobromine (3,7-dimethylxanthine) content ~1.5-3% dry weight provides mild stimulant effects.",
    funFact: "The word 'chocolate' comes from the Aztec word 'xocolātl,' which means 'bitter water.' They drank it mixed with chili peppers, not sugar!",
    funFactSource: "Smithsonian Magazine",
    funFactSourceUrl: "https://www.smithsonianmag.com/",
    hasVisual: true
  },
  {
    id: 51,
    fact: "Apples float in water because they're 25% air",
    category: "Food",
    difficulty: "easy",
    explanationSimple: "Have you ever played bobbing for apples? The reason apples float is because they're about 25% air! The air pockets inside make them less dense than water, so they bob on the surface.",
    explanationDetailed: "Apples have a cellular structure filled with air pockets (intercellular spaces). This makes their density about 0.8-0.9 g/cm³, which is less than water's 1.0 g/cm³. That's why apples float! This is also why apples are crunchy - you're biting through thousands of tiny air-filled cells. Different apple varieties have different amounts of air, affecting both their buoyancy and crunchiness.",
    explanationScientific: "Malus domestica fruits contain ~25% gas-filled intercellular air spaces (aerenchyma) within parenchyma tissue. Bulk density ~0.8-0.9 g/cm³ < water (1.0 g/cm³), ensuring buoyancy. Air space percentage correlates with texture: high porosity (>25%) yields crisp 'crack' during mastication; low porosity (<15%) produces mealy texture. Intercellular spaces form during fruit development via cell separation and middle lamella degradation. Gas composition: ~21% O₂, ~0.04% CO₂ (equilibrating with atmosphere via lenticels). Controlled atmosphere storage manipulates this gas composition to extend shelf life.",
    funFact: "The traditional game of 'bobbing for apples' at Halloween parties is actually over 2,000 years old - it started as a Roman harvest festival game!",
    funFactSource: "USDA Food Composition Database",
    funFactSourceUrl: "https://fdc.nal.usda.gov/",
    hasVisual: true
  },
  {
    id: 52,
    fact: "Capsaicin, the compound that makes peppers hot, tricks your brain into thinking your mouth is on fire",
    category: "Food",
    difficulty: "medium",
    explanationSimple: "Spicy peppers aren't actually hot - they just trick your brain! The chemical capsaicin activates pain receptors in your mouth that normally respond to heat. Your brain thinks your mouth is burning even though there's no real heat or damage.",
    explanationDetailed: "Capsaicin binds to TRPV1 receptors in your mouth - the same receptors that detect actual heat above 109°F (43°C). When activated by capsaicin, these receptors send pain signals to your brain. Your brain interprets this as burning heat, triggering sweating and endorphin release. Drinking water doesn't help because capsaicin isn't water-soluble - milk works better because casein protein binds to capsaicin!",
    explanationScientific: "Capsaicin (8-methyl-N-vanillyl-6-nonenamide) is a vanilloid compound binding TRPV1 ion channels (transient receptor potential vanilloid 1) with EC₅₀ ~300 nM. TRPV1 normally responds to temperatures >43°C; capsaicin binding causes conformational change enabling Ca²⁺ influx, depolarizing nociceptive neurons. Brain perceives identical signal as thermal pain. Scoville scale quantifies pungency: bell peppers ~0 SHU, jalapeños ~5,000 SHU, Carolina Reaper ~2.2 million SHU. Casein (milk protein) micellar structure sequesters hydrophobic capsaicin more effectively than water.",
    funFact: "Birds can't taste capsaicin at all! Pepper plants evolved capsaicin to deter mammals from eating them (who would destroy the seeds) while encouraging birds to eat them (who spread seeds far and wide).",
    funFactSource: "Journal of Clinical Investigation",
    funFactSourceUrl: "https://www.jci.org/",
    hasVisual: true
  },
  {
    id: 53,
    fact: "Strawberries are not berries, but bananas, avocados, and watermelons are",
    category: "Food",
    difficulty: "medium",
    explanationSimple: "In science, a 'berry' is a fruit that grows from one flower with one ovary and has seeds inside. By this definition, strawberries aren't berries (the seeds are on the outside!), but bananas, grapes, and even watermelons are true berries!",
    explanationDetailed: "Botanically, a berry must develop from a flower with one ovary and contain seeds embedded in the fleshy fruit. Strawberries fail this test - they're 'aggregate accessory fruits' where the fleshy part is actually the flower's receptacle, and the real fruits are the tiny 'seeds' on the outside. Meanwhile, bananas, kiwis, grapes, and watermelons all qualify as true berries!",
    explanationScientific: "Botanical berry definition: simple fruit derived from single ovary of individual flower, with seeds embedded in fleshy pericarp. Fragaria × ananassa (strawberry) is aggregate accessory fruit: multiple ovaries (each producing achene 'seed') attached to enlarged receptacle (edible portion). True berries include: Musa (banana) - parthenocarpic berry with residual ovule traces; Vitis (grape); Citrus (hesperidium, modified berry); Citrullus lanatus (watermelon, pepo-type berry). Rubus (raspberry/blackberry) are aggregate fruits, not berries. Common names rarely align with botanical classifications.",
    funFact: "Each strawberry has about 200 'seeds' on the outside, but those aren't actually seeds - they're fruits! Each tiny dot (achene) is a separate fruit containing one seed inside.",
    funFactSource: "Botanical Society of America",
    funFactSourceUrl: "https://botany.org/",
    hasVisual: true
  },
  {
    id: 54,
    fact: "The 57 on Heinz ketchup bottles represents the company's '57 Varieties'",
    category: "History",
    difficulty: "easy",
    explanationSimple: "The '57' stamped on Heinz ketchup bottles comes from the company's old slogan '57 Varieties.' Henry Heinz chose 57 because he liked the number, even though the company made over 60 products at the time. Today they make over 5,700 products!",
    explanationDetailed: "In 1896, founder Henry J. Heinz saw an advertisement for '21 styles of shoes' and loved the idea. He chose '57 Varieties' for his company's slogan - not because he had exactly 57 products (he had more), but because he thought 5 and 7 were lucky numbers. The number stuck and became iconic, appearing on every Heinz ketchup bottle to this day.",
    explanationScientific: "H.J. Heinz Company marketing strategy employed numerical branding via '57 Varieties' slogan (1896-present) despite producing >60 products at inception. Psychological marketing leverages: numerical specificity creates authenticity perception, prime number 57 appears 'honest/arbitrary' vs round numbers, alliteration ('Heinz'/'varieties') enhances memorability. Modern portfolio >5,700 SKUs globally. Ketchup formulation: tomato concentrate (~29% solids), vinegar (acetic acid ~3%), sugar (~20%), salt, spices. Non-Newtonian shear-thinning rheology (η ∝ γ⁻⁰·⁹) creates pour resistance; tapping bottle reduces viscosity via thixotropy.",
    funFact: "To get ketchup out of the glass bottle faster, tap the '57' mark on the neck! Heinz says tapping there works better than any other spot because it's the bottle's 'sweet spot' for creating flow.",
    funFactSource: "Heinz Company History",
    funFactSourceUrl: "https://www.kraftheinzcompany.com/",
    hasVisual: true
  },
  {
    id: 55,
    fact: "Wasabi that you eat at most sushi restaurants is actually just colored horseradish",
    category: "Food",
    difficulty: "medium",
    explanationSimple: "Real wasabi comes from a plant that's super hard and expensive to grow. Most sushi restaurants use a mixture of horseradish, mustard, and green food coloring instead. Real wasabi costs about $250 per kilogram and tastes much more subtle!",
    explanationDetailed: "Authentic wasabi (Wasabia japonica) requires very specific growing conditions: pure mountain stream water, shade, and 2 years to mature. It costs about $250/kg ($110/pound). Most restaurants use a mixture of horseradish, mustard powder, and green dye that costs less than $5/kg. The substitute is much spicier and more sinus-burning than real wasabi.",
    explanationScientific: "Wasabia japonica (真山葵) is rhizomatous perennial requiring 15-18°C water temperature, flowing mountain springs, 80% shade, and 15-24 months maturation. Cultivation difficulty and low yield ($250-400/kg) limit availability. Commercial 'wasabi' contains: Armoracia rusticana (horseradish, ~90%), Brassica juncea (mustard), FD&C Blue 1 + Yellow 5 (green color). Pungency from similar isothiocyanates: allyl-ITC (horseradish) vs 6-MITC/7-MITC (wasabi). Real wasabi exhibits milder, sweeter, more complex flavor with shorter pungency duration (<5min vs >30min for horseradish). Enzymatic conversion of glucosinolates produces volatile antimicrobial compounds.",
    funFact: "Studies estimate that over 95% of 'wasabi' served in restaurants worldwide, even in Japan, is actually just dyed horseradish! Real wasabi is so rare and expensive that it's reserved for high-end dining.",
    funFactSource: "Journal of Food Science",
    funFactSourceUrl: "https://ift.onlinelibrary.wiley.com/journal/17503841",
    hasVisual: true
  },

  // PHYSICS & TECHNOLOGY (56-64)
  {
    id: 56,
    fact: "Hot water can freeze faster than cold water under certain conditions",
    category: "Physics",
    difficulty: "hard",
    explanationSimple: "It sounds impossible, but sometimes hot water freezes faster than cold water! This is called the Mpemba effect. Scientists aren't completely sure why it happens, but it might be because hot water evaporates faster, leaving less water to freeze.",
    explanationDetailed: "The Mpemba effect, named after a Tanzanian student who noticed it in 1963, describes situations where hot water freezes before cold water under identical conditions. Possible explanations include: faster evaporation (reducing water volume), convection currents, dissolved gases, and supercooling differences. However, it doesn't always happen - it depends on specific experimental conditions.",
    explanationScientific: "Mpemba effect is non-monotonic freezing where initially warmer water (T₁>T₂) freezes before cooler water under specific conditions. Proposed mechanisms: (1) Enhanced evaporative mass loss (dm/dt ∝ ΔT), reducing freezing time despite cooling requirement; (2) Convection currents alter heat transfer coefficients; (3) Reduced dissolved gas concentration affects nucleation; (4) Supercooling threshold differences; (5) Hydrogen bond configuration changes. Effect inconsistently replicable - depends on initial temperatures, container geometry, cooling rate, and purity. Recent research suggests quantum mechanical hydrogen bond effects may contribute.",
    funFact: "Aristotle wrote about this effect over 2,300 years ago, but scientists still debate exactly why it happens! It was mostly forgotten until Mpemba rediscovered it making ice cream in 1963.",
    funFactSource: "Royal Society of Chemistry",
    funFactSourceUrl: "https://www.rsc.org/",
    hasVisual: true
  },
  {
    id: 57,
    fact: "A rubber ball bounces higher on hot days than cold days",
    category: "Physics",
    difficulty: "medium",
    explanationSimple: "Rubber gets more flexible and bouncy when it's warm! On a hot day, a rubber ball will bounce higher than the same ball on a cold day. That's why tennis players are picky about the temperature of their tennis balls!",
    explanationDetailed: "Temperature affects rubber's elasticity. Warmer rubber molecules move faster and can return to their original shape more quickly after impact, resulting in better bounce. Cold temperatures make rubber stiffer and less elastic, reducing bounce height. This is why sports like tennis and basketball specify temperature ranges for official balls.",
    explanationScientific: "Rubber elasticity depends on polymer chain mobility. Coefficient of restitution (e = √(h₂/h₁), ratio of rebound to drop height) increases with temperature due to: (1) Reduced glass transition temperature proximity increases chain flexibility; (2) Higher kinetic energy enables faster entropic recoil; (3) Decreased viscous dissipation (tan δ reduces at higher T). For natural rubber, e typically increases ~0.01 per 10°C increase (20-40°C range). Cold temperatures (<10°C) approach Tg (~-70°C for NR), dramatically reducing elasticity. Professional tennis stores balls at ~20°C; internal pressure also increases ~1 psi per 10°C via ideal gas law.",
    funFact: "During the 2018 Australian Open tennis tournament, temperatures exceeded 104°F (40°C). Players complained that balls were bouncing too high and fast, making the game unpredictable!",
    funFactSource: "American Physical Society",
    funFactSourceUrl: "https://www.aps.org/",
    hasVisual: true
  },
  {
    id: 58,
    fact: "Your smartphone has more computing power than all of NASA had in 1969",
    category: "Technology",
    difficulty: "easy",
    explanationSimple: "The computer that helped land astronauts on the Moon in 1969 had less power than a modern calculator! Your smartphone is millions of times more powerful than all the computers NASA used for the Apollo 11 mission combined.",
    explanationDetailed: "The Apollo Guidance Computer (AGC) had 64KB of memory and operated at 0.043 MHz. A modern iPhone has 6GB+ of RAM (100,000 times more) and processes at 3,000+ MHz (70,000 times faster). All of NASA's computing power in 1969 was less than a single modern car key fob!",
    explanationScientific: "Apollo Guidance Computer specifications: 2.048 MHz clock (effective 0.043 MIPS), 4KB RAM, 64KB ROM (core rope memory), 16-bit word length. Modern smartphone (e.g., iPhone 15): A17 Pro SoC ~3.78 GHz (6-core), ~8GB LPDDR5 RAM, 128GB+ flash storage, ~2.7 TFLOPS GPU. Performance ratio: ~70,000x clock speed, ~2,000,000x RAM, ~2,000,000x storage. AGC used real-time operating system with 0.011 second major cycles; modern ARM chips execute ~10¹¹ instructions/second. Despite limitations, AGC computational sufficiency and fault-tolerant design enabled lunar landing success.",
    funFact: "The entire Apollo 11 guidance computer code would fit on a single floppy disk, and you could type it all out in about a month! Modern smartphones run billions of lines of code.",
    funFactSource: "MIT Instrumentation Laboratory",
    funFactSourceUrl: "https://www.nasa.gov/",
    hasVisual: true
  },
  {
    id: 59,
    fact: "A photon takes 8 minutes to travel from the Sun to Earth, but can take 100,000 years to travel from the Sun's core to its surface",
    category: "Physics",
    difficulty: "hard",
    explanationSimple: "Light from the Sun reaches Earth in just 8 minutes. But that same light takes up to 100,000 years to travel from the Sun's core to its surface! This is because light keeps bouncing around inside the dense Sun before finally escaping.",
    explanationDetailed: "Photons created in the Sun's core through nuclear fusion don't travel straight out - they constantly collide with atoms and change direction in a 'random walk.' While the straight-line distance from core to surface is only 432,000 miles, the actual path involves trillions of collisions, taking thousands to hundreds of thousands of years. Once free, they zip to Earth in 8 minutes and 20 seconds.",
    explanationScientific: "Solar core photon production via p-p chain fusion at ~15.7 million K generates gamma rays. Mean free path λ ~1 cm in core plasma (electron density ~10³² /m³). Random walk distance d = √N × λ where N = number of scatterings. From core (0 R☉) to photosphere (1 R☉ = 6.96×10⁸ m) requires N ≈ (R☉/λ)² ~10²⁵ scatterings. At c, total travel time t = N×λ/c ~10⁴-10⁵ years (varies with diffusion model). Photons thermalize to visible light spectrum through successive absorptions/re-emissions before photospheric escape. Sun-Earth transit: 1 AU / c ≈ 500 seconds.",
    funFact: "The light hitting your face right now started its journey from the Sun's core long before humans existed! It's been bouncing around inside the Sun since before the last Ice Age.",
    funFactSource: "NASA Solar Physics",
    funFactSourceUrl: "https://www.nasa.gov/",
    hasVisual: true
  },
  {
    id: 60,
    fact: "Diamonds can be made from peanut butter",
    category: "Physics",
    difficulty: "hard",
    explanationSimple: "Scientists have turned peanut butter into diamonds! Since peanut butter contains lots of carbon (and diamonds are just carbon), they used extreme pressure to squeeze the carbon atoms into diamond form. It's not practical or cheap, but it works!",
    explanationDetailed: "In 2014, German scientists successfully created diamonds from peanut butter by subjecting it to pressures over 5 million times atmospheric pressure. The hydrogen is removed, leaving pure carbon which crystallizes into diamond structure. However, the process requires expensive equipment and produces tiny, impure diamonds - so don't try getting rich off your peanut butter stash!",
    explanationScientific: "Diamond synthesis from peanut butter demonstrated at Bayerisches Geoinstitut using diamond anvil cell technology. Process: (1) Peanut butter (~50% fat, ~25% protein, ~20% carbohydrates - all carbon-rich) subjected to ~5 GPa pressure and ~2000K; (2) Hydrogen eliminated via dehydrogenation; (3) Remaining carbon undergoes phase transition to diamond cubic structure (Fd3m space group); (4) Graphite → diamond conversion at P>1.7 GPa, T>1000K per carbon phase diagram. Resulting diamonds: μm-scale, polycrystalline, impure. Economically impractical vs HPHT or CVD industrial methods. Experiment demonstrates carbon phase transition principles.",
    funFact: "You could theoretically make diamonds from any carbon source - including your own body! Cremation diamonds are a real service where companies compress the carbon from cremated remains into diamonds.",
    funFactSource: "Bayerisches Geoinstitut",
    funFactSourceUrl: "https://www.bgi.uni-bayreuth.de/",
    hasVisual: true
  },
  {
    id: 61,
    fact: "Glass is technically a liquid, not a solid - just an extremely slow-moving one",
    category: "Physics",
    difficulty: "hard",
    explanationSimple: "Glass looks solid, but scientists say it's actually a 'super-cooled liquid' - a liquid that's so cold it moves incredibly slowly. That's why very old window glass is sometimes thicker at the bottom - it's been slowly flowing downward for hundreds of years!",
    explanationDetailed: "Glass is an amorphous solid - it lacks the crystalline structure of true solids but doesn't flow like liquids either (at room temperature). The myth that medieval windows are thicker at the bottom due to flow is false - that's from manufacturing techniques. Glass would take billions of years to flow noticeably at room temperature. At high temperatures, glass does flow like a liquid.",
    explanationScientific: "Glass is amorphous solid lacking long-range crystalline order. Below glass transition temperature Tg (~550°C for soda-lime glass), material exhibits solid-like properties (G' >> G'', elastic modulus ~70 GPa). Viscosity at room temperature η ~10⁴⁰ Pa·s (versus 10⁻³ for water), meaning deformation timescale τ = η/G ~10³² years - far exceeding universe age (4.35×10¹⁷ s). Medieval window thickness variations result from crown glass manufacturing (spun sheets thicker at edges), not viscous flow. True equilibrium crystallization (devitrification) would occur over geological timescales. Above Tg, glass exhibits supercooled liquid behavior with decreasing viscosity.",
    funFact: "The old medieval cathedral windows aren't actually thicker at the bottom from flow - that's a myth! The thickness variation comes from how glass was made back then, not from flowing over centuries.",
    funFactSource: "Journal of Non-Crystalline Solids",
    funFactSourceUrl: "https://www.journals.elsevier.com/journal-of-non-crystalline-solids",
    hasVisual: true
  },
  {
    id: 62,
    fact: "WiFi signals can carry more data during rain than in dry weather",
    category: "Technology",
    difficulty: "medium",
    explanationSimple: "This sounds backwards, but it's true for certain frequencies! While heavy rain can disrupt WiFi, light rain or humidity can actually help WiFi signals travel better by reducing interference from dust and other particles in the air.",
    explanationDetailed: "At WiFi frequencies (2.4 GHz and 5 GHz), water vapor can actually enhance signal propagation through a process called 'tropospheric ducting.' Moist air layers can create channels that guide radio waves farther than normal. However, heavy rain does cause signal attenuation. It's a complex relationship where moderate humidity helps but downpours hurt.",
    explanationScientific: "WiFi operates at 2.4 GHz and 5 GHz (IEEE 802.11). Rain attenuation follows Mie scattering theory: signal loss increases with frequency and precipitation rate R (mm/hr). At 2.4 GHz: attenuation ~0.0001 dB/km per mm/hr (negligible). At 5 GHz: ~0.003 dB/km per mm/hr. However, tropospheric ducting occurs when temperature/humidity inversions create refractive index gradients (dn/dz < -157 N-units/km), bending radio waves parallel to Earth surface, extending range. Light precipitation can enhance ducting via evaporative cooling creating inversion layers. Net effect depends on rain intensity, frequency, path length, and atmospheric conditions.",
    funFact: "Amateur radio operators actually use rain and weather fronts to communicate across much longer distances than normal by 'bouncing' signals off of atmospheric layers created by temperature and moisture differences!",
    funFactSource: "IEEE Wireless Communications",
    funFactSourceUrl: "https://www.ieee.org/",
    hasVisual: false
  },
  {
    id: 63,
    fact: "Airplane mode doesn't actually make your phone completely safe on airplanes",
    category: "Technology",
    difficulty: "medium",
    explanationSimple: "Airplane mode turns off your phone's cellular, WiFi, and Bluetooth signals. But modern planes are so well-protected that your phone signals probably wouldn't cause problems anyway. Airlines require it mainly as a 'better safe than sorry' precaution and to prevent annoyance from hundreds of phones connecting to towers!",
    explanationDetailed: "Modern aircraft navigation systems are heavily shielded and tested against electromagnetic interference. Your phone's signals (cellular at 0.8-1.9 GHz) operate at different frequencies than aircraft navigation (108-137 MHz for VOR/ILS). However, with hundreds of phones on a plane, even tiny interference could theoretically add up. The bigger issue is that phones traveling at 500+ mph would ping countless cell towers, overwhelming the ground network!",
    explanationScientific: "Aircraft navigation systems operate at: VHF (108-137 MHz), GPS (1575.42 MHz L1), transponders (1030/1090 MHz). Mobile phones: GSM 850/900/1800/1900 MHz, LTE 700-2600 MHz. Modern avionics undergo rigorous EMI/RFI testing per RTCA DO-160, demonstrating resilience to interference. However, FAA regulation (14 CFR 91.21) prohibits transmitting PEDs during critical flight phases. Primary concern is cumulative interference from 100+ devices and rapid cell tower handoffs at cruise velocity (~250 m/s) creating signaling overload on ground networks. European EASA now permits PEDs based on DO-160 compliance.",
    funFact: "The real reason airlines restrict phones isn't just safety - a phone flying at 500 mph would connect and disconnect from cell towers so rapidly (every few seconds) that it could interfere with the cellular network on the ground!",
    funFactSource: "FAA Regulations",
    funFactSourceUrl: "https://www.faa.gov/",
    hasVisual: false
  },
  {
    id: 64,
    fact: "The inventor of the Web, Tim Berners-Lee, never patented it or made money from the invention",
    category: "Technology",
    difficulty: "medium",
    explanationSimple: "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN. He could have become a billionaire by patenting it, but instead he gave it away for free so everyone could use it. He wanted the web to be open and accessible to all!",
    explanationDetailed: "In 1989, Tim Berners-Lee created HTTP, HTML, and the first web browser while at CERN. In 1993, CERN made the web technology freely available to everyone with no fees. If Berners-Lee had patented it, experts estimate he could have become one of the richest people alive (potentially worth over $100 billion today). Instead, he dedicated his life to keeping the web open and free.",
    explanationScientific: "Berners-Lee developed foundational web technologies (1989-1991): HTTP protocol (application-layer protocol for hypermedia transfer), HTML markup language (SGML-derived), URL/URI addressing scheme, and WorldWideWeb browser/editor. CERN released technologies to public domain (30 April 1993) rather than filing patents or licensing commercially. Decision enabled exponential growth: 1 website (1991) → 10,000 (1994) → 1.1 billion+ (2024). Modern web architecture (client-server, stateless HTTP, hypertext navigation) derives from original specification. Berners-Lee founded W3C (1994) to maintain open standards. Estimated foregone revenue >$100 billion.",
    funFact: "Tim Berners-Lee posted the first-ever website on August 6, 1991. It's still online today at its original address, explaining what the World Wide Web is and how to use it!",
    funFactSource: "CERN Archives",
    funFactSourceUrl: "https://home.cern/",
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

