<?php

use Illuminate\Support\Facades\Route;

// React SPA — Crystal Desarrollo
Route::get('/', fn () => view('crystal'))->name('home');
Route::get('/desarrollo', fn () => view('crystal'))->name('desarrollo');
Route::get('/productos', fn () => view('crystal'))->name('productos');
Route::get('/soporte', fn () => view('crystal'))->name('soporte');

// Fallback for unknown SPA paths — let React Router handle 404s.
// Exclude static-asset extensions so missing files return a real 404
// instead of HTML 200 (which would break scrapers, link checkers and SEO).
Route::get('{any}', fn () => view('crystal'))
    ->where('any', '^(?!api|.*\.(?:png|jpe?g|gif|svg|ico|css|js|webp|woff2?|ttf|json|xml|txt|map)$).*$')
    ->name('spa.fallback');
