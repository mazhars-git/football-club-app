import React, { useEffect, useState } from 'react';
import AllTeam from '../AllTeam/AllTeam';

const Home = () => {
    const [allTeams, setAllTeams] = useState([])
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => setAllTeams(data.teams))
        //console.log(teams)
    }, [])
    return (
        <div>
            <h1>Kings of Football: {allTeams.length}</h1>
            {
                allTeams.map(tm => <AllTeam team={tm}></AllTeam>)
            }
        </div>
    );
};

export default Home;