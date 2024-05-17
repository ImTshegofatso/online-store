# React E-commerce App

This is a simple e-commerce application built with React and Redux.

## Features

- User Authentication: Users can register and log in to the application. The login status is managed using Redux.
- Product Listing: Authenticated users can view the list of products available in the store.
- Shopping Cart: Authenticated users can add products to their shopping cart.

## Components

- `App`: This is the main component of the application. It sets up the Redux provider and the router.
- `LoginForm`: This component provides a form for users to log in.
- `RegistrationForm`: This component provides a form for users to register.
- `Header` and `Footer`: These components provide the header and footer for the application.
- `LandingPage`: This is the home page of the application.
- `StorePage`: This page displays the list of products available in the store.
- `CartPage`: This page displays the user's shopping cart.

## Installation

1. Clone the repository to your local machine using `git clone`.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Start the application using `npm start`.

## Usage

To run the application, first install the dependencies with `npm install`, then start the application with `npm start`.

## Note

This is a simple implementation and might not be suitable for production. In a real-world application, you would want to implement a more secure way of handling user registration and authentication, possibly involving a backend server and database.
