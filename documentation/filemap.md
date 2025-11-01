# root
- **Local Path**: `C:\dev\plano_saude_lp\root-saude-lp\`
- **Repository**: https://github.com/raphaelfeliz/amil-dental-lp-1.git
- **Project Type**: React + TypeScript + Vite Health Insurance Landing Page

## config files

### vite.config.ts
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\vite.config.ts`
**Purpose**: Vite build tool configuration for React development
**Imports**: `defineConfig` from 'vite', `react` plugin from '@vitejs/plugin-react'
**Exports**: Default configuration object with React plugin
**Notes**: Standard Vite + React setup for fast development and build

### tsconfig.json
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\tsconfig.json`
**Purpose**: Root TypeScript configuration with project references
**Imports**: None
**Exports**: References to app and node configurations
**Notes**: Composite configuration that delegates to specific tsconfig files

### tsconfig.app.json
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\tsconfig.app.json`
**Purpose**: TypeScript configuration for application source code
**Imports**: None
**Exports**: Compiler options for React JSX and ES2022 target
**Notes**: Includes strict mode, React JSX transform, and source folder

### tsconfig.node.json
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\tsconfig.node.json`
**Purpose**: TypeScript configuration for Node.js tooling (Vite config)
**Imports**: None
**Exports**: Node.js specific compiler options
**Notes**: ES2023 target for Vite configuration files

### eslint.config.js
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\eslint.config.js`
**Purpose**: ESLint configuration for code quality and React best practices
**Imports**: ESLint configs, TypeScript ESLint, React plugins
**Exports**: ESLint configuration array
**Notes**: Includes React hooks rules, TypeScript support, and Vite refresh

### package.json
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\package.json`
**Purpose**: npm package configuration and dependencies
**Scripts**: dev, build, lint, preview
**Dependencies**: React 19.1.1, React DOM 19.1.1
**Dev Dependencies**: Vite, TypeScript, ESLint, React types
**Notes**: ES module type, private package

## main files

### index.html
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\index.html`
**Purpose**: Main HTML entry point for the application
**Imports**: /src/main.tsx module script
**Exports**: None
**Notes**: Contains root div and Vite script tag, updated title "RootSaúde - Planos de Saúde"

### README.md
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\README.md`
**Purpose**: Project documentation and setup instructions
**Content**: Vite + React + TypeScript template information
**Notes**: Standard Vite template README with React compiler notes

## source files

### src/main.tsx
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\src\main.tsx`
**Purpose**: React application entry point and DOM rendering
**Imports**: React StrictMode, createRoot, index.css, App component
**Exports**: None (side effects only)
**Notes**: Renders App component in StrictMode to root element

### src/App.tsx
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\src\App.tsx`
**Purpose**: Main application component orchestrating all page sections
**Imports**: All page components (Header, Hero, Services, About, Contact, Footer)
**Exports**: Default App component
**Notes**: Renders complete landing page layout in sequential order

### src/App.css
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\src\App.css`
**Purpose**: Global application styles and utility classes
**Content**: Container styles, button utilities (.btn-primary, .btn-secondary)
**Notes**: Shared styles used across components, responsive design helpers

### src/index.css
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\src\index.css`
**Purpose**: Global CSS reset, base typography, and root styling
**Content**: CSS reset, Inter font family, color scheme, accessibility focus styles
**Notes**: Healthcare industry colors, smooth scrolling, mobile-first approach

## component files

### src/components/Header.tsx & Header.css
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\src\components\Header.*`
**Purpose**: Navigation bar with logo, menu, and CTA button
**Props**: None
**State**: None
**Notes**: Sticky positioning, responsive navigation, RootSaúde branding

### src/components/Hero.tsx & Hero.css
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\src\components\Hero.*`
**Purpose**: Main banner section with headline and call-to-action buttons
**Props**: None
**State**: None
**Notes**: Grid layout, placeholder image, primary and secondary CTAs

### src/components/Services.tsx & Services.css
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\src\components\Services.*`
**Purpose**: Feature grid showcasing 6 key health insurance benefits
**Props**: None
**State**: Static services array
**Notes**: Responsive grid, hover effects, emoji icons, healthcare features

### src/components/About.tsx & About.css
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\src\components\About.*`
**Purpose**: Company information section with statistics
**Props**: None
**State**: None
**Notes**: Two-column layout, statistics display (1M+ clients, 5K+ network, 24/7 support)

### src/components/Contact.tsx & Contact.css
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\src\components\Contact.*`
**Purpose**: Contact form and business information
**Props**: None
**State**: Form data (name, email, phone, message)
**Notes**: Controlled form inputs, validation, contact details, responsive layout

### src/components/Footer.tsx & Footer.css
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\src\components\Footer.*`
**Purpose**: Site footer with links, social media, and company information
**Props**: None
**State**: None
**Notes**: Multi-column layout, social links, comprehensive site navigation

## asset files

### src/assets/react.svg
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\src\assets\react.svg`
**Purpose**: React logo asset (default Vite template)
**Usage**: Currently unused in health insurance theme
**Notes**: Can be replaced with healthcare-related imagery

### public/vite.svg
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\public\vite.svg`
**Purpose**: Vite logo for favicon (default template)
**Usage**: Current favicon in index.html
**Notes**: Should be replaced with RootSaúde brand favicon

## documentation files

### documentation/project-summary.md
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\documentation\project-summary.md`
**Purpose**: Comprehensive project documentation and specifications
**Content**: Technology stack, architecture, deployment info, future enhancements
**Notes**: Living document for project management and development guidelines

### documentation/filemap.md
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\documentation\filemap.md`
**Purpose**: This file - complete project structure mapping
**Content**: File purposes, imports/exports, technical notes
**Notes**: Helps developers understand project organization and dependencies

## git & github files

### .github/copilot-instructions.md
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\.github\copilot-instructions.md`
**Purpose**: GitHub Copilot workspace-specific instructions
**Content**: Development workflow checklist and guidelines
**Notes**: Guides AI-assisted development processes

### .gitignore
**Path**: `C:\dev\plano_saude_lp\root-saude-lp\.gitignore`
**Purpose**: Git ignore rules for Node.js and Vite projects
**Content**: node_modules, dist, logs, IDE files exclusions
**Notes**: Standard Vite template ignore patterns