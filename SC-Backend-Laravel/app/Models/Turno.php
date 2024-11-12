<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Turno extends Model
{
    protected $table = 'turnos';
    protected $guarded = ['id'];

    public function empleado()
    {
        return $this->belongsTo(Empleado::class);
    }
}
