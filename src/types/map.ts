export interface MapComponentProps {
  height?: number;
  center?: [number, number];
  zoom?: number;
}

export interface MapConfig {
  defaultCenter: [number, number];
  defaultZoom: number;
  tileLayer: string;
  attribution: string;
}

export interface TileLayerConfig {
  url: string;
  attribution: string;
}

export interface AlternativeTileLayers {
  stamenToner: TileLayerConfig;
  cartoLight: TileLayerConfig;
}
