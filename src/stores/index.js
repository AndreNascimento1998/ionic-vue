import { defineStore } from 'pinia'

export const useGlobal = defineStore('global', {
    state: () => ({
        carrinho: 0,
        promocao: {},
        cardapioUsada: false,
        promocaoUsada: true,
        totalPromocao: 0,
        carrinhoCompras: [],

        alimento: {
            refeicao: [
                {
                    id: 1,
                    nome: 'Estrogonofe de Carne',
                    preco: 37.50,
                    src: 'https://pubimg.band.uol.com.br/files/2d01253c8d13c7582a11.png',
                    qnt: 0,
                    descricao: 'Estrogonofe (do russo строганов, stroganov) é um prato originário da culinária russa composto de cubos de carne bovina servidos num molho de creme de leite.'
                },

                {
                    id: 2,
                    nome: 'Galinhada',
                    preco: 34.00,
                    src: 'https://s2.glbimg.com/ajGTiNj2FxByx96WP-01zz-wW4k=/e.glbimg.com/og/ed/f/original/2021/03/16/galinhada_camil.jpg',
                    qnt: 0,
                    descricao: 'Galinhada é um prato culinário típico da culinária brasileira, mais especificamente dos estados de São Paulo, Minas Gerais (Triângulo Mineiro e Alto Paranaíba) e Goiás. De origem bandeirante, consiste em arroz cozido e frango em pedaços cozido.'
                },
                {
                    id: 3,
                    nome: 'Feijoada',
                    preco: 35.00,
                    src: 'https://i0.statig.com.br/bancodeimagens/2m/x8/6n/2mx86nv7kxv8cybegti6zvw0t.jpg',
                    qnt: 0,
                    descricao: 'A feijoada é um dos pratos típicos mais conhecidos e populares da culinária brasileira. Composta basicamente por feijão preto, diversas partes do porco, linguiça, farinha e o acompanhamento de verduras e legumes, ela é comumente apontada como uma criação culinária dos africanos escravizados que vieram para o Brasil.'
                },
                {
                    id: 4,
                    nome: 'Feijão Tropeiro',
                    preco: 32.00,
                    src: 'https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg',
                    qnt: 0,
                    descricao: 'Conhecido em todo o país, o feijão tropeiro é um prato típico de culinárias regionais, mais especificamente da cozinha mineira, paulista e goiana. Composto por feijão, farinha de mandioca, torresmo, linguiça, ovos, alho, cebola e e temperos, é uma receita de dar água na boca!'
                },
                {
                    id: 5,
                    nome: 'Arroz com Suan',
                    preco: 36.90,
                    src: 'https://pubimg.band.uol.com.br/files/517dce50af62efdd4871.png',
                    qnt: 0,
                    descricao: 'Arroz de suã. Os pedaços da carne de porco, dourados por fora, vão se desmanchando e se misturando ao arroz úmido, ultrassaboroso, envolvido pelos perfumes ...'
                }],

            lanche: [
                {
                    id: 6,
                    nome: 'Batata Frita',
                    preco: 9.30,
                    src: 'https://conteudo.imguol.com.br/c/entretenimento/a0/2018/02/26/batata-frita-1519671488107_v2_4x3.jpg',
                    qnt: 0,
                    descricao: 'A batata frita é um petisco culinário que agrada crianças e adultos, sendo que a Bélgica e a França disputam pela autoria de sua criação.'
                },

                {
                    id: 7,
                    nome: 'Brotinho',
                    preco: 11.50,
                    src: 'https://img.cybercook.com.br/imagens/receitas/789/pizza-brotinho-de-pizzaria.jpg',
                    qnt: 0,
                    descricao: 'Descrição do produto. Pizzas tamanho brotinho para o lanche ou jantar. Massa artesanal e caseira, queijo vegano e muito recheio!'
                },
                {
                    id: 8,
                    nome: 'Pamonha',
                    preco: 7.00,
                    src: 'https://www.receiteria.com.br/wp-content/uploads/pamonha-doce-de-milho-01.jpg',
                    qnt: 0,
                    descricao: 'Em seu Dicionário de Palavras Brasileiras de Origem Indígena, Clóvis Chiaradia conceitua a pamonha como vinda do Tupi Guarani “apá-mimõia”, que significa envolvido e cozido. Na descrição conta como um “bolo de milho verde, leite de coco, manteiga, canela, erva-doce, açúcar cozido nas folhas do próprio milho”.'
                },
                {
                    id: 9,
                    nome: 'Coxinha',
                    preco: 6.50,
                    src: 'https://receitinhas.com.br/wp-content/uploads/2017/12/coxinha-de-frango-com-queijo.jpg',
                    qnt: 0,
                    descricao: 'A coxinha é um salgado brasileiro, de origem paulista, também comum em Portugal, feito com massa de farinha de trigo e caldo de galinha, que envolve um recheio elaborado com carne temperada de frango, queijo, calabresa ou vários outros tipos de sabores.'
                },
                {
                    id: 10,
                    nome: 'Cachorro-Quente',
                    preco: 8.00,
                    src: 'https://static.itdg.com.br/images/1200-675/ac539e127fc4784c8606502714f3de96/357545-original.jpg',
                    qnt: 0,
                    descricao: 'Um cachorro-quente (também conhecido pelo anglicismo hot dog) é uma comida típica dos Estados Unidos em que se coloca salsicha dentro de um pão sovado.'
                }],

            sobremesa: [
                {
                    id: 11,
                    nome: 'Sorvete',
                    preco: 9.00,
                    src: 'https://midias.agazeta.com.br/2023/01/02/sorvete-3-cores-941224.png',
                    qnt: 0,
                    descricao: 'Sorvete ou gelado é uma sobremesa gelada à base de lacticínios como leite ou nata, à qual é adicionada fruta ou outros ingredientes e sabores. A maior parte contém açúcar, embora alguns sejam feitos com adoçantes.'
                },

                {
                    id: 12,
                    nome: 'Mousse de Maracujá',
                    preco: 7.50,
                    src: 'https://static.itdg.com.br/images/1200-630/e1ceeccaac52a138e4ab2f9a125b533b/mousse-de-maracuja.jpg',
                    qnt: 0,
                    descricao: 'Mousse de maracujá (em português: mousse de maracujá, às vezes escrito musse) é um tipo de mousse feito com maracujá da culinária brasileira.'
                },
                {
                    id: 13,
                    nome: 'Coockie',
                    preco: 4.50,
                    src: 'https://curitidoce.com.br/novo/wp-content/uploads/2020/11/Receita-Cookie-Foto-Guto-Souza-1.jpg',
                    qnt: 0,
                    descricao: 'O cookie pode ser classificado como um biscoito e um bolinho consistente. Ele é firme por fora e bem macio por dentro. Ah, e o tipo mais comum tem gotinhas de chocolate. E o legal é que dá pra soltar a criatividade na hora de preparar seu cookie favorito, deixando a receita do jeitinho que quiser.'
                },
                {
                    id: 14,
                    nome: 'Salada de Frutas',
                    preco: 9.50,
                    src: 'https://receitasdeminuto.com/wp-content/uploads/2019/01/saladadefrutas.jpg',
                    qnt: 0,
                    descricao: 'Salada de frutas é um prato que consiste de uma combinação de várias frutas picadas, temperado com açúcar, às vezes servidos em um líquido, seja em seus próprios sucos ou um licor. Quando servido como aperitivo ou como uma sobremesa, uma salada de frutas é conhecida como um coquetel de frutas.'
                },
                {
                    id: 15,
                    nome: 'Picolé',
                    preco: 6.90,
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHczsWuvhEJ3jk9Aemt1NeF3N9wDpU9MhN6A&usqp=CAU',
                    qnt: 0,
                    descricao: 'Um picolé ou gelado de gelo, é uma variedade de sorvete que consiste de um bloco doce congelado (que pode ser feito de suco de fruta ou outra bebida doce), ...'
            }],

            bebida: [
                {
                    id: 16,
                    nome: 'Refrigerante',
                    preco: 7.00,
                    src: 'https://s2.glbimg.com/GUda5oj9xkd_yQNyn36mDn9XJmo=/620x455/e.glbimg.com/og/ed/f/original/2018/08/17/beber-refrigerante-todos-os-dias-esta-te-matando.jpg',
                    qnt: 0,
                    descricao: 'O refrigerante é uma bebida que mistura corantes, conservantes, açúcar, aroma sintético de fruta e gás carbônico. Surgiu em Paris no ano de 1676, em uma empresa que misturou água, suco de limão e açúcar, época em que não haviam descoberto a água misturada ao gás carbônico.'
                },

                {
                    id: 17,
                    nome: 'Cerveja',
                    preco: 6.50,
                    src: 'https://s2.glbimg.com/u-X1shZodYHh_AZudo5rcxvM9Do=/0x0:1600x900/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/F/w/oHzuiAQOSuOODaXGr87A/cerveja-superprix.jpg',
                    qnt: 0,
                    descricao: 'Cerveja é uma bebida alcoólica carbonatada, produzida através da fermentação de materiais com amido, principalmente cereais maltados como a cevada e o trigo.'
                },
                {
                    id: 18,
                    nome: 'Aguá com Gás',
                    preco: 4.00,
                    src: 'https://www.institucional.europa.com.br/blog/wp-content/uploads/2020/07/IMG_1822.jpg',
                    qnt: 0,
                    descricao: 'Água gaseificada (ou água com gás) é água que contém dióxido de carbono (CO2) dissolvido, que é injetado artificialmente sob pressão ou decorrente de processos geológicos naturais. A carbonação causa a formação de pequenas bolhas, o que confere à água a qualidade de efervescente.'
                },
                {
                    id: 19,
                    nome: 'Suco',
                    preco: 5.50,
                    src: 'https://media.gazetadopovo.com.br/viver-bem/2019/06/suco-fruta-acucar-risco-morte-600x400-f107f9a0.jpg',
                    qnt: 0,
                    descricao: 'Um suco ou sumo é uma bebida produzida do líquido extraído de frutas.'
                },
                {
                    id: 20,
                    nome: 'Vinho',
                    preco: 12.00,
                    src: 'https://www.divinho.com.br/blog/wp-content/uploads/2020/11/Vinho-Tinto.jpg',
                    qnt: 0,
                    descricao: 'O vinho tinto é um vinho tranquilo de cor vermelha e que possui níveis consideráveis de tanino. São elaborados necessariamente com castas tintas.'
                }],
        }
    }),

    actions: {
        add(item, referenciaObjeto) {
            this.carrinho += item.preco
            this.carrinhoCompras.push(item)
            referenciaObjeto.find(refeicao => {
                if (refeicao.id === item.id) {
                    return item.qnt += 1
                }
            })
        },

        remove(item, referenciaObjeto) {
            const index = this.carrinhoCompras.findIndex( carrinho => carrinho.id == item.id)
            if(index !== -1){
                this.carrinhoCompras.splice(index, 1)
            }
            if (item.qnt > 0) {
                this.carrinho -= item.preco
                if (this.carrinho >= 0) {
                    referenciaObjeto.find(refeicao => {
                        if (refeicao.id === item.id) {
                            return item.qnt -= 1
                        }
                    })
                } else {
                    this.carrinho = 0
                }
            }
        }
    }

})
