import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png';
import icon1 from '../../images/flag (1) 1.png';
import icon2 from '../../images/football (1) 1.png';
import icon3 from '../../images/found 1.png';
import icon4 from '../../images/male-gender-sign 1.png';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Team.css';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Team = () => {
    const {idTeam} = useParams();
    const [team, setTeam] = useState({});
    const {strTeamBanner, strTeam, strSport, strTeamBadge, strCountry, strGender, strDescriptionEN, strStadiumDescription, 
        intFormedYear, strFacebook, strInstagram, strTwitter, strYoutube} = team;
 
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [idTeam])

    return (
        <div>
            <div className="banner-image">
                <img src={strTeamBanner} alt="Team Banner"/>
            </div>
           <div className="team-area container">
                <div className="row">
                    <div className="col-md-8 team-detail">
                        <div className="team-content">
                            <h3>{strTeam}</h3>
                            <p><img src={icon2} alt=""/> Founded: {intFormedYear}</p>
                            <p><img src={icon1} alt=""/> Country: {strCountry}</p>
                            <p><img src={icon3} alt=""/>  Sport type: {strSport}</p>
                            <p><img src={icon4} alt=""/>  Gender: {strGender}</p>
                        </div>
                        <div className="logo-img">
                            <img src={strTeamBadge} alt="Team Logo"/>
                        </div>
                    </div>
                    <div className="col-md-4 team-img">
                        {
                            strGender === 'Male' ? <img src={maleImage}/> : <img src={femaleImage}/>
                        }
                    </div>
                </div>
           </div>
           <Container>
                <div className="description">
                    <p>{strDescriptionEN}</p>
                    <p>{strStadiumDescription}</p>
                </div>
                <div className="icon-area">
                    <a className="icon-1" href={`https://${strFacebook}`}><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a className="icon-2" href={`https://${strTwitter}`}><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    <a className="icon-3" href={`https://${strInstagram}`}><FontAwesomeIcon icon={faInstagramSquare} /></a>
                    <a className="icon-4" href={`https://${strYoutube}`}><FontAwesomeIcon icon={faYoutubeSquare} /></a>
                </div>
           </Container>
            <div className="back-btn">
                <Link to={`/home`}>
                        <Button variant="primary">Back to Home </Button>
                </Link>
            </div>
            <footer>
                <p>&copy; 2021; all rights reserved by Md. Mazharul Islam</p>
            </footer>
        </div>
    );
};

export default Team;