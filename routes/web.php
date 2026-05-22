<?php

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;
use LaravelLang\Routes\Facades\LocalizationRoute;

// Crystal Desarrollo — React SPA (catch-all at end of file)

$projects = [
    [
        'slug' => 'jujuy-models',
        'title' => 'Jujuy Models',
        'class' => 'bg-gradient-to-br from-[#ba59b6]/80 to-[#ba59b6] text-white',
        'src' => asset('assets/projects/jujuymodels-cover.png'),
        'routeName' => 'projects.jujuymodels',
    ],
    [
        'slug' => 'empleo-parques-industriales',
        'title' => 'Empleo Parques Industriales',
        'class' => 'bg-gradient-to-br from-[#5e264d]/80 to-[#5e264d] text-white',
        'src' => asset('assets/projects/empleopi-cover.png'),
        'routeName' => 'projects.empleopi',
    ],
    [
        'slug' => 'edep',
        'title' => 'Escuela de Desarrollo Económico',
        'class' => 'bg-gradient-to-br from-[#13304d]/80 to-[#13304d] text-white',
        'src' => asset('assets/projects/edep-cover.png'),
        'routeName' => 'projects.edep',
    ],
    [
        'slug' => 'las-marias',
        'title' => 'Las Marías Planificación Urbana',
        'class' => 'bg-gradient-to-br from-[#0c3533]/80 to-[#0c3533] text-white',
        'src' => asset('assets/projects/lasmarias-cover.png'),
        'routeName' => 'projects.lasmarias',
    ],
//    [
//        'slug' => 'proveedores-mineros',
//        'title' => 'Proveedores Mineros',
//        'class' => 'bg-gradient-to-br from-purple-700 to-purple-900 text-white',
//        'src' => asset('assets/projects/registrominero-cover.png'),
//    ],
//    [
//        'slug' => 'cintas-calzados',
//        'title' => 'Cintas Calzados',
//        'class' => 'bg-gradient-to-br from-blue-500 to-blue-700 text-white',
//        'src' => asset('assets/projects/cintas-cover.png'),
//    ],
//    [
//        'slug' => 'expojuy',
//        'title' => 'ExpoJuy',
//        'class' => 'bg-gradient-to-br from-pink-500 to-pink-700 text-white',
//        'src' => asset('assets/projects/expojuy-cover.png'),
//    ]
];


// React SPA — Crystal Desarrollo new site
Route::get('/', fn() => view('crystal'))->name('home');
Route::get('/desarrollo', fn() => view('crystal'))->name('desarrollo');
Route::get('/productos', fn() => view('crystal'))->name('productos');
Route::get('/soporte', fn() => view('crystal'))->name('soporte');

LocalizationRoute::group(function () use ($projects) {
    // Legacy routes kept for reference
    Route::view('legacy', 'home', ['projects' => Arr::take($projects, 4)])->name('home.legacy');

    Route::view('projects', 'projects', ['projects' => $projects])->name('projects.index');
    Route::view('projects/jujuy-models', 'projects.jujuy-models')->name('projects.jujuymodels');
    Route::view('projects/edep', 'projects.edep')->name('projects.edep');
    Route::view('projects/empleo-parques-industriales', 'projects.empleopi')->name('projects.empleopi');
    Route::view('projects/las-marias', 'projects.las-marias')->name('projects.lasmarias');

    Route::group(['prefix' => 'services'], function () {
        Route::view('software-factory', 'services.software-factory')->name('services.software-factory');
        Route::view('branding', 'services.branding')->name('services.branding');
        Route::view('infrastructure', 'services.infrastructure')->name('services.infrastructure');
        Route::view('saas', 'services.saas')->name('services.saas');
    });
});