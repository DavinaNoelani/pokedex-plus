import React, { useEffect, useState } from 'react';
import { fetchPokemonList } from '../api/pokeApi.js';



const Home = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getPokemon = async () => {
            try {
                const data = await fetchPokemonList(50);
                setPokemon(data)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            } finally {
                setLoading(false);
            }
        }
        getPokemon();

    }, []);

    if (loading) return <div className='text-center mt-10'>Loading...</div>;
    
    return (
        <>
            <div className="bg-gray-400 rounded-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-red-600" >
                {pokemon.map((p) => (
                    <div
                        key={p.name}
                        className="border rounded p-4 text-center hover:shadow-lg transition"
                    >
                        <img src={p.image} alt={p.name} className="mx-auto mb-2" />
                        <h2 className="capitalize font-bold text-color-gray-800">
                            {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                        </h2>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Home;