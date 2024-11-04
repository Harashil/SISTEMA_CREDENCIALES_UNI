<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Asistencia>
 */
class AsistenciaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
                'empleado_id' => $this->faker->numberBetween(5, 9),
                'asistencia' => $this->faker->randomElement(['presente', 'ausente', 'tarde', 'justificado']),
                'reg_tareas' => $this->faker->randomElement(['cumplido', 'no cumplido', 'parcial']),
                'turno_id' => $this->faker->numberBetween(1, 3),
                'fecha' => $this->faker->date(),
                'hora_entrada' => $this->faker->time(),
            ];
    }
}
