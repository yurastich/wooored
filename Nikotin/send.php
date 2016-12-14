<?

$mailcontent ='';
if (isset($_POST['check']))
    foreach($_POST['check'] as $key=>$value)
        $mailcontent .= $value.'<BR>';

if ((isset($_POST['name']) && $_POST['name'] != "") && (isset($_POST['num']) && ($_POST['num'] != ""))) { //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'rugbyura@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Откуда: ' . $_POST['when'] . '</p>  
                        <p>Имя: ' . $_POST['name'] . '</p> 
                        <p>Телефон:' . $_POST['num'] .'</p>
                        <p>' . $_POST['check'] .'</p> 
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Nicotin <rugbyura@gmail.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
    }



?>
