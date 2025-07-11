<template>

  <main>

    <header>

      <h1>Lista de Tarefas</h1>

    </header>

    <section>

      <div class="filter-container">
        <span>Filtrar por Estado: </span>
        <div>
          <button :class="{ active: taskStore.filter === 'pending' }" @click="taskStore.setFilter('pending')">
            Pendentes </button> <button :class="{ active: taskStore.filter === 'completed' }"
            @click="taskStore.setFilter('completed')">
            Completas </button> <button class="filter-cleaner" @click="taskStore.setFilter(null)">
            Limpar Filtros </button>
        </div>

      </div>

      <div class="content">
        <TaskList />
      </div>

      <div class="new-task-wrapper">
        <NewTask />
      </div>

    </section>

  </main>

</template>

<script setup lang="ts">
  import NewTask from '@/components/NewTask.vue'
  import TaskList from '@/components/TaskList.vue'
  import { useTaskStore } from '@/stores/tasks'

  const taskStore = useTaskStore()
</script>

<style scoped lang="scss">
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      h1 {
        color: var(--color-heading);
      }
    }

    section {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      height: 95%;
      width: 100%;
      max-width: 600px;
      padding: 1rem;
      gap: 1rem;
    }

    .filter-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      div {
        display: flex;
        gap: 0.5rem;

        button {
          background-color: transparent;
          border: 1px solid var(--color-border);
          color: var(--color-text);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;

          &.active {
            background-color: var(--color-text);
            color: var(--color-background);
          }

          &:hover {
            border-color: var(--color-border-hover);
          }

          &.filter-cleaner {
            border: none;
          }
        }
      }
    }

    .content {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding-right: 0.5rem;
    }

    .new-task-wrapper {
      margin-top: auto;
      padding-bottom: 1rem;
    }
  }
</style>
