<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;

Route::get('/', function () {
    return Redirect::away('http://localhost:3000');
});
