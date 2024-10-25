<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    protected $table = 'pagos';
    protected $guarded = ['id'];

    public function empleado()
    {
        return $this->belongsTo(Empleado::class);
    }
}
