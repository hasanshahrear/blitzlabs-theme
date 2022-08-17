'use strict';


    //Container Class
    let mainContainer = document.querySelector('.site-content');
    mainContainer.classList.add('page-wrapper');
    //footer wrapper
    let footer = document.querySelector('footer');
    footer.classList.add('page-wrapper');


    // Menu fix
    let menu = document.querySelectorAll('.menu-link span');    
    menu.forEach(el => {
        el.setAttribute('data-title', el.innerHTML);
    });

    //popup menu
    let popup = document.querySelector('.popup-mobile-menu-bg');
    //menu open icon visible
    let menuid = document.querySelector("#hamberger");

    //window scroll
    window.addEventListener("scroll", function(){
        if(this.scrollY > 100 ){
            //menu open icon visible 
            menuid.classList.add('d-block'); 
            let menuDiv = document.querySelector("#hamberger div");
            menuDiv.classList.add('opacity');

        }else{
            let menuid = document.querySelector("#hamberger");
            menuid.classList.remove('d-block');
        }
    });

    //popup menu open
    menuid.addEventListener('click', function(){
        popup.classList.add("popup-menu-open");
        mainContainer.classList.remove('page-wrapper');
    });

    //menu close icon visible
    let menuClose = document.querySelector("#hambergerClose");
    menuClose.classList.add('opacity');

    //mobile menu icon visible
    let mobileMenu = document.querySelector('.hamberger');
    mobileMenu.classList.add('mobile-menu-icon');

    //mobile menu popup open
    mobileMenu.addEventListener('click', function(){
        popup.classList.add("popup-menu-open");
        mainContainer.classList.remove('page-wrapper');
    })

    //popup menu close
    menuClose.addEventListener('click', function(){
        popup.classList.remove("popup-menu-open");
        mainContainer.classList.add('page-wrapper');
    });

    //close popup when click on menu
    let menuLink = document.querySelectorAll(".menu-item a")
    menuLink.forEach(el =>{
        el.addEventListener('click', function(){
            popup.classList.remove("popup-menu-open");
        });
    });

    window.addEventListener("scroll", function(){
        // if(this.scrollY < 500 ){

            {

                let x = -scrollY;
                let y = scrollY;
                let px = "px";
                
                let we = document.querySelector(".home-we");
                we.setAttribute('style', `transform: translate(${x*.17}${px}, ${y*.1}${px})`);
            }
            {

                let x = scrollY;
                let y = -scrollY;
                let px = "px";
                
                let ar = document.querySelector(".home-ar");
                ar.setAttribute('style', `transform: translate(${x*.05}${px}, ${y*.01}${px})`);
            }
            {
                let x = -scrollY;
                let y = scrollY;
                let px = "px";
                
                let bl = document.querySelector(".home-bl");
                bl.setAttribute('style', `transform: translate(${x*.1}${px}, ${y*.15}${px})`);
            }
            {
                let x = scrollY;
                let y = scrollY;
                let px = "px";
                
                let la = document.querySelector(".home-la");
                la.setAttribute('style', `transform: translate(${x*.1}${px}, ${y*.2}${px})`);
            }
        // }
    })