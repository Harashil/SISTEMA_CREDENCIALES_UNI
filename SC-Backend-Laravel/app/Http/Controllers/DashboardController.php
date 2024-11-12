<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Empleado;
use App\Models\Sector;

class DashboardController extends Controller
{
    public function countEmployeesByType()
    {
        $counts = Empleado::select('tipo', DB::raw('count(*) as total'))
            ->groupBy('tipo')
            ->get()
            ->pluck('total', 'tipo');
        return response()->json([
            'P. Administrativo' => $counts->get('P. Administrativo', 0),
            'P. Directivo' => $counts->get('P. Directivo', 0),
            'P. Académico' => $counts->get('P. Académico', 0)
        ]);
    }
    public function getForeCast(){
        //Api traendo datos de los postulantes
        $postulantes= 300;
        //Pronostico de personal según la cantidad de postulantes
        $p_administrativo = round(($postulantes+50)/50);
        $sectores= $postulantes/100;
        $p_directivo=30;
        $p_academico=($postulantes/30*2)+$sectores*4+20;
        
        return response()->json([
            'P. Administrativo' => $p_administrativo,
            'P. Directivo' => $p_directivo,
            'P. Académico' => $p_academico,
            'Sectores' => $sectores
        ]);
    }

    public function countTotalSectors(){
        $total = Sector::count();
        return response()->json($total);
    }

}
