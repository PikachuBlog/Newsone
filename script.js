let string = "" ;

let buttons = document.querySelectorAll(".button");

//console.log(buttons);
//const arr = Array.from(buttons);

//console.log(arr);

buttons.forEach((button)=>{
    button.addEventListener( "click" , (e)=>{
//console.log(e.target);
if(  e.target.innerHTML == "="){
    string = eval(string);
document.querySelector("input").value = string;
}


else if (  e.target.innerHTML == "C"){
    string = ""
    document.querySelector(".input").value =string;
    
}

else {
    string = string + e.target.innerHTML;
    console.log(string);
    document.querySelector(".input").value = string;}


//console.log(string);


    })
})



