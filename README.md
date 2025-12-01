# LazyFarmer Website

A modern, responsive website for LazyFarmer - connecting farmland owners, interns, venture partners, and NFT investors for productive farmland ventures in Bharat and beyond.

## Overview

LazyFarmer is a platform that brings together "the laziest bunch delivering the most productive farmland ventures in Bharat." This website serves as the landing page and community portal, offering multiple ways to collaborate:

- **Farmland Owner**: Collaborate with other farmland owners
- **Intern**: Invest time and expertise without capital
- **Venture Partner**: Contribute both time and capital
- **NFT Investor**: Invest small capital for passive income

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (Light/Dark mode)
- **Fonts**: DM Sans & Playfair Display (Google Fonts)

## Features

- 🎨 Modern, clean UI with dark mode support
- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ Accessible components built with Radix UI
- ⚡ Optimized performance with Next.js 16
- 🎯 Interactive option cards for different user types
- 🎬 YouTube channel integration
- 📝 FAQ section
- 🌓 System-aware theme switching

## Prerequisites

Before running this project, make sure you have:

- **Node.js** 18.x or later
- **npm** or **yarn** package manager

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lazyfarmer-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint to check for code issues

## Project Structure

```
lazyfarmer-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with fonts and theme
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components (buttons, cards, etc.)
│   ├── header.tsx        # Site header
│   ├── hero-section.tsx  # Hero section
│   ├── options-grid.tsx  # Four option cards
│   ├── faq-section.tsx   # FAQ/YouTube section
│   └── footer.tsx        # Site footer
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets (images, icons)
├── styles/              # Additional styles
└── tsconfig.json        # TypeScript configuration
```

## Customization

### Updating Form URLs

The option cards link to Google Forms. Update the URLs in `components/options-grid.tsx`:

```typescript
const options = [
  {
    formUrl: "https://forms.google.com/your-form-url",
    // ...
  },
]
```

### Changing YouTube Channel

Update the YouTube link in `components/faq-section.tsx`:

```typescript
<Link href="https://www.youtube.com/@your-channel">
```

### Theme Colors

Tailwind CSS configuration can be modified through the theme system. The project uses CSS variables for theming, defined in `app/globals.css`.

## Deployment

This website is deployed via [Cloudflare Pages](https://pages.cloudflare.com/).

### Deploying to Cloudflare Pages

1. Push your code to GitHub/GitLab
2. Connect your repository to Cloudflare Pages
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Framework preset**: Next.js (Static HTML Export)
4. Deploy!

Cloudflare Pages provides:
- Fast global CDN
- Automatic HTTPS
- Instant rollbacks
- Preview deployments for pull requests
- Zero configuration required

### Other Platforms

This project can also be deployed to:
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Deploy with AWS infrastructure
- **Self-hosted**: Run `npm run build` and `npm start`

## Learn More

### Next.js Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### Related Links
- [YouTube Channel](https://www.youtube.com/@realestatewithprashant)

## License

This project is private and proprietary.

## Support

For questions or support, please reach out through the contact forms on the website or visit our YouTube channel.

---

Made with 💚 by the LazyFarmer team

