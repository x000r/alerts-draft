<template>
    <div>
        <h1>Error</h1>
        <p>{{ ErrorText }}</p>
    </div>
</template>

<script>
export default {
    data (){
        return{
            ErrorText: 'Wrong user ID'
        }
    }
}
</script>

<style>

</style>