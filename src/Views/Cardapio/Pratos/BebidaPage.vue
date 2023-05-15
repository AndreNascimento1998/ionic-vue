<template>
    <ion-row>
        <ion-col size="10" offset="1">
            <ion-card-header>
                    <ion-card-title>Pratos de entrada e pratos de refeição</ion-card-title>
                </ion-card-header>
            <ion-list>
                <ion-item v-for="item in bebida" :key="item.id">
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

const bebida = computed(() => globalStore.alimento.bebida)

function adicionar(item) {
    globalStore.add(item, globalStore.alimento.bebida)
}

function remover(item) {
    globalStore.remove(item, globalStore.alimento.bebida)
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

ion-button, :host(.button-solid) {
    --background: var(--ion-color-primary, black);
    --color: var(--ion-color-primary-contrast, #fff);
}
</style>