// Optional: Add interactivity to the bucket list items
const listItems = document.querySelectorAll('.bucket-list li');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('completed');
        item.querySelector('.icon').textContent = item.classList.contains('completed') ? '✅' : '⭐';
    });
});