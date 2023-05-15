<template>
    <ion-menu content-id="main-content" side="start" type="overlay">
        <ion-header class="menu-custom">
            <ion-toolbar class="menu-2">
                <ion-title >Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list v-for="(item, index) in itensRenderizado" :key="index">
                <ion-item class="ponteiro" @click="closeMenu(item)">
                    <ion-icon slot="start" :icon="item.icon" />
                    <ion-label>{{ item.nome }}</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>

    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button />
            </ion-buttons>
            <ion-title class="mid">André Restaurante</ion-title>
            <ion-title class="rigth">Carrinho: R$ {{ globalStore.carrinho.toFixed(2) }}</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content id="main-content">
    </ion-content>
    <router-view />
</template>
  
<script setup>
import router from "@/router";
import { useGlobal } from "@/stores";
import { IonButtons ,IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonIcon } from "@ionic/vue";
import { home, people, logInOutline } from "ionicons/icons";
import {  reactive } from "vue";

const globalStore = useGlobal()
const itensRenderizado = reactive([
    {
        nome: 'Home',
        rota: '/',
        icon: home,
    },
    {
        nome: 'Cardapio',
        rota: '/cardapio',
        icon: people,
    },
    {
        nome: 'Login',
        rota: '/login',
        icon: logInOutline,
    },
])

function closeMenu(item) {
    router.push(`${item.rota}`)
}
</script>
  
<style scoped>
.ponteiro {
    cursor: pointer;
}

.cor {
    background-color: rgba(0, 0, 0, 0.5);
}

.menu-custom {
  --ion-background-color: #201e9c;
}
.menu-custom ion-title {
  --color: #FFFFFF; 
}

.mid{
    text-align: center !important;
}

.rigth {
    text-align: end !important;
}

ion-toolbar, :host {
    --background: var(--ion-toolbar-background, var(--ion-background-color, #201e9c)) !important;
    --color: var(--ion-toolbar-color, var(--ion-text-color, white));
    --border-color: var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #000000)));
    --padding-top: 0;
    --padding-bottom: 0;
    --padding-start: 0;
    --padding-end: 0;
    --min-height: 56px;
}

</style>
  