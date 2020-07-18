function test(num){
    if (num %2 == 0){
        console.log(`the entered number is ${num} and number is Even`);
    }
    else{
        console.log(`the entered number is ${num} andnumber is Even`);
    }
}
let num = prompt("enter a positive number",0);
test(num);