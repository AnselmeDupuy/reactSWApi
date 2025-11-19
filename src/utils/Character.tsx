// import { useState } from "react";
// import { Link } from "react-router";

// function fetchCharacters() {

//     const [loading, setLoading] = useState<boolean>(true);
//     const [defaultResultOrder, setDefaultResultOrder] = useState<string>("");
//     const [characters, setCharacters] = useState<Object>;

//     const fetchCharacters = async () => {
//         setLoading(true);
//         setDefaultResultOrder(null);

//         try {
//             const res = await fetch('http swapi.dev/api/people/');
//             if(!res.ok) {
//                 throw new Error('Erreur de chargement');
//             }

//             const data = await res.json();
//             setCharacters(data.results);
//         } catch(err) {
//             setDefaultResultOrder("error: ", {err})
//         } finally {
//             setLoading(true);
//         }
//     }
// }