<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Empleado;

class EmpleadoController extends Controller
{
    public function index()
    {
        $empleados = Empleado::all();
        return response()->json([
            'success' => true,
            'data' => $empleados,
            'message' => 'Empleados obtenidas exitosamente'
        ], 200);
    }

    // Muestra una asignación específica
    public function show($id)
    {
        $empleado = Empleado::find($id);

        if ($empleado) {
            return response()->json([
                'success' => true,
                'data' => $empleado,
                'message' => 'Empleado encontrado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Empleado no encontrado'
            ], 404); // Código 404: Not Found
        }
    }
        // Almacena una nueva asignación
        public function store(Request $request)
        {
            try {
                $empleado = Empleado::create($request->all());
    
                return response()->json([
                    'success' => true,
                    'data' => $empleado,
                    'message' => 'Empleado creada exitosamente'
                ], 201); // Código 201: Created
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Error al crear empleado'
                ], 500);
            }
        }
    
    public function update(Request $request, $id)
    {
        $empleado = Empleado::find($id);

        if ($empleado) {
            $empleado->update($request->all());
            return response()->json([
                'success' => true,
                'data' => $empleado,
                'message' => 'Empleado actualizado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Empleado no encontrado'
            ], 404);
        }
    }
    public function destroy($id)
    {
        $empleado = Empleado::find($id);

        if ($empleado) {
            $empleado->delete();
            return response()->json([
                'success' => true,
                'message' => 'Empleado eliminado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Empleado no encontrado'
            ], 404);
        }
    }
}
