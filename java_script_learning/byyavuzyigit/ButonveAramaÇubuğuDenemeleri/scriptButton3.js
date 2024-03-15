var datas = []; // Initialize the array to store the data

document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var contents = event.target.result;
        var lines = contents.split('\n'); // Split the content into lines
        var numLines = lines.length - 1; // Count the number of lines

        datas[0] = numLines; // Store the count as the first element in the datas array

        // Display the count
        document.getElementById('fileContents').textContent = "Number of lines: " + numLines;
    };

    reader.readAsText(file);
});
