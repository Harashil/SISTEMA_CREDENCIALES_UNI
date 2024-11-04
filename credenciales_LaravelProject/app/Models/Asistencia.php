<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asistencia extends Model
{
    use HasFactory;
    
    protected $table = 'asistencias';
    protected $guarded = ['id'];

    public function setAsistenciaAttribute($value)
    {
        $this->attributes['asistencia'] = ucfirst(strtolower($value));
    }
    public function setReg_tareasAttribute($value)
    {
        $this->attributes['reg_tareas'] = ucfirst(strtolower($value));
    }
}
