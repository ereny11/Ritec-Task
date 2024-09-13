<template>
  <div>
    <NuxtLayout>
      <nav class="navbar-menu">
        <div class="nav-inner">
          <NuxtLink
            to="/"
            class="text-white font-semibold flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h3>Ritec Tasks</h3>
          </NuxtLink>
          <button
            @click="toggleClass"
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            class="w-full md:block md:w-auto"
            id="navbar-default"
            :class="{ hidden: hasClass }"
          >
            <ul
              class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#991b1b] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#991b1b] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <NuxtLink to="/" class="nav-link" aria-current="page">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/task1" class="nav-link"> Task1 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/task2" class="nav-link"> Task2 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/task3" class="nav-link"> Task3 </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NuxtLayout>
    <NuxtPage />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasClass: false,
    };
  },
  methods: {
    toggleClass() {
      this.hasClass = !this.hasClass;
    },
  },
};
</script>
