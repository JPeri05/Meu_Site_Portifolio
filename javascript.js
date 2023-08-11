const switchButton = document.getElementById('switch-button');

const isDarkMode = localStorage.getItem('darkMode') === 'true';

function applyDarkMode() {
    document.body.classList.add('dark-mode');
}
function removeDarkMode() {
    document.body.classList.remove('dark-mode');
}
function switchMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        removeDarkMode();
        localStorage.setItem('darkMode', false);
    } else {
        applyDarkMode();
        localStorage.setItem('darkMode', true);
    }
}
switchButton.addEventListener('click', switchMode);
if (isDarkMode) {
    applyDarkMode();
}
