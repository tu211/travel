document.addEventListener('DOMContentLoaded', function () {
    // Get the last modification timestamp
    var lastModifiedTimestamp = document.lastModified;
  
    // Convert timestamp to a Date object
    var lastModifiedDate = new Date(lastModifiedTimestamp);
  
    // Format the date as YYYY/MM/DD HH:MM:SS
    var formattedDateTime =
        lastModifiedDate.getFullYear() + '/' +
        (lastModifiedDate.getMonth() + 1).toString().padStart(2, '0') + '/' +
        lastModifiedDate.getDate().toString().padStart(2, '0') + ' ' +
        lastModifiedDate.getHours().toString().padStart(2, '0') + ':' +
        lastModifiedDate.getMinutes().toString().padStart(2, '0') + ':' +
        lastModifiedDate.getSeconds().toString().padStart(2, '0');
  
    // Update the last modification time on the page
    var lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = '最後修改時間：' + formattedDateTime;
  
  });
  