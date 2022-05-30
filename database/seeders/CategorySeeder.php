<?php

namespace Database\Seeders;

use App\Models\Category;
use Faker\Factory;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Category::truncate();
        Category::factory()->create([
            'name' => 'Category 1'
        ]);
        Category::factory()->create([
            'name' => 'Category 2'
        ]);
        Category::factory()->create([
            'name' => 'Category 3'
        ]);
    }
}
