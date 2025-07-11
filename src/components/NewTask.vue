<script setup lang="ts">
  import { ref } from 'vue'
  import { useTaskStore, type Task } from '@/stores/tasks'

  const taskStore = useTaskStore()

  const title = ref('')
  const description = ref('')

  function handleAddTask(event: Event) {
    event.preventDefault()

    if (!title.value.trim() || !description.value.trim()) {
      alert('Por favor preencha os campos corretamente')
      return
    }

    const newTask: Omit<Task, 'id'> = {
      title: title.value,
      description: description.value,
      done: false,
    }

    taskStore.addTask(newTask)

    title.value = ''
    description.value = ''
  }
</script>

<template>

  <div class="new-task">

    <h3>Adicionar Tarefa</h3>

    <form @submit="handleAddTask">
      <input v-model="title" placeholder="Título" type="text" name="title" /> <textarea v-model="description" rows="4"
        placeholder="Descrição" name="description"></textarea>
      <div class="actions">
        <button type="submit" class="btn primary">Adicionar</button> <button type="button" class="btn secondary" @click="
          () => {
            title = ''
            description = ''
          }
        ">
          Cancelar </button>
      </div>

    </form>

  </div>

</template>

<style scoped lang="scss">
  .new-task {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1rem 1.5rem;
    background-color: var(--color-background-soft);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);

    h3 {
      font-size: 1.5rem;
      color: var(--color-heading);
      margin-bottom: 0.5rem;
      font-weight: 600;
      text-align: center;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1.5px solid var(--color-border);
      border-radius: 8px;
      background-color: var(--color-background);
      color: var(--color-text);
      font-size: 1rem;
      font-weight: 500;
      transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

      &::placeholder {
        color: var(--color-text);
        opacity: 0.5;
        font-weight: 400;
      }

      &:focus {
        outline: none;
        border-color: var(--color-border-hover);
        box-shadow: 0 0 8px var(--color-border-hover);
        background-color: var(--color-background-soft);
      }
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 0.5rem;
    }

    button.btn {
      padding: 0.6rem 1.4rem;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease;


      &.primary {
        background-color: var(--color-heading);
        color: var(--color-background);
        box-shadow: 0 3px 6px rgba(44, 62, 80, 0.3);

        &:hover {
          filter: brightness(0.9);
          box-shadow: 0 6px 12px rgba(44, 62, 80, 0.4);
        }
      }

      &.secondary {
        background-color: transparent;
        color: var(--color-heading);
        border: 1.5px solid var(--color-border);

        &:hover {
          background-color: var(--color-background-soft);
          border-color: var(--color-border-hover);
        }
      }
    }
  }
</style>
