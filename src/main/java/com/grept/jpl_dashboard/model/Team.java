package com.grept.jpl_dashboard.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String teamName;
    private Long totalMatchesPlayed;
    private Long totalWins;

    public Team() {
    }

    public Team(String teamName, Long totalMatchesPlayed) {
        this.teamName = teamName;
        this.totalMatchesPlayed = totalMatchesPlayed;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Long getTotalMatchesPlayed() {
        return totalMatchesPlayed;
    }

    public void setTotalMatchesPlayed(Long totalMatchesPlayed) {
        this.totalMatchesPlayed = totalMatchesPlayed;
    }

    public Long getTotalWins() {
        return totalWins;
    }

    public void setTotalWins(Long totalWins) {
        this.totalWins = totalWins;
    }

    @Override
    public String toString() {
        return "Team{" +
                "id=" + id +
                ", teamName='" + teamName + '\'' +
                ", totalMatchesPlayed=" + totalMatchesPlayed +
                ", totalWins=" + totalWins +
                '}';
    }
}
