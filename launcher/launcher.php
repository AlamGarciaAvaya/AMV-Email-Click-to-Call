<?php
     $context = $_GET["var1"];
     $endpoint = $_GET["var2"];
     $number = $_GET["var3"];
     $cuenta = $_GET["var4"];

?>

<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Launcher</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body onload="lanzador()">
<p>Lanzando aplicación</p>
<script type="text/javascript" src="js/datastorage.js"></script>
<script type="text/javascript">
    var contexto = "<?php echo $context; ?>";
    var endpoint = "<?php echo $endpoint; ?>";
    var number = "<?php echo $number; ?>";
    var cuenta = "<?php echo $cuenta; ?>";
    var localData = localDataStorage('emailclick.data');
    localData.set('contexto_v', contexto);
    localData.set('endpoint_v', endpoint);
    localData.set('number', number);
    localData.set('cuenta', cuenta);


</script>
  <script>
   function lanzador() {
//     window.open ("https://devavaya.ddns.net/amvmail/launcher",
// "mywindow","menubar=0,resizable=0,width=400,height=350");

   }
//   setInterval(FetchData, 2000);
// window.close();
  </script>
</body>
</html>
