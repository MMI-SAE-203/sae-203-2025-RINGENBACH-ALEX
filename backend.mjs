import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

// 1) récupérer la liste de tous les films triés par date de projection
export async function getFilms() {
    const records = await pb.collection('film').getFullList({
        sort: 'date_film',
    });
    return records;
}

// 2) récupérer la liste de toutes les activités triées par date
export async function getActivites() {
    const records = await pb.collection('activite').getFullList({
        sort: 'date_activite',
    });
    return records;
}

// 3) récupérer la liste de tous les acteurs / réalisateurs triés par ordre alphabétique
export async function getInvites() {
    const records = await pb.collection('invite').getFullList({
        sort: 'nom',
    });
    return records;
}

// 4) récupérer les infos d'un film par son ID
export async function getFilmById(id) {
    const record = await pb.collection('film').getOne(id);
    return record;
}

// 5) récupérer les infos d'une activité par son ID
export async function getActiviteById(id) {
    const record = await pb.collection('activite').getOne(id);
    return record;
}

// 6) récupérer les infos d'un acteur / réalisateur par son ID
export async function getInviteById(id) {
    const record = await pb.collection('invite').getOne(id);
    return record;
}

// 7) récupérer toutes les activités d’un animateur donné par son ID
export async function getActivitesByInviteId(id) {
    const records = await pb.collection('activite').getFullList({
        filter: `anime_par = '${id}'`,
    });
    return records;
}

// 8) récupérer toutes les activités d’un animateur donné par son nom
export async function getActivitesByInviteNom(nom) {
    const invites = await pb.collection('invite').getFullList({
        filter: `nom = '${nom}'`,
    });
    if (invites.length === 0) return [];
    return await getActivitesByInviteId(invites[0].id);
}

// 9) ajouter ou modifier un film, une activité ou un invité
export async function createOrUpdate(collection, data, id = null) {
    if (id) {
        const updatedRecord = await pb.collection(collection).update(id, data);
        return updatedRecord;
    } else {
        const newRecord = await pb.collection(collection).create(data);
        return newRecord;
    }
}
