# Developer Portfolio Website

A modern, responsive developer portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a beautiful dark theme with smooth animations and a professional design.

## ✨ Features

- **Modern Design**: Clean, professional dark theme with gradient accents
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Component-Based**: Modular React components for easy maintenance
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Contact Form**: Functional contact form (ready for backend integration)
- **Social Links**: Easy integration with social media profiles

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd developer-portfolio
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
developer-portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects showcase
│   ├── Experience.tsx       # Work experience
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer component
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **`app/layout.tsx`**: Change title and description
2. **`components/Hero.tsx`**: Update name, description, and social links
3. **`components/About.tsx`**: Modify personal story and experience
4. **`components/Skills.tsx`**: Adjust skill levels and technologies
5. **`components/Projects.tsx`**: Add your own projects
6. **`components/Experience.tsx`**: Update work history and education
7. **`components/Contact.tsx`**: Change contact details and social links
8. **`components/Footer.tsx`**: Update name and description

### Colors and Theme

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Styling

Custom CSS classes are defined in `app/globals.css`. You can modify:

- `.gradient-text`: Gradient text effect
- `.card`: Card component styling
- `.btn-primary` & `.btn-secondary`: Button styles
- `.section-padding`: Section spacing

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Sections

1. Create a new component in the `components/` folder
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/Navbar.tsx`

### Adding New Projects

Edit the `projects` array in `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/username/project',
    live: 'https://project-demo.com',
    featured: true // Set to true for featured projects
  }
]
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:

- Open an issue on GitHub
- Contact me through the contact form
- Reach out on social media

---

**Happy Coding! 🚀**
