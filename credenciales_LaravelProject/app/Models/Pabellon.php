<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pabellon extends Model
{
    protected $table = 'pabellones';
    protected $guarded = ['id'];

    public function sector()
    {
        return $this->belongsTo(Sector::class);
    }
    public function setNombreAttribute($value){
        $this->attributes['nombre']= ucfirst(strtolower($value));
    }
}
