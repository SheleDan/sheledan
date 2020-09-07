<?php
$user_name = $_POST['user_name'];
$user_mail = $_POST['user_mail'];
$user_phone = $_POST['user_phone'];

$message = "$user_name \n  $user_mail \n  $user_phone";

$subject = "Новая заявка ";
$headers = "Content-type: text/plain; charset = utf-8\r\n From: $user_mail";

$success = mail("daniilselepov1141@gmail.com", $subject, $message ,$headers);
?>