<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>

<script>
Papa.parse("songs.csv", {
  download: true,
  header: true,
  complete: function(results) {

    new Tabulator("#song-table", {
      data: results.data,

      layout: "fitColumns",

      responsiveLayout: "collapse",

      pagination: true,
      paginationSize: 25,

      movableColumns: true,

      initialSort: [
        { column: "Artist", dir: "asc" }
      ],

      columns: [
        { title: "Title", field: "Title" },
        { title: "Artist", field: "Artist" },
        { title: "Album", field: "Album" },
        { title: "Year", field: "Year", width: 90 },
        { title: "Length", field: "Length", width: 100 },
        { title: "BPM", field: "BPM", width: 90 }
      ]
    });

  }
});
</script>
