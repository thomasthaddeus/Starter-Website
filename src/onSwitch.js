var link = document.getElementsByTagName("link")[0];
link.id = "myID";
link.className = "myClass";
link.lang = "en";
var attr = link.attributes;
for (var i=0; i < attr.length; i++) {
    console.log(attr[i].name + "='" + attr[i].value + "'");
}

function populateBody() {
    var body = document.getElementsByTagName("body")[0];
    var paragraph = document.createElement("p");
    paragraph.innerHTML = "<strong>Hello</strong> World!";
    body.appendChild(paragraph);
}

populateBody();