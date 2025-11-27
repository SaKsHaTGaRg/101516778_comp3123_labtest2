This is a readme file for my lab test 2 for comp3123 full stack devlopment

# Weather App – COMP3123 Lab Test 2

This project was completed for COMP3123 – Full Stack Development I (Lab Test 2).  
The goal of the assignment was to build a React application that displays current weather information for any city using a public API.  
Users can search for a city and view temperature, weather condition, official weather icon, humidity, wind speed, and pressure.  
The UI/UX layout is custom-designed based on the API response and follows all assignment requirements.

---

## Project Description

This application retrieves real-time weather information from the OpenWeatherMap Current Weather API.  
When a user enters a city name, the app fetches the current weather data and displays it in a clean, custom-designed weather card.  
The project demonstrates the use of:
- React components  
- State and hooks  
- Props  
- API integration  
- Environment variables  
- Custom UI/UX design  
- Postman API testing  

---

## Setup Steps

1. Clone the repository: https://github.com/SaKsHaTGaRg/101516778_comp3123_labtest2

 2. Install dependencies: npm install
  
3. Create a `.env` file in the project root (same level as package.json):
4. Start the development server: npm start


## API Used

OpenWeatherMap Current Weather API:
https://api.openweathermap.org/data/2.5/weather

Weather icons:
https://openweathermap.org/img/wn/{icon}@2x.png


**## Screenshots**

1. Home Page  -- 
<img width="1909" height="848" alt="Screenshot 2025-11-27 154645" src="https://github.com/user-attachments/assets/e0894799-3327-4559-8c2c-72b17ad027de" />
2. Search result -- 
<img width="1919" height="865" alt="Screenshot 2025-11-27 154656" src="https://github.com/user-attachments/assets/a826f033-225a-4ff5-b270-fa12f1566501" />

3. Postman testing -- 
<img width="1384" height="882" alt="Screenshot 2025-11-27 155112" src="https://github.com/user-attachments/assets/69a11434-b7fd-4f86-8578-84aff41ae2be" />


##  Notes & Assumptions

- The assignment only requires **current weather**, not forecast or multi-day data.
- Weather icons must come from OpenWeatherMap, as instructed.
- The UI is custom-designed based on the API response, following the rubric.
- The API key is stored in a `.env` file and accessed via `process.env`.
- The project is deployed on Vercel, and the API key is added as an environment variable there as well.


##  Author

**Sakshat Garg**  
Student ID: **101516778**  
COMP3123 – Full Stack Development I  
George Brown College
