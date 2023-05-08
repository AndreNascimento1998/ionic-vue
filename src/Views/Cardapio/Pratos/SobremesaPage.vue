<template>
    <ion-row>
        <ion-col size="10" offset="1">
            <h2>Sobremesas</h2>
            <ion-list>
                <ion-item >
                    <div class="linha">
                        <ion-img src="https://midias.agazeta.com.br/2023/01/02/sorvete-3-cores-941224.png" class="tamanho"/>
                        <h4 class="margem-esquerda">Sorvete</h4>
                    </div>
                </ion-item>
                
                <ion-item >
                    <div class="linha">
                        <ion-img src="https://static.itdg.com.br/images/1200-630/e1ceeccaac52a138e4ab2f9a125b533b/mousse-de-maracuja.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Mousse de Maracujá</h4>
                    </div>
                </ion-item>

                <ion-item >
                    <div class="linha">
                        <ion-img src="https://curitidoce.com.br/novo/wp-content/uploads/2020/11/Receita-Cookie-Foto-Guto-Souza-1.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Coockie</h4>
                    </div>
                </ion-item>

                <ion-item >
                    <div class="linha">
                        <ion-img src="https://receitasdeminuto.com/wp-content/uploads/2019/01/saladadefrutas.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Salada de frutas</h4>
                    </div>
                </ion-item>
            </ion-list>
            <ion-button class="alinhamento-direita" size="small" @click="() => router.push('/cardapio')">Voltar</ion-button>
        </ion-col>
    </ion-row>
</template>

<script setup>
import router from "@/router";
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol,IonList, IonImg, IonItem} from '@ionic/vue';

</script>

<style>
.alinhamento-centro {
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: rgb(207, 207, 53);
}

.tamanho {
    width: 80px;
}

.linha {
    display: flex !important;
    padding: 8px;
}

.margem-esquerda{
    margin-left: 20px;
}
</style>