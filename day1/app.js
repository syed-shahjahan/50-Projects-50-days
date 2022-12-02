const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removePanelActiveClass();
        panel.classList.add('active');
    });
});

function removePanelActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    });
}
