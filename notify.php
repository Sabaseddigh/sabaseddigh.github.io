<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $to = 'sabaseddigh123@gmail.com';
  $subject = 'IP Notification';
  $ipAddress = $_POST['ip_address'];
  $message = 'IP Address: ' . $ipAddress;
  $headers = 'From: sabaseddigh123@gmail.com' . "\r\n" .
             'Reply-To: sabaseddigh123@gmail.com' . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  $result = mail($to, $subject, $message, $headers);

  if ($result) {
    echo 'Email sent successfully.';
  } else {
    echo 'Error sending email.';
  }
}
?>