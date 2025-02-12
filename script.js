document.addEventListener("DOMContentLoaded", function () {
    let backToTop = document.getElementById("backToTop");

    // show back-to-top button when scrolling
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // scroll to top when button is clicked
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
