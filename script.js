var div = ['div'];
        function click () {


              for(var i = 0; i<div.length; i++) {
                    var div = document.createElement('div')
                    div.className = 'friends';
                    h3.innerHTML = friends[i];
                    document.body.appendChild(div);
                    div.appendChild(h3);
                    var div = document.createElement("div");
                    div.appendChild(div);

              for(var j = 99; j > 0; j--) {
                  var div = document.createElement("div");
                  div.appendChild(div);
                    if (j < 0) {
                        div.innerHTML = div;
                    }
                    else if (j == 2) {
                        div.innerHTML = div;
                    }
                    else {
                        div.innerHTML = div;
                }
            
        };
    };
    document.body.appendChild(div);
};
var btn = document.getElementById('my-btn');
btn.addEventListener('click', singing)




var friends = ['steve', 'bob', 'susan', 'rose', 'kanye'];
        function singing () {


              for(var i = 0; i<friends.length; i++) {
                    var div = document.createElement('div')
                    var h3 = document.createElement('h3')
                    div.className = 'friends';
                    h3.innerHTML = friends[i];
                    document.body.appendChild(div);
                    div.appendChild(h3);
                    var para = document.createElement("p");
                    div.appendChild(para);

              for(var j = 99; j > 0; j--) {
                  var para = document.createElement("p");
                  div.appendChild(para);
                    if (j < 0) {
                        para.innerHTML = j + ' lines of code in the file,'+j+ ' lines of code;'+friends[i]+' strikes one out, clears it all out,'+j+' lines of code in the file'+j+' lines of code in the file,'+j+'lines of code;'+friends[i]+' strikes one out,clears it all out,'+j+' lines of code in the file.';
                    }
                    else if (j == 2) {
                        para.innerHTML = j +' lines of code in the file,'+j+ ' lines of code;'+friends[i]+' strikes one out, clears it all out,'+j+' lines of code in the file'+j+' lines of code in the file,'+j+'line of code;'+friends[i]+' strikes one out,clears it all out,'+j+' lines of code in the file.';
                    }
                    else {
                        para.innerHTML = j +' line of code in the file,'+j+ ' lines of code;'+friends[i]+' strikes one out, clears it all out,'+j+' line of code in the file'+j+' line of code in the file,'+j+'line of code;'+friends[i]+' strikes one out,clears it all out, no more lines of code in the file.';
                }
            
        };
    };
    document.body.appendChild(div);
};
var btn = document.getElementById('my-btn');
btn.addEventListener('click', singing)