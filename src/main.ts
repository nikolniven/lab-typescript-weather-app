import {
  getLocation,
  getCurrentWeather,
  displayLocation,
  displayWeatherData,
} from './utils';


const formElm = document.getElementById('weather-form') as HTMLElement;

formElm.addEventListener('submit', (e) => {
  e.preventDefault();
  const locationInput = document.getElementById('location') as HTMLInputElement;
  const locationName = locationInput.value;

  console.log(
    `The user has submitted the form and is searching for a location with this name${locationName}`,
  );

  getLocation(locationName)
    .then((locationResponse) => {
      // Here you should:
      // 1. Use displayLocation() with the location data
      displayLocation(locationResponse)
      // 2. Use getCurrentWeather() to get weather data
      getCurrentWeather(locationResponse);
      // 3. Use displayWeatherData() to show the weather
      displayWeatherData(locationResponse);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
