import { MapConfig, AlternativeTileLayers } from "../../types/map";

export const mapConfig: MapConfig = {
  defaultCenter: [40.7128, -74.006], // New York City
  defaultZoom: 13,
  tileLayer: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

export const alternativeTileLayers: AlternativeTileLayers = {
  stamenToner: {
    url: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png",
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>',
  },
  cartoLight: {
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
};
