<template>
    <ion-row>
        <ion-col size="8" offset="2">
            <ion-card class="alinhamento-centro">
                <ion-card-header>
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
            </ion-card>
        </ion-col>
    </ion-row>
</template>

<script setup>
import router from '@/router';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol } from '@ionic/vue';

</script>

<style scoped>
.alinhamento-centro{
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: rgb(108, 144, 211);
}

.corSubtitle {
    color: white !important;
}
</style>