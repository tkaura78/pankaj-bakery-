// Centralized images and data (Unsplash sources)
// Replace URLs as needed

const IMAGES = {
	hero: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011235/backgrung_rvsfzg.png",
	// hero: "/images/cake.jpeg",
	story: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1600&auto=format&fit=crop",
	team1: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop",
	team2: "https://images.unsplash.com/photo-1558222217-8e4385f59b73?q=80&w=1200&auto=format&fit=crop",
	team3: "https://video.unsplash.com/photo-1521579777795-6d0b5b36b48a?q=80&w=1200&auto=format&fit=crop",
	chocolatetruffle: "https://res.cloudinary.com/dlgads1kq/video/upload/v1762923804/grok-video-b36efba3-2bac-4306-a76c-db68fcc0195f_rax3o1.mp4",
	freshfruitcake: "https://res.cloudinary.com/dlgads1kq/video/upload/v1762930697/grok-video-46495bc6-945d-4aec-8a13-f689f666a4c9_pnz08y.mp4",
	redvelvetcake: "https://res.cloudinary.com/dlgads1kq/video/upload/v1762927846/grok-video-471275d4-fb07-4b42-a7f1-08b01b54d67a_nlfqsa.mp4",
	blackforestcake: "https://res.cloudinary.com/dlgads1kq/video/upload/v1762927057/grok-video-716a0955-9a6f-4a6f-ace5-2416a39771a5_kypnxi.mp4",
	strawberryCake: "https://res.cloudinary.com/dlgads1kq/video/upload/v1762928269/grok-video-53dda53c-5f1d-46de-8fa8-23e8da379581_ni1ymk.mp4",
	rasMalaiCake: "https://res.cloudinary.com/dlgads1kq/video/upload/v1762932895/grok-video-dd7d1e73-1575-40dd-9a6d-19a16de77841_1_ol6vfy.mp4",
	butterscotchCake: "https://res.cloudinary.com/dlgads1kq/video/upload/v1762930080/grok-video-573d9475-8981-4edd-823f-5268765e3bb8_aajuzk.mp4",
	butterPistacookies: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763097120/grok-video-9bb6689f-39e8-40da-99f1-d293641d66ae_1_ccysil.mp4",
	pizza: "https://res.cloudinary.com/dlgads1kq/video/upload/v1762929483/grok-video-eb16c10c-0e13-4a09-82a9-d0a9e8eed842_zdwakv.mp4",
	paneerKulcha: "https://res.cloudinary.com/dlgads1kq/video/upload/v1762929065/grok-video-3efc7955-320b-46da-9919-f421e0d85272_zkffpo.mp4",
	swissroll: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763145737/grok-video-e7fc40ec-7884-49e0-b484-82dc3f0be844_1_xoolyn.mp4",
	pineapplecake: "https://res.cloudinary.com/dlgads1kq/video/upload/v1762931184/grok-video-5c5c93bf-0beb-4461-8399-dac5dd0fdacb_ic3mwa.mp4",
	multigrain: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763107882/grok-video-e8b11e4b-e37a-4e86-8f89-791634976e4c_lmsd6m.mp4",
	logo: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758174272/Pankaj_bakery_xt8bia.png",
	ourstorybackground: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758176203/Gemini_Generated_Image_k04m2xk04m2xk04m_aj5atj.png",
	vegPuff: "https://res.cloudinary.com/dlgads1kq/video/upload/v1762928693/grok-video-dddc296d-a412-4604-a57e-08f163996688_djwl94.mp4",
	coldCoffee: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop",
	freshJuice: "https://images.unsplash.com/photo-1551022370-2d5a48f3f023?q=80&w=1200&auto=format&fit=crop",
	menu1: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011234/menu1_jeacfs.jpg",
	menu2: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011233/menu2_bibu5r.jpg",
	blackforestpastry: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763109671/grok-video-342c29e9-b7a1-43c1-9c5a-92a49c3ed8ca_h6eczz.mp4",
	blackcurrantpastry: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763109156/grok-video-c741c0d6-4bda-45b7-9826-3550ad867648_xcq17v.mp4",
	pineapplepastry: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763145364/grok-video-ecb5f687-97cc-4087-85f0-8f400918cbfb_2_zvk6pf.mp4",
	cassatapastry: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763109255/grok-video-d0801472-d977-452b-a3d4-989228733b37_ia6dpi.mp4",
	chocolatetrufflepastry: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763108638/grok-video-fd466bab-3e1b-47d6-a294-1c99387091eb_ewe42x.mp4",
	butterscotchpastry: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763109486/grok-video-fe5348b6-e161-407d-bef3-46bb2d0c9e0c_zqwq5d.mp4",
	strawberrypastry: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763108825/grok-video-4fa3abf8-92a0-4642-97e9-38b1112d715d_tkovpo.mp4",
	rainbowpastry: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763108403/grok-video-b5aed7ff-f032-4969-965d-d32ae559235e_bfexdd.mp4",
	redvelvetpastry: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763108145/grok-video-193ee68f-9889-4b3e-a180-6f853096004c_tycyxn.mp4",
	coconutkaju: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763107616/grok-video-8f44e70b-b87a-4161-89b2-a208e21982cd_dsgavg.mp4",
	brownBreadSandwich: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763107103/grok-video-1a7362ec-71a6-413a-b237-ff7c9f2a4553_1_zxh3ki.mp4",
	clubSandwich: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763107104/grok-video-3558c25f-3beb-4352-9d0e-4215f78002b1_p4cdce.mp4",
	grilledSandwich: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763107109/grok-video-b9594441-5800-4184-9b61-187adbe53146_rcakju.mp4",
	cheesePuff: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763146157/grok-video-a357e9e8-3009-4745-aae6-42f726d2d6dc_1_gbrw72.mp4",
	dryCake1: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763146770/grok-video-29c426c3-b288-43d4-80ff-dfbbc5c7f2af_f9r7qh.mp4",
	dryCake2: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763147103/grok-video-72b4e955-92aa-4537-94d5-0b39ad964078_1_zrne03.mp4",
	dryCake3: "https://res.cloudinary.com/dlgads1kq/video/upload/v1763147346/grok-video-e2a7afea-bbde-4564-8d39-249f3c38a686_1_wduymt.mp4"
};

const SITE = {
	name: "Pankaj Bakery",
	address: "Basti Guzan Main Bazar",
	phone: "7696761919",
	socials: { facebook: "#", instagram: "#", whatsapp: "#" }
};

const FEATURED = [
	{ name: "Chocolate Truffle Cake", desc: "Rich, moist layers with silky ganache.", price: 900, image: IMAGES.chocolatetruffle },
	{ name: "Freshly Baked Veg Puffs", desc: "Flaky, buttery, and perfect snack.", price: 25, image: IMAGES.vegPuff },
	{ name: "Butter Pista cookies", desc: "Freshly baked, golden crisp cookies with a perfect balance of crunch and sweetness.", price: 480, image: IMAGES.butterPistacookies },
	{ name: "Cheesy Veg Pizza", desc: "Hand-tossed with fresh toppings.", price: 80, image: IMAGES.pizza },
	{ name: "Paneer Kulcha", desc: "Stuffed, soft, and perfectly spiced.", price: 70, image: IMAGES.paneerKulcha },
	{ name: "Swiss Roll", desc: "A Swiss roll is a delicious sponge cake roll filled with cream, jam, or other sweet fillings.", price: 25, image: IMAGES.swissroll }
];

const MENU_CATEGORIES = [
	{
		key: "cakes",
		title: "Cakes",
		items: [
			{ name: "Chocolate Truffle", desc: "Silky ganache layered cake.", price: 900, image: IMAGES.chocolatetruffle },
			{ name: "Black Forest Cake", desc: "Classic chocolate sponge with whipped cream and cherries.", price: 800, image: IMAGES.blackforestcake },
			{ name: "Red Velvet", desc: "Cream cheese frosting.", price: 900, image: IMAGES.redvelvetcake },
			{ name: "Fresh Fruit Cake", desc: "Light sponge with fruits.", price: 900, image: IMAGES.freshfruitcake },
			{ name: "Butter Scotch Cake", desc: "Classic butterscotch flavor with caramel.", price: 800, image: IMAGES.butterscotchCake },
			{ name: "Pineapple Cake", desc: "Moist vanilla sponge with pineapple pieces and cream.", price: 700, image: IMAGES.pineapplecake },
			{ name: "Ras Malai Cake", desc: "Fusion cake with ras malai flavors and creamy frosting.", price: 800, image: IMAGES.rasMalaiCake },
			{ name: "Strawberry Cake", desc: "Soft sponge with fresh strawberry cream.", price: 800, image: IMAGES.strawberryCake }
		]
	},
	{
		key: "pastries",
		title: "Pastries",
		items: [
			{ name: "Black Forest Pastry", desc: "Classic chocolate and cherry layers.", price: 30, image: IMAGES.blackforestpastry },
			{ name: "Black Currant Pastry", desc: "Tangy black currant cream and sponge.", price: 50, image: IMAGES.blackcurrantpastry },
			{ name: "Pineapple Pastry", desc: "Light vanilla sponge with pineapple cream.", price: 30, image: IMAGES.pineapplepastry },
			{ name: "Cassata Pastry", desc: "Rich, fruity, and creamy layers.", price: 40, image: IMAGES.cassatapastry },
			{ name: "Chocolate Truffle Pastry", desc: "Decadent chocolate truffle filling.", price: 55, image: IMAGES.chocolatetrufflepastry },
			{ name: "Butter Scotch Pastry", desc: "Butterscotch cream and caramel.", price: 45, image: IMAGES.butterscotchpastry },
			{ name: "Strawberry Pastry", desc: "Fresh strawberry cream and sponge.", price: 45, image: IMAGES.strawberrypastry },
			{ name: "Rainbow Pastry", desc: "Colorful layers with vanilla cream.", price: 70, image: IMAGES.rainbowpastry },
			{ name: "Red Velvet Pastry", desc: "Red velvet sponge with cream cheese.", price: 45, image: IMAGES.redvelvetpastry }
		]
	},
	{
		key: "Hand Made Biscuits & Cookies",
		title: "Hand Made Biscuits & Cookies",
		items: [
			{ name: "Butter Pista Cookies", desc: "Crusty outside, airy inside.", price: 480, image: IMAGES.butterPistacookies },
			{ name: "Coconut Cashew Cookies", desc: "Buttery and herby.", price: 400, image: IMAGES.coconutkaju },
			{ name: "Indian Jeera Biscuits", desc: "Healthy and hearty.", price: 320, image: IMAGES.multigrain }
		]
	},
	{
		key: "snacks",
		title: "Snacks",
		items: [
			{ name: "Cheesy Veg Pizza", desc: "Fresh toppings, hand-tossed.", price: 80, image: IMAGES.pizza },
			{ name: "Paneer Kulcha", desc: "Soft, stuffed, spiced.", price: 70, image: IMAGES.paneerKulcha },
			{ name: "Veg Puff", desc: "Crispy layers, spicy filling.", price: 30, image: IMAGES.vegPuff },
			{ name: "Brown Bread Sandwich", desc: "Wholesome brown bread with fresh veggies and chutney.", price: 45, image: IMAGES.brownBreadSandwich },
			{ name: "Club Sandwich", desc: "Triple layered sandwich with veggies and cheese.", price: 35, image: IMAGES.clubSandwich },
			{ name: "Grilled Sandwich", desc: "Grilled to perfection with a savory filling.", price: 55, image: IMAGES.grilledSandwich },
			{ name: "Cheese Puff", desc: "Flaky pastry filled with cheesy goodness.", price: 45, image: IMAGES.cheesePuff }
		]
	},
	{
		key: "dryCakes",
		title: "Dry Cakes",
		items: [
			{ name: "Fruit Cake", desc: "A moist and flavorful fruit cake bursting with juicy dried fruits.", price: 350, image: IMAGES.dryCake1 },
			{ name: "Choco Chip Cake", desc: "A moist vanilla cake studded with irresistible chocolate chips throughout.", price: 400, image: IMAGES.dryCake2 },
			{ name: "Marble Cake ", desc: "Beautifully marbled chocolate and vanilla layers baked to perfection.", price: 450, image: IMAGES.dryCake3 }
		]
	}
];

const TEAM = [
	{ name: "Chef Pankaj", role: "Head Baker", image: IMAGES.team1 },
	{ name: "Anita", role: "Pastry Artist", image: IMAGES.team2 },
	{ name: "Rohit", role: "Store Manager", image: IMAGES.team3 }
];

const MENUS = [
	{ key: 'menu1', title: 'Menu 1', image: IMAGES.menu1 },
	{ key: 'menu2', title: 'Menu 2', image: IMAGES.menu2 }
];

window.__BAKERY_CONSTANTS__ = { IMAGES, FEATURED, MENU_CATEGORIES, TEAM, SITE, MENUS };