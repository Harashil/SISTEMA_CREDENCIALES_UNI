<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pabellon;

class PabellonController extends Controller
{
    public function index()
    {
        $pabellones = Pabellon::all();
        return response()->json([
            'success' => true,
            'data' => $pabellones,
            'message' => 'Pabellones obtenidos exitosamente'
        ], 200);
    }

    // Muestra un pabellón específico
    public function show($id)
    {
        $pabellon = Pabellon::find($id);

        if ($pabellon) {
            return response()->json([
                'success' => true,
                'data' => $pabellon,
                'message' => 'Pabellón encontrado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Pabellón no encontrado'
            ], 404); // Código 404: Not Found
        }
    }

    // Almacena un nuevo pabellón
    public function store(Request $request)
    {
        try {
            $pabellon = Pabellon::create($request->all());

            return response()->json([
                'success' => true,
                'data' => $pabellon,
                'message' => 'Pabellón creado exitosamente'
            ], 201); // Código 201: Created
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear pabellón'
            ], 500);
        }
    }

    // Actualiza un pabellón existente
    public function update(Request $request, $id)
    {
        $pabellon = Pabellon::find($id);

        if ($pabellon) {
            $pabellon->update($request->all());
            return response()->json([
                'success' => true,
                'data' => $pabellon,
                'message' => 'Pabellón actualizado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Pabellón no encontrado'
            ], 404);
        }
    }

    // Elimina un pabellón
    public function destroy($id)
    {
        $pabellon = Pabellon::find($id);

        if ($pabellon) {
            $pabellon->delete();
            return response()->json([
                'success' => true,
                'message' => 'Pabellón eliminado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Pabellón no encontrado'
            ], 404);
        }
    }
}
