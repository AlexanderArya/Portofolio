<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class project extends Model
{
    use HasFactory;
    protected $table = "projects";
    protected $primaryKey = "id";
    public $timestamps = true;
    public $fillable = ['id', 'title', 'description', 'created_at', 'updated_at'];
}
