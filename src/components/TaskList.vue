<script setup lang="ts">
  import { useTaskStore } from '@/stores/tasks'

  const taskStore = useTaskStore()
  const tasks = taskStore.filteredTasks
</script>

<template>

  <div class="task-list">

    <div v-if="tasks.length > 0" v-for="task in tasks" :key="task.id" class="task-item">
      <label> <input type="checkbox" :checked="task.done" disabled /> <strong>{{ task.title }}</strong> </label>
      <p>{{ task.description }}</p>
    </div>

    <div v-else class="empty-tasks">
      <h3>Adicione Novas Tarefas</h3>
    </div>

  </div>

</template>

<style scoped lang="scss">
  .task-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 0.25rem;
    overflow-y: auto;
    max-height: 100%;
  }

  .task-list::-webkit-scrollbar {
    width: 6px;
  }

  .task-list::-webkit-scrollbar-thumb {
    background-color: var(--color-border-hover);
    border-radius: 4px;
  }

  .task-item {
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background-color: var(--color-background-soft);
    color: var(--color-text);
    transition: background-color 0.3s ease;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: anywhere;
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

  .empty-tasks {
    text-align: center;
  }
</style>
