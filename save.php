<?php
$number = (int) file_get_contents("number.txt");

$number++;

// Save the updated number
file_put_contents("number.txt", $number);

echo $number;
?>
