<template>
  <div class="profile">Profile ID: {{ id }}</div>
</template>

<script>
export default {
    asyncData(context) {
        console.log(context.params.id);

        return  {
            id : context.params.id
        }
    }
};
</script>

<style>
</style>
