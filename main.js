let uploadFileResults = {};
let file = {};


const startUpload = document.getElementById('startUpload').addEventListener('click', () => {
    Papa.parse(document.getElementById('uploadFile').files[0], 
    {
        header: true,
        // skipEmptyLines: true,
        complete: function(results, file) {
            uploadFileResults = results;
            file = file;
            // Example push specific data: for loop -  for (i=0; i< results.data.length; i++) { x.push(results.data[i].productID); }
            console.log(uploadFileResults);
            console.log(file);
        }
    });
});