# 🎬 Que - Entertainment Watchlist & Social Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)

> A comprehensive entertainment tracking platform that combines TV show/movie watchlists with sports tracking and social features, including watch party functionality for synchronized viewing experiences with friends.

## ✨ Features

### 🎯 **Personal Tracking**

- **Smart Watchlists**: Multiple custom lists with tags and categories
- **Progress Tracking**: Episode-by-episode progress with visual indicators
- **Rating System**: Rate shows, seasons, episodes, and sports events
- **Analytics Dashboard**: Viewing statistics and personalized insights

### 👥 **Social Features**

- **Friend System**: Connect with friends and follow their viewing activity
- **Activity Feed**: Real-time updates on friends' progress and ratings
- **Social Reviews**: Share thoughts and discuss content with friends
- **Spoiler Protection**: Configurable filters based on viewing progress

### 🎉 **Watch Parties**

- **Synchronized Viewing**: "Press play together" coordination system
- **Real-time Chat**: Live discussion during viewing sessions
- **Multi-platform Support**: Works with any streaming service
- **Group Management**: Create and manage viewing groups

### 🔍 **Content Discovery**

- **Advanced Search**: Filter by genre, platform, rating, release year
- **Personalized Recommendations**: AI-powered suggestions
- **Trending Content**: Popular shows and upcoming releases
- **Where to Watch**: Streaming service availability integration

## 🏗️ Architecture

### **Monorepo Structure**

```
que/
├── apps/
│   ├── backend/          # NestJS API server
│   ├── web/             # React web application
│   └── mobile/          # React Native/Expo app
├── packages/
│   ├── shared/          # Shared TypeScript types
│   └── ui/              # Shared UI components
└── docs/                # Documentation
```

### **Technology Stack**

- **Backend**: NestJS, PostgreSQL, Prisma, Socket.io, JWT
- **Web Frontend**: React, TypeScript, React Router, Axios
- **Mobile**: React Native (Expo), TypeScript, React Navigation
- **Real-time**: WebSockets (Socket.io) for live features
- **External APIs**: TMDB for content data, streaming service APIs

## 🚀 Quick Start

### **Prerequisites**

- Node.js 18+ and npm
- PostgreSQL 14+
- Git

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/que
   cd que-entertainment-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment setup**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Database setup**

   ```bash
   # Start PostgreSQL service
   npm run db:setup
   ```

5. **Start development servers**

   ```bash
   # Start all applications in development mode
   npm run dev

   # Or start individually:
   npm run dev:backend    # API server on :3001
   npm run dev:web       # Web app on :3000
   npm run dev:mobile    # Expo development server
   ```

### **Development Workflow**

- Web app: http://localhost:3000
- API server: http://localhost:3001
- API docs: http://localhost:3001/docs
- Mobile: Use Expo Go app to scan QR code

## 📖 Documentation

- [📋 Project Specification](./docs/PROJECT_SPEC.md)
- [🔧 Development Setup](./docs/development/SETUP.md)
- [📡 API Documentation](./docs/api/README.md)
- [🚀 Deployment Guide](./docs/deployment/README.md)
- [🎨 Branding Guidelines](./docs/BRANDING.md)

## 🛠️ Development

### **Available Scripts**

```bash
# Development
npm run dev              # Start all apps in development
npm run dev:backend      # Start NestJS backend only
npm run dev:web         # Start React web app only
npm run dev:mobile      # Start Expo mobile app

# Building
npm run build           # Build all applications
npm run build:backend   # Build backend only
npm run build:web      # Build web app only

# Testing
npm run test           # Run all tests
npm run test:backend   # Run backend tests
npm run test:web      # Run web app tests

# Database
npm run db:migrate     # Run database migrations
npm run db:seed       # Seed database with sample data
npm run db:reset      # Reset database (dev only)

# Linting & Formatting
npm run lint          # Lint all code
npm run format        # Format all code with Prettier
```

### **Project Management**

- **GitHub Projects**: [View Kanban Board](https://github.com/orgs/your-org/projects/1)
- **Issues**: [Current Sprint](https://github.com/your-org/que-entertainment-app/issues)
- **Milestones**: [Development Roadmap](https://github.com/your-org/que-entertainment-app/milestones)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### **Development Process**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Commit Convention**

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for comprehensive movie/TV data
- [NestJS](https://nestjs.com/) for the excellent backend framework
- [React](https://reactjs.org/) and [React Native](https://reactnative.dev/) teams
- All contributors and testers

---

**Built with ❤️ for entertainment enthusiasts everywhere**

[🌟 Star this repo](https://github.com/your-org/que-entertainment-app) | [🐛 Report Bug](https://github.com/your-org/que-entertainment-app/issues) | [💡 Request Feature](https://github.com/your-org/que-entertainment-app/issues)
