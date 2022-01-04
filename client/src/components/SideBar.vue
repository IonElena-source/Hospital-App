<template>
<div class="sidebar">
    <nav>
        <ul>
            <li v-on:click="goToDoctors">
                <img src="../assets/medical-team.png">
            </li>

            <li>
                <img src="../assets/symptoms.png">
            </li>
            <li>
            </li>
            <li>
            </li>
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    name: "SideBar",
    methods: {
        goToDoctors() {
            this.$router.push("/doctors");
            console.log("heei")
        }
    },
};
</script>

<style scoped>
*,
*:before,
*:after {
    box-sizing: border-box;
}

:after {
    content: "";
}

section {
    position: relative;
    left: 100px;
}

h1 {
    margin: 80px 0 10px 0;
    font-size: 52px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    text-shadow: 1px 1px 0px #DC143C,
        2px 2px 0px #DC143C,
        3px 3px 0px #DC143C,
        4px 4px 0px #DC143C;
}

h2 {
    font-size: 24px;
}

body {
    padding: 100px 0;
    background: lightblue;
    color: white;
    max-width: 690px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.4;
    font-smoothing: anti-aliased;
}

nav {
    float: left;
    position: relative;
    top: 0;
    left: 0;
    background: transparent;
}

nav ul {
    text-align: center;
}

nav ul li {
    position: relative;
    width: 80px;
    cursor: pointer;
    background: rgb(58, 138, 238);
    text-transform: uppercase;
    margin-top: 10px;
    transition: all .4s ease-out;
}

nav ul li:after {
    position: absolute;
    background: white;
    color: rgb(58, 138, 238);
    top: 0;
    left: 70px;
    width: 80px;
    height: 100%;
    opacity: .5;
    transform: perspective(400px) rotateY(90deg);
    transform-origin: 0 100%;
    transition: all .4s ease-out;
}

nav ul li:nth-child(1):after {
    content: "Doctori";
    line-height: 88px;
}

nav ul li:nth-child(2):after {
    content: "Pacienti";
    line-height: 88px;
}

nav ul li:nth-child(3):after {
    content: "Work";
    line-height: 85px;
}

nav ul li:nth-child(4):after {
    content: "Say hi";
    line-height: 70px;
}

nav ul li:hover {
    transform: translateX(-70px);
}

nav ul li:hover:after {
    opacity: 1;
    transform: perspective(400px) rotateY(0deg) scale(1);
}

nav ul li>div {
    display: inline-block;
    padding: 25px 0;
    background: transparent;
}

nav ul li div {
    position: relative;
}

.roof {
    width: 0;
    height: 0;
    top: 2px;
    border-style: solid;
    border-width: 0 21px 15px 21px;
    border-color: transparent transparent #ffffff transparent;
}

.roof-edge {
    position: absolute;
    z-index: 20;
    left: -17px;
    top: 3px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 17px 12px 17px;
    border-color: transparent transparent crimson transparent;
}

/*white triangle over red triangle*/
.roof-edge:after {
    position: absolute;
    left: -14.5px;
    top: 3px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 14.5px 10px 14.5px;
    border-color: transparent transparent white transparent;
}

.front {
    position: relative;
    top: 3px;
    width: 28.5px;
    height: 20px;
    margin: 0 auto;
    background: white;
}

/*door*/
.front:after {
    position: absolute;
    background: crimson;
    width: 11px;
    height: 13px;
    bottom: 0;
    left: 9px;
}

/*/// About me ////*/
</style>
