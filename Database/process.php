<?php
include 'connection.php';

$name = $_POST["Nama_Lengkap"];
$number = $_POST["No_Telepon"];
$alamat = $_POST["Alamat"];
$mobild = $_POST["mobild"];
$mobils = $_POST["mobils"];
$motor = $_POST["motor"];
$tipe = $_POST["tipe"];
$direktori = "../fileupload/";
$pilihan = "";

if ($tipe == "motor") {
  $pilihan = $motor;
}
elseif ($tipe == "mobil self drive") {
  $pilihan = $mobild;
}
elseif ($tipe == "mobil include driver") {
  $pilihan = $mobild;
}

// File ktp
$filektpTemp = $_FILES['ktp']['tmp_name'];
$filektpName = $_FILES['ktp']['name'];

// file jaminan2
$filejaminan2Temp = $_FILES['jaminan2']['tmp_name'];
$filejaminan2Name = $_FILES['jaminan2']['name'];

// file jaminan3
$filejaminan3Temp = $_FILES['jaminan3']['tmp_name'];
$filejaminan3Name = $_FILES['jaminan3']['name'];

move_uploaded_file($filektpTemp,$direktori.$filektpName);
move_uploaded_file($filejaminan2Temp,$direktori.$filejaminan2Name);
move_uploaded_file($filejaminan2Temp,$direktori.$filejaminan3Name);


echo "Nama Anda: $name<br>";
echo "Nomor Anda: $number<br>";
echo "Alamat Pengantaran: $alamat<br>";

$sql = "INSERT INTO `form-order` (Nama_Lengkap, No_Telepon, Alamat, jenis_kendaraan) VALUES ('$name','$number','$alamat','$pilihan')";

if (mysqli_query($connection, $sql)) {
  echo "Data inserted successfully!";
  echo '<script>alert("Upload successful!"); window.location.href="../orderform.html";</script>';
} else {
  echo "Error: " . mysqli_error($connection);
}
?>
