# Talkiy - Educational Technology Platform

Talkiy is a modern educational technology platform designed specifically for language schools and colleges, helping to enhance teaching quality, streamline management processes, and boost student engagement.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth animations
- Interactive sections for showcasing platform features
- Contact form for potential clients

## Technologies

- React
- TypeScript
- Styled Components
- React Scroll

## Getting Started

### Prerequisites

- Node.js (v18.18.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/talkiy.git
cd talkiy
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

## Deployment

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

This will create an optimized build in the `build` folder.

### Deploying to a Static Hosting Service

#### Netlify

1. Create a new site on Netlify
2. Connect your repository
3. Set the build command to `npm run build` or `yarn build`
4. Set the publish directory to `build`
5. Deploy

#### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
# or
yarn global add vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

#### GitHub Pages

1. Add homepage to package.json:
```json
"homepage": "https://your-username.github.io/talkiy"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
# or
yarn add --dev gh-pages
```

3. Add deployment scripts to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  ...
}
```

4. Deploy:
```bash
npm run deploy
# or
yarn deploy
```

## Environment Variables

No environment variables are required for basic deployment. If you add backend integration in the future, you may need to set API endpoints as environment variables.

## Browser Support

The application is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is licensed under the MIT License.
