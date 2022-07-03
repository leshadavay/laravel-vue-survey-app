<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SurveyAnswer extends Model
{
    const CREATED_AT = null;

    const UPDATED_AT = null;

    use HasFactory;

    public function survey(){
        $this->belongsTo(Survey::class);
    }

}
