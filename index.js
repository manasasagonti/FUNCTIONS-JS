//question 1

var side = 23;
function areaofsquare(){
    var area = side*side;
    console.log("area of sqaure= "+""+area);
}
areaofsquare();

//question 2

function addNumbers(p1,p2){
    let var1=p1;
    let var2=p2;
    let result = var1+var2;
    console.log(`sum of ${var1} and ${var2} is ${result}`);
}
addNumbers(3,4);

//question 3
let greet = () => console.log('Hello!!');
greet();

//question4
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();


//question 7
function factorial(n){
    let fact=1;
    for(var i=1; i<=n; i++){
        fact=fact*i;
    }
    console.log(`factorial of ${n} is ${fact}`);
}
factorial(5);

