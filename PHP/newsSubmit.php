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
 	/* print"<pre/>";
	print_r($_FILES);
	echo $f=$_FILES['evidence']['name']; */
	$head=mysqli_real_escape_string($conn,$request[0]->heading);
	$subHead=mysqli_real_escape_string($conn,$request[0]->subHeading);
	$desc=mysqli_real_escape_string($conn,$request[0]->description);
	$place=mysqli_real_escape_string($conn,$request[0]->place);
	$date=mysqli_real_escape_string($conn,$request[0]->newsDate);
    $category=mysqli_real_escape_string($conn,$request[0]->category);
	$target_dir="uploads/";
	$target_file=$target_dir.basename($_FILES["evidence"]["name"]);
	move_uploaded_file($_FILES["evidence"]["tmp_name"],$target_file);
// $filename =addslashes (file_get_contents($_FILES['evidence']['tmp_name']));
	//$evidence=mysqli_real_escape_string($conn,$request[0]->evidence);
	//echo $evidence;
	
		$filename="C:/Users/INR/Desktop/barricades.jpg";
	
	
	$sql="INSERT INTO newstable VALUES ('{$head}','{$subHead}','{$category}','{$desc}','{$place}','{$date}','{$filename}')";
	
  
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