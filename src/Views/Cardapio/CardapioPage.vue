<template>
    <ion-row>
        <ion-col size="8" offset="2">
            <ion-card class="alinhamento-centro">
                <ion-card-header color="primary">
                    <ion-card-title>Cardápio</ion-card-title>
                    <ion-card-subtitle class="corSubtitle">Escolha os itens, aqui estão as categorias</ion-card-subtitle>
                </ion-card-header>
                <ion-row>
                    <ion-col size="2" offset="2">
                        <ion-card-content>
                        <ion-button size="small" @click="() => router.push('/lanche')">
                                lanches
                        </ion-button>
                        </ion-card-content>
                    </ion-col>
                    <ion-col size="2">
                        <ion-card-content>
                        <ion-button size="small" @click="() => router.push('/refeicao')">
                                Refeições
                        </ion-button>
                        </ion-card-content>
                    </ion-col>
                    <ion-col size="2">
                        <ion-card-content>
                        <ion-button size="small" @click="() => router.push('/sobremesa')">
                                Sobremesas
                        </ion-button>
                        </ion-card-content>
                    </ion-col>
                    <ion-col size="2">
                        <ion-card-content>
                        <ion-button size="small" @click="() => router.push('/bebida')">
                                Bebidas
                        </ion-button>
                        </ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-button size="small" @click="() => router.push('/')">Voltar</ion-button>
                <ion-button size="small" @click="limpaCarrinho()">Limpar Carrinho</ion-button>
                <ion-button size="small" @click="(() => router.push('/carrinho'))">Ver carrinho</ion-button>
            </ion-card>
        </ion-col>
    </ion-row>
</template>

<script setup>
import router from '@/router';
import { useGlobal } from '@/stores';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol } from '@ionic/vue';

const globalStore = useGlobal()

function limpaCarrinho() {
    globalStore.alimento.bebida.forEach(item => {
        item.qnt = 0
    })
    globalStore.alimento.lanche.forEach(item => {
        item.qnt = 0
    })
    globalStore.alimento.refeicao.forEach(item => {
        item.qnt = 0
    })
    globalStore.alimento.sobremesa.forEach(item => {
        item.qnt = 0
    })

    globalStore.carrinhoCompras = []
    if(!globalStore.promocaoUsada){
        globalStore.carrinho = globalStore.totalPromocao
    }else {
        globalStore.carrinho = 0
    }
    
}

</script>

<style scoped>
.alinhamento-centro{
    text-align: center;
    justify-content: center;
    align-items: center;
}

ion-button, :host(.button-solid) {
    --background: var(--ion-color-primary, black);
    --color: var(--ion-color-primary-contrast, #fff);
}
</style>