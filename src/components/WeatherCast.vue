<template>
  <div>
    <q-card class="weather-widget">
      <q-card-section class="widget-section">
        <h1 class="widget-title">WeatherCast</h1>
        <q-form @submit.prevent="updateWeather" class="form-container">
          <q-input
            v-model="city"
            placeholder="Enter city"
            outlined
            dense
            class="input-city q-mb-md"
            color="black"
            :before="[{ icon: 'location_on', color: 'grey-8' }]"
          ></q-input>
          <q-btn type="submit" label="Search" color="grey-5" class="search-button" />
        </q-form>
      </q-card-section>
      <q-card-section v-if="weather" class="weather-info">
        <div class="centered">
          <p><strong>Location:</strong> {{ weather.name }}</p>
          <p><strong>Temperature:</strong> {{ formatTemperature(weather.main.temp) }} °C</p>
          <p><strong>Weather:</strong> {{ weather.weather[0].description }}</p>
        </div>
      </q-card-section>
      <q-card-section v-else-if="error" class="weather-error">
        <div class="centered">
          <p>{{ error }}</p>
        </div>
      </q-card-section>
      <q-card-section v-else class="weather-loading">
        <div class="centered">
          <q-spinner-hourglass size="24px" color="primary" />
          <p>Loading...</p>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'WeatherWidget',
  data() {
    return {
      weather: null,
      city: '',
      error: null,
      API_KEY: '2766fa1365c6f76bffbb56c65dca0377',
      BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
      UNITS: 'metric'
    };
  },
  methods: {
    async updateWeather() {
      if (!this.city) return;
      this.weather = null;
      this.error = null;
      try {
        const response = await fetch(`${this.BASE_URL}?q=${this.city}&units=${this.UNITS}&appid=${this.API_KEY}`);
        const data = await response.json();
        if (data.cod === "404") {
          this.error = "City not found. Please enter a valid city name.";
        } else {
          this.weather = data;
        }
      } catch (error) {
        this.error = 'Error fetching weather data. Please try again later.';
        console.error('Error fetching weather data:', error);
      }
    },
    formatTemperature(temp) {
      return Math.round(temp);
    }
  }
};
</script>

<style scoped>
.widget-section {
  padding: 24px; 
  text-align: center; 
}

.weather-widget {
  position: relative;
  font-family: Arial, sans-serif;
  border: none;
  border-radius: 20px;
  color: #333;
  width: 350px; 
  margin: 50px auto;
  background-image: url('https://i.pinimg.com/564x/bf/fd/a4/bffda4006f61a704069ac03e18486f40.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.widget-title {
  font-size: 24px;
  color: #000000;
}

.input-city {
  background-color: rgba(255, 255, 255, 0.8);
  border-color: transparent;
  color: #333;
}

.search-button {
  background-color: #ccccccb3; 
  color: #fff; 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;
}

.search-button:hover {
  background-color: #999; 
}

.weather-info, .weather-error, .weather-loading {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
  color: #333;
  text-align: center; 
}

.weather-error {
  background-color: rgba(255, 0, 0, 0.8); 
  color: #fff; 
  font-weight: bold; 
}

.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
