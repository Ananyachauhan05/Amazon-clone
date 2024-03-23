const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_pev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if(n>0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
});

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
            item.scrollLeft += evt.deltaY;
    });
}

// const leftbtn = document.querySelector(".l-btn");
// const rightbtn = document.querySelector(".r-btn");


// lefttbtn.addEventListener('click', function(event){
//     console.log('do0ne');
//     const conent = document.querySelector('.products');
//     conent.scrollLeft -= 1100;
//     event.preventDefault();
// })

// rightbtn.addEventListener('click', function(event){
//     console.log('do0ne');
//     const conent = document.querySelector('.products');
//     conent.scrollLeft -= 1100;
//     event.preventDefault();
// })

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

const sidebar = document.querySelector(".slidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".nav-bottom-1");

sidebtn.addEventListener("click", ()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
document.body.classList.add("stop.scroll");
});

cross.addEventListener("click", ()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");

});

const sign = document.querySelector(".nav-text");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
});