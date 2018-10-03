<?php

$frm_name  = "Everest";
$recepient = "youmail@ya.ru";
$sitename  = "Коттеджи в Ярославле(редизайн от Студии Ризн)";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["number"]);

$message = "
Номер: $email <br>
Имя: $name
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
