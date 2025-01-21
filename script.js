document.addEventListener('DOMContentLoaded', function() {
    ///// Terminal Typing logic
    const commandText = 'AboutMe';
    const aboutMeText = `I am a developer with a passion for creating innovative solutions , I Love coding and learning new thing pushing the boundaries of what is possible.`;

    const commandElement = document.getElementById('command');
    const aboutMeElement = document.getElementById('Response');
    const themeToggleButton = document.getElementById('theme-toggle');

    let commandIndex = 0;
    let aboutMeIndex = 0;

    function typeCommand() {
        if (commandIndex < commandText.length) {
            commandElement.textContent += commandText[commandIndex];
            commandIndex++;
            setTimeout(typeCommand, 200);
        } else {
            setTimeout(typeAboutMe, 500);
        }
    }

    function typeAboutMe() {
        if (aboutMeIndex < aboutMeText.length) {
            aboutMeElement.textContent += aboutMeText[aboutMeIndex];
            aboutMeIndex++;
            setTimeout(typeAboutMe, 50); // Adjust speed by changing the delay
        }
    }

    typeCommand();

    /////////Scrolling logic
    const NavElements = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.Section');
    const navMenu = document.getElementById('Navigation');

    let currentSection = 0;

    window.addEventListener('load', () => {
        showNavigation(navMenu);
        DisplaySections(1);

        NavElements.forEach((navElement, index) => {
            navElement.addEventListener('click', (event) => {
                NavElements.forEach(item => item.classList.remove('active'));
                event.target.classList.add('active');
                showSection(index);
            });
        });
    });

    function showNavigation(navMenu) {
        if (currentSection == 0) {
            navMenu.classList.add('active');
        } else {
            navMenu.classList.remove('active');
        }
    }

    function DisplaySections() {
        const leftSection = document.getElementById('left-section');
        const rightSection = document.getElementById('right-section');
        
        leftSection.classList.add('active');
        rightSection.classList.add('active');
    }

    function showSection(index) {

        sections.forEach((section, i) => {
            if (i == index) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showSection(entry.target.dataset.index)
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { 
        root: null,
        threshold: 0.02
    });
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    },{
        root: null,
        threshold: 0.10
    });

    console.log(document.querySelectorAll('.project-card'))

    document.querySelectorAll('.project-card').forEach(project => projectObserver.observe(project));

    sections.forEach(section => observer.observe(section));

});
