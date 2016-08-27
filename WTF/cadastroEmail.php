<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap</title>

    <!-- Bootstrap -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="bootstrap/css/bootstrap-theme.min.css" rel="stylesheet">
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="estilo.css" rel="stylesheet">

   <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700' rel='stylesheet' type='text/css'>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script>window.jquery || document.write('<script src="js/jquery-1.7.1.min.js"><\/script>')</script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body class="b1">
     <script type="text/javascript" src="js_wtf/animacoes.js"></script>
    <div class="row">
        <div class=" container-fluid">
            <div id="panel">
              
              <img src="imagens/bg-wtf.png" alt="" class="backgroundpos img-responsive"></img>
              <img src="imagens/fominha.png" alt="" class="fominha fominha1 img-responsive"></img>
              <img src="imagens/fominha.png" alt="" class="fominha fominha2 img-responsive"></img>
              <img src="imagens/fominha.png" alt="" class="fominha fominha3 img-responsive"></img>
              <img src="imagens/fome.png" alt="" class="fome fomepos img-responsive"></img>
              <img src="imagens/click.png" alt="" class="click clickpos img-responsive"></img>
              <img src="imagens/mouse.png" alt="" class="mouse mousepos img-responsive"></img>
              <img  src="imagens/logo.png" alt="" class="logo logopos img-responsive"></img>
              <img src="imagens/moto.png" alt="" class="moto motopos img-responsive"></img>
              <img src="imagens/bonecofinal.png" alt="" class="bonecofinal bonecofinalpos img-responsive"></img>
              <img src="imagens/burrito.png" alt="" class="burrito burritopos img-responsive"></img>
              <img src="imagens/pizza.png" alt="" class="pizza pizzapos img-responsive"></img>
              <img src="imagens/docinho.png" alt="" class="docinho docinhopos img-responsive"></img>
              <img src="imagens/sanduba.png" alt="" class="sanduba sandubapos img-responsive"></img>
              <img src="imagens/suco.png" alt="" class="suco sucopos img-responsive"></img>
              <img src="imagens/prato.png" alt="" class="prato pratopos img-responsive"></img>
              <img src="imagens/bibi.png" alt="" class="bibi bibipos img-responsive"></img>
              <div class="lampada lampadinha"></div>
              <img src="imagens/bonecoideia.png" alt="" class="bonecoideia ideia img-responsive"></img>
              <img src="imagens/bonecocomfome.png" alt="" class="bonecofome bonecofomepos img-responsive"></img>

            </div><!--panel-->
          </div>

          <nav class="row ">
            <div class="navbar navbar-inverse navbar-fixed-top indexbarra">
              <div class="container">
                <div class="navbar-header">

                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#barra">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>

                  <a class="brand " href="#"><img class=" logobrandim" src="imagens/logo.png" alt=""></img></a>
                </div>
                <div id="barra" class="collapse navbar-collapse">
                  <ul  class="nav navbar-nav navbar-right topolinks">
                    <li class="btn  btn-xs"><a href="homewtf.html">Home <i class=" "></i></a></li>
                    <li></li>
                    <li class="btn btn-xs "><a href="destaques.html">Promoções <i class=" "></i></a></li>
                     <!--<li class="btn btn-xs"><a href="parceiros.html">Parceiros <i class=" "></i></a></li>-->
                    <li class="btn btn-xs"><a href="quemSomos.html">Quem Somos <i class=" "></i></a></li>
                    <li class="btn btn-xs"><a href="contatos.html">Contato <i class=" "></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>  
        </div>
         <div class="row toposite">
        
    <div class="container ">
        <div class="col-xs-12  centro  page-header  ">
          <h1>Promoçoes por e-mail</h1>
        </div>
        
        <div class="col-xs-12 centro   ">
           <?php 

                $checkprom = $_POST['check_prom'];
                $nomeprom = $_POST['nomeprom'];
                $emailprom = $_POST['emailprom'];

               // echo"<br />";
                

              //if($checkprom == true && $nomeprom==true && $emailprom==true )
                   
                    echo" <h1> Parabens $nomeprom".", </h1>"."<h4>vc receberá nossos e-mail no seu $emailprom</h4>"."<a href='homewtf.html'>continuar navegando</a>";
                //else if($checkprom == true && $nomeprom==true || $emailprom==true)
                  

              // echo" <h1> falta campo</h1>"."<a href='homewtf.html'>continuar navegando</a>";
               // else
                //    echo' <script> alert("teste") </script>';
                    
                    //echo" <h1> obrigado pela visita</h1>"."<a href='homewtf.html'>continuar navegando</a>";
            ?>
                
        </div>
        

        </div>

    </div> 


        
    <div class="row">
        <div class="col-xs-12 centro tamanho">
          <footer class="footer">
            <div class="container ">
                <p class="pull-right"><a href="#">Voltar ao topo</a></p>
                <p>
                <a href="" target="_blank"></a>  
                <a href="3" target="_blank"></a>
                </p>

                <p>Este site esta em construção<a href="#"></a>.</p>
                <p><a href="" target="_blank">
              <ul class="nav navbar-nav">
                <li><a href="#">Facebook</a></li>
                <li class="muted">&middot;</li>
                <li><a href="#">problemas</a></li>
                <li class="muted">&middot;</li>
                <li><a href="#">Nossa Comunicação Produções</a></li>
              </ul>
            </div>
           </footer>
        </div>
        
       
      </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>






























