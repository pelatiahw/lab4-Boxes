/*document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById('my-btn');
    btn.addEventListener('click', function() {
        alert("You clicked the button!");
    });
});

btn.onclick = function box() {
    var div = document.createElement("div");
    div.className = "black";
    document.body.appendChild(div);

}*/

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