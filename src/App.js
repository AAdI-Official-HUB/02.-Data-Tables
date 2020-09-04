import React, { Component } from 'react';
import './App.css';
import TableSort from './TableSort.js';
import {fetchApiData} from './Api/Api';
import DateTimePicker from './DateTimePicker'
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
      <DateTimePicker/>
      <TableSort fullData={fullData}/>
    </div>
  )
}

}
export default App;
