import React, { useState, useEffect } from "react";

export default function App() {
  // UseState declara o estado do componente
  const [location, setLocation] = useState({});

  useEffect(() => {
    // Equivalente ao componentDidMount
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    // Equivalente ao componentWillUnmount
    return () => navigator.geolocation.clearWatch(watchId)
  }, []);

  // Equivalente ao componentDidUpdate 
  useEffect(() => {
    console.log("Sua localização mudou");
  }, [location])

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  }

  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}
