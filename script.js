let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        console.log ('Scroll down');

        // Scroll down
        currentPage = Math.min(currentPage + 1, totalPages - 1);
    } else {
        // Scroll up
        console.log('scroll up')
        currentPage = Math.max(currentPage - 1, 0);
    }
    updatePage();
});

function updatePage() {
    const container = document.getElementById('main-content');
    const offset = -currentPage * 100; // Negative offset for upward scroll
    container.style.transform = `translateY(${offset}vh)`;
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        const progressBar = card.querySelector('.progress-bar');
        progressBar.style.width = '75%'; // Set to the desired width
    });

    card.addEventListener('mouseleave', () => {
        const progressBar = card.querySelector('.progress-bar');
        progressBar.style.width = '0%'; // Reset to zero width
    });
});


