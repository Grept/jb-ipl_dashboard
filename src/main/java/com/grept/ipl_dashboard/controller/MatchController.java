package com.grept.ipl_dashboard.controller;

import com.grept.ipl_dashboard.model.Match;
import com.grept.ipl_dashboard.repository.MatchRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
public class MatchController {

    private final MatchRepository matchRepository;

    public MatchController(MatchRepository matchRepository) {
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);

        return matchRepository.getMatchesByTeamBetweenDates(
                teamName,
                startDate,
                endDate
        );
    }
}
