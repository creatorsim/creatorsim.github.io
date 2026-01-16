# CREATOR Website

> **didaCtic and geneRic assEmbly progrAmming simulaTOR**

Official website for CREATOR, an educational integrated development environment for assembly programming developed by the ARCOS group at Universidad Carlos III de Madrid (UC3M).

**Live Site**: [https://creatorsim.github.io](https://creatorsim.github.io)

## 📖 About

This repository contains the source code for the CREATOR project website, showcasing:

- Project information and features
- Academic publications and research
- Version history and evolution
- Team members and contributors
- Documentation and resources

## 🛠️ Tech Stack

- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[Vite](https://vitejs.dev/)** - Next-generation frontend build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Flowbite](https://flowbite.com/)** - UI component library
- **[FontAwesome](https://fontawesome.com/)** - Icon library
- **[js-yaml](https://github.com/nodeca/js-yaml)** - YAML parser for content management

## 📁 Project Structure

```
creatorsim.github.io/
├── index.html                      # Entry HTML file
├── src/
│   ├── App.vue                     # Root Vue component
│   ├── main.js                     # Application entry point
│   └── components/
│       ├── AboutSection.vue        # About section component
│       ├── AppFooter.vue           # Footer component
│       ├── AppHeader.vue           # Header/navigation component
│       ├── AuthorsSection.vue      # Authors section component
│       ├── ContributorsSection.vue # Contributors section component
│       ├── EvolutionSection.vue    # Version history component
│       ├── HeroSection.vue         # Hero/landing section
│       └── PublicationsSection.vue # Publications section component
├── public/
│   ├── content/
│   │   ├── authors.yml             # Author information
│   │   ├── contributors.yml        # Contributors information
│   │   ├── publications.yml        # Publications data
│   │   └── evolution.yml           # Version history data
│   └── images/                     # Static images and assets
├── css/
│   └── style.css                   # Custom styles
├── package.json                    # Project dependencies
├── vite.config.js                  # Vite configuration
└── tailwind.config.js              # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **bun** package manager (or use npm/yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/creatorsim/creatorsim.github.io.git
   cd creatorsim.github.io
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

### Development

Run the development server with hot-reload:

```bash
bun run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

Build the project for production:

```bash
bun run build
```

The output will be generated in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
bun run preview
```

## Content Management

Content is managed through YAML files in the `public/content/` directory:

- **`authors.yml`** - Team member profiles and information
- **`contributors.yml`** - Project contributors
- **`publications.yml`** - Academic publications and research papers
- **`evolution/evolution.yml`** - Version history and release information

Edit these files to update the website content without touching the code.

## Customization

### Styling

- **Tailwind CSS**: Utility classes are used throughout the components
- **Custom CSS**: Additional styles can be added to `css/style.css`
- **Theme**: Dark mode support is built-in with system preference detection

### Components

All Vue components are located in `src/components/`. Each section of the website is a separate component for easy maintenance and modification.

## 📦 Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `master` branch.

To deploy manually:

1. Build the project: `npm run build`
2. Deploy the `dist/` directory to your hosting service

## ⚖️ License

CREATOR is open-source software licensed under LGPL-3.0.

## 👥 Team

Developed and maintained by the **ARCOS** group at Universidad Carlos III de Madrid.

## 🔗 Related Links

- **[CREATOR Main Repository](https://github.com/creatorsim/creator)** - The CREATOR simulator itself
- **[ARCOS Group](https://www.arcos.inf.uc3m.es/)** - Research group homepage
- **[UC3M University](https://www.uc3m.es/)** - Universidad Carlos III de Madrid
