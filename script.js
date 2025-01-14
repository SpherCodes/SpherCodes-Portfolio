document.addEventListener('DOMContentLoaded', function() {
    ///// Terminal Typing logic
    const commandText = 'echo AboutMe';
    const aboutMeText = `I Have  degree in Computer Science and Business Management, 
    where I've built a strong foundation in programming, problem-solving, and analytical thinking. 
    My journey in tech is fueled by a passion for creating innovative applications that make a meaningful impact. 
    Whether I’m exploring new technologies or refining existing skills, I’m motivated by the endless possibilities in software development and am always excited to take on new challenges.`;

    const commandElement = document.getElementById('command');
    const aboutMeElement = document.getElementById('Response');
    const themeToggleButton = document.getElementById('theme-toggle');

    let commandIndex = 0;
    let aboutMeIndex = 0;

    function typeCommand() {
        if (commandIndex < commandText.length) {
            commandElement.textContent += commandText[commandIndex];
            commandIndex++;
            setTimeout(typeCommand, 400);
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
    //Languages Level animation Logic
        const  progressBars = document.querySelectorAll('.progress-bar')
        progressBars.forEach(progressBar => {
            const percentage = progressBar.getAttribute('data-percentage');

            progressBar.style.width = `${percentage}%`

            const percentageSpan = progressBar.nextElementSibling; 
            percentageSpan.textContent = `${percentage}%`;
        })


    /////////Scrolling logic

    const NavElements = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.Section');
    const navMenu = document.getElementById('Navigation');

    let currentSection = 0;
    let isScrolling = false;

    window.addEventListener('load', () => {
        showNavigation(navMenu);
        DisplaySections(1);

        NavElements.forEach(navElement,index => {
            console.log(navElement)
            navElement.addEventListener('click', (event) => {
                console.log('Clicked:', event.target);
                NavElements.forEach(item => item.classList.remove('active'));
                event.target.classList.add('active');
                showSection(index)
            });
        });
    });

    function showNavigation(navMenu){
        if(currentSection == 0){
            navMenu.classList.add('active');
        }
        else{
            navMenu.classList.remove('active');
        }
        

    }
    function DisplaySections(){
        const leftSection = document.getElementById('left-section')
        const rightSection = document.getElementById('right-section')
        
        leftSection.classList.add('active');
        rightSection.classList.add('active');
    }

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.add('active');
                console.log(section)
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    }

    function handleScroll(event) {
        if (isScrolling) return;
        isScrolling = true;

        if (event.deltaY > 0 && currentSection < sections.length - 1) {
            // Scroll down, but only if not at the last section
            currentSection++;
            showSection(currentSection);
        } else if (event.deltaY < 0 && currentSection > 0) {
            // Scroll up, but only if not at the first section
            currentSection--;
            showSection(currentSection);
            
        }
        else{
            showSection(currentSection)
        }

        setTimeout(() => {
            isScrolling = false; // Allow scrolling again after a short delay
        }, 1000); // Adjust timeout for smoothness
    }

    showSection(currentSection);
    window.addEventListener('wheel', handleScroll); 
})
