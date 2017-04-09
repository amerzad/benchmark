function logHR($hrtime){
  return $hrtime[0] + '.' + ("000000000" + $hrtime[1]).slice(-9);
}
$tmp = '';
$t = 0;
$count = 1000000;
$start = new Date().getTime();
$hrtime = process.hrtime();
for($a = 0; $a < $count; ++$a){
  $t = $t + 1;
}
$hrtime = process.hrtime($hrtime);
console.log($count + " times adding 1 took in seconds: " + logHR($hrtime));
$t = 0.1;
$start = new Date().getTime();
$hrtime = process.hrtime();
for($a = 0; $a < $count; ++$a){
  $t = $t + 0.01;
}
$hrtime = process.hrtime($hrtime);
console.log($count + " times adding 0.01 took in seconds: " + logHR($hrtime));
$t = '';
$start = new Date().getTime();
$hrtime = process.hrtime();
for($a = 0; $a < $count; ++$a){
  $t = $t + 'a';
}
$hrtime = process.hrtime($hrtime);
console.log($count + " times concatenating 'a' took in seconds: " + logHR($hrtime));
$t = '0123456780123456780123456780123456780123456780123456780123456780123456780123456780123456780123456780123456780123456780123456780123456780123456789';
$start = new Date().getTime();
$hrtime = process.hrtime();
for($a = 0; $a < $count; ++$a){
  $tmp = $t.indexOf('9');
}
$hrtime = process.hrtime($hrtime);
console.log($count + " times indexOf '9'/144 took in seconds: "  + logHR($hrtime));
