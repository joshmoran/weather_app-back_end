# Weather App - Backend

> This is the backend programming for a weather app and is intended to be used along side one another 
[Weather App Frontend - Github](https://github.com/joshmoran/weather_app-front_end)

> An API key is needed from OpenWeather
> - A key can be obtained on - The Type is 'Current Weather Data'
> [OpenWeather - Get API Key](https://openweathermap.org/api)

# Index 
1. Getting Started with the project
2. Overview and Features

# 1. Getting started with the project 
To successfully run the program, please follow these steps:
1. rename 'env-template' to '.env'
2. Edit and change to the desired values
   - Port = which port should the weather backend run on
   - API Key = The API key for OpenWeather to get weather updates
3. Execute the server by running:
   > node server.js

# 2. Overview and Features 
- This app really has only one function: 
  - Search for a city
    - The user search for a city on the ReactJS (Frontend) and is a small APi to connect the front-end to the backend
    - It gets the name by the url of '/<cityname> and searches the city on OpenWeather
    - The gives the data back to front end to the display