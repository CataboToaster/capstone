/*jslint devel: true */

/*global
console
*/
"use strict";
function userInfos() {
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("email").value);
    if (document.getElementById("telephone").value !== null) {
        console.log(document.getElementById("telephone").value);
    }
    console.log(document.getElementById("message").value);
}

//To see the code please turn on "previous log" on your device.
//I'm using bracket so i have to use "use strict" to remove lof error
