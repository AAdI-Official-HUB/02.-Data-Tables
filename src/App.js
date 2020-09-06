import React, { Component } from 'react';
import './App.css';
import TableSort from './TableSort.js';
import {fetchApiData} from './Api/Api';
import DateTimePicker from './TimePicker';
import DateRange from './DateRange';
class App extends Component{
  constructor() { 
    super();
    this.state = {
      fullData: [],
    };
  }
  async componentDidMount() {
    try {
      const fetchedData = await fetchApiData();
      this.setState({
        fullData: fetchedData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  
render(){
  const { fullData } = this.state;
  return (
    <div>
      <DateRange/>
      <DateTimePicker/>
      <TableSort fullData={fullData}/>
    </div>
  )
}

}
export default App;
