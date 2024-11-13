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
  │   │   ├── DataTable.tsx         # Main table component
  │   │   └── CustomDataGrid.tsx    # Reusable grid wrapper
  │   ├── Map/
  │   │   ├── MapComponent.tsx      # Main map wrapper
  │   │   ├── LocateControl.tsx     # Location control
  │   │   ├── mapConfig.ts         # Map settings
  │   │   └── mapStyles.ts         # Map-specific styles
  │   ├── Layout.tsx               # App layout structure
  │   ├── MainContent.tsx          # Main content area
  │   └── Navbar.tsx               # Top navigation
  ├── lib/                # Business logic
  │   ├── color-mode/     # Theme management
  │   └── feature-flags/  # Feature toggles
  ├── types/             # TypeScript definitions
  ├── data/              # Mock data
  └── theme/             # MUI customization
```

## Features

- 🎨 **Component-based Architecture**
  - Feature-focused folder structure
  - Single-purpose components
  - Reusable custom hooks
- 🌙 **Theme System**

  - Auto dark/light mode (6PM-6AM)
  - Material UI v5 integration
  - Customizable theme settings

- 📊 **Data Management**

  - Sortable data tables
  - Pagination support
  - Type-safe data handling

- 🗺️ **Map Integration**
  - Interactive maps
  - Location services
  - Custom map controls

## Core Dependencies

```json
{
  "@mui/material": "^5.15.11",
  "@mui/x-data-grid": "^6.19.6",
  "react": "^18.2.0",
  "leaflet": "^1.9.4",
  "typescript": "^5.6.3"
}
```

## Development Guidelines

- Each feature lives in its own folder with related files
- Use TypeScript interfaces for all props
- Context for global state management
- Extract reusable logic to custom hooks
- Keep components focused and single-purpose

## Deployment to GitHub Pages

1. **Build and Deploy**

   ```bash
   # Build the production version
   npm run build

   # Delete the old gh-pages branch locally and remotely
   git push origin --delete gh-pages
   git branch -D gh-pages

   # Create and push a new gh-pages branch with the latest build
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

If you still get a rejection error, you can force push:

```bash
# Alternative force push method if needed
git push origin `git subtree split --prefix dist main`:gh-pages --force
```

The site will be available at: `https://mattsilv.github.io/react-material-boilerplate/`

Note: Make sure your vite.config.ts has the correct base URL:

```typescript
export default defineConfig({
  base: "/react-material-boilerplate/", // Matches your repository name
  // ... other config
});
```

## Requirements

- Node.js 16+
- npm 7+
