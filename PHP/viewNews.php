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
$news =[];
$sql = "SELECT * from newstable";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	$cr=0;
    // output data of each row
//echo "<table border='1'>";
    while($row = $result->fetch_assoc()) {
       $news[$cr]['heading']=$row['headline'];
	  $news[$cr]['subheading']=$row['subheading'];
	   $news[$cr]['category']=$row['category'];
	    $news[$cr]['description']=$row['description'];
		$news[$cr]['place']=$row['place'];	
		$news[$cr]['date']=$row['date'];
		//$a=$row['evidence'];
		//$news[$cr]['evidence']=base64_decode($a);
		$news[$cr]['evidence'] = $row['evidence'];
		//$base64 = base64_encode($news[$cr]['evidence']);
		//$news[$cr]['evidence']= json_encode(array($base64));
		$cr++;
   
    }
	  $json = json_encode($news);
    echo($json);
} else {
    echo "0 results";
}
$conn->close();
?>