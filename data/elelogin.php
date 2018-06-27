<?php
	require('conn.php');
	@$uname=$_REQUEST["uname"];
	@$upwd=$_REQUEST["upwd"];
	$sql="select * from elelogin where uname='$uname' AND upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	if(count($row)>0){
		echo '{"code":1,"msg":"登录成功！","data":'.json_encode($row).'}';
	}else{
	    echo '{"code":-1,"msg":"登录失败"}';
	}
?>
