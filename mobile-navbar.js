class MobileNavbar {



onstructor (mobileMenu, navList, navLinks) {



this.mobileMenu = document.querySelector(mobileMenu);



this.navList = document.querySelector(navList);



this.navLinks document.querySelectorAll(nevLinks);



this.activeClass = "active";



}





addClickEvent() {



this.mobileMenu.addEventListener("click", () => console.log ("Hey"));
}
   init() {

if (this.mobileMenu) {

this.addClickEvent();

}

return this;

const mobileNavbar = new MobileNavbar(

".mobile-menu",

".nav-list",

".nav-list li",

mobileNavbar.init();
