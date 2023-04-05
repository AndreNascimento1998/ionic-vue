<template>
    <div>
        <ion-row v-if="logadoLista">
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
        <ion-row v-else>
            <ion-col size="6" offset="3">
                <h1>Bem-vindo a nossa página logue ou cadastra-se para ver a lista !</h1>
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

const logadoLista = computed(() => store.logado)

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