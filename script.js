document.addEventListener('DOMContentLoaded', function() {
    const VISIBLE_CLASS = "visible";
    const HIDDEN_CLASS = "hidden";

    const headerMobileButton = document.querySelector(".header__mobile-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    const headerMobileIcon = document.querySelector(".header__mobile-icon");
    const headerCloseIcon = document.querySelector(".header__close-icon");
    const body = document.querySelector("body");
    
    const mobileMenuClasses = mobileMenu.classList;
    const headerMobileIconClasses = headerMobileIcon.classList;
    const headerCloseIconClasses = headerCloseIcon.classList;
    const bodyClasses = body.classList;


    function openMobileMenu() {
        mobileMenuClasses.remove(VISIBLE_CLASS);
        headerMobileIconClasses.add(VISIBLE_CLASS);
        headerCloseIconClasses.remove(VISIBLE_CLASS);
        bodyClasses.remove(HIDDEN_CLASS);
    }

    function closeMobileMenu() {
        mobileMenuClasses.add(VISIBLE_CLASS);
        headerMobileIconClasses.remove(VISIBLE_CLASS);
        headerCloseIconClasses.add(VISIBLE_CLASS);
        bodyClasses.add(HIDDEN_CLASS);
    }

    headerMobileButton.addEventListener("click", function() {
        const isMobileMenuVisible = mobileMenuClasses.contains(VISIBLE_CLASS);

        if (isMobileMenuVisible) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    });
});