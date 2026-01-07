function getComputerChoice(){
    let num=Math.floor(Math.random()*3)
    if(num===0){
        return "Rock"
    }
    else if(num===1){
        return "Stone"
    }
    else{
        return "Scissor"
    }
}
function getHumanChoice(){
    let hum=parseInt(prompt("Enter a choice: "))
    return hum
}
let humsc=0,compsc=0
function rounds(huma,comp){
    
}
let huma=getHumanChoice()
let comp=getComputerChoice()