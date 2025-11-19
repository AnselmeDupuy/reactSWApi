import { useState, memo } from "react";
import { Link } from "react-router";
import type { Character } from "../types/Character";

const DisplayCharacter = memo(
    function DisplayCharacter({ character }: { character: Character }) {
        return (
            <li key={character.url}>
                <Link to={`/characters/${character.url.split("/")[5]}`}>
                    {character.name}
                </Link>
            </li>
        );
    }
)
export default function Characters() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCharacters = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("https://swapi.dev/api/people/");

            if (!res.ok) {
                throw new Error("Erreur de chargement");
            }

            const data = await res.json();
            setCharacters(data.results as Character[]);
        } catch (err) {
            setError("Impossible de charger les personnages");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button type="button" onClick={fetchCharacters}>
                Charger les personnages
            </button>

            {loading && <p>Chargement...</p>}

            <ul>
                {characters.map((character) => (
                    <DisplayCharacter key={character.url} character={character} />
                ))}
            </ul>
        </div>
    );
}