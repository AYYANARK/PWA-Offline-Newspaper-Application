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

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
 $input=json_decode(file_get_contents("php://input"));
 
 
   $uname=mysqli_real_escape_string($conn,$input[0]->uname);

	$pwd=mysqli_real_escape_string($conn,$input[0]->pword);
	$sql="SELECT * FROM users WHERE username='$uname' and password='$pwd'";
	$a=$conn->query($sql);
	
	if($a->num_rows>0)
	{
	$a1 = $a->fetch_assoc();
	
	if($a1["Username"]==$uname && $a1["Password"]==$pwd)
	{
		
	  $result=1;
		  $json = json_encode($result);
    echo($json);

		
	}
	}


	else
	{
	    
	  $result=0;
		  $json = json_encode($result);
    echo($json);
	}
	//echo(json_encode($));
	

?>