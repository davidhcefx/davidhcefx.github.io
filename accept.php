<?php
    if (isset($_GET['data'])) {
        file_put_contents("data.txt", $_GET['data'] . "\n", FILE_APPEND | LOCK_EX);
    }
    echo file_get_contents("data.txt");
?>