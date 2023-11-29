import React from "react";
import Info from "./components/info";
import SelectCity from "./components/selectcity";
import WeatherOutput from "./components/weatheroutput";

const API_KEY = "f042cd39966c294062f39ea81b9973a3";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  }

getWeather = async (event) => {
  event.preventDefault();
  const city = event.target.elements.city.value;

  if(city){
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      error: ""
    })
} else {
  this.setState({
    temp: undefined,
    city: undefined,
    country: undefined,
    error: "Ошибка"
})
}
}

  render() {
    return (
      <div> 
        <div>Hello</div>
        <Info/>
        <SelectCity weatherMethod = {this.getWeather}/>
        <WeatherOutput
          temp = {this.state.temp}
          city = {this.state.city}
          country = {this.state.country}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;