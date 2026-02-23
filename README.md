# Nicolas Garlinski Blog — React App

This is the React conversion of the original HTML/CSS blog site.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar with dropdown + React Router links
│   ├── Footer.jsx      # Footer with social links
│   └── Sidebar.jsx     # Author sidebar widget
├── pages/
│   ├── Home.jsx        # Homepage with blog post cards
│   ├── About.jsx       # About me page
│   ├── Contact.jsx     # Contact form + Google Maps
│   └── BlogPost.jsx    # Dynamic blog post page (driven by slug)
├── data/
│   └── posts.js        # All blog post data (edit here to add/update posts)
├── App.jsx             # Main app with React Router routes
├── main.jsx            # Entry point
└── index.css           # Global styles (converted from style.css)
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

## Deploying to GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',   // <-- add this line
  plugins: [react()],
})
```

3. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Deploy:
```bash
npm run deploy
```

## Adding a New Blog Post

Edit `src/data/posts.js` and add a new entry to the `posts` array. The `slug` field controls the URL (`/blog/your-slug`).
