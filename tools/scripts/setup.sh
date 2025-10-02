#!/bin/bash

echo "🎬 Setting up Que development environment..."

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js 18+ required. Current version: $(node -v)"
    exit 1
fi

# Check PostgreSQL
if ! command -v psql &> /dev/null; then
    echo "⚠️  PostgreSQL not found. Please install PostgreSQL 14+"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Set up environment files
if [ ! -f "apps/backend/.env" ]; then
    echo "📝 Creating backend .env file..."
    cp apps/backend/.env.example apps/backend/.env
    echo "⚠️  Please update apps/backend/.env with your credentials"
fi

# Generate Prisma Client
echo "🔧 Generating Prisma client..."
npm run db:generate

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update apps/backend/.env with your database credentials"
echo "2. Run 'npm run db:push' to create database tables"
echo "3. Run 'npm run dev' to start both backend and frontend"
echo "4. Backend will be at http://localhost:3001"
echo "5. Frontend will be at http://localhost:3000"