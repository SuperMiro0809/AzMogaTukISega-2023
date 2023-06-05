(function (){
    const headerEl = document.getElementById('nav');
    var sticky = headerEl.offsetTop;

    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            headerEl.classList.add("sticky");
        } else {
            headerEl.classList.remove("sticky");
        }
    }

    window.onscroll = function() { stickyHeader() }
}())