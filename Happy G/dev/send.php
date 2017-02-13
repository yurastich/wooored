<?php
//$mails = array('melomantik@gmail.com');
$mails = array('rugbyura@mail.ru');
define('MAIL_SUBJECT', 'Новая заявка с сайта');

$headers = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/plain; charset=utf-8";
$headers[] = "X-Mailer: PHP/".phpversion();

(isset($_POST['referer'])) ? $referer = 'referer: ' . htmlspecialchars($_POST['referer']) . "\n": $referer = '';
(isset($_POST['phrase'])) ? $phrase = 'pharse: ' . htmlspecialchars($_POST['phrase']) . "\n": $phrase = '';

(isset($_POST['name'])) ? $name = 'Имя заказчика: ' . htmlspecialchars($_POST['name']) . "\n": $name = '';
(isset($_POST['phone'])) ? $phone = 'Телефон заказчика: ' . htmlspecialchars($_POST['phone']) . "\n": $phone = '';
(isset($_POST['email'])) ? $email = 'E-mail заказчика: ' . htmlspecialchars($_POST['email']) . "\n": $email = '';
(isset($_POST['product'])) ? $product = 'Товар: ' . htmlspecialchars($_POST['product']) . "\n": $product = '';
(isset($_POST['from'])) ? $from = 'Форма: ' . htmlspecialchars($_POST['from']) . "\n": $from = '';

$result = true;

foreach ($mails as $val) {
    if (!mail($val, MAIL_SUBJECT, $name . $phone . $email . $product . $from, implode("\r\n", $headers))) {
        $result = false;
        break;
    }
}

if ($result) {
    if(isset($_POST['catalog'])){
        header('Location: thank-catalog.html');
    }else{
        header('Location: thank.html');
    }
    exit;
}
?>