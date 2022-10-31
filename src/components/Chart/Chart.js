

import ChartBar from "./ChartBars";
import './Chart.css';

const Chart = (props)=>{

    const dataPointValues = props.dataPoint.map(data => data.value);
    const totalMaximum = Math.max(...dataPointValues);

    return <div className= 'chart'>
        {props.dataPoint.map((data)=>(
             <ChartBar
             key={data.label}
             value={data.value}
             maxValue={totalMaximum}
             label={data.label}
            />
        )
           
        )}

    </div>

}







export default Chart;