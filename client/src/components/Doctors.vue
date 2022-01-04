<template>
<div class="Doctors">
    <img src="../assets/previous.png" style="margin-left:20px; width:50px; margin-top:20px; cursor:pointer;" class="w3-hover-shadow" @click="back">

    <button class="button is-info is-rounded w3-hover-shadow" width="300px" style="font-size:18px; margin-left:50px; margin-top:20px; margin-bottom:20px;" @click="openModalAddDoctor">Adauga doctor</button>
    <form class="example"  style="margin-left:850px; margin-top:-70px;max-width:300px; margin-bottom:20px;">
        <input type="text" placeholder="Search.." name="search2">
        <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    <div id="modalDoctor" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <form action="/action_page.php">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..">

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..">

                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>

                <input type="submit" value="Submit">
            </form>
        </div>

    </div>
    <div class="w3-row w3-border">
        <div class="w3-quarter w3-container" v-for="(doctor,index) in doctors" v-bind:key="doctor.id">
            <v-card class="mx-auto" max-width="344" style="margin-top:20px" :id="'doctor' + index">
                <v-card-text>
                    <h4 class="title" style="text-align:center">{{doctor.nume}} {{doctor.prenume}}</h4>
                    <div class="text--primary ">
                        relating to or dependent on charity; charitable.<br>
                        "an eleemosynary educational institution." relating to or dependent on charity; charitable.

                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="teal accent-4" @click="displayInfoDoctor(doctor)">
                        Info
                    </v-btn>
                    <img src="../assets/editing.png" width="30px" style="margin-left:110px; cursor: pointer;">
                    <img src="../assets/trash.png" width="30px" style="margin-left:30px; cursor: pointer;">
                </v-card-actions>

                <v-expand-transition>
                    <v-card v-if="revealDoctorId === doctor.id" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;" :id="'doctor-tr' + index">
                        <v-card-text class="pb-0 description">
                            <p> {{doctor.varsta}} </p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                            <v-btn text color="teal accent-4" @click=" revealDoctorId = -1 ">
                                Inchide
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-expand-transition>
            </v-card>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: 'Doctors',
    data() {
        return {
            doctors: [{ id: 1, nume: "Ion", prenume: "Elena", varsta: 70 },
                { id: 2, nume: "Ion", prenume: "Elena", varsta: 20 },
                { id: 12, nume: "Ion", prenume: "Elena", varsta: 20 },
                { id: 22, nume: "Ion", prenume: "Elena", varsta: 20 },
                { id: 32, nume: "Ion", prenume: "Elena", varsta: 20 },
                { id: 42, nume: "Ion", prenume: "Elena", varsta: 20 },
                { id: 52, nume: "Ion", prenume: "Elena", varsta: 20 },
                { id: 62, nume: "Ion", prenume: "Maria", varsta: 20 },
                { id: 72, nume: "Ion", prenume: "Vasilica", varsta: 60 },
                {
                    id: 3,
                    nume: "Ion",
                    prenume: "Elena",
                    varsta: 20
                }
            ],
            revealDoctorId: -1,
            reveal: false
        };
    },
    methods: {
        displayInfoDoctor(doctor) {
            this.revealDoctorId = doctor.id

        },
        openModalAddDoctor() {
            var modal = document.getElementById("modalDoctor");
            modal.style.display = "block";
        },
        closeModal() {
            var modal = document.getElementById("modalDoctor");
            modal.style.display = "none";
        },
        back() {
            this.$router.push("/home")
        }
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

.title {
    text: center;
    font-size: 18px;

    justify-content: center;
}

.card-image:hover {
    transform: scale(1.25, 1.25);
    transform-origin: 50% 50%;
    box-shadow: 2 2 #0f0;
}

.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);

}

.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
}

.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

input[type=text],
select {
    width: 100%;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

form.example input[type=text] {
  padding: 10px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

form.example button {
  float: left;
  width: 20%;
  padding: 8px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

form.example::after {
  content: "";
  clear: both;
  display: table;
}
</style>
