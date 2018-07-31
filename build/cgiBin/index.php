<?php
//  echo "index.php loaded";
$myemail="gijoe50000@gmail.com";
$msg = "";

echo "Solaqua Order:<br><br>";
 foreach($_POST as $key=>$value) {
   
    $msg .= $key . " = " . $value . "\r\n";
      echo "Keyvalue:<br><br>".  $key ."=". $value ."  <br><br>";
 }

echo "message end= $msg\n<br>";

if( mail($myemail, "Solaqua customer order", $msg) ) {
    echo "Mail Sent: ";
    echo "message=" . $msg;

} else {
    echo "There was an error";
}
?>
