# 🌾 LazyFarmer Website

Welcome to LazyFarmer - Farmland Ventures in Bharat. Join the laziest bunch delivering the most productive farmland ventures in Bharat and beyond.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (React 19)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) + Custom Components
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme:** Dark/Light mode with [next-themes](https://github.com/pacocoursey/next-themes)
- **Typography:** DM Sans & Playfair Display (Google Fonts)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- Git

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Rejoiceindia/lazyfarmer-website.git
cd lazyfarmer-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment to Cloudflare Pages

### Automatic Deployment (Recommended)

1. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create application** → **Pages**
   - Connect your GitHub repository

2. **Configure Build Settings:**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   Root directory: /
   Node version: 18 or higher
   ```

3. **Deploy:**
   - Click "Save and Deploy"
   - Your site will be live at `https://lazyfarmer-website.pages.dev`

### Manual Deployment

```bash
npm run build
npx wrangler pages deploy .next
```

## 📁 Project Structure

```
lazyfarmer-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── header.tsx        # Site header
│   ├── hero-section.tsx  # Hero section
│   ├── options-grid.tsx  # Options grid
│   ├── faq-section.tsx   # FAQ section
│   └── footer.tsx        # Site footer
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Features

- ✨ Modern, responsive design
- 🌓 Dark/Light theme support
- 📱 Mobile-first approach
- ⚡ Optimized performance
- 🎯 SEO-friendly
- ♿ Accessible UI components
- 🔄 Smooth animations and transitions

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Environment Variables

Currently, this project doesn't require environment variables. If you add any APIs or services, create a `.env.local` file:

```bash
# Example
NEXT_PUBLIC_API_URL=your_api_url
```

## 🔧 Configuration

### Next.js Config (`next.config.mjs`)

- TypeScript build errors are currently ignored for faster development
- Images are unoptimized (required for Cloudflare Pages)

### Tailwind CSS

The project uses Tailwind CSS 4 with custom configuration for design system consistency.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👥 Team

**Maintained by:** Rejoice India

## 🐛 Issues

Found a bug? Please open an issue on [GitHub Issues](https://github.com/Rejoiceindia/lazyfarmer-website/issues).

## 📞 Contact

For questions or support, please reach out to the team.

---

**Built with ❤️ by the LazyFarmer Team**
