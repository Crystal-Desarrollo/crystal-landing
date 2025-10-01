<?php

use Illuminate\Support\Facades\Route;
use LaravelLang\Routes\Facades\LocalizationRoute;

LocalizationRoute::group(function () {
    Route::view('', 'home')->name('home');
    Route::view('projects', 'projects')->name('projects.index');
    Route::view('projects/{project}', 'project')->name('projects.show');

    Route::group(['prefix' => 'services'], function () {
        Route::view('software-factory', 'services.software-factory')->name('services.software-factory');
        Route::view('branding', 'services.branding')->name('services.branding');
        Route::view('infrastructure', 'services.infrastructure')->name('services.infrastructure');
        Route::view('saas', 'services.saas')->name('services.saas');
    });
});