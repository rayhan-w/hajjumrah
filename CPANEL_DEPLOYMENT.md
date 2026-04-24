# cPanel Deployment Guide

## Prerequisites
- cPanel hosting account
- FTP/SFTP access or File Manager access
- Domain name configured in cPanel

## Step-by-Step Deployment

### 1. Build the Project Locally
```bash
bun run build
```
This creates a `dist` folder with optimized static files.

### 2. Upload to cPanel

#### Option A: Using File Manager (Easiest)
1. Log in to cPanel
2. Go to **File Manager**
3. Navigate to **public_html** folder
4. Upload all files from your local `dist` folder to `public_html`
5. Upload `.htaccess` to `public_html` (this file is in the root of the project)

#### Option B: Using FTP/SFTP
1. Connect via FTP using your cPanel credentials
2. Navigate to the `public_html` directory
3. Upload the contents of the `dist` folder
4. Upload `.htaccess` file to `public_html`

#### Option C: Using SSH (if available)
```bash
# Connect to your server
ssh username@yourdomain.com

# Navigate to public_html
cd public_html

# Clone and build
git clone your-repo-url .
bun install
bun run build

# Copy dist contents to public_html
cp -r dist/* .
```

### 3. Important Files
- ✅ `.htaccess` - Enables React Router functionality (rewrite rules)
- ✅ All files in `dist/` folder - Your built application
- ✅ `public/` - Static assets (if any)

### 4. Configuration Checklist
- [ ] Domain is pointing to your hosting
- [ ] All `dist` files are in `public_html`
- [ ] `.htaccess` file is in `public_html`
- [ ] File permissions are correct (usually 644 for files, 755 for folders)

### 5. Test Your Site
1. Visit your domain: `https://yourdomain.com`
2. Navigation should work without page refreshes
3. Check browser console for any errors (F12)

## Troubleshooting

### 404 Errors on Routes
- Ensure `.htaccess` is in `public_html`
- Verify mod_rewrite is enabled in cPanel
- Check if your hosting allows `.htaccess` modifications

### Assets Not Loading
- Check file permissions (should be 644)
- Verify paths in the build output
- Clear browser cache (Ctrl+Shift+Delete)

### Slow Loading
- Use cPanel's built-in caching tools
- Compress images in `src/assets`
- Enable gzip compression in cPanel

## Environment Variables
- Store API URLs in environment variables
- Add to cPanel's Environment section if needed
- Example: `VITE_PUBLIC_API_URL=https://api.example.com`

## Rollback
To revert to a previous version:
1. Backup your current `public_html` folder
2. Upload the previous `dist` contents
3. Keep `.htaccess` unchanged
