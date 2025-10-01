# The Dark Creed - Alliance Scheduler

A web application for managing alliance member schedules, built with React and hosted on GitHub Pages.

## Features

- **Password-protected schedule submission** - Members authenticate with a shared password
- **Member schedule management** - Track username, car power, tower level, and availability
- **Time slot selection** - Visual grid for selecting 2-hour time slots across the week
- **Public member directory** - View all member schedules and availability
- **GitHub-based storage** - Data persisted in a separate GitHub repository

## Technology Stack

- React 18 + Vite
- Tailwind CSS
- React Router
- GitHub Pages (hosting)
- GitHub Actions (CI/CD)

## Setup Instructions

### 1. Create the Data Repository

1. Go to GitHub and create a new repository: `tdc-scheduler-data`
2. Make it **public** (required for reading data without authentication)
3. Initialize with a README or leave empty

### 2. Generate a Personal Access Token (PAT)

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: `TDC Scheduler Data Access`
4. Select scopes:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
5. Click "Generate token" and **copy the token** (you won't see it again!)

### 3. Add PAT as Repository Secret

1. Go to your `tdc-scheduler` repository
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `DATA_REPO_PAT`
5. Value: Paste your PAT
6. Click "Add secret"

### 4. Enable GitHub Pages

1. Go to repository Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: Select `gh-pages` and `/ (root)`
4. Click Save

### 5. Deploy the Application

1. Push this code to your `tdc-scheduler` repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TDC Scheduler"
   git branch -M main
   git remote add origin https://github.com/wissamyah/tdc-scheduler.git
   git push -u origin main
   ```

2. GitHub Actions will automatically build and deploy the app
3. Check the Actions tab to monitor the deployment

### 6. First-Time Setup

1. Visit your deployed site: `https://wissamyah.github.io/tdc-scheduler`
2. You'll see the first-time setup screen
3. Enter your GitHub PAT (from step 2)
4. Create a password that all alliance members will use
5. Click "Initialize Password"
6. The password will be stored (hashed) in `tdc-scheduler-data/data.json`

### 7. Share with Alliance Members

Share the URL with your alliance members along with the password. They can:
- Submit their schedules at `/`
- View all member schedules at `/members`

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Project Structure

```
tdc-scheduler/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # App header with navigation
│   │   ├── PasswordSetup.jsx       # First-time password setup
│   │   ├── PasswordPrompt.jsx      # Login form
│   │   ├── ScheduleForm.jsx        # Member schedule submission
│   │   ├── TimeSlotPicker.jsx      # Time slot selection grid
│   │   ├── MemberCard.jsx          # Individual member display
│   │   └── MembersList.jsx         # All members view
│   ├── services/
│   │   └── github.js               # GitHub API integration
│   ├── utils/
│   │   ├── auth.js                 # Password hashing/verification
│   │   └── timeSlots.js            # Time slot utilities
│   ├── App.jsx                     # Main app component
│   └── main.jsx                    # Entry point
├── .github/
│   └── workflows/
│       ├── deploy.yml              # Deploy to GitHub Pages
│       └── sync-data.yml           # Sync data to data repo
└── README.md
```

## Data Structure

The `data.json` file in `tdc-scheduler-data` follows this structure:

```json
{
  "auth": {
    "passwordHash": "hashed-password",
    "initialized": true,
    "initDate": "2025-10-01T12:00:00Z"
  },
  "members": [
    {
      "id": "unique-id",
      "username": "PlayerOne",
      "carPower": 2.5,
      "towerLevel": 28,
      "availability": {
        "monday": ["00-02", "14-16", "20-22"],
        "tuesday": ["00-02", "14-16"],
        ...
      },
      "lastUpdated": "2025-10-01T12:00:00Z"
    }
  ]
}
```

## Troubleshooting

### GitHub Actions fails with authentication error
- Check that `DATA_REPO_PAT` secret is set correctly
- Verify the PAT has `repo` and `workflow` scopes
- Make sure the data repository exists and is accessible

### Changes not appearing on the site
- Check the Actions tab for deployment status
- GitHub Pages can take a few minutes to update
- Clear browser cache or try incognito mode

### Password setup not working
- Verify the data repository is public
- Check browser console for errors
- Ensure GitHub Actions workflow has proper permissions

## License

MIT
