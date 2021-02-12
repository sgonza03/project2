///////////// one graph dataset 1 //////////////////////

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_graph")
  .append("svg").attr("xmlns", "http://www.we.org/2000/svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
          
Plotly.d3.csv("./data1.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }
  var data = {
    type: "scatter",
    mode: "lines",
    name: "Estimated_fire_area",
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'Estimated_fire_area'),
    line: {
      color: '#81827F',
      width: 3,
      shape: "spline"
    },
    transforms: [
      {
      type: "groupby",
      groups: unpack(rows, 'Region'),
      styles: [
        {target: 'NSW', value: {line: {color: 'red'}}},
        {target: 'NT', value: {line: {color: 'blue'}}},
        {target: 'QL', value: {line: {color: 'orange'}}},
        {target: 'SA', value: {line: {color: 'green'}}},
        {target: 'TA', value: {line: {color: 'purple'}}},
        {target: 'VI', value: {line: {color: 'yellow'}}},
        {target: 'WA', value: {line: {color: 'grey'}}}
      ]

    }]
  }
  var data = [data];
  var layout = {
    title: {
      text:'Estimated fire area'
    },
    xaxis: {
      title: {
        text: 'Date'
      }
    },
    yaxis: {
      title: {
        text:'Fire area'
      }
    },
    autosize: true,
    hovermode:'closest'
  }
  
  Plotly.newPlot('my_graph', data, layout);

});

///////////// one graph dataset 2 //////////////////////
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_graph2")
  .append("svg").attr("xmlns", "http://www.we.org/2000/svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
Plotly.d3.csv("./data1.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
            }
var data2 = {
  type: "scatter",
  mode: "lines",
  name: "Mean_estimated_fire_brightness",
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'Mean_estimated_fire_brightness'),
  line: {
    color: '#04824C',
    width: 3,
    shape: "spline"
  },
  transforms: [
    {
    type: 'groupby',
    groups: unpack(rows, 'Region'),
    styles: [
      {target: 'NSW', value: {line: {color: 'red'}}},
      {target: 'NT', value: {line: {color: 'blue'}}},
      {target: 'QL', value: {line: {color: 'orange'}}},
      {target: 'SA', value: {line: {color: 'green'}}},
      {target: 'TA', value: {line: {color: 'purple'}}},
      {target: 'VI', value: {line: {color: 'yellow'}}},
      {target: 'WA', value: {line: {color: 'grey'}}}
    ]

    }]
}
var data = [data2];
var layout = {
  title: {
    text:'Estimated fire brightness'
  },
  xaxis: {
    title: {
      text: 'Date'
    }
  },
  yaxis: {
    title: {
      text:'Fire brightness'
    }
  },
  autosize: true,
  hovermode:'closest'
}
Plotly.newPlot('my_graph2', data, layout);

});


/////////// changing graphs  data 1 ///////////////////////////////////////////////////////////////////


Plotly.d3.csv("./veg.csv", function(err, rowsv){
Plotly.d3.csv("./land.csv", function(err, rowsl){
Plotly.d3.csv("./data1.csv", function(err, rowsd){
function unpack(rowsv, key) {
return rowsv.map(function(rowv) { return rowv[key]; });
}
function unpack(rowsl, key) {
return rowsl.map(function(rowl) { return rowl[key]; });
}
function unpack(rowsd, key) {
return rowsd.map(function(rowd) { return rowd[key]; });
}
   
var dataveg = {
  type: "scatter",
  mode: "lines",
  name: "Vegetation Value",
  x: unpack(rowsv, 'Date'),
  y: unpack(rowsv, 'Vegetation_index_mean'),
  line: {
    color: '#04824C',
    width: 3,
    shape: "spline"
  },
  transforms: [
    {
    type: 'groupby',
    groups: unpack(rowsv, 'Region'),
    styles: [
      {target: 'NSW', value: {line: {color: 'red'}}},
      {target: 'NT', value: {line: {color: 'blue'}}},
      {target: 'QL', value: {line: {color: 'orange'}}},
      {target: 'SA', value: {line: {color: 'green'}}},
      {target: 'TA', value: {line: {color: 'purple'}}},
      {target: 'VI', value: {line: {color: 'yellow'}}},
      {target: 'WA', value: {line: {color: 'grey'}}}
    ]

    }]
}
//console.log(dataveg)
var data = [dataveg];
var layoutv = {
  title: {
    text:'Vegetation Values'
  },
  xaxis: {
    title: {
      text: 'Date'
    }
  },
  yaxis: {
    title: {
      text:'Vegetation Index Value'
    }
  },
  autosize: true,
  hovermode:'closest'
}
Plotly.newPlot('my_data', data, layoutv);



var trace3 = {
  name: "Region vs Shrubs",
  type: "scatter",
  mode: "lines",
  x: unpack(rowsl, 'Region'),
  y: unpack(rowsl, 'Shrubs'),
  line: {
    color: '#04824C',
    width: 3,
    shape: "spline"
  },

}
var layout3 = {
  title: {
    text:'Land Data'
  },
  xaxis: {
    title: {
      text: 'Region'
    }
  },
  yaxis: {
    title: {
      text:'Number of Shrubs'
    }
  },
  autosize: true,
  hovermode:'closest'
}
var data3= [trace3]
console.log(trace3)
Plotly.newPlot("my_data2", data3, layout3);




var trace2 = {
  name: "Region vs Urban / built up",
  type: "scatter",
  mode: "lines",
  x: unpack(rowsl, 'Region'),
  y: unpack(rowsl, 'Urban / built up'),
  line: {
    color: '#04824C',
    width: 3,
    shape: "spline"
  },

}
var layout2 = {
  title: {
    text:"Region vs Urban / built up",
  },
  xaxis: {
    title: {
      text: 'Region'
    }
  },
  yaxis: {
    title: {
      text:'Urban built up'
    }
  },
  autosize: true,
  hovermode:'closest'
}

var data2= [trace2]
Plotly.newPlot("my_data3", data2, layout2);



var trace1 = {
  name: "Region vs Sea",
  type: "scatter",
  mode: "lines",
  x: unpack(rowsl, 'Region'),
  y: unpack(rowsl, 'Open sea'),
  line: {
    color: '#04824C',
    width: 3,
    shape: "spline"
  },

}

var layout1 = {
  title: {
    text:'Land vs Sea'
  },
  xaxis: {
    title: {
      text: 'Region'
    }
  },
  yaxis: {
    title: {
      text:'Amount of open Sea'
    }
  },
  autosize: true,
  hovermode:'closest',
}
var data1 = [trace1]
Plotly.newPlot("my_data4", data1, layout1);

    });
  });
});


// Creating our initial map object///////////////////////////////////////////////////////////////////////
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("Map", {
  center: [-40.0,151.0],
  zoom: 10
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);



