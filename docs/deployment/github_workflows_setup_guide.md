# GitHub Workflows Setup Guide

## 📁 Files Created

Three workflow files have been created for your `.github/workflows/` directory:

1. **backend-ci.yml** - Backend CI pipeline
2. **web-ci.yml** - Web application CI pipeline
3. **mobile-ci.yml** - Mobile app CI pipeline (for future use)

---

## ✅ Workflow Features

### All Workflows Include:

- ✨ **Smart Triggers**: Run only on relevant branches and file changes
- 🚀 **Parallel Jobs**: Lint, test, and build run simultaneously
- 💾 **Dependency Caching**: Faster runs using npm cache
- 🎯 **Branch-aware**: Trigger on your branch naming convention

### Branch Triggers:

- **Backend**: `be/*`, `all/*`, and `main`
- **Web**: `fe/*`, `all/*`, and `main`
- **Mobile**: `app/*`, `all/*`, and `main`

### Path Triggers:

Each workflow only runs when relevant files change:

- App-specific directories (`apps/backend/**`, etc.)
- Shared packages (`packages/shared/**`)
- Root package files
- The workflow file itself

---

## 📋 Required Package.json Scripts

### Root `package.json` (already has workspaces)

```json
{
  "name": "que",
  "private": true,
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "dev": "npm run dev --workspaces",
    "build": "npm run build --workspaces",
    "test": "npm run test --workspaces",
    "lint": "npm run lint --workspaces",
    "format": "npm run format --workspaces",
    "format:check": "npm run format:check --workspaces"
  }
}
```

### Backend `apps/backend/package.json`

Add these scripts if they don't exist:

```json
{
  "scripts": {
    "build": "nest build",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\"",
    "lint:fix": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "format:check": "prettier --check \"src/**/*.ts\" \"test/**/*.ts\"",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  }
}
```

### Web `apps/web/package.json`

Add these scripts if they don't exist:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,css}\"",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
  }
}
```

**Note**: If using Create React App instead of Vite:

```json
{
  "scripts": {
    "dev": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --watchAll=false",
    "test:coverage": "react-scripts test --coverage --watchAll=false"
  }
}
```

### Mobile `apps/mobile/package.json` (future)

Add these when mobile app is initialized:

```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --ext .ts,.tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx}\"",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 🔧 Installation Steps

### 1. Create Workflow Directory

```bash
mkdir -p .github/workflows
```

### 2. Add Workflow Files

Copy the three YAML files into `.github/workflows/`:

- `backend-ci.yml`
- `web-ci.yml`
- `mobile-ci.yml`

### 3. Verify Package Scripts

Check that your `package.json` files have the required scripts listed above.

### 4. Commit and Push

```bash
git add .github/workflows/
git commit -m "ci: add GitHub Actions workflows for backend and web"
git push origin main
```

---

## 🎯 Testing the Workflows

### Test Backend CI

```bash
git checkout -b be/123-test-workflow
# Make a change to apps/backend/src/main.ts
git add apps/backend/
git commit -m "test: trigger backend CI"
git push origin be/123-test-workflow
```

### Test Web CI

```bash
git checkout -b fe/124-test-workflow
# Make a change to apps/web/src/App.tsx
git add apps/web/
git commit -m "test: trigger web CI"
git push origin fe/124-test-workflow
```

### Test All Workflows

```bash
git checkout -b all/125-test-all-workflows
# Make changes to both apps
git add apps/
git commit -m "test: trigger all workflows"
git push origin all/125-test-all-workflows
```

---

## 📊 Viewing Workflow Results

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You'll see workflows running/completed
4. Click on any workflow to see detailed logs
5. Each job (lint, test, build) shows separate status

---

## 🎨 Adding Status Badges to README

Add these badges to your README.md to show CI status:

```markdown
[![Backend CI](https://github.com/software-de-decker/que/actions/workflows/backend-ci.yml/badge.svg)](https://github.com/software-de-decker/que/actions/workflows/backend-ci.yml)
[![Web CI](https://github.com/software-de-decker/que/actions/workflows/web-ci.yml/badge.svg)](https://github.com/software-de-decker/que/actions/workflows/web-ci.yml)
[![Mobile CI](https://github.com/software-de-decker/que/actions/workflows/mobile-ci.yml/badge.svg)](https://github.com/software-de-decker/que/actions/workflows/mobile-ci.yml)
```

---

## ⚙️ Workflow Configuration Notes

### Caching Strategy

- Uses `actions/setup-node@v4` with built-in npm caching
- Caches `node_modules` based on `package-lock.json`
- Significantly speeds up subsequent runs

### Continue on Error

Some steps have `continue-on-error: true`:

- E2E tests (might not exist yet)
- Coverage tests (might not be configured)
- Expo token setup (for mobile)

These won't fail the workflow if they're not set up yet.

### Environment Variables

Tests run with `CI=true` to:

- Disable watch mode in Jest
- Enable CI-specific test behaviors
- Ensure non-interactive test runs

---

## 🔒 Branch Protection Rules (Recommended)

Set up branch protection for `main`:

1. Go to **Settings** → **Branches**
2. Add rule for `main`
3. Enable:
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - Select: `Backend CI / lint-and-format`, `Backend CI / test`, `Backend CI / build`
   - Select: `Web CI / lint-and-format`, `Web CI / test`, `Web CI / build`
4. Enable:
   - ✅ Require pull request before merging
   - ✅ Dismiss stale reviews when new commits are pushed

---

## 🐛 Troubleshooting

### Workflow Not Triggering?

- Check branch name matches pattern (`be/*`, `fe/*`, `app/*`, `all/*`)
- Verify file paths match the `paths:` filter
- Ensure workflow file is in `.github/workflows/`

### Build Failing?

- Check that all package.json scripts exist
- Verify Node version matches (20.19.5)
- Ensure dependencies are correctly installed locally

### Script Not Found?

Add missing scripts to the appropriate `package.json` file using the examples above.

---

## 📈 Next Steps

1. ✅ Add workflow files to repository
2. ✅ Verify package.json scripts
3. ✅ Test workflows with test branches
4. 🔄 Set up branch protection rules
5. 🎨 Add status badges to README
6. 📱 Initialize mobile app when ready (workflow is prepared)

Your CI/CD pipeline is now ready! Each app has its own dedicated workflow that runs automatically on relevant changes.
