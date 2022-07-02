import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const dummdata = [
  {
    Id: 1,
    year: 2004,
    Medals: 1
  },
  {
    Id: 2,
    year: 2008,
    Medals: 3
  },
  {
    Id: 3,
    year: 2012,
    Medals: 6
  },
  {
    Id: 4,
    year: 2016,
    Medals: 2
  },
  {
    Id: 5,
    year: 2020,
    Medals: 7
  }
];
function Chart() {
  return (
    <>
      <div>
        <LineChart width={500} height={300} data={dummdata}>
          <XAxis dataKey="year" />
          <YAxis dataKey="Id" />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Medals" stroke="#8884d8" />
        </LineChart>
      </div>
    </>
  );
}
export default Chart;
