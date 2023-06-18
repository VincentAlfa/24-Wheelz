<?php
include 'connection.php';

$name = $_POST["Nama_Lengkap"];
$number = $_POST["No_Telepon"];
$alamat = $_POST["Alamat"];

echo "Nama Anda: $name<br>";
echo "Nomor Anda: $number<br>";
echo "Alamat Pengantaran: $alamat<br>";

$sql = "INSERT INTO `form-order` (Nama_Lengkap, No_Telepon, Alamat) VALUES ('$name','$number','$alamat')";

if (mysqli_query($connection, $sql)) {
  echo "Data inserted successfully!";
} else {
  echo "Error: " . mysqli_error($connection);
}

?>
