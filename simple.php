<?php
$tmp = '';
$t = 0;
$count = 1000000;
$start = microtime(true);
for($a = 0; $a < $count; ++$a){
  $t = $t + 1;
}
echo $count . " times adding 1 took in seconds: " . (microtime(true) - $start) . PHP_EOL;
$t = 0.1;
$start = microtime(true);
for($a = 0; $a < $count; ++$a){
  $t = $t + 0.01;
}
echo $count . " times adding 0.01 took in seconds: " . (microtime(true) - $start) . PHP_EOL;
$t = '';
$start = microtime(true);
for($a = 0; $a < $count; ++$a){
  $t = $t . 'a';
}
echo $count . " times concatenating 'a' took in seconds: " . (microtime(true) - $start) . PHP_EOL;
$t = '0123456780123456780123456780123456780123456780123456780123456780123456780123456780123456780123456780123456780123456780123456780123456780123456789';
$start = microtime(true);
for($a = 0; $a < $count; ++$a){
  $tmp = strpos($t, '9');
}
echo $count . " times strpos '9'/144 took in seconds: " . (microtime(true) - $start) . PHP_EOL;
