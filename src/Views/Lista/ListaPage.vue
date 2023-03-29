<template>
    <div>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Lista de usuários</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-row>
            <ion-col size="6" offset="3">
                <ion-list>
                    <ion-item v-for="user in store.users" :key="user.id" @click="showMessage(user)">
                        <ion-label>{{ user.nome }}</ion-label>
                        <ion-label>{{ user.email }}</ion-label>
                        <ion-button size="small" @click="descricao(user)">Detalhes</ion-button>
                    </ion-item>
                </ion-list>
            </ion-col>
        </ion-row>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import {
    IonButton,
    IonCol,
    IonRow,
    IonList,
    IonItem,
    IonLabel,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonAvatar,
    IonConten,
    IonListHeader,
    IonToast,
    toastController
} from '@ionic/vue';
import { useGlobal } from '@/stores';
import router from '@/router';
import { Toast } from '@capacitor/toast'

const store = useGlobal()
const users = ref([
    { id: 1, name: 'João', email: 'joao@example.com' },
    { id: 2, name: 'Maria', email: 'maria@example.com' },
    { id: 3, name: 'Pedro', email: 'pedro@example.com' },
])

function descricao(usuario) {
    router.push(`/descricao/${usuario.id}`)
}

async function showMessage(user) {
    const toast = await toastController.create({
        message: `Você clicou em ${user.nome}
        seu telefone é ${user.telefone},
        clique em "detalhes" para obter mais informação
        `,
        duration: 4000
    });
    toast.present();
}

</script>

<style scoped> ion-list {
     cursor: pointer;
 }

 ion-item {
     cursor: pointer;
 }
</style>