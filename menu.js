document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileOverlay = document.getElementById("mobile-menu-overlay");

    if (menuBtn && mobileOverlay) {
        menuBtn.addEventListener("click", () => {
            const isOpen = mobileOverlay.classList.contains("open");
            if (isOpen) {
                mobileOverlay.classList.remove("open");
                menuBtn.textContent = "menu";
                document.body.classList.remove("menu-open");
            } else {
                mobileOverlay.classList.add("open");
                menuBtn.textContent = "close";
                document.body.classList.add("menu-open");
            }
        });
    }
});
