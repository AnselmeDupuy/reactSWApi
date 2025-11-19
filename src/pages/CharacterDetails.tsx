import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { Character } from "../types/Character";

function CharacterDetails() {
    const { id } = useParams<{ id: string }>();
    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            fetchCharactersById(id);
        }
    }, []);

    const fetchCharactersById = async (id: string) => {
            setLoading(true);
            setError(null);
    
            try {
                const res = await fetch('https://swapi.dev/api/people/' + id);
    
                if (!res.ok) {
                    throw new Error("Erreur de chargement");
                }
    
                const data = await res.json();
                setCharacter(data as Character);
            } catch (err) {
                setError("Impossible de charger les personnages");
            } finally {
                setLoading(false);
            }
        };

    return(
        <div>
            {loading && <p>Loading…</p>}
            {error && <p>{error}</p>}
            {!!character && (
                <div>
                    <h2>{character.name}</h2>
                    <p>Height: {character.height}</p>
                    <p>Mass: {character.mass}</p>
                    <p>films: {character.films.join(", ")}</p>
                    <Link to="/characters">Back</Link>
                </div>
            )}
        </div>

    
    ) 
}


export default CharacterDetails;