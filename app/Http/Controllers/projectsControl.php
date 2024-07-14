<?php

namespace App\Http\Controllers;

use App\Models\project;
use Illuminate\Http\Request;

class projectsControl extends Controller
{
    public function getAll(){
        $query = project::select('id', 'title', 'description', 'created_at', 'updated_at');
        $query = $query->get();

        return response()->json($query,200,array(), JSON_PRETTY_PRINT);
    }


}
