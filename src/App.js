import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";

  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        markers: [[41.4111227, 2.1548569]]
      };
    }

    addMarker = (e) => {
      const {markers} = this.state
      markers.push(e.latlng)
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



    </div>
  );
}

  }

export default App;