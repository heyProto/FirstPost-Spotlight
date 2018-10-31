ProtoGraph.initDataApp = function () {
    var x = new ProtoGraph.Card.toMaps();

    x.init({
        selector: document.querySelector('#card-list-div'),
        dataURL: 'https://p.firstpost.com/2b7dc12047c9ad78bfdc87a5/index.json',//'./data.json',//streams.Grid.url,//
        chartOptions: {
            height: 700,
            defaultCircleColor: ProtoGraph.site['house_colour']
        },
        filterConfigurationJSON: {
            colors: {
                house_color: ProtoGraph.site['house_colour'],
                text_color: '#343434',
                active_text_color: ProtoGraph.site['house_colour'],
                filter_summary_text_color: ProtoGraph.site['reverse_font_colour']
            },
            selected_heading: 'FILTERS',
            reset_filter_text: 'Reset'
        },
        filters: [
            {
                "alias": "Accused",
                "propName": "accused_name"
            },
            {
                "alias": "Nature of harassment",
                "propName": "nature"
            },
            {
                "alias": "Context",
                "propName": "context"
            },
            {
                "alias": "Industry",
                "propName": "industry"
            },
            
            {
                "alias": "Reported on",
                "propName": "reported_on"
            }    
        ]
    });
    x.renderLaptop();
}