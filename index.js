console.log("Hello World!");

const h1 = document.querySelector(".heading-primary");
console.log(h1);

/*h1.addEventListener("click", function () {
  h1.textContent = "have you Eaten!";
  h1.style.backgroundColor = "blue";
});*/

/*setting current date on website*/
//////////////////////////////////////////
const yearElement = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
/////////////////////////////////////////

/*making mobile navigation work*/
/////////////////////////////////////////
const buttonNav = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");
buttonNav.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});
/////////////////////////////////////////////
/// smooth scrolling animation
/////////////////////////////////////////
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const getHrefAttribute = link.getAttribute("href");

    /*making it to scroll back to the top */
    if (getHrefAttribute === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    /////////////////////
    // scroll to other links

    if (getHrefAttribute !== "#" && getHrefAttribute.startsWith("#")) {
      const sectionElement = document.querySelector(getHrefAttribute);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    //////////////////////////////////////
    // closing the mobile navigator

    if (link.classList.contains("main-nav-link"))
      headerElement.classList.toggle("nav-open");
  });
});

const sectionHeroELement = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    console.log(entry);
    if (entry.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (entry.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    /*IN the viewport*/
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroELement);
///////////////////////////////////////////////

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
