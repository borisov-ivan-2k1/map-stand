(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAVCAYAAACg/AXsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIISURBVHgBrVM7UgJBEN0PB8DMBFiLxExifq4nEE8AZBohJwBOgGZm7t5AT8DyqyIkNFwg0YycAnxv6ClXZDeyq7pmu6f7zes3s6ZxZK7rpne7XWu/37sIC/A0fA2fw/3NZhPMZrMw2mNGg2q1yuauNMZZCO+Nx2NPJ6wIQAcATwTAGsBvbNs+Q7HJFfk75rE68FfW/2JSqVQa3JBcM3rKsZVKpUfLsvqq2TQbo9HIN6GBs91uBzwBWrSn0ynZGOVy2UVRC+6AATXxNXgEaA2WF3Ymk6khaJAqAB70aFjYcAk/lxFqjuMYi8ViuFqtZrlczuU+CHxRk7pQe9ajibhrMsNtXHBExszL6DRfiWpZtynjcI0GaAVcUXgLQH5yNE8aPIyQlhHI3GM9WHDPIRN1nUEQrIWRilEwjwoqN0O7kvpQYgWimovFYk6SC6FZi4KkUqlrAQulviBbIcfhiS78hjRR5IFNHd7B/NRhDsBr0YlMfRm/oEEtiPcuSSXwZDLhQ+vJKX00DTQA85E31NGgdj6f/8DmPeJLfYXL5TLIZrND0esThQRu4wAFIE+A44YAbaprOHqFXbzCnhFj8nt0JbwDyJvNLz4enIx+06U+mlESAEcDsxclhS6QEWKBTgBoNj8gSUBJAEoC44Th5+vyiiUMjMMTOAnwh0kMIycJIBbkGCgJ4N/sG3xZSCeMNQuTAAAAAElFTkSuQmCC"},105:function(e,t,a){e.exports=a.p+"static/media/battle.a3fda52f.svg"},106:function(e,t,a){e.exports=a.p+"static/media/troopMovement.d648020d.svg"},107:function(e,t,a){e.exports=a.p+"static/media/osada.52c7ca34.svg"},108:function(e,t,a){e.exports=a.p+"static/media/city.d89c57c7.svg"},109:function(e,t,a){e.exports=a.p+"static/media/dote.9781b350.svg"},110:function(e,t,a){e.exports=a.p+"static/media/dogovor.bbf1c3a4.svg"},114:function(e,t,a){e.exports=a.p+"static/media/search.aa9ec654.svg"},122:function(e,t,a){e.exports=a(266)},131:function(e,t,a){},138:function(e,t,a){},217:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},245:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),i=a(19),s=a(10),l=function(e){return{type:"INIT_MAP",payload:e}},u=function(e){return{type:"SEARCH/SET_SEARCH",payload:e}},m=function(e){return{type:"SET_SHOW_SEARCH",payload:e}},d=function(e){return{type:"GET_THEMES",payload:e}},p=function(e){return{type:"SET_ACTIVE_THEME",payload:e}},f=function(e){return{type:"GET_EVENTS",payload:e}},v=function(e){return{type:"SET_ACTIVE_EVENT",payload:e}},E=function(e){return{type:"SET_THEMES_LOADING",payload:e}},h=function(e){return{type:"SET_CURRENT_YEAR",payload:e}},b=function(e){return{type:"SET_MAP_POSITION",payload:e}},y=function(e){return{type:"SET_MAP_ZOOM",payload:e}},g=function(e){return{type:"LEGEND_EXLUDE_TYPE",payload:e}},A=function(e){return{type:"SET_INFOBLOCKS",payload:e}},O=function(e){return{type:"SET_INFOBLOCK_ID",payload:e}},k=function(e){return{type:"CLOSE_INFOBLOCK",payload:e}},N=function(){return{type:"CLEAR_INFOBLOCK_DATA"}},T=function(e){return{type:"GET_CITIES",payload:e}},I=function(){return{type:"GET_DOTES"}},w=function(e){return{type:"GET_BORDERS",payload:e}},x=a(17),S=(a(131),a(101)),j=a.n(S),_=a(48),C=a.n(_),L=a(49),P=a.n(L),M=a(120),R=a(105),B=a.n(R),U=a(106),D=a.n(U),Y=a(107),G=a.n(Y),H=a(108),F=a.n(H),Z=a(109),W=a.n(Z),J=a(110),V=a.n(J),Q=[{title:"\u041f\u043e\u0431\u0435\u0434\u0430",value:1},{title:"\u041d\u0438\u0447\u044c\u044f",value:0},{title:"\u041f\u043e\u0440\u0430\u0436\u0435\u043d\u0438\u0435",value:-1}],X={osada:G.a,battle:B.a,troopMovement:D.a,city:F.a,dote:W.a,dogovor:V.a},K=Object(x.b)((function(e){var t,a;return{legend:null===(t=e.map)||void 0===t||null===(a=t.activeTheme)||void 0===a?void 0:a.legend,excludedTypes:e.map.excludedTypes}}),(function(e){return Object(s.b)({exludeLegendType:g},e)}))((function(e){var t=e.legend,a=e.excludedTypes,c=e.exludeLegendType,o=Object(n.useState)(!1),s=Object(i.a)(o,2),l=s[0],u=s[1];return r.a.createElement("div",{className:"Legend ".concat(l&&"Legend-open"," ").concat(!(null===t||void 0===t?void 0:t.length)&&"Legend-nodata")},r.a.createElement("div",{className:"Legend-Title"},r.a.createElement("img",{src:j.a}),r.a.createElement("span",null,"\u041b\u0435\u0433\u0435\u043d\u0434\u0430")),r.a.createElement("div",{className:"Legend-Content"},!!t&&t.map((function(e){return r.a.createElement("div",null,!!e.name&&r.a.createElement("div",{style:{visibility:l?"visible":"hidden"},className:"Legend-Content-Group"},e.name),e.items.map((function(e){return r.a.createElement("div",{className:"Legend-Content-Item"},r.a.createElement(M.a,{className:"Legend-Content-Item-Icon",style:{fill:a.includes(e.value)?"#787878":e.iconColor},src:X[e.iconType],beforeInjection:function(e){e.classList.add("svg-class-name"),e.setAttribute("style","width: 20px; height: 20px")},onClick:function(){return c(e.value)}}),r.a.createElement("span",null,e.title))})))})),r.a.createElement("div",null,r.a.createElement("div",{className:"Legend-Content-Item checkbox"},r.a.createElement("input",{type:"checkbox",checked:a.includes("PAST_EVENTS"),onChange:function(){return c("PAST_EVENTS")}}),r.a.createElement("span",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f")))),r.a.createElement("div",{className:"Legend-Toggle",onClick:function(){return u(!l)}},r.a.createElement("img",{src:l?P.a:C.a}),l&&r.a.createElement("span",null,"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c")))})),z=(a(133),a(273)),q=a(274),$=a(268),ee=a(275),te=a(269),ae=a(270),ne=a(271),re=a(2),ce=a.n(re),oe=(a(134),a(137),function(e,t){return Array.from({length:t-e+1},(function(t,a){return a+e}))}),ie=function(e){switch(e){case 6:return e-3+25;case 7:return e-3+33;default:return e-3+15}},se=(a(138),a(67)),le=a(112),ue=a(113),me=(a(139),a(68)),de=a(117),pe=function(){function e(t){Object(le.a)(this,e);this.precision=10,this.options=Object.assign({},{arrow:{},head:{yawn:60,size:10},weight:1,tailWidth:400,headWidth:160},t)}return Object(ue.a)(e,[{key:"draw",value:function(e,t){var a=this,n=this.options,r=[],c=this.getKilometersPerPixel(e),o=n.tailWidth*c*n.weight,s=n.headWidth*c*n.weight;return t.forEach((function(t,c){if(t.length>1){var l=[];t.forEach((function(t){return l.push(e.layerPointToLatLng(t))}));var u=a.calcArrowBody(e,l,o,s),m=Object(i.a)(u,3),d=m[0],p=m[1],f=m[2],v=a.calcHatPoints(e,n,d,l[l.length-1]),E=Object(i.a)(v,3),h=E[0],b=E[1],y=E[2],g=ce.a.polyline([[b.lat,b.lng],[y.lat,y.lng]]),A=me.intersect(g.toGeoJSON(),ce.a.polyline(p).toGeoJSON()),O=me.intersect(g.toGeoJSON(),ce.a.polyline(f).toGeoJSON()),k=a.filterPointsInHat(p,A),N=Object(i.a)(k,2);p=N[0],A=N[1];var T=a.filterPointsInHat(f,O),I=Object(i.a)(T,2);f=I[0],O=I[1],p.reverse();var w=Array.prototype.concat(h,A,p,[p[p.length-1],f[0]],f,[f[f.length-1]],O);r.push(ce.a.polygon(w,n.arrow))}})),r}},{key:"calcHatPoints",value:function(e,t,a,n){var r=t.head.size,c=180+a,o=(180-c-t.head.yawn/2)*(Math.PI/180),i=(180-c+t.head.yawn/2)*(Math.PI/180),s=r*Math.sin(o),l=r*Math.cos(o),u=r*Math.sin(i),m=r*Math.cos(i),d=e.latLngToLayerPoint(n),p={x:d.x+s,y:d.y+l},f={x:d.x+u,y:d.y+m},v=e.layerPointToLatLng(p),E=e.layerPointToLatLng(f);return[[[v.lat,v.lng],[n.lat,n.lng],[E.lat,E.lng]],v,E]}},{key:"latLngToCoords",value:function(e){return[ce.a.Util.formatNum(e.lat,this.precision),ce.a.Util.formatNum(e.lng,this.precision)]}},{key:"filterPointsInHat",value:function(e,t){if(t){t=Object(de.b)(t.geometry.coordinates.reverse());var a=Math.sign(e[e.length-1].lat-t.lat),n=Math.sign(e[e.length-1].lng-t.lng);e=e.filter((function(e){return(e.lat-t.lat)*a<0||(e.lng-t.lng)*n<0}))}else t=[];return[e,t]}},{key:"getKilometersPerPixel",value:function(e){return 40075.016686*Math.abs(Math.cos(e.getCenter().lat*Math.PI/180))/Math.pow(2,e.getZoom()+8)}},{key:"smoothLine",value:function(e,t,a){var n,r=this;return t.forEach((function(a,c){var o=e.latLngToLayerPoint(a,r.precision);if(n){var i=Math.abs(n.x-o.x),s=Math.abs(n.y-o.y);if(i>0&&s>0&&(i<4||s<4)&&(i/s<=.2||s/i<=.2)){var l=e.layerPointToLatLng(new ce.a.Point(o.x/2+n.x/2,o.y/2+n.y/2));t[c]=l}}n=o})),t}},{key:"calcArrowBody",value:function(e,t,a,n){var r,c=[],o=[],i=a,s=(a-n)/e.distance(t[0],t[t.length-1]);t[0];return r=ce.a.GeometryUtil.angle(e,t[0],t[1]),t.forEach((function(a,n){n>0&&(r=ce.a.GeometryUtil.angle(e,t[n-1],t[n]),i-=s*e.distance(t[n-1],t[n]));var l=ce.a.GeometryUtil.destination(a,r+90,i);c.push(l),o.push(ce.a.GeometryUtil.destination(l,r-90,2*i)),a})),[r,c,o]}}]),e}(),fe=ce.a.Polyline.prototype.addTo,ve=ce.a.Polyline.prototype._update,Ee=ce.a.Polyline.prototype.remove;ce.a.Polyline.include({thickArrows:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.options.noClip=!0,this._thickArrowsDraw=new pe(e),this},drawThickArrows:function(){this._thickArrows&&this._thickArrows.remove();var e=this._thickArrowsDraw.draw(this._map,this._parts);return this._thickArrows=ce.a.layerGroup(e),this},getThickArrows:function(){return this._thickArrows?this._thickArrows:console.log("Error: You tried to call '.getThickArrows() on a shape that does not have a thickArrows.  Use '.thickArrows()' to add a thickArrows before trying to call '.getThickArrows()'")},deleteThickArrows:function(){this._thickArrows&&(this._thickArrows.remove(),delete this._thickArrows,this._thickArrowsDraw=null,delete this._thickArrowsDraw)},addTo:function(e){return fe.apply(this,arguments),this._thickArrowsDraw&&(this.drawThickArrows(),this._thickArrows.addTo(this._map)),this},_update:function(){return ve.apply(this,arguments),this._thickArrowsDraw&&(this.drawThickArrows(),this._map.addLayer(this._thickArrows)),this},remove:function(){return this._thickArrows&&this._thickArrows.remove(),Ee.apply(this,arguments),this}});var he=ce.a.LayerGroup.prototype.removeLayer,be=ce.a.LayerGroup.prototype.onRemove;ce.a.LayerGroup.include({removeLayer:function(e){var t=e in this._layers?e:this.getLayerId(e);return this._map&&this._layers[t]&&this._layers[t]._thickArrows&&this._layers[t]._thickArrows.remove(),he.apply(this,arguments),this},onRemove:function(e,t){t in this._layers&&this._layers[t]&&this._layers[t].remove(),be.apply(this,arguments)}});var ye=ce.a.Map.prototype.removeLayer;ce.a.Map.include({removeLayer:function(e){return e._thickArrows&&e._thickArrows.remove(),ye.apply(this,arguments),this}});var ge=ce.a.GeoJSON.geometryToLayer;ce.a.GeoJSON.include({geometryToLayer:function(e,t){var a=ge.apply(this,arguments),n="Feature"===e.type?e.geometry:e;if(!n||!a)return a;switch(n.type){case"LineString":case"MultiLineString":t.thickArrows&&a.thickArrows(t.thickArrows)}return a},addData:function(e){var t,a,n,r=ce.a.Util.isArray(e)?e:e.features;if(r){for(t=0,a=r.length;t<a;t++)((n=r[t]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var c=this.options;if(c.filter&&!c.filter(e))return this;var o=this.geometryToLayer(e,c);return o?(o.feature=ce.a.GeoJSON.asFeature(e),o.defaultOptions=o.options,this.resetStyle(o),c.onEachFeature&&c.onEachFeature(e,o),this.addLayer(o)):this}});var Ae=Object(x.b)((function(e){return{events:e.map.events,mapPosition:e.map.mapPosition,mapZoom:e.map.mapZoom,activeTheme:e.map.activeTheme,excludedTypes:e.map.excludedTypes,cities:e.map.cities,dotes:e.map.dotes,borders:e.map.borders,infoblockId:e.map.infoblockId,currentYear:e.map.currentYear}}),(function(e){return Object(s.b)({setActiveEvent:v,setMapPosition:b,setMapZoom:y,setInfoblocks:A,setInfoblockId:O,getDotes:I},e)}))((function(e){var t=e.events,a=(e.setActiveEvent,e.mapPosition),c=e.mapZoom,o=e.activeTheme,s=e.setMapPosition,l=e.setMapZoom,u=e.excludedTypes,m=e.setInfoblocks,d=e.setInfoblockId,p=e.cities,f=(e.dotes,e.getDotes),v=e.borders,E=e.currentYear,h=Object(n.useState)(4),b=Object(i.a)(h,2),y=b[0],g=b[1];Object(n.useEffect)((function(){o&&(s(o.position),l(o.zoom||4))}),[o]),Object(n.useEffect)((function(){return f()}),[]);var A=Object(n.useState)(!0),O=Object(i.a)(A,2),k=O[0],N=O[1];Object(n.useEffect)((function(){N((function(){return!1}))}),[E,y]),Object(n.useEffect)((function(){k||N((function(){return!0}))}),[k]);var T=ce.a.CRS.EPSG3857;return r.a.createElement(z.a,{maxBoundsViscosity:1,worldCopyJump:!1,className:"Map",id:"map",maxBounds:[[85,-180],[85,180],[-85,-180],[-85,180]],scrollWheelZoom:!1,center:a,zoom:c,crs:T,maxZoom:7,minZoom:3,zoomAnimation:!0,animate:!0,onzoomend:function(e){return g(e.target._zoom)},onclick:function(e){return console.log([e.latlng.lat,e.latlng.lng])}},r.a.createElement(q.a,{pane:"tilePane",noWrap:!0,minZoom:3,maxZoom:7,tms:!1,url:"https://schoolatlas.ru/img/tiles/{z}/{x}/{y}.png"}),!!p.length&&y>=5&&p.map((function(e){if(e.minShowZoom&&e.minShowZoom>y)return null;var t=new ce.a.Icon({iconUrl:X.city,iconRetinaUrl:X.city,iconSize:y-3+5});return r.a.createElement($.a,{pane:"markerPane",key:e._id,icon:t,position:e.position},r.a.createElement(ee.a,{className:"Map-Cities-Tooltip",permanent:!0,direction:"top"},r.a.createElement("div",null,e.title)))})),r.a.createElement(te.a,{pane:"overlayPane"},!!v.length&&v.map((function(e){if(u&&u.includes(e.legendType))return null;var t=e.stripe?se.a:ae.a,a=e.stripe?function(t){return{fillPattern:se.b.StripePattern({weight:10,spaceWeight:20,fill:!0,width:20,height:20,color:e.fillColor,key:e._id,spaceOpacity:1,spaceColor:e.stripeColor||"#fff",angle:45})}}:void 0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,{renderer:ce.a.svg({padding:.8}),smoothFactor:2,weight:e.weight,color:e.color,opacity:e.opacity,fillColor:e.fillColor,fillOpacity:e.fillOpacity,data:e.data,key:e._id,style:a}),e.imageUrl&&e.bounds&&r.a.createElement(ne.a,{pane:"markerPane",url:e.imageUrl,bounds:e.bounds,key:"name-".concat(e._id),opacity:e.opacity||1}))}))),!!t.length&&t.map((function(e){if(!!u&&u.includes(e.legendType)||!!e.minShowZoom&&e.minShowZoom>y)return null;var t=e.yearStart<=E&&e.yearEnd>=E;if(!(null===u||void 0===u?void 0:u.includes("PAST_EVENTS"))&&!t)return null;var a=["Map-Event"];if(t||a.push("Map-Event-Past"),"troopMovement"===e.type&&k){"".concat(5+Math.pow(y-3,2),"px");return r.a.createElement(ae.a,{pane:"popupPane",smoothFactor:2,className:a.join(" "),key:e._id,data:e.data.data,weight:-1+y,color:e.data.color,style:{opacity:0,zIndex:9999},thickArrows:{arrow:{color:e.data.color,opacity:.3,fillColor:e.data.color,fillOpacity:t?1:.3,pane:"markerPane"},head:{size:5+Math.pow(y-3,2),yawn:60},weight:5+Math.pow(y-3,2)}},r.a.createElement(ee.a,{direction:"top"},r.a.createElement("div",null,e.title)))}var n=new ce.a.Icon({iconUrl:X[e.iconType],iconRetinaUrl:X[e.iconType],iconSize:ie(y),className:a.join(" ")});return r.a.createElement($.a,{pane:"tooltipPane",zIndexOffset:!0,style:{opacity:.3,zIndex:99},onclick:function(){m(e),d(e._id)},key:e._id,icon:n,position:e.position},r.a.createElement(ee.a,{pane:"popupPane",direction:"top"},r.a.createElement("div",null,e.title)))})))})),Oe=(a(217),a(114)),ke=a.n(Oe),Ne=a(272),Te=a(14),Ie=Object(x.b)((function(e){return{search:e.map.search,data:e.map.data,loading:e.map.themesLoading,showSearch:e.map.showSearch}}),(function(e){return Object(s.b)({setSearch:u,getThemes:d,getEvents:f,setThemesLoading:E,setActiveTheme:p,setInfoblocks:A,setInfoblockId:O,clearInfoblockData:N},e)}))((function(e){var t=e.search,a=e.data,n=e.loading,c=e.showSearch,o=e.setSearch,i=e.getThemes,s=(e.getEvents,e.setThemesLoading),l=e.setActiveTheme,u=e.setInfoblocks,m=(e.setInfoblockId,e.clearInfoblockData),d=Object(Te.f)(),p=Object(Ne.a)(i,1e3);return r.a.createElement("div",{className:"Search ".concat(c&&!!t&&"active")},r.a.createElement("img",{src:ke.a,className:"Search-Btn"}),r.a.createElement("input",{placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0430\u0442\u043b\u0430\u0441\u0443",value:t,onChange:function(e){e.target.value&&s(!0),o(e.target.value),p.callback(e.target.value)}}),c&&!!t&&r.a.createElement("div",{className:"Search-Results"},n?r.a.createElement("div",{className:"Search-Results-Item"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."):a.length?a.map((function(e){return r.a.createElement("div",{onClick:function(){return function(e){m(),o(e.title),l(e),u(e);var t=new URLSearchParams;t.append("themeId",e._id),d.push({search:t.toString()})}(e)},key:e.id,className:"Search-Results-Item"},r.a.createElement("div",null,e.title),r.a.createElement("div",null,null===e||void 0===e?void 0:e.yearStart,!!e.yearEnd&&" - ".concat(e.yearEnd)))})):r.a.createElement("div",{className:"Search-Results-Item"},"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")))})),we=(a(219),Object(x.b)((function(e){return{activeTheme:e.map.activeTheme,currentYear:e.map.currentYear}}),(function(e){return Object(s.b)({getEvents:f,setCurrentYear:h,getCities:T,getBorders:w},e)}))((function(e){var t,a=e.activeTheme,c=e.getEvents,o=e.setCurrentYear,s=e.currentYear,l=e.getCities,u=e.getBorders,m=Object(n.useRef)(),d=Object(n.useState)(0),p=Object(i.a)(d,2),f=p[0],v=p[1],E=Object(n.useState)(0),h=Object(i.a)(E,2),b=h[0],y=h[1],g=Object(n.useState)(0),A=Object(i.a)(g,2),O=A[0],k=A[1],N=Object(n.useState)([]),T=Object(i.a)(N,2),I=T[0],w=T[1],x=Object(n.useState)(0),S=Object(i.a)(x,2),j=(S[0],S[1]);Object(n.useEffect)((function(){var e=function(){return j(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){w(a?oe(a.yearStart,a.yearEnd):oe(2e3,2020))}),[a]),Object(n.useEffect)((function(){a&&c({themeId:a._id,currentYear:s})}),[a,s]),Object(n.useEffect)((function(){m&&v(m.current.clientWidth)}),[null===(t=m.current)||void 0===t?void 0:t.clientWidth]),Object(n.useEffect)((function(){s&&(l(s),u(s))}),[s]),Object(n.useEffect)((function(){f>=1100&&I.length>=15?k(15):f>=1100&&I.length<15?k(I.length):f<1100&&f>=700?k(10):f<1100&&f>=700&&I.length<10?k(I.length):f<700?k(5):f<700&&I.length<5&&k(I.length)}),[f,a,I]),Object(n.useEffect)((function(){y(m.current.clientWidth/O)}),[O]),Object(n.useEffect)((function(){if(I.includes((new Date).getFullYear())){var e=setTimeout((function(){return _(1e4)}),0);return function(){return clearTimeout(e)}}m.current.scrollLeft=0,console.log("else")}),[I,a]);var _=function(e){m.current.scrollLeft+=e};return r.a.createElement("div",{className:"YearsNavigation"},r.a.createElement("div",{style:{width:"".concat(f+20,"px")},className:"YearsNavigation-Line"}),r.a.createElement("img",{onClick:function(){return _(-f)},className:"YearsNavigation-Left",src:C.a}),r.a.createElement("div",{ref:m,className:"YearsNavigation-Wrapper"},I.map((function(e,t){return r.a.createElement("div",{style:{minWidth:"".concat(b,"px")},className:"YearsNavigation-Item"},r.a.createElement("div",{onClick:function(){return function(e){o(e)}(e)},key:"circle-".concat(e),className:"YearsNavigation-Item-Circle ".concat(s===e?"active":"")},r.a.createElement("div",{className:"YearsNavigation-Item-Year",key:"year-".concat(e)},e)))}))),r.a.createElement("img",{onClick:function(){return _(f)},className:"YearsNavigation-Right",src:P.a}))}))),xe=(a(220),Object(x.b)((function(e){return{data:e.map.infoblocks[e.map.infoblockId]}}),(function(e){return Object(s.b)({},e)}))((function(e){var t,a,n=e.data,c=Object(i.a)(n.data,2),o=c[0],s=c[1],l=function(e){return"1"===e?"color-green":"0"===e?"color-gray":"-1"===e?"color-red":void 0},u=o.allyName&&s.allyName;return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"title mb-xl text-center"},r.a.createElement("span",{className:"text-xl"},n.title),r.a.createElement("br",null),r.a.createElement("span",{className:"color-red text-m"},n.date)),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"event-block"},r.a.createElement("div",{className:"event-block-left"},r.a.createElement("img",{className:"img-h-s mb-m",src:o.opponentImgUrl}),r.a.createElement("span",{className:"text-s text-center"},o.opponentName)),r.a.createElement("div",{className:"event-block-center text-l text-center item-v-center"},"\u041f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0438"),r.a.createElement("div",{className:"event-block-right"},r.a.createElement("img",{className:"img-h-s mb-m",src:s.opponentImgUrl}),r.a.createElement("span",{className:"text-s text-center"},s.opponentName))),u&&r.a.createElement("div",{className:"event-block"},r.a.createElement("div",{className:"event-block-left"},r.a.createElement("img",{className:"img-h-s mb-m",src:o.allyImgUrl}),r.a.createElement("span",{className:"text-s text-center"},o.allyName)),r.a.createElement("div",{className:"event-block-center text-l text-center item-v-center"},"\u0421\u043e\u044e\u0437\u043d\u0438\u043a\u0438"),r.a.createElement("div",{className:"event-block-right"},r.a.createElement("img",{className:"img-h-s mb-m",src:s.allyImgUrl}),r.a.createElement("span",{className:"text-s text-center"},s.allyName))),r.a.createElement("div",{className:"event-block"},r.a.createElement("div",{className:"event-block-left"},r.a.createElement("img",{className:"img-s mb-m",src:o.commanderImgUrl}),r.a.createElement("span",{className:"text-s text-center"},o.commanderName)),r.a.createElement("div",{className:"event-block-center text-l text-center item-v-center"},"\u0413\u043b\u0430\u0432\u043d\u043e\xad\u043a\u043e\u043c\u0430\u043d\u0434\u0443\u044e\u0449\u0438\u0435"),r.a.createElement("div",{className:"event-block-right"},r.a.createElement("img",{className:"img-s  mb-m",src:s.commanderImgUrl}),r.a.createElement("span",{className:"text-s text-center"},s.commanderName))),r.a.createElement("div",{className:"event-block"},r.a.createElement("div",{className:"event-block-left"},r.a.createElement("div",{className:"text-s mb-s text-center"},o.strength)),r.a.createElement("div",{className:"event-block-center text-l text-cente item-v-center"},"\u0421\u0438\u043b\u044b \u0441\u0442\u043e\u0440\u043e\u043d"),r.a.createElement("div",{className:"event-block-right"},r.a.createElement("div",{className:"text-s mb-s"},s.strength))),r.a.createElement("div",{className:"event-block"},r.a.createElement("div",{className:"event-block-left"},r.a.createElement("div",{className:"text-s text-center"},o.losses)),r.a.createElement("div",{className:"event-block-center text-l text-center item-v-center"},"\u041f\u043e\u0442\u0435\u0440\u0438"),r.a.createElement("div",{className:"event-block-right"},r.a.createElement("div",{className:"text-s text-center"},s.losses))),r.a.createElement("div",{className:"event-block"},r.a.createElement("div",{className:"event-block-left"},r.a.createElement("span",{className:"text-m text-center ".concat(l(o.outcome.toString()))},null===(t=Q.find((function(e){return e.value.toString()===o.outcome.toString()})))||void 0===t?void 0:t.title)),r.a.createElement("div",{className:"event-block-center text-l text-center item-v-center"},"\u0418\u0442\u043e\u0433\u0438 \u0431\u0438\u0442\u0432\u044b"),r.a.createElement("div",{className:"event-block-right text-center ".concat(l(s.outcome.toString()))},r.a.createElement("span",{className:"text-m"},null===(a=Q.find((function(e){return e.value.toString()===s.outcome.toString()})))||void 0===a?void 0:a.title)))))}))),Se=(a(221),Object(x.b)((function(e){return{data:e.map.infoblocks[e.map.infoblockId]}}),(function(e){return Object(s.b)({},e)}))((function(e){var t=e.data;return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"title mb-xl text-center"},r.a.createElement("span",{className:"text-xl"},t.title),r.a.createElement("br",null),r.a.createElement("span",{className:"color-red text-m"},t.date)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.data},className:"content"}))}))),je={osada:r.a.createElement(xe,null),battle:r.a.createElement(xe,null),html:r.a.createElement(Se,null)},_e=(a(222),a(223),a(224),Object(x.b)((function(e){return{events:e.map.events,activeEvent:e.map.activeEvent,activeTheme:e.map.activeTheme,infoblocks:e.map.infoblocks,infoblocksIds:e.map.infoblocksIds,infoblockId:e.map.infoblockId}}),(function(e){return Object(s.b)({setActiveEvent:v,setInfoblockId:O,closeInfoblock:k},e)}))((function(e){e.events,e.activeEvent,e.setActiveEvent,e.activeTheme;var t=e.infoblocksIds,a=e.infoblocks,c=e.setInfoblockId,o=e.infoblockId,i=e.closeInfoblock,s=Object(n.useRef)();return Object(n.useEffect)((function(){s.current&&(s.current.scrollLeft+=300)}),[t]),o?r.a.createElement("div",{className:"Infoblock"},r.a.createElement("div",{ref:s,className:"Infoblock-Tabs"},t.map((function(e,n){return r.a.createElement("div",{style:{zIndex:99-n},className:"Infoblock-Tabs-Item ".concat(o===a[e]._id?"active":""),onClick:function(){return c(e)}},r.a.createElement("div",{className:"Infoblock-Tabs-Item-Title"},a[e].title),n>0&&r.a.createElement("div",{className:"Infoblock-Tabs-Item-Close",onClick:function(a){a.stopPropagation();var r=t[n-1]||t[1];e===o&&c(r),i(e)}},"x"))}))),r.a.createElement("div",{className:"Infoblock-Content",id:"infoblock"},je[a[o].type])):null}))),Ce=a(115),Le=a(116),Pe=a.n(Le),Me=(a(245),Object(x.b)((function(e){return{infoblockId:e.map.infoblockId}}),(function(e){return Object(s.b)({initMap:l},e)}))((function(e){var t=e.infoblockId,a=e.initMap,c=Object(Te.g)();return Object(n.useEffect)((function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"));var t=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),Object(n.useEffect)((function(){a(Pe.a.parse(c.search))}),[]),Object(n.useEffect)((function(){t&&Ce.animateScroll.scrollTo(820)}),[t]),r.a.createElement("div",{className:"MapPage"},r.a.createElement("div",{className:"MapPage-Map"},r.a.createElement(Ie,null),r.a.createElement(Ae,null),r.a.createElement(K,null)),r.a.createElement("div",{className:"MapPage-YearsNavigation"},r.a.createElement(we,null)),r.a.createElement("div",{className:"MapPage-Infoblock"},r.a.createElement(_e,null)))}))),Re=a(119);a(246);var Be=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Te.c,null,r.a.createElement(Te.a,{path:"/"},r.a.createElement(Me,null))),r.a.createElement(Re.a,null))},Ue=(a(247),a(248),a(118)),De=a(53),Ye=a(72),Ge=a(5),He={search:"",showSearch:!1,data:[],activeTheme:null,events:[],activeEvent:{},themesLoading:!1,currentYear:(new Date).getFullYear(),mapZoom:3,mapPosition:[51.505,-.09],excludedTypes:[],infoblocks:{},infoblocksIds:[],infoblockId:"",cities:[],dotes:[],borders:[]},Fe=Object(s.c)({map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH/SET_SEARCH":return Object(Ge.a)(Object(Ge.a)({},e),{},{search:t.payload});case"SET_SHOW_SEARCH":return Object(Ge.a)(Object(Ge.a)({},e),{},{showSearch:t.payload});case"SET_THEMES":return Object(Ge.a)(Object(Ge.a)({},e),{},{data:t.payload});case"SET_ACTIVE_THEME":return Object(Ge.a)(Object(Ge.a)({},e),{},{activeTheme:t.payload,currentYear:t.payload.yearStart,excludedTypes:[]});case"SET_THEMES_LOADING":return Object(Ge.a)(Object(Ge.a)({},e),{},{themesLoading:t.payload});case"SET_EVENTS":return Object(Ge.a)(Object(Ge.a)({},e),{},{events:t.payload});case"SET_ACTIVE_EVENT":return Object(Ge.a)(Object(Ge.a)({},e),{},{activeEvent:t.payload});case"SET_CURRENT_YEAR":return Object(Ge.a)(Object(Ge.a)({},e),{},{currentYear:t.payload});case"SET_MAP_POSITION":return Object(Ge.a)(Object(Ge.a)({},e),{},{mapPosition:t.payload});case"SET_MAP_ZOOM":return Object(Ge.a)(Object(Ge.a)({},e),{},{mapZoom:t.payload});case"LEGEND_EXLUDE_TYPE":return Object(Ge.a)(Object(Ge.a)({},e),{},{excludedTypes:e.excludedTypes.includes(t.payload)?e.excludedTypes.filter((function(e){return e!==t.payload})):[].concat(Object(Ye.a)(e.excludedTypes),[t.payload])});case"SET_INFOBLOCKS":return Object(Ge.a)(Object(Ge.a)({},e),{},{infoblocks:Object(Ge.a)(Object(Ge.a)({},e.infoblocks),{},Object(De.a)({},t.payload._id,t.payload)),infoblocksIds:e.infoblocksIds.includes(t.payload._id)?e.infoblocksIds:[].concat(Object(Ye.a)(e.infoblocksIds),[t.payload._id])});case"SET_INFOBLOCK_ID":return Object(Ge.a)(Object(Ge.a)({},e),{},{infoblockId:t.payload});case"CLOSE_INFOBLOCK":return Object(Ge.a)(Object(Ge.a)({},e),{},{infoblocksIds:e.infoblocksIds.filter((function(e){return e!==t.payload}))});case"CLEAR_INFOBLOCK_DATA":return Object(Ge.a)(Object(Ge.a)({},e),{},{infoblocks:He.infoblocks,infoblocksIds:He.infoblocksIds,infoblockId:He.infoblockId});case"SET_CITIES":return Object(Ge.a)(Object(Ge.a)({},e),{},{cities:t.payload});case"SET_DOTES":return Object(Ge.a)(Object(Ge.a)({},e),{},{dotes:t.payload});case"SET_BORDERS":return Object(Ge.a)(Object(Ge.a)({},e),{},{borders:t.payload});default:return e}}}),Ze=a(20),We=a.n(Ze),Je=a(8),Ve=a(32),Qe=a.n(Ve),Xe=function(e){return Qe.a.get("/api/themes",{params:{search:e}})},Ke=function(e){return Qe.a.get("/api/themes/byId",{params:{id:e}})},ze=function(e,t){return Qe.a.get("/api/events",{params:{themeId:e,currentYear:t}})},qe=function(e){return Qe.a.get("/api/cities/".concat(e),{params:{}})},$e=function(){return Qe.a.get("/api/dotes",{params:{}})},et=function(e){return Qe.a.get("/api/borders/".concat(e),{params:{}})},tt=We.a.mark(it),at=We.a.mark(st),nt=We.a.mark(lt),rt=We.a.mark(ut),ct=We.a.mark(mt),ot=We.a.mark(dt);function it(e){var t;return We.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Je.c)(m(!0));case 3:return a.next=5,Object(Je.b)(Xe,e.payload);case 5:return t=a.sent,a.next=8,Object(Je.c)({type:"SET_THEMES",payload:t.data});case 8:return a.next=10,Object(Je.c)(E(!1));case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),console.error("get search data error ",a.t0);case 15:case"end":return a.stop()}}),tt,null,[[0,12]])}function st(e){var t,a,n,r;return We.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.payload,a=t.themeId,n=t.currentYear,c.next=4,Object(Je.b)(ze,a,n);case 4:return r=c.sent,c.next=7,Object(Je.c)({type:"SET_EVENTS",payload:r.data});case 7:return c.next=9,Object(Je.c)(m(!1));case 9:c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),console.error("get events b theme id <".concat(e.payload,"> error ").concat(c.t0));case 14:case"end":return c.stop()}}),at,null,[[0,11]])}function lt(e){var t;return We.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Je.b)(qe,e.payload);case 3:return t=a.sent,a.next=6,Object(Je.c)({type:"SET_CITIES",payload:t.data});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.error("get cities error",a.t0);case 11:case"end":return a.stop()}}),nt,null,[[0,8]])}function ut(){var e;return We.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Je.b)($e);case 3:return e=t.sent,t.next=6,Object(Je.c)({type:"SET_DOTES",payload:e.data});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("get cities error",t.t0);case 11:case"end":return t.stop()}}),rt,null,[[0,8]])}function mt(e){var t;return We.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Je.b)(et,e.payload);case 3:return t=a.sent,a.next=6,Object(Je.c)({type:"SET_BORDERS",payload:t.data});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.error("get cities error",a.t0);case 11:case"end":return a.stop()}}),ct,null,[[0,8]])}function dt(e){var t,a;return We.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Je.c)({type:"CLEAR_INFOBLOCK_DATA"});case 3:if(!(t=e.payload.themeId)){n.next=14;break}return n.next=7,Object(Je.b)(Ke,t);case 7:return a=n.sent,n.next=10,Object(Je.c)(u(a.data.title));case 10:return n.next=12,Object(Je.c)(p(a.data));case 12:return n.next=14,Object(Je.c)(A(a.data));case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.error("init map error");case 19:case"end":return n.stop()}}),ot,null,[[0,16]])}var pt=We.a.mark((function e(){return We.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Je.d)("GET_THEMES",it);case 2:return e.next=4,Object(Je.e)("GET_EVENTS",st);case 4:return e.next=6,Object(Je.d)("GET_CITIES",lt);case 6:return e.next=8,Object(Je.e)("GET_DOTES",ut);case 8:return e.next=10,Object(Je.d)("GET_BORDERS",mt);case 10:return e.next=12,Object(Je.e)("INIT_MAP",dt);case 12:case"end":return e.stop()}}),e)})),ft=We.a.mark(vt);function vt(){return We.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Je.a)([pt()]);case 2:case"end":return e.stop()}}),ft)}var Et=vt,ht=Object(Ue.a)(),bt=Object(s.e)(Fe,Object(s.d)(Object(s.a)(ht)));ht.run(Et);var yt=a(39),gt=a(23),At=Object(gt.a)();o.a.render(r.a.createElement(x.a,{store:bt},r.a.createElement(yt.a,{history:At},r.a.createElement(Be,null))),document.getElementById("root"))},48:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACoSURBVHgBlZLtCYQwDIYT4f47yq1wP4+b4kZwAnsTyE0gTiE4hSM4ggvYmIj4gW1MXyiE8jyUNAEw5N+0pRyp0QITgZOaiAq0wpyB6xemwMX3PWAKHOxBgy/CHXwSLPAmWOFFSIElmffHPjAH8DkoWeCqbh0ilOvVSDTxK58+KqRIp2+1SJfB3UnB1dCk6PLFJHW9Q1KmCTxAx4P87TcPMEVequruKfUMnSOkCQuHD6sAAAAASUVORK5CYII="},49:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACwSURBVHgBlZPRDcIgEIbvrwt0hI7gGp3COIE6ge0ExAkaN/DJJr64ipOAdyQ1YoU7/qSFS77vgBCIOJfrfJaPDIGb7kcALhag4bDrx5LQMHbj8SVFCDRoK0F+bpo77v7kaaethGVilfBdWCT8dtCklaBJf4WSlBVyUkPFbFrG2qXyXpxs98cW8Nw9RIEvdTzt+wE1cNxWDbwSNDgRLPBHsMJRqIElyT1ocHJYeXlkyBt8S3tsW41jAQAAAABJRU5ErkJggg=="}},[[122,1,2]]]);
//# sourceMappingURL=main.522a34e9.chunk.js.map