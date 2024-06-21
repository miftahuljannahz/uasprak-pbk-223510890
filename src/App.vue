<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-grey text-white q-py-sm q-px-md">
      <Navbar />
    </q-header>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white footer">
      <q-toolbar class="q-pa-md">
        <q-toolbar-title class="text-center footer-title">
          <div>223510890 - 4D - UAS PRAKTIKUM PEMOGRAMAN BERBASIS KOMPONEN</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>

.bg-primary {
  background-color: #2c3e50;
  transition: background-color 0.3s;
}

.bg-primary:hover {
  background-color: #34495e;
}

.dropdown-btn {
  color: #ecf0f1;
  transition: background-color 0.3s;
}

.dropdown-btn:hover {
  background-color: #95a5a6;
}

.dropdown-item {
  color: #ecf0f1;
  transition: background-color 0.3s, color 0.3s;
}

.dropdown-item:hover {
  background-color: #bdc3c7;
  color: #2c3e50;
}

.q-toolbar-title,
.dropdown-item {
  cursor: pointer;
}

.footer {
  flex-shrink: 0;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 56px - 56px); 
  justify-content: center; 
  align-items: center; 
}

.footer-title {
  font-size: 14px; 
}

.text-center {
  text-align: center;
}
</style>
