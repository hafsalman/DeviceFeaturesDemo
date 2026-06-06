// utils/helpers.js

// Format latitude and longitude to 4 decimal places
export const formatCoordinates = (latitude, longitude) => {
  return {
    lat: latitude.toFixed(4),
    lon: longitude.toFixed(4),
  };
};

// Delay function (useful for loaders or async actions)
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));