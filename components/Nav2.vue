<template>
    <header>
        <nuxt-link to="/" class="logo">Jaakit</nuxt-link>
        <nav>
            <ul>
                <!-- <li><nuxt-link to="/">Starting Page</nuxt-link></li> -->
                <li><nuxt-link to="/products">Products</nuxt-link></li>
                <li><nuxt-link to="/recipes">Recipes</nuxt-link></li>
                <li><nuxt-link to="/profiles">Profiles</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
            </ul>
        </nav>

    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
    background: #96cdad;
    display: grid;
    grid-template-columns: repeat(2, auto);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 6px 2px;
    margin-bottom: 1rem;
    vertical-align: center;
}

.logo, li a {
    padding: 1em 2em;
    display:block;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    color:#676d66;
    font-size: 0.9em;
}
nav {
    justify-self: right;
}
ul {
    list-style-type: none;
}
li {
    display: inline;
}
li a {
    padding: 1em 2em;
    display: inline-block;
    background: rgba(255, 255, 255, 0.042);
}
li a:hover {
    padding: 1em 2em;
    display: inline-block;
    background: rgba(0, 0, 0, 0.042);
}

</style>
