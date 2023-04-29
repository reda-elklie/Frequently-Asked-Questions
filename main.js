const main = document.querySelectorAll(".return");
for (let i = 0; i < main.length; i++) {
    main[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}