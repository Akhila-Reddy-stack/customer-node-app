# Backend Server

### Install all server dependencies.
#### Go to backend directory & run follwing command:
```bash
$ npm install
# or
$ yarn
# or
$ yarn install
```

### Need to add/update following environment variables in ".env" file inside "backend" directory. If file doesnot exist, create one. You can also use ".env.example" file for following snippet
```bash
## Application Configuration
## Application Configuration
NODE_ENV="development"
APP_PORT=5000

APP_URL="http://localhost:5000"

## Database Configuration
DB_TYPE="mysql"
DB_HOST="localhost"
DB_PORT=3306
DB_NAME="db_customers"
DB_USER="root"
DB_PASS=""
DB_MAX_CON=10
DB_MIN_CON=0
DB_ACQUIRE_TIMEOUT=30000
DB_IDLE_TIMEOUT=10000
```
### Run database migration.
#### Go to backend directory & run following command:
```bash
$ npm run migrate
```

### To start node server, go to backend directory & run following command.
```bash
$ npm run dev
```

