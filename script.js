function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}


document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("show");
    });
});


function loadContent(section) {
    let content = document.getElementById("content");

    let homeContent = `<div class="intro">
                        <div class="image-container">
                            <img src="alards.jpg" alt="John Loyd N. Alarde">
                        </div>
                        <div class="caption">
                            <h2 id="typing-text"></h2>
                            <p class="responsive-text">
                                Hi! I'm John Loyd N. Alarde, but you can call me Loyd. I'm a student at CITE (Center for Industrial
                                Technology and Enterprise), where I'm developing my skills and preparing for a future in the tech
                                industry. I'm passionate about learning, growing, and taking on new challenges. I enjoy working with
                                others, solving problems, and making a positive impact through my work and actions.
                            </p>
                        </div>
                    </div>`;

    let data = {
        home: homeContent,
        profile: `<div style="display: flex; align-items: center; justify-content: space-around; padding: 20px;">
                    <div style="text-align: left;">
                        <h2>PERSONAL DATA</h2>
                        <p>Age : 21</p>
                        <p>Height : 170 cm</p>
                        <p>Weight : 60 kg</p>
                        <p>Civil Status : Single</p>
                        <p>Religion : Evangelist Christian</p>
                    </div>
                    <div class="image-container">
                        <img src="loyd.jpg" alt="John Loyd N. Alarde">
                    </div>
                </div>`,
        education: `<div class="education-section">
                        <div class="caption">
                            <h2>College</h2>
                            <p class="responsive-text">
                                This year I study at the Center for Industrial Technology and Enterprise (CITE), where I develop my skills in
                                technology and industry-related fields. The institution provides hands-on training, expert guidance,
                                and a strong foundation for a future in the tech world.
                            </p>
                        </div>
                        <h2>High School</h2>
                        <p class="responsive-text">
                            I attended Canduman National High School from 2017 to 2023, Canduman National High School is a reputable institution known for its commitment 
                            to academic excellence and the holistic development of its students. With a strong emphasis on both academic and extracurricular activities,
                            the school provides a nurturing environment where students are encouraged to explore their full potential and prepare for future success.
                        </p>
                    </div>`,
        seminars: `<div class="seminars-section">
                        <h2>Seminars & Trainings</h2>
                        <ul class="seminars-list">
                            <li>Leadership and Discipleship Workshop – Canduman Community Alliance Church, 2023</li>
                            <li>Multimedia in Ministry Bootcamp – Church Media Team Training, 2022</li>
                            <li>Basic PC Troubleshooting and Maintenance – TESDA, 2022</li>
                            <li>Creative Content Design Using Canva & Photoshop – CITE Student Workshop, 2023</li>
                            <li>Youth Empowerment through Technology – Church Youth Event, 2023</li>
                        </ul>
                    </div>`,
        projects: `<div class="projects-section">
                        <h2>My Projects</h2>
                        <div class="project-container">
                            <div class="project">
                                <img src="project1.jpg" alt="Project 1">
                                <p class="responsive-text">Project 1: This project was created for our graphic design subject, and I was assigned to create the logo. </p>
                            </div>
                            <div class="project">
                                <img src="project2.jpg" alt="Project 2">
                                <p class="responsive-text">Project 2: This project was created by me during a special class held at the alliance company, and I was the one who designed the logo for our group project.</p>
                            </div>
                        </div>
                    </div>`,
        contact: `<div style="text-align: center; padding: 20px;">
                        <h2 style="font-size: 2.5em; margin-bottom: 15px;">Contact Me</h2>
                        <p style="font-size: 1.2em; margin-bottom: 20px;">Feel free to reach out!</p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 10px; font-size: 1.1em;"><strong>Email:</strong> <a href="mailto:johnloydalarde@gmail.com">johnloydalarde@gmail.com</a></li>
                            <li style="margin-bottom: 10px; font-size: 1.1em;"><strong>Facebook:</strong> <a href="https://www.facebook.com/johnlloyd.alarde" target="_blank">My Facebook Profile</a></li>
                        </ul>
                        <p style="font-size: 1.1em; margin-top: 20px;">You can also send me a direct message via Facebook.</p>
                    </div>`
    };

    content.innerHTML = data[section] || "<h2>Page Not Found</h2><p>Sorry, this section does not exist.</p>";


    if (section === 'home') {
        startTypingAnimation();
    }
}


function startTypingAnimation() {
    const messages = ["Hi, I'm John Loyd N. Alarde", "Hi, I'm CITE Student"];
    const speed = 100;
    const delayBetweenTexts = 2000;
    let index = 0;
    let charIndex = 0;
    let currentMessage = messages[index];
    const typingTextElement = document.getElementById("typing-text");

    function type() {
        if (!typingTextElement) return;

        if (charIndex < currentMessage.length) {
            typingTextElement.innerHTML += currentMessage.charAt(charIndex);
            charIndex++;
            setTimeout(type, speed);
        } else {
            setTimeout(erase, delayBetweenTexts);
        }
    }

    function erase() {
        if (!typingTextElement) return;

        if (charIndex > 0) {
            typingTextElement.innerHTML = currentMessage.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, speed / 2);
        } else {
            index = (index + 1) % messages.length;
            currentMessage = messages[index];
            setTimeout(type, speed);
        }
    }

    // Start the animation
    if (typingTextElement) {
        typingTextElement.innerHTML = "";
        setTimeout(type, speed);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    startTypingAnimation();
});

document.querySelector(".intro img").addEventListener("click", function () {
    this.classList.add("spin");
    setTimeout(() => {
        this.classList.remove("spin");
    }, 600);
});

document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("show");
    });
});