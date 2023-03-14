///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Smooth scrolling
// Select all links with hashes
$(document).ready(function () {
	// Add smooth scrolling to all links
	$('a').on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});
});

///////////////////////////////////////////////////////////
// Theme toggle
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

// SET PAGE THEME ON LOAD
if (darkMode !== 'enabled') {
	document.body.classList.remove('darkmode');
	moon.classList.remove('hidden');
	sun.classList.add('hidden');
} else {
	document.body.classList.add('darkmode');
	sun.classList.remove('hidden');
	moon.classList.add('hidden');
}

const enableDarkMode = () => {
	// Add darkmode class to the body
	document.body.classList.add('darkmode');
	sun.classList.remove('hidden');
	moon.classList.add('hidden');
	// Update theme in the local storage
	localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
	// Remove darkmode class from the body
	document.body.classList.remove('darkmode');
	moon.classList.remove('hidden');
	sun.classList.add('hidden');
	// Update theme in the local storage
	localStorage.setItem('darkMode', null);
};

// TOGGLE THEME ON BUTTON CLICK
darkModeToggle.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');

	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		console.log(ent);

		if (ent.isIntersecting === false) {
			document.body.classList.add('sticky');
		}

		if (ent.isIntersecting === true) {
			document.body.classList.remove('sticky');
		}
	},
	{
		// In the viewport
		root: null,
		threshold: 0,
		rootMargin: '-80px',
	}
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Stop scrolling while mobile navigation open
const checkbox = document.querySelector('.header__hamburger-check');

checkbox.addEventListener('change', () => {
	if (checkbox.checked) {
		document.body.classList.add('no-scroll');
	} else {
		document.body.classList.remove('no-scroll');
	}
});

const toggleCheckbox = () => {
	const links = document.querySelectorAll('a');

	links.forEach((link) =>
		link.addEventListener('click', () => {
			checkbox.checked = false;
			document.body.classList.remove('no-scroll');
		})
	);
};

toggleCheckbox();
