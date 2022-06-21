import React, {useEffect, useState} from "react";
import {MatchDetailCard} from "../components/MatchDetailCard";
import {Link, useParams} from "react-router-dom";
import "./MatchPage.scss";
import {YearSelector} from "../components/YearSelector";

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`)
            const data = await response.json();
            setMatches(data);
        };

        fetchMatches();
    }, [year, teamName])

    return (
        <>
            <Link className="home-link" to={`/teams`}>Home</Link>
            <div className="MatchPage">
                <div className="year-selector">
                    Select Year
                    <YearSelector teamName={teamName}/>
                </div>
                <div>
                    <h1 className="page-heading">{teamName} matches in {year}</h1>
                    {
                        matches.map(match => <MatchDetailCard key={`${teamName}${match.id}`} teamName={teamName} match={match}/>)
                    }
                </div>
            </div>
        </>
    );

}