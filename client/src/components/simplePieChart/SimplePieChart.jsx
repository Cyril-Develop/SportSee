import React, { PureComponent } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import './pieChart.scss';

export default class Example extends PureComponent {

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%" className="pieChart">
                <PieChart  >
                    <text x={40} y={40} fill="#20253A" fontWeight={500} textAnchor="left" dominantBaseline="central">
                        <tspan fontSize="15">Score</tspan>
                    </text>
                    <circle cx="50%" cy="50%" r="90" fill="#fff" />
                    <Pie
                        data={Array(this.props.data)}
                        dataKey="score"
                        innerRadius={90}
                        outerRadius={100}
                        startAngle={90}
                        endAngle={((this.props.data.score * 360) + 90)}
                    >
                        {Array(this.props.data).map((data, index) => (
                            <Cell
                                key={`${index}`}
                                fill="#FF0000"
                                cornerRadius="50%"
                            />
                        ))}
                    </Pie>
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
