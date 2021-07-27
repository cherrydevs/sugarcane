// ==UserScript==
// @name         Discord Injector 2.0b
// @namespace    https://discord.com/channels/*
// @version      2.1b
// @description  Discord Injector 2.0b
// @author       Exeon
// @match        https://discord.com/channels/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==
window.addEventListener('load', function() {
    console.log("Discord Injector Loaded.");
    $("<h2 onclick=\"unHideModMenu()\" style=\"color: white;text-align: center;\" id=\"modmenuclick\">Mod Menu</h2>").appendTo(".scroller-1Bvpku.none-2Eo-qx.scrollerBase-289Jih");
    $(`
          <div class="hidden zindexed modmenu" id="modmenuoverlay">
<br>
               <span style="font-size: 25px;">SugarCane Discord Injector 2.0b</span>
<br>
<br>
               <span onclick="hideModMenu()" style="font-size: 35px;color: red;">Close</span>
<br>
<br>
<br>
<input id="customtheme" placeholder="Custom theme URL"></input>
<button onclick="createtheme()">Inject (on next refresh)</button>
<br>
<br>
<br>
<br>

          </div>
    `).appendTo("body");
    $(`
          <style>
               .hidden {
                    display: none;
               }
               .zindexed{
                    z-index: 100;
                    position: fixed;

               }
button, input{
border-radius: 4px;
padding-left: 25px;
padding-right: 25px;
padding-top: 5px;
padding-bottom: 5px;
background-color: #0467d1;
color: white;
border: 0px;
}
button:focus{
background-color: #2dc902;
}
input {
padding-left: 4px;
}
.modmenu {
color: white;
background-color: #111111;
    height: 100%;
    width:600px;
    text-align: center;
}
          </style>
          <script>
              function unHideModMenu() {
    console.log("*");
    $("div").removeClass("hidden");
}
function hideModMenu() {
    $(".modmenu").addClass("hidden");
}
function createtheme() {
var currenttext = document.getElementById('customtheme').value
document.cookie = "currenttext=" + currenttext + "; expires=Thu, 18 Dec 2037 12:00:00 UTC; path=/;";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
var themeurl = readCookie("currenttext");
console.log(themeurl);
$('<link rel="stylesheet" type="text/css" href=' + themeurl + '>').appendTo('head');
</script>
    `).appendTo("body");
}, false);
