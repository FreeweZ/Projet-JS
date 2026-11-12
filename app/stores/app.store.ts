// config que le user peut choisir (couleur, langue, theme dark/light)

export const useAPPStore = defineStore('app', () => {
    const darkMode = ref(false)

    return {
        darkMode
    }


})