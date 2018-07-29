<?php
//  echo "index.php loaded";
$myemail="gijoe50000@gmail.com";
$msg = "";


 foreach ($_POST as $key => $value) {
   
    $msg .= $key . " = " . $value . "\r\n";
    //  echo "<br><br>  $key = $value   <br><br>";
 }




// echo "message end= $msg\n";
//  $sendform=
//  mail($myemail, "subject is blank", $msg);

// echo $myemail;

if( mail($myemail, "subject is blank", $msg) ) {
    echo "Mail Sent";
} else {
    echo "There was an error";
}
?>
