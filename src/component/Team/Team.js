import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Team = () => {
    const {idTeam} = useParams();
    const [team, setTeam] = useState({});
    const {strDescriptionEN, strGender, strLeague, strTeamLogo, strTeamBadge} = team;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [])

    return (
        <div>
            <h1>Team Detail of {idTeam}</h1>
            <h3>{strLeague}</h3>
            <p>Gender: {strGender}</p>
            <img src={strTeamBadge} alt=""/>
            <p>Description: {strDescriptionEN}</p>
        </div>
    );
};

export default Team;