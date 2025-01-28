export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface RoutePoint {
  latitude: number;
  longitude: number;
}

export interface RouteSnapshotConfig {
  canvas: {
    width: number;
    height: number;
    paddingX: number;
    paddingY: number;
    bgColor: string;
  };
  grid: {
    enabled: boolean;
    color: string;
    gap: number;
    width: number;
  };
  line: {
    color: string;
    width: number;
  };
}

export interface RouteSnapshotOptions {
  canvasRef: { current: HTMLCanvasElement | null };
  routes: RoutePoint[];
  config?: DeepPartial<RouteSnapshotConfig>;
}
