import React, { PureComponent } from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart  >
                    <text x={30} y={40} fill="#20253A" fontWeight={500} textAnchor="left" dominantBaseline="central">
                        <tspan fontSize="15">Score</tspan>
                    </text>
                    <Pie data={Array(this.props.data)} dataKey="score" cx="50%" cy="50%" cornerRadius={10} innerRadius={"62%"} outerRadius={"70%"} fill="#FF0000" startAngle={90} endAngle={((this.props.data.score * 360) + 90)} />
                    <text x={"50%"} y={"50%"} fill="#20253A" fontWeight={500} textAnchor="middle" dominantBaseline="central">
                        <tspan x={"50%"} y={"45%"} fontSize="26">{this.props.data.score * 100}%</tspan>
                        <tspan x={"50%"} y={"54%"} fontSize="16" fill='#74798C'>de votre</tspan>
                        <tspan x={"50%"} y={"62%"} fontSize="16" fill='#74798C'>objectif</tspan>
                    </text>
                </PieChart>
            </ResponsiveContainer>
        );
    }
}
