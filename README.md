# Electronics – Modern Next.js Landing Page

A modern and responsive electronics website built with **Next.js**, **React**, **Tailwind CSS**, and **Radix UI**. This project includes reusable UI components, responsive layouts, and scalable architecture for building professional web applications.

## Features

- Responsive landing page design
- Built with Next.js 16 + TypeScript
- Tailwind CSS styling
- Accessible UI using Radix UI
- Reusable component architecture
- Forms, toast notifications, dialogs, and navigation components
- Organized project structure for scalability and maintenance

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI
- PostCSS

---

## Project Structure

```bash
app/                # App Router pages and global styles
components/
├── site/           # Hero, services, testimonials, footer sections
└── ui/             # Reusable UI components
hooks/              # Custom React hooks
lib/                # Utility functions
public/             # Static assets
styles/             # Global styles
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/gmulisa6544/Retake.git
cd Retake
```

Install dependencies:

```bash
npm install
```

---

## Run Development Server

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

in your browser.

---

## Build for Production

Build the application:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

---

## Configuration Notes

- `next.config.mjs` ignores TypeScript build errors
- Image optimization is disabled
- Tailwind CSS is configured using `postcss.config.mjs`
- Uses React `^19`

---

## Future Improvements

- Add backend/API integration
- Add authentication system
- Improve UI animations
- Add dashboard functionality
- Deploy publicly
- Optimize performance and SEO

---

## Screenshots

Add screenshots of your application here.

Example:

```md
![Homepage](./public/screenshot.png)
```

---

## Author

**Geleta Mulisa**

GitHub:  
https://github.com/gmulisa6544

---

## License

This project is provided without a license. Add an MIT License or another license if needed.
