import React from "react";

class WeatherOutput extends React.Component {
    render() {
        return (
          <div> 
            { this.props.city &&
            <div>
                <h1>Погода в городе {this.props.city} в данный момент:</h1>
                <h1>Температура {this.props.temp}⁰C</h1>
            </div>
            }
            <p>{ this.props.error}</p>
          </div>
        );
      }
}

export default WeatherOutput;