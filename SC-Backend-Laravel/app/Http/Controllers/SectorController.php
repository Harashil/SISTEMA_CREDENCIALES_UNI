<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sector;

class SectorController extends Controller
{
    public function index()
    {
        $sectores = Sector::all();
        return response()->json([
            'success' => true,
            'data' => $sectores,
            'message' => 'Sectores obtenidos exitosamente'
        ], 200);
    }

    // Muestra un sector específico
    public function show($id)
    {
        $sector = Sector::find($id);

        if ($sector) {
            return response()->json([
                'success' => true,
                'data' => $sector,
                'message' => 'Sector encontrado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sector no encontrado'
            ], 404); // Código 404: Not Found
        }
    }

    // Almacena un nuevo sector
    public function store(Request $request)
    {
        try {
            $sector = Sector::create($request->all());

            return response()->json([
                'success' => true,
                'data' => $sector,
                'message' => 'Sector creado exitosamente'
            ], 201); // Código 201: Created
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear sector'
            ], 500);
        }
    }

    // Actualiza un sector existente
    public function update(Request $request, $id)
    {
        $sector = Sector::find($id);

        if ($sector) {
            $sector->update($request->all());
            return response()->json([
                'success' => true,
                'data' => $sector,
                'message' => 'Sector actualizado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sector no encontrado'
            ], 404);
        }
    }

    // Elimina un sector
    public function destroy($id)
    {
        $sector = Sector::find($id);

        if ($sector) {
            $sector->delete();
            return response()->json([
                'success' => true,
                'message' => 'Sector eliminado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sector no encontrado'
            ], 404);
        }
    }
}
