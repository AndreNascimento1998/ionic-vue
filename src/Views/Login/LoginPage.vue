<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Login</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            
                <ion-row class="margin-top">
                    <ion-col size-md="3" offset-md="4" size="8" offset="2">
                        <ion-item >
                            <ion-label position="floating">Email</ion-label>
                            <ion-input v-model="email" class="ion-input-outlined " type="email"></ion-input>
                        </ion-item>
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col size-md="3" offset-md="4" size="8" offset="2">
                        <ion-item >
                            <ion-label position="floating">Senha</ion-label>
                            <ion-input v-model="senha" type="password"></ion-input>
                        </ion-item>
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col size-md="3" offset-md="4" size="8" offset="2">
                        <ion-button @click.prevent="valida" expand="block" color="primary">Login</ion-button>
                    </ion-col>
                </ion-row>
            
        </ion-content>
    </ion-page>
</template>
  
<script setup>
import router from '@/router';
import { useGlobal } from '@/stores';
import '@ionic/core/css/ionic.bundle.css';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { computed, ref } from 'vue';


const store = useGlobal()
const email = ref('')
const senha = ref('')

const users = computed(() => store.users)

function valida(){
    debugger
    const temp = users.value
    const filtraId = temp.filter( (user) => email.value == user.email)
    if(filtraId[0]?.senha == senha.value){
        router.push('/lista')
    }else {
        alert('Senha ou email inválidos')
    }
}

</script>

<style scoped>
.margin-top{
    margin-top: 30px;
}

.altura{
    height: 50%;
}
</style>