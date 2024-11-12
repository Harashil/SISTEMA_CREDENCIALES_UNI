<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pago;

class PagoController extends Controller
{
    public function index()
    {
        $pagos = Pago::all();
        return response()->json([
            'success' => true,
            'data' => $pagos,
            'message' => 'Pagos obtenidos exitosamente'
        ], 200);
    }

    // Muestra un pago específico
    public function show($id)
    {
        $pago = Pago::find($id);

        if ($pago) {
            return response()->json([
                'success' => true,
                'data' => $pago,
                'message' => 'Pago encontrado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Pago no encontrado'
            ], 404); // Código 404: Not Found
        }
    }

    // Almacena un nuevo pago
    public function store(Request $request)
    {
        try {
            $pago = Pago::create($request->all());

            return response()->json([
                'success' => true,
                'data' => $pago,
                'message' => 'Pago creado exitosamente'
            ], 201); // Código 201: Created
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al crear pago'
            ], 500);
        }
    }

    // Actualiza un pago existente
    public function update(Request $request, $id)
    {
        $pago = Pago::find($id);

        if ($pago) {
            $pago->update($request->all());
            return response()->json([
                'success' => true,
                'data' => $pago,
                'message' => 'Pago actualizado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Pago no encontrado'
            ], 404);
        }
    }

    // Elimina un pago
    public function destroy($id)
    {
        $pago = Pago::find($id);

        if ($pago) {
            $pago->delete();
            return response()->json([
                'success' => true,
                'message' => 'Pago eliminado'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Pago no encontrado'
            ], 404);
        }
    }
}
