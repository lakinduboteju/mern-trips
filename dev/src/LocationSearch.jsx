import React, { useState, useRef, useEffect } from "react";

import {
    AdvancedMarker,
    Map,
    Pin,
    APIProvider,
} from "@vis.gl/react-google-maps";

import {
    PlaceOverview,
    SplitLayout,
    PlacePicker,
} from "@googlemaps/extended-component-library/react";

const LocationSearch = ({
    googleMapsApiKey,
    countries,
    locationType,
    zoom,
    placeholder,
    defaultCenter,
    onLocationChange,
}) => {
    const pickerRef = useRef(null);
    const [location, setLocation] = useState(undefined);

    useEffect(() => {
        if (onLocationChange) {
            onLocationChange(location);
        }
    },
    [location, onLocationChange]);

    return (
        <APIProvider
            apiKey={googleMapsApiKey}
            // solutionChannel="GMP_devsite_samples_v1_locationpicker"
            // version="beta"
        >
            <SplitLayout rowLayoutMinWidth={700}>
                <div slot="fixed" style={{ display: "contents" }}>
                    <PlacePicker
                    style={{ width: "97%" }}
                        ref={pickerRef}
                        forMap="gmap"
                        country={countries}
                        type={locationType}
                        placeholder={placeholder}
                        onPlaceChange={() => {
                            if (pickerRef.current?.value) {
                                setLocation(pickerRef.current.value);
                            } else {
                                setLocation(undefined);
                            }
                        }}
                    />
                    <PlaceOverview
                        size="large"
                        place={location}
                        googleLogoAlreadyDisplayed
                    />
                </div>
                <div slot="main" style={{ height: "100%" }}>
                    <Map
                        id="gmap"
                        mapId="8c732c82e4ec29d9"
                        center={location?.location ?? defaultCenter}
                        zoom={zoom}
                        gestureHandling="none"
                        fullscreenControl={false}
                        zoomControl={false}
                        keyboardShortcuts={false}
                        streetViewControl={false}
                        mapTypeControl={false}
                        scaleControl={false}
                        rotateControl={false}
                        scrollwheel={false}
                        clickableIcons={false}
                    >
                        {location?.location && (
                        <AdvancedMarker position={location.location}>
                            <Pin
                                // background={"#FBBC04"}
                                // glyphColor={"#000"}
                                // borderColor={"#000"}
                            />
                        </AdvancedMarker>
                        )}
                    </Map>
                </div>
            </SplitLayout>
        </APIProvider>
    )
}

export default LocationSearch;
