const imagecontainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEL = document.getElementById("next");
let x=0;
prevEl.addEventListener("click", ()=>{
    x = x + 45;
    updateGallery();
});
nextEL.addEventListener("click", ()=>{
    x = x - 45;
    updateGallery();
});

function updateGallery(){
    imagecontainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}
