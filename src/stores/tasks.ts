import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type Task = {
  id: number
  title: string
  description: string
  done: boolean
}

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([])

  function addTask(task: Omit<Task, 'id'>) {
    const id = tasks.value.length ? tasks.value[tasks.value.length - 1].id + 1 : 1
    tasks.value.push({ id, ...task })
  }

  function toggleDone(id: number) {
    const task = tasks.value.find(t => t.id === id)
    if (task) task.done = !task.done
  }

  const filter = ref<'pending' | 'completed' | null>(null)

  const filteredTasks = computed(() => {
    if (filter.value === 'pending') return tasks.value.filter(t => !t.done)
    if (filter.value === 'completed') return tasks.value.filter(t => t.done)
    return tasks.value
  })

  function setFilter(value: typeof filter.value) {
    filter.value = value
  }

  return { tasks, addTask, toggleDone, filter, setFilter, filteredTasks }
})
