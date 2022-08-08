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
        console.log(getCookie('dtm_tcdata'));
        window.onload = getJwplayer();
    }
  } else {
    // do something else
  }
}
__tcfapi('addEventListener', 2, callback);

function getJwplayer() {
  jwplayer.key = '***REMOVED***';

  var randomNum = Math.floor(Math.random() * 1000000);
  var fileUrl;
  var height;

  if(jw_player_options.content_type == "audio"){
    fileUrl = 'https://vstatic.fastclick.net/static/archiver/audio/61a/be7/4a8/61abe74a84c71a39e612e0587e5cf6bb501c5b17aeda1ca62d9ac68a47a36dd7.mp3';
    height = 40;
  } else if (jw_player_options.content_type == "video"){
    fileUrl = 'https://vstatic.fastclick.net/static/archiver/video/f03/bfb/1bb/f03bfb1bb39d9f04761852cbe10a3447f2ebd52c1028d39eb85de7ca7586a3e2.mp4';
    height = 360
  }
  // Vast tag call.
  var tagUrl = jw_player_options.vastTagUrl+'&gdpr_consent='+getCookie('dtm_tcdata');


  jwplayer('player')
      .setup({
          primary: 'html5',
          advertising: {
              client: 'vast',
              tag: tagUrl,
              vpaidcontrols: true,
          },
          controls: true,
          width: 640,
          height: height,
          autostart: true,
          mute: true,
          file: fileUrl
      })

};