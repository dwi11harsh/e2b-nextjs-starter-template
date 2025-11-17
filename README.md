# Next.js E2B Template

A template for AI to write/create Next.js projects with a structured approach to organizing components, routes, and utilities.

## Setup Guide

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone or use this template repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

This template follows a specific structure for organizing Next.js projects:

- `app/` - Next.js App Router directory containing pages, layouts, and API routes
- `lib/` - Common utility functions used across the application
- `types/` - TypeScript type definitions for routes and shared types
- `public/` - Static assets

## File Documentation

### `app/page.tsx`

**Default Export:**

- `Home` - Main page component that renders the home page
  - **Input:** None
  - **Output:** React component
  - **Description:** Default page component for the root route

**Types Declared:**

- None

**Helper Functions:**

- None

**Components:**

- None

---

### `app/layout.tsx`

**Default Export:**

- `RootLayout` - Root layout component that wraps all pages
  - **Input:** `{ children: React.ReactNode }`
  - **Output:** React component
  - **Description:** Provides the root HTML structure, fonts (Geist Sans and Geist Mono), and global styles for the application

**Exported Constants:**

- `metadata` - Metadata configuration for the application
  - **Type:** `Metadata`
  - **Properties:**
    - `title: "Webdomain"`
    - `description: "Generated using Webdomain"`

**Types Declared:**

- None

**Helper Functions:**

- None

**Components:**

- None

---

### `app/api/route.ts`

**Exported Functions:**

- `GET` - API route handler for GET requests
  - **Input:** None
  - **Output:** `NextResponse` with JSON `{ hello: "world" }`
  - **Description:** Example API route that returns a simple JSON response

**Types Declared:**

- None (types for route input/output should be declared in `types/` directory)

**Helper Functions:**

- `addTwoNumbers` - Adds two numbers and returns the result
  - **Input:** `a: number` - First number to add, `b: number` - Second number to add
  - **Output:** `number` - The sum of the two numbers
  - **Description:** Adds two numbers and returns the result

**Components:**

- None

---

### `lib/someLibFunction.ts`

**Default Export:**

- None

**Types Declared:**

- None

**Helper Functions:**

- None

**Components:**

- None

**Note:** This directory should only contain most commonly used functions. Other functions should be declared inside the route/page file itself.

---

### `types/someRoute.ts`

**Exported Types:**

- `ExampleRouteInputType` - Example type for route input parameters

  - **Properties:**
    - `params: { a: number, b: number }`
  - **Description:** Example type definition for route input parameters

- `ExampleRouteOutputType` - Example type for route output
  - **Properties:** None (placeholder)
  - **Description:** Example type definition for route output

**Default Export:**

- None

**Helper Functions:**

- None

**Components:**

- None

---

### `app/globals.css`

Global CSS file that imports Tailwind CSS styles.

---

### Configuration Files

- `next.config.ts` - Next.js configuration file
- `tsconfig.json` - TypeScript configuration with path aliases (`@/*` maps to root)
- `package.json` - Project dependencies and scripts
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS

## Code Structure Guidelines

### Route Files (`app/api/route.ts`)

- Define types related to the file at the top (excluding route input/output types)
- Route input/output types should be declared in the `types/` directory
- Define helper functions with clear input/output types and JSDoc documentation
- Use the following documentation format:
  ```typescript
  /**
   * Function description.
   * Function Name
   * @param {type} paramName - Parameter description.
   * @returns {type} Return value description.
   */
  ```

### Page Files (`app/page.tsx`)

- Import statements at the top
- Type declarations
- Default export component
- Variable, constants & hooks inside the component
- Helper functions defined below the main component
- Components for the particular page defined below helper functions

### Library Files (`lib/`)

- Should only contain most commonly used functions
- Other functions should be declared inside the route/page file itself

### Type Files (`types/`)

- Should contain route input/output types
- Should contain shared type definitions used across the application

## Current Files

- `app/` - Next.js App Router directory containing pages, layouts, and API routes
  - `api/route.ts` - API route handler for GET requests
  - `favicon.ico` - Site favicon
  - `globals.css` - Global CSS file with Tailwind CSS imports
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page component
- `lib/` - Common utility functions used across the application
  - `someLibFunction.ts` - Example library function file
- `types/` - TypeScript type definitions for routes and shared types
  - `someRoute.ts` - Example route type definitions
- `public/` - Static assets
  - (empty)
