let year = document.querySelector (".yearly");

let month = document.querySelector(".monthly");

let second5 = document.querySelector (".second5");

let second4 = document.querySelector(".second4");

let second6 = document.querySelector(".second6");

let first1 = document.querySelector(".first1");

let first2 = document.querySelector(".first2");

let first3 = document.querySelector(".first3");

let toggle = document.querySelector(".toggle");

let plus1 = document.querySelector(".plus1");
let minus1 = document.querySelector(".minus1");
let userplus1 = document.querySelector(".userplus1");

let plus2 = document.querySelector(".plus2");
let minus2 = document.querySelector(".minus2");
let userplus2 = document.querySelector(".userplus2");

let plus3 = document.querySelector(".plus3");
let minus3 = document.querySelector(".minus3");
let userplus3 = document.querySelector(".userplus3");

let plus4 = document.querySelector(".plus4");
let minus4 = document.querySelector(".minus4");
let userplus4 = document.querySelector(".userplus4");

let plus5 = document.querySelector(".plus5");
let minus5 = document.querySelector(".minus5");
let userplus5 = document.querySelector(".userplus5");

let plus6 = document.querySelector(".plus6");
let minus6 = document.querySelector(".minus6");
let userplus6 = document.querySelector(".userplus6");

let a =1;

plus1.addEventListener("click", ()=>{
    a++;
    userplus1.textContent =`${a} users`;
 
});

minus1.addEventListener("click", ()=>{
    if (a>1) {
        a--;
        userplus1.textContent = `${a} users`;
        minus1.style.borderColor = "white";
        
    } 

    if (a==1) {
        a=1;
        userplus1.textContent = `${a} user`;
        minus1.style.borderColor ="#161616";
        
    }
})

let b =5;

plus2.addEventListener("click", ()=>{
    b++;
    userplus2.textContent =`${b} users`;
 
});

minus2.addEventListener("click", ()=>{
    if (b>5) {
        b--;
        userplus2.textContent = `${b} users`;
        minus2.style.borderColor = "white";
        
    } 

    if (b==5) {
        b=5;
        userplus2.textContent = `${b} users`;
        minus2.style.borderColor ="#161616";
        
    }
})
let c =10;

plus3.addEventListener("click", ()=>{
    c++;
    userplus3.textContent =`${c} users`;
 
});

minus3.addEventListener("click", ()=>{
    if (c>10) {
        c--;
        userplus3.textContent = `${c} users`;
        minus3.style.borderColor = "white";
        
    } 

    if (c==10) {
        c=10;
        userplus3.textContent = `${c} users`;
        minus3.style.borderColor ="#161616";
        
    }
});

let d =1;

plus4.addEventListener("click", ()=>{
    d++;
    userplus4.textContent =`${d} users`;
 
});

minus4.addEventListener("click", ()=>{
    if (d>1) {
        d--;
        userplus4.textContent = `${d} users`;
        minus4.style.borderColor = "white";
        
    } 

    if (d==1) {
        d=1;
        userplus4.textContent = `${d} user`;
        minus4.style.borderColor ="#161616";
        
    }
})

let e =5;

plus5.addEventListener("click", ()=>{
    e++;
    userplus5.textContent =`${e} users`;
 
});

minus5.addEventListener("click", ()=>{
    if (e>5) {
        e--;
        userplus5.textContent = `${e} users`;
        minus5.style.borderColor = "white";
        
    };

    if (e==5) {
        e=5;
        userplus5.textContent = `${e} users`;
        minus5.style.borderColor ="#161616";
        
    };
});

let f =10;

plus6.addEventListener("click", ()=>{
    f++;
    userplus6.textContent =`${f} users`;
 
});

minus6.addEventListener("click", ()=>{
    if (f>10) {
        f--;
        userplus6.textContent = `${f} users`;
        minus6.style.borderColor = "white";
        
    } ;

    if (f==10) {
        f=10;
        userplus6.textContent = `${f} users`;
        minus6.style.borderColor ="#161616";
        
    }
})


function showyear() {

    second5.style.display="grid";
    second6.style.display="grid";
    second4.style.display="grid";

    first1.style.display="none";
    first2.style.display="none";
    first3.style.display="none";
    
}
function hideyear() {

    second5.style.display="none";
    second6.style.display="none";
    second4.style.display="none";

    first1.style.display="grid";
    first2.style.display="grid";
    first3.style.display="grid";
    
};

year.addEventListener(("click"),()=>{
    showyear()
});

month.addEventListener(("click"),()=>{
    hideyear()
});

function leftclick() {
    toggle.style.left = "75px";
}

function rightclick() {
    toggle.style.left = "0"; 
} 

function white() {
    month.style.color = "white"
}
function black() {
    month.style.color = "black"
}
function yearwhite() {
    year.style.color = "white"
}
function yearblack() {
    year.style.color = "black"
}

year.addEventListener("click", ()=>{
    leftclick();
    white();
    yearblack();

})

month.addEventListener("click", ()=>{
    rightclick();
    black();
    yearwhite();
}) 
