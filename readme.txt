# Modern React App with Material UI and TypeScript

A modular React application built with component-based architecture and TypeScript.

## Quick Start
```bash
npm install
npm run dev
```

## Project Structure
```
src/
  ├── components/          # Feature-based folders
  │   ├── DataTable/      
  │   │   ├── DataTable.tsx
  │   │   └── CustomDataGrid.tsx    # Reusable grid component
  │   ├── Map/
  │   │   ├── MapComponent.tsx      # Main map wrapper
  │   │   ├── LocateControl.tsx     # Location control
  │   │   ├── mapConfig.ts         # Map settings
  │   │   └── mapStyles.ts         # Map-specific styles
  │   ├── Layout.tsx               # App layout structure
  │   ├── MainContent.tsx          # Main content area
  │   └── Navbar.tsx               # Top navigation
  ├── contexts/           # Global state
  │   ├── ColorModeContext.tsx     # Theme management
  │   └── FeatureFlagContext.tsx   # Feature toggles
  ├── types/             # TypeScript definitions
  ├── data/              # Mock data
  └── theme/             # MUI customization
```

## Features
- 🎨 Component-based architecture
- 🌙 Auto dark/light mode (6PM-6AM)
- 📊 Sortable data tables
- 🗺️ Interactive maps with location
- 📱 Responsive layout

## Core Dependencies
- @mui/material: ^5.15.11
- @mui/x-data-grid: ^6.19.6
- react: ^18.2.0
- leaflet/react-leaflet: ^1.9.4
- typescript: ^5.6.3

## Development
- Each feature has its own folder with related files
- Components are single-purpose and modular
- Global state managed via Context
- TypeScript for type safety
- Styles via Material UI + Emotion

## Requirements
- Node.js 16+
- npm 7+