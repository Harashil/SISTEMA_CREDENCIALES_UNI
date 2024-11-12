<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Docente extends Model
{
    protected $table = 'docentes';
    protected $guarded = ['id'];

    public function sector()
    {
        return $this->belongsTo(Sector::class);
    }

    
}
