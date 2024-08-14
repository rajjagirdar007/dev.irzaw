<template>
<div class="header">
    <div class="logo" @click="this.$router.go('/')">irzaw</div>
<!--    <ul class="links">
        <li>PURSUITS</li>
        <li>EXPERTISE</li>
        <li>PEOPLE</li>
        <li>OFFICES</li>
    </ul>-->
    <div class="back-button" @click="logout()">logout</div>
</div>
</template>

<style>
.header {
    background-color: black;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 999;
}

.logo {
    color: white;
    font-size: 20px;
}

.back-button {
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.links {
    list-style-type: none;
    margin: 0;
    padding: 0;

}

.links li {
    color: white;
	display: inline-block;
    font-size: 14px;
  margin-right: 10px;

}
</style>

<script>
export default {
    methods: {
        goBack() {
            window.history.back();
        },
        logout() {

            this.$store.dispatch('performLogin');
            this.$router.push('/login?logout=true');

        }
    },
};
</script>
