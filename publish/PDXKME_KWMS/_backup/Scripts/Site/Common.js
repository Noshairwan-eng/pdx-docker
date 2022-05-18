function CheckForSessionExpiry(data) {
    var tempData = JSON.stringify(data);
    if (tempData.indexOf("Login") > -1) {
        return true;
    }
    else {
        return false;
    }
}

    function SessionExpiredRedirect()
     {
      window.location.href = "/";
     }


     $(document).ajaxSuccess(function (event, xhr, settings, thrownError) {
         if (CheckForSessionExpiry(xhr.responseText)) {
             SessionExpiredRedirect();
         }
  
     });
//     $(document).ajaxError(function (event, jqxhr, settings, thrownError) {
//          
//         $("div#divLoading").removeClass('show');
//         if (jqxhr.status == 500) {

//             HandleServerError();
//         }
//     });
function ServerErrorRedirect(errorPageURL) 
{
    HandleServerError(); 
}