# boilerplate-web3js

## Inspiration

A response to the need to avoid code duplication across multiple web3.js projects. Simplifying development and promoting module reuse for different projects.

## What does it mean?

First of all, let's go to [Wikipedia](https://en.wikipedia.org/wiki/SOLID) to understand the organizational essence.

## Did you saw that? Now you can continue

![test](UML.jpg)

### modules

The "modules" folder is a structural organization that groups different components or modules of the system. Each module can contain related functionalities and is a way to separate and organize the source code into distinct parts.

### repositories

The "repositories" folder contains the interfaces of "implementations" that define the methods and operations necessary to access and manipulate the data. These interfaces abstract the data access, allowing for the substitution of concrete implementations and ensuring the modularity of the system.

### implementations

The "implementations" folder contains the concrete classes that implement the repository interfaces defined in the "repository" folder. These classes are responsible for providing the actual implementation of the methods defined in the interfaces, handling persistence and data access according to the specific needs of the system.

### config

The "config" folder is responsible for storing configurations related to the system's implementations. In the context of the "modules," "repository," and "implementations" folders, the "config" folder can contain specific configurations for the repository implementations, such as database connection parameters or other relevant settings. This separation allows for better organization of configurations and facilitates system maintenance and scalability.

### use-cases

The "Use-case" folder is where business logic is implemented. It contains the application's use cases, which are the main operations or functionalities of the system. This folder can be considered the heart of the application, where business logic is developed and applied. It is in this folder that business rules are implemented, and operations are defined, allowing for the execution of desired functionalities.

### factory

The "Factory" folder is responsible for housing functions or classes that implement the Factory design pattern. Within this folder, the logic for creating and configuring objects necessary for the application is defined. This can include the creation of repository instances, configurations, and other relevant dependencies.

### application

The "app.ts" file takes on the responsibility of initializing the application's use cases. It uses the corresponding factories to create instances of the use cases and then invokes the execution of these use cases. This centralized approach in the "app.ts" file allows for proper configuration and startup of the use cases, establishing the starting point for the application's functionality.

## Requirements

Before running the application, make sure you have the following requirements installed:

- Node.js version v18.12.1
- NPM version v8.19.2

## How to execute

Follow the steps below to run the application:

1. Clone this repository to your local machine.
2. Navigate to the project's root directory.
3. Run the command npm install or yarn install to install the dependencies.
4. Follow the instructions in each module to run and test them individually.

## Contribute

Contributions are welcome! If you wish to contribute to this project, please follow the guidelines below:

1. Fork this repository.
2. Create a branch with a descriptive name for your contribution.
3. Make the necessary changes and additions.
4. Submit a pull request for review.

## License

This project is licensed under the [MIT](LICENSE).
