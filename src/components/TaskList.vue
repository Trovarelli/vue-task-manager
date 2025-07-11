<script setup lang="ts">
  type Task = {
    id: number
    title: string
    description: string
    done: boolean
  }

  defineProps<{
    tasks: Task[]
  }>()
</script>

<template>
  <div class="task-list">
    <div v-for="task in tasks" :key="task.id" class="task-item">
      <label>
        <input type="checkbox" :checked="task.done" disabled />
        <strong>{{ task.title }}</strong>
      </label>
      <p>{{ task.description }}</p>
    </div>
  </div>
</template>

<style scoped>
  .task-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .task-item {
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background-color: var(--color-background-soft);
    color: var(--color-text);
    transition: background-color 0.3s ease;
  }

  .task-item label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
  }

  .task-item p {
    margin-top: 0.5rem;
    color: var(--color-text);
  }
</style>
