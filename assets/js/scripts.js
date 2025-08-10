const h2 = document.querySelector('h2');

setTimeout(() => {
    h2.textContent = "Tom's a superstar";
}, 2000);


const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}