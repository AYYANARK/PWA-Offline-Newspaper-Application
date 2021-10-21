<?php

   header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");
    header('Access-Control-Max-Age: 86400');
    header("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header("Access-Control-Allow-Headers: *");
	
	
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "news";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
	
		 $request=json_decode(file_get_contents("php://input"));
	// echo $postdata;
	if(count($request) > 0)
	{
	// $request=json_decode($postdata,true);
 	
	
	
	$desc=mysqli_real_escape_string($conn,$request[0]->description);
	

	$evidence=mysqli_real_escape_string($conn,$request[0]->evidence);
	 //$filename = $_FILES["evidence"]["name"]; 
    //$tempname = $_FILES["evidence"]["tmp_name"];     
        //$folder = "image/".$filename; 
		$filename="C:/Users/INR/Desktop/barricades.jpg";
	
	
	$sql="INSERT INTO userNews VALUES ('{$filename}','{$desc}')";
	
  
	 if ($conn->query($sql) === TRUE) {
		 //echo "1";
		 $result=1;
		  $json = json_encode($result);
    echo($json);
	    //echo "New record created successfully!";
		
	 } 
   else {
	    //echo "Error: " . $sql . "<br>" . $conn->error;
		//echo "0";
		 $result=0;
		 $json = json_encode($result);
    echo($json);
	
	}
	}  
	$conn->close();
?>