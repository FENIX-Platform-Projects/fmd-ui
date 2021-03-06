define(['underscore'], function(_) {
	return {
		
		debug: false,

		dbName: "FMD",
		dbCollectionData: "survey",
		dbCollectionSchemas: "schemas",

		dirSchema: "schemas/",
		//TODO use WDS for load schema from DB
		reportPdfUrlSchema: "http://fenix.fao.org/demo/fmd-ui-new/schemas/jsonschema_pdf.json",
		//reportPdfUrl: "http://kalimaha-fao.device.fao.org:8080",
		//reportPdfUrl: "http://fenixapps2.fao.org/fenixExport",
		//reportPdfUrl: "http://fenixapps2.fao.org/fenixExport-demo",
		reportPdfUrl: "http://fenix.fao.org/external/fenixapps2/fenixExportFiltered",
		//reportPdfUrl: "http://faber-cst-pc.device.fao.org:8080",

		gaul0Url: "http://fenixservices.fao.org/d3s/msd/resources/data/uid/GAUL0",

		privatePages: ['compile','view','editor'],

		adminUser: "admin@fao.org",

		sections: [
			'cat1','cat2','cat3','cat4','cat5',
			'cat6','cat7','cat8','cat9','cat10',
			'cat11','cat12','cat13','cat14','cat15',
			'cat16'
		],

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