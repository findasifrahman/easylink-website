# Easy Link - Business Landing Page

A fully responsive, modern business landing page for Easy Link, a Guangzhou-based consulting firm specializing in company setup, visa services, accounting, and global expansion.

## 🚀 Features

- **Fully Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Hover effects, transitions, and micro-interactions
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Performance Optimized** - Fast loading with Next.js and Tailwind CSS
- **Accessibility** - WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animations**: CSS transitions and Tailwind animations
- **Icons**: SVG icons and emojis

## 📱 Sections

1. **Navbar** - Sticky navigation with logo, phone number, and social icons
2. **Hero Section** - Full-screen landing with call-to-action
3. **Chairman Video** - Message from the chairman with 3D styling
4. **About Section** - Company information with service highlights
5. **Mission & Vision** - Company mission, vision, and core values
6. **Services** - Comprehensive service offerings with cards
7. **Testimonials** - Client testimonials with statistics
8. **Gallery** - Company journey in pictures
9. **Contact** - Contact information and form
10. **Footer** - Language switcher and company details

## 🎨 Design Features

- **Material Design Theme** - Modern, clean aesthetic
- **3D Effects** - Subtle shadows and transforms
- **Gradient Backgrounds** - Blue color scheme throughout
- **Hover Animations** - Interactive elements with smooth transitions
- **Card-based Layout** - Organized content presentation
- **Social Integration** - LinkedIn, WhatsApp, YouTube, WeChat

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd easylink-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
easylink-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── ChairmanVideo.tsx    # Chairman video section
│   ├── About.tsx            # About section
│   ├── MissionVision.tsx    # Mission & Vision section
│   ├── Services.tsx         # Services section
│   ├── Testimonials.tsx     # Testimonials section
│   ├── Gallery.tsx          # Gallery section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer component
├── public/
│   └── logo.png             # Company logo (placeholder)
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## 🎯 Customization

### Colors
The primary color scheme uses blue tones. You can customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
      }
    }
  }
}
```

### Content
Update content in each component file to match your business needs.

### Images
Replace placeholder images in the `public/` directory with your actual images.

## 📞 Contact Information

- **Phone**: +86 18989410063
- **Email**: info@easylinkchina.com
- **Location**: Guangzhou, Guangdong Province, China

## 🌐 Languages

The footer includes language switcher placeholders for:
- English (EN)
- French (FR) 
- Arabic (AR)
- Bengali (BN)

## 📱 Social Media

- LinkedIn
- WhatsApp
- YouTube
- WeChat

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and supporters

---

**Easy Link** - Your Business, Our Solution 