import React, { useEffect, useState } from 'react';

const App = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    const [showFilms, setShowFilms] = useState(false)
    const [showPeople, setShowPeople] = useState(false)


    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => setFilms(films))
    }, []);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(people => setPeople(people))
    }, []);
    



    let filmBtn = () => {
        setShowFilms(true)
        setShowPeople(false)
    }
    let peopleBtn = () => {
        setShowFilms(false)
        setShowPeople(true)
    }

    if (showFilms && !showPeople) {
        return (
            <>
                <button onClick={() => filmBtn()}>Show Films</button>
                <button onClick={() => peopleBtn()}>Show People</button>
                <main className="container">
                    <section className="row justify-content-center mt-5">
                        {films.map(film => (
                            <div className="col-md-6" key={film.id}>
                                <div className="card shadow my-2">
                                    <div className="card-body">
                                        <h4 className="card-title">{film.title}</h4>
                                        <p className="card-subtitle text-muted">{film.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </section>

                </main>
            </>
        );
    } else if (!showFilms && !showPeople) {
        return (<>
            <button onClick={() => filmBtn()}>Show Films</button>
            <button onClick={() => peopleBtn()}>Show People</button>

        </>)
    } else if (!showFilms && showPeople) {
        return (<>
            <button onClick={() => filmBtn()}>Show Films</button>
            <button onClick={() => peopleBtn()}>Show People</button>
            <main className="container">
                <section className="row justify-content-center mt-5">
                    {people.map(people => (
                        <div className="col-md-6" key={people.id}>
                            <div className="card shadow my-2">
                                <div className="card-body">
                                    <h4 className="card-title">{people.name}</h4>
                                    <p className="card-subtitle text-muted">{people.gender}</p>
                                    <p className="card-subtitle text-muted">{people.age}</p>
                                    
                                </div>
                            </div>
                        </div>
                    ))}


                </section>
            </main>

        </>)
    }

};

export default App;