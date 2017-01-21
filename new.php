<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 17-1-12
 * Time: 下午9:20
 */

if(isset($_POST['name'])){
    echo "hello:".$_POST['name'] ;
}else{
    echo "Args Error";
}