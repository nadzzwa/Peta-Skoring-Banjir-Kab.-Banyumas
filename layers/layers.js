var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AdministrasiKabupatenBanyumas_1 = new ol.format.GeoJSON();
var features_AdministrasiKabupatenBanyumas_1 = format_AdministrasiKabupatenBanyumas_1.readFeatures(json_AdministrasiKabupatenBanyumas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiKabupatenBanyumas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiKabupatenBanyumas_1.addFeatures(features_AdministrasiKabupatenBanyumas_1);
var lyr_AdministrasiKabupatenBanyumas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiKabupatenBanyumas_1, 
                style: style_AdministrasiKabupatenBanyumas_1,
                popuplayertitle: 'Administrasi Kabupaten Banyumas',
                interactive: true,
                title: '<img src="styles/legend/AdministrasiKabupatenBanyumas_1.png" /> Administrasi Kabupaten Banyumas'
            });
var format_IntersectiondissolvePLdanJT_2 = new ol.format.GeoJSON();
var features_IntersectiondissolvePLdanJT_2 = format_IntersectiondissolvePLdanJT_2.readFeatures(json_IntersectiondissolvePLdanJT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntersectiondissolvePLdanJT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntersectiondissolvePLdanJT_2.addFeatures(features_IntersectiondissolvePLdanJT_2);
var lyr_IntersectiondissolvePLdanJT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IntersectiondissolvePLdanJT_2, 
                style: style_IntersectiondissolvePLdanJT_2,
                popuplayertitle: 'Intersection dissolve PL dan JT',
                interactive: true,
    title: 'Intersection dissolve PL dan JT<br />\
    <img src="styles/legend/IntersectiondissolvePLdanJT_2_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/IntersectiondissolvePLdanJT_2_1.png" /> Rendah<br />\
    <img src="styles/legend/IntersectiondissolvePLdanJT_2_2.png" /> Sedang<br />\
    <img src="styles/legend/IntersectiondissolvePLdanJT_2_3.png" /> Tinggi<br />\
    <img src="styles/legend/IntersectiondissolvePLdanJT_2_4.png" /> Sangat Tinggi<br />' });
var format_SungaiBanyumas_3 = new ol.format.GeoJSON();
var features_SungaiBanyumas_3 = format_SungaiBanyumas_3.readFeatures(json_SungaiBanyumas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiBanyumas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiBanyumas_3.addFeatures(features_SungaiBanyumas_3);
var lyr_SungaiBanyumas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiBanyumas_3, 
                style: style_SungaiBanyumas_3,
                popuplayertitle: 'Sungai Banyumas',
                interactive: true,
                title: '<img src="styles/legend/SungaiBanyumas_3.png" /> Sungai Banyumas'
            });
var format_JalanBanyumas_4 = new ol.format.GeoJSON();
var features_JalanBanyumas_4 = format_JalanBanyumas_4.readFeatures(json_JalanBanyumas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanBanyumas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanBanyumas_4.addFeatures(features_JalanBanyumas_4);
var lyr_JalanBanyumas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanBanyumas_4, 
                style: style_JalanBanyumas_4,
                popuplayertitle: 'Jalan Banyumas',
                interactive: true,
                title: '<img src="styles/legend/JalanBanyumas_4.png" /> Jalan Banyumas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AdministrasiKabupatenBanyumas_1.setVisible(true);lyr_IntersectiondissolvePLdanJT_2.setVisible(true);lyr_SungaiBanyumas_3.setVisible(true);lyr_JalanBanyumas_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AdministrasiKabupatenBanyumas_1,lyr_IntersectiondissolvePLdanJT_2,lyr_SungaiBanyumas_3,lyr_JalanBanyumas_4];
lyr_AdministrasiKabupatenBanyumas_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_IntersectiondissolvePLdanJT_2.set('fieldAliases', {'PENUTUP_LA': 'PENUTUP_LA', 'SUMBER': 'SUMBER', 'Luas_Ha': 'Luas_Ha', 'SKOR_PL': 'SKOR_PL', 'COUNT': 'COUNT', 'TANAH': 'TANAH', 'JTANAH': 'JTANAH', 'SKOR': 'SKOR', 'Total Skor': 'Total Skor', });
lyr_SungaiBanyumas_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanBanyumas_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AdministrasiKabupatenBanyumas_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_IntersectiondissolvePLdanJT_2.set('fieldImages', {'PENUTUP_LA': 'TextEdit', 'SUMBER': 'TextEdit', 'Luas_Ha': 'TextEdit', 'SKOR_PL': 'TextEdit', 'COUNT': 'TextEdit', 'TANAH': 'TextEdit', 'JTANAH': 'TextEdit', 'SKOR': 'TextEdit', 'Total Skor': 'TextEdit', });
lyr_SungaiBanyumas_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JalanBanyumas_4.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_AdministrasiKabupatenBanyumas_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_IntersectiondissolvePLdanJT_2.set('fieldLabels', {'PENUTUP_LA': 'no label', 'SUMBER': 'no label', 'Luas_Ha': 'no label', 'SKOR_PL': 'no label', 'COUNT': 'no label', 'TANAH': 'no label', 'JTANAH': 'no label', 'SKOR': 'no label', 'Total Skor': 'no label', });
lyr_SungaiBanyumas_3.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'TIPSNG': 'inline label - always visible', 'KLSSNG': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'NAMWS': 'inline label - always visible', 'NAMDAS': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'WMAX': 'inline label - always visible', 'DBTMAX': 'inline label - always visible', 'SLPRT': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', });
lyr_JalanBanyumas_4.set('fieldLabels', {'NAMRJL': 'inline label - always visible', 'KONRJL': 'inline label - always visible', 'MATRJL': 'inline label - always visible', 'FGSRJL': 'inline label - always visible', 'UTKRJL': 'inline label - always visible', 'TOLRJL': 'inline label - always visible', 'WLYRJL': 'inline label - always visible', 'AUTRJL': 'inline label - always visible', 'KLSRJL': 'inline label - always visible', 'SPCRJL': 'inline label - always visible', 'JPARJL': 'inline label - always visible', 'ARHRJL': 'inline label - always visible', 'STARJL': 'inline label - always visible', 'KLLRJL': 'inline label - always visible', 'MEDRJL': 'inline label - always visible', 'LOCRJL': 'inline label - always visible', 'JARRJL': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', });
lyr_JalanBanyumas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});