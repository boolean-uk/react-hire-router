const SEED = 'people';

export const getPeople = async () => {
    const response = await fetch(`https://randomuser.me/api/?nat=no&seed=${SEED}&results=50`);
    return response.json();
}