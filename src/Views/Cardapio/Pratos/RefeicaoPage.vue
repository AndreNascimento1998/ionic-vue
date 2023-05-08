<template>
    <ion-row>
        <ion-col size="10" offset="1">
            <h2>Pratos de entrada e pratos de refeição</h2>
            <ion-list>
                <ion-item >
                    <div class="linha">
                        <ion-img src="https://pubimg.band.uol.com.br/files/2d01253c8d13c7582a11.png" class="tamanho"/>
                        <h4 class="margem-esquerda">Estrogonofe de carne</h4>
                    </div>
                </ion-item>
                
                <ion-item >
                    <div class="linha">
                        <ion-img src="https://s2.glbimg.com/ajGTiNj2FxByx96WP-01zz-wW4k=/e.glbimg.com/og/ed/f/original/2021/03/16/galinhada_camil.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Galinhada</h4>
                    </div>
                </ion-item>
    
                <ion-item >
                    <div class="linha">
                        <ion-img src="https://i0.statig.com.br/bancodeimagens/2m/x8/6n/2mx86nv7kxv8cybegti6zvw0t.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Feijoada</h4>
                    </div>
                </ion-item>
    
                <ion-item >
                    <div class="linha">
                        <ion-img src="https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg" class="tamanho"/>
                        <h4 class="margem-esquerda">Feijão tropeiro</h4>
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