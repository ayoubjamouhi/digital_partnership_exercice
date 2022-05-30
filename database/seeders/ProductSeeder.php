<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Product::truncate();
        Product::factory()->create([
            'name' => 'Product 1',
            'description' => 'description product 1',
            'price' => 100,
            'category_id' => 1
        ]);

        Product::factory()->create([
            'name' => 'Product 2',
            'description' => 'description product 2',
            'price' => 200,
            'category_id' => 2
        ]);

        Product::factory()->create([
            'name' => 'Product 3',
            'description' => 'description product 3',
            'price' => 300,
            'category_id' => 3
        ]);
    }
}
