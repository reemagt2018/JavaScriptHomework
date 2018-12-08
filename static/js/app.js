// from data.js
var tableData = data;
//Get the table and body from the html page
var tbody = d3.select("tbody");
var table=d3.select("#ufo-table");
//display data to see what it looks like on console
//console.log(data);
// YOUR CODE HERE!
// Read the data imported and for each record create a row in html table and insert data
tableData.forEach((Report) => {
  var row = tbody.append("tr");
  Object.entries(Report).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});


// Select the submit button
var submit = d3.select("#filter-btn");
// Function to pick the data from user inputs
submit.on("click", function() {
  var tbody = d3.select("tbody");

  // Prevent the page from refreshing and remove the already displayed contents
  d3.event.preventDefault();
  d3.select("tbody").remove() ;

  // Select the input element and get the raw HTML node from each options
  var inputElement = d3.select("#datetime");
  var inputstate=d3.select("#state");
  var inputcountry=d3.select("#country");
  var inputcity=d3.select("#city");
  var inputshape=d3.select("#shape");

  // Get the value property of the input element. This gives the actual input from user
  var inputValue = inputElement.property("value");
  var inputStateValue = inputstate.property("value");
  var inputCountryValue = inputcountry.property("value");
  var inputCityValue = inputcity.property("value");
  var inputShapeValue = inputshape.property("value");

//Display the filters on console for checking if everything is as expected
//console.log(inputValue);
//console.log(inputStateValue);
//console.log(inputCountryValue);

//Assign table data to filteredData1 so we do not overwrite on main dataset
 var filteredData1=tableData
 //Check if the user input a filter on date and apply it to create the new dataset
if (inputValue != '') {
  var filteredData1 = filteredData1.filter(filteredData1=>filteredData1.datetime === inputValue);

}
//Check if the user input a filter on state and apply it to create the new dataset
 if (inputStateValue != '') {
    var filteredData1 = filteredData1.filter(filteredData1=>filteredData1.state === inputStateValue);

}
//Check if the user input a filter on country and apply it to create the new dataset
console.log(filteredData1);
if (inputCountryValue != '') {
  var filteredData1 = filteredData1.filter(filteredData1=>filteredData1.country === inputCountryValue);

}
 //Check if the user input a filter on city and apply it to create the new dataset
 if (inputCityValue != '') {
    var filteredData1 = filteredData1.filter(filteredData1=>filteredData1.city === inputCityValue);

}

//Check if the user input a filter on shape and apply it to create the new dataset
if (inputShapeValue != '') {
   var filteredData1 = filteredData1.filter(filteredData1=>filteredData1.shape === inputShapeValue);

}

// Display the final filtered dataset on console to ensure everything works correctly
console.log(filteredData1);




  // clear the content of html  table
//d3.select("tbody").remove() ;

// For everyrecord in the newly selected filtered dataset insert a row in the html table
 var tbody = table.append("tbody");
 filteredData1.forEach((Report2) => {
    var row = tbody.append("tr");
    Object.entries(Report2).forEach(([key, value]) => {
      var cell = tbody.append("td");
     cell.text(value);
      });
  });



});
