# cricApi

## setup
1. install mysql locally and username root password ' ' `space`
2. start mysql server

## running Api
1. `npm install -g yarn`
2. `yarn`
3. `NODE_ENV=dev yarn migrate` // to run migrations locally
3. `yarn dev`

## docs
after running server
- http://localhost:8080/docs

## to create new migrations.
 1. add file to `some_schema.js` to `/database/schemas/` with db change
 2. run `NODE_ENV=dev knex migrate:make migration_name' from root of the folder
 3. this will generated timestamped version of file in migrations
 4. now go to migrations and in respective functions `up` and `down`
 call the `up` and `down` from schemas.
