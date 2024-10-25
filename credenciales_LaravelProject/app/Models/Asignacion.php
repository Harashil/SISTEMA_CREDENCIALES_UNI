<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Asignacion extends Model
{
    protected $table = 'asignacions';
    protected $guarded = ['id'];
    
    public function empleado()
    {
        return $this->belongsTo(Empleado::class);
    }

    public function aula()
    {
        return $this->belongsTo(Aula::class);
    }

    public function sector()
    {
        return $this->belongsTo(Sector::class);
    }
}
