
const startUpload = document.getElementById('startUpload').addEventListener('click', () => {
    Papa.parse(document.getElementById('uploadFile').files[0], 
    {
        download: true,
        header: true,
        // skipEmptyLines: true,
        complete: function(results) {
            console.log(results);
        }
    });
});