<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index'); //Changing from welcome to index
});

