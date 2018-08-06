google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyBQHlpfBanmA09AzD7liejuNqPj24ReciM'
});
google.charts.setOnLoadCallback(drawRegionsMap);




function drawRegionsMap() {


    var data = google.visualization.arrayToDataTable([
        ['Country','Population'],
        ['Germany',0.8228*Math.pow(10,8)],//0.8228*Math.pow(10,8)
        ['United States',3.2670*Math.pow(10,8)],
        ['China',14.1488*Math.pow(10,8)],
        ['Canada',0.3629*Math.pow(10,8)],
        ['France',0.6522*Math.pow(10,8)],
        ['Russia',1.4396*Math.pow(10,8)],
        ['Japan',1.2719*Math.pow(10,8)],
        ['Italy',0.5929*Math.pow(10,8)],
        ['United Kingdom',0.6488*Math.pow(10,8)],

        ['Australia',0.2476*Math.pow(10,8)],

        ['Austria',0.0858*Math.pow(10,8)],

        ['Belgium',0.1126*Math.pow(10,8)],

        ['Brazil',2.1081*Math.pow(10,8)],

        ['Chile',0.1819*Math.pow(10,8)],

        ['Colombia',0.4946*Math.pow(10,8)],

        ['CostaReca',0.0495*Math.pow(10,8)],

        ['CzechRepublic',0.1054*Math.pow(10,8)],

        ['Denmark',0.0566*Math.pow(10,8)],

        ['Estonia',0.0131*Math.pow(10,8)],

        ['Finland',0.0547*Math.pow(10,8)],

        ['Hungary',0.0986*Math.pow(10,8)],

        ['Iceland',0.0463*Math.pow(10,8)],

        ['India',13.5356*Math.pow(10,8)],

        ['Israel',0.0844*Math.pow(10,8)],

        ['Mexico',1.3070*Math.pow(10,8)],

        ['Norway',0.0535*Math.pow(10,8)],

        ['Poland',0.3810*Math.pow(10,8)],

        ['Slovenia',0.0542*Math.pow(10,8)],

        ['SouthKorea',0.5116*Math.pow(10,8)],

        ['Sweden',0.0975*Math.pow(10,8)],

        ['Turkey',0.8187*Math.pow(10,8)]
    ]);

    var options = {
        colorAxis: {colors: ['#DFCEE0', 'purple', '#643265']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));


    chart.draw(data, options);
//  add click listener to the map, enter into certain country page.
    google.visualization.events.addListener(chart,'select',function(){
        var selectionItem = chart.getSelection()[0];
        if (selectionItem){
            var country = data.getValue(selectionItem.row,0);
            console.log(country)
            if (country){window.open("country_test.html?cid="+country, 'new', 'height=430,width=525,top=125,left = 0')}

        }
            });
}

