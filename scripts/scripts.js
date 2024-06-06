function showCategory(category) {
    let newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        if (item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


// Показать все новости по умолчанию
document.addEventListener('DOMContentLoaded', () => {
    showCategory('all');
});
