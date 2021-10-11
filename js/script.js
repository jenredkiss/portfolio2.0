/*-----Show Menu-----*/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


/*-----Remove Menu Mobile-----*/

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/* ================ Scroll Section Active Link ===============*/


const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)
function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll', scrollActive)

 
// Change the toggle menu from grid to x
function myFunction() {
var test = document.getElementById("MyId");

if (test.classList.contains("bx-grid-alt")) {
    test.classList.remove("bx-grid-alt");
    test.classList.add("bx-x");
    
}
else{
    test.classList.add("bx-grid-alt");
    test.classList.remove("bx-x");
}
}

// function scrollHeader(){
//     const nav = document.getElementById('header')
//     const resize = document.getElementById('resize-header');
//     // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
//     if(this.scrollY >= 200) 
//         {
//         nav.classList.add('scroll-header'); 
//         resize.classList.add('scroll-resize');
//         }
//     else {
//         nav.classList.remove('scroll-header');
//         resize.classList.remove('scroll-resize');
//     }
// }
// window.addEventListener('scroll', scrollHeader)


// Typewriting
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};




//Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '150px',
    duration: 2000,
    reset: true,
    mobile: false
})


//Scroll Home
sr.reveal('.home_title', {origin: 'left', delay: 400})
sr.reveal('.home_data', {delay: 200})
sr.reveal('.home_img', {origin:'right', delay: 400})
sr.reveal('.home_scroller',{origin:'bottom', delay: 200});
// Scroll About

sr.reveal('.about_img', {origin:'left', delay: 400})
sr.reveal('.about_data', {origin:'right', delay: 400})
sr.reveal('.designer_text',{origin:'top', delay: 500})
sr.reveal('.developer_text',{origin:'bottom', delay: 500})
// Services Section

sr.reveal('.service_title',{origin:'top', delay: 500})
sr.reveal('.services_group',{origin:'bottom', delay: 400, interval: 100})

// Scroll Skills
sr.reveal('.skills_title', {origin: 'left', delay: 400})
sr.reveal('.skills_substitle', {origin: 'left',delay: 500})
sr.reveal('.skills_data', {origin:'right', delay: 400, interval: 100})

//Scroll Experience
sr.reveal('.experience_data', {origin: 'bottom', delay: 400, interval: 200})

//Scroll Portfolio
sr.reveal('.works_title', {origin: 'left', delay: 400, interval: 200})
sr.reveal('.works_content', {origin: 'right', delay: 400, interval: 200})




//Spinner Section
let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});
