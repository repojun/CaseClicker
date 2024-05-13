<center>
  <img src="https://arjun.needs-to-s.top/7bUuh84.png" alt="Logo" width="200">
</center>
# Demo Video
If you wish to simply see how the project works, feel free to watch this video instead:

 [https://youtu.be/WaJI4El9kuk](https://youtu.be/WaJI4El9kuk)
# Setting up the Website

This repository contains the necessary files to set up a website using Node.js, React, MongoDB, and Express.js.

## Prerequisites

Before setting up the website, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en): Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser.
- [npm (Node Package Manager)](https://www.npmjs.com): npm is a package manager for Node.js that helps you install and manage dependencies for your projects.
- [MongoDB](https://www.mongodb.com): MongoDB is a popular NoSQL database used for storing and managing data in your application.

## Setup Instructions

1. Clone this repository to your local machine using Git:

    ```
    git clone <repository_url>
    ```

2. After cloning, navigate to the project directory in your terminal.

3. Install front-end packages by running the following command:

    ```
    npm i
    ```

4. Open a second terminal and navigate to the `server` directory inside the project.

5. Install server-side packages by running:

    ```
    cd server
    npm i
    ```

6. Once all packages are installed, start the development server by running the following commands in both server and front end terminals:

    ```
    npm start
    ```
7. To avoid leaderboard issues, open cypress testing to populate the database and following instructions:

    ```
    npx cypress open
    ```
      Upon following the screenshots, the tests should begin to run and the database will populate!

      Open E2E Testing:
      <img src="https://arjun.needs-to-s.top/4DPEwJs.png">
      Select spec.cy.js:
      <img src="https://arjun.needs-to-s.top/9wkrbBN.png">
      Tests running:
      <img src="https://arjun.needs-to-s.top/AWbV64K.png">

8. The development server should now be running. You can access the website by navigating to [http://localhost:3000](http://localhost:3000) in your web browser.

## Components

- **Node.js**: A JavaScript runtime for executing JavaScript code outside of a web browser.
- **npm**: Node Package Manager for installing and managing project dependencies.
- **MongoDB**: NoSQL database for storing and managing data in the application.
- **React**: JavaScript library for building user interfaces.
- **Express.js**: Web application framework for Node.js, providing features for building web servers and APIs.

## Usage

Once the development server is running, you can begin using the website by navigating to [http://localhost:3000](http://localhost:3000) in your web browser.

