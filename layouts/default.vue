<template>
  <div>

    <!-- <Nav1/> -->
    <BulmaNav class="navbar"/>
    <!-- <Nav2/> -->
     <nuxt class="content"/>

  </div>
</template>

<script>
// import Nav1 from "@/components/Nav1";
// import Nav2 from "@/components/Nav2";
import BulmaNav from "@/components/BulmaNav";
export default {
  components: {
    // Nav1, 
    // Nav2,
    BulmaNav
  }
};
</script>


<style>

.content {
  margin-top: 3rem;
}


html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-family: "Montserrat";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


</style>
