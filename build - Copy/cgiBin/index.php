<?php
//  echo "index.php loaded";
$myemail="gijoe50000@gmail.com";
$msg = "";

echo "Startt: ";
 foreach($_POST as $key=>$value) {
    echo "inside: ";
    // $msg .= $key . " = " . $value . "\r\n";
    //   echo "Keyvalue:<br><br>  $key = $value   <br><br>";
 }




// echo "message end= $msg\n";
//  $sendform=
//  mail($myemail, "subject is blank", $msg);

// echo $myemail;

if( mail($myemail, "Solaqua customer order", $msg) ) {
    echo "Mail Sent: ";
    echo "message=" . $msg;

} else {
    echo "There was an error";
}
?>
