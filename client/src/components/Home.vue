<template>
<div class="Home">
    <SideBar> sidebar</SideBar>
    <div class="contentm">

        <div class="about-section">
            <h1>About Us Page</h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>

        <h2 style="text-align:center">Our Team</h2>
        <div class="row">
            <div class="column">
                <div class="card">
                    <img src="/w3images/team1.jpg" alt="Jane" style="width:100%">
                    <div class="container">
                        <h2>Jane Doe</h2>
                        <p class="title">CEO & Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <img src="/w3images/team2.jpg" alt="Mike" style="width:100%">
                    <div class="container">
                        <h2>Mike Ross</h2>
                        <p class="title">Art Director</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>mike@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <img src="/w3images/team3.jpg" alt="John" style="width:100%">
                    <div class="container">
                        <h2>John Doe</h2>
                        <p class="title">Designer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import SideBar from "./SideBar";
export default {
    name: 'Home',
    components: { SideBar },
    props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.Home {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: rgb(58, 138, 238);
    height: 100vh;
    width: 100vw;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateX(-2em);
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.contentm {
    background-color: white;
    border-radius: 10px;
    width: 92.8vw;
    height: 96.5vh;
    margin: 2px 10px 3px 2px;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateX(-2em);
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

.column {
    float: left;
    width: 33.3%;
    margin-bottom: 16px;
    padding: 0 8px;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 8px;
}

.about-section {
    padding: 50px;
    text-align: center;
    background-color: red;
    color: black;
}

.container {
    padding: 0 16px;
}

.container::after,
.row::after {
    content: "";
    clear: both;
    display: table;
}

.title {
    color: grey;
}

.button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
}

.button:hover {
    background-color: #555;
}

@media screen and (max-width: 650px) {
    .column {
        width: 100%;
        display: block;
    }
}
</style>
