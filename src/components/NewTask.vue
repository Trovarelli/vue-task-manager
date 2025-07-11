<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
</script>

<template>

  <div class="new-task">

    <h3>Adicionar Tarefa</h3>
     <input placeholder="Título" type="text" /> <textarea
      rows="4"
      placeholder="Descrição"
    ></textarea
    >
  </div>

</template>

<style scoped lang="scss">
.new-task {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin-top: 2rem;

  h3 {
    font-size: 1.25rem;
    color: var(--color-heading);
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background-color: var(--color-background-soft);
    color: var(--color-text);
    font-size: 1rem;
    transition: border-color 0.2s ease, background-color 0.2s ease;

    &::placeholder {
      color: var(--color-text);
      opacity: 0.6;
    }

    &:focus {
      outline: none;
      border-color: var(--color-border-hover);
      background-color: var(--color-background-mute);
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
}
</style>

