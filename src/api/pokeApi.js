import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const fetchPokemonList = async (limit = 50) => {
    try {
        const res = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);
        //map over resuults to include image
        return res.data.results.map((p, index) => ({
            name: p.name,
            //compute image url based on Pokemon ID
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }));

    } catch (error) {
        console.error('Error fetching Pokémon details:', error);
        return [];
    }
};
