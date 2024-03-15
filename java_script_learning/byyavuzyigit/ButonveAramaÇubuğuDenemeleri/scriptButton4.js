// Initialize the array to store the data

var datas = [];
var planeCounter;

// Read the contents of the file

fetch('exampleabab.txt')

  .then(response => response.text())

  .then(contents => {

    // Split the content into lines

    var lines = contents.split('\n');


    // Create an array of objects from the lines

    datas = lines.map(line => {

      var parts = line.split(' ');

      return {

        name: parts[0],

        altitude: parseInt(parts[1]),

        passengers: parseInt(parts[2])

      };

    });
    planeCounter = datas.length -1;

    // Display the number of planes

    document.getElementById('fileContents').textContent = "Number of planes: " + (planeCounter);
    //document.getElementById('fileContents').textContent = "First plane name " + datas[0].name;
  })

  .catch(error => {

    console.error('Error reading file:', error);

  });
