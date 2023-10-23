import {Stroke, Style} from 'ol/style';

const style = new Style({
    stroke: new Stroke({
        lineCap: "round",
        lineJoin: "round",
    }),
});

export const Nombre = function (feature : any) {
    const value = feature.get('Nombre');
    const stroke =
        value >= 0.000000 && value <= 0.020115 ? {color: 'rgba(25,75,146,1.0)', width: 2}:
        value >= 0.020115 && value <= 0.034295 ? {color: 'rgba(25,75,146,1.0)', width: 6.5}:
        value >= 0.034295 && value <= 0.050779 ? {color: 'rgba(25,75,146,1.0)', width: 11}:
        value >= 0.050779 && value <= 0.078527 ? {color: 'rgba(25,75,146,1.0)', width: 15.5}:
        value >= 0.078527 && value <= 0.151380 ? {color: 'rgba(25,75,146,1.0)', width: 20}:
        {color: 'rgba(228,221,14,0)', width: 0}
        ;
    style.getStroke().setWidth(stroke.width); 
    style.getStroke().setColor(stroke.color);
    return style;
};