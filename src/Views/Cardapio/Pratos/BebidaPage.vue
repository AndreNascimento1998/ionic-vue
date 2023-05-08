<template>
    <ion-row>
        <ion-col size="10" offset="1">
            <h2>Bebidas</h2>
            <ion-list>
                <ion-item >
                    <div class="linha">
                        <ion-img src="https://s2.glbimg.com/GUda5oj9xkd_yQNyn36mDn9XJmo=/620x455/e.glbimg.com/og/ed/f/original/2018/08/17/beber-refrigerante-todos-os-dias-esta-te-matando.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Refrigerante</h4>
                    </div>
                </ion-item>
                
                <ion-item >
                    <div class="linha">
                        <ion-img src="https://s2.glbimg.com/u-X1shZodYHh_AZudo5rcxvM9Do=/0x0:1600x900/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/F/w/oHzuiAQOSuOODaXGr87A/cerveja-superprix.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Cerveja</h4>
                    </div>
                </ion-item>

                <ion-item >
                    <div class="linha">
                        <ion-img src="https://www.institucional.europa.com.br/blog/wp-content/uploads/2020/07/IMG_1822.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Aguá com gás</h4>
                    </div>
                </ion-item>

                <ion-item >
                    <div class="linha">
                        <ion-img src="https://media.gazetadopovo.com.br/viver-bem/2019/06/suco-fruta-acucar-risco-morte-600x400-f107f9a0.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Suco</h4>
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