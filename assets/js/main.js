/**
* Template Name: DevFolio - v2.0.0
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  "use strict";

  var nav = $('nav');
  var navHeight = nav.outerHeight();

  $('.navbar-toggler').on('click', function() {
    if (!$('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  /*--/ Star ScrollTop /--*/
  $('.scrolltop-mf').on("click", function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  /*--/ Star Counter /--*/
  $('.counter').counterUp({
    delay: 15,
    time: 2000
  });

  /*--/ Star Scrolling nav /--*/
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - navHeight + 5)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll').on("click", function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: navHeight
  });
  /*--/ End Scrolling nav /--*/

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger('scroll');
  $(window).on('scroll', function() {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $('.navbar-expand-md').addClass('navbar-reduce');
      $('.navbar-expand-md').removeClass('navbar-trans');
    } else {
      $('.navbar-expand-md').addClass('navbar-trans');
      $('.navbar-expand-md').removeClass('navbar-reduce');
    }
    if ($(window).scrollTop() > top) {
      $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
      $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
  });

  /*--/ Star Typed /--*/
  if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
      strings: typed_strings.split(','),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30
    });
  }

  /*--/ Testimonials owl /--*/
  $('#testimonial-mf').owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      }
    }
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

})(jQuery);
const skills = [
  { name: "HTML", percentage: 72 },
  { name: "CSS", percentage: 65 },
  { name: "PYTHON", percentage: 85 },
  { name: "DJANGO", percentage: 78 },
  { name: "FLASK", percentage: 61 },
  { name: "FASTAPI", percentage: 75 },
  { name: "AJAX", percentage: 60 },
  { name: "JAVASCRIPT", percentage: 65 },
  { name: "SQL", percentage: 65 },
  { name: "POSTGRESQL", percentage: 80 },
  { name: "MySQL", percentage: 65 },
  { name: "UML", percentage: 60 },
  { name: "Htmx", percentage: 68 },
  { name: "AJAX", percentage: 70 },
  { name: "jQuery", percentage: 72 },
  { name: "Terraform", percentage: 75},
  { name: "Ansible", percentage: 70},
  { name: "Docker", percentage: 75},
  { name: "Kubernetes", percentage: 70},
  { name: "Git", percentage: 85},
  { name: "GitHub", percentage: 80},
  { name: "GitLab", percentage: 70},
  { name: "Jenkins", percentage: 70},
  { name: "Linux", percentage: 80},
  { name: "Windows", percentage: 70},
  { name: "MacOS", percentage: 70},
  { name: "Heroku", percentage: 70},
  { name: "AWS", percentage: 70},
  { name: "Azure", percentage: 70},
  { name: "GCP", percentage: 70},
];

const skillsContainerLeft = document.getElementById('skills-container-left');
const skillsContainerRight = document.getElementById('skills-container-right');

skills.forEach((skill, index) => {
  const skillElement = document.createElement('div');
  skillElement.innerHTML = `
      <span>${skill.name}</span> <span class="pull-right">${skill.percentage}%</span>
      <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: ${skill.percentage}%;" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
  `;
  if (index % 2 === 0) {
      skillsContainerLeft.appendChild(skillElement);
  } else {
      skillsContainerRight.appendChild(skillElement);
  }
});

const services = [
{
    title: "Web Design",
    icon: "ion-monitor",
    description: "Utilisation et customisation de modèles, bootstrap, ou codés selon les maquettes choisies par le client."
},
{
    title: "Web Développement",
    icon: "ion-code-working",
    description: "Utilisation de Python pour le BackEnd, en fonction du projet, mise en place de FLASK ou DJANGO. Le FrontEnd est codé en HTML et CSS, JavaScript, AJAX, jQuery, Htmx au besoin du projet."
},
{
    title: "Responsive Design",
    icon: "ion-android-phone-portrait",
    description: "Je m'assure que le site s'affichera convenablement sur tout support. Tablet, Pc, Smartphone."
},
{
    title: "Analyse de projets",
    icon: "ion-stats-bars",
    description: "Analyse des besoins du client, utilisation de UML, utilisation de 'personas' afin de mieux comprendre la problématique et les différentes utilisations et études, établissement du cahier des charges."
},
{
    title: "Développement Python",
    icon: "ion-code",
    description: "Développement d'applications en Python, utilisation de bibliothèques et frameworks tels que Flask, Django, FastAPI, etc."
},
{
    title: "Développement DevOps",
    icon: "ion-settings",
    description: "Mise en place de pipelines CI/CD, automatisation des tests, déploiement continu, utilisation de Terraform, Ansible, Docker, Kubernetes, Jenkins, etc."
}
];

const servicesContainer = document.getElementById('services-container');

services.forEach(service => {
const serviceElement = document.createElement('div');
serviceElement.classList.add('col-md-4');
serviceElement.innerHTML = `
    <div class="service-box">
        <div class="service-ico">
            <span class="ico-circle"><i class="${service.icon}"></i></span>
        </div>
        <div class="service-content">
            <h2 class="s-title">${service.title}</h2>
            <p class="s-description text-center">
                ${service.description}
            </p>
        </div>
    </div>
`;
servicesContainer.appendChild(serviceElement);
});

const certificates = [
  {
    title: "AWS Coud Operations Badge",
    category: "AWS",
    date: "28 Mai 2025",
    imgSrc: "assets/img/AWS_Cloud_Operations.jpg"
},
{
    title: "Démarrez votre projet en Python",
    category: "Python",
    date: "22 Dec. 2018",
    imgSrc: "assets/img/1023860641.jpg"
},
{
    title: "Découvrez la programmation orientée objet avec Python",
    category: "Python",
    date: "04 Jan. 2019",
    imgSrc: "assets/img/6026297988.jpg"
},
{
    title: "Apprenez à programmer en Python",
    category: "Python",
    date: "16 Jan. 2019",
    imgSrc: "assets/img/9241165423.jpg"
},
{
    title: "Perfectionnez-vous en Python",
    category: "Python",
    date: "06 Jan. 2019",
    imgSrc: "assets/img/6870091314.jpg"
},
{
    title: "Apprenez à apprendre",
    category: "E-learning",
    date: "21 Dec. 2018",
    imgSrc: "assets/img/8268949771.jpg"
},
{
    title: "Gérez votre code avec Git-Hub",
    category: "Dév",
    date: "9 Jan. 2019",
    imgSrc: "assets/img/2217245809.jpg"
},
{
    title: "Découvrez le fonctionnement des algorithmes",
    category: "Python",
    date: "5 Jan. 2019",
    imgSrc: "assets/img/2539790450.jpg"
},
{
    title: "Comprendre le web",
    category: "Dev Web",
    date: "22 Dec. 2018",
    imgSrc: "assets/img/3099720815.jpg"
},
{
    title: "Apprenez à coder avec javascript",
    category: "JavaScript",
    date: "13 Fev. 2020",
    imgSrc: "assets/img/4673471887.jpg"
},
{
    title: "Débutez l'analyse logicielle avec UML",
    category: "UML",
    date: "11 Avr. 2019",
    imgSrc: "assets/img/4822170484.jpg"
},
{
    title: "Apprenez à bien cadrer un projet multimédia",
    category: "E-learning",
    date: "16 Mai. 2018",
    imgSrc: "assets/img/5165458160.jpg"
},
{
    title: "UX design: découvrez les fondamentaux!",
    category: "Dév Web",
    date: "22 Avr. 2019",
    imgSrc: "assets/img/6009320775.jpg"
},
{
    title: "Utilisez des API REST dans vos projets Web",
    category: "Python Web",
    date: "16 Jan. 2020",
    imgSrc: "assets/img/6106761010.jpg"
},
{
    title: "Introduction a jQuery",
    category: "jQuery",
    date: "22 Dec. 2019",
    imgSrc: "assets/img/6328615241.jpg"
},
{
    title: "Apprenez à créer votre site Web avec HTML5 et CSS3",
    category: "HTML CSS",
    date: "27 Dec. 2029",
    imgSrc: "assets/img/9832774170.jpg"
},
{
    title: "Découvrez le framework Django",
    category: "Python Django",
    date: "07 Fev. 2020",
    imgSrc: "assets/img/9910145386.jpg"
},
{
    title: "Modélisez et implémentez une base de données relationnelle avec UML",
    category: "UML",
    date: "31 Mai. 2019",
    imgSrc: "assets/img/4516741063.jpg"
},
{
    title: "Gérez votre projet informatique facilement !",
    category: "E-learning",
    date: "10 Avr. 2019",
    imgSrc: "assets/img/4015478839.jpg"
},
{
    title: "Testez votre projet avec Python",
    category: "Python",
    date: "21 Oct. 2019",
    imgSrc: "assets/img/1298081829.jpg"
},
{
    title: "Concevez un site avec Flask",
    category: "Python Flask",
    date: "31 Oct. 2019",
    imgSrc: "assets/img/3218235297.jpg"
},
// Ajouter de nouveaux certificats ici
];

const certificatesContainer = document.getElementById('certificates-container');

certificates.forEach(cert => {
const certElement = document.createElement('div');
certElement.classList.add('col-md-4');
certElement.innerHTML = `
    <div class="work-box">
        <a href="${cert.imgSrc}" data-gall="portfolioGallery" class="venobox">
            <div class="work-img">
                <img src="${cert.imgSrc}" alt="" class="img-fluid">
            </div>
            <div class="work-content">
                <div class="row">
                    <div class="col-sm-8">
                        <h2 class="w-title">${cert.title}</h2>
                        <div class="w-more">
                            <span class="w-ctegory">${cert.category}</span> / <span class="w-date">${cert.date}</span>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="w-like">
                            <span class="ion-ios-plus-outline"></span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
`;
certificatesContainer.appendChild(certElement);
});
const projects = [
      {
          title: "MacGyver Scapes",
          imgSrc: "assets/img/work-1.jpg",
          category: "Mini-jeu en Python",
          githubLink: "https://github.com/NunoMars/MacGyver",
          date: "18 Sep. 2018"
      },
      {
          title: "PurBeurre (Application qui tourne sous console)",
          imgSrc: "assets/img/Work-2.jpg",
          category: "Mini-programme sur l'utilisation des API en Python",
          githubLink: "https://github.com/NunoMars/PurBeurre",
          date: "22 Fev. 2019"
      },
      {
          title: "Ce site conçu avec bootstrap",
          imgSrc: "assets/img/work-3.jpg",
          category: "Site Web codé en HTML5 avec utilisation bootstrap",
          githubLink: "https://github.com/NunoMars/CV",
          date: "06 Mai. 2020"
      },
      {
          title: "GrandPy app",
          imgSrc: "assets/img/work-4.jpg",
          category: "Site Web Resposive Backend Python Flask (Api Google maps) et front end HTML,Css, Javascript et AJAX",
          githubLink: "https://github.com/NunoMars/GrandPy",
          date: "06 Mai. 2020"
      },
      {
          title: "Pur beurre",
          imgSrc: "assets/img/work-5.jpg",
          category: "Site Web Resposive Backend Python Django et front end HTML/Css, Javacript et AJAX",
          githubLink: "https://github.com/NunoMars/P8-Pur-Beurre",
          productionLink: "https://nunopurbeurre.herokuapp.com/",
          date: "En production sur Heroku"
      },
      {
          title: "Site voyance",
          imgSrc: "assets/img/work-6.jpg",
          category: "Site Web Resposive Backend Python Django et front end HTML,Css, Javascript et AJAX",
          githubLink: "https://github.com/NunoMars/Site-voyance",
          productionLink: "https://site-voyance.herokuapp.com/",
          date: "En production sur: Heroku"
      },

  ];

  const portfolioContainer = document.getElementById('portfolio-container');

  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('col-md-4');
    projectElement.innerHTML = `
        <div class="work-box">
            <a href="${project.imgSrc}" data-gall="portfolioGallery" class="venobox">
                <div class="work-img">
                    <img src="${project.imgSrc}" alt="" class="img-fluid">
                </div>
                <div class="work-content">
                    <div class="row">
                        <div class="col-sm-8">
                            <h2 class="w-title">${project.title}</h2>
                            <div class="w-more">
                                <span class="w-ctegory">${project.category}</span> /
                                <span class="w-ctegory">Disponible sur :<a href="${project.githubLink}"><span>Git-Hub <i class="ion-social-github"></i></span></a></span> /
                                ${project.productionLink ? `<span class="w-date"><a href="${project.productionLink}">${project.date}</a></span>` : `<span class="w-date">${project.date}</span>`}
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="w-like">
                                <span class="ion-ios-plus-outline"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
    portfolioContainer.appendChild(projectElement);
  });