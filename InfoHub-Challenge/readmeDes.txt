
layered structure of your InfoHub-Challenge project:


 InfoHub-Challenge/
 ¦
 +-- client/                      (React Frontend)
 ¦   +-- package.json
 ¦   +-- vite.config.js
 ¦   +-- index.html
 ¦   +-- .gitignore
 ¦   ¦
 ¦   +-- src/
 ¦   ¦   +-- main.jsx
 ¦   ¦   +-- app.jsx             (Main UI container)
 ¦   ¦   +-- app.css 
 ¦   ¦   +-- index.css
 ¦   ¦
 ¦   +-- components/             (Your UI Components Folder)
 ¦       +-- WeatherComponent.jsx
 ¦       +-- CurrencyComponent.jsx
 ¦       +-- QuoteComponent.jsx
 ¦
 +-- server/        (Node + Express Backend)
     +-- server.js  (APIs for weather, currency, quotes)
     +-- keys.env   (API Keys Stored Here)
     +-- package.json
     +-- package-lock.json
     +-- node_modules/




TO Start Whole project:

step 1:
  
  - In ./server Folder run server.js to start the server at Backend side


step 2:
   
  - In ./client Folder run command "npm run dev" to start the server at Frontend side



Important NOTE:

  - The https://weatherstack.com/ API site have "limited free APL calls" out of 100, i already used 33/100 calls. 