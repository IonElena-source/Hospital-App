<template>
<div class="Doctors">
    <SideBar></SideBar>

    <button class="button is-info is-rounded w3-hover-shadow" width="300px" style="font-size:18px; margin-left:50px; margin-top:20px; margin-bottom:20px;" @click="openModalAddDoctor">Adauga doctor</button>
    <form class="example" style="margin-left:850px; margin-top:-70px;max-width:300px; margin-bottom:20px;">
        <input type="text" placeholder="Search.." name="search2">
        <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    <div id="modalProgramari" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModalProgramari">&times;</span>
            <p>Some text in the Modal..</p>
        </div>

    </div>
    <div id="modalDoctor" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>

            <input type="text" id="nume" name="firstname" placeholder="Nume">

            <input type="text" id="prenume" placeholder="Prenume">
            <input type="text" id="email" placeholder="Email">
            <input type="text" id="telefon" placeholder="Telefon">
            <input type="text" id="strada" placeholder="Strada">
            <input type="text" id="numar" placeholder="Numar">
            <input type="text" id="bloc" placeholder="Bloc">
            <label for="dataNastere">Data Nastere:</label>
            <input type="date" id="dataNastere">
            <label for="salariul">Salariul:</label>
            <input type="number" id="salariul">
            <label for="sectie">Sectie</label>
            <select id="sectie" name="sectie">
                <option value="Chirurgie şi Ortopedie Pediatrică">Chirurgie şi Ortopedie Pediatrică</option>
                <option value="Neurochirurgie">Neurochirurgie</option>
                <option value="Pediatrie">Pediatrie</option>
                <option value="Chirurgie Plastică">Chirurgie Plastică</option>
                <option value="Hematologie">Hematologie</option>
                <option value="Urgente">Urgente</option>
                <option value="Cardiologie">Cardiologie</option>
            </select>

            <label for="functie">Functie</label>
            <select id="functie" name="functie">
                <option value="Medic primar">Medic primar</option>
                <option value="Medic specialist">Medic specialist</option>
                <option value="Medic rezident">Medic rezident</option>
            </select>
            <button class="button is-success" style="text-align:center" @click="addDoctor"> Adauga</button>

        </div>

    </div>
    <div class="w3-row w3-border">
        <div class="w3-quarter w3-container" v-for="(doctor,index) in doctors" v-bind:key="doctor.id">
            <v-card class="mx-auto description" max-width="344" style="margin-top:20px" :id="'doctor' + index">
                <v-card-text>
                    <h4 class="title" style="text-align:center">{{doctor.Nume}} {{doctor.Prenume}}</h4>
                    <div class="text--primary " style="text-align:center;  font-style: italic;">
                        {{doctor.Sectie}}

                    </div>
                    <div class="text--primary " style="text-align:center;  font-style: italic;">
                        {{doctor.Functie}}

                    </div>
                    <div class="text--primary " style="text-align:center;  font-style: italic;">
                        Grad: {{doctor.Grad}}

                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="teal accent-4" @click="displayInfoDoctor(doctor)">
                        Info
                    </v-btn>
                    <img src="../assets/editing.png" width="30px" style="margin-left:110px; cursor: pointer;">
                    <img src="../assets/trash.png" width="30px" style="margin-left:30px; cursor: pointer;">
                    <img src="../assets/medical-appointment.png" width="30px" style="margin-left:-170px; cursor: pointer;" @click="openModalProgramari">
                </v-card-actions>

                <v-expand-transition>
                    <v-card v-if="revealDoctorId === doctor._id" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;" :id="'doctor-tr' + index">
                        <v-card-text class="pb-0 description">
                            <p v-if="doctor.Contact!=null && doctor.Contact.Email"> <span style="font-weight: bold;"> Email: </span> {{doctor.Contact.Email}} </p>
                            <p v-if="doctor.Contact!=null && doctor.Contact.Telefon"> <span style="font-weight: bold;"> Telefon: </span> {{doctor.Contact.Telefon}} </p>
                            <p v-if="doctor.Adresa!=null " style="font-weight: bold;text-align:center"> Adresa </p>
                            <p v-if="doctor.Adresa!=null && doctor.Adresa.Strada"> <span style="font-weight: bold;"> Strada: </span> {{doctor.Adresa.Strada}} </p>
                            <p v-if="doctor.Adresa!=null && doctor.Adresa.Numar"> <span style="font-weight: bold;"> Numar: </span> {{doctor.Adresa.Numar}} </p>
                            <p v-if="doctor.Adresa!=null && doctor.Adresa.Bloc"> <span style="font-weight: bold;"> Bloc: </span> {{doctor.Adresa.Bloc}} </p>

                            <p v-if="doctor.Salariul!=null"> <span style="font-weight: bold;"> Salariul: </span> {{doctor.Salariul}} RON </p>

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
import axios from "axios";
import SideBar from "./SideBar";
export default {
    name: 'Doctors',
    components: { SideBar },
    data() {
        return {
            doctors: [],
            revealDoctorId: -1,
            reveal: false
        };
    },
    computed: {
        doctori: function () {
            return this.doctors
        }
    },
    methods: {
        displayInfoDoctor(doctor) {
            this.revealDoctorId = doctor._id
            console.log(doctor)

        },
        openModalAddDoctor() {
            var modal = document.getElementById("modalDoctor");
            modal.style.display = "block";
            console.log(this.doctors)
        },
        closeModal() {
            var modal = document.getElementById("modalDoctor");
            modal.style.display = "none";
        },
        openModalProgramari() {
            var modal = document.getElementById("modalProgramari");
            modal.style.display = "block";
        },
        closeModalProgramari() {
            var modal = document.getElementById("modalProgramari");
            modal.style.display = "none";
        },
        back() {
            this.$router.push("/home")
        },
        addDoctor() {
            let nume = document.getElementById("nume").value;
            let prenume = document.getElementById("prenume").value;
            let telefon = document.getElementById("telefon").value;
            let email = document.getElementById("email").value;
            let strada = document.getElementById("strada").value;
            let numar = document.getElementById("numar").value;
            let bloc = document.getElementById("bloc").value;
            let sectie = document.getElementById("sectie").value;
            let functie = document.getElementById("functie").value;
            let dataNastere = document.getElementById("dataNastere").value
            var grad = 1;
            if (functie == "Medic primar") {
                grad = 1;
            } else if (functie == "Medic specialist") {
                grad = 2;
            } else grad = 3;
            let doctor = {
                Nume: nume,
                Prenume: prenume,
                Contact: {
                    Email: email,
                    Telefon: telefon
                },
                Adresa: {
                    Strada: strada,
                    Numar: numar,
                    Bloc: bloc
                },
                DataNastere:dataNastere,
                Sectie: sectie,
                Functie: functie,
                Grad: grad
            }
            axios.post("http://localhost:3000/doctori", doctor).then(() => {
                axios.get("http://localhost:3000/doctori").then((response) => {
                    this.doctors = response.data.doctors;
                    this.doctors = this.doctori
                });
            });
        }
    },
    mounted() {
        axios.get("http://localhost:3000/doctori").then((response) => {
            this.doctors = response.data.doctors;
        });
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
#btnAdd {
    margin-top: 30px;
    margin-left: -920px;

}

.w3-container {
    height: 150%;
    max-height: 120%;
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
    padding-top: 20px;
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
    padding: 10px;
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
input[type=date],
input[type=number],
select {
    width: 100%;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 30px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    font-size: 18px;
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
    padding: 10px;
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
