<?php

namespace App\Http\Controllers;

use App\Models\Asistencia;
use Illuminate\Http\Request;

class AsistenciaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $asistencias = Asistencia::orderBy('hora_entrada', 'asc')->get();
        return response()->json($asistencias);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $asistencia = Asistencia::create($request->all());

            return response()->json([
                'success' => true,
                'data' => $asistencia,
                'message' => 'Asistencia creada exitosamente'
            ], 201); // Código 201: Created
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear asistencia'
            ], 500);
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $asistencia = Asistencia::find($id);

        if ($asistencia) {
            return response()->json([
                'success' => true,
                'data' => $asistencia,
                'message' => 'Asistencia encontrado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Asistencia no encontrado'
            ], 404); // Código 404: Not Found
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $asistencia = Asistencia::find($id);

        if ($asistencia) {
            $asistencia->update($request->all());
            return response()->json([
                'success' => true,
                'data' => $asistencia,
                'message' => 'Asistencia actualizado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Asistencia no encontrado'
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $asistencia = Asistencia::find($id);

        if ($asistencia) {
            $asistencia->delete();
            return response()->json([
                'success' => true,
                'message' => 'Asistencia eliminado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Asistencia no encontrado'
            ], 404);
        }
    }
}
