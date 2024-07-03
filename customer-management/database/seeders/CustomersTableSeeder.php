<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $customers = [
            [
                "first_name" => "Oleg",
                "last_name" => "Clark",
                "contact_number" => "1-467-771-3759",
                "email" => "primis.in.faucibus@icloud.edu"
            ],
            [
                "first_name" => "Azalia",
                "last_name" => "Brewer",
                "contact_number" => "1-127-880-9778",
                "email" => "parturient.montes@outlook.org"
            ],
            [
                "first_name" => "Judah",
                "last_name" => "Finch",
                "contact_number" => "1-388-872-4722",
                "email" => "aliquet.libero.integer@aol.couk"
            ],
            [
                "first_name" => "Paki",
                "last_name" => "Flowers",
                "contact_number" => "1-766-664-7517",
                "email" => "fringilla.cursus.purus@google.ca"
            ],
            [
                "first_name" => "Finn",
                "last_name" => "Hayden",
                "contact_number" => "1-218-646-0811",
                "email" => "tincidunt.pede@yahoo.ca"
            ],
            [
                "first_name" => "Jessamine",
                "last_name" => "Wyatt",
                "contact_number" => "1-582-278-8045",
                "email" => "est@hotmail.com"
            ],
            [
                "first_name" => "Wylie",
                "last_name" => "Chan",
                "contact_number" => "1-299-739-9434",
                "email" => "a@hotmail.org"
            ],
            [
                "first_name" => "Gage",
                "last_name" => "Burns",
                "contact_number" => "1-606-706-9876",
                "email" => "sodales.elit@outlook.couk"
            ],
            [
                "first_name" => "Tad",
                "last_name" => "Alvarado",
                "contact_number" => "1-584-867-7108",
                "email" => "vel2@outlook.net"
            ],
            [
                "first_name" => "Tatum",
                "last_name" => "Whitfield",
                "contact_number" => "1-528-313-5375",
                "email" => "sem@protonmail.net"
            ],
            [
                "first_name" => "Jaquelyn",
                "last_name" => "Rojas",
                "contact_number" => "1-698-285-6344",
                "email" => "nisi.nibh@icloud.com"
            ],
            [
                "first_name" => "Briar",
                "last_name" => "Mann",
                "contact_number" => "1-365-505-4360",
                "email" => "dui.cum@aol.couk"
            ],
            [
                "first_name" => "Mallory",
                "last_name" => "Mccray",
                "contact_number" => "1-337-551-3494",
                "email" => "vestibulum.ante.ipsum@google.couk"
            ],
            [
                "first_name" => "Thomas",
                "last_name" => "Gomez",
                "contact_number" => "1-434-181-3111",
                "email" => "vel.arcu@aol.ca"
            ],
            [
                "first_name" => "Fay",
                "last_name" => "Herring",
                "contact_number" => "1-647-574-7553",
                "email" => "gravida.mauris@yahoo.couk"
            ],
            [
                "first_name" => "Tyrone",
                "last_name" => "Lynch",
                "contact_number" => "1-432-691-4487",
                "email" => "cras.convallis.convallis@google.edu"
            ],
            [
                "first_name" => "Wing",
                "last_name" => "Clark",
                "contact_number" => "1-460-900-3730",
                "email" => "consectetuer.cursus@hotmail.com"
            ],
            [
                "first_name" => "Octavia",
                "last_name" => "Gaines",
                "contact_number" => "1-824-459-3455",
                "email" => "arcu.nunc@outlook.com"
            ],
            [
                "first_name" => "Myles",
                "last_name" => "Mendez",
                "contact_number" => "1-982-362-7634",
                "email" => "ante.ipsum@outlook.ca"
            ],
            [
                "first_name" => "Nicole",
                "last_name" => "Howell",
                "contact_number" => "1-167-480-6748",
                "email" => "in.sodales@aol.org"
            ],
            [
                "first_name" => "Felicia",
                "last_name" => "Herrera",
                "contact_number" => "1-313-238-5288",
                "email" => "vel@outlook.net"
            ],
            [
                "first_name" => "Kyle",
                "last_name" => "Benton",
                "contact_number" => "1-265-316-6531",
                "email" => "nunc.laoreet.lectus@protonmail.net"
            ],
            [
                "first_name" => "Reuben",
                "last_name" => "Benton",
                "contact_number" => "1-349-338-3324",
                "email" => "donec@hotmail.ca"
            ],
            [
                "first_name" => "Kyla",
                "last_name" => "Hudson",
                "contact_number" => "1-895-825-8626",
                "email" => "est.nunc@icloud.couk"
            ],
            [
                "first_name" => "Talon",
                "last_name" => "Greer",
                "contact_number" => "1-846-694-3775",
                "email" => "arcu.iaculis@aol.net"
            ]
        ];

        // Insert the data into the 'customers' table
        DB::table('customers')->insert($customers);
    }
}
