<?php
require('connection.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
// print_r($request);die();

$id = $request->id;
$name = $request->name;
$age = $request->age;
$gender = $request->gender;
$email = $request->email;
$phone = $request->phone;
$address = $request->address;
$notes = $request->note;

$sql = "UPDATE user SET name='$name',
                        age='$age',
                        gender='$gender',
                        email='$email',
                        phone='$phone',
                        address='$address',
                        notes='$notes'
                    WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();