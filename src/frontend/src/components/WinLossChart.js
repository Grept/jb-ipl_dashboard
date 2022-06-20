import React, {useEffect, useState} from "react";
import {PieChart} from "react-minimal-pie-chart";

export const WinLossChart = ({wins, losses}) => {

    return(
        <div className="WinLossChart">
            <PieChart data={[
                {title: "Wins", value: wins, color: "#00561E"},
                {title: "Losses", value: losses, color: "#7E0000"},
            ]}/>
        </div>
    );
}