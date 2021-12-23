<template>
<div class="Doctors">
    <button class="button is-primary is-light" id="btnAdd">Adauga doctor</button>
     <v-app>
    <v-app-bar
      color="dark"
      dark dense
    >
    </v-app-bar>

    <v-row no-gutters>
      <v-col cols="2"></v-col>
      <v-col cols="7">
        <v-row no-gutters>
            <v-col v-for="c in 10" :key="c" cols="4">
                <HelloWorld/>
            </v-col>
        </v-row>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </v-app>
</div>
</template>

<script>
export default {
    name: 'Doctors',
    data() {
        return {
            doctori: [{ id: 1, nume: "Ion", prenume: "Elena", varsta: 20 },
                { id: 2, nume: "Ion", prenume: "Elena", varsta: 20 },
                {
                    id: 3,
                    nume: "Ion",
                    prenume: "Elena",
                    varsta: 20
                }
            ],
        };
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
#btnAdd {
    margin-top: 30px;
    margin-left: -920px;
}
.card-container {
  width: 100%;
  height: auto;
  margin: auto 0;
  display: flex;
  justify-content: center;
}

.card-container ul {
  text-align: center;
  margin: auto 0;
}

.card-container li {
  list-style-type: none;
  padding: .5em .5em .5em .5em;
  text-align: left;
}

.card {
  transition: 0.2s;
  overflow: hidden;
  width: 7em;
  word-wrap: break-word;
}

.card-image {
  box-shadow: 1 1 #000;
  transition: .3s;
  background-color: #C33;
  margin: auto 0;
  text-align: center;
}

.card-image:hover {
  transform: scale(1.25, 1.25);
  transform-origin: 50% 50%;
  box-shadow: 2 2 #0f0;
}
</style>
