var button = document.createElement("button");
button.innerHTML = "push me";
var body = document.getElementsByTagName("body")[0];
button.className = 'button';
button.style.width = '50px';
button.style.height = '50px';
body.appendChild(button);

/*var btn = document.createElement("button");
var i = document.createTextNode("Click Me");
btn.appendChild(i);
document.body.appendChild(btn);

btn.onclick  = function box() {
    var div = document.createElement("div");
    div.className = "black";
    document.body.appendChild(div);
}*/






// more variable practice 

var myCountry = "usa";

console.log(myCountry.length);

console.log(myCountry.substring(0,3));

// On line 2, declare a variable myName and give it your name.
var myName = "ish";
// On line 4, use console.log to print out the myName variable.
console.log(MyName);
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName = "is";
// On line 9, use console.log to print out the myName variable.
console.log(myName);


// variables

/*var myAge = 22;
console.log(myAge);

var myAge = 33;
console.log(myAge);

var myName = "ISH";
console.log(myName);

var isOdd = true;
console.log(isOdd);

var dropTop = true;
console.log(dropTop);

var yourAge = 500;
console.log(yourAge);


/*
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById('my-btn');
    btn.addEventListener('click', function() {
        alert("You clicked the button!");
    });
});

btn.onclick = function box() {
    var div = document.createElement("div");
    div.className = "black";
    document.body.appendChild(div);

}



//coding notes
console.log(15 > 4);

console.log("Xiao Hui".length < 122);

console.log("Xiao Hui".length > 122);

console.log("WHERES THA BLOW!?".length * 8 < 100);

console.log("WHERES THA BLOW!?".length === "WHERES THA BLOW!?".length);

if ("Ish".length >= 3 ) {
    console.log("We Lit!");
}
//Computer: We Lit!

if ( "ISH".length <= 2 ) //false
{
    console.log("Let's go down the first road!");
}
else 
{
    console.log("Boi you ugly!"); //computer output
}

//computer: Boi you ugly!

if ( "Pelatiah Ishmael Morgan".length * 8 === 100 ) //false
 {
    console.log("I'm a trash coder.");
}

else {
    console.log("Gode Mode...")    
}

//computer: God Mode...

if ("Kanye West".length - 10 === 0) {
    console.log("808's and Heartbreaks."); //true
}
else {
    console.log("All of The Lights."); //false
}

//computer: 808's and Heartbreaks.



if ("Pusha T".length + "Kanye West".length - "Mos Def".length + "Desiigner".length - "Kid Cudi".length === 1 ) {
    console.log("G.O.O.D. Musik"); //fasle
}
else {
    console.log("Who is in G.O.O.D. Musik?"); //true - false?
}

//computer: Who is in G.O.O.D. Musik?

//pop-up box practice

confirm("WHAT AINT GOT NO ROOF!?"); //alert: WHAT AIN'T GOT NO ROOF!?
prompt("CAR AIN'T GOT NO ROOF!");  //CAR AIN'T GOT NO ROOF!
if ("10 === 10") {
    confirm("WHAT AIN'T GOT NO ROOF!?"); //true
}

else {
    console.log("false");
}

//computer: what ain't got no roof!? pop-up

if (10 * 12 - 100 >= 5) {
    console.log("Phantom thats all red!"); //true
}

else {
    prompt("I DON'T REALLY CARE IF YOU CRY!"); //false
}

//computer: I don't really care if you cry! prompt.



//Math

if ("Jon".length * 2 / (2+1) === 2 ) {
    console.log("The answer makes sense!");
    
} 

else {
    console.log("Error Error Error");
    }

//computer: The answer makes sense!


if ("Jon".length * 5 / (2+1) === 5 ) {
    confirm("21 21!");
    
} 

else {
    console.log("Error Error Error");
    }


//computer: 21 21! pop-up box

if ("steve".length * ("steve".length - "bob".length) / 100 === 50) {
    console.log("i don't know....");
}

else {
    console.log("I didn't feel like doing the math.....");
}

//computer: I did't feel like doing the math.....



// modulo

console.log(14 % 3); //2
console.log(99 % 8); //3
console.log(11 % 3); //2
console.log(12 % 5); //2
console.log(33 % 8); //1
console.log(99 % 4); //3
console.log(3 % 70); //3
console.log(8 % 777); //8
console.log(66 % 897); //66
console.log(777 % 3); //0
console.log(9999 % 1); //0
console.log(1 % 2); //1

//modulo if/else

//An example of an if/else statement with modulo in the condition


if( 4 % 2 === 0 ) {
    console.log("The first number is even");
} 

else {
    console.log("The first number is odd");
}

//computer: the first number is even.

if (16 % 2 === 0) {
    console.log("first"); //true
}
else {
    console.log("i'm just here")
}

//computer: first

if (22 % 2 === 0 ) {
    console.log("i'm hungry...");
}
else {
    conosle.log("WHERE THA FOOD!?!!?!?!?!?!?");
}

//computer: i'm hungry...

if (467 % 3 === 0) {
    confirm("nope.");
}
else {
    console.log("Outkast.");
}

//computer: Outkast.


//practice.



//substrings:

// Be careful with the substring's letter positions!'
"wonderful day" .substring(3,7);  

//computer: derf

"hello" .substring(0,2);
//computer: he

"Pelatiah Ishmael Morgan" .substring(3,18);
//Computer; atiah Ishmael M
*/
