import React, { useEffect, useState } from 'react';
import AllTeam from '../AllTeam/AllTeam';
import './Home.css';
import Container from 'react-bootstrap/Container';

const Home = () => {
    const [allTeams, setAllTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => setAllTeams(data.teams))
    }, [])
    return (
        <div>
            <div className="heading-area">
                <h1>Kings of Football</h1>
            </div>
           <Container className="teams-area d-flex justify-content-center">
                {
                    allTeams.map(tm => <AllTeam team={tm}></AllTeam>)
                }
           </Container>
           <footer>
                <p>&copy; 2021; all rights reserved by Md. Mazharul Islam</p>
            </footer>
        </div>
    );
};

export default Home;