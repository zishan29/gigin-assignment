# Pets list

## Overview

This project is a Pet Listing website built using Next.js and Tailwind CSS. It allows users to browse and search for pets based on animal type, breed, and location. The website incorporates state management using React hooks and `react-query` for data fetching. It also follows best coding practices, including the use of ESLint and Prettier for code quality.

## Project Setup

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zishan29/gigin-assignment.git
   ```
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install

   ```

3. Create a `.env.local` file in the root directory and add the following content:
   ```bash
   NEXT_PUBLIC_API_BASE_URL=http://pets-v2.dev-apis.com
   ```

### Running the Application

1. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design decisions

### Combobox for Animal and Breed Search

The Combobox component is used for selecting the animal type and breed. This component provides an interactive dropdown with search capabilities, enhancing the user experience by making it easier to find specific animals and breeds.

### Next.js over Vite

The decision to use Next.js instead of Vite was based on the following reasons:

- Built-in Routing: Next.js provides a file-based routing system, simplifying the process of creating and managing routes.

- Server-Side Rendering (SSR): Next.js supports SSR out-of-the-box, improving the performance and SEO of the application.

- API Routes: Next.js allows the creation of API routes within the same project, making it easier to handle server-side logic without setting up an additional backend server.

- Static Site Generation (SSG): Next.js supports SSG, enabling the generation of static HTML pages at build time for improved performance.

## Screenshots

![Screenshot 1](https://github.com/zishan29/gigin-assignment/tree/main/assets/screenshot1.png)

![Screenshot 2](https://github.com/zishan29/gigin-assignment/tree/main/assets/screenshot2.png)

## How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
