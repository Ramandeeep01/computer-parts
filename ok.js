let moni = document.getElementById("monitor");
let dv = document.getElementById("divv");
let dv11 = document.getElementById("div11");
let x11 = document.getElementById("x1");

let key = document.getElementById("keyboard");
let dv12 = document.getElementById("div12");
let x12 = document.getElementById("x2");

let mou = document.getElementById("mouse");
let dv13 = document.getElementById("div13");
let x13 = document.getElementById("x3");

let cp = document.getElementById("cpu");
let dv14 = document.getElementById("div14");
let x14 = document.getElementById("x4");

let hd = document.getElementById("headphn");
let dv15 = document.getElementById("div15");
let x15 = document.getElementById("x5");

let sk = document.getElementById("speaker1");
let dv16 = document.getElementById("div16");
let x16 = document.getElementById("x6");


moni.addEventListener("click", () => {
    moni.classList.add("div1");
    dv.style.display = "flex";
    dv11.style.display = "flex";
    x11.style.display = "flex";
});

x11.addEventListener("click", () => {
    moni.classList.remove("div1");
    dv.style.display = "none";
    dv11.style.display = "none";
    x11.style.display = "none";
})

key.addEventListener("click", () => {
    key.classList.add("div2");
    dv.style.display = "flex";
    dv12.style.display = "flex";
    x12.style.display = "flex";
});

x12.addEventListener("click", () => {
    key.classList.remove("div2");
    dv.style.display = "none";
    dv12.style.display = "none";
    x12.style.display = "none";
});

mou.addEventListener("click", () => {
    mou.classList.add("div3");
    dv.style.display = "flex";
    dv13.style.display = "flex";
    x13.style.display = "flex";
});

x13.addEventListener("click", () => {
    mou.classList.remove("div3");
    dv.style.display = "none";
    dv13.style.display = "none";
    x13.style.display = "none";
});


cp.addEventListener("click", () => {
    cp.classList.add("div4");
    dv.style.display = "flex";
    dv14.style.display = "flex";
    x14.style.display = "flex";
});

x14.addEventListener("click", () => {
    cp.classList.remove("div4");
    dv.style.display = "none";
    dv14.style.display = "none";
    x14.style.display = "none";
});

hd.addEventListener("click", () => {
    hd.classList.add("div5");
    dv.style.display = "flex";
    dv15.style.display = "flex";
    x15.style.display = "flex";
});

x15.addEventListener("click", () => {
    hd.classList.remove("div5");
    dv.style.display = "none";
    dv15.style.display = "none";
    x15.style.display = "none";
});


sk.addEventListener("click", () => {
    sk.classList.add("div6");
    dv.style.display = "flex";
    dv16.style.display = "flex";
    x16.style.display = "flex";
});

x16.addEventListener("click", () => {
    sk.classList.remove("div6");
    dv.style.display = "none";
    dv16.style.display = "none";
    x16.style.display = "none";
});