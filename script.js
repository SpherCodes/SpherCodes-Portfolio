document.addEventListener('DOMContentLoaded', function() {
    ///// Terminal Typing logic
    const commandText = 'AboutMe';
    const aboutMeText = `I am a software developer passionate about creating innovative solutions and pushing the boundaries of what’s possible. 
    I love coding and continuously learning new technologies to enhance my skills. As a Computer Science graduate, 
    my journey in tech has equipped me with strong problem-solving abilities and a deep understanding of software development principles.`;

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
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.Section');
    const navMenu = document.getElementById('Navigation');


    console.log(navItems)
    let currentSection = 0;

    navItems.forEach((navElement, index) => {
        navElement.addEventListener('click', (event) => {
            console.log(navItems)
            navItems.forEach(item => item.classList.remove('active'));
            navElement.classList.add('active');
            showSection(index);
        });
    });

    window.addEventListener('load', () => {
        showNavigation(navMenu);
        DisplaySections(1);

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
                entry.target.classList.add('visible');
            }
        });
    }, { 
        root: null,
        threshold: 0.1
    });

    // Observe the grid container
    document.querySelectorAll('.grid-container').forEach(container => {
        observer.observe(container);
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
        threshold: 0.20
    });

    console.log(document.querySelectorAll('.project-card'))

    document.querySelectorAll('.project-card').forEach(project => projectObserver.observe(project));

    sections.forEach(section => observer.observe(section));

    // Observer for project cards
    const observeProjectCards = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });
    };

    // Initialize observers when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        observeProjectCards();
    });
});
