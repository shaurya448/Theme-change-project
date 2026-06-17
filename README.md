# Theme Changer

A simple light/dark theme toggle built with vanilla HTML, CSS, and JavaScript. Click the button to switch the page between light and dark mode.

## Demo

Click the **Change theme** button on the page to toggle between light and dark themes. The current mode is also logged to the browser console.

## Features

- Light and dark mode toggle
- Single button control
- Lightweight — no frameworks or dependencies
- Console logging of the active mode

## Project Structure

```
.
├── index.html      # Main HTML file
├── jstheme.css     # Theme styles (light/dark)
└── mode.js         # Theme toggle logic
```

## How It Works

- `index.html` contains a single button (`#btn1`) and links the CSS and JS files.
- `jstheme.css` defines two classes, `.dark` and `.light`, which set the background and text colors for each theme.
- `mode.js` listens for clicks on the button, tracks the current mode in a variable, and toggles the `dark`/`light` classes on the `<body>` element accordingly.

## Getting Started

### Option 1: Open directly
Simply open `index.html` in any web browser.

### Option 2: Use Live Server (VS Code)
1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html` in the file explorer.
3. Select **Open with Live Server**.

## Usage

1. Open the page in your browser.
2. Click the **Change theme** button.
3. The page background and text color will toggle between light and dark.

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla, ES6)

## Future Improvements

- Persist theme choice using `localStorage`
- Add smooth CSS transitions between themes
- Support a system-preference-based default theme (`prefers-color-scheme`)
- Add an icon (sun/moon) instead of plain text on the button

## License

This project is open source and available for personal or educational use.