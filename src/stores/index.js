import { defineStore } from 'pinia'

export const useGlobal = defineStore('global', {
    state: () => ({
        refeicao: [
            {
                id: 1,
                nome: 'Estrogonofe de Carne',
                preco: 37.50,
                src: 'https://pubimg.band.uol.com.br/files/2d01253c8d13c7582a11.png',
                qnt: 0
            },

            {
                id: 2,
                nome: 'Galinhada',
                preco: 34.00,
                src: 'https://s2.glbimg.com/ajGTiNj2FxByx96WP-01zz-wW4k=/e.glbimg.com/og/ed/f/original/2021/03/16/galinhada_camil.jpg',
                qnt: 0
            },
            {
                id: 3,
                nome: 'Feijoada',
                preco: 35.00,
                src: 'https://i0.statig.com.br/bancodeimagens/2m/x8/6n/2mx86nv7kxv8cybegti6zvw0t.jpg',
                qnt: 0
            },
            {
                id: 4,
                nome: 'Feijão Tropeiro',
                preco: 32.00,
                src: 'https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg',
                qnt: 0
            },
            {
                id: 5,
                nome: 'Arroz com suan',
                preco: 36.90,
                src: 'https://pubimg.band.uol.com.br/files/517dce50af62efdd4871.png',
                qnt: 0
            }
        ],

        
    }),
})
