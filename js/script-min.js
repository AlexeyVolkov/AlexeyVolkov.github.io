function getCookie(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}function setCookie(e,t,n){var o=new Date;o.setTime(o.getTime()+864e5*n),document.cookie=e+"="+t+"; path=/; expires="+o.toGMTString()+"; SameSite=Strict"}function deleteCookie(e){setCookie(e,"",-1)}function populateStorage(){input__IDs.forEach(function(e,t,n){null!==document.getElementById(e).value&&void 0!==document.getElementById(e).value&&setCookie(e,document.getElementById(e).value,30)}),radio__IDs.forEach(function(e,t,n){document.getElementById(e)&&setCookie(e,document.getElementById(e).checked,30)}),setForm()}function setForm(){input__IDs.forEach(function(e,t,n){document.getElementById(e)&&(document.getElementById(e).value=getCookie(e))}),radio__IDs.forEach(function(e,t,n){document.getElementById(e)&&("true"===getCookie(e)?document.getElementById(e).checked=!0:document.getElementById(e).checked=!1)})}function getRandomInt(e){return Math.floor(Math.random()*Math.floor(e))}var input__IDs=["city__input","city__select","date","gender","other_gender","name","email","phone"],radio__IDs=["delivery","take_away"];getCookie(input__IDs[0])?setForm():populateStorage(),input__IDs.forEach(function(e,t,n){document.getElementById(e)&&(document.getElementById(e).onchange=populateStorage)}),radio__IDs.forEach(function(e,t,n){document.getElementById(e)&&(document.getElementById(e).onchange=populateStorage)});var disabilities=["Protanopia","Protanomaly","Deuteranopia","Deuteranomaly","Tritanopia","Rod monochromacy","Achromacy","Color-blindness","Blindness","Macular degeneration","Glaucoma","Diabetic retinopathy","Cataract","Hearing Loss","Deuteranomaly","Deuteranomaly"];document.getElementsByTagName("h1")[0].innerText=disabilities[getRandomInt(15)];var text__dnt="?";text__dnt=navigator.doNotTrack?"On":"Off",document.getElementById("user_info__dnt").innerText=text__dnt;var text__js="On";document.getElementById("user_info__js").innerText=text__js;var text__lang="?";navigator.language&&(text__lang=navigator.language),document.getElementById("user_info__lang").innerText=text__lang;var text__os="?";navigator.platform&&(text__os=navigator.platform),document.getElementById("user_info__os").innerText=text__os;