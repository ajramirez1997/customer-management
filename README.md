This is the instruction on how to install this project the steps contains of building a docker, creating a database, migration of databases from the backend, generating the api token for front end.

And sorry for the commit I push it all in one commit and put the front and backend in the same repository.

Build Docker Containers:

Navigate to the customer_management directory containing your docker-compose.yml file.
Run the following command to build the Docker containers:
bash
Copy code
docker-compose up --build

Create Database:

Ensure you have MySQL installed locally. Use a MySQL client or terminal to connect to MySQL.
Run the following SQL commands to create the customer_management database:
sql
Copy code
CREATE DATABASE customer_management;
Use root as the username and rootpass as the password when prompted.
Run Migrations and Seed Database:

After Docker containers are up and running:
bash
Copy code
docker-compose exec app php artisan migrate
docker-compose exec app php artisan db:seed --class=CustomersTableSeeder
Generate API Token:

Run the following command to generate a Passport client (API token):
bash
Copy code
docker-compose exec app php artisan passport:client --client
Follow the prompts to name the client.
Retrieve Access Token:

Run php artisan tinker inside the app container:
bash
Copy code
docker-compose exec app php artisan tinker
Use the following PHP code snippet to generate and retrieve the access token:
php
Copy code and run it inside of tinker

use Illuminate\Support\Facades\Http;

$response = Http::asForm()->post('http://localhost:8000/oauth/token', [
    'grant_type' => 'client_credentials',
    'client_id' => 'client_id_generated',
    'client_secret' => 'client_secret_generated',
]);

return $response->json()['access_token'];

Replace 'client_id_generated' and 'client_secret_generated' with the values obtained from the previous step.

Integrate Access Token with Frontend:

Store the generated access token in the .env file of your frontend application under API_TOKEN.
Access the Application:

Open your web browser and navigate to http://localhost:3000 to access the customer_management application.
