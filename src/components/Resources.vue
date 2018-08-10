<template>
    <b-list-group>
        <div v-for="resource in this.resourceManager.resources">
            <div v-if="resource.active">
                <resource :resource-data="resource"/>
            </div>
        </div>
    </b-list-group>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Resources",
        computed: {
            ...mapState("resources", [
                "resourceManager"
            ])
        }
    }
</script>

<style scoped>

</style>