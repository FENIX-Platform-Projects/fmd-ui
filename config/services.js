define(['underscore'], function(_) {
	return {
		
		debug: false,

		dbName: "FMD",
		dbCollectionData: "quests",		
		dbCollectionSchemas: "schemas",
		
		//reportPdfUrl: "http://kalimaha-fao.device.fao.org:8080",
		//reportPdfUrl: "http://fenixapps2.fao.org/fenixExport",
		reportPdfUrl: "http://fenixapps2.fao.org/fenixExport-demo",

		//TODO use WDS for load schema from DB
		reportPdfUrlSchema: "http://fenix.fao.org/demo/fmd-ui/json/jsonschema_pdf.json",

		gaul0Url: "http://fenixservices.fao.org/d3s/msd/resources/data/uid/GAUL0",

		adminPages: ['compile','view','editor'],

		sections: (function() {
			var secs = _.map(_.range(1, 16), function(i) {
				return 'cat'+i;
			});
			//HIDDEN SECTIONS
			return secs;//_.without(secs,'cat11');
		})(),

		wmsUrl: "http://fenixapps2.fao.org/geoserver-demo",
		sldUrl: "http://fenixapps2.fao.org/geoservices/CSS2SLD",

		url_bbox:             "http://fenix.fao.org/geo/fenix/spatialquery/db/spatial/bbox/",
		url_spatialquery:     "http://fenix.fao.org/geo/fenix/spatialquery/db/spatial/query/",
		url_geoserver_wms:    "http://fenix.fao.org/geoserver",
		url_spatialquery_enc: "http://fenix.fao.org/geo/fenix/spatialquery/db/spatial/query/<%= sql %>?geojsonEncoding=True",

		url_geocoding:   "http://fenix.fao.org/geo/fenix/geocoding/latlon/",
		url_esrilayer:   "http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}.png",
		url_baselayer:   "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
		url_osmlayer:    "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
		map_attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OSM contrib</a>"
	};
});