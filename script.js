
function part4(){
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: .01,
    });

    Shery.makeMagnet("#menuopener" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });


    Shery.textAnimate("#right6 h1" /* Element to target.*/, {
        //Parameters are optional.
        style: 1,
        y: 10,
        delay: 0,
        duration: 1,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
        scrolltrigger: true,
    });


    Shery.hoverWithMediaCircle("#image, #imageAIM, #imageochi, #imagedavid, #imageemi, #imagemakh" /* Element to target.*/, {
        images: ["https://obys.agency/wp-content/uploads/2023/08/Olga_Prudka_2.png"],
        scale: 1.5,
    });

    gsap.from("#part1r h1", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: 0.5,
        stagger: 0.2
    })
}
part4();

function flag(){
    var flag = document.getElementById("flag");

    var float = document.querySelector(".float-text");

    var float2 = document.querySelector(".float-text2");

    float.addEventListener(("mouseover"), function(){
        flag.style.opacity = ".4";
    });

    document.addEventListener('DOMContentLoaded', function() {
        const flag = document.getElementById('flag');

        document.addEventListener('mousemove', function(event) {
            if (flag.style.opacity === '0.4') {
                flag.style.left = `${event.clientX}px`;
                flag.style.top = `${event.clientY}px`;
                flag.style.transform = 'translate(-50%, -90%)';
            }
        });
    });

    float.addEventListener(("mouseleave"), function(){
        flag.style.opacity = "0";
    });

    float2.addEventListener(("mouseover"), function(){
        flag.style.opacity = ".4";
    });

    float2.addEventListener(("mouseleave"), function(){
        flag.style.opacity = "0";
    });
}
flag();

function part2(){
    var circle = document.getElementById("circle");

    document.getElementById("vid-container").addEventListener("mousemove", function(event){
        circle.style.top = `${event.clientY}` + "px";
        circle.style.left = `${event.clientX}` + "px";
        circle.style.transform = "translate(-350%, -120%)";
    });

    document.getElementById("vid-container").addEventListener("mouseleave", function(event){
        circle.style.top = "26%";
        circle.style.left = "116%";
        circle.style.transition = "0.5s ease";
    });

    var playstate = false;


    document.getElementById("vid-container").addEventListener("click", function(){
        playstate = !playstate;
        if(playstate){
            document.getElementById("circle").style.scale = ".8";
            document.getElementById("circle").style.transition = "0.5s ease";
            document.getElementById("first").style.opacity = "0";
            document.getElementById("second").style.opacity = "1";
            document.querySelector("#vid-container img").style.opacity = "0";
            document.querySelector("#vid-container video").play();
        }else {
            document.getElementById("circle").style.scale = "1";
            document.getElementById("circle").style.transition = "0.5s ease";
            document.getElementById("first").style.opacity = "1";
            document.getElementById("second").style.opacity = "0";
            document.querySelector("#vid-container img").style.opacity = "1";
            document.querySelector("#vid-container video").pause();
        }
    });


}
part2();

function  cover(){
    var cover = document.getElementById("cover");

    var a = false;
    var toggle = document.getElementById("toggle");
    setInterval(function(){
        a = !a;
        if(a == false){
            toggle.style.fontFamily = "Plain";
            toggle.style.color = "white";
        }else{
            toggle.style.fontFamily = "Silk Serif"
            toggle.style.webkitTextStrokeWidth = "1px";
            toggle.style.webkitTextStrokeColor = "white";
            toggle.style.color = "transparent";
        }
    }, 1000)

    let countvalue = 0;
    let count = document.getElementById("count");

    function updatecounter(){

        if(countvalue === 100){
            return;
        }

        countvalue += Math.floor(Math.random() * 10) + 1;

        if(countvalue > 100){
            countvalue = 100;
        }

        count.textContent = `${countvalue} - 100`;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updatecounter, delay);
        if(countvalue === 100){
            var t1 = gsap.timeline();
            t1.to(".firsth",{
                opacity: 0,
                duration: 1,
                ease: "power4.out",
            })
            t1.to(".second",{
                opacity: 0,
                duration: 1,
                ease: "power4.out",
            })
            t1.to("#cover",{
                opacity: 0,
                display: "none",
                duration: 1,
                ease: "power4.out",
            })
        }
    }

    updatecounter();
}
cover();
function menu(){
    let dot = document.querySelector(".hdot");
    let dot1 = document.querySelector(".hdot1");
    let dot2 = document.querySelector(".hdot2");
    let dot3 = document.querySelector(".hdot3");
    let menu = document.getElementById("menuopener")
    let menu1 = document.getElementById("menu");
    let l = true;
    menu.addEventListener('click', function(){
        console.log("menu");
        l = !l;
        if(l === true){
            dot.style.opacity = "0";
            dot1.style.opacity = "0";
            dot2.style.opacity = "0";
            dot3.style.opacity = "0";
            menu1.style.opacity = "1";
            menu1.style.zIndex = "100";
            gsap.from("#menul h1", {
                y: -100,
                duration: 1,
                ease: "power4.out",
                stagger: 0.2
            });
        }else {
            dot.style.opacity = "1";
            dot1.style.opacity = "1";
            dot2.style.opacity = "1";
            dot3.style.opacity = "1";
            menu1.style.zIndex = "0";
            gsap.to("#menul h1", {
                y: -100,
                duration: 1,
                ease: "power4.out",
                delay: 0.5,
                stagger: 0.2
            });
            gsap.to("#menu", {
                y: 100,
                opacity: 0,
                duration: .5,
                ease: "power4.out",
            });
        }
    });
}
menu();

function heading(){
    let heading = document.querySelector(".heading");
    heading.addEventListener("mouseover", function(){
        gsap.to(".up", {
            y: -50,
            duration: 1,
            ease: "power4.out",
        });
    });
    heading.addEventListener("mouseleave", function(){
        gsap.to(".up", {
            y: 0,
            duration: 1,
            ease: "power4.out",
        });
    });
}
heading();

function heading1(){
    let heading = document.querySelector(".heading1");
    heading.addEventListener("mouseover", function(){
        gsap.to(".up1", {
            y: -50,
            duration: 1,
            ease: "power4.out",
        });
    });
    heading.addEventListener("mouseleave", function(){
        gsap.to(".up1", {
            y: 0,
            duration: 1,
            ease: "power4.out",
        });
    });
}
heading1();

function heading2(){
    let heading = document.querySelector(".heading2");
    heading.addEventListener("mouseover", function(){
        gsap.to(".up2", {
            y: -50,
            duration: 1,
            ease: "power4.out",
        });
    });
    heading.addEventListener("mouseleave", function(){
        gsap.to(".up2", {
            y: 0,
            duration: 1,
            ease: "power4.out",
        });
    });
}
heading2();

function heading3(){
    let heading = document.querySelector(".heading3");
    heading.addEventListener("mouseover", function(){
        gsap.to(".up3", {
            y: -50,
            duration: 1,
            ease: "power4.out",
        });
    });
    heading.addEventListener("mouseleave", function(){
        gsap.to(".up3", {
            y: 0,
            duration: 1,
            ease: "power4.out",
        });
    });
}
heading3();

function heading4(){
    let heading = document.querySelector(".heading4");
    heading.addEventListener("mouseover", function(){
        gsap.to(".up4", {
            y: -50,
            duration: 1,
            ease: "power4.out",
        });
    });
    heading.addEventListener("mouseleave", function(){
        gsap.to(".up4", {
            y: 0,
            duration: 1,
            ease: "power4.out",
        });
    });
}
heading4();

function heading5(){
    let heading = document.querySelector(".heading5");
    heading.addEventListener("mouseover", function(){
        gsap.to(".up5", {
            y: -50,
            duration: 1,
            ease: "power4.out",
        });
    });
    heading.addEventListener("mouseleave", function(){
        gsap.to(".up5", {
            y: 0,
            duration: 1,
            ease: "power4.out",
        });
    });
}
heading5();

document.body.style.overflow = "hidden";

setTimeout(() => {
    document.body.style.overflow = "visible";
}, 5000)

function checkScreenSize() {
    const screenWidth = window.innerWidth;
    const breakpoint = 480; // Adjust breakpoint as needed

    if (screenWidth <= breakpoint) {
        // Disable the function
        heading = () => {};
    } else {
        // Enable the function
        // No need to reassign, as it's already defined
    }
}

// Initial check
checkScreenSize();

// Listen for resize events
window.addEventListener('resize', checkScreenSize);
