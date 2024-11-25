import { Box, Typography } from "@mui/material";
import React from "react";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";
import { MoveUp } from "lucide-react";

// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("../../assets/location.png"),
  iconSize: [38, 38], // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

// markers
const markers = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1",
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2",
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3",
  },
];
const Map = () => {
  return (
    <Box
      maxWidth="xl"
      sx={{
        mt: 5,
        mb: 8,
        width: "100%",
        height: "250px",
      }}
    >
      <Typography
        sx={{
          color: "#3F434A",
          fontSize: "24px",
          mb: "10px",
        }}
      >
        Map
      </Typography>
      <Box className="w-full flex h-full gap-5">
        <Box className="flex-1">
          <Typography
            sx={{
              mb: 3,
            }}
          >
            123 Rue de la Rivière 75001 Paris France
          </Typography>
          <Box className="flex gap-5 h-[201px]">
            <Box className="flex-1 bg-[#FF6A19] flex flex-col items-start justify-center p-5 gap-3">
              <MoveUp
                color="#FF6A19"
                style={{
                  backgroundColor: "#fff",
                  padding: "8px",
                  borderRadius: "14px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#fff",
                }}
              >
                Chiffre d’affaire total
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                3,000,000 MAD
              </Typography>
            </Box>{" "}
            <Box className="flex-1 bg-[#fff] flex flex-col items-start justify-center p-5 gap-3">
              <MoveUp
                color="#fff"
                style={{
                  backgroundColor: "#FF6A19",
                  padding: "8px",
                  borderRadius: "14px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#171C1B",
                }}
              >
                Total Sales
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#171C1B",
                }}
              >
                1300
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="flex-1">
          <MapContainer center={[48.8566, 2.3522]} zoom={13}>
            {/* OPEN STREEN MAPS TILES */}
            {/* <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
            />
            {/* WATERCOLOR CUSTOM TILES */}
            {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      /> */}
            {/* GOOGLE MAPS TILES */}
            {/* <TileLayer
        attribution="Google Maps"
        // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      /> */}

            <MarkerClusterGroup
              chunkedLoading
              iconCreateFunction={createClusterCustomIcon}
            >
              {/* Mapping through the markers */}
              {markers.map((marker) => (
                <Marker position={marker.geocode} icon={customIcon}>
                  <Popup>{marker.popUp}</Popup>
                </Marker>
              ))}

              {/* Hard coded markers */}
              {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>This is popup 1</Popup>
        </Marker>
        <Marker position={[51.504, -0.1]} icon={customIcon}>
          <Popup>This is popup 2</Popup>
        </Marker>
        <Marker position={[51.5, -0.09]} icon={customIcon}>
          <Popup>This is popup 3</Popup>
        </Marker>
       */}
            </MarkerClusterGroup>
          </MapContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Map;
