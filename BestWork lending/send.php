<?php
	$owner_email = "rugbyura@gmail.com"; // емейл на который отправляются письма
	$headers = "Content-type: text/html; charset=utf-8 \r\n";
	$subject = 'Сообщение с сайта ' . $_SERVER['SERVER_NAME'];
	$messageBody = "";

	if($_POST["whatForm"] != ''){
		$messageBody .= '<p><strong>Форма:</strong> ' . $_POST["whatForm"] . '</p>' . "\r\n";
	}

	if($_POST['name'] != ''){
		$name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
		$messageBody .= '<p><strong>Имя:</strong> ' . $name . '</p>' . "\r\n";
	}
	if($_POST['tel'] != ''){
		$tel = substr(htmlspecialchars(trim($_POST['tel'])), 0, 100);
		$messageBody .= '<p><strong>Номер телефона:</strong> ' . $tel . '</p>' . "\r\n";
	}
	if($_POST['email'] != ''){
		$email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
		$messageBody .= '<p><strong>Email:</strong> ' . $email . '</p>' . "\r\n";
	}
	if($_POST['mess'] != ''){
		$mess = substr(htmlspecialchars(trim($_POST['mess'])), 0, 100);
		$messageBody .= '<p><strong>Сообщение:</strong> ' . $mess . '</p>' . "\r\n";
	}
		if($_POST['rayon'] != ''){
		$rayon = substr(htmlspecialchars(trim($_POST['rayon'])), 0, 100);
		$messageBody .= '<p><strong>Район доставки:</strong> ' . $rayon . '</p>' . "\r\n";
	}
		if($_POST['kol'] != ''){
		$kol = substr(htmlspecialchars(trim($_POST['kol'])), 0, 100);
		$messageBody .= '<p><strong>Количество:</strong> ' . $kol . '</p>' . "\r\n";
	}

	try{
		if(!mail($owner_email, $subject, $messageBody, $headers)){
			throw new Exception('mail failed');
		} else {
			echo 'mail sent';
		}
	}catch(Exception $e){
		echo $e->getMessage() ."\n";
	}
?>


