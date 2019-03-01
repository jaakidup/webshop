<template>
    <header>
        <nuxt-link to="/" class="logo">Jaakit</nuxt-link>
        <nav>
            <ul>
                <li><nuxt-link to="/">Starting Page</nuxt-link></li>
                <li><nuxt-link to="/recipes">Recipes</nuxt-link></li>
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
    background: rgb(91, 231, 150);
    display: grid;
    grid-template-columns: repeat(2, auto);
}

.logo, li a {
    padding: 1em 2em;
    display:block;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    color:white;
    font-size: .9em;
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
