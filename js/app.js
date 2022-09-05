function splitText(element, item_class) {
    elements = document.querySelectorAll(element);
    elements.forEach((element) => {
        const text = element.textContent.trim();
        const letters = text.split("");

        element.textContent = "";
        letters.forEach((letter) => {
            const span = document.createElement("span");
            span.classList.add(item_class);
            if (letter === " ") {
                span.style.marginRight = ".7rem";
            }
            span.textContent = letter;
            element.append(span);
        });
    });
}

splitText(".split-text", "split-item");
const headingDiv = document.querySelector(".heading");
let spans = document.querySelectorAll(".heading span");
let beforeShadow =
    "1px 1px 0px #4a00e0, 2px 2px 0px #4a00e0, 3px 3px 0px #4a00e0, 4px 4px 0px #4a00e0";
let afterShadow =
    "1px 1px 0px #4a00e0, 2px 2px 0px #4a00e0, 3px 3px 0px #4a00e0, 4px 4px 0px #4a00e0, 5px 5px 0px #4a00e0, 6px 6px 0px #4a00e0, 7px 7px 0px #4a00e0, 8px 8px 0px #4a00e0, 9px 9px 0px #4a00e0, 10px 10px 0px #4a00e0";

spans.forEach((span) => {
    // add animated class when span is hovered
    span.addEventListener("mouseover", () => {
        span.classList.add("animated");
    });
    span.addEventListener("animationend", () => {
        span.classList.remove("animated");
    });
});

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({});
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { opacity: "100%", duration: 0.7 });
tl.to(".text", { x: "0%", duration: 1.3 }, "-=.5");
tl.to(".text", { y: "0%", duration: 1.3, stagger: 0.25 }, "-=2");
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 3.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

tl.fromTo(
    ".first-text span",
    {
        textShadow: beforeShadow,
    },
    {
        textShadow: afterShadow,
        duration: 0.3,
        stagger: 0.1,
    },
    "-=.6"
);
tl.fromTo(
    ".second-text span",
    {
        textShadow: beforeShadow,
    },
    {
        textShadow: afterShadow,
        duration: 0.3,
        stagger: 0.1,
    },
    "-=.7"
);

tl.fromTo(
    ".third-text span",
    {
        textShadow: beforeShadow,
    },
    {
        textShadow: afterShadow,
        duration: 0.3,
        stagger: 0.1,
    },
    "-=1.3"
);

gsap.to(".third-text span", {
    scrollTrigger: {
        trigger: ".third-text",
        start: "top center",
        end: "top center",
        toggleActions: "play none reverse none",
    },
    rotation: 360,
    duration: 1,
    stagger: 0.1,
});

gsap.fromTo(
    ".about-title span",
    {
        translateY: -20,
    },
    {
        scrollTrigger: {
            trigger: ".about-title",
            start: "top-=100 center",
            end: "top-=100 center",
            toggleActions: "play none reverse none",
        },
        translateY: 0,
        duration: 0.3,
        stagger: 0.1,
    }
);

gsap.fromTo(
    ".skill-title span",
    {
        translateY: -20,
    },
    {
        scrollTrigger: {
            trigger: ".skill-title",
            start: "top-=100 center",
            end: "top-=100 center",
            toggleActions: "play none reverse none",
        },
        translateY: 0,
        duration: 0.3,
        stagger: 0.1,
    }
);

gsap.fromTo(
    ".project-title span",
    {
        translateY: -20,
    },
    {
        scrollTrigger: {
            trigger: ".project-title",
            start: "top-=100 center",
            end: "top-=100 center",
            toggleActions: "play none reverse none",
        },
        translateY: 0,
        duration: 0.3,
        stagger: 0.1,
    }
);
gsap.fromTo(
    ".message-title span",
    {
        translateY: -20,
    },
    {
        scrollTrigger: {
            trigger: ".message-title",
            start: "top-=100 center",
            end: "top-=100 center",
            toggleActions: "play none reverse none",
        },
        translateY: 0,
        duration: 0.3,
        stagger: 0.1,
    }
);
gsap.fromTo(
    ".get-in-touch-title span",
    {
        translateY: -20,
    },
    {
        scrollTrigger: {
            trigger: ".get-in-touch-title",
            start: "top-=100 center",
            end: "top-=100 center",
            toggleActions: "play none reverse none",
        },
        translateY: 0,
        duration: 0.3,
        stagger: 0.1,
    }
);

gsap.fromTo(
    ".language, .tool",
    {
        translateY: 20,
        opacity: 0,
    },
    {
        scrollTrigger: {
            trigger: ".languages",
            start: "top-=200 center",
            end: "top-=200 center",
        },
        translateY: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.1,
    }
);

gsap.fromTo(
    ".project",
    {
        translateY: 20,
        opacity: 0,
    },
    {
        scrollTrigger: {
            trigger: ".project",
            start: "top-=100 center",
            end: "top-=100 center",
        },
        translateY: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.2,
    }
);

gsap.fromTo(
    ".contact-form input, textarea, button",
    {
        translateY: 20,
        opacity: 0,
    },
    {
        scrollTrigger: {
            trigger: ".contact-form",
            start: "top-=100 center",
            end: "top-=100 center",
        },
        translateY: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.1,
    }
);

const container = ".skills-cloud";
const texts = [
    "HTML",
    "CSS",
    "SCSS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "PYTHON",
    "GIT",
    "GITHUB",
    "JSON",
    "VSCODE",
    "SVELTE",
    "LINUX",
];
const options = { radius: 230, maxSpeed: "fast" };

// TagCloud(container, texts, options);

var TagOptions = {
    textColour: "#fff",
    outlineMethod: "none",
    maxSpeed: 0.04,
    freezeActive: true,
    shuffleTags: true,
    wheelZoom: false,
    clickToFront: 1500,
    reverse: true,
    freezeDecel: true,
    fadeIn: 1000,
    initial: [0.3, -0.1],
    depth: 0.9,
};

window.onload = function () {
    try {
        TagCanvas.Start("myCanvas", "", TagOptions);
    } catch (e) {
        // something went wrong, hide the canvas container
        document.getElementById("myCanvasContainer").style.display = "none";
    }
};
