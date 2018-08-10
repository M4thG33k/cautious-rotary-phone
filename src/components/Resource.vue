<template>
    <b-list-group-item>
        <strong class="text-danger">{{this.resourceData.name}}</strong>
    </b-list-group-item>
</template>

<script>
    export default {
        name: "Resource",
        props: ["resourceData"]
    }
</script>

<style scoped>

</style>