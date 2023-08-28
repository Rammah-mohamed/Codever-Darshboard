import "./Chart.scss"
import "./Chart.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart({aspect, title, darkMode}) {
  const data = [
    {name:"jan", total: 1200},
    {name:"feb", total: 2000},
    {name:"march", total: 800},
    {name:"apr", total: 3100},
    {name:"may", total: 1600},
    {name:"jun", total: 2500}
  ]

  return (
    <div className={darkMode?"chart dark":"chart"}>
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name" />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart