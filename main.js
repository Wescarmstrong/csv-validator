let uploadFileResults = {};
let file = {};
let warningNotificationContainer = document.getElementById('warning-notification-container');


// Papa.Parse method on click
const startUpload = document.getElementById('startUpload').addEventListener('click', () => {
    let fileInput = document.getElementById('uploadFile').files;
    if (fileInput.length > 0) {
        Papa.parse(fileInput[0],
            {
                header: true,
                complete: function (results, file) {
                    uploadFileResults = results;
                    file = file;
                    // Example push specific data: for loop -  for (i=0; i< results.data.length; i++) { x.push(results.data[i].productID); }
                    console.log(uploadFileResults);
                    console.log(file);
                    showFileDetails(results, file)
                }
            });
    } else {
        // Show message to select CSV file if attempting to start without it
        displayWarningNotification("Please choose a CSV file before starting");
    }
});

// Insert file details onto DOM
function showFileDetails(results, file) {
    const file_detail_content = document.getElementById("file-detail-content");
    const file_name = document.getElementById("file-name");
    const file_size = document.getElementById("file-size");
    const row_length = document.getElementById("row-length");
    const file_last_modified = document.getElementById("file-last-modified");
    file_name.innerHTML = "<b>File Name: </b>" + file.name;
    file_size.innerHTML = "<b>File Size: </b>" + file.size.toLocaleString("en-US") + " Bytes";
    file_last_modified.innerHTML = "<b>Last Modified: </b>" + file.lastModifiedDate;
    row_length.innerHTML = "<b>Number of Rows: </b>" + results.data.length.toLocaleString("en-US");
    file_detail_content.style.display = "block";
}

function displayWarningNotification(notification) {
    let pp = warningNotificationContainer.getElementsByTagName('p')[0];
    pp.innerHTML = notification;
    warningNotificationContainer.style.display = "block";

    setTimeout(() => {
        warningNotificationContainer.style.display = "none";
    }, 3800);
}
