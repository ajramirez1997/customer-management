This is the instruction on how to install this project the steps contains of building a docker, creating a database, migration of databases from the backend, generating the api token for front end.

And sorry for the commit I push it all in one commit and put the front and backend in the same repository.

**Build Docker Containers:**

Navigate to the customer_management directory containing your docker-compose.yml file.
Run the following command to build the Docker:

docker-compose up --build

**Create Database:**

Open the localhost or localhost:80 used the credentials of root and rootpass (You can change this in docker-compose.yml for security purposes).

Create a database and name it customer_management.

After you create a database run this command to migrate the table and populate the customer table.

docker-compose exec app php artisan migrate

docker-compose exec app php artisan db:seed --class=CustomersTableSeeder



**Generate API Token:**

**Run the following command to generate a Passport client (API token):**

docker-compose exec app php artisan passport:client --client

This will ask you what name of the client put any name that you want. And it will give you a client secret key and id it will be used in the next step.

**Run php artisan tinker inside the app container:**
docker-compose exec app php artisan tinker

This command will open a php shell.

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

Should be like this

API_TOKEN = Generated Token from PHP Artisan Tinker

**Access the Application:**

Open your web browser and navigate to http://localhost:3000 to access the customer_management application.

Reminder: Dont forget change the .env.example to .env
