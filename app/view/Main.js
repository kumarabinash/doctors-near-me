Ext.define('DoctorsNearMe.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Map',
        'Ext.field.Search'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'CityMap'
                },

                html: [
                    "<h1>CityMap lets you see the map of your city and whats going on it your city on a map.</h1>",
                    "<h2>Please click on the CityMap tab to search for your city</h2>",
                    "Please allow CityMap to access your current location to show you the map of your current city."
                ].join("")
            },
            {
                title: 'CityMap',
                iconCls: 'action',
                xtype: 'map',
                useCurrentLocation: true,
                mapOptions: {
                    center: new google.maps.LatLng(20.000,85.000),
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                },

                items: [
                    {
                        docked: 'top',
                        xtype: 'toolbar',
                        title: 'Map of your city',
                        items:[
                            {
                                xtype: 'searchfield',
                                placeholder: 'Search your city',
                                name: 'cityname'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
