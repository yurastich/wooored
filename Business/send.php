<?
if ((isset($_POST['name']) && $_POST['name'] != "") && (isset($_POST['email']) && $_POST['email'] != "")) { //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'rugbyura@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Квартиры'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Имя: ' . $_POST['name'] . '</p>
                        <p>Почта: ' . $_POST['email'] . '</p>  
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Woored <rugbyura@gmail.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}



?>
