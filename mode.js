let btn=document.querySelector("#btn1");
 let body=document.querySelector("body");

let currMode="light";
btn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="Dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
console.log(currMode,"Mode has been applied");

})


