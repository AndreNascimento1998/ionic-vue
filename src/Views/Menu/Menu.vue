<template>
    <ion-menu content-id="main-content" side="start" type="overlay">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Menu</ion-title>
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
            <ion-title>André Restaurante</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content id="main-content">
    </ion-content>
    <router-view />
</template>
  
<script setup>
import router from "@/router";
import { IonButtons ,IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonIcon } from "@ionic/vue";
import { home, people, logInOutline } from "ionicons/icons";
import {  reactive } from "vue";

const itensRenderizado = reactive([
    {
        nome: 'Home',
        rota: '/inicial',
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
</style>
  