<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    protected $table = 'empleados';
    protected $guarded = ['id'];

    public function setNombreAttribute($value)
{
    $this->attributes['nombre'] = ucfirst(strtolower($value));
}

public function setTipoAttribute($value)
{
    $this->attributes['tipo'] = ucfirst(strtolower($value));
}
}


