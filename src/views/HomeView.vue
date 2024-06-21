<template>
  <div>
    <WeatherWidget />
  </div>
</template>

<script>
import WeatherWidget from '../components/WeatherCast.vue';

export default {
  name: 'HomeView',
  components: {
    WeatherWidget
  }
};
</script>

<style scoped>
h1 {
  font-size: 24px;
}

p {
  margin-top: 10px;
}
</style>
