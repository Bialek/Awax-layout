function map() {
    var map = new google.maps.Map(document.getElementById("googleMap"), {
        center: {lat: -37.817279,lng: 144.952048}, 
        zoom:17, 
        scrollwheel:false, 
        draggable:true,
        disableDefaultUI: true,
    });

    var style = [
        {
          featureType: "all",
          elementType: "all",
          stylers: [
            { saturation: -100 } 
          ]
        }
    ];

    var mapType = new google.maps.StyledMapType(style, { name:"Grayscale" });    
    map.mapTypes.set('tehgrayz', mapType);
    map.setMapTypeId('tehgrayz');

    var marker = {
        url: "../images/marker.png", 
        scaledSize: new google.maps.Size(30, 45),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0, 0)
    };
    
    var marker = new google.maps.Marker({
        position: {lat: -37.816992, lng: 144.955793},
        map: map,
        icon: marker
    });
}

