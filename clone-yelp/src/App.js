import React, { Component } from 'react';
import Map,{GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
  render() {
    return <Map google={window.google} />;
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDPQyaa-zH51dE9g80V01Zqv2EgX8JBUro'
})(App);

