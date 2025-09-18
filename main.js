// Mobile menu toggle
document.addEventListener('click', (e) => {
	const btn = document.getElementById('mobileMenuBtn');
	const menu = document.getElementById('mobileMenu');
	if (!btn || !menu) return;
	if (e.target === btn || btn.contains(e.target)) {
		menu.classList.toggle('hidden');
	}
});

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Basic newsletter form validation
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
	newsletterForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const email = newsletterForm.email.value.trim();
		const msg = document.getElementById('newsletterMsg');
		const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		if (!isValid) {
			msg.textContent = 'Please enter a valid email.';
			msg.className = 'mt-3 text-sm text-red-600';
			msg.classList.remove('hidden');
			return;
		}
		msg.textContent = 'Thanks for subscribing!';
		msg.className = 'mt-3 text-sm text-green-700';
		msg.classList.remove('hidden');
		newsletterForm.reset();
	});
}

// Basic contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
	contactForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const name = contactForm.name.value.trim();
		const email = contactForm.email.value.trim();
		const message = contactForm.message.value.trim();
		const msg = document.getElementById('contactMsg');
		const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		if (!name || !emailOk || message.length < 5) {
			msg.textContent = 'Please complete all fields with a valid email.';
			msg.className = 'text-sm text-red-600 mt-2';
			msg.classList.remove('hidden');
			return;
		}
		msg.textContent = 'Thanks! Your message has been sent.';
		msg.className = 'text-sm text-green-700 mt-2';
		msg.classList.remove('hidden');
		contactForm.reset();
	});
}

// Simple reveal animations on scroll
const animated = document.querySelectorAll('[data-animate]');
if (animated.length) {
	const io = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('motion-safe:animate-[fadeInUp_0.6s_ease-out_forwards]');
				io.unobserve(entry.target);
			}
		});
	}, { threshold: 0.15 });
	animated.forEach((el) => {
		el.style.opacity = '0';
		el.style.transform = 'translateY(8px)';
		io.observe(el);
	});
}

// Dynamic rendering using constants.js
const constants = window.__BAKERY_CONSTANTS__;
if (constants) {
	console.log(constants.IMAGES.hero);
	// Set hero background from constants
	const heroBg = document.getElementById('heroBg');
	if (heroBg) {
		heroBg.style.backgroundImage = `url('${constants.IMAGES.hero}')`;
	}

	// Render Featured on Home
	const featuredGrid = document.getElementById('featuredGrid');
	if (featuredGrid && Array.isArray(constants.FEATURED)) {
		featuredGrid.innerHTML = constants.FEATURED.map((item) => `
			<article class="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition" data-animate>
				<div class="aspect-[4/3] bg-neutral-100 overflow-hidden">
					<img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
				</div>
				<div class="p-5">
					<h3 class="font-bold text-lg">${item.name}</h3>
					<p class="mt-1 text-sm text-neutral-600">${item.desc}</p>
					<div class="mt-3 font-semibold text-brand-700">₹${item.price}</div>
				</div>
			</article>
		`).join('');
	}

	// Render Menu categories
	const menuRoot = document.getElementById('menuRoot');
	if (menuRoot && Array.isArray(constants.MENU_CATEGORIES)) {
		menuRoot.innerHTML = constants.MENU_CATEGORIES.map((cat) => `
			<div>
				<h2 class="text-2xl font-bold">${cat.title}</h2>
				<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					${cat.items.map((item) => `
						<article class="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition" data-animate>
							<div class="aspect-[4/3] overflow-hidden bg-neutral-100">
								<img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
							</div>
							<div class="p-5">
								<h3 class="font-semibold">${item.name}</h3>
								<p class="mt-1 text-sm text-neutral-600">${item.desc}</p>
								<div class="mt-2 font-semibold text-brand-700">₹${item.price}</div>
							</div>
						</article>
					`).join('')}
				</div>
			</div>
		`).join('');
	}

	// Render Menus images on Menu page
	const menusRoot = document.getElementById('menusRoot');
	if (menusRoot && Array.isArray(constants.MENUS)) {
		menusRoot.innerHTML = constants.MENUS.map((m) => `
			<figure class="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm" data-animate>
				<img src="${m.image}" alt="${m.title}" class="w-full h-auto object-cover"/>
				<figcaption class="p-4 text-center font-semibold">${m.title}</figcaption>
			</figure>
		`).join('');
	}

	// Render About: story image and team
	// const storyImage = document.getElementById('storyImage');
	// if (storyImage) {
	// 	storyImage.innerHTML = `<img src="${constants.IMAGES.story}" alt="Bakery" class="w-full h-full object-cover"/>`;
	// }


	const teamGrid = document.getElementById('teamGrid');
	if (teamGrid && Array.isArray(constants.TEAM)) {
		teamGrid.innerHTML = constants.TEAM.map((member) => `
			<div class="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm" data-animate>
				<img src="${member.image}" alt="${member.name}" class="w-full h-48 object-cover rounded-xl"/>
				<h3 class="mt-4 font-semibold">${member.name}</h3>
				<p class="text-sm text-neutral-600">${member.role}</p>
			</div>
		`).join('');
	}

	// Hydrate contact details
	const addr = document.getElementById('siteAddress');
	if (addr) addr.textContent = constants.SITE.address;
	const phone = document.getElementById('sitePhone');
	const phoneLink = document.getElementById('sitePhoneLink');
	if (phone && phoneLink) {
		phone.textContent = constants.SITE.phone;
		phoneLink.href = `tel:${constants.SITE.phone}`;
	}

	// Location page map + details
	const locationMap = document.getElementById('locationMap');
	if (locationMap) {
		locationMap.src = `https://www.google.com/maps?q=${encodeURIComponent(constants.SITE.address)}&output=embed`;
	}
	const locationAddress = document.getElementById('locationAddress');
	if (locationAddress) locationAddress.textContent = constants.SITE.address;
	const locationPhoneLink = document.getElementById('locationPhoneLink');
	if (locationPhoneLink) locationPhoneLink.href = `tel:${constants.SITE.phone}`;
}


