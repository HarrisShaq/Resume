function myFunction() {
const x = document.createElement("NAV");
document.body.appendChild(x);

const anchorElmnt = document.createElement("A");
anchorElmnt .setAttribute("href", "/html");

const txt1 = document.createTextNode("HTML");
anchorElmnt .appendChild(txt1);

x.appendChild(anchorElmnt);
}