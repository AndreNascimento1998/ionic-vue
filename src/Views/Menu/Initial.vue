<template>
    <ion-row>
        <ion-col size="8" offset="2">

            <ion-card>
                <ion-card-header>
                    <ion-card-title>Promoção do Dia</ion-card-title>
                    <ion-card-subtitle>Confira os pratos promocionais</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                        <ion-item>
                            <ion-thumbnail slot="start">
                                <img alt="Silhouette of mountains"
                                    src="https://static.itdg.com.br/images/1200-675/ac539e127fc4784c8606502714f3de96/357545-original.jpg" />
                            </ion-thumbnail>
                            <ion-label>Cachorro-quente</ion-label>
                        </ion-item>

                        <ion-item>
                            <ion-thumbnail slot="start">
                                <img alt="Silhouette of mountains"
                                    src="https://www.nutribrasalimentos.com.br/wp-content/uploads/2021/09/thumb-receita.jpg" />
                            </ion-thumbnail>
                            <ion-label>Arroz com suan</ion-label>
                        </ion-item>

                        <ion-item>
                            <ion-thumbnail slot="start">
                                <img alt="Silhouette of mountains"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHczsWuvhEJ3jk9Aemt1NeF3N9wDpU9MhN6A&usqp=CAU" />
                            </ion-thumbnail>
                            <ion-label>Picolé de uva</ion-label>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-thumbnail slot="start">
                                <img alt="Silhouette of mountains"
                                    src="https://www.divinho.com.br/blog/wp-content/uploads/2020/11/Vinho-Tinto.jpg" />
                            </ion-thumbnail>
                            <ion-label>Vinho tinto</ion-label>
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>
        </ion-col>
    </ion-row>
</template>

<script setup>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';

</script>