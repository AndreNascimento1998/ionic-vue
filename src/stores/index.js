import { defineStore } from 'pinia'

export const useGlobal = defineStore('global', {
    state: () => ({
        users: [
            {
                id: 1,
                email: 'andre@hotmail.com',
                senha: '12345',
                nome: 'André',
                rua: 'vasco teste limeira',
                estado: 'Goiás',
                telefone: '4578-1545'
            },
            {
                id: 2,
                email: 'lucia@user.com',
                senha: 'abcd',
                nome: 'Lúcia',
                rua: 'isco silveira quinto',
                estado: 'Rio de Janeiro',
                telefone: '7889-4545'
            },
            {
                id: 3,
                email: 'tiago@user.com',
                senha: 'teste123',
                nome: 'Tiago',
                rua: 'avenida quinta amaro',
                estado: 'Goiás',
                telefone: '8901-3245'
            },
            {
                id: 4,
                email: 'manu@user.com',
                senha: 'abc123',
                nome: 'Manuela',
                rua: 'primeira alves pio',
                estado: 'Acre',
                telefone: '9015-3015'
            },
            {
                id: 5,
                email: 'silva@user.com',
                senha: 'silva123',
                nome: 'Silveira',
                rua: 'alameda do norte',
                estado: 'São Paulo',
                telefone: '8798-0100'
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
