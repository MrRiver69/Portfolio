# Game Designer Portfolio

A portfolio website for a game designer, showcasing work on projects and experience in 3D modeling and game design.

## Tech Stack

- **Frontend**: Next.js with React
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages
- `/components` - Reusable React components
- `/public` - Static assets

## Pages

- **About Me** - Main landing page with a description and project carousel
- **Games** - Showcase of game design projects
- **Models** - Gallery of 3D modeling work
- **Contact** - Contact form and information

## Customization

### Adding Your Own Projects

1. Replace the sample projects in `app/games/page.tsx` and `app/models/page.tsx` with your actual projects.
2. Add your own project images to the `public` directory and update the image paths in the carousel and project cards.

### Updating Personal Information

1. Update your name in the Header component
2. Modify the About Me content in the AboutMe component
3. Update contact information in the Contact page

## Deployment

This project can be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.

```bash
npm run build
```

This will create an optimized production build that can be deployed.
