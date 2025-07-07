import { fetchTaches } from "./api.js";
import { ajouterTache } from "./api.js";
import { marquerCommeFaite } from "./api.js";

async function afficherTaches(){
let fetch = await fetchTaches();
console.table(fetch);
};
afficherTaches();

async function ajouterEtAfficher(){
    let result = await ajouterTache('pause');
    console.log(result);
    await afficherTaches();
    console.log(afficherTaches())
};
ajouterEtAfficher();

async function validerTache(id){
try{
    await marquerCommeFaite(id);
    console.log('succes')

}   catch(error){
    console.error(error);
} 

};
validerTache(23);

