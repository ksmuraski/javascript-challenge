// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");


function ufoTable(table) {
    tbody.html("");
    table.forEach(i => {var tr=tbody.append("tr");
        for (var key in i) {
            tr.append("td")
            .text(i[key]);
        };
    });
};

ufoTable(tableData);


button.on("click", function () {
    var inputValue = d3.select("#datetime")
                        .property("value");
    var ufoData = tableData.filter(date => date.datetime === inputValue);
    ufoTable(ufoData)
});

//ufoTable(tableData);



// var pairNames = data.map(god => god.pair)
// var greekNum = data.map(god => god.greekSearchResults)
// var romanNum = data.map(god => god.romanSearchResults)