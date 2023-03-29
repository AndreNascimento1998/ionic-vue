<template>
    <h2>LISTA</h2>
    <router-link to="/">
        <button>Voltar a Tela Login</button>
    </router-link>
    <p>
        {{ count }}
    </p>
    <button @click="store.increment">Aumentar</button>
    <button @click="store.decrement">Descrementar</button>
</template>

<script setup>
import { useGlobal } from '@/stores';
import { computed } from 'vue'

const store = useGlobal()
const count = computed(() => store.count)

</script>