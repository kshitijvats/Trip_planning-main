const data = [
	{
		id: 1,
		name: "Agra",
		info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
		image: "https://cdn.thecodehelp.in/Agra.jpeg",
		price: "35,758",
	},
	{
		id: 2,
		name: "Jaipur",
		info: `Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.`,
		image: "https://cdn.thecodehelp.in/Jaipur.jpeg",
		price: "82,560",
	},
	{
		id: 3,
		name: "Goa",
		info: " Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.",
		image: "https://cdn.thecodehelp.in/Goa.jpeg",
		price: "29,695",
	},
	{
		id: 4,
		name: "Varanasi",
		info: "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.",
		image: "https://cdn.thecodehelp.in/Varanasi.jpeg",
		price: "31,095",
	},
	{
		id: 5,
		name: "Darjeeling",
		info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
		image: "https://cdn.thecodehelp.in/Darjeeling.jpeg",
		price: "78,595",
	},
	{
		id: 6,
		name: "Jaisalmer",
		info: "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.",
		image: "https://cdn.thecodehelp.in/Jaisalmer.jpeg",
		price: "68,595",
	},
	{
		id: 7,
		name: "Kochi",
		info: "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.",
		image: "https://cdn.thecodehelp.in/Kochi.jpeg",
		price: "68,595",
	},
	{
		"id": 8,
		"name": "Santorini",
		"info": "Embark on a breathtaking journey through the stunning landscapes of Santorini, Greece. Over 8 days, guided by seasoned experts, you'll explore the iconic blue-domed churches of Oia, relax on the pristine beaches of Perissa, marvel at the ancient ruins of Akrotiri, and indulge in the vibrant local cuisine. Immerse yourself in the charm of Fira, the island's bustling capital, and witness unforgettable sunsets over the Aegean Sea. Join us for an unforgettable experience as we uncover the magic of Santorini in 8 days!",
		"image": "https://www.visitgreece.gr/images/1743x752/jpg/files/merakos_05_santorini-oia_1743x752.jpg",
		"price": "85,500"
	},
	{
		"id": 9,
		"name": "Kyoto",
		"info": "Discover the rich cultural heritage of Kyoto, Japan, over 12 captivating days. Explore ancient temples, stroll through traditional gardens, experience a tea ceremony, and witness the beauty of cherry blossoms in full bloom. Join our expert guides on a journey through the heart of Japan's history and tradition.",
		"image": "https://content.r9cdn.net/rimg/dimg/10/dd/c1632a46-city-20339-15873436110.jpg?width=1366&height=768&xhint=792&yhint=1072&crop=true",
		"price": "92,750"
	},
	{
		"id": 10,
		"name": "Marrakech",
		"info": "Immerse yourself in the vibrant colors and exotic scents of Marrakech, Morocco. Over 9 days, navigate the bustling souks, visit historic palaces, and savor the flavors of authentic Moroccan cuisine. From the lively Jemaa el-Fna square to the serene Majorelle Garden, experience the magic of Marrakech.",
		"image": "https://www.muchbetteradventures.com/magazine/content/images/2023/01/marrakech.jpg",
		"price": "76,200"
	},
	{
		"id": 11,
		"name": "Barcelona",
		"info": "Indulge in the artistic and architectural wonders of Barcelona, Spain, during a 7-day exploration. Visit Gaudi's masterpieces, stroll along the lively La Rambla, and relax on the beaches of Barceloneta. Let the vibrant energy of Catalonia captivate your senses.",
		"image": "https://media.cntraveller.com/photos/62d14e029bbb08746e6fd952/master/pass/barcelonaGettyImages-1386922276.jpeg",
		"price": "82,400"
	},
	{
		"id": 12,
		"name": "Cape Town",
		"info": "Embark on a thrilling adventure through the diverse landscapes of Cape Town, South Africa. Over 14 days, experience the iconic Table Mountain, explore the Cape Winelands, encounter wildlife on a safari, and soak in the vibrant culture of this cosmopolitan city.",
		"image": "https://imageio.forbes.com/specials-images/imageserve/62186b3906d6e730ff949c9c/Camps-Bay-Cape-Town-Vibrant-Sunset-Twilight-South-Africa/960x0.jpg?format=jpg&width=960",
		"price": "105,800"
	},
	{
		"id": 13,
		"name": "Bangkok",
		"info": "Immerse yourself in the bustling streets and vibrant culture of Bangkok, Thailand, over 6 exciting days. Visit ornate temples, cruise along the Chao Phraya River, and savor the delicious street food. Experience the perfect blend of tradition and modernity in the City of Angels.",
		"image": "https://fullsuitcase.com/wp-content/uploads/2022/06/Best-areas-to-stay-in-Bangkok-neighborhood-guide.jpg.webp",
		"price": "64,900"
	},
	{
		"id": 14,
		"name": "Reykjavik",
		"info": "Explore the captivating landscapes and natural wonders of Reykjavik, Iceland, over 10 awe-inspiring days. Witness the Northern Lights, relax in geothermal hot springs, and marvel at cascading waterfalls. Discover the land of fire and ice with our experienced guides.",
		"image": "https://www.icelandtravel.is/_next/image/?url=https%3A%2F%2Fcontent.icelandtravel.is%2Fwp-content%2Fuploads%2F2019%2F03%2FReykjavik.jpg&w=3840&q=75",
		"price": "98,350"
	},
	{
		"id": 15,
		"name": "Rio de Janeiro",
		"info": "Experience the rhythm and energy of Rio de Janeiro, Brazil, during an 8-day extravaganza. From the iconic Christ the Redeemer statue to the lively samba clubs, immerse yourself in the vibrant culture and stunning landscapes of this South American gem.",
		"image": "https://whc.unesco.org/uploads/thumbs/site_1100_0004-750-750-20120625114004.jpg",
		"price": "89,600"
	},
	{
		"id": 16,
		"name": "Dubai",
		"info": "Embark on a luxurious journey through the opulent cityscape of Dubai, UAE. Over 5 days, marvel at futuristic architecture, indulge in shopping at world-class malls, and experience the thrill of desert adventures. Discover the glamour and extravagance of the Middle East.",
		"image": "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
		"price": "72,900"
	},
	{
		"id": 17,
		"name": "Quebec City",
		"info": "Step back in time and explore the charming streets of Quebec City, Canada, over 7 delightful days. Wander through cobblestone streets, admire historic architecture, and savor delicious French-inspired cuisine. Experience the enchanting blend of Old World charm and modern sophistication.",
		"image": "https://www.quebec-cite.com/sites/otq/files/styles/landscape_wide_desktop/public/media/image/panorama_winter_petit_champlain_old_quebec.jpg?h=21392582&itok=hWCa8vNM",
		"price": "79,500"
	},
	{
		"id": 18,
		"name": "Amsterdam",
		"info": "Cycle through the picturesque canals and discover the artistic heritage of Amsterdam, Netherlands, in 9 enchanting days. Visit world-class museums, explore historic neighborhoods, and enjoy the vibrant nightlife of this eclectic European city.",
		"image": "https://www.clinkhostels.com/wp-content/themes/yootheme/cache/7f/amsterdam-cheap-time-7fb598bf.jpeg",
		"price": "88,200"
	},
	{
		"id": 19,
		"name": "Prague",
		"info": "Delve into the fairy-tale charm of Prague, Czech Republic, over 8 magical days. Explore the historic Prague Castle, stroll across the Charles Bridge, and savor traditional Czech cuisine in atmospheric Old Town. Let the medieval beauty of Prague captivate your imagination.",
		"image": "https://cdn.britannica.com/23/177923-050-1ECAE329/Tyn-Church-Staromestske-Square-Prague.jpg",
		"price": "84,900"
	},
	{
		"id": 20,
		"name": "Hanoi",
		"info": "Embark on a cultural journey through the bustling streets of Hanoi, Vietnam, over 11 immersive days. Explore ancient temples, savor the flavors of Vietnamese cuisine, and cruise through the picturesque Halong Bay. Experience the rich history and vibrant culture of this Southeast Asian gem.",
		"image": "https://i.natgeofe.com/n/eec95fc8-b3ae-4a41-9b6b-17c4d7b9300e/hanoigettyimages-641627204hr_16x9.jpg",
		"price": "96,700"
	},
	{
		"id": 21,
		"name": "Copenhagen",
		"info": "Discover the sophisticated charm of Copenhagen, Denmark, over 7 stylish days. Explore the iconic Nyhavn waterfront, visit world-renowned museums, and indulge in delicious Nordic cuisine. Immerse yourself in the design, culture, and elegance of the Danish capital.",
		"image": "https://cdn.britannica.com/47/83447-050-42342CB1/Nyhavn-Canal-Copenhagen.jpg",
		"price": "78,400"
	},
	{
		"id": 22,
		"name": "Sydney",
		"info": "Explore the vibrant landscapes and iconic landmarks of Sydney, Australia, over 13 unforgettable days. Admire the Sydney Opera House, relax on Bondi Beach, and discover the unique wildlife of the Australian continent. Experience the dynamic energy of Down Under.",
		"image": "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg",
		"price": "102,300"
	},
	{
		"id": 23,
		"name": "Venice",
		"info": "Sail through the romantic waterways and immerse yourself in the artistry of Venice, Italy, during a 6-day escapade. Explore historic palaces, ride gondolas along the Grand Canal, and savor authentic Italian cuisine. Experience the timeless beauty and allure of the Floating City.",
		"image": "https://lp-cms-production.imgix.net/2021-06/GettyRF_543346423.jpg",
		"price": "71,800"
	}
	
];

export default data;
