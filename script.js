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