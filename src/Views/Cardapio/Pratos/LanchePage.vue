<template>
    <ion-row>
        <ion-col size="10" offset="1">
            <h2>Lanches</h2>
            <ion-list>
                <ion-item >
                    <div class="linha">
                        <ion-img src="https://conteudo.imguol.com.br/c/entretenimento/a0/2018/02/26/batata-frita-1519671488107_v2_4x3.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Batata Frita</h4>
                    </div>
                </ion-item>
                
                <ion-item >
                    <div class="linha">
                        <ion-img src="https://img.cybercook.com.br/imagens/receitas/789/pizza-brotinho-de-pizzaria.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Brotinho</h4>
                    </div>
                </ion-item>

                <ion-item >
                    <div class="linha">
                        <ion-img src="https://www.receiteria.com.br/wp-content/uploads/pamonha-doce-de-milho-01.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Pamonha</h4>
                    </div>
                </ion-item>

                <ion-item >
                    <div class="linha">
                        <ion-img src="https://receitinhas.com.br/wp-content/uploads/2017/12/coxinha-de-frango-com-queijo.jpg" class="tamanho"/>
                        <h4 class="margem-esquerda">Coxinha</h4>
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