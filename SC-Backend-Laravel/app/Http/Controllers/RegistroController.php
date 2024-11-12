<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;

class RegistroController extends Controller //Este controlador se encarga de buscar y ordenar registros en la interfaz de Angular y la base de datos
{
    public function buscar(Request $request)
    {
        $modelo = $request->input('modelo'); // Por ejemplo, 'empleado'
        $campo = $request->input('campo');   // Por ejemplo, 'nombre'
        $query = $request->input('query');   // Por ejemplo, 'Juan'

        // Convierte el nombre del modelo a formato 'Empleado'
        $modeloClass = 'App\\Models\\' . Str::studly($modelo);

        // Verifica si el modelo existe
        if (!class_exists($modeloClass)) {
            return response()->json(['error' => 'Modelo no encontrado'], 404);
        }

        // Verifica si el campo existe en la tabla
        if (!Schema::hasColumn((new $modeloClass)->getTable(), $campo)) {
            return response()->json(['error' => 'Campo no encontrado en el modelo'], 404);
        }

        // Realiza la búsqueda
        $resultados = $modeloClass::where($campo, 'LIKE', "%{$query}%")->get();
        return response()->json($resultados);
    }
    
    public function orderBy(Request $request){
        $modelo = $request->input('modelo');
        $ordenarPor = $request->input('ordenarPor', 'nombre'); // Campo de ordenación, por defecto 'nombre'
        $orden = $request->input('orden', 'asc'); // Orden (asc o desc), por defecto ascendente

        // Convierte el nombre del modelo a formato 'Empleado'
        $modeloClass = 'App\\Models\\' . Str::studly($modelo);

        // Verifica si el modelo existe
        if (!class_exists($modeloClass)) {
            return response()->json(['error' => 'Modelo no encontrado'], 404);
        }

        // Verifica si el campo de ordenación existe en la tabla
        if (!Schema::hasColumn((new $modeloClass)->getTable(), $ordenarPor)) {
            return response()->json(['error' => 'Campo de ordenación no encontrado en el modelo'], 404);
        }

        // Realiza la ordenación
        $resultados = $modeloClass::orderBy($ordenarPor, $orden)->get();

        return response()->json($resultados);  // Por ejemplo, 'nombre'
    }
}
