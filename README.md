# Vezza.dev — Modular Farming Management

A modern web application for farm management and modular farming coordination.

## Getting Started

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd vezza-dev

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Technology Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   └── ...          # Feature components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── assets/          # Static assets
└── main.tsx         # Entry point
```

## Deployment

The application is configured to deploy to Cloudflare Workers. Update `wrangler.jsonc` for deployment configuration.
