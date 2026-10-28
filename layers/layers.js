var wms_layers = [];

var format_fixed_boundrt_0 = new ol.format.GeoJSON();
var features_fixed_boundrt_0 = format_fixed_boundrt_0.readFeatures(json_fixed_boundrt_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fixed_boundrt_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fixed_boundrt_0.addFeatures(features_fixed_boundrt_0);
var lyr_fixed_boundrt_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fixed_boundrt_0, 
                style: style_fixed_boundrt_0,
                popuplayertitle: 'fixed_boundrt',
                interactive: true,
                title: '<img src="styles/legend/fixed_boundrt_0.png" /> fixed_boundrt'
            });
var format_PERUVALLURWARDDATA_1 = new ol.format.GeoJSON();
var features_PERUVALLURWARDDATA_1 = format_PERUVALLURWARDDATA_1.readFeatures(json_PERUVALLURWARDDATA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERUVALLURWARDDATA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERUVALLURWARDDATA_1.addFeatures(features_PERUVALLURWARDDATA_1);
var lyr_PERUVALLURWARDDATA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERUVALLURWARDDATA_1, 
                style: style_PERUVALLURWARDDATA_1,
                popuplayertitle: 'PERUVALLURWARD DATA',
                interactive: true,
                title: '<img src="styles/legend/PERUVALLURWARDDATA_1.png" /> PERUVALLURWARD DATA'
            });
var format_geo_boundry_2 = new ol.format.GeoJSON();
var features_geo_boundry_2 = format_geo_boundry_2.readFeatures(json_geo_boundry_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geo_boundry_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geo_boundry_2.addFeatures(features_geo_boundry_2);
var lyr_geo_boundry_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geo_boundry_2, 
                style: style_geo_boundry_2,
                popuplayertitle: 'geo_boundry',
                interactive: true,
    title: 'geo_boundry<br />\
    <img src="styles/legend/geo_boundry_2_0.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/geo_boundry_2_1.png" /> Piedmont Zone<br />\
    <img src="styles/legend/geo_boundry_2_2.png" /> Residual Mount(Pediment)<br />\
    <img src="styles/legend/geo_boundry_2_3.png" /> Rock Exposure<br />\
    <img src="styles/legend/geo_boundry_2_4.png" /> Valley Fill<br />\
    <img src="styles/legend/geo_boundry_2_5.png" /> <br />' });
var format_road_boundry_3 = new ol.format.GeoJSON();
var features_road_boundry_3 = format_road_boundry_3.readFeatures(json_road_boundry_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_boundry_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_boundry_3.addFeatures(features_road_boundry_3);
var lyr_road_boundry_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_boundry_3, 
                style: style_road_boundry_3,
                popuplayertitle: 'road_boundry',
                interactive: true,
                title: '<img src="styles/legend/road_boundry_3.png" /> road_boundry'
            });

lyr_fixed_boundrt_0.setVisible(true);lyr_PERUVALLURWARDDATA_1.setVisible(true);lyr_geo_boundry_2.setVisible(true);lyr_road_boundry_3.setVisible(true);
var layersList = [lyr_fixed_boundrt_0,lyr_PERUVALLURWARDDATA_1,lyr_geo_boundry_2,lyr_road_boundry_3];
lyr_fixed_boundrt_0.set('fieldAliases', {'id': 'id', });
lyr_PERUVALLURWARDDATA_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', 'AREA': 'AREA', 'TEST': 'TEST', 'NAME': 'NAME', 'dATE': 'dATE', 'DATE1': 'DATE1', 'differ': 'differ', });
lyr_geo_boundry_2.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_road_boundry_3.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_fixed_boundrt_0.set('fieldImages', {'id': '', });
lyr_PERUVALLURWARDDATA_1.set('fieldImages', {'gml_parent': '', 'gml_pare_1': '', 'gml_id': '', 'geom': '', 'District': '', 'LSGD': '', 'Ward_Name': '', 'Ward_No': '', 'Lsgd_Type': '', 'Created_Da': '', 'Surveyor': '', 'Mob_No': '', 'Remarks': '', '_distLsgd': '', 'OBJECTID': '', '_result': '', '_ulid': '', '_distLsgd2': '', 'AREA': '', 'TEST': '', 'NAME': '', 'dATE': '', 'DATE1': '', 'differ': '', });
lyr_geo_boundry_2.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_road_boundry_3.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_fixed_boundrt_0.set('fieldLabels', {'id': 'no label', });
lyr_PERUVALLURWARDDATA_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', 'AREA': 'no label', 'TEST': 'no label', 'NAME': 'no label', 'dATE': 'no label', 'DATE1': 'no label', 'differ': 'no label', });
lyr_geo_boundry_2.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_road_boundry_3.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_road_boundry_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});