# 🗺️ 📸 route-snap

Convert route coordinates into a snapshot image with customizable styling options.
Perfect for visualizing routes from map services like Kakao Maps into customizable canvas images.

## Installation

```bash
npm install route-snap
# or
yarn add route-snap
# or
pnpm add route-snap
```

## Features

- Convert route coordinates to image
- Customizable canvas size and styling
- Background grid support
- Built-in Kakao Maps adapter
- TypeScript support

## Usage

```typescript
import { RouteSnapshot, fromKakaoLatLng } from "route-snap";

// Basic usage
const snapshot = new RouteSnapshot({
  canvasRef: { current: canvasElement },
  routes: coordinates,
});

const imageUrl = snapshot.generate();

// With Kakao Maps + custom config
const snapshot = new RouteSnapshot({
  canvasRef: { current: canvasElement },
  routes: fromKakaoLatLng(kakaoCoordinates),
  config: {
    grid: {
      color: "red",
      gap: 15,
    },
  },
});
```

## Configuration

### Required Props

```typescript
interface RouteSnapshotOptions {
  canvasRef: { current: HTMLCanvasElement | null }; // Canvas element reference
  routes: Array<{ latitude: number; longitude: number }>; // Route coordinates
}
```

### Optional Configuration

```typescript
interface RouteSnapshotConfig {
  canvas?: {
    width?: number; // default: 600
    height?: number; // default: 600
    paddingX?: number; // default: 60
    paddingY?: number; // default: 60
    bgColor?: string; // default: '#f0f0f0'
  };
  grid?: {
    enabled?: boolean; // default: true
    color?: string; // default: '#cccccc'
    gap?: number; // default: 20
    width?: number; // default: 0.5
  };
  line?: {
    color?: string; // default: '#FFAE00'
    width?: number; // default: 3
  };
}
```

## Examples

Here are some examples of different configurations and their results.

### Basic Example

```typescript
const snapshot = new RouteSnapshot({
  canvasRef: { current: canvasElement },
  routes: coordinates,
  },
});
```

| Map Route                                                                                                                    | Generated Canvas Image                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <img alt="Route on map" src="https://github.com/user-attachments/assets/5e5dad02-bd35-40d1-8093-cc4fcc9ce59c" width="400" /> | <img alt="Route on canvas" src="https://github.com/user-attachments/assets/cd292baa-41b1-4b43-b93d-3c07197ce30c" width="400" /> |

### Dark Theme with Yellow Route

```typescript
const snapShot = new RouteSnapshot({
  canvasRef: { current: canvasRef.current },
  routes: coordinates,
  config: {
    grid: {
      color: "#fcfcfc",
    },
    canvas: {
      bgColor: "#0c0c0c",
    },
    line: {
      color: "yellow",
      width: 8,
    },
  },
});
```

<img src="https://github.com/user-attachments/assets/6ae889fb-1c4b-4962-bd36-f62f8b377245" width="400" alt="Dark theme with grid" />

### Dark Theme Without Grid

```typescript
const snapShot = new RouteSnapshot({
  canvasRef: { current: canvasRef.current },
  routes: coordinates,
  config: {
    grid: {
      enabled: false,
    },
    canvas: {
      bgColor: "#0c0c0c",
    },
    line: {
      color: "yellow",
      width: 8,
    },
  },
});
```

<img src="https://github.com/user-attachments/assets/7e4c2a40-dac1-40f2-bdbb-537c45a60100" width="400" alt="Route snapshot with dark theme"/>

### 🪄 You can customize various aspects of the snapshot including

- Canvas size and background color
- Grid visibility, color, and gap size
- Route line color and width
- Padding and other layout options

Check the Configuration section for all available options.
