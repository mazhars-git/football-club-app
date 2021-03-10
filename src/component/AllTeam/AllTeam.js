import React from 'react';
import './AllTeam.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const AllTeam = (props) => {
    const {strTeam, strSport, strLeague, idTeam, strTeamBadge} = props.team;
    return (
        <div className="all-team-box">
            <img src={strTeamBadge} alt=""/> 
            <h3>Team Name: {strTeam}</h3>
            <p>{strSport}</p>
            <p>{strLeague}</p>
            <Link to={`/detail/${idTeam}`}>
                <Button variant="primary">Show Detail</Button>
            </Link>
            
        </div>
    );
};

export default AllTeam;