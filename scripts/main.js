"use strict";
// Highlight nav menu items
const navList = document.getElementById("nav-list");
navList.addEventListener("click", (e) => {
    const target = e.target.closest("li");
    if (!target)
        return;
    const allLis = navList.querySelectorAll("li");
    allLis.forEach((li) => {
        li.classList.remove("text-orange-600");
    });
    target.classList.add("text-orange-600");
});
// Change language on button press
const langButton = document.getElementById("lang-btn");
langButton.addEventListener("click", () => {
    langButton.textContent = langButton.textContent === "En" ? "Fa" : "En";
});
// Change theme
const themeButton = document.getElementById("theme-btn");
const themeIcon = themeButton.firstElementChild;
themeButton.addEventListener("click", () => {
    if (themeIcon.classList.contains("fa-moon")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }
    else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
    document.documentElement.classList.toggle("dark");
});
//// Login window
// DOM Elements
const loginBtn = document.getElementById("login");
const signinModal = document.getElementById("signin-modal");
const closeModalBtn = document.getElementById("close-modal");
const signinForm = document.getElementById("signin-form");
// Open modal when login button is clicked
loginBtn === null || loginBtn === void 0 ? void 0 : loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signinModal.classList.remove("hidden");
    signinModal.classList.add("flex");
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
});
// Close modal when X button is clicked
closeModalBtn === null || closeModalBtn === void 0 ? void 0 : closeModalBtn.addEventListener("click", () => {
    signinModal.classList.add("hidden");
    document.body.style.overflow = "auto";
});
// Close modal when clicking outside the modal content
signinModal === null || signinModal === void 0 ? void 0 : signinModal.addEventListener("click", (e) => {
    if (e.target === signinModal) {
        signinModal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
});
// Close modal with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !signinModal.classList.contains("hidden")) {
        signinModal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
});
//// Login window END
//// Newsletter window
// DOM Elements
const newsletterModal = document.getElementById("newsletter-modal");
const closeNewsletterModal = document.getElementById("close-newsletter-modal");
const nextButton = document.getElementById("newsletter-next");
const emailInput = document.getElementById("newsletter-mail");
// Open newsletter modal when "Next" button is clicked
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    // fill the email in the newsletter modal
    const newsletterEmail = document.getElementById("newsletter-email");
    if (newsletterEmail) {
        newsletterEmail.value = emailInput.value;
    }
    newsletterModal.classList.remove("hidden");
    newsletterModal.classList.add("flex");
    document.body.style.overflow = "hidden";
});
// Close newsletter modal
closeNewsletterModal === null || closeNewsletterModal === void 0 ? void 0 : closeNewsletterModal.addEventListener("click", () => {
    newsletterModal.classList.add("hidden");
    document.body.style.overflow = "auto";
});
// Close newsletter modal when clicking outside
newsletterModal === null || newsletterModal === void 0 ? void 0 : newsletterModal.addEventListener("click", (e) => {
    if (e.target === newsletterModal) {
        newsletterModal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
});
// Close newsletter modal with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !newsletterModal.classList.contains("hidden")) {
        newsletterModal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
});
//// Newsletter window END
// Testimonials slider
const testimonialsSlider = () => {
    const slider = document.getElementById("testimonials-slider");
    const prevBtn = document.getElementById("testi-prev");
    const nextBtn = document.getElementById("testi-next");
    const dotsContainer = document.getElementById("testi-dots");
    const testimonials = Array.from(slider.children);
    const totalTestimonials = testimonials.length;
    let currentIndex = 0;
    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.className = `w-3 h-3 m-1 rounded-full ${index === 0 ? "bg-orange-600" : "bg-gray-300"}`;
        dot.ariaChecked = `${index === 0 ? "true" : "false"}`;
        dot.ariaLabel = "dot button";
        dot.role = "radio";
        dot.addEventListener("click", () => goToTestimonial(index));
        dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll("button");
    const updateSlider = () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        // Update active dot
        dots.forEach((dot, index) => {
            dot.className = `w-3 h-3 m-1 rounded-full ${index === currentIndex ? "bg-orange-600" : "bg-gray-300"}`;
            dot.ariaChecked = `${index === currentIndex ? "true" : "false"}`;
        });
    };
    const goToTestimonial = (index) => {
        currentIndex = index;
        updateSlider();
    };
    const nextTestimonial = () => {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        updateSlider();
    };
    const prevTestimonial = () => {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        updateSlider();
    };
    prevBtn.addEventListener("click", prevTestimonial);
    nextBtn.addEventListener("click", nextTestimonial);
    // Auto-rotate testimonials every 5 seconds
    let interval = setInterval(nextTestimonial, 5000);
    // Pause on hover
    slider.addEventListener("mouseenter", () => clearInterval(interval));
    slider.addEventListener("mouseleave", () => {
        interval = setInterval(nextTestimonial, 5000);
    });
};
// Word slider animation
const wordSlider = () => {
    const words = ["smarter", "faster", "better", "stronger"];
    const wordContainer = document.getElementById("sliding-words");
    let currentIndex = 0;
    const animateWord = () => {
        // Slide out animation
        wordContainer.style.transform = "translateY(100%)";
        wordContainer.style.opacity = "0";
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            wordContainer.textContent = words[currentIndex];
            // Slide in animation
            wordContainer.style.transform = "translateY(-100%)";
            setTimeout(() => {
                wordContainer.style.transform = "translateY(0)";
                wordContainer.style.opacity = "1";
            }, 500);
        }, 500);
    };
    // Change word every 3 seconds
    setInterval(animateWord, 3000);
};
// Mobile Menu Functionality
const mobileMenu = () => {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuContent = document.getElementById("mobile-menu-content");
    const closeMobileMenuBtn = document.getElementById("close-mobile-menu");
    // Open mobile menu
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("hidden");
        setTimeout(() => {
            mobileMenuContent.classList.remove("-translate-x-full");
        }, 10);
        document.body.style.overflow = "hidden";
    });
    // Close mobile menu
    const closeMobileMenu = () => {
        mobileMenuContent.classList.add("-translate-x-full");
        setTimeout(() => {
            mobileMenu.classList.add("hidden");
        }, 300);
        document.body.style.overflow = "auto";
    };
    closeMobileMenuBtn.addEventListener("click", closeMobileMenu);
    // Close when clicking outside menu content
    mobileMenu.addEventListener("click", (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });
    // Close with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
            closeMobileMenu();
        }
    });
};
// Initialize mobile menu when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    testimonialsSlider();
    wordSlider();
    mobileMenu(); // Add this line
});
