// Centralized images and data (Unsplash sources)
// Replace URLs as needed

const IMAGES = {
	hero: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011235/backgrung_rvsfzg.png",
	// hero: "/images/cake.jpeg",
	story: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1600&auto=format&fit=crop",
	team1: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop",
	team2: "https://images.unsplash.com/photo-1558222217-8e4385f59b73?q=80&w=1200&auto=format&fit=crop",
	team3: "https://images.unsplash.com/photo-1521579777795-6d0b5b36b48a?q=80&w=1200&auto=format&fit=crop",
	chocolatetruffle: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011233/chocolatetruffle_kwuzv9.jpg",
	freshfruitcake: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011232/freshfruitcake_yunxll.jpg",
	vegpuff: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011235/vegpuff_vgknjg.jpg",
	redvelvetcake: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011234/redvelvetcake_w5o9mb.jpg",
	blackforestcake: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758096473/Black_Forest_Cake_phgpn6.jpg",
	strawberryCake: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758096473/20_Creative_Strawberry_Cake_Decoration_Ideas_-_CakeRe_qjkpr2.jpg",
	rasMalaiCake: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758096490/Rasmalai_cake_xfnu2b.jpg",
	butterscotchCake: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758096488/Online_Cake_Delivery_in_Madurai___OYC_cr6wyj.jpg",
	butterPistacookies: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011232/butterpista_qcxa7a.jpg",
	pizza: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011233/cheesyvegpizza_sswdoh.jpg",
	paneerKulcha: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011240/paneerkulcha_hwshgg.png",
	swissroll: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758016273/download_yds56g.jpg",
	pineapplecake: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758096490/download_1_wmidxk.jpg",
	multigrain: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758100423/e547a242-6168-4fdb-8f79-a336c699fd59_ho0he4.jpg",
	logo: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758174272/Pankaj_bakery_xt8bia.png",
	ourstorybackground: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758176203/Gemini_Generated_Image_k04m2xk04m2xk04m_aj5atj.png",
	vegPuff: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011235/vegpuff_vgknjg.jpg",
	coldCoffee: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop",
	freshJuice: "https://images.unsplash.com/photo-1551022370-2d5a48f3f023?q=80&w=1200&auto=format&fit=crop",
	menu1: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011234/menu1_jeacfs.jpg",
	menu2: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011233/menu2_bibu5r.jpg",
	blackforestpastry: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758098438/Black_Forest_Cake_1_rts6pw.jpg",
	blackcurrantpastry: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758098442/Gemini_Generated_Image_eufat6eufat6eufa_sp1aj4.png",
	pineapplepastry: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758098437/Treat_your_loved_ones_to_a_jaw-dropping_Eggless_Pineapple_Pastry_Recipe__The_whipped_cream_frosting_moist_pineapple_drenched_cake-sheets_equals_t5kuje.jpg",
	cassatapastry: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758098439/Tasty_Old-Fashioned_Coconut_Cake_txrxyr.jpg",
	chocolatetrufflepastry: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758098756/Cooking_Channel_zlq1xt.jpg",
	butterscotchpastry: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758098438/Butterscotch_Cake_Indian_Bakery_Style_rglqay.jpg",
	strawberrypastry: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758098442/Gemini_Generated_Image_eufat6eufat6eufa_sp1aj4.png",
	rainbowpastry: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758098756/Pastries_f3pe1z.jpg",
	redvelvetpastry: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758098875/Red_Velvet_Cheesecake_Cake__A_Decadent_Recipe_Guide_l2ttjz.jpg",
	coconutkaju: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758101345/Cashew_Cookies_gdemwt.jpg",
	brownBreadSandwich: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758011235/bronbreadsand_kfpm9f.png",
	clubSandwich: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758099075/Veg_Cream_Cheese_Sandwich_rjaxff.jpg",
	grilledSandwich: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758099227/download_2_afqk9n.jpg",
	cheesePuff: "https://res.cloudinary.com/dlgads1kq/image/upload/v1758099226/Chicken_Puff_euq469.jpg"
};

const SITE = {
	name: "Pankaj Bakery",
	address: "Basti Guzan Main Bazar",
	phone: "7696761919",
	socials: { facebook: "#", instagram: "#", whatsapp: "#" }
};

const FEATURED = [
	{ name: "Chocolate Truffle Cake", desc: "Rich, moist layers with silky ganache.", price: 900, image: IMAGES.chocolatetruffle },
	{ name: "Freshly Baked Veg Puffs", desc: "Flaky, buttery, and perfect snack.", price: 25, image: IMAGES.vegpuff },
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