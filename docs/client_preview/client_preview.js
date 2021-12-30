function newT(){
    var cnvrUrl = document.getElementById("cnvr-url").value;
    var cnvrSub = cnvrUrl.substr(53);
    var decodedUri = decodeURIComponent(cnvrSub);
    decodedUri = decodedUri.slice(0, decodedUri.lastIndexOf('&'));
    uri = decodedUri.replace(/.*dtm_id=\d+&/, "https://s-usweb.dotomi.com/assets/js/ace/current/ace-preview.html?");
    uri = encodeURIComponent(uri);
    var winReplace = window.location.replace("https://demo.testmyads.com/testmyads/docs/client_preview/cp_300_250.html?url=" + uri);
    return winReplace;
    }
    
    
    
    function parseQuery() {
    var query = {};
    var queryString = decodeURIComponent(window.location.search);
    var pairs = (queryString[0] === '?' ? queryString.substring(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    const {company_id, message_campaign_id, template_id, media_size_id, dtm_user_ip} = query;
    qParams = 'comId=' + company_id + '&msgCampId=' + message_campaign_id + '&tid=' + template_id + '&ms=' + media_size_id + '&dtm_user_ip=' + dtm_user_ip;
    var scriptSrc = 'http://iad-usadmm.dotomi.com/fetch/preview/jsonp?';
    
    var combine = scriptSrc + qParams;
    console.log(combine);
    return combine;
    }