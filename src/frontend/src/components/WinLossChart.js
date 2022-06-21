import React, {useEffect, useState} from "react";
import {PieChart} from "react-minimal-pie-chart";
import variables from "../GlobalStylingVariables.scss";

export const WinLossChart = ({wins, losses}) => {

    return(
        <div className="WinLossChart">
            <PieChart data={[
                {title: "Wins", value: wins, color: variables.iplGreen},
                {title: "Losses", value: losses, color: variables.iplRed},
            ]}/>
        </div>
    );
}