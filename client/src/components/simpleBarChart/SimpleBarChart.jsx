import React, { PureComponent } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './simpleBarChart.scss';

export default class SimpleBarChart extends PureComponent {

  render() {

    return (
      <div className='barChartWrapper'>
        <ResponsiveContainer height="100%" width="100%" >
          <BarChart
            data={this.props.data}
            barGap={10}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="4" vertical={false}/>
            <XAxis dataKey="day" axisLine={true} tickLine={false} tickMargin={20} tick={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: '500' }} />
            <YAxis yAxisId="kilogram" orientation="right" tickCount={3} axisLine={false} tickLine={false} tickMargin={30} type="number" domain={['dataMin - 1.5', 'dataMax + 1.5']} tick={{ color: '9B9EAC', fontSize: '1vw', fontWeight: '500' }} />
            <YAxis yAxisId="calories" hide={true} />
            <Tooltip />
            <Legend />
            <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={8} legendType="circle" name="Poids (Kg)" unit="Kg" radius={[20, 20, 0, 0]} />
            <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={8} legendType="circle" name="Calories brûlées (kCal)" unit="Kcal" radius={[20, 20, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}