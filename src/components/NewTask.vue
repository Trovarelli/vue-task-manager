<script setup lang="ts">
  // defineProps<{
  //   msg: string
  // }>()
</script>

<template>
  <div class="new-task">
    <h3>Adicionar Tarefa</h3>
    <form>
      <input placeholder="Título" type="text" />
      <textarea rows="4" placeholder="Descrição"></textarea>
      <div class="actions">
        <button type="submit" class="btn primary">Adicionar</button>
        <button type="button" class="btn secondary">Cancelar</button>
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
    max-width: 500px;
    margin-top: 2rem;
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
