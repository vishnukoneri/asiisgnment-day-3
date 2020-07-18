marks = prompt("enter your marks");
if(marks>=80){
    console.log(`your marks is ${marks} and grade is A`);
}
else if(marks>=35 && marks<50){
    console.log(`your marks is ${marks} and grade is C`);
}
else if(marks>=50 && marks<80){
    console.log(`your marks is ${marks} and grade is B`);
}
else{
    console.log("Fail")
}
switch(marks/5){
    case 20:
    case 19:
    case 18:
    case 17:
    case 16:
        console.log(`your marks is ${marks} and grade is A`);
        break;
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
    case 10:
        console.log(`your marks is ${marks} and grade is B`);
        break;
    case 9:
    case 8:
    case 7:
        console.log(`your marks is ${marks} and grade is C`);
        break;
    default:
        console.log("Fail");
        break;

}
let result = (marks >=80)?`your marks is ${marks} and grade is A`:(marks >=50 && marks <80 )?`your marks is ${marks} and grade is B`:(marks >=35 && marks<50)?`your marks is ${marks} and grade is C`:"fail"
console.log(result);