<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  main {
    min-height: 100vh;
    background-color: var(--color-background);
    color: var(--color-text);
    transition: all 0.3s ease;
  }
</style>
