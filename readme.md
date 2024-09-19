# Project Readme

This readme file provides an overview of the Node.js and MongoDB project, which is set up to run using Docker Compose.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Install Docker and Docker Compose if you haven't already.
3. Open a terminal and navigate to the project directory.
4. Run the following command to start the project:

   ```
   docker-compose up -d
   ```

   This command will start Next.js, the Node.js server and MongoDB database containers in the background.

## Project Structure

### Frontend folder

The project follows a standard Next.js project structure.

### Backend folder

The project follows a standard Node.js project structure. Here are the main directories and files:

## Usage

Once the project is up and running, you can access the Node.js application at `http://localhost:3001`. The MongoDB database will be available at `mongodb://localhost:27017`.
You can access the Next.js application at `http://localhost:3000`.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

Pour lancer le projet dans node faire :

se placer dans le conteneur :

```
docker exec -it node-app /bin/bash
```

```
npx tsc
```

puis

```
npm start
```

## Ajout de tests avec Jest

Executer

```
npm run test
```
