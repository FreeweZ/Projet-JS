import { defineStore } from 'pinia'

type User = {
    name: string
    email: string
    bio: string
    avatar: string
}

export const useUserStore = defineStore('user', {
    state: () => ({
        connectUser: null as User | null,
        theme: 'dark' as 'dark' | 'light'
    }),

    actions: {
        loginUser(user: User) {
            this.connectUser = user
        },

        updateUserName(name: string) {
            if (this.connectUser) {
                this.connectUser.name = name
            }
        },

        updateUserProfile(profile: Partial<User>) {
            if (this.connectUser) {
                Object.assign(this.connectUser, profile)
            }
        },

        logout() {
            this.connectUser = null
        },

        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark'
        }
    },

    getters: {
        isConnected: (state) => !!state.connectUser,
        fullName: (state) => state.connectUser?.name ?? 'Invité',
        isDarkMode: (state) => state.theme === 'dark'
    }
})
