import * as React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "./MapWindow.less";

const firstLatLng: LatLngTuple = [49.3855785911, 13.7418602771];
const secondLatLng: LatLngTuple = [48.9693511926, 14.4791895009];
const centerLatLng: LatLngTuple = [49.147892, 14.175129];

export const MapWindow = () => {
  const initMarker = (ref) => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };
  return (
    <div id={"mapCont"} className={"mapCont"}>
      <Map
        className="map"
        zoom={8}
        center={centerLatLng}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
          url="https://api.mapbox.com/styles/v1/vachuska1/cl3kde0qf003k14mltt7qgn0t/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmFjaHVza2ExIiwiYSI6ImNsM2s3c2M1NzBjcm8zaXF3OWs1OXIxdXgifQ.wURtYB6CFUhnILLSH3sXAg"
        />
        <Marker position={firstLatLng} ref={initMarker}>
          <Popup className={"popUp"} open={true}>
            Slatina 68, 34101 Horažďovice (Sídlo)
          </Popup>
        </Marker>
        <Marker position={secondLatLng} ref={initMarker}>
          <Popup className={"popUp"} open={true}>
            Mánesova 273/9, 37006, ČB 6
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};
