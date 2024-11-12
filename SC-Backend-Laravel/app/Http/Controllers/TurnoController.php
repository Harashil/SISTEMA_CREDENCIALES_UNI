<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Turno;

class TurnoController extends Controller
{
    public function index()
    {
        $turnos = Turno::all();
        return response()->json([
            'success' => true,
            'data' => $turnos,
            'message' => 'Turnos obtenidos exitosamente'
        ], 200);
    }

    // Muestra un turno específico
    public function show($id)
    {
        $turno = Turno::find($id);

        if ($turno) {
            return response()->json([
                'success' => true,
                'data' => $turno,
                'message' => 'Turno encontrado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Turno no encontrado'
            ], 404); // Código 404: Not Found
        }
    }

    // Almacena un nuevo turno
    public function store(Request $request)
    {
        try {
            $turno = Turno::create($request->all());

            return response()->json([
                'success' => true,
                'data' => $turno,
                'message' => 'Turno creado exitosamente'
            ], 201); // Código 201: Created
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear turno'
            ], 500);
        }
    }

    // Actualiza un turno existente
    public function update(Request $request, $id)
    {
        $turno = Turno::find($id);

        if ($turno) {
            $turno->update($request->all());
            return response()->json([
                'success' => true,
                'data' => $turno,
                'message' => 'Turno actualizado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Turno no encontrado'
            ], 404);
        }
    }

    // Elimina un turno
    public function destroy($id)
    {
        $turno = Turno::find($id);

        if ($turno) {
            $turno->delete();
            return response()->json([
                'success' => true,
                'message' => 'Turno eliminado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Turno no encontrado'
            ], 404);
        }
    }
}
