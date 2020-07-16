# hackathon-backend

To run the postgres/nodejs server locally, first make sure that PostgreSQL, docker, & docker-compose are all installed and that the PostgreSQL client is running.  Then, run `docker-compose up` from the root directory.

The node server is exposed on port 3010 by default.

Active endpoints:  
/api - GET - api check
/api/restaurants - GET - get all restaurants
/api/restaurants - POST - create new restaurant
/api/restaurants/{restaurantId} - GET - query for particular restaurant
/api/restaurants/{restaurantId} - PUT - update restaurant

Some support for order objects & hospitals is in the source code, but isn't used in this MVP.