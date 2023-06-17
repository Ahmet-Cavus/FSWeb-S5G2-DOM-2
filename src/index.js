import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

//mouseover
const logoHeading = document.querySelector('.logo-heading').addEventListener("mouseover",(e)=>{
    e.target.style.fontWeight = "bold";
});

//mouseout
const logoHeading2 = document.querySelector('.logo-heading').addEventListener("mouseout", (e) => {
    e.target.style.fontWeight = "normal";
});


//wheel
document.querySelector(".main-navigation").addEventListener("wheel", wheelFunc);

function wheelFunc(e) {
  e.target.style.backgroundColor = "silver";
}


//keypress
document.addEventListener("keypress", handleKeypress);

function handleKeypress(event) {
  const key = event.key;
  
  if (key === "Enter") {
    console.log("Enter tuşuna basıldı!");
  } else if (key === "Escape") {
    console.log("Escape tuşuna basıldı!");
  } else {
    console.log("Tuşa basıldı:", key);
  }
}

//keydown
document.addEventListener("keydown", function(e) {
    console.log("Basılan tuşun kodu:" + e.code);
});

//resize
window.addEventListener("resize",function(){
    console.log("Pencere boyutu değişti!");
});

//mousemove
const rota = document.querySelector(".content-destination img").addEventListener("dblclick", (e) => {
    if (e.target.style.borderRadius === "100%") {
        e.target.style.borderRadius = "";  
    } else {
        e.target.style.borderRadius = "100%";  
    }
});

//scroll
const header=document.querySelector("header");
document.addEventListener("scroll",(e)=> {
    header.style.backgroundColor="green";
});

//load
const imgList=document.querySelectorAll("img");
imgList[1].addEventListener("load",() => {
    alert("Yüklendi");
});

//click
const clickButton=document.querySelectorAll(".btn");
clickButton.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.backgroundColor="#8b8989";
    });
});