import {Stroke, Style} from 'ol/style';

const style = new Style({
    stroke: new Stroke({
        lineCap: "round",
        lineJoin: "round",
    }),
});

export const Densidad_Res = function (feature : any) {
    const value = feature.get('Densidad_Res');
    const stroke =
        value >= 0.006746 && value <= 0.022824 ? {color: 'rgba(25,75,146,1.0)', width: 2}:
        value >= 0.022824 && value <= 0.038112 ? {color: 'rgba(25,75,146,1.0)', width: 6.5}:
        value >= 0.038112 && value <= 0.056489 ? {color: 'rgba(25,75,146,1.0)', width: 11}:
        value >= 0.056489 && value <= 0.082101 ? {color: 'rgba(25,75,146,1.0)', width: 15.5}:
        value >= 0.082101 && value <= 0.105034 ? {color: 'rgba(25,75,146,1.0)', width: 20}:
        {color: 'rgba(0,0,0,0)', width: 0}
        ;
    style.getStroke().setWidth(stroke.width); 
    style.getStroke().setColor(stroke.color);
    return style;
};

export const NivelS_Origen = function (feature : any) {
    const value = feature.get('NivelS_Origen');
    const stroke =
        value >= 0.000000 && value <= 19211.000000 ? {color: 'rgba(126,189,105,1.0)', width: 2}:
        value >= 19211.000000 && value <= 26290.000000 ? {color: 'rgba(126,189,105,1.0)', width: 3}:
        value >= 26290.000000 && value <= 33007.000000 ? {color: 'rgba(126,189,105,1.0)', width: 8}:
        value >= 33007.000000 && value <= 41397.000000 ? {color: 'rgba(126,189,105,1.0)', width: 13}:
        value >= 41397.000000 && value <= 49236.000000 ? {color: 'rgba(126,189,105,1.0)', width: 20}:
        {color: 'rgba(0,0,0,0)', width: 0}
        ;
    style.getStroke().setWidth(stroke.width); 
    style.getStroke().setColor(stroke.color);
    return style;
};

export const NivelS_Ruta = function (feature : any) {
    const value = feature.get('NivelS_Ruta');
        const stroke =
            value >= 0.000000 && value <= 24000.000000 ? {color: 'rgba(124,156,114,1.0)', width: 1}:
            value >= 24000.000000 && value <= 29000.000000 ? {color: 'rgba(124,156,114,1.0)', width: 2.5}:
            value >= 29000.000000 && value <= 35000.000000 ? {color: 'rgba(124,156,114,1.0)', width: 4}:
            value >= 35000.000000 && value <= 41000.00000 ? {color: 'rgba(124,156,114,1.0)', width: 12}:
            value >= 41000.000000 && value <= 49201.322830 ? {color: 'rgba(124,156,114,1.0)', width: 20}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Pendiente = function (feature : any) {
    const value = feature.get('Pendiente');
        const stroke =
            value >= 0.700000 && value <= 6.050000 ? {color: 'rgba(126,90,59,1.0)', width: 3}:
            value >= 6.050000 && value <= 12.800000 ? {color: 'rgba(126,90,59,1.0)', width: 8.5}:
            value >= 12.800000 && value <= 23.150000 ? {color: 'rgba(126,90,59,1.0)', width: 14}:
            value >= 23.150000 && value <= 35.570000 ? {color: 'rgba(126,90,59,1.0)', width: 19.5}:
            value >= 35.570000 && value <= 55.730000 ? {color: 'rgba(126,90,59,1.0)', width: 25}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const PRD = function (feature : any) {
    const value = feature.get('PRD');
        const stroke =
            value >= 1.000011 && value <= 1.327358 ? {color: 'rgba(46,94,134,1.0)', width: 3}:
            value >= 1.327358 && value <= 1.769641 ? {color: 'rgba(46,94,134,1.0)', width: 8.5}:
            value >= 1.769641 && value <= 2.571110 ? {color: 'rgba(46,94,134,1.0)', width: 14}:
            value >= 2.571110 && value <= 7.764161 ? {color: 'rgba(46,94,134,1.0)', width: 19.5}:
            value >= 7.764161 && value <= 15.286620 ? {color: 'rgba(46,94,134,1.0)', width: 25}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Usos_Mixtos = function (feature : any) {
    const value = feature.get('Usos_Mixtos');
        const stroke =
            value >= 0.000000 && value <= 0.202856 ? {color: 'rgba(46,94,134,1.0)', width: 1}:
            value >= 0.202856 && value <= 0.379313 ? {color: 'rgba(46,94,134,1.0)', width: 3}:
            value >= 0.379313 && value <= 0.546322 ? {color: 'rgba(46,94,134,1.0)', width: 6.5}:
            value >= 0.546322 && value <= 0.719245 ? {color: 'rgba(46,94,134,1.0)', width: 12}:
            value >= 0.719245 && value <= 0.955843 ? {color: 'rgba(46,94,134,1.0)', width: 22}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Num_Cruces_2C = function (feature : any) {
    const value = feature.get('Num_Cruces_2C');
        const stroke =
            value >= 0.000000 && value <= 1.211500 ? {color: 'rgba(186,40,40,1.0)', width: 1}:
            value >= 1.211500 && value <= 1.799500 ? {color: 'rgba(186,40,40,1.0)', width: 5.75}:
            value >= 1.799500 && value <= 2.428700 ? {color: 'rgba(186,40,40,1.0)', width: 10.5}:
            value >= 2.428700 && value <= 3.828800 ? {color: 'rgba(186,40,40,1.0)', width: 15.25}:
            value >= 3.828800 && value <= 5.691600 ? {color: 'rgba(186,40,40,1.0)', width: 20}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Num_Cruces_4C = function (feature : any) {
    const value = feature.get('Num_Cruces_4C');
        const stroke =
            value >= 0.000000 && value <= 0.160000 ? {color: 'rgba(230,168,75,1.0)', width: 1}:
            value >= 0.160000 && value <= 0.320000 ? {color: 'rgba(230,168,75,1.0)', width: 4}:
            value >= 0.320000 && value <= 0.378080 ? {color: 'rgba(230,168,75,1.0)', width: 9}:
            value >= 0.378080 && value <= 0.562980 ? {color: 'rgba(230,168,75,1.0)', width: 12}:
            value >= 0.562980 && value <= 1.953800 ? {color: 'rgba(230,168,75,1.0)', width: 20}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Fachadas_Act = function (feature : any) {
    const value = feature.get('Fachadas_Act');
        const stroke =
            value >= 0.434695 && value <= 13.604868 ? {color: 'rgba(55,153,175,1.0)', width: 1}:
            value >= 13.604868 && value <= 22.822610 ? {color: 'rgba(55,153,175,1.0)', width: 5.75}:
            value >= 22.822610 && value <= 30.570228 ? {color: 'rgba(55,153,175,1.0)', width: 10.5}:
            value >= 30.570228 && value <= 41.032850 ? {color: 'rgba(55,153,175,1.0)', width: 15.25}:
            value >= 41.032850 && value <= 122.490068 ? {color: 'rgba(55,153,175,1.0)', width: 20}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Accesos_PB = function (feature : any) {
    const value = feature.get('Accesos_PB');
        const stroke =
            value >= 0.385439 && value <= 6.120320 ? {color: 'rgba(75,81,170,1.0)', width: 0.5}:
            value >= 6.120320 && value <= 12.334153 ? {color: 'rgba(75,81,170,1.0)', width: 5.375}:
            value >= 12.334153 && value <= 22.895887 ? {color: 'rgba(75,81,170,1.0)', width: 10.25}:
            value >= 22.895887 && value <= 55.647159 ? {color: 'rgba(75,81,170,1.0)', width: 15.125}:
            value >= 55.647159 && value <= 111.171244 ? {color: 'rgba(75,81,170,1.0)', width: 20}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Nivel_Sombra = function (feature : any) {
    const value = feature.get('Nivel_Sombra');
        const stroke =
            value >= 2.763347 && value <= 2.966668 ? {color: 'rgba(86,86,86,1.0)', width: 1}:
            value >= 2.966668 && value <= 3.131739 ? {color: 'rgba(86,86,86,1.0)', width: 4.5}:
            value >= 3.131739 && value <= 3.338794 ? {color: 'rgba(86,86,86,1.0)', width: 8}:
            value >= 3.338794 && value <= 3.646910 ? {color: 'rgba(86,86,86,1.0)', width: 11.5}:
            value >= 3.646910 && value <= 4.008727 ? {color: 'rgba(86,86,86,1.0)', width: 15}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Acceso_Bici = function (feature : any) {
    const value = feature.get('Acceso_Bici');
        const stroke =
            value >= 0.000000 && value <= 11.632624 ? {color: 'rgba(186,53,55,1.0)', width: 1}:
            value >= 11.632624 && value <= 34.096613 ? {color: 'rgba(186,53,55,1.0)', width: 4.5}:
            value >= 34.096613 && value <= 57.425427 ? {color: 'rgba(186,53,55,1.0)', width: 8}:
            value >= 57.425427 && value <= 88.257078 ? {color: 'rgba(186,53,55,1.0)', width: 11.5}:
            value >= 88.257078 && value <= 141.431948 ? {color: 'rgba(186,53,55,1.0)', width: 15}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Estac_Bici = function (feature : any) {
    const value = feature.get('Estac_Bici');
        const stroke =
            value >= 0.000000 && value <= 0.075100 ? {color: 'rgba(146,81,81,1.0)', width: 1}:
            value >= 0.075100 && value <= 0.227100 ? {color: 'rgba(146,81,81,1.0)', width: 5.75}:
            value >= 0.227100 && value <= 0.430300 ? {color: 'rgba(146,81,81,1.0)', width: 10.5}:
            value >= 0.430300 && value <= 0.685600 ? {color: 'rgba(146,81,81,1.0)', width: 15.25}:
            value >= 0.685600 && value <= 1.048300 ? {color: 'rgba(146,81,81,1.0)', width: 20}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Parada_Transp = function (feature : any) {
    const value = feature.get('Parada_Transp');
        const stroke =
            value >= 0.000000 && value <= 0.200000 ? {color: 'rgba(124,82,47,1.0)', width: 1}:
            value >= 0.200000 && value <= 0.716000 ? {color: 'rgba(124,82,47,1.0)', width: 5.75}:
            value >= 0.716000 && value <= 1.146000 ? {color: 'rgba(124,82,47,1.0)', width: 10.5}:
            value >= 1.146000 && value <= 1.787000 ? {color: 'rgba(124,82,47,1.0)', width: 15.25}:
            value >= 1.787000 && value <= 1.787000 ? {color: 'rgba(124,82,47,1.0)', width: 20}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Servicios_Bas = function (feature : any) {
    const value = feature.get('Servicios_Bas');
        const stroke =
            value >= 0.000000 && value <= 0.200000 ? {color: 'rgba(83,23,113,1.0)', width: 1}:
            value >= 0.200000 && value <= 0.500000 ? {color: 'rgba(83,23,113,1.0)', width: 5.75}:
            value >= 0.500000 && value <= 0.708000 ? {color: 'rgba(83,23,113,1.0)', width: 10.5}:
            value >= 0.708000 && value <= 1.080000 ? {color: 'rgba(83,23,113,1.0)', width: 15.25}:
            value >= 1.080000 && value <= 1.917000 ? {color: 'rgba(83,23,113,1.0)', width: 20}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Esp_Libres = function (feature : any) {
    const value = feature.get('Esp_Libres');
        const stroke =
            value >= 0.000000 && value <= 4.920865 ? {color: 'rgba(48,146,49,1.0)', width: 2}:
            value >= 4.920865 && value <= 12.723554 ? {color: 'rgba(48,146,49,1.0)', width: 6.5}:
            value >= 12.723554 && value <= 22.509696 ? {color: 'rgba(48,146,49,1.0)', width: 11}:
            value >= 22.509696 && value <= 35.924051 ? {color: 'rgba(48,146,49,1.0)', width: 15.5}:
            value >= 35.924051 && value <= 52.328691 ? {color: 'rgba(48,146,49,1.0)', width: 20}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
    };

export const Centro_Empleo = function (feature : any) {
    const value = feature.get('Centro_Empleo');
        const stroke =
            value >= 0.000000 && value <= 0.433000 ? {color: 'rgba(112,75,45,1.0)', width: 2}:
            value >= 0.433000 && value <= 1.128000 ? {color: 'rgba(112,75,45,1.0)', width: 5.75}:
            value >= 1.128000 && value <= 2.225000 ? {color: 'rgba(112,75,45,1.0)', width: 10.5}:
            value >= 2.225000 && value <= 3.993000 ? {color: 'rgba(112,75,45,1.0)', width: 15.25}:
            value >= 3.993000 && value <= 6.518000 ? {color: 'rgba(112,75,45,1.0)', width: 20}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Intermodal = function (feature : any) {
    const value = feature.get('Intermodal');
        const stroke =
            value >= 0.000000 && value <= 0.684700 ? {color: 'rgba(65,112,175,1.0)', width: 1}:
            value >= 0.684700 && value <= 1.200000 ? {color: 'rgba(65,112,175,1.0)', width: 6.25}:
            value >= 1.200000 && value <= 2.400000 ? {color: 'rgba(65,112,175,1.0)', width: 11.5}:
            value >= 2.400000 && value <= 3.850000 ? {color: 'rgba(65,112,175,1.0)', width: 16.75}:
            value >= 3.850000 && value <= 6.194145 ? {color: 'rgba(65,112,175,1.0)', width: 22}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Ancho_Calle = function (feature : any) {
    const value = feature.get('Ancho_Calle');
        const stroke =
            value >= 3.210000 && value <= 15.000000 ? {color: 'rgba(163,84,154,1.0)', width: 2}:
            value >= 15.000000 && value <= 19.296882 ? {color: 'rgba(163,84,154,1.0)', width: 6.5}:
            value >= 19.296882 && value <= 27.000000 ? {color: 'rgba(163,84,154,1.0)', width: 11}:
            value >= 27.000000 && value <= 30.000000 ? {color: 'rgba(163,84,154,1.0)', width: 15.5}:
            value >= 30.000000 && value <= 53.106000 ? {color: 'rgba(163,84,154,1.0)', width: 20}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const Por_CPeatonal = function (feature : any) {
    const value = feature.get('Por_CPeatonal');
        const stroke =
            value >= 0.000000 && value <= 6.664423 ? {color: 'rgba(93,126,74,1.0)', width: 1}:
            value >= 6.664423 && value <= 16.482716 ? {color: 'rgba(93,126,74,1.0)', width: 5.75}:
            value >= 16.482716 && value <= 30.020304 ? {color: 'rgba(93,126,74,1.0)', width: 10.5}:
            value >= 30.020304 && value <= 51.091323 ? {color: 'rgba(93,126,74,1.0)', width: 15.25}:
            value >= 51.091323 && value <= 114.683347 ? {color: 'rgba(93,126,74,1.0)', width: 20}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};

export const FreqAnda = function (feature : any) {
    const value = feature.get('FreqAnda');
        const stroke =
            value >= 0.000000 && value <= 20.000000 ? {color: 'rgba(75,134,101,1.0)', width: 1}:
            value >= 20.000000 && value <= 60.000000 ? {color: 'rgba(75,134,101,1.0)', width: 3.25}:
            value >= 60.000000 && value <= 80.000000 ? {color: 'rgba(75,134,101,1.0)', width: 5.5}:
            value >= 80.000000 && value <= 92.857143 ? {color: 'rgba(75,134,101,1.0)', width: 7.75}:
            value >= 92.857143 && value <= 100.000000 ? {color: 'rgba(75,134,101,1.0)', width: 10}:
            {color: 'rgba(0,0,0,0)', width: 0}
            ;
        style.getStroke().setWidth(stroke.width); 
        style.getStroke().setColor(stroke.color);
        return style;
};