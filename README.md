# Paint App

A browser-based drawing app built with React, Vite, and SVG. Create simple vector shapes on a full-screen canvas, color them, move them around, rotate selected shapes, and delete them when you no longer need them.

## Live Demo

- https://react-canvas-ruby.vercel.app/

## Features

- Draw rectangles, circles, and triangles on the canvas.
- Pick from a built-in color palette and apply colors to selected shapes.
- Select shapes directly on the canvas.
- Drag selected shapes to reposition them.
- Rotate selected shapes with the rotation handle.
- Remove a selected shape with `Backspace` or `Delete`.

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- SVG for rendering shapes

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## How It Works

- Choose a shape from the toolbox.
- Click on the canvas to place the shape.
- Pick a color from the palette to fill the selected shape.
- Click an existing shape to select it.
- Drag the selected shape to move it.
- Use the rotation handle above the selected shape to rotate it.
- Press `Delete` or `Backspace` to remove the selected shape.

## Project Structure

```text
src/
	components/   # Canvas, toolbox, color picker, and rotation handle
	hooks/        # Interaction logic for drawing, dragging, selecting, coloring, and deleting
	shapes/       # SVG shape renderers
```

## Notes

- The app uses SVG shapes, so the canvas stays lightweight and resolution independent.
- Shape state is managed in React and updated through custom hooks.
