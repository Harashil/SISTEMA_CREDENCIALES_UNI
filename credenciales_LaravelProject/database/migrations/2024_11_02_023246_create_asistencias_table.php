<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('asistencias', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('empleado_id'); //PARA ANGULAR
            $table->enum('asistencia', ['presente', 'ausente', 'tarde', 'justificado']);//PARA ANGULAR
            $table->enum('reg_tareas', ['cumplido', 'no cumplido', 'parcial']);//PARA ANGULAR
            $table->unsignedBigInteger('turno_id'); ;//PARA ANGULAR
            $table->date('fecha');
            $table->time('hora_entrada');//PARA ANGULAR 
            $table->timestamps();
            // Clave foránea hacia la tabla empleados
            $table->foreign('empleado_id')->references('id')->on('empleados')->onDelete('cascade');
            $table->foreign('turno_id')->references('id')->on('turnos')->onDelete('cascade');
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asistencias');
    }
};
