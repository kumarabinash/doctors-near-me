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
                    title: 'DoctorsNearMe'
                },

                html: [
                    "<h2>DoctorsNearMe lets you find Doctors/Medical Facilites near your area.</h2>",
                    "<h2>Please click on the 'Find' tab, to start search.</h2>",
                    "Please allow DoctorsNearMe to access your current location to show you the map of your current city."
                ].join("")
            },
            {
                title: 'DoctorsNearMe',
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
                        xtype: 'panel',
                        border: false,
                        flex: 5,
                        layout: 'card',
                        style: 'background-color: #fff',
                        items: [
                                {
                                    title: 'Page 1',
                                    html: '<h1>This is page 1</h1>'
                                },
                                {
                                    title: 'Page 2',
                                    html: '<h1>This is page 2</h1>'
                                },
                                {
                                    title: 'Page 3',
                                    html: '<h1>This is page 3</h1>'
                                },
                                {
                                    title: 'Page 4',
                                    html: '<h1>This is page 4</h1>'
                                },
                                {
                                    title: 'Page 5',
                                    html: '<h1>This is page 5</h1>'
                                }
                            ],
                            fbar: [
                            {
                                id: 'btnPrev',
                                text: 'Previous',
                                handler: function(btn) {
                                    btn.up('window').navigate('prev');
                                }
                            },
                            {
                                id: 'btnNext',
                                text: 'Next',
                                handler: function(btn) {
                                    btn.up('window').navigate('next');
                                }
                            },
                            {
                                id: 'btnFinish',
                                text: 'Finish',
                                handler: function(btn) {
                                    btn.up('window').close();
                                }
                            }
                        ],

                        navigate: function(to) {
                            var dv = this.down('dataview'),
                                layout = this.down('panel').getLayout(),
                                items = layout.getLayoutItems(),
                                idx;

                            if (Ext.isNumber(to)) {
                                layout.setActiveItem(to);
                            } else {
                                layout[to]();
                            }

                            this.down('#btnPrev').setDisabled(!layout.getPrev());
                            this.down('#btnNext').setDisabled(!layout.getNext());
                            this.down('#btnFinish').setDisabled(layout.getNext());

                            idx = Ext.Array.indexOf(items, layout.getActiveItem());

                            dv.select(idx);
                        },
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
