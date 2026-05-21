# 🎵 Song Library — How to Add Songs & Playlists

This guide is for adding new music genres or updating existing ones on the website.
**You do not need to know how to code.** Just follow these steps exactly.

---

## 📋 What you'll need
- **MP3Tag** installed on your computer (free at https://www.mp3tag.de/en/)
- Access to the GitHub repository (the DJ provided you a link)
- The **SongLibrary** export template installed in MP3Tag (one-time setup below)

---

⚙️ One-Time Setup — Install the Export Template

You only do this once.

1. Download the file called **`SongLibrary.mte`** from the GitHub repo
2. Open **MP3Tag**
3. Press:
   Windows + R
4. Paste this and press enter:
  %appdata%\Mp3tag\export
5. Find and select the `SongLibrary.mte` file you downloaded
6. Drag and drop the **`SongLibrary.mte`** file into the folder that just opened, and you're done!
7. Restart Mp3tag and you should be good!

The template called **"SongLibrary"** will now always be available in MP3Tag.

---

## ➕ How to Add a New Genre / Playlist

### Step 1 — Export from MP3Tag

1. Open **MP3Tag**
2. Click **File → Add Directory**
3. Find and select the folder of songs you want to add (e.g. `80s Country`)
4. All the songs will appear in the list
5. Press **Ctrl+A** to select all of them
6. Click **File → Export**
7. Select **SongLibrary** from the list
8. Click **OK**
9. A "Save As" box will appear — name the file the **exact same name as your music folder**
   - ✅ Example: `80s Country.csv`
   - ⚠️ Spelling and capitals must match exactly
   - ⚠️ Apostrophes ('), Quotes ("), Weird symbols, Line breaks, might break the code for the website.
10. Once you export it, the .csv will most likely be in the folder of songs you chose earlier.

(If you want to produce more genres/playlists (.csv) close and reopen Mp3tag and repeat step 1)

---

### Step 2 — Upload the CSV to GitHub

1. Go to the GitHub repo in your web browser
2. Click the folder called **`csv`**
3. Click **Add file** (top right) → **Upload files**
4. Drag your `.csv` file from your Desktop into the upload box
5. Scroll down and click the green **Commit changes** button
6. Wait a few seconds — GitHub will confirm it's uploaded ✅

---

### Step 3 — Add the genre to the list

1. In the GitHub repo, click the file called **`genres.json`**
2. Click the **pencil icon** ✏️ (top right of the file) to edit it
3. You'll see a list that looks like this:
   ```
   { "name": "70s Classic Rock", "file": "csv/70s Classic Rock.csv" },
   { "name": "80s Country",      "file": "csv/80s Country.csv" },
   ```
4. Add a new line **before the last `]`** following the exact same pattern:
   ```
   { "name": "YOUR GENRE NAME", "file": "csv/YOUR GENRE NAME.csv" },
   ```
   - Replace `YOUR GENRE NAME` with the name of your genre (e.g. `90s Pop`)
   - Make sure the filename part matches **exactly** what you uploaded in Step 2
5. Click the green **Commit changes** button
6. The website will update within about **1 minute** ✅

---

## 🔄 How to Update an Existing Genre (adding more songs)

1. In MP3Tag, load the full updated folder (including the new songs)
2. Select all → Export → SongLibrary → save with the **same filename as before**
3. Go to GitHub → `csv` folder → **Add file → Upload files**
4. Upload the new file — GitHub will automatically replace the old one
5. **No need to edit `genres.json`** — the site picks up the new file automatically ✅

---

## ❓ Troubleshooting

| Problem | Fix |
|---|---|
| Genre indefinitely shows "Loading..." on website | The CSV filename doesn't match what's in `genres.json`. Check for typos, spaces, and capitals. Make sure metadata is clean.|
| Songs are missing or wrong | Re-export from MP3Tag and re-upload the CSV file |
| New genre doesn't appear | Make sure you saved the change to `genres.json` and waited 1 minute |
| Website looks broken | Hard-refresh the page: press **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac) |

---

## 📁 File Structure (for reference)

```
repo/
├── index.html       ← the website (never touch this)
├── genres.json      ← the list of genres (add one line per new genre)
├── logo.png         ← the logo image (you could change this to any 1:1 image, it just has to be named specifically "logo.png"
└── csv/
    ├── 40s 50s Country.csv
    ├── Bob Marley.csv
    └── ... (one CSV file per genre)
```

---

*If something isn't working, feel free to contact me.*
