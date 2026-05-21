# Song Library — How to Add Songs

## One-time setup

### 1. Install the MP3Tag export template
1. Download **SongLibrary.mte** from this repo
2. In MP3Tag, go to **File → Export → (gear icon) → Import**
3. Select `SongLibrary.mte`
4. It will now appear in your export list as **"SongLibrary"**

---

## Every time you add a new genre folder

### Step 1 — Export from MP3Tag
1. Open MP3Tag
2. Add the folder of songs: **File → Add Directory** → select your genre folder
3. Select all tracks: **Ctrl+A**
4. Export: **File → Export → SongLibrary → OK**
5. Save the file as the **exact genre name**, e.g. `80s Country.csv`
   - Save it anywhere easy to find (Desktop is fine)

### Step 2 — Upload the CSV to GitHub
1. Go to the GitHub repo in your browser
2. Click the **`csv`** folder
3. Click **Add file → Upload files**
4. Drag your `.csv` file in
5. Scroll down and click **Commit changes**

### Step 3 — Add the genre to the list
1. In the GitHub repo, click **`genres.json`**
2. Click the **pencil icon** (Edit)
3. Add a new line at the end of the list, following the same pattern:
   ```json
   { "name": "80s Country", "file": "csv/80s Country.csv" },
   ```
   > ⚠️ Make sure the filename matches exactly what you uploaded (including capital letters and spaces)
4. Click **Commit changes**

That's it — the website updates automatically within a minute.

---

## Updating an existing genre (adding more songs)
1. In MP3Tag, load the full folder (including new songs)
2. Export again with the same filename
3. Upload to GitHub → it will replace the old file
4. No need to edit `genres.json` — the site will pick up the new data automatically

---

## File structure reference
```
repo/
├── index.html        ← never touch this
├── genres.json       ← add one line per new genre
├── logo.png          ← your logo
└── csv/
    ├── 40s 50s Country.csv
    ├── 70s Classic Rock.csv
    └── ... (one CSV per genre)
```

---

## Tips
- Genre names in `genres.json` must match the CSV filename exactly
- If a CSV uploads but songs don't appear, check for typos in the filename
- You can re-export and re-upload a CSV at any time to update it
