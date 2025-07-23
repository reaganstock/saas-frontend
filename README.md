# UltraReach.ai

A React TypeScript web application for creating, reviewing, and launching multi-platform outreach campaigns. Built with Vite, Tailwind CSS, and Tiptap for rich text editing.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/reaganstock/saas-frontend)

## Prerequisites

- Node.js >= 14
- npm (or yarn)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/reaganstock/saas-frontend.git
   cd saas-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Available Scripts

- `npm run dev` (or `yarn dev`)
  Start the development server and open http://localhost:3000

- `npm run build` (or `yarn build`)
  Bundle the app for production in the `dist` directory

- `npm run preview` (or `yarn preview`)
  Serve the production build locally

- `npm run lint` (or `yarn lint`)
  Run ESLint to check for code issues

## Features

- Dashboard to view and filter existing campaigns
- Sidebar navigation for Analytics, Accounts, Campaigns, Unibox, and Leads
- Multi-step New Campaign wizard:
  1. Select accounts and leads
  2. Compose personalized messages with templating variables (`{first_name}`, `{company}`, `{custom_intro}`)
  3. Schedule messages with timezone and working hours
  4. Review & Launch
- Rich text message editor with spam-word detection and AI assistant button
- CSV upload and Google Sheets integration for lead importing

## Project Structure

```
src/
├── components/
│   ├── Analytics/
│   ├── Dashboard.tsx
│   ├── Leads/index.tsx
│   ├── NewCampaign/
│   │   ├── AccountSelection.tsx
│   │   ├── CampaignName.tsx
│   │   ├── LeadSelection.tsx
│   │   ├── MessageEditor.tsx
│   │   ├── ReviewLaunch.tsx
│   │   ├── ScheduleSettings.tsx
│   │   └── SequenceBuilder.tsx
│   ├── PlatformSelector.tsx
│   ├── Sidebar.tsx
│   └── Unibox/index.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Dependencies

- React 18, TypeScript, Vite
- Tailwind CSS for styling
- @tiptap/react for rich text editing
- react-dropzone for file uploads
- lucide-react for icons

## License

MIT