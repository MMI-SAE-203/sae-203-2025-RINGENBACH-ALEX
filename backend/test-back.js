
import { getFilms } from './backend.mjs';

import { allFilms, oneFilm, allFilmsSorted, allActivitiesSorted, allParticipantsSorted, oneActivity, oneParticipant, allActivitiesByAnimatorId, allActivitiesByAnimatorName, addOrUpdateItem } from './backend.mjs';
try {
    const films = await allFilmsSorted();
    console.log("Films récupérés :", films);
} catch (e) {
    console.error(e);
}

try {
    const activites = await allActivitiesSorted();
    console.log("Activités récupérées :", activites);
} catch (e) {
    console.error(e);
}

try {
    const invites = await allParticipantsSorted();
    console.log("Invités récupérés :", invites);
} catch (e) {
    console.error(e);
}

try {
    const film = await oneFilm("k388k4vk776z67e");
    console.log("Film récupéré :", film);
} catch (e) {
    console.error(e);
}

try {
    const activite = await oneActivity("r6577r45dgj1of2");
    console.log("Activité récupérée :", activite);
} catch (e) {
    console.error(e);
}

try {
    const invite = await oneParticipant("d7y6z946y6r5uh4");
    console.log("Invité récupéré :", invite);
} catch (e) {
    console.error(e);
}

try {
    const activitesAnimateur = await allActivitiesByAnimatorId("d7y6z946y6r5uh4");
    console.log("Activités de l'animateur récupérées :", activitesAnimateur);
} catch (e) {
    console.error(e);
}

try {
    const activitesAnimateurNom = await allActivitiesByAnimatorName("Bernard");
    console.log("Activités de l'animateur récupérées par nom :", activitesAnimateurNom);
} catch (e) {
    console.error(e);
}

try {
    const newFilm = {
        titre: "Nouveau Film",
        annee_sortie: 2025,
        synopsis: "Un film de test",
        liste_acteurs: "Acteur 1, Acteur 2",
        bande_annonce: "https://www.youtube.com/watch?v=xCOQgo3Ejcw",
        duree: 120,
        langue: "Français",
        production: "Studio Test",
        genre: "Action",
        date_projection: "2025-06-10",
        presente_par: "3vksd9n9841hm05"
    };
    const filmAjoute = await addOrUpdateItem("film", null, newFilm);
    console.log("Film ajouté avec succès :", filmAjoute);
} catch (e) {
    console.error(e);
}