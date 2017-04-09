php --version

PHP 5.6.30 (cli) (built: Feb  1 2017 01:41:45) 

Copyright (c) 1997-2016 The PHP Group

Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies



node --version

v7.8.0



php simple.php 

1000000 times adding 1 took in seconds: 0.040134191513062

1000000 times adding 0.01 took in seconds: 0.028538942337036

1000000 times concatenating 'a' took in seconds: 21.144623041153

1000000 times strpos '9'/144 took in seconds: 0.13121604919434



node simple.js

1000000 times adding 1 took in seconds: 0.012991820

1000000 times adding 0.01 took in seconds: 0.025979013

1000000 times concatenating 'a' took in seconds: 0.112394130

1000000 times indexOf '9'/144 took in seconds: 0.061781102




------------------------------

php --version

PHP 7.1.0-2+deb.sury.org~xenial+1 (cli) ( NTS )

Copyright (c) 1997-2016 The PHP Group

Zend Engine v3.1.0-dev, Copyright (c) 1998-2016 Zend Technologies

    with Zend OPcache v7.1.0-2+deb.sury.org~xenial+1, Copyright (c) 1999-2016, by Zend Technologies

    with blackfire v1.14.1~linux-x64-non_zts71, https://blackfire.io, by Blackfireio Inc.



node --version

v6.9.1



php simple.php 

1000000 times adding 1 took in seconds: 0.012104988098145

1000000 times adding 0.01 took in seconds: 0.012412071228027

1000000 times concatenating 'a' took in seconds: 24.795211076736

1000000 times strpos '9'/144 took in seconds: 0.040771961212158



node simple.js 

1000000 times adding 1 took in seconds: 0.015692344

1000000 times adding 0.01 took in seconds: 0.027708579

1000000 times concatenating 'a' took in seconds: 0.080701483

1000000 times indexOf '9'/144 took in seconds: 0.056827457



------------------------------------------------------------------------