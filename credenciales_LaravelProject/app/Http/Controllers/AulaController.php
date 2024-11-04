<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aula;

class AulaController extends Controller
{
    public function index()
    {
        $aulas = Aula::all();
        return response()->json([
            'success' => true,
            'data' => $aulas,
            'message' => 'Aulas obtenidas exitosamente'
        ], 200);
    }

    // Muestra un aula específica
    public function show($id)
    {
        $aula = Aula::find($id);

        if ($aula) {
            return response()->json([
                'success' => true,
                'data' => $aula,
                'message' => 'Aula encontrada'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Aula no encontrada'
            ], 404); // Código 404: Not Found
        }
    }

    // Almacena una nueva aula
    public function store(Request $request)
    {
        try {
            // Primero valida la entrada
            $request->validate([
                'capacidad' => 'required|integer|min:1|max:50', // Limita entre 1 y 2
            ]);

            // Luego crea el registro si la validación es exitosa
            $aula = Aula::create($request->all());

            return response()->json([
                'success' => true,
                'data' => $aula,
                'message' => 'Aula creada exitosamente'
            ], 201); // Código 201: Created
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear aula',
                'error'=>$e->getMessage()
            ], 500);
        }
    }


    // Actualiza una aula existente
    public function update(Request $request, $id)
    {
        $aula = Aula::find($id);

        if ($aula) {
            $aula->update($request->all());
            return response()->json([
                'success' => true,
                'data' => $aula,
                'message' => 'Aula actualizada'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Aula no encontrada'
            ], 404);
        }
    }

    // Elimina una aula
    public function destroy($id)
    {
        $aula = Aula::find($id);

        if ($aula) {
            $aula->delete();
            return response()->json([
                'success' => true,
                'message' => 'Aula eliminada'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Aula no encontrada'
            ], 404);
        }
    }
}
