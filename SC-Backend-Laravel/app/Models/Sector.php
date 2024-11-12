<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sector extends Model
{
    protected $table = 'sectores';
    protected $guarded = ['id'];

    public function setNombreAttribute($value)
{
    $this->attributes['nombre'] = strtoupper($value);
}
}
