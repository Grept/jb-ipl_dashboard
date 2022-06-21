import React, {useEffect, useState} from "react";
import {MatchDetailCard} from "../components/MatchDetailCard";
import {MatchSmallCard} from "../components/MatchSmallCard";
import {Link, useParams} from "react-router-dom";
import "./TeamPage.scss";
import {WinLossChart} from "../components/WinLossChart";

export const TeamPage = () => {

    const [team, setTeam] = useState({matches: []});
    const {teamName} = useParams();

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}`)
            const data = await response.json();
            setTeam(data);
        };

        fetchMatches();
    }, [teamName]);

    if (!team || !team.teamName) {
        return <h1>Team Not Found</h1>
    }
    return (
        <>
            <Link className="home-link" to={`/teams`}>Home</Link>
            <div className="TeamPage">
                <div className="team-name-section">
                    <h1 className="team-name">{team.teamName}</h1>
                </div>

                <div className="win-loss-section">
                    <span>Wins / Losses</span>
                    <WinLossChart wins={team.totalWins} losses={team.totalMatchesPlayed - team.totalWins}/>
                </div>

                <div className="match-detail-section">
                    <h3>Latest Matches</h3>
                    <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
                </div>

                {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match}/>)}
                <div className="more-link">
                    <Link to={`/team/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More</Link>
                </div>
            </div>
        </>
    );
}