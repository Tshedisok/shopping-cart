# Paradise Nursery Shopping Cart

Paradise Nursery is a front-end shopping application for browsing houseplants and managing a shopping cart. The app includes a landing page, a categorized product listing page, and a cart page with quantity controls.

## Features

- Landing page with background image, company information, and a Get Started link
- Product listing with 18 houseplants in 3 categories (6 plants per category)
- Redux Toolkit cart state with add, increase, decrease, and delete actions
- Header with navigation and a live cart item count on product and cart pages
- Shopping cart totals, Continue Shopping link, and Checkout (Coming Soon) message

## Tech Stack

- React 19
- Vite 8
- React Router (HashRouter for GitHub Pages)
- Redux Toolkit

## Prerequisites

Install these on a new machine before setup:

- [Node.js](https://nodejs.org/) 20 or newer (includes npm)
- Git (optional, for cloning the repository)

Verify versions:

```bash
node -v
npm -v
```

## Local Setup (New Machine)

### 1. Get the project files

Clone the repository:

```bash
git clone https://github.com/<your-github-username>/shopping-cart.git
cd shopping-cart
```

If you already have the folder locally, open a terminal in the project root.

### 2. Install dependencies

```bash
npm install
```

This installs React, Vite, Redux Toolkit, React Router, and build tooling.

### 3. Start the development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173/shopping-cart/`).

### 4. Build for production

```bash
npm run build
```

Output is written to the `dist` folder.

### 5. Preview the production build locally

```bash
npm run preview
```

### 6. Run lint checks

```bash
npm run lint
```

## Project Structure

```text
shopping-cart/
├── src/
│   ├── App.jsx          # Routes and landing page
│   ├── App.css          # Minimal layout and landing background styles
│   ├── AboutUs.jsx      # Company description paragraph
│   ├── ProductList.jsx  # Categorized plants and Add to Cart
│   ├── CartItem.jsx     # Shopping cart page
│   ├── CartSlice.jsx    # Redux cart slice
│   ├── Header.jsx       # Navbar and cart count
│   ├── plants.js        # Plant catalog data
│   ├── store.js         # Redux store configuration
│   └── main.jsx         # App entry point
├── public/
├── index.html
├── vite.config.js
└── package.json
```

## Routes

The app uses hash-based routing for GitHub Pages compatibility:

| Route | Page |
| --- | --- |
| `/#/` | Landing page |
| `/#/plants` | Product listing |
| `/#/cart` | Shopping cart |

## Images

Plant thumbnails and the landing background use placeholder images from [placehold.co](https://placehold.co/).

## GitHub Pages Deployment

This project is configured for a repository named `shopping-cart`:

- Vite `base` is set to `/shopping-cart/` in `vite.config.js`
- GitHub Actions workflow: `.github/workflows/deploy.yml`

After you push to `main` on GitHub:

1. Open the repository **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Wait for the **Deploy to GitHub Pages** workflow to finish

Your live site will be available at:

`https://<your-github-username>.github.io/shopping-cart/`

If you use a different repository name, update `base` in `vite.config.js` to match `/<repository-name>/`.

## Publishing to GitHub

See [GITHUB_SETUP.md](./GITHUB_SETUP.md) for step-by-step instructions to create a public GitHub repository and deploy this project.

## Course Submission Notes

When submitting file URLs for grading, use the public GitHub URLs for:

- `README.md`
- `src/AboutUs.jsx`
- `src/App.css`
- `src/App.jsx`
- `src/CartSlice.jsx`
- `src/ProductList.jsx`
- `src/CartItem.jsx`

Also submit your public repository URL and deployed GitHub Pages URL.
