<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Asignacion;

class AsignacionController extends Controller
{
    public function index()
    {
        $asignaciones = Asignacion::all();
        return response()->json([
            'success' => true,
            'data' => $asignaciones,
            'message' => 'Asignaciones obtenidas exitosamente'
        ], 200);
    }

    // Almacena una nueva asignación
    public function store(Request $request)
    {
        try {
            $asignacion = Asignacion::create($request->all());

            return response()->json([
                'success' => true,
                'data' => $asignacion,
                'message' => 'Asignación creada exitosamente'
            ], 201); // Código 201: Created
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear la asignación'
            ], 500);
        }
    }

    // Muestra una asignación específica
    public function show($id)
    {
        $asignacion = Asignacion::find($id);

        if ($asignacion) {
            return response()->json([
                'success' => true,
                'data' => $asignacion,
                'message' => 'Asignación encontrada'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Asignación no encontrada'
            ], 404); // Código 404: Not Found
        }
    }
}
