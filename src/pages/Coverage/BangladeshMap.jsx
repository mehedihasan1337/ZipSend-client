import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

// fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const BangladeshMap = () => {
  const [searchText, setSearchText] = useState("");

  // Default position: Dhaka
  const position = [23.8103, 90.4125];

  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-2">
        We are available in 64 districts
      </h1>

      {/* Search Box */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search district..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>

      {/* Map Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl h-[500px] rounded-xl overflow-hidden shadow-lg">
          <MapContainer center={position} zoom={7} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Dhaka — Our Service Center</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default BangladeshMap;
