﻿<?php 
//ket noi CSDL
	$dbc=mysqli_connect('localhost','root','','website_dentistry');
  // $dbc=mysqli_connect('sql100.byethost7.com','b7_20639784','123456789','b7_20639784_shop_fashion_man');
//$dbc=mysqli_connect('localhost','root','','web_man_fashion');
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
if (!$dbc)
{
echo "Kết nối không thành công";
}
else{
mysqli_set_charset($dbc, 'UTF8');
}
?>