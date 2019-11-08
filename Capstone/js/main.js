/*jslint devel: true */
/*global
document
*/
"use strict";
function toggleFunction() {
    if (document.getElementById("toggle").checked) {
        document.getElementById("stock1").style.display = "none";
        document.getElementById("stock2").style.display = "none";
        document.getElementById("stock3").style.display = "none";
    }
    else {
            document.getElementById("stock1").style.display = "block";
            document.getElementById("stock2").style.display = "block";
            document.getElementById("stock3").style.display = "block";
    }
}
