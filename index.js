const text = document.getElementById("text");
const  inputValue = document.querySelector("input");
const p =document.querySelector("p")

const textValue = "WELCOME TO REMLAD"
let speed = 400 / inputValue.value

let index = 1;

writeText()


function writeText() {
text.innerText =textValue.slice(0, index)

index++

if (index > textValue.length){
    index=1
}

setTimeout(writeText, speed)
}


inputValue.addEventListener("input", value )


function value (e){
    let x = e.target.value
    if(x<1 ){
 p.innerText = "This value will run infinitely. 1 is the arbitrary value"
        x=1
    }else{
        p.innerText= " "
    }
    speed = 400/x
    console.log(speed)
}
