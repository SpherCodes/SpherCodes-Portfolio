document.addEventListener('DOMContentLoaded', function() {
    // Terminal typing animation
    const commandText = 'AboutMe';
    const aboutMeText = `I am a software developer passionate about creating innovative solutions and pushing the boundaries of what's possible. 
    I love coding and continuously learning new technologies to enhance my skills. As a Computer Science graduate, 
    my journey in tech has equipped me with strong problem-solving abilities and a deep understanding of software development principles.`;

    const commandElement = document.getElementById('command');
    const aboutMeElement = document.getElementById('Response');
    let commandIndex = 0;
    let aboutMeIndex = 0;

    function typeCommand() {
        if (commandIndex < commandText.length) {
            commandElement.textContent += commandText[commandIndex];
            commandIndex++;
            setTimeout(typeCommand, 100);
        } else {
            setTimeout(typeAboutMe, 300);
        }
    }

    function typeAboutMe() {
        if (aboutMeIndex < aboutMeText.length) {
            aboutMeElement.textContent += aboutMeText[aboutMeIndex];
            aboutMeIndex++;
            setTimeout(typeAboutMe, 30);
        }
    }

    typeCommand();

    // Smooth scrolling and section visibility
    const sections = document.querySelectorAll('.Section');
    const navItems = document.querySelectorAll('.nav-item');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Update navigation
                    const id = entry.target.id;
                    navItems.forEach(item => {
                        if (item.querySelector('a').getAttribute('href').slice(1) === id) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: '-20% 0px -20% 0px'
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Project cards animation
    const projectObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    projectObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: '0px'
        }
    );

    document.querySelectorAll('.project-card').forEach(card => {
        projectObserver.observe(card);
    });

    // Grid items animation
    const gridObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Add staggered animation to child elements
                    const children = entry.target.querySelectorAll('.animate-on-scroll');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 100);
                    });
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px'
        }
    );

    document.querySelectorAll('.grid-item').forEach(item => {
        gridObserver.observe(item);
    });

    // Initialize section visibility
    function initializeSections() {
        const leftSection = document.getElementById('left-section');
        const rightSection = document.getElementById('right-section');
        
        if (leftSection && rightSection) {
            leftSection.classList.add('active');
            rightSection.classList.add('active');
        }
    }

    // Initialize on page load
    initializeSections();
});
