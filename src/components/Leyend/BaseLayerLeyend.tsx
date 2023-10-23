import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Root = styled(Card)({
    zIndex: 1000,
    boxShadow: 'none',
    
});

const BaseLayerLeyend: React.FC = () => {
    const [styles, setStyles] = useState<any>({});
    const activeLayer = useSelector((state: any) => state.baselayer.baselayer);
    const title = useSelector((state: any) => state.baselayer.title);
    const city = useSelector((state: any) => state.city.name);

    useEffect(() => {
        fetch(`./data/baseLayerStyles_${city}.json`)
            .then(response => response.json())
            .then(data => {
                setStyles(data);
            })
            .catch(error => {
                console.error("Hubo un error al cargar el archivo JSON:", error);
            });
    }, [city]);

    const roundValue = (value: any) => {
        return (typeof value === 'number' && !isNaN(value)) ? Math.round(value) : value;
    };

    const renderPolygons = () => {
        const layerData = styles.Polygon[activeLayer];
        return layerData.map((item: any, index: any) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <div
                    style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: item.fill,
                        border: `1px solid ${item.color}`,
                        marginRight: '10px'
                    }}
                ></div>
                {`${roundValue(item.minValue)} - ${roundValue(item.maxValue)} ${item.unit}`}
            </div>
        ));
    };

    const renderPoints = () => {
        const layerData = styles.Point[activeLayer];
        return layerData.map((item: any, index: any) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <div
                    style={{
                        width: `${item.radius * 2}px`,
                        height: `${item.radius * 2}px`,
                        borderRadius: '50%',
                        backgroundColor: item.color,
                        marginRight: '10px'
                    }}
                ></div>
                {`${roundValue(item.value)}`}
            </div>
        ));
    };

    const renderPolylines = () => {
        const layerData = styles.Polyline[activeLayer];
        return layerData.map((item: any, index: any) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <div
                    style={{
                        width: `15px`,
                        height: '2px', 
                        backgroundColor: item.color,
                        marginRight: '10px'
                    }}
                ></div>
                {item.minValue !== undefined && item.maxValue
                  ? `${item.minValue} - ${item.maxValue} ${item.unit}`
                  : (item.value !== undefined ? `${item.value} ${item.unit}` : '')}
            </div>
        ));
    };

    return (
        <Root>
          <Card variant="outlined" style={{ padding: '15px', minWidth: '100px' }}>
            <Typography variant="subtitle1" gutterBottom>
              <b>{title}</b>
            </Typography>
            {styles.Polygon?.[activeLayer] && renderPolygons()}
            {styles.Point?.[activeLayer] && renderPoints()}
            {styles.Polyline?.[activeLayer] && renderPolylines()}
          </Card>
        </Root>
    );
};

export default BaseLayerLeyend;
