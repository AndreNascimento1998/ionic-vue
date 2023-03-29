import { defineStore } from 'pinia'

export const useGlobal = defineStore('global', {
  state: () => ({
    users : [
        {
            id: 1,
            email: 'andre@hotmail.com',
            senha: '12345'
        },
        {
            id: 2,
            email: 'test@user.com',
            senha: 'abcd'
        },
        {
            id: 3,
            email: 'tiago@user.com',
            senha: 'teste123'
        },
        {
            id: 4,
            email: 'reass@user.com',
            senha: 'abc123'
        }
    ],
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
