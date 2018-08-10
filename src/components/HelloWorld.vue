<template>
    <div>
        {{JSON.stringify(this.activeResources)}}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed: {
            ...mapGetters("resources",[
                "activeResources"
            ])
        }
    }
</script>
