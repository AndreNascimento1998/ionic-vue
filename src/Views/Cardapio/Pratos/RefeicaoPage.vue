<template>
    <ion-row>
        <ion-col size="10" offset="1">
            <h2>Pratos de entrada e pratos de refeição</h2>
            <ion-list>
                <ion-item v-for="item in refeicao" :key="item.id">
                    <div class="linha">
                        <ion-img :src="item.src" class="tamanho"/>
                        <h4 class="margem-esquerda">{{ item.nome }}</h4>
                    </div>
                    <ion-col>
                    </ion-col>
                    <ion-button size="small" @click="adicionar(item)">Adicionar</ion-button>
                    <ion-button class="margem-direita" size="small" @click="remover(item)">Remover</ion-button>
                    <h5 class="margem-direita">Itens Selecionada: {{ item.qnt }}</h5>
                    <h4 class="margem-final">Preço: R$ {{ item.preco.toFixed(2) }}</h4>
                </ion-item>
            </ion-list>
            <ion-button class="alinhamento-direita" size="small" @click="() => router.push('/cardapio')">Voltar</ion-button>
        </ion-col>
    </ion-row>
</template>

<script setup>
import router from "@/router";
import { useGlobal } from "@/stores";
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol,IonList, IonImg, IonItem} from '@ionic/vue';
import { computed, ref } from "vue";

let soma = ref(0)

const globalStore = useGlobal()

const refeicao = computed(() => globalStore.refeicao)

function adicionar(item) {
    soma.value += item.preco
    globalStore.refeicao.find( refeicao => {
        if(refeicao.id === item.id){
            return item.qnt += 1
        }
    })
    console.log(soma.value)
}

function remover(item) {
    if(item.qnt > 0){
        soma.value -= item.preco
        if(soma.value >= 0){
            console.log(soma.value)
            globalStore.refeicao.find( refeicao => {
            if(refeicao.id === item.id){
                return item.qnt -= 1
            }
        })
        }else {
            soma.value = 0
            console.log(soma.value)
        }
    }
}

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

.margem-direita {
    margin-right: 20px;
}

.margem-final {
    align-items: center !important;
}

.margem-esquerda{
    margin-left: 20px;
}
</style>