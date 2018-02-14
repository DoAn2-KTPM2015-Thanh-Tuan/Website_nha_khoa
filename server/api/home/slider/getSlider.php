<?php 
require_once('../../inc/myconnect.php');

$query = "SELECT * FROM tb_slider";
$result = mysqli_query($dbc, $query);
$emp = array();
while($row = mysqli_fetch_assoc($result)){
    $emp[] = $row;
}
echo json_encode($emp);
?>