<template>
    <div id="app">
        <resources/>
        <b-button variant="success" size="sm" @click="tempClick">TEST</b-button>
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            tempClick(){
                console.log("TEST");
                this.$store.commit("resources/toggleAllResourceActivity");
            }
        }
    }
</script>
