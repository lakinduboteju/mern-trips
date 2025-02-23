import LocationSearch from "./LocationSearch";

const App = () => {
    return (
        <div style={{ width: "700px", height: "290px" }}>
        <LocationSearch
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? ""}
            countries={[]}
            locationType="locality"
            zoom={10}
            placeholder="Search for a city"
            defaultCenter={{ lat: 38, lng: -98 }}
            onLocationChange={(location) => {
                console.log(location);
            }}
        />
        </div>
    )
};

export default App
