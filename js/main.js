
/*-----------------------------------------------------------------------------------

    Theme Name: Finders - Directory Listing Template
    Description: Directory Listing Template
    Author: Chitrakoot Web
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Header class - on scroll
        03. Scroll To Top
        04. Parallax
        05. Resize function
        06. FullScreenHeight function
        07. ScreenFixedHeight function
        08. FullScreenHeight and screenHeight with resize function
        09. Copy to clipboard
        10. Sliders
        11. Tabs
        12. CountUp
        13. Countdown
        14. Stellar
        15. Range slider
        
    ---------------------------------- */


(function ($) {

    "use strict";

    let $window = $(window);


    /*------------------------------------
        01. Preloader
    --------------------------------------*/

    $('#preloader').fadeOut('normall', function () {
        $(this).remove();
    });

    /*------------------------------------
        02. Header class - on scroll
    --------------------------------------*/

    $window.on('scroll', function () {
        let scroll = $window.scrollTop();
        if (scroll <= 50) {
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
        } else {
            $("header").removeClass("fixedHeader").addClass("scrollHeader");
        }
    });

    /*------------------------------------
        03. Scroll To Top
    --------------------------------------*/

    $window.on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);

        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });

    $(".scroll-to-top").on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

    /*------------------------------------
        04. Parallax
    --------------------------------------*/

    // sections background image from data background
    let pageSection = $(".parallax,.bg-img");
    pageSection.each(function () {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    /*------------------------------------
        05. Resize function
    --------------------------------------*/

    $window.resize(function (event) {
        setTimeout(function () {
            SetResizeContent();
        }, 500);
        event.preventDefault();
    });


    /*------------------------------------
        06. FullScreenHeight function
    --------------------------------------*/

    function fullScreenHeight() {
        let element = $(".full-screen");
        let $minheight = $window.height();
        element.css('min-height', $minheight);
    }


    /*------------------------------------
        07. ScreenFixedHeight function
    --------------------------------------*/

    function ScreenFixedHeight() {
        let $headerHeight = $("header").height();
        let element = $(".screen-height");
        let $screenheight = $window.height() - $headerHeight;
        element.css('height', $screenheight);
    }


    /*------------------------------------
        08. FullScreenHeight and screenHeight with resize function
    --------------------------------------*/

    function SetResizeContent() {
        fullScreenHeight();
        ScreenFixedHeight();
    }

    SetResizeContent();

    // === when document ready === //
    $(document).on("ready", function () {


        /*------------------------------------
            09. Copy to clipboard
        --------------------------------------*/

        if ($(".copy-clipboard").length !== 0) {
            new ClipboardJS('.copy-clipboard');
            $('.copy-clipboard').on('click', function () {
                let $this = $(this);
                // var originalText = $this.text();
                $this.text('Copied');
                setTimeout(function () {
                    $this.text('Copy')
                }, 2000);
            });
        }

        $(".slow-redirect a[href^='#']").click(function (e) {
            e.preventDefault();

            let position = $($(this).attr("href")).offset().top - 200;

            $("body, html").animate({
                scrollTop: position
            }, 1000);
        });


        /*------------------------------------
            10. Sliders
        --------------------------------------*/

        // Testmonials carousel1
        $('#testmonials-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 800,
            nav: false,
            dots: true,
            center: true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });

        // Default owlCarousel
        $('.listing-grid').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            margin: 10,
            autoplay: true,
            smartSpeed: 1000
        });

        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            margin: 0,
            autoplay: true,
            smartSpeed: 500
        });


        /*------------------------------------
            11. Tabs
        --------------------------------------*/

        //Horizontal Tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function () { // Callback function if tab is switched
                    let $tab = $(this);
                    let $info = $('#nested-tabInfo');
                    let $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }


        /*------------------------------------
            12. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });


        /*------------------------------------
            13. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 Jan 2021 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });


    });

    // === when window loading === //
    $window.on("load", function () {

        /*------------------------------------
            14. Stellar
        --------------------------------------*/

        // stellar
        $window.stellar();

        /*------------------------------------
            15. Range slider
        --------------------------------------*/

        let $priceRange = $(".price-range");
        if ($priceRange.length !== 0) {
            $priceRange.ionRangeSlider({
                type: "double",
                grid: true,
                min: 0,
                max: 1000,
                from: 200,
                to: 800,
                prefix: "$"
            });
        }

    });

})(jQuery);

// extra
// nume site
document.title = 'Firme Cadastru'
// parerile clientilor
// ==========================================================================
// // info review
// let Testimonials = [
//     {
//         id: 100,
//         text: ' Cu mult respect pentru amabilitatea dumneavoastra si promptitudinea in relatiile cu clientii si potentiali clienti. VA MULTUMESC MULT! Sa aveti o zi plina de bucurii si impliniri!',
//         nume: 'Gigina.B',
//         data: '01.01.2020'
//     },
//     {
//         id: 101,
//         text: ' Felicitări! M-ați surprins plăcut! Mulțumesc pentru promptitudine și interes pentru solicitanți! Numai bine va doresc! Acum voi analiza ofertele!',
//         nume: 'Gigina.B',
//         data: '01.01.2020'
//     },
//     {
//         id: 102,
//         text: ' Buna ziua, Vreau sa spun, ca am ramas placut surprinsa ,cand dupa nici 10 minute dupa ce am facut acea cerere, am inceput sa primesc raspunsuri, am putut sa cer detalii si mi s-a raspuns imediat. Totul a decurs rapid, profesionist, si s-a rezolvat nespus de repede. Multumesc si eu pentru serviciile bune pe care le dati, va doresc mult succes, si nu coborati stacheta. Felicitari!',
//         nume: 'Ginina.B',
//         data: '01.01.2020'
//     },
// ]

// $.getJSON("js/data/parerileClientilor.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });

// toate info firma
// let ListaFirme = [
//     {
//         id: 101,
//         numeFirma: 'Firma cadastru',
//         img: 'https://images.unsplash.com/photo-1605812276723-c31bb1a68285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
//         telefon: 112,
//         fax: 112,
//         adresa: ['strada x, nr y, ', 'Oras'],
//         juset: 'Marea Neagra',
//         clasa: 3,
//         verificareAncpi: true,
//         website: 'https://en.wikipedia.org/wiki/Victor_Ponta',
//         scurtaPrezentare: 'lorem30dsaaaaaaaaaaaaaaaaaaaa dsaasd d sad asd asd asd asd d sa das dsa das ads ad asd asd asd dsadsadasdasdasd dsdas  asd asd asd ad asd ad',
//         prezentare: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//         abonament: 'pro',
//         email: '@bennyhill',
//         program: {
//             public: {
//                 luni: '9-12',
//                 marti: '9-12',
//                 miercuri: '9-12',
//                 joi: '9-12',
//                 vineri: '9-12',
//             },
//             autorizati: {
//                 luni: '9-12',
//                 marti: '9-12',
//                 miercuri: '9-12',
//                 joi: '9-12',
//                 vineri: '9-12',
//             },
//         }
//     }
// ]
// let prezentareFirma = document.getElementById('prezentareFirma');
// console.log(ListaFirme)




// genereaza  firma pro
// window.addEventListener('DOMContentLoaded', function () {
//     // modul firme
//     let displayFirma = ListaFirme.map((item) => {
//         return `
//                     <div class="listing-detail margin-50px-bottom sm-margin-35px-bottom">
//                         <h3 class="font-weight-500">${item.numeFirma}</h3>
//                     </div>
//
//
//                     <div class="widget">
//
//                         <!--varianta table -->
//                         <table class="table table-hover">
//
//                             <tbody>
//
//                             <tr>
//                                 <th scope="col" style="width: 40%"><b>${item.telefon}</b></th>
//                                 <th scope="col">
//                                     <a class="butn btn-class-lenght"  >
//                                         <i class="fas fa-phone"></i>
//                                         vezi numarul de telefon
//                                     </a>
//                                 </th>
//                             </tr>
//                             <tr>
//                                 <th><b>${item.email}</b></th>
//                                 <th>
//                                     <a class="butn btn-class-lenght">
//                                         <i class="fas fa-envelope"></i>
//                                         vezi adresa de email
//                                     </a>
//                                 </th>
//                             </tr>
//
//                             <tr>
//                                 <td><b>${item.fax}</b></td>
//                                 <td><i class="fa fa-fax margin-10px-right text-theme-color"></i> +40372873760</td>
//                             </tr>
//
//                             <tr>
//                                 <td><b>${item.adresa}</b></td>
//                                 <td><i class="fas fa-map-marked-alt margin-10px-right text-theme-color"></i> Str. Mihail Kogalniceanu, Nr. 2, Bl. 26, Sc. C, Ap. 3, Parter, Tulcea, jud. Tulcea</td>
//                             </tr>
//
//                             <tr>
//                                 <td><b>${item.juset}</b></td>
//                                 <td>
//                                     <a href="#">${item.oras}</a>, <a href="#">Tulcea</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td><b>${item.clasa}</b></td>
//                                 <td>III</td>
//                             </tr>
//                             <tr>
//                                 <td><b>Seria si nr.</b></td>
//                                 <td>RO-B-J 0037</td>
//                             </tr>
//                             <tr>
//                                 <td><b>${item.verificareAncpi}</b></td>
//                                 <td>
//                                     <a class="butn btn-class-lenght">
//                                         <i class="fas fa-check"></i> Autorizatie valabila
//                                     </a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td><b>Website</b></td>
//                                 <td>
//                                     <a href="${item.website}" target="_blank">
//                                         <i class="fa fa-external-link-alt  margin-10px-right text-theme-color"></i>
//                                         ${item.website}
//                                     </a>
//                                 </td>
//                             </tr>
//
//                             </tbody>
//                         </table>
//                     </div>
//
//                       <!--scurta prezentare-->
//                     <div class="margin-50px-bottom sm-margin-35px-bottom ">
//                         <!--<h5 class="font-size20 border-bottom padding-20px-bottom">Scurta descriere</h5>-->
//                         <p>
//                           ${item.scurtaPrezentare}
//                         </p>
//                     </div>
//
//                       <!--prezentare-->
//                     <div class="margin-50px-bottom sm-margin-35px-bottom ">
//                         <h5 class="font-size20 border-bottom padding-20px-bottom">Prezentare</h5>
//                         <p>
//                            ${item.prezentare}
//                         </p>
//                     </div>
//
//
//
//                      <!--galeria foto clienti -->
//                     <div class="margin-50px-bottom sm-margin-35px-bottom">
//                         <h5 class="font-size20 border-bottom padding-20px-bottom">Galerie foto</h5>
//                         <div class="owl-carousel owl-theme listing">
//                             <div>
//                                 <img src=${item.img} alt="" />
//                             </div>
//                             <div>
//                                 <img src="img/content/clientiProfil.jpg" alt="" />
//                             </div>
//                         </div>
//                     </div>
//
//                        <!--formular-->
//                     <div class="comment-form">
//                         <div class="title-g margin-30px-bottom">
//                             <h3>Contact</h3>
//                         </div>
//                         <!--formular-->
//                         <form action="#" id="comment-form" method="post">
//                             <div class="controls">
//                                 <div class="row">
//                                     <div class="col-md-6 form-group">
//                                         <input id="form_name" type="text" name="name" placeholder="Nume" required="required">
//                                     </div>
//                                     <div class="col-md-6 form-group">
//                                         <input id="form_phone" type="text" name="phone" placeholder="Telefon" required="required">
//                                     </div>
//                                 </div>
//                                 <div class="row">
//
//                                     <div class="col-md-12 form-group">
//                                         <input id="form_email" type="email" name="email" placeholder="Email" required="required">
//                                     </div>
//                                 </div>
//                                 <div class="row">
//                                     <div class="col-md-12 form-group">
//                                         <textarea id="form_message" name="message" placeholder="Mesaj" rows="4" required="required"></textarea>
//                                     </div>
//                                     <div class="col-md-12 text-right">
//                                         <button type="submit" class="butn">
//                                             <i class="fa fa-envelope"></i>
//                                             <span>Trimite mesaj</span>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//         `
//     }).join('');
//     console.log(displayFirma)
//     prezentareFirma.innerHTML = displayFirma;
//     console.log(prezentareFirma)
// })

