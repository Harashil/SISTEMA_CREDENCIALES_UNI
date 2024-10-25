<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pabellon extends Model
{
    protected $table = 'pabellons';
    protected $guarded = ['id'];

    public function sector()
    {
        return $this->belongsTo(Sector::class);
    }
}
