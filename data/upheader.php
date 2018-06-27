<?php
	require("conn.php");
	@$uheader=$_REQUEST["uheader"];
	@$id=$_REQUEST["id"];
	$result = mysqli_query($conn,"update elelogin set uheader = '$uheader' where id = '$id'");
	if($result){
	    echo '{"code":1}';
	}else{
	    echo '{"code":0}';
	}
?>