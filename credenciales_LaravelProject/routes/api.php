<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AsignacionController;
use App\Http\Controllers\EmpleadoController;
use App\Http\Controllers\SectorController;
use App\Http\Controllers\DocenteController;
use App\Http\Controllers\PabellonController;
use App\Http\Controllers\AulaController;
use App\Http\Controllers\TurnoController;
use App\Http\Controllers\PagoController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\RegistroController;
use App\Http\Controllers\AsistenciaController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*
* === Dashboard ===
*/
Route::get('/dashboard/get_personal', [DashboardController::class, 'countEmployeesByType']);
Route::get('/dashboard/get_forecast', [DashboardController::class, 'getForeCast']);

/*
* === Asignaciones ===
*/
Route::get('/asignaciones', [AsignacionController::class, 'index']);
Route::get('/asignaciones/{id}', [AsignacionController::class, 'show']);
Route::post('/asignaciones', [AsignacionController::class, 'store']);
Route::put('/asignaciones/{id}', [AsignacionController::class, 'update']);
Route::delete('/asignaciones/{id}', [AsignacionController::class, 'destroy']);
/*
* === Empleados ===
*/
Route::get('/empleados', [EmpleadoController::class, 'index']);
Route::get('/empleados/{id}', [EmpleadoController::class, 'show']);
Route::post('/empleados', [EmpleadoController::class, 'store']);
Route::put('/empleados/{id}', [EmpleadoController::class, 'update']);
Route::delete('/empleados/{id}', [EmpleadoController::class, 'destroy']);

/*
* === Sectores ===
*/
Route::get('/sectores', [SectorController::class, 'index']);
Route::get('/sectores/{id}', [SectorController::class, 'show']);
Route::post('/sectores', [SectorController::class, 'store']);
Route::put('/sectores/{id}', [SectorController::class, 'update']);
Route::delete('/sectores/{id}', [SectorController::class, 'destroy']);

/*
* === Docentes ===
*/
Route::get('/docentes', [DocenteController::class, 'index']);
Route::get('/docentes/{id}', [DocenteController::class, 'show']);
Route::post('/docentes', [DocenteController::class, 'store']);
Route::put('/docentes/{id}', [DocenteController::class, 'update']);
Route::delete('/docentes/{id}', [DocenteController::class, 'destroy']);

/*
* === Pabellones ===
*/
Route::get('/pabellones', [PabellonController::class, 'index']);
Route::get('/pabellones/{id}', [PabellonController::class, 'show']);
Route::post('/pabellones', [PabellonController::class, 'store']);
Route::put('/pabellones/{id}', [PabellonController::class, 'update']);
Route::delete('/pabellones/{id}', [PabellonController::class, 'destroy']);

/*
* === Aulas ===
*/
Route::get('/aulas', [AulaController::class, 'index']);
Route::get('/aulas/{id}', [AulaController::class, 'show']);
Route::post('/aulas', [AulaController::class, 'store']);
Route::put('/aulas/{id}', [AulaController::class, 'update']);
Route::delete('/aulas/{id}', [AulaController::class, 'destroy']);

/*
* === Turnos ===
*/
Route::get('/turnos', [TurnoController::class, 'index']);
Route::get('/turnos/{id}', [TurnoController::class, 'show']);
Route::post('/turnos', [TurnoController::class, 'store']);
Route::put('/turnos/{id}', [TurnoController::class, 'update']);
Route::delete('/turnos/{id}', [TurnoController::class, 'destroy']);

/*
* === Pagos ===
*/
Route::get('/pagos', [PagoController::class, 'index']);
Route::get('/pagos/{id}', [PagoController::class, 'show']);
Route::post('/pagos', [PagoController::class, 'store']);
Route::put('/pagos/{id}', [PagoController::class, 'update']);
Route::delete('/pagos/{id}', [PagoController::class, 'destroy']);

/*
* === Buscador Component ===
*/
Route::get('/buscar', [RegistroController::class, 'buscar']);
Route::get('/ordenar', [RegistroController::class, 'orderBy']);

/*
* === Asistencias ===
*/
Route::get('/asistencias', [AsistenciaController::class, 'index']);