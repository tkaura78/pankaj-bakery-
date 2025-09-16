// Centralized images and data (Unsplash sources)
// Replace URLs as needed

const IMAGES = {
	hero: "images/backgrung.png",
	// hero: "/images/cake.jpeg",
	story: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1600&auto=format&fit=crop",
	team1: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop",
	team2: "https://images.unsplash.com/photo-1558222217-8e4385f59b73?q=80&w=1200&auto=format&fit=crop",
	team3: "https://images.unsplash.com/photo-1521579777795-6d0b5b36b48a?q=80&w=1200&auto=format&fit=crop",
	cake: "https://images.unsplash.com/photo-1601972599720-b1cf9b1c6961?q=80&w=1200&auto=format&fit=crop",
	pastries: "https://images.unsplash.com/photo-1519148246701-3dc1897a7a17?q=80&w=1200&auto=format&fit=crop",
	cookies: "https://images.unsplash.com/photo-1542282811-943ef1a977c3?q=80&w=1200&auto=format&fit=crop",
	pizza: "https://images.unsplash.com/photo-1548365328-9f547fb0953c?q=80&w=1200&auto=format&fit=crop",
	paneerKulcha: "https://images.unsplash.com/photo-1599785209796-e4e03c5bafb5?q=80&w=1200&auto=format&fit=crop",
	garlicBread: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
	sourdough: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
	multigrain: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
	croissant: "https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?q=80&w=1200&auto=format&fit=crop",
	eclair: "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=1200&auto=format&fit=crop",
	vegPuff: "https://images.unsplash.com/photo-1618213837799-25d2d19c3470?q=80&w=1200&auto=format&fit=crop",
	coldCoffee: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop",
	freshJuice: "https://images.unsplash.com/photo-1551022370-2d5a48f3f023?q=80&w=1200&auto=format&fit=crop",
	menu1: "images/menu1.jpeg",
	menu2: "images/menu2.jpeg",
};

const SITE = {
	name: "Pankaj Bakery",
	address: "Basti Guzan Main Bazar",
	phone: "7696761919",
	socials: { facebook: "#", instagram: "#", whatsapp: "#" }
};

const FEATURED = [
	{ name: "Chocolate Truffle Cake", desc: "Rich, moist layers with silky ganache.", price: 800, image: IMAGES.cake },
	{ name: "Assorted Pastries", desc: "Flaky, buttery, and perfectly sweet.", price: 99, image: IMAGES.pastries },
	{ name: "Chocolate Chip Cookies", desc: "Crispy edges with gooey centers.", price: 49, image: IMAGES.cookies },
	{ name: "Cheesy Veg Pizza", desc: "Hand-tossed with fresh toppings.", price: 199, image: IMAGES.pizza },
	{ name: "Paneer Kulcha", desc: "Stuffed, soft, and perfectly spiced.", price: 129, image: IMAGES.paneerKulcha },
	{ name: "Garlic Bread", desc: "Buttery, herby, and oven-fresh.", price: 89, image: IMAGES.garlicBread }
];

const MENU_CATEGORIES = [
	{
		key: "cakes",
		title: "Cakes",
		items: [
			{ name: "Chocolate Truffle", desc: "Silky ganache layered cake.", price: 699, image: IMAGES.cake },
			{ name: "Red Velvet", desc: "Cream cheese frosting.", price: 749, image: IMAGES.cake },
			{ name: "Fresh Fruit Cake", desc: "Light sponge with fruits.", price: 799, image: IMAGES.cake }
		]
	},
	{
		key: "pastries",
		title: "Pastries",
		items: [
			{ name: "Assorted Pastries", desc: "Flaky, buttery, sweet.", price: 99, image: IMAGES.pastries },
			{ name: "Butter Croissant", desc: "Crisp layers, soft center.", price: 79, image: IMAGES.croissant },
			{ name: "Chocolate Éclair", desc: "Cream-filled choux pastry.", price: 109, image: IMAGES.eclair }
		]
	},
	{
		key: "breads",
		title: "Breads",
		items: [
			{ name: "Sourdough Loaf", desc: "Crusty outside, airy inside.", price: 129, image: IMAGES.sourdough },
			{ name: "Garlic Bread", desc: "Buttery and herby.", price: 89, image: IMAGES.garlicBread },
			{ name: "Multigrain Bread", desc: "Healthy and hearty.", price: 99, image: IMAGES.multigrain }
		]
	},
	{
		key: "snacks",
		title: "Snacks",
		items: [
			{ name: "Cheesy Veg Pizza", desc: "Fresh toppings, hand-tossed.", price: 80, image: IMAGES.pizza },
			{ name: "Paneer Kulcha", desc: "Soft, stuffed, spiced.", price: 129, image: IMAGES.paneerKulcha },
			{ name: "Veg Puff", desc: "Crispy layers, spicy filling.", price: 49, image: IMAGES.vegPuff }
		]
	},
	{
		key: "beverages",
		title: "Beverages",
		items: [
			{ name: "Cold Coffee", desc: "Chilled and creamy.", price: 99, image: IMAGES.coldCoffee },
			{ name: "Fresh Juice", desc: "Seasonal fruits juiced.", price: 79, image: IMAGES.freshJuice }
		]
	}
];

const TEAM = [
	{ name: "Chef Pankaj", role: "Head Baker", image: IMAGES.team1 },
	{ name: "Anita", role: "Pastry Artist", image: IMAGES.team2 },
	{ name: "Rohit", role: "Store Manager", image: IMAGES.team3 }
];

// Menu images (Menu 1 and Menu 2)
const MENUS = [
	{ key: 'menu1', title: 'Menu 1', image: 'images/menu1.jpeg' },
	{ key: 'menu2', title: 'Menu 2', image: 'images/menu2.jpeg' }
];

window.__BAKERY_CONSTANTS__ = { IMAGES, FEATURED, MENU_CATEGORIES, TEAM, SITE, MENUS };


