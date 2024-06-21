<template>
  <q-toolbar class="bg-gray text-white q-py-sm q-px-md">
    <q-toolbar-title class="brand-title">Miftahul Jannah</q-toolbar-title>
    <q-btn-dropdown
      flat
      label="Tugas"
      color="white"
      text-color="white"
      size="18px"
      dense
      no-caps
      class="dropdown-btn"
    >
      <q-list class="dropdown-list">
        <q-item
          v-for="task in tasks"
          :key="task.id"
          clickable
          v-ripple
          @click="openProject(task.url)"
          class="dropdown-item"
        >
          <q-item-section>{{ task.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </q-toolbar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      tasks: [
        { id: 1, name: 'Tugas 1 - Membuat CV', url: 'https://mita-project-cv.vercel.app/' },
        { id: 2, name: 'Tugas 2 - Web Font Generator', url: 'https://mita-project-event.vercel.app/' },
        { id: 3, name: 'Tugas 3 - To Do List', url: 'https://mita-project-todocrud.vercel.app/' },
        { id: 4, name: 'Tugas 4 - Emit', url: 'https://tugas4-pbk-223510890.vercel.app/' },
        { id: 5, name: 'Tugas 5 - Toko Online & Quasar', url: 'https://tugas5-pbk-223510890.vercel.app/' },
        { id: 6, name: 'Tugas 6 - Artikel', url: 'https://tugas6-pbk-223510890.vercel.app/' },
        { id: 7, name: 'Tugas 7 - To Do List & Pinia', url: 'https://tugas7-pbk-223510890.vercel.app/' },
      ],
    };
  },
  methods: {
    openProject(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style scoped>
:root {
  --primary-color: #3f51b5;
  --secondary-color: #303f9f;
  --text-color: #ffffff;
  --hover-bg-color: #757de8;
  --hover-text-color: #ffffff;
  --dropdown-bg-color: rgba(63, 81, 181, 0.9);
  --dropdown-item-hover-bg: rgba(117, 125, 232, 0.8);
  --dropdown-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  --dropdown-transition: all 0.3s ease;
}


.text-white {
  color: #ffffff !important;
}

.q-toolbar {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 0 24px;
}

.brand-title {
  font-weight: bold;
  font-size: 24px;
}

.dropdown-btn {
  transition: background-color 0.3s;
  color: var(--text-color);
}

.dropdown-btn:hover {
  background-color: var(--secondary-color);
}

.dropdown-list {
  background-color: var(--dropdown-bg-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--dropdown-shadow);
  padding: 0;
}

.dropdown-item {
  color: var(--text-color);
  padding: 12px 20px;
  transition: var(--dropdown-transition);
  font-size: 16px;
  font-weight: 500;
}

.dropdown-item:hover {
  background-color: var(--dropdown-item-hover-bg);
  color: var(--hover-text-color);
}

.q-toolbar-title,
.dropdown-item {
  cursor: pointer;
}

.dropdown-item-enter-active, .dropdown-item-leave-active {
  transition: var(--dropdown-transition);
}

.dropdown-item-enter, .dropdown-item-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
