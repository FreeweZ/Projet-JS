const API_BASE_URL = 'https://dummyjson.com'
const BATMAN_DEMO_USER_ID = 1
const missionTranslations = new Map([
  ['learn javascript', 'Apprendre JavaScript'],
  ['listen to a new music genre', 'Découvrir un nouveau genre musical']
])

function normalizeMission(todo) {
  if (
    !todo ||
    !Number.isInteger(todo.id) ||
    typeof todo.todo !== 'string' ||
    typeof todo.completed !== 'boolean'
  ) {
    throw new Error('La réponse de l’API ne contient pas une mission valide.')
  }

  return {
    id: todo.id,
    title: missionTranslations.get(todo.todo.trim().toLowerCase()) ?? `Mission à découvrir à Gotham n°${todo.id}`,
    completed: todo.completed
  }
}

export default defineNuxtPlugin(() => {
  const missionApi = {
    async getMissions() {
      const response = await $fetch(`${API_BASE_URL}/todos/user/${BATMAN_DEMO_USER_ID}`)

      if (!Array.isArray(response.todos)) {
        throw new Error('La réponse de l’API ne contient pas de liste de missions.')
      }

      return response.todos.map(normalizeMission)
    },

    async createMission(title) {
      const response = await $fetch(`${API_BASE_URL}/todos/add`, {
        method: 'POST',
        body: {
          todo: title,
          completed: false,
          userId: BATMAN_DEMO_USER_ID
        }
      })

      return normalizeMission(response)
    }
  }

  return {
    provide: {
      missionApi
    }
  }
})