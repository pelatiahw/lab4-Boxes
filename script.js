var btn = document.createElement("BUTTON");
var i = document.createTextNode("CLICK ME");
btn.appendChild(i);
document.body.appendChild(btn);

btn.onclick = function box() {
    var div = document.createElement("div");
    div.className = "black";
    document.body.appendChild(div);

}