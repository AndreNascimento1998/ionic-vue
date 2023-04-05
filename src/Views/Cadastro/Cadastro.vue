<template>
    <ion-page>
        <ion-row>
            <ion-col size="8" offset="2">
                <ion-button @click="showAlert" expand="block">Informe seus dados</ion-button>
                <ion-alert
                    header="Bem-vindo a pagina de cadastro !"
                ></ion-alert>
            </ion-col>
        </ion-row>
    </ion-page>
  </template>
  
  <script setup>
    import router from '@/router';
    import { useGlobal } from '@/stores';
    import { IonRow, IonCol ,IonButton,IonPage, IonAlert, AlertButton, AlertInput, alertController } from '@ionic/vue';
    import { ref } from 'vue';

    const store = useGlobal()

    async function showAlert() {
    const alert = await alertController.create({
        header: 'Informe seus dados',
        inputs: [
            {
                name: 'email',
                type: 'email',
                placeholder: 'Email'
            },
            {
                name: 'senha',
                type: 'sen',
                placeholder: 'Senha'
            },
            {
                name: 'nome',
                type: 'nom',
                placeholder: 'Nome'
            },
            {
                name: 'rua',
                type: 'ru',
                placeholder: 'Rua'
            },
            {
                name: 'estado',
                type: 'est',
                placeholder: 'Estado'
            },
            {
                name: 'telefone',
                type: 'tel',
                placeholder: 'Telefone'
            }
        ],
        buttons: [
            {
                text: 'Cancelar',
                role: 'cancel'
            },
            {
                text: 'Enviar',
                handler: (data) => {
                   /*  console.log('Email: ', data.email);
                    console.log('Senha: ', data.senha);
                    console.log('Nome: ', data.nome);
                    console.log('Rua: ', data.rua);
                    console.log('Estado: ', data.estado);
                    console.log('Telefone: ', data.telefone); */
                    store.users.push({
                        id: store.users.length + 1,
                        email: data.email,
                        senha: data.senha,
                        nome: data.nome,
                        rua: data.rua,
                        estado: data.estado,
                        telefone: data.telefone
                    })
                    console.log(store.users)
                    router.push('/login')
                }
            }
        ]
    });
    await alert.present();
}

  </script>
  