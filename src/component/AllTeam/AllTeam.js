import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import './AllTeam.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck'
import { Card } from 'react-bootstrap';

const AllTeam = (props) => {
    const {strTeam, strSport, strLeague, idTeam, strTeamBadge} = props.team;
    return (
        <CardDeck className="m-2 col-md-3 text-center main-card">
            <Card className="card-body">
                <Card.Img variant="top" src={strTeamBadge} /> 
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>{strSport}</Card.Text>
                    <Card.Text>{strLeague}</Card.Text>
                </Card.Body>
                    <Link to={`/detail/${idTeam}`}>
                        <Button variant="primary">Explore  <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
                    </Link>
            </Card>
        </CardDeck>
    );
};

export default AllTeam;