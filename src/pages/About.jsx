import React, { useState, useEffect } from 'react';

const About = () =>{
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dragonball-api.com/api/characters');
            const data = await response.json();
            setCharacters(data.items.map(character => ({ ...character, showFullDescription: false })));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const toggleDescription = (id) => {
        setCharacters(prevCharacters =>
            prevCharacters.map(character =>
                character.id === id ? { ...character, showFullDescription: !character.showFullDescription } : character
            )
        );
    };

    return (
        <div className='background-container'>
                <div className="container">
                    <h1 className='letra'>Personajes de Dragon Ball</h1>
                    <div className="cards-container">
                        {characters.map(character => (
                            <div key={character.id} className="card">
                                <img src={character.image} alt={character.name} />
                                <h2>{character.name}</h2>
                                <p><strong>Raza:</strong> {character.race}</p>
                                <p><strong>Género:</strong> {character.gender}</p>
                                <p><strong>Ki:</strong> {character.ki}</p>
                                {}
                                <p><strong>Descripción:</strong> {character.showFullDescription ? character.description : character.description.substring(0, 100)}</p>
                                {character.description.length > 100 && (
                                    <button onClick={() => toggleDescription(character.id)}>
                                        {character.showFullDescription ? 'less...' : 'more...'}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            
        </div>
    );
}

export default About;
