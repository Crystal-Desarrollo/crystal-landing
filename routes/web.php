<?php

use Illuminate\Support\Facades\Route;
use LaravelLang\Routes\Facades\LocalizationRoute;

LocalizationRoute::group(function (){
    Route::view('', 'home')->name('home');
});