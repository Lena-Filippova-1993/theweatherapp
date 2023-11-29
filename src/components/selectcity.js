import React from "react";

class SelectCity extends React.Component {
    render() {
        return (
          <form onSubmit={this.props.weatherMethod}>
            <input type="text" name="city" placeholder="Город..."/>
            <button>Узнать погоду</button>
          </form>
        );
      }
}

export default SelectCity;