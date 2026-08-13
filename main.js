console.log("Northridge Games JavaScript OK!");


// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector("header");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        header.classList.toggle("menu-open");

    });

}


// =========================================
// CLOSE MOBILE MENU
// =========================================

const navLinks = document.querySelectorAll("header nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        header.classList.remove("menu-open");

    });

});


// =========================================
// SCROLL ANIMATION
// =========================================

const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

                fadeObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


fadeElements.forEach((element) => {

    fadeObserver.observe(element);

});


// =========================================
// LANGUAGE SWITCH
// =========================================

const languageToggle =
    document.querySelector("#language-toggle");


let currentLanguage =
    localStorage.getItem("northridge-language") || "en";


function updateLanguage() {

    const elements =
        document.querySelectorAll(
            "[data-en][data-ja]"
        );


    elements.forEach((element) => {

        if (currentLanguage === "ja") {

            element.innerHTML =
                element.dataset.ja;

        } else {

            element.innerHTML =
                element.dataset.en;

        }

    });


    if (languageToggle) {

        languageToggle.textContent =
            currentLanguage === "en"
                ? "JP"
                : "EN";

    }


    document.documentElement.lang =
        currentLanguage === "ja"
            ? "ja"
            : "en";


    localStorage.setItem(
        "northridge-language",
        currentLanguage
    );

}


if (languageToggle) {

    languageToggle.addEventListener(
        "click",
        () => {

            currentLanguage =
                currentLanguage === "en"
                    ? "ja"
                    : "en";

            updateLanguage();

        }
    );

}


updateLanguage();