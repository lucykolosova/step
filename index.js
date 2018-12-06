document.addEventListener('DOMContentLoaded', acceptToggleMenu);

function acceptToggleMenu() {
    var btn = document.getElementById('menu-btn'),
        OPEN = 'menu__btn--open',
        CLOSE = 'menu__btn--close';

    btn && btn.classList.add(CLOSE);
    btn && btn.addEventListener('click', toggleClass);

    function toggleClass() {
        var IS_CLOSED = btn.classList.contains(CLOSE);
        btn.classList.add(IS_CLOSED ? OPEN : CLOSE);
        btn.classList.remove(IS_CLOSED ? CLOSE : OPEN);
    }
}