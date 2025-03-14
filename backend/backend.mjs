import PocketBase from 'pocketbase';
const pb = new PocketBase('https://sae-203.alex-ringenbach.fr:443');
export default pb;

export async function allFilms() {
    return await pb.collection('film').getFullList({
        fields: 'id,titre,affiche,date'
    });
}

export async function oneFilm(id) {
    return await pb.collection('film').getOne(id, {
        fields: 'titre,duree,langue,production,affiche'
    });
}

export async function allFilmsSorted() {
    return await pb.collection('film').getFullList({
        sort: 'date'
    });
}

export async function allActivitiesSorted() {
    return await pb.collection('activites').getFullList({
        sort: 'date'
    });
}

export async function allParticipants() {
    return await pb.collection('invite').getFullList({
        fields: 'id,prenom,nom,role,biographie,photo'
    });
}
export async function allParticipantsSorted() {
    return await pb.collection('invite').getFullList({
        sort: 'nom'
    });
}


export async function oneActivity(id) {
    return await pb.collection('activites').getOne(id);
}

export async function oneParticipant(id) {
    return await pb.collection('invite').getOne(id);
}

export async function allActivitiesByAnimatorId(animatorId) {
    return await pb.collection('activites').getFullList({
        filter: `animateur = '${animatorId}'`
    });
}

export async function allActivitiesByAnimatorName(animatorName) {
    const animators = await pb.collection('invite').getFullList({
        filter: `nom = '${animatorName}'`
    });
    if (animators.length === 0) return [];
    return await pb.collection('activites').getFullList({
        filter: `invite = '${animators[0].id}'`
    });
}

export async function addOrUpdateItem(collection, id, data) {
    if (id) {
        return await pb.collection(collection).update(id, data);
    } else {
        return await pb.collection(collection).create(data);
    }
}
