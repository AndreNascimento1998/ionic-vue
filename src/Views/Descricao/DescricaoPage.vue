
<template>
    <ion-card class="alinhament-centro">
        <ion-card-header>
            <ion-card-title>{{ usuario.nome }}</ion-card-title>
            <ion-card-subtitle>{{ usuario.email }}</ion-card-subtitle>
        </ion-card-header>
        <ion-row>
            <ion-col size="2" offset="3">
                <ion-card-content>
                    mora no estado {{ usuario.estado }}
                </ion-card-content>
            </ion-col>
            <ion-col size="2">
                <ion-card-content>
                    telefone: {{ usuario.telefone }}
                </ion-card-content>
            </ion-col>
            <ion-col size="2">
                <ion-card-content>
                    na rua {{ usuario.rua }}
                </ion-card-content>
            </ion-col>
        </ion-row>
        <ion-button size="small" @click="voltarPagina">Voltar</ion-button>
    </ion-card>
</template>


<script setup>
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol } from '@ionic/vue';
import { useGlobal } from '@/stores'
import { useRoute } from 'vue-router'
import router from '@/router';

const store = useGlobal()

const route = useRoute()
const userId = route.params.id

const usuario = store.users.find(user => user.id == userId)

function voltarPagina() {
    router.push('/lista')
}

</script>

<style scoped>
.alinhament-centro{
    text-align: center;
    justify-content: center;
    align-items: center;
}
</style>