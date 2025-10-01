<?php

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;
use LaravelLang\Routes\Facades\LocalizationRoute;

$projects = [
    [
        'slug' => 'jujuy-models',
        'title' => 'Jujuy Models',
        'class' => 'bg-gradient-to-br from-violet-500 to-violet-700 text-white',
        'src' => asset('assets/projects/jujuymodels.png'),
    ],
    [
        'slug' => 'edep',
        'title' => 'EDEP',
        'class' => 'bg-gradient-to-br from-blue-700 to-blue-900 text-white',
        'src' => asset('assets/projects/jujuymodels.png'),
    ],
    [
        'slug' => 'proveedores-mineros',
        'title' => 'Proveedores Mineros',
        'class' => 'bg-gradient-to-br from-purple-700 to-purple-900 text-white',
        'src' => asset('assets/projects/jujuymodels.png'),
    ],
    [
        'slug' => 'cintas-calzados',
        'title' => 'Cintas Calzados',
        'class' => 'bg-gradient-to-br from-blue-500 to-blue-700 text-white',
        'src' => asset('assets/projects/cintas.png'),
    ],
    [
        'slug' => 'expojuy',
        'title' => 'ExpoJuy',
        'class' => 'bg-gradient-to-br from-pink-500 to-pink-700 text-white',
        'src' => asset('assets/projects/jujuymodels.png'),
    ]
];


LocalizationRoute::group(function () use ($projects) {
    Route::view('', 'home', ['projects' => Arr::take($projects, 4)])->name('home');
    Route::view('projects', 'projects', ['projects' => $projects])->name('projects.index');
    Route::get('projects/{project}', function ($projectSlug) use ($projects) {
        $project = collect($projects)->firstWhere('slug', $projectSlug);

        if (!$project) {
            abort(404);
        }

        return view('project', ['project' => $project, 'projects' => $projects]);
    })->name('projects.show');

    Route::group(['prefix' => 'services'], function () {
        Route::view('software-factory', 'services.software-factory')->name('services.software-factory');
        Route::view('branding', 'services.branding')->name('services.branding');
        Route::view('infrastructure', 'services.infrastructure')->name('services.infrastructure');
        Route::view('saas', 'services.saas')->name('services.saas');
    });
});