import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";

// {"lat": 41.38658717375506, "lng": 2.156753540039063}

  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        markers: [],
        input: {}
      };
    }

    addMarker = (e) => {
      const {markers} = this.state
      markers.push(e.latlng)
      console.log(e.latlng);
      this.setState({markers})
    }  
    
    updateInput(e) {
      this.setState({
        input: e.target.value
      });
    }


    addLocation =() =>{
      //console.log(this.state.input);
      //const coords = this.state.input.split(",");
      //console.log("Lat: " + parseFloat(coords[0]));
      //console.log("Lat: " + parseFloat(coords[1]));
      const latlng = JSON.parse(this.state.input);
      console.log(latlng);
      const {markers} = this.state
      markers.push(latlng)
      console.log(latlng);
      this.setState({markers})
    }
  
  render() {

  return (
    <div className="App mt-3">

      <h1 className="mytitle">My Pretty Map</h1>
      <Map center={[41.38879, 2.15899]}
        onClick={this.addMarker}
      zoom={15}
      >
        <TileLayer
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png"
          attribution='&copy; Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
          {this.state.markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}>
            <Popup>
              <span>Hello World!</span>
            </Popup>
          </Marker>
        )}
      </Map>
      <br></br>
      <div className="container">
      <div className="form-inline mb-3">
          <input
            className="form-control flex-primary-1"
            onChange={e => this.updateInput(e)}
            value={this.state.input}
          />

          <button
            className="btn btn-primary ml-2"
            onClick={e => this.addLocation()}
          >
            Submit your location
          </button>
        </div>
        </div>

    </div>
  );
}

  }

export default App;