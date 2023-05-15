<template>
    <ion-row class="cor-fundo">
        <ion-col size="8" offset="2">
            <ion-card>
                <ion-card-header >
                    <ion-card-title>Promoção do Dia</ion-card-title>
                    <ion-card-subtitle>25% de desconto no combo</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-row>
                        <ion-col size="10" offset="1">
                            <ion-list >
                                <ion-item v-for="(item, index) in globalStore.promocao" :key="index" @click="showMessage(item)" >
                                    <div class="linha">
                                        <ion-img :src="item.src" class="tamanho" />
                                        <h4 class="margem-esquerda">{{ item.nome }}</h4>
                                    </div>
                                    <ion-col>
                                    </ion-col>
                                    <del class="margem-final">Preço: R$ {{ item.preco.toFixed(2) }}</del>
                                </ion-item>
                            </ion-list>
                            <h2 class="alinhamento-centro">Preço com desconto: R$ {{ globalStore.totalPromocao.toFixed(2) }}</h2>
                                <ion-button v-if="globalStore.promocaoUsada" class="alinhamento-direita" size="small" @click="adicionar()"
                                >Adicionar ao carrinho</ion-button>
                                <ion-button v-if="!globalStore.promocaoUsada" class="alinhamento-direita" size="small" @click="remover()"
                                >Remover a promoção do carrinho</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-card-content>
            </ion-card>
        </ion-col>
    </ion-row>
</template>

<script setup>
import { useGlobal } from '@/stores';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, toastController } from '@ionic/vue';
import { onMounted, reactive, ref } from 'vue';
import router from '@/router';

const globalStore = useGlobal()

onMounted(async () => {
    if(!globalStore.cardapioUsada){
        globalStore.promocao = cardapioDia()
        somaTotal()
    }
})

async function showMessage(user) {
    const toast = await toastController.create({
        message: `${user.descricao}`,
        duration: 4000
    });
    toast.present();
}

function somaTotal() {
    const bebida = globalStore.promocao.bebida.preco
    const lanche = globalStore.promocao.lanche.preco
    const sobremesa = globalStore.promocao.sobremesa.preco
    const refeicao = globalStore.promocao.refeicao.preco

    const total = bebida + lanche + sobremesa + refeicao
    const result = total * 0.25
    globalStore.totalPromocao = total - result
}

function remover() {
    globalStore.carrinho -= globalStore.totalPromocao
    globalStore.promocaoUsada = true
}

function adicionar() {
    globalStore.carrinho += globalStore.totalPromocao
    globalStore.promocaoUsada = false
}

function cardapioDia() {
    let numero = []
    for (let c = 0; c < 4; c++) {
        numero[c] = getRandomInt(6)
    }
    globalStore.cardapioUsada = true
    return {
            refeicao: globalStore.alimento.refeicao[numero[0]],
            lanche: globalStore.alimento.lanche[numero[1]],
            sobremesa: globalStore.alimento.sobremesa[numero[2]],
            bebida: globalStore.alimento.bebida[numero[3]]
    }
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
</script>

<style scoped>
.alinhamento-centro {
    text-align: end;
}

.tamanho {
    width: 80px;
    cursor: pointer;
}

.linha {
    display: flex !important;
    padding: 8px;
}

.margem-direita {
    margin-right: 20px;
}

.margem-final {
    align-items: center !important;
    color: red;
}

.margem-esquerda{
    margin-left: 20px;
    cursor: pointer;
}

ion-card-header, :host {
    --background: transparent;
    --color: white;
    display: block;
    position: relative;
    --background: #201e9c;
    color: var(--color);
}

ion-card-title, :host {
    --color: #ffffff;
    margin: 0px;
    padding: 0px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
}

ion-card-subtitle, :host {
    --color: var(--ion-color-step-550, #c7c6ce);
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    font-weight: 500;
}

ion-button, :host(.button-solid) {
    --background: var(--ion-color-primary, black);
    --color: var(--ion-color-primary-contrast, #fff);
}

</style>