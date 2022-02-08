
const prompt = require('prompt-sync')();
const j=Number(prompt('How many side?'));
const b=Number(prompt('Which side do you want to be rigged?'));
if (b<=j|b<=1){
    a=Math.random()*(j+1);
    a=Math.floor(a)+1;
    if (a==j+1){
        a=b
    }
    console.log(a)
}else{
    console.log("error")
}
