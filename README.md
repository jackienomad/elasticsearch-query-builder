**Query Builder Project**

Query Builder
=====

Table of contents
----
- [Using as a package](#package)
- [Local Setup](#local)
- [M31 Setup](#m31)

Package
-----
To use the query-builder as a library, you'll need to:
1. Add as a dependency
```
yarn add ssh://git@gitlab.com:importgenius/microservices/query-builder.git
```

2. Add esm import/export syntax support to importing project

Importing projects must have support for the import/export syntax. You can do the following:

- Using as a package from a dev or production run script
Use the esm package to provide import/export syntax support
```sh
# add the esm package
yarn add esm

# preload esm for your run script
NODE_ENV=production node -r esm src/index.js
```

- Using as a package from Jest

Jest already transpiles code before execution. However, node_modules packages is excluded.
Add the query-builder in the exclusion list of ignored paths for transpilation.
```javascript
{
  .
  .
  .
  "transformIgnorePatterns": ["<rootDir>/node_modules/(?!query-builder)"],
}
```

Local
-----

### Dependencies
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

### Installation

1. Clone the project and `cd` into project directory
    ```sh
    git clone git@gitlab.com:importgenius/microservices/query-builder.git
    cd query-builder
    ```

2. Install project dependencies
    ```sh
    yarn install
    ```
    or
    ```sh
    npm install
    ```
3. Create .env file
    ```sh
    cp .env.example .env
    ```
4. Start your server
    ```sh
    node run server-start
    ```
5. DONE

M31
-----

### Dependencies
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

### Installation

1. Clone the project and `cd` into project directory
    ```sh
    git clone git@gitlab.com:importgenius/microservices/query-builder.git
    cd query-builder
    ```

2. Install project dependencies
    ```sh
    yarn install
    ```
    or
    ```sh
    npm install
    ```
3. Create .env file
    ```sh
    cp .env.example .env
    ```
    change NODE_ENV to Production
    ```sh
    NODE_ENV=development
    ELASTIC_SEARCH_HOST=172.30.2.210
    ELASTIC_SEARCH_PORT=9200

    HOST=localhost
    PORT=<your port>
    ```
4. 
    ```sh
    pm2 start server.js --name=query-builder
    ```
5. create nginx config 
    ```sh
    vim ~/etc/nginx/<username>.query-builder.m31.importgenius.com.conf
    ```
    then change server_name and proxy_pass
    ```sh
    server {
        listen 80;
        server_name <username>.query-builder.m31.importgenius.com;

        # Bad Bot Blocker
        include /etc/nginx/bots.d/ddos.conf;
        include /etc/nginx/bots.d/blockbots.conf;

        location / {
            proxy_pass http://127.0.0.1:3737; #replace 3737 with the port you are using
        }
    }
    ```
6. change PORT in .env with the Port you set in proxy_pass

7. reload nginx
    ```sh
    sudo /etc/init.d/nginx reload
    ```
8. reload pm2 query-builder
    ```sh
    pm2 reload query-builder
    ```
9. DONE