<?php
require('connection.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
// print_r($request);die();

$name = $request->name;
$age = $request->age;
$gender = $request->gender;
$email = $request->email;
$phone = $request->phone;
$address = $request->address;
$notes = $request->note;

$sql = "INSERT INTO  user (name, age, gender, email, phone, address, notes) 
        VALUES ('$name', '$age', '$gender', '$email', '$phone', '$address', '$notes')";

if ($conn->query($sql) === TRUE) {
    echo mysqli_insert_id($conn);
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();