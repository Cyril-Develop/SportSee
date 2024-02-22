import React, { PureComponent } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './lineChart.scss';

export default class SimpleLineChart extends PureComponent {

    render() {

       // console.log(this.props.data);

        return (
            <ResponsiveContainer width="100%" height="100%" className="lineChart">
                <LineChart
                    width={500}
                    height={300}
                    data={this.props.data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid  vertical={false} horizontal={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', fontWeight: '500', fill: '#fff', opacity: "0.5" }} />
                    <YAxis hide={true} domain={['dataMin-10', 'dataMax + 40']} />
                    <Tooltip />
                    <Line type="natural" dataKey="session" stroke="#FBFBFB" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
