//En este script se selecciona la simbología y se aplica al visor
import React, { useRef, useState, useEffect } from "react";
import MVT from 'ol/format/MVT';
import { Map, View } from 'ol';
// Import Redux
import { useSelector } from "react-redux";

import axios from 'axios';

// Import Styles
import 'ol/ol.css';
import { Stroke, Style, Fill} from 'ol/style';
import { Circle as CircleStyle } from 'ol/style';
import { Image as ImageStyle } from 'ol/style';
// Import ol
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

import TileLayer from 'ol/layer/Tile.js';
import { OSM } from 'ol/source.js';

import {ScaleLine, defaults as defaultControls} from 'ol/control';
// Import WebGL
import {fromLonLat} from 'ol/proj';

// Add Mapbox key
const key = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const malaga = fromLonLat([-4.42093038356179, 36.721163932586535]);

let style = new Style({
    stroke: new Stroke({
        lineCap: "round",
        lineJoin: "round",
    }),
	fill: new Fill({
		color: 'rgba(255, 255, 255, 0.6)',
	}),
	image: new CircleStyle({
		radius: 1,
		fill: new Fill({
			color: 'rgba(131,176,235,1.0)',
		}),
		stroke: new Stroke({
			color: 'rgba(131,176,235,1.0)',
			width: 1,
		}),
	}),
});

const OpenLayersMap = () => {
	const [map, setMap] = useState<Map | null>(null);
	const [data, setData] = useState({}) as any;
	const [dataBase, setDataBase] = useState({}) as any;
	const [isLoading, setIsLoading] = useState(false);

	const mapNode = useRef(null);
	const layer = useSelector((state:any) => state.layer.layer) as string;
	const units = useSelector((state:any) => state.layer.units) as string;
	const basemap = useSelector((state:any) => state.basemap.basemap);
	const baselayer= useSelector((state:any) => state.baselayer.baselayer);
	const mvt = useSelector((state:any) => state.mvt.mvt);
	const type = useSelector((state:any) => state.type.type);
	const styleLayer = useSelector((state:any) => state.style.style);
	const city = useSelector((state:any) => state.city.city);

	useEffect(() => {
		if (!Object.keys(dataBase).length && !isLoading) {
			axios.get('/data/baseLayerStyles_MA.json')
			.then(res => {
				setDataBase(res.data);
				setIsLoading(false);
			})
		}
	}, [baselayer, dataBase, isLoading, type, styleLayer, city, mvt, layer]);

	const view = new View({
		center: malaga,
		zoom: 14,
		minZoom: 12,
	  });

	const scaleControl = new ScaleLine({
		units: 'metric',
		bar: false,
		steps: 8,
		text: true,
		minWidth: 140,
	  });

	  const vectorLayerLine = new VectorTileLayer({
		declutter: true,
		source: new VectorTileSource({
		  format: new MVT(),
		  url:
			"https://api.mapbox.com/v4/gis4tech-anda-ugr.Indicadores_MA/" +
			"{z}/{x}/{y}.vector.pbf?access_token=" +
			key,
		}),
		style: function (feature) {
		  const value = feature.get(layer);
		  if (layer === 'TipoDestin' && styleLayer && styleLayer[layer]) {
			const item = styleLayer?.[layer].find(
				(i:any) => value == i.value
			);
			if (item) {
				style.getStroke().setWidth(item.width/2);
				style.getStroke().setColor(item.color);
			} else {
				style.getStroke().setWidth(0);
				style.getStroke().setColor("rgba(0,0,0,0)");
			}
			return style;
		  }
		  else if (styleLayer && styleLayer[layer]) {
			const item = styleLayer?.[layer].find(
				(i:any) => value >= i.minValue && value <= i.maxValue
			);
			if (item) {
				style.getStroke().setWidth(item.width/2);
				style.getStroke().setColor(item.color);
			} else {
				style.getStroke().setWidth(0);
				style.getStroke().setColor("rgba(0,0,0,0)");
			}
			return style;
		  }
		},
	  });

	  const vectorBaseLayer = new VectorTileLayer({
		declutter: true,
		source: new VectorTileSource({
		  format: new MVT(),
		  url:
		  'https://api.mapbox.com/v4/gis4tech-anda-ugr.' + city + mvt + '/' + 
		  '{z}/{x}/{y}.vector.pbf?access_token=' + key
		}),
		style: function (feature) {
			const value = feature.get(baselayer);
			
			if ( type === 'Polygon') {
				if (baselayer === 'Esp_Verdes' && value === 'PLAYA DE EL CANDADO') {
					const item = dataBase?.[type][baselayer][0]; 
					style.getFill().setColor(item.fill);
					style.getStroke().setWidth(item.width);
					style.getStroke().setColor(item.color);
				}	
				else if (dataBase && dataBase[type][baselayer]) {
					const item = dataBase?.[type][baselayer].find(
						(i:any) => value >= i.minValue && value <= i.maxValue
					);
				if (item) {
					style.getFill().setColor(item.fill);
					style.getStroke().setWidth(item.width);
					style.getStroke().setColor(item.color);
				} else {
					style.getFill().setColor('rgba(0, 0, 0, 0)');
					style.getStroke().setWidth(0);
					style.getStroke().setColor("rgba(0,0,0,0)");
				}
				return style;
				}
				return style;
			} else if (type === 'Polyline') {
				if (baselayer === 'PRD_TIPO' && value === 'PRD') {
					const item = dataBase?.[type][baselayer][0]; 
					style.getStroke().setWidth(item.width/2);
					style.getStroke().setColor(item.color);
					return style;
				}	
				else if (baselayer === 'ACCESO_BICI_TIPO' && value === 'ACCESOBICI') {
					const item = dataBase?.[type][baselayer][0]; 
					style.getStroke().setWidth(item.width/2);
					style.getStroke().setColor(item.color);
					return style;
				}
				else if (baselayer === 'INTERMODALIDAD_TIPO' && value === 'INTERMODAL') {
					const item = dataBase?.[type][baselayer][0]; 
					style.getStroke().setWidth(item.width/2);
					style.getStroke().setColor(item.color);
					return style;
				}
				else if (baselayer === 'RUTAS_COLEGIOS_TIPO' && value === 'RUTASEDUC') {
					const item = dataBase?.[type][baselayer][0]; 
					style.getStroke().setWidth(item.width/2);
					style.getStroke().setColor(item.color);
					return style;
				}
				else if (baselayer === 'MODOTPTE' && value === 'ANDA') {
					const item = dataBase?.[type][baselayer][0]; 
					style.getStroke().setWidth(item.width/2);
					style.getStroke().setColor(item.color);
					return style;
				}
				else if (baselayer === 'MODOTPTE' && value === 'BICI') {
					const item = dataBase?.[type][baselayer][1]; 
					style.getStroke().setWidth(item.width/2);
					style.getStroke().setColor(item.color);
					return style;
				}
				else if (baselayer === 'MODOTPTE' && value === 'TP') {
					const item = dataBase?.[type][baselayer][2]; 
					style.getStroke().setWidth(item.width/2);
					style.getStroke().setColor(item.color);
					return style;
				}
				else if (baselayer === 'MODOTPTE' && value === 'COCHE_MOTO') {
					const item = dataBase?.[type][baselayer][3]; 
					style.getStroke().setWidth(item.width/2);
					style.getStroke().setColor(item.color);
					return style;
				}
				else if (baselayer === 'MODOTPTE' && value === 'OTRO') {
					const item = dataBase?.[type][baselayer][4]; 
					style.getStroke().setWidth(item.width/2);
					style.getStroke().setColor(item.color);
					return style;
				}
				else if (baselayer === 'CONTINUIDAD_TIPO' && value === 'CONTINUIDA') {
					const item = dataBase?.[type][baselayer][0]; 
					style.getStroke().setWidth(item.width/2);
					style.getStroke().setColor(item.color);
					return style;
				}
				else if (dataBase && dataBase[type][baselayer]) {
					const item = dataBase?.[type][baselayer].find(
					(i:any) => value >= i.minValue && value <= i.maxValue
					);
					if (item) {
						style.getStroke().setWidth(item.width/2);
						style.getStroke().setColor(item.color);
					} else {
						style.getStroke().setWidth(0);
						style.getStroke().setColor("rgba(0,0,0,0)");
					}
					return style;
				}
			} else if (type === 'Point') {
                if (baselayer === 'TRAF_UNI' && value === 0) {
					const item = dataBase?.[type][baselayer][0]; 
				if (item) {
						style = new Style({
							stroke: new Stroke({
								lineCap: "round",
								lineJoin: "round",
							}),
							fill: new Fill({
								color: 'rgba(255, 255, 255, 0.6)',
							}),
							image: new CircleStyle({
								radius: item.radius,
								fill: new Fill({
									color: item.color,
								}),
								stroke: new Stroke({
									color: item.color,
									width: 1,
								}),
							}),
						});
						
					}
					else{
						style = new Style({}); 
						
					}
                    return style;
                }
                else if (baselayer === 'TRAF_UNI' && value === 0.5) {
					const item = dataBase?.[type][baselayer][1]; 
				if (item) {
						style = new Style({
							stroke: new Stroke({
								lineCap: "round",
								lineJoin: "round",
							}),
							fill: new Fill({
								color: 'rgba(255, 255, 255, 0.6)',
							}),
							image: new CircleStyle({
								radius: item.radius,
								fill: new Fill({
									color: item.color,
								}),
								stroke: new Stroke({
									color: item.color,
									width: 1,
								}),
							}),
						});
						
					}
					else{
						style = new Style({}); 
						
					}
                    return style;
                }
				else if (baselayer === 'TRAF_UNI' && value === 1) {
					const item = dataBase?.[type][baselayer][2]; 
				if (item) {
						style = new Style({
							stroke: new Stroke({
								lineCap: "round",
								lineJoin: "round",
							}),
							fill: new Fill({
								color: 'rgba(255, 255, 255, 0.6)',
							}),
							image: new CircleStyle({
								radius: item.radius,
								fill: new Fill({
									color: item.color,
								}),
								stroke: new Stroke({
									color: item.color,
									width: 1,
								}),
							}),
						});
						
					}
					else{
						style = new Style({}); 
						
					}
                    return style;
                }
                else if (baselayer === 'n_cruces' && value === 3.5) {
					const item = dataBase?.[type][baselayer][0]; 
				if (item) {
						style = new Style({
							stroke: new Stroke({
								lineCap: "round",
								lineJoin: "round",
							}),
							fill: new Fill({
								color: 'rgba(255, 255, 255, 0.6)',
							}),
							image: new CircleStyle({
								radius: item.radius,
								fill: new Fill({
									color: item.color,
								}),
								stroke: new Stroke({
									color: item.color,
									width: 1,
								}),
							}),
						});
						
					}
					else{
						style = new Style({}); 
						
					}
                    return style;
                }
                else if (baselayer === 'n_cruces' && value === 4) {
					const item = dataBase?.[type][baselayer][1]; 
				if (item) {
						style = new Style({
							stroke: new Stroke({
								lineCap: "round",
								lineJoin: "round",
							}),
							fill: new Fill({
								color: 'rgba(255, 255, 255, 0.6)',
							}),
							image: new CircleStyle({
								radius: item.radius,
								fill: new Fill({
									color: item.color,
								}),
								stroke: new Stroke({
									color: item.color,
									width: 1,
								}),
							}),
						});
						
					}
					else{
						style = new Style({}); 
						
					}
                    return style;
                }
                else if (baselayer === 'n_cruces' && value === 5) {
					const item = dataBase?.[type][baselayer][2]; 
				if (item) {
						style = new Style({
							stroke: new Stroke({
								lineCap: "round",
								lineJoin: "round",
							}),
							fill: new Fill({
								color: 'rgba(255, 255, 255, 0.6)',
							}),
							image: new CircleStyle({
								radius: item.radius,
								fill: new Fill({
									color: item.color,
								}),
								stroke: new Stroke({
									color: item.color,
									width: 1,
								}),
							}),
						});
						
					}
					else{
						style = new Style({}); 
						
					}
                    return style;
                }
                else if (baselayer === 'n_cruces' && value === 6) {
					const item = dataBase?.[type][baselayer][3]; 
				if (item) {
						style = new Style({
							stroke: new Stroke({
								lineCap: "round",
								lineJoin: "round",
							}),
							fill: new Fill({
								color: 'rgba(255, 255, 255, 0.6)',
							}),
							image: new CircleStyle({
								radius: item.radius,
								fill: new Fill({
									color: item.color,
								}),
								stroke: new Stroke({
									color: item.color,
									width: 1,
								}),
							}),
						});
						
					}
					else{
						style = new Style({}); 
						
					}
                    return style;
                }
                else if (baselayer === 'ESTAC_BICI_TIPO' && value === 'ESTAC_BICI') {
                        const item = dataBase?.[type][baselayer][0]; 
                if (item) {
                            style = new Style({
                                stroke: new Stroke({
                                    lineCap: "round",
                                    lineJoin: "round",
                                }),
                                fill: new Fill({
                                    color: 'rgba(255, 255, 255, 0.6)',
                                }),
                                image: new CircleStyle({
                                    radius: item.radius,
                                    fill: new Fill({
                                        color: item.color,
                                    }),
                                    stroke: new Stroke({
                                        color: item.color,
                                        width: 1,
                                    }),
                                }),
                            });
                            
                        }

                        else{
                            style = new Style({}); 
                            
                        }
                        return style;
                    }
                    else if (baselayer === 'TAXIS_TIPO' && value === 'INTERMODAL') {
                        const item = dataBase?.[type][baselayer][0]; 
                if (item) {
                            style = new Style({
                                stroke: new Stroke({
                                    lineCap: "round",
                                    lineJoin: "round",
                                }),
                                fill: new Fill({
                                    color: 'rgba(255, 255, 255, 0.6)',
                                }),
                                image: new CircleStyle({
                                    radius: item.radius,
                                    fill: new Fill({
                                        color: item.color,
                                    }),
                                    stroke: new Stroke({
                                        color: item.color,
                                        width: 1,
                                    }),
                                }),
                            });
                            
                        }

                        else{
                            style = new Style({}); 
                            
                        }
                        return style;
                    }
                    else if (baselayer === 'PARADAS_TPTE_TIPO' && value === 'Parada de metro') {
                        const item = dataBase?.[type][baselayer][0]; 
                if (item) {
                            style = new Style({
                                stroke: new Stroke({
                                    lineCap: "round",
                                    lineJoin: "round",
                                }),
                                fill: new Fill({
                                    color: 'rgba(255, 255, 255, 0.6)',
                                }),
                                image: new CircleStyle({
                                    radius: item.radius,
                                    fill: new Fill({
                                        color: item.color,
                                    }),
                                    stroke: new Stroke({
                                        color: item.color,
                                        width: 1,
                                    }),
                                }),
                            });
                            
                        }

                        else{
                            style = new Style({}); 
                            
                        }
                        return style;
                    }
                    else if (baselayer === 'PARADAS_TPTE_TIPO' && value === 'BUS') {
                        const item = dataBase?.[type][baselayer][1]; 
                if (item) {
                            style = new Style({
                                stroke: new Stroke({
                                    lineCap: "round",
                                    lineJoin: "round",
                                }),
                                fill: new Fill({
                                    color: 'rgba(255, 255, 255, 0.6)',
                                }),
                                image: new CircleStyle({
                                    radius: item.radius,
                                    fill: new Fill({
                                        color: item.color,
                                    }),
                                    stroke: new Stroke({
                                        color: item.color,
                                        width: 1,
                                    }),
                                }),
                            });
                            
                        }

                        else{
                            style = new Style({}); 
                            
                        }
                        return style;
                    }
                    else if (baselayer === 'CENTROS_EMPLEO_TIPO' && value === 'CENTRO_EMP') {
                        const item = dataBase?.[type][baselayer][0]; 
                if (item) {
                            style = new Style({
                                stroke: new Stroke({
                                    lineCap: "round",
                                    lineJoin: "round",
                                }),
                                fill: new Fill({
                                    color: 'rgba(255, 255, 255, 0.6)',
                                }),
                                image: new CircleStyle({
                                    radius: item.radius,
                                    fill: new Fill({
                                        color: item.color,
                                    }),
                                    stroke: new Stroke({
                                        color: item.color,
                                        width: 1,
                                    }),
                                }),
                            });
                            
                        }

                        else{
                            style = new Style({}); 
                            
                        }
                        return style;
                    }
                    else if (baselayer === 'CENTROS_EDUCATIVOS_TIPO' && value === 'Centro de Educación Infantil') {
                        const item = dataBase?.[type][baselayer][0]; 
                if (item) {
                            style = new Style({
                                stroke: new Stroke({
                                    lineCap: "round",
                                    lineJoin: "round",
                                }),
                                fill: new Fill({
                                    color: 'rgba(255, 255, 255, 0.6)',
                                }),
                                image: new CircleStyle({
                                    radius: item.radius,
                                    fill: new Fill({
                                        color: item.color,
                                    }),
                                    stroke: new Stroke({
                                        color: item.color,
                                        width: 1,
                                    }),
                                }),
                            });
                            
                        }

                        else{
                            style = new Style({}); 
                            
                        }
                        return style;
                    }
                    else if (baselayer === 'CENTROS_EDUCATIVOS_TIPO' && value === 'Centro Docente Privado') {
                        const item = dataBase?.[type][baselayer][1]; 
                if (item) {
                            style = new Style({
                                stroke: new Stroke({
                                    lineCap: "round",
                                    lineJoin: "round",
                                }),
                                fill: new Fill({
                                    color: 'rgba(255, 255, 255, 0.6)',
                                }),
                                image: new CircleStyle({
                                    radius: item.radius,
                                    fill: new Fill({
                                        color: item.color,
                                    }),
                                    stroke: new Stroke({
                                        color: item.color,
                                        width: 1,
                                    }),
                                }),
                            });
                            
                        }

                        else{
                            style = new Style({}); 
                            
                        }
                        return style;
                    }
                    else if (baselayer === 'CENTROS_EDUCATIVOS_TIPO' && value === 'Colegio de Educación Infantil y Primaria') {
                        const item = dataBase?.[type][baselayer][2]; 
                if (item) {
                            style = new Style({
                                stroke: new Stroke({
                                    lineCap: "round",
                                    lineJoin: "round",
                                }),
                                fill: new Fill({
                                    color: 'rgba(255, 255, 255, 0.6)',
                                }),
                                image: new CircleStyle({
                                    radius: item.radius,
                                    fill: new Fill({
                                        color: item.color,
                                    }),
                                    stroke: new Stroke({
                                        color: item.color,
                                        width: 1,
                                    }),
                                }),
                            });
                            
                        }

                        else{
                            style = new Style({}); 
                            
                        }
                        return style;
                    }
                    else if (baselayer === 'CENTROS_EDUCATIVOS_TIPO' && value === 'Escuela Infantil') {
                        const item = dataBase?.[type][baselayer][3]; 
                if (item) {
                            style = new Style({
                                stroke: new Stroke({
                                    lineCap: "round",
                                    lineJoin: "round",
                                }),
                                fill: new Fill({
                                    color: 'rgba(255, 255, 255, 0.6)',
                                }),
                                image: new CircleStyle({
                                    radius: item.radius,
                                    fill: new Fill({
                                        color: item.color,
                                    }),
                                    stroke: new Stroke({
                                        color: item.color,
                                        width: 1,
                                    }),
                                }),
                            });
                            
                        }

                        else{
                            style = new Style({}); 
                            
                        }
                        return style;
                    }
                    else if (baselayer === 'MERCADOS_TIPO' && value === 'LOCALES') {
                            const item = dataBase?.[type][baselayer][0]; 
                if (item) {
                                style = new Style({
                                    stroke: new Stroke({
                                        lineCap: "round",
                                        lineJoin: "round",
                                    }),
                                    fill: new Fill({
                                        color: 'rgba(255, 255, 255, 0.6)',
                                    }),
                                    image: new CircleStyle({
                                        radius: item.radius,
                                        fill: new Fill({
                                            color: item.color,
                                        }),
                                        stroke: new Stroke({
                                            color: item.color,
                                            width: 1,
                                        }),
                                    }),
                                });
                                
                            }
                            else{
                                style = new Style({}); 
                                
                            }
                            return style;
                        }

		}

	}
	});
	
	// Base map
	const BaseMap = new TileLayer({
		source: new OSM ({
			url: basemap
		}),
		opacity: 0.7,
	});

	useEffect(() => {
		const node = mapNode.current;
		if (typeof window === "undefined" || node === null) return;
		
        const map = new Map({
			target: node,
            layers:[BaseMap,vectorBaseLayer,vectorLayerLine],
            view: view,
			controls: defaultControls().extend([scaleControl]),
        });

		const featureOverlay = new VectorLayer({
			source: new VectorSource(),
			map: map,
			style: new Style({
				stroke: new Stroke({
					color: 'rgba(0, 0, 0, 0.7)',
					width: 3,
				}),
			}),
		});
		const displayFeatureInfo = function (pixel: any, evt: any) {
			const feature = map.forEachFeatureAtPixel(pixel, function (feature) {
				return feature;
			});
			const info = document.getElementById('info');
			const popup = document.getElementById('popup');
			if (feature) {
				let value = feature.get(layer);
				if (typeof value === "number") {
					value = parseFloat(value.toFixed(2)).toString(); // Redondear a dos decimales si el valor es un número
				}
				info!.innerHTML = (value || '') + ' ' + units;
				popup!.innerHTML = (value || '') + ' ' + units;
				
				const coordinate = evt.coordinate;
				const [x, y] = map.getPixelFromCoordinate(coordinate);
				popup!.style.left = x + 'px';
				popup!.style.top = (y - popup!.offsetHeight) + 'px';
				popup!.style.display = 'block';
			} else {
				info!.innerHTML = '&nbsp;';
				const popup = document.getElementById('popup');
				popup!.innerHTML = '&nbsp;';
				popup!.style.display = 'none';
			}
		};
		map.on('pointermove', function (evt) {
			if (evt.dragging) {
				return;
			}
			const pixel = map.getEventPixel(evt.originalEvent);
			displayFeatureInfo(pixel, evt);
		});
		map.on('click', function (evt) {
			displayFeatureInfo(evt.pixel, evt);
		});
	
		setMap(map);
		return () => {
			map.setTarget();
			
		  };
	}, [layer, basemap, baselayer, mvt, styleLayer, city]);

	return (
		<div ref={mapNode} style={{ width: "100%", height: "100%", position: 'fixed', top: '50px', left: '0px' }}>
			<div id="popup" className="ol-popup">
				<a href="#" id="popup-closer" className="ol-popup-closer"></a>
				<div id="popup"></div> 
			</div>
		</div>
	);
}

export default OpenLayersMap;