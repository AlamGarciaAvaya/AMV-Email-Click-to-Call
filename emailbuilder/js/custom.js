$(document).ready(function() {

  $('#gencode-btn').on('click', function() {

    if ($('#contexto-txt').val() == '') {
      var contexto = $('#contexto-txt').attr('placeholder');
    } else {
      var contexto = $('#contexto-txt').val();
    }
    if ($('#cuenta-txt').val() == '') {
      var cuenta = $('#cuenta-txt').attr('placeholder');
    } else {
      var cuenta = $('#cuenta-txt').val();
    }
    if ($('#endpoint-txt').val() == '') {
      var endpoint = $('#endpoint-txt').attr('placeholder');
    } else {
      var endpoint = $('#endpoint-txt').val();
    }
    if ($('#numero-txt').val() == '') {
      var callnumber = $('#numero-txt').attr('placeholder');
    } else {
      var callnumber = $('#numero-txt').val();
    }

    if ($('#asunto-txt').val() == '') {
      var titulo = $('#asunto-txt').attr('placeholder');
    } else {
      var titulo = $('#asunto-txt').val();
    }

    if ($('#mensaje1-txt').val() == '') {
      var mensaje1 = $('#mensaje1-txt').attr('placeholder');
    } else {
      var mensaje1 = $('#mensaje1-txt').val();
    }

    if ($('#firma-txt').val() == '') {
      var firma = $('#firma-txt').attr('placeholder');
    } else {
      var firma = $('#firma-txt').val();
    }
    if ($('#url-txt').val() == '') {
      var url = $('#url-txt').attr('placeholder');
    } else {
      var url = $('#url-txt').val();
    }
    if ($('#img-txt').val() == '') {
      var imagen = $('#img-txt').attr('placeholder');
    } else {
      var imagen = $('#img-txt').val();
    }

    var contexto = "var1="+contexto;
    var endpoint = "var2="+endpoint;
    var callnumber = "var3="+callnumber;
    var cuenta = "var4="+cuenta;
    var mensaje2 = $('#mensaje2-txt').val();
    var mensaje3 = $('#mensaje3-txt').val();
    var mensaje4 = $('#mensaje4-txt').val();


    var cuerpo = "<!DOCTYPE html><html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'><head> <meta charset='utf-8'> <meta name='viewport' content='width=device-width'> <meta http-equiv='X-UA-Compatible' content='IE=edge'> <meta name='x-apple-disable-message-reformatting'> <title></title><!--[if mso]> <style>*{font-family: sans-serif !important;}</style><![endif]--> <style>html, body{margin: 0 auto !important; padding: 0 !important; height: 100% !important; width: 100% !important;}*{-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;}div[style*='margin: 16px 0']{margin: 0 !important;}table, td{mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;}table{border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;}table table table{table-layout: auto;}img{-ms-interpolation-mode: bicubic;}a{text-decoration: none;}*[x-apple-data-detectors], .unstyle-auto-detected-links *, .aBn{border-bottom: 0 !important; cursor: default !important; color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important;}.a6S{display: none !important; opacity: 0.01 !important;}img.g-img+div{display: none !important;}@media only screen and (min-device-width: 320px) and (max-device-width: 374px){.email-container{min-width: 320px !important;}}/* iPhone 6, 6S, 7, 8, and X */ @media only screen and (min-device-width: 375px) and (max-device-width: 413px){.email-container{min-width: 375px !important;}}/* iPhone 6+, 7+, and 8+ */ @media only screen and (min-device-width: 414px){.email-container{min-width: 414px !important;}}</style><!--[if mso]><style type='text/css'>ul,ol{margin: 0 !important;}li{margin-left: 30px !important;}li.list-item-first{margin-top: 0 !important;}li.list-item-last{margin-bottom: 10px !important;}</style><![endif]--> <style>/* What it does: Hover styles for buttons */ .button-td, .button-a{transition: all 100ms ease-in;}.button-td-primary:hover, .button-a-primary:hover{background: #555555 !important; border-color: #555555 !important;}@media screen and (max-width: 480px){.fluid{width: 100% !important; max-width: 100% !important; height: auto !important; margin-left: auto !important; margin-right: auto !important;}.stack-column, .stack-column-center{display: block !important; width: 100% !important; max-width: 100% !important; direction: ltr !important;}/* And center justify these ones. */ .stack-column-center{text-align: center !important;}/* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */ .center-on-narrow{text-align: center !important; display: block !important; margin-left: auto !important; margin-right: auto !important; float: none !important;}table.center-on-narrow{display: inline-block !important;}/* What it does: Adjust typography on small screens to improve readability */ .email-container p{font-size: 17px !important;}}</style><!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]--></head><body width='100%' style='margin: 0; padding: 0 !important; mso-line-height-rule: exactly; '> <center style='width: 100%; '><!--[if mso | IE]> <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%' style=''> <tr> <td><![endif]--> <div style='display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;'>  </div><div style='display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;'> &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp; </div><div style='max-width: 680px; margin: 0 auto;' class='email-container'><!--[if mso]> <table align='center' role='presentation' cellspacing='0' cellpadding='0' border='0' width='680'> <tr> <td><![endif]--> <table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%' style='margin: 0 auto;'> <tr> <td style='background-color: #ffffff;'> <table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%'> <tr> <td style='padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;'> <h1 style='margin: 0 0 10px; font-size: 25px; line-height: 30px; color: #333333; font-weight: normal;'> " + titulo + " </h1> <p style='margin: 0 0 10px;'> " + mensaje1 + " </p><p style='margin: 0 0 10px;'> " ;

    var cuerpo2 = mensaje2 + " </p><p style='margin: 0 0 10px;'> " ;
    var cuerpo3 =  mensaje3 + " </p><p style='margin: 0 0 10px;'> ";
    var cuerpo4 =  mensaje4 + " </p></td></tr><tr> <td style='padding: 0 20px 20px;'> <table align='center' role='presentation' cellspacing='0' cellpadding='0' border='0' style='margin: auto;'> <tr> <td class='button-td button-td-primary' style='border-radius: 4px; '> <a href='" + url +"?"+contexto +"&"+endpoint+"&"+callnumber +"&"+cuenta+ "'> <img src='" + imagen + "' width='300px'> </a> </td></tr></table> </td></tr></table> </td></tr><tr> <td valign='middle' style='text-align: center; background-position: center center !important; background-size: cover !important;'><!--[if gte mso 9]> <v:image xmlns:v='urn:schemas-microsoft-com:vml' fill='true' stroke='false' style='border: 0; display: inline-block; width: 680px; height: 180px;'/> <v:rect xmlns:v='urn:schemas-microsoft-com:vml' fill='true' stroke='false' style='border: 0; display: inline-block; position: absolute; width: 680px; height: 180px;'> <v:fill opacity='0%' color='#222222'/><![endif]--> <div><!--[if mso]> <table align='center' role='presentation' border='0' cellspacing='0' cellpadding='0' width='500'> <tr> <td valign='top' width='500'><![endif]--> <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%' style='max-width:500px; margin: auto;'> <tr> <td valign='middle' style='text-align: center; padding: 40px 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #000;'> <p style='margin: 0;'> " + firma + " </p></td></tr></table><!--[if mso]> </td></tr></table><![endif]--> </div><!--[if gte mso 9]> </v:fill> </v:rect> </v:image><![endif]--> </td></tr><!--[if mso | IE]> </td></tr></table><![endif]--> </center></body>";

    $("textarea#exampleFormControlTextarea1").val(cuerpo);
    $("textarea#exampleFormControlTextarea2").val(cuerpo2);
    $("textarea#exampleFormControlTextarea3").val(cuerpo3);
    $("textarea#exampleFormControlTextarea4").val(cuerpo4);

    cuerpo = $.parseHTML(cuerpo+cuerpo2+cuerpo3+cuerpo4);
    $("#htmlpreview").empty().append(cuerpo);


  });






});
//Fin OnLoad
