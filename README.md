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

