function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var cvalue = getCookie('dtm_tcdata');

const callback = function(tcData, success) {
  if(tcData.eventStatus === 'useractioncomplete') {
    var consentString = tcData.tcString;

    if(consentString){
        setCookie('dtm_tcdata', consentString, 400);
        window.location.reload();
    }
  } else {
    // do something else
  }
}
__tcfapi('addEventListener', 2, callback);