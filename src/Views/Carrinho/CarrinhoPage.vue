<template>
    <ion-row v-if="!carrinho.length <= 0 || !promocao">
        <ion-col size="10" offset="1">
            <h2>Seus itens</h2>
            <ion-list>
                <ion-item v-for="item in carrinho" :key="item.id">
                    <div class="linha">
                        <ion-img :src="item.src" class="tamanho" @click="showMessage(item)"/>
                        <h4 class="margem-esquerda" @click="showMessage(item)">{{ item.nome }}</h4>
                    </div>
                    <ion-col>
                    </ion-col>
                    <ion-button class="margem-direita" size="small" @click="remover(item)">Remover</ion-button>
                    <h4 class="margem-final">Preço: R$ {{ item.preco.toFixed(2) }}</h4>
                </ion-item>
            </ion-list>
            <h2>Prato do dia (Promocação): {{ !promocao ? 'Ativa' : 'Invativa' }}</h2>
            <h2 class="alinhamento-centro">Total: {{ globalStore.carrinho.toFixed(2) }}</h2>
            <ion-button class="alinhamento-direita" size="small" @click="() => router.push('/cardapio')">Voltar</ion-button>
        </ion-col>
    </ion-row>
    <ion-row v-else>
        <ion-col size="10" offset="1">
            <h1>Lista vazia :(</h1>
            <ion-button class="alinhamento-direita" size="small" @click="() => router.push('/cardapio')">Voltar</ion-button>
        </ion-col>
    </ion-row>
</template>

<script setup>
import { useGlobal } from '@/stores';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol } from '@ionic/vue';
import { computed, onMounted } from 'vue';
import router from '@/router';

const globalStore = useGlobal()

const promocao = computed(() => globalStore.promocaoUsada)
const carrinho = computed(() => globalStore.carrinhoCompras)

onMounted(() => {
    globalStore.carrinhoCompras.forEach(item => {
        debugger
        const indices = item.id
        const eu = globalStore.carrinhoCompras.filter(ite => ite.id )
        console.log(indices)
    })
})

function remover(item) {
    const index = globalStore.carrinhoCompras.findIndex( carrinho => carrinho.id === item.id)

    if(index !== -1){
        globalStore.carrinhoCompras.splice(index, 1)
        globalStore.carrinho -= item.preco
    }
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
}

.margem-esquerda{
    margin-left: 20px;
    cursor: pointer;
}
</style>