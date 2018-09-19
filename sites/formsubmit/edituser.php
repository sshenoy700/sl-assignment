<?php
require('connection.php');

if(!isset($_GET['id'])) {
    die("No get value found");
}

$id = $_GET['id'];

$sql = "SELECT * FROM user WHERE id=$id";
$result = $conn->query($sql) or die($conn->error);

// print_r($result);

while($row = $result->fetch_assoc()) {
    $rows[] = $row;
}

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
} else {
    $rows = [];
}

print json_encode($rows);

$conn->close();