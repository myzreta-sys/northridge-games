/* ==================================================
   NORTHRIDGE GAMES
   MAIN JAVASCRIPT
================================================== */


/* ==================================================
   01. INITIALIZATION
================================================== */

console.log("Northridge Games JavaScript OK!");

document.addEventListener("DOMContentLoaded", () => {

    initLoadingScreen();

    initMobileMenu();

    initScrollAnimation();

    initGameFilter();

    initGameModal();

    initNewsModal();

    initFAQ();

    initContactForm();

    initThemeToggle();

    initBackToTop();

});


/* ==================================================
   02. LOADING SCREEN
================================================== */

function initLoadingScreen() {

    const loadingScreen =
        document.querySelector("#loading-screen");

    if (!loadingScreen) {
        return;
    }


    window.addEventListener("load", () => {

        setTimeout(() => {

            loadingScreen.classList.add("loaded");

        }, 500);

    });

}


/* ==================================================
   03. MOBILE MENU
================================================== */

function initMobileMenu() {

    const menuToggle =
        document.querySelector(".menu-toggle");

    const header =
        document.querySelector("header");

    const navLinks =
        document.querySelectorAll("header nav a");


    if (!menuToggle || !header) {
        return;
    }


    /* MENU OPEN / CLOSE */

    menuToggle.addEventListener("click", () => {

        header.classList.toggle("menu-open");

    });


    /* CLOSE MENU AFTER CLICKING A LINK */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            header.classList.remove("menu-open");

        });

    });

}


/* ==================================================
   04. SCROLL ANIMATION
================================================== */

function initScrollAnimation() {

    const fadeElements =
        document.querySelectorAll(".fade-in");


    if (!fadeElements.length) {
        return;
    }


    const fadeObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        fadeObserver.unobserve(
                            entry.target
                        );

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

}


/* ==================================================
   05. GAME FILTER
================================================== */

function initGameFilter() {

    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );

    const gameCards =
        document.querySelectorAll(
            ".game-card"
        );


    if (!filterButtons.length) {
        return;
    }


    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {


            /* GET FILTER */

            const filter =
                button.dataset.filter;


            /* ACTIVE BUTTON */

            filterButtons.forEach((item) => {

                item.classList.remove("active");

            });

            button.classList.add("active");


            /* FILTER CARDS */

            gameCards.forEach((card) => {

                const category =
                    card.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove(
                        "hidden"
                    );

                } else {

                    card.classList.add(
                        "hidden"
                    );

                }

            });

        });

    });

}


/* ==================================================
   06. GAME MODAL
================================================== */

function initGameModal() {

    const modal =
        document.querySelector("#game-modal");

    const modalImage =
        document.querySelector("#modal-image");

    const modalCategory =
        document.querySelector("#modal-category");

    const modalTitle =
        document.querySelector("#modal-title");

    const modalDescription =
        document.querySelector("#modal-description");

    const closeButton =
        modal?.querySelector(".modal-close");

    const overlay =
        modal?.querySelector(".modal-overlay");

    const gameCards =
        document.querySelectorAll(".game-card");


    if (!modal || !gameCards.length) {
        return;
    }


    /* GAME DATA */

    const gameData = {

        echo: {

            title: "ECHO REBORN",

            category: "ACTION RPG",

            image: "images/echo-reborn.jpg",

            description:
                "A cinematic action RPG set in a world shaped by mysterious echoes. Players explore forgotten ruins, uncover hidden memories and fight enemies using powerful abilities."

        },


        titan: {

            title: "PROJECT TITAN",

            category: "SCI-FI ACTION",

            image: "images/project-titan.jpg",

            description:
                "A fast-paced science-fiction action game where humanity faces a mysterious threat from beyond the stars."

        },


        crimson: {

            title: "CRIMSON FALL",

            category: "DARK FANTASY",

            image: "images/crimson-fall.jpg",

            description:
                "A dark fantasy adventure filled with ancient kingdoms, dangerous creatures and a world slowly consumed by an unknown force."

        }

    };


    /* OPEN MODAL */

    gameCards.forEach((card) => {

        card.addEventListener("click", () => {

            const gameId =
                card.dataset.game;

            const game =
                gameData[gameId];


            if (!game) {
                return;
            }


            modalImage.src =
                game.image;

            modalImage.alt =
                game.title;

            modalCategory.textContent =
                game.category;

            modalTitle.textContent =
                game.title;

            modalDescription.textContent =
                game.description;


            openModal(modal);

        });

    });


    /* CLOSE */

    closeButton?.addEventListener(
        "click",
        () => closeModal(modal)
    );


    overlay?.addEventListener(
        "click",
        () => closeModal(modal)
    );

}


/* ==================================================
   07. NEWS MODAL
================================================== */

function initNewsModal() {

    const modal =
        document.querySelector("#news-modal");

    const date =
        document.querySelector(
            "#news-modal-date"
        );

    const title =
        document.querySelector(
            "#news-modal-title"
        );

    const description =
        document.querySelector(
            "#news-modal-description"
        );

    const closeButton =
        modal?.querySelector(".modal-close");

    const overlay =
        modal?.querySelector(".modal-overlay");

    const newsItems =
        document.querySelectorAll(
            ".news-clickable"
        );


    if (!modal || !newsItems.length) {
        return;
    }


    /* NEWS DATA */

    const newsData = {

        1: {

            date: "2026.08.01",

            title:
                "Northridge Games announces a new project.",

            description:
                "Northridge Games has officially begun development on a new project. More information about the game will be revealed in the coming months."

        },


        2: {

            date: "2026.07.20",

            title:
                "Our development team has expanded.",

            description:
                "Our studio continues to grow as new artists, designers and programmers join the Northridge Games team."

        },


        3: {

            date: "2026.07.05",

            title:
                "Northridge Games joins Game Developers Expo 2026.",

            description:
                "Our team will participate in Game Developers Expo 2026 and showcase some of our latest development work."

        }

    };


    /* OPEN */

    newsItems.forEach((item) => {

        item.addEventListener("click", () => {

            const newsId =
                item.dataset.news;

            const news =
                newsData[newsId];


            if (!news) {
                return;
            }


            date.textContent =
                news.date;

            title.textContent =
                news.title;

            description.textContent =
                news.description;


            openModal(modal);

        });

    });


    /* CLOSE */

    closeButton?.addEventListener(
        "click",
        () => closeModal(modal)
    );


    overlay?.addEventListener(
        "click",
        () => closeModal(modal)
    );

}


/* ==================================================
   08. MODAL FUNCTIONS
================================================== */

function openModal(modal) {

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

}


function closeModal(modal) {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


/* ==================================================
   09. ESC KEY
================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Escape") {
            return;
        }


        const activeModal =
            document.querySelector(
                ".modal.active"
            );


        if (activeModal) {

            closeModal(activeModal);

        }

    }
);


/* ==================================================
   10. FAQ
================================================== */

function initFAQ() {

    const questions =
        document.querySelectorAll(
            ".faq-question"
        );


    questions.forEach((question) => {

        question.addEventListener("click", () => {

            const item =
                question.closest(
                    ".faq-item"
                );

            const answer =
                item.querySelector(
                    ".faq-answer"
                );


            if (!item || !answer) {
                return;
            }


            /* CLOSE OTHER FAQ */

            document
                .querySelectorAll(".faq-item.open")
                .forEach((openItem) => {

                    if (openItem !== item) {

                        openItem.classList.remove(
                            "open"
                        );

                        const openAnswer =
                            openItem.querySelector(
                                ".faq-answer"
                            );

                        openAnswer.style.maxHeight =
                            null;

                    }

                });


            /* TOGGLE CURRENT */

            item.classList.toggle("open");


            if (item.classList.contains("open")) {

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            } else {

                answer.style.maxHeight =
                    null;

            }

        });

    });

}


/* ==================================================
   11. CONTACT FORM
================================================== */

function initContactForm() {

    const form =
        document.querySelector(
            "#contact-form"
        );

    const successMessage =
        document.querySelector(
            "#form-success"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            /* GET VALUES */

            const name =
                document
                    .querySelector("#name")
                    .value.trim();

            const email =
                document
                    .querySelector("#email")
                    .value.trim();

            const message =
                document
                    .querySelector("#message")
                    .value.trim();


            /* GET ERROR ELEMENTS */

            const nameError =
                document.querySelector(
                    "#name + .form-error"
                );

            const emailError =
                document.querySelector(
                    "#email + .form-error"
                );

            const messageError =
                document.querySelector(
                    "#message + .form-error"
                );


            /* RESET */

            nameError.textContent = "";

            emailError.textContent = "";

            messageError.textContent = "";

            successMessage.style.display =
                "none";


            let isValid = true;


            /* NAME */

            if (!name) {

                nameError.textContent =
                    "Please enter your name.";

                isValid = false;

            }


            /* EMAIL */

            if (!email) {

                emailError.textContent =
                    "Please enter your email.";

                isValid = false;

            } else if (!isValidEmail(email)) {

                emailError.textContent =
                    "Please enter a valid email address.";

                isValid = false;

            }


            /* MESSAGE */

            if (!message) {

                messageError.textContent =
                    "Please enter your message.";

                isValid = false;

            }


            /* SUCCESS */

            if (isValid) {

                successMessage.style.display =
                    "block";

                form.reset();

            }

        }
    );

}


/* ==================================================
   12. EMAIL VALIDATION
================================================== */

function isValidEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


/* ==================================================
   13. THEME TOGGLE
================================================== */

function initThemeToggle() {

    const themeToggle =
        document.querySelector(
            "#theme-toggle"
        );


    if (!themeToggle) {
        return;
    }


    /* LOAD SAVED THEME */

    const savedTheme =
        localStorage.getItem(
            "northridge-theme"
        );


    if (savedTheme === "light") {

        document.body.classList.add(
            "light-mode"
        );

        themeToggle.textContent =
            "☾";

    }


    /* TOGGLE */

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-mode"
            );


            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );


            if (isLight) {

                themeToggle.textContent =
                    "☾";

                localStorage.setItem(
                    "northridge-theme",
                    "light"
                );

            } else {

                themeToggle.textContent =
                    "☼";

                localStorage.setItem(
                    "northridge-theme",
                    "dark"
                );

            }

        }
    );

}


/* ==================================================
   14. BACK TO TOP
================================================== */

function initBackToTop() {

    const button =
        document.querySelector(
            "#back-to-top"
        );


    if (!button) {
        return;
    }


    /* SHOW / HIDE */

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                button.classList.add(
                    "visible"
                );

            } else {

                button.classList.remove(
                    "visible"
                );

            }

        }
    );


    /* CLICK */

    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}