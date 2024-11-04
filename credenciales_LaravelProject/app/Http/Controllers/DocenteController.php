<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Docente;

class DocenteController extends Controller
{
    public function index()
    {
        $docentes = Docente::all();
        return response()->json([
            'success' => true,
            'data' => $docentes,
            'message' => 'Docentes obtenidos exitosamente'
        ], 200);
    }

    // Muestra un docente específico
    public function show($id)
    {
        $docente = Docente::find($id);

        if ($docente) {
            return response()->json([
                'success' => true,
                'data' => $docente,
                'message' => 'Docente encontrado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Docente no encontrado'
            ], 404); // Código 404: Not Found
        }
    }

    // Almacena un nuevo docente
    public function store(Request $request)
    {
        try {
            $docente = Docente::create($request->all());

            return response()->json([
                'success' => true,
                'data' => $docente,
                'message' => 'Docente creado exitosamente'
            ], 201); // Código 201: Created
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear docente'
            ], 500);
        }
    }

    // Actualiza un docente existente
    public function update(Request $request, $id)
    {
        $docente = Docente::find($id);

        if ($docente) {
            $docente->update($request->all());
            return response()->json([
                'success' => true,
                'data' => $docente,
                'message' => 'Docente actualizado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Docente no encontrado'
            ], 404);
        }
    }

    // Elimina un docente
    public function destroy($id)
    {
        $docente = Docente::find($id);

        if ($docente) {
            $docente->delete();
            return response()->json([
                'success' => true,
                'message' => 'Docente eliminado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Docente no encontrado'
            ], 404);
        }
    }
}
