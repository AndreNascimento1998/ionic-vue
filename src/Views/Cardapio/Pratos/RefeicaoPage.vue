<template>
    <ion-row>
        <ion-col size="10" offset="1">
            <h2>Pratos de entrada e pratos de refeição</h2>
            <ion-list>
                <ion-item v-for="item in refeicao" :key="item.id">
                    <div class="linha">
                        <ion-img :src="item.src" class="tamanho" @click="showMessage(item)"/>
                        <h4 class="margem-esquerda" @click="showMessage(item)">{{ item.nome }}</h4>
                    </div>
                    <ion-col>
                    </ion-col>
                    <ion-button size="small" @click="adicionar(item)">Adicionar</ion-button>
                    <ion-button class="margem-direita" size="small" @click="remover(item)">Remover</ion-button>
                    <h5 class="margem-direita">Item Selecionado: {{ item.qnt }}</h5>
                    <h4 class="margem-final">Preço: R$ {{ item.preco.toFixed(2) }}</h4>
                </ion-item>
            </ion-list>
            <h2 class="alinhamento-centro">Total: {{ globalStore.carrinho.toFixed(2) }}</h2>
            <ion-button class="alinhamento-direita" size="small" @click="() => router.push('/cardapio')">Voltar</ion-button>
        </ion-col>
    </ion-row>
</template>

<script setup>
import router from "@/router";
import { useGlobal } from "@/stores";
import { toastController, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol,IonList, IonImg, IonItem} from '@ionic/vue';
import { computed, ref } from "vue";

const globalStore = useGlobal()

const refeicao = computed(() => globalStore.alimento.refeicao)

function adicionar(item) {
    globalStore.add(item, globalStore.alimento.refeicao)
}

function remover(item) {
    globalStore.remove(item, globalStore.alimento.refeicao)
}

async function showMessage(user) {
    const toast = await toastController.create({
        message: `${user.descricao}`,
        duration: 4000
    });
    toast.present();
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