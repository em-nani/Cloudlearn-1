<template>
  <div>
<<<<<<< HEAD
    <h1 class="statement">Progress Report. Check back for live updates</h1>
=======
    <h1 class="statement">Progress Report. Check back tomorrow, for a live update soon</h1>
>>>>>>> 4fc8b77d8cc95f23814afcf6ac2c7dd847b99445
    <p></p>
    <p class="bodytext">
      
    </p>
    <nuxt-link to="/" class="callToAction">Go back</nuxt-link>
  </div>
</template>

<script>
const axios = require('axios'); 
export default {
  asyncData ({ params }) {
    return axios.get('http://localhost:3000/status.json')
    .then((res) => {
      return {
        statusUpdate: res.data.statusUpdate,
        statusDate: res.data.statusDate
      }
    })
  }
}
</script>

<style>
</style>
