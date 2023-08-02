function splitText(element, item_class) {
    let elements = document.querySelectorAll(element);
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

// .project-[link,title,desc,log,stars,langs]
// get all the projects and then get the data-project attribute
const projects = document.querySelectorAll(".project");
projects.forEach((project) => {
    // get the elements of the project
    const link = project.querySelector(".project-link");
    const title = project.querySelector(".project-title");
    const desc = project.querySelector(".project-desc");
    const logo = project.querySelector(".project-logo");
    const stars = project.querySelector(".project-stars");
    const langs = project.querySelector(".project-langs");
    // use the data-project attribute to get the project data from the github api
    // example data-project = MrinmoyHaloi/weather-app
    const project_name = project.getAttribute("data-project");
    const url = `https://api.github.com/repos/${project_name}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // get the project data
            const project_title = data.name;
            const project_desc = data.description;
            const project_link = data.html_url;
            const project_stars = data.stargazers_count;
            let project_langs;
            // request the languages of the project
            const langs_url = `https://api.github.com/repos/${project_name}/languages`;
            fetch(langs_url)
                .then((response) => response.json())
                .then((data) => {
                    // get the languages of the project
                    project_langs = Object.keys(data).slice(0, 4);

                    project_langs.forEach((lang) => {
                        langs.textContent += lang + ", ";
                        // if its the last element then remove the last comma
                        if (lang === project_langs[project_langs.length - 1]) {
                            langs.textContent = langs.textContent.slice(0, -2);
                        }
                    });
                });

            const project_logo = data.owner.avatar_url;
            // set the project data
            link.setAttribute("href", project_link);
            title.textContent = project_title;
            desc.textContent = project_desc;
            logo.setAttribute("src", project_logo);
            stars.textContent = project_stars;
            langs.textContent = project_langs;
        });
});

let beforeShadow =
    "1px 1px 0px #4a00e0, 2px 2px 0px #4a00e0, 3px 3px 0px #4a00e0, 4px 4px 0px #4a00e0";
let afterShadow =
    "1px 1px 0px #4a00e0, 2px 2px 0px #4a00e0, 3px 3px 0px #4a00e0, 4px 4px 0px #4a00e0, 5px 5px 0px #4a00e0, 6px 6px 0px #4a00e0, 7px 7px 0px #4a00e0, 8px 8px 0px #4a00e0, 9px 9px 0px #4a00e0, 10px 10px 0px #4a00e0";

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

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
            start: "top-=150 center",
            end: "top-=150 center",
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
