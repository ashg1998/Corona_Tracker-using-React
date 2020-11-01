import React from 'react';
//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';

import {Cards, Chart, CountryPicker}  from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import CoronaImage from './images/image.png';

class App extends React.Component {
    state = {
        data:{},
        country: '',
    }
    //fetching data
    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
        
    }

    handledCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        
        this.setState({  data : fetchedData , country:country});

         
    }
    render(){
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={CoronaImage} alt ="COVID-19"/>
                <Cards data = {data} />
                <CountryPicker handleCountryChange={this.handledCountryChange} />
                <Chart  data ={data} country={country}/>
                 
            </div>
        )
    }
}

export default App;