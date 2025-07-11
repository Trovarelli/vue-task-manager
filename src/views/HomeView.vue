<script setup lang="ts">
import { ref } from 'vue'
import NewTask from '@/components/NewTask.vue'
import TaskList from '@/components/TaskList.vue'

const filter = ref<'pending' | 'completed' | null>(null)

function setFilter(value: typeof filter.value) {
  filter.value = value
}
</script>

<template>

  <main>

    <header>

      <h1>Lista de Tarefas</h1>

    </header>

    <div class="filter-container">
       <span>Filtrar por Estado: </span>
      <div>
         <button :class="{ active: filter === 'pending' }" @click="setFilter('pending')">
           Pendentes </button
        > <button :class="{ active: filter === 'completed' }" @click="setFilter('completed')">
           Completas </button
        > <button class="filter-cleaner" @click="setFilter(null)"> Limpar Filtros </button>
      </div>

    </div>
     <TaskList :tasks="[]" /> <NewTask />
  </main>

</template>

<style scoped lang="scss">
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        color: var(--color-heading);
      }

    .filter-container {
      display: flex;
      gap: 1rem;

      span {
        margin-bottom: 0.5rem;
      }

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

          &.filter-container {
            border: none;
          }
        }
      }
    }
  }
</style>

