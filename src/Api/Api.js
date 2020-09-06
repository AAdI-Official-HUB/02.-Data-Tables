import axios from "axios";

const url = "https://api.covid19india.org/data.json";

export const fetchApiData = async () =>{
    try {
        const response = await axios.get(url);
        const apidata = response.data
        const stateData = apidata.statewise
        const modifiedStateData = stateData.map((index)=>({
            state:index.state,
            active:parseInt(index.active),
            confirmed: parseInt(index.confirmed),
            recovered: parseInt(index.recovered),
            deaths: parseInt(index.deaths),
        }
        ));
        return modifiedStateData
    } catch (error) {
       console.log(error) 
    }
}