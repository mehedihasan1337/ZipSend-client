import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect, useRef } from "react";

// 🔹 Smooth zooming when a district is selected
const MapUpdater = ({ district }) => {
  const map = useMap();

  useEffect(() => {
    if (district) {
      const { latitude, longitude } = district;
      map.flyTo([latitude, longitude], 18, {
        animate: true,
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [district, map]);

  return null;
};

// 🔹 Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const BangladeshMap = ({ serviceCenters }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [, setActiveMarker] = useState(null);
  const markerRefs = useRef([]);

  // Default map position (Dhaka)
  const position = [23.8103, 90.4125];

  // 🔹 Filter districts while typing
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredDistricts([]);
    } else {
      const matches = serviceCenters.filter((d) =>
        d.district.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredDistricts(matches);
    }
  }, [searchText, serviceCenters]);

  // 🔹 Handle when a district is clicked from dropdown
  const handleSelect = (district) => {
    setSelectedDistrict(district);
    setFilteredDistricts([]);
    setSearchText(district.district);

    const index = serviceCenters.findIndex(
      (d) => d.district === district.district
    );
    setActiveMarker(index);

    const marker = markerRefs.current[index];
    if (marker) marker.openPopup();
  };

  // 🔹 Handle when "Search" button is clicked
  const handleSearch = () => {
    if (!searchText.trim()) {
      alert("Please type a district name!");
      return;
    }

    const found = serviceCenters.find((d) =>
      d.district.toLowerCase().includes(searchText.toLowerCase())
    );

    if (found) {
      handleSelect(found);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div className="min-h-screen rounded-3xl bg-base-200 p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-2">
        We are available in 64 districts
      </h1>

      {/* Search Box with dropdown & button */}
      <div className="flex flex-col items-center mb-6 gap-2 relative z-[9999]">
        <div className="flex w-full max-w-md gap-2 relative">
          <input
            type="text"
            placeholder="Search district..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered w-full"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button className="btn bg-[#CAEB66]" onClick={handleSearch}>
            Search
          </button>

          {/* 🔹 Dropdown suggestion list */}
          {filteredDistricts.length > 0 && (
            <ul
              className="
                absolute  left-0  top-full   mt-1    w-full 
                 bg-white  shadow-lg  rounded-lg   border z-[9999] max-h-60   overflow-y-auto
              "
            >
              {filteredDistricts.map((district, i) => (
                <li
                  key={i}
                  onClick={() => handleSelect(district)}
                  className="p-2 hover:bg-base-200 cursor-pointer"
                >
                  {district.district}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Map Section */}
      <div className="flex justify-center relative z-0">
        <div className="w-full max-w-4xl h-[650px] rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            center={position}  zoom={7} style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Smooth zoom to selected district */}
            <MapUpdater district={selectedDistrict} />

            {/* All service center markers */}
            {serviceCenters.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
                ref={(el) => (markerRefs.current[index] = el)}
              >
                <Popup>
                  <strong>{center.district}</strong> <br />
                  {center.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default BangladeshMap;
