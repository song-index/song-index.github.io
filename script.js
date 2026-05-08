<script>
Papa.parse("songs.csv", {
  download: true,
  header: true,

  complete: function(results) {

    const songs = results.data.filter(song => song.Title);

    // MOBILE CARD VIEW

    if (window.innerWidth < 768) {

      const container = document.getElementById("song-table");

      function renderCards(filter = "") {

        container.innerHTML = "";

        const filtered = songs.filter(song => {

          const search = filter.toLowerCase();

          return (
            song.Title?.toLowerCase().includes(search) ||
            song.Artist?.toLowerCase().includes(search) ||
            song.Album?.toLowerCase().includes(search)
          );
        });

        filtered.forEach(song => {

          const card = document.createElement("div");

          card.className = "song-card";

          card.innerHTML = `
            <div class="song-title">${song.Title || ""}</div>

            <div class="song-artist">
              ${song.Artist || ""}
            </div>

            <div class="song-meta">
              <span>${song.Year || ""}</span>
              <span>${song.Length || ""}</span>
              <span>${song.BPM || ""} BPM</span>
            </div>

            <div class="song-album">
              ${song.Album || ""}
            </div>
          `;

          container.appendChild(card);

        });
      }

      renderCards();

      document
        .getElementById("search-input")
        .addEventListener("keyup", function() {

          renderCards(this.value);

      });

    }

    // DESKTOP TABLE VIEW

    else {

      const table = new Tabulator("#song-table", {

        data: songs,

        layout: "fitColumns",

        pagination: true,
        paginationSize: 25,

        movableColumns: true,

        initialSort: [
          { column: "Artist", dir: "asc" }
        ],

        columns: [
          {
            title: "Title",
            field: "Title",
            minWidth: 220
          },

          {
            title: "Artist",
            field: "Artist",
            minWidth: 220
          },

          {
            title: "Album",
            field: "Album",
            minWidth: 300
          },

          {
            title: "Year",
            field: "Year",
            width: 100
          },

          {
            title: "Length",
            field: "Length",
            width: 110
          },

          {
            title: "BPM",
            field: "BPM",
            width: 90
          }
        ]
      });

      document
        .getElementById("search-input")
        .addEventListener("keyup", function() {

          const value = this.value;

          table.setFilter([
            [
              { field: "Title", type: "like", value: value },
              { field: "Artist", type: "like", value: value },
              { field: "Album", type: "like", value: value }
            ]
          ]);

      });
    }
  }
});
</script>
