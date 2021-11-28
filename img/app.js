
        const menuIcon = document.querySelector("#menu");
        const headerRight = document.querySelector(".header-right");

        menuIcon.addEventListener('click',()=>{
            headerRight.classList.toggle('show') ;
        });


        let btn = document.querySelectorAll(".btn1");
     let slideRow = document.querySelector(".slider-row");
    
     btn[0].onclick = function(){
        slideRow.style.transform = "translateX(0%)";
        for(i=0; i<3;i++){
            btn[i].classList.remove('active')
        }
        this.classList.add('active')
     }
     btn[1].onclick = function(){
        slideRow.style.transform = "translateX(-33.353333333334%)";
        for(i=0; i<3;i++){
            btn[i].classList.remove('active')
        }
        this.classList.add('active')
     }
     btn[2].onclick = function(){
        slideRow.style.transform = "translateX(-66.676666666667%)";
        for(i=0; i<3;i++){
            btn[i].classList.remove('active')
        }
        this.classList.add('active')
     }
 
