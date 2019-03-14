!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){!function(e,t,n,r){"use strict";var a="jChart",s=a.toLowerCase(),o="jchart__",i={elements:{container:null,body:null,group:null,figure:null,svg:null,segments:[],markers:null},data:[],values:{},placeholder:{data:{value:0,color:{normal:"#00a3f2"},draw:!0,push:!0,order:null,title:"untitled",strokeWidth:3}},appearance:{type:"donut",baseColor:"#ddd",segmentColor:{normal:"#00a3f2"},baseOffset:0,baseStrokeWidth:1,strokeWidth:3,animated:!0,title:{chartTitle:"",showValue:!0,showPercentage:!0,showSummary:!1,summaryTitle:"",summarySegment:null},radius:100/(2*Math.PI),innerCutout:.75,centerX:21,centerY:21,subType:"circle",isGauge:!1,gap:1,showMarkers:!0,markerColor:"#f45a42",markerCount:10,markerWidth:.5,rx:0,ry:0},callbacks:{onInit:function(){},onRefresh:function(){},onSegmentMouseover:function(){},onSegmentMouseout:function(){}}};function l(t,n){this.element=t,this.$element=e(t),this.settings=e.extend(!0,{},i,n),this._defaults=i,this._name=a,this._nameLower=s,this._objPrefix=o,this._methods=c,this._methods.init(this)}var c={init:function(t){t._methods.initElement(t),t.settings.callbacks.onInit&&e.isFunction(t.settings.callbacks.onInit)&&t.settings.callbacks.onInit.call(t)},initElement:function(e){e._methods.calculateDataValues(e),e._methods.initHtml(e)},calculateDataValues:function(t){var n={maxval:0},r=t.settings.data;for(var a in r)r.hasOwnProperty(a)&&(r[a]=e.extend(!0,{},t.settings.placeholder.data,r[a]),n.maxval+=r[a].value);for(var s in r)r.hasOwnProperty(s)&&(0===n.maxval?(r[s].percentage_raw=0,r[s].percentage=0):(r[s].percentage_raw=r[s].value/n.maxval,r[s].percentage=r[s].value/n.maxval*100),null===r[s].order&&(r[s].order=r.length));r.sort(function(e,t){return null===e.order?1:null===t.order?-1:e.order<t.order?-1:e.order>t.order?1:0}),t.settings.values=n},initHtml:function(e){e._methods.drawContainer(e),e._methods.drawBody(e)},drawContainer:function(t){void 0!==t.settings.elements.container&&null!==t.settings.elements.container&&t.settings.elements.container.remove(),void 0!==t.settings.elements.figure&&null!==t.settings.elements.figure&&t.settings.elements.figure.remove();var n=e("<div>",{class:s}),r=e("<figure>",{class:t._objPrefix+"figure"});t.settings.elements.container=n,t.settings.elements.figure=r,t.$element.append(n),n.append(r)},drawBody:function(t){void 0!==t.settings.elements.body&&null!==t.settings.elements.body&&t.settings.elements.body.remove(),void 0!==t.settings.elements.figureCaption&&null!==t.settings.elements.figureCaption&&t.settings.elements.figureCaption.remove();var n=e("<div>",{class:t._objPrefix+"body"}),r=e("<figcaption>");t.settings.elements.body=n,t.settings.elements.figureCaption=r,t.settings.elements.figure.append(n),t.settings.elements.figure.append(r),t._methods.drawBodyBase(t),t._methods.addEventListeners(t)},drawBodyBase:function(t){void 0!==t.settings.elements.svg&&null!==t.settings.elements.svg&&t.settings.elements.svg.remove(),void 0!==t.settings.elements.group&&null!==t.settings.elements.group&&t.settings.elements.group.remove();var n=t.settings.data,r=t.settings.values,a=null,s=null,o=null;switch(t.settings.appearance.type){case"donut":switch(s=(a=t._methods.drawBodyBaseDonut(t,{type:t.settings.appearance.subType})).svg,t._methods.drawBodySegmentDonut(t,n,r,{type:t.settings.appearance.subType}),(o=t.settings.elements.body[0].appendChild(s)).appendChild(a.ring),t.settings.appearance.type){case"circle":break;case"path":o.appendChild(a.ring)}if(t.settings.appearance.animated&&t._methods.animationLoop(t,function(e,t){e._methods.drawBodySegmentDonut(e,n,r,{type:e.settings.appearance.subType,updateOnly:!0,modifier:t})}),t.settings.appearance.title.showSummary){var i=t._methods.drawSvgText(t,{class:"".concat(t._objPrefix,"summary"),x:t.settings.appearance.centerX,y:t.settings.appearance.isGauge?.9*t.settings.appearance.centerY:t.settings.appearance.centerY});if(t.settings.elements.summary=i,o.appendChild(i),t.settings.appearance.title.summaryTitle)t.settings.elements.summary.innerHTML=t.settings.appearance.title.summaryTitle;else if(null!==t.settings.appearance.title.summarySegment){var l=t.settings.data[t.settings.appearance.title.summarySegment];if(void 0!==l){var c=Math.round(10*l.percentage)/10;t.settings.elements.summary.innerHTML="".concat(c,"%")}}else{var u=t._methods.getDrawableSegments(t,n,!0);if(u.length){var d=Math.round(10*u[0].percentage)/10;t.settings.elements.summary.innerHTML="".concat(d,"%")}}}break;case"pie":s=(a=t._methods.drawBodyBasePie(t)).svg,t._methods.drawBodySegmentPie(t,n,r),o=t.settings.elements.body[0].appendChild(s),t.settings.appearance.animated&&t._methods.animationLoop(t,function(e,t){e._methods.drawBodySegmentPie(e,n,r,{updateOnly:!0,modifier:t})});break;case"bar":if(s=(a=t._methods.drawBodyBaseBar(t)).svg,t._methods.drawBodySegmentBar(t,n,r),(o=t.settings.elements.body[0].appendChild(s)).appendChild(a.background),null!==a.markers.group){var p=a.markers.group;for(var m in a.markers.markers)a.markers.markers.hasOwnProperty(m)&&p.appendChild(a.markers.markers[m]);o.appendChild(p)}if(t.settings.appearance.animated&&t._methods.animationLoop(t,function(e,t){e._methods.drawBodySegmentBar(e,n,r,{updateOnly:!0,modifier:t})}),t.settings.appearance.title.showSummary){t.settings.elements.summary=[];var g=0;for(var f in n)if(n.hasOwnProperty(f)){var h=n[f],v=t._methods.drawSvgText(t,{class:"".concat(t._objPrefix,"summary"),x:"".concat(h.percentage/2+g,"%"),y:"50%"});if(g+=h.percentage,t.settings.elements.summary.push(v),o.appendChild(v),null!==t.settings.appearance.title.summarySegment){var y=t.settings.data[t.settings.appearance.title.summarySegment];if(void 0!==y){var w=Math.round(10*y.percentage)/10;v.innerHTML="".concat(w,"%")}}else{var b=t._methods.getDrawableSegments(t,n,!0),_=Math.round(10*b[0].percentage)/10;v.innerHTML="".concat(_,"%")}}}}var x=o.appendChild(t._methods.drawGroup(t));for(var S in n)if(n.hasOwnProperty(S)){var k=n[S].element;if(void 0!==k&&void 0!==k.nodeType){var P=x.appendChild(k),M=e(P);n[S].element=M,t.settings.elements.segments.push(M)}}t.settings.elements.svg=o,t.settings.elements.group=e(x)},addEventListeners:function(t){var n=t.settings.data;for(var r in n)if(n.hasOwnProperty(r)){var a=n[r].element;void 0!==a&&(a.on("mouseover",function(){var n=e(this),r=n.attr("d-id");switch(t.settings.appearance.type){case"donut":switch(t.settings.appearance.subType){case"circle":n.css("stroke",t.settings.data[r].color);break;case"path":n.css("fill",t.settings.data[r].color)}break;case"pie":case"bar":n.css("fill",t.settings.data[r].color)}t.settings.callbacks.onSegmentMouseover&&e.isFunction(t.settings.callbacks.onSegmentMouseover)&&t.settings.callbacks.onSegmentMouseover.call(t,r,t.settings.data[r])}),a.on("mouseout",function(){var n=e(this),r=n.attr("d-id");switch(t.settings.appearance.type){case"donut":switch(t.settings.appearance.subType){case"circle":n.css("stroke","");break;case"path":n.css("fill","")}break;case"pie":case"bar":n.css("fill","")}t.settings.callbacks.onSegmentMouseout&&e.isFunction(t.settings.callbacks.onSegmentMouseout)&&t.settings.callbacks.onSegmentMouseout.call(t,t.settings.data[r],t.settings.data[r])}))}},drawBodyBaseDonut:function(t,r){var a={type:"circle",isGauge:t.settings.appearance.isGauge,centerX:t.settings.appearance.centerX,centerY:t.settings.appearance.isGauge?t.settings.appearance.centerY/2:t.settings.appearance.centerY},s=e.extend(!0,{},a,r),o={},i=n.createElementNS("http://www.w3.org/2000/svg","svg");switch(i.setAttribute("class",t._objPrefix+"donut"),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("viewBox","0 0 ".concat(2*s.centerX," ").concat(2*s.centerY)),i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),s.type){case"circle":o={svg:i,ring:t._methods.drawSvgCircle(t,{class:t._objPrefix+"donut__ring"+t._objPrefix+"donut__ring-circle",fill:t.settings.appearance.baseColor,stroke:t.settings.appearance.baseColor,"stroke-width":t.settings.appearance.baseStrokeWidth}),hole:null};break;case"path":var l=t.settings.appearance.radius+t.settings.appearance.baseStrokeWidth,c=t.settings.appearance.radius*t.settings.appearance.innerCutout-t.settings.appearance.baseStrokeWidth,u=s.isGauge?Math.PI:2*Math.PI,d=-u,p=d+.999999*u,m=["M",t.settings.appearance.centerX+Math.cos(d)*l,t.settings.appearance.centerY+Math.sin(d)*l,"A",l,l,0,1,1,t.settings.appearance.centerX+Math.cos(p)*l,t.settings.appearance.centerY+Math.sin(p)*l,"L",t.settings.appearance.centerX+Math.cos(p)*c,t.settings.appearance.centerY+Math.sin(p)*c,"A",c,c,0,1,0,t.settings.appearance.centerX+Math.cos(d)*c,t.settings.appearance.centerY+Math.sin(d)*c,"Z"];o={svg:i,ring:t._methods.drawSvgPath(t,{class:"".concat(t._objPrefix,"donut__ring ").concat(t._objPrefix,"donut__ring-path"),fill:t.settings.appearance.baseColor,d:m.join(" ")})}}return o},drawBodySegmentDonut:function(t,n,r,a){var s={type:"circle",isGauge:t.settings.appearance.isGauge,updateOnly:!1,modifier:1,drawableSegments:t._methods.getDrawableSegments(t,n).length},o=e.extend(!0,{},s,a),i=[];n=t.settings.data;var l=o.drawableSegments>1||o.isGauge?t.settings.appearance.gap:1e-5;switch(o.type){case"circle":var c=0;for(var u in n)if(n.hasOwnProperty(u)){var d=100-n[u].percentage*o.modifier;if(!0===n[u].draw){var p={},m=!1,g=null,f={segmentTitle:n[u].title,segmentValue:t._methods.numberFormat(n[u].value,0,","," "),segmentPercentage:Math.round(10*n[u].percentage)/10},h=f.segmentTitle;t.settings.appearance.title.showValue&&t.settings.appearance.title.showPercentage?h+=": ".concat(f.segmentValue," (").concat(f.segmentPercentage,"%)"):t.settings.appearance.title.showValue?h+=": ".concat(f.segmentValue):t.settings.appearance.title.showPercentage&&(h+=": ".concat(f.segmentPercentage,"%")),o.updateOnly?(m=!0,g=n[u].element[0],p={fill:"transparent",stroke:n[u].color.normal,"stroke-width":n[u].strokeWidth,"stroke-dasharray":n[u].percentage*o.modifier-l+" "+(d+l),"stroke-dashoffset":25+c}):p={"d-id":u,class:"".concat(t._objPrefix,"donut__segment ").concat(t._objPrefix,"donut__segment-circle"),title:h,fill:"transparent",stroke:n[u].color.normal,"stroke-width":n[u].strokeWidth,"stroke-dasharray":n[u].percentage*o.modifier-l+" "+(d+l),"stroke-dashoffset":25+c};var v=t._methods.drawSvgCircle(t,p,m,g);o.updateOnly||(n[u].element=v,i.push(v))}!0===n[u].push&&(c+=d)}break;case"path":var y=t.settings.appearance.radius,w=y*t.settings.appearance.innerCutout,b=t.settings.appearance.centerX,_=t.settings.appearance.centerY,x=o.isGauge?Math.PI:Math.PI/2,S=o.isGauge?Math.PI:2*Math.PI,k=l/100,P=k,M=-x;for(var L in o.isGauge&&(M+=k*x,P+=k/o.drawableSegments),n)if(n.hasOwnProperty(L)){var E=k*S,A=o.modifier*((n[L].percentage_raw-P)*S),C=M+A,O=(C-M)%S>Math.PI?1:0,j=b+Math.cos(M)*y,B=_+Math.sin(M)*y,T=b+Math.cos(C)*y,I=_+Math.sin(C)*y,N=b+Math.cos(C)*w,W=_+Math.sin(C)*w,D=b+Math.cos(M)*w,q=_+Math.sin(M)*w;if(!0===n[L].draw){var R=["M",j,B,"A",y,y,0,O,1,T,I,"L",N,W,"A",w,w,0,O,0,D,q,"Z"],X={},U=!1,F=null,G={segmentTitle:n[L].title,segmentValue:t._methods.numberFormat(n[L].value,0,","," "),segmentPercentage:Math.round(10*n[L].percentage)/10},V=G.segmentTitle;t.settings.appearance.title.showValue&&t.settings.appearance.title.showPercentage?V+=": ".concat(G.segmentValue," (").concat(G.segmentPercentage,"%)"):t.settings.appearance.title.showValue?V+=": ".concat(G.segmentValue):t.settings.appearance.title.showPercentage&&(V+=": ".concat(G.segmentPercentage,"%")),o.updateOnly?(U=!0,F=n[L].element[0],X={fill:n[L].color.normal,stroke:"transparent","stroke-width":n[L].strokeWidth,d:R.join(" ")}):X={"d-id":L,class:"".concat(t._objPrefix,"donut__segment ").concat(t._objPrefix,"donut__segment-path"),title:V,fill:n[L].color.normal,stroke:"transparent","stroke-width":n[L].strokeWidth,d:R.join(" ")};var Y=t._methods.drawSvgPath(t,X,U,F);o.updateOnly||(n[L].element=Y,i.push(Y))}!0===n[L].push&&(M+=A+E)}}return i},drawBodyBasePie:function(e){var t=n.createElementNS("http://www.w3.org/2000/svg","svg");return t.setAttribute("class","".concat(e._objPrefix,"pie")),t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.setAttribute("viewBox","-1 -1 2 2"),t.setAttribute("style","transform: rotate(-0.25turn)"),t.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),{svg:t}},drawBodySegmentPie:function(t,n,r,a){var s={updateOnly:!1,modifier:1,drawableSegments:t._methods.getDrawableSegments(t,n).length},o=e.extend(!0,{},s,a),i=[],l=1e-5,c=0;t.settings.appearance.gap&&o.drawableSegments>1&&(c=.1*(l=t.settings.appearance.gap));var u=0,d=l/100;for(var p in n)if(n.hasOwnProperty(p)){var m=o.modifier*n[p].percentage_raw;if(!0===n[p].draw){var g=t._methods.getCoordinatesForPercent(1,0+u+d),f=t._methods.getCoordinatesForPercent(1,0+u+m-d),h=o.modifier*n[p].percentage_raw>.5?1:0,v=t._methods.getCoordinatesForPercent(c+d,0+u+d),y=t._methods.getCoordinatesForPercent(c+d,0+u+m-d),w={x:(v.x+y.x)/2,y:(v.y+y.y)/2},b=["M ".concat(g.x," ").concat(g.y),"A 1 1 0 ".concat(h," 1 ").concat(f.x," ").concat(f.y),"L ".concat(w.x," ").concat(w.y)].join(" "),_={},x=!1,S=null;o.updateOnly?(x=!0,S=n[p].element[0],_={fill:n[p].color.normal,d:b}):_={"d-id":p,class:"".concat(t._objPrefix,"pie__segment"),fill:n[p].color.normal,d:b};var k=t._methods.drawSvgPath(t,_,x,S);o.updateOnly||(n[p].element=k,i.push(k)),u+=m}else!0===n[p].push&&(u+=m+d)}return i},drawBodyBaseBar:function(e){var t=n.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("class","".concat(e._objPrefix,"bar")),t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.setAttribute("viewBox","0 0 100 10"),t.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink");var r=e._methods.drawSvgRect(e,{fill:e.settings.appearance.baseColor},!1,null),a={group:null,markers:null};if(e.settings.appearance.showMarkers){a.markers=[],a.group=e._methods.drawGroup(e,{class:"".concat(e._objPrefix,"markers")});for(var s=e.settings.appearance.markerCount,o=0;o<=s;o++){var i=e.settings.appearance.markerWidth,l=o*(100/s);l-=o===s?i:0,l-=0===o||o===s?0:i/2;var c=e._methods.drawSvgRect(e,{width:i,height:"125%",x:l,fill:e.settings.appearance.markerColor});a.markers.push(c)}}return e.settings.elements.markers=a,{svg:t,background:r,markers:a}},drawBodySegmentBar:function(t,n,r,a){var s=e.extend(!0,{},{updateOnly:!1,modifier:1},a),o=[],i=0;for(var l in n)if(n.hasOwnProperty(l))if(!0===n[l].draw){var c=0+i,u=n[l].percentage*s.modifier;i+=n[l].percentage*s.modifier;var d={},p=!1,m=null;s.updateOnly?(p=!0,m=n[l].element[0],d={width:u,x:"".concat(c,"%"),fill:n[l].color.normal}):d={"d-id":l,class:"".concat(t._objPrefix,"bar__segment"),width:u,x:"".concat(c,"%"),fill:n[l].color.normal};var g=t._methods.drawSvgRect(t,d,p,m);s.updateOnly||(n[l].element=g,o.push(g))}else!0===n[l].push&&(i+=n[l].percentage_raw);return o},drawGroup:function(t,r){var a=e.extend(!0,{},{class:""},r),s=n.createElementNS("http://www.w3.org/2000/svg","g");for(var o in a)a.hasOwnProperty(o)&&""!==a[o]&&0!==a[o]&&s.setAttributeNS(null,o,a[o]);return s},drawSvgCircle:function(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o={class:"",cx:t.settings.appearance.centerX,cy:t.settings.appearance.centerY,r:t.settings.appearance.radius,fill:"#fff",stroke:"","stroke-width":t.settings.appearance.strokeWidth,"stroke-dasharray":"","stroke-dashoffset":"25"},i=e.extend(!0,{},o,r),l=s;for(var c in a||(l=n.createElementNS("http://www.w3.org/2000/svg","circle")),i)i.hasOwnProperty(c)&&""!==i[c]&&0!==i[c]&&l.setAttributeNS(null,c,i[c]);return l},drawSvgRect:function(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o={width:"100%",height:"100%",x:0,y:0,rx:t.settings.appearance.rx,ry:t.settings.appearance.ry,class:"",fill:"#fff",stroke:"","stroke-width":0},i=e.extend(!0,{},o,r),l=s;for(var c in a||(l=n.createElementNS("http://www.w3.org/2000/svg","rect")),i)i.hasOwnProperty(c)&&""!==i[c]&&0!==i[c]&&l.setAttributeNS(null,c,i[c]);return l},drawSvgPath:function(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=e.extend(!0,{},{class:"",fill:"#fff",d:"",stroke:"","stroke-width":0,"stroke-dasharray":"","stroke-dashoffset":0},r),i=s;for(var l in a||(i=n.createElementNS("http://www.w3.org/2000/svg","path")),o)o.hasOwnProperty(l)&&""!==o[l]&&0!==o[l]&&i.setAttributeNS(null,l,o[l]);return i},drawSvgText:function(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=e.extend(!0,{},{class:"",x:0,y:0,"alignment-baseline":"middle","text-anchor":"middle"},r),i=s;for(var l in a||(i=n.createElementNS("http://www.w3.org/2000/svg","text")),o)o.hasOwnProperty(l)&&""!==o[l]&&0!==o[l]&&i.setAttributeNS(null,l,o[l]);return i},getCoordinatesForPercent:function(e,t){return{x:e*Math.cos(2*Math.PI*t),y:e*Math.sin(2*Math.PI*t)}},getDrawableSegments:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t.filter(function(e){return!0===e.draw&&e.percentage_raw>0});return n&&(r.sort(function(e,t){return e.value<t.value}),r.sort()),r},lightenRgbColors:function(e,t){for(var n,r=3;r--;e[r]=n<0?0:n>255?255:0|n)n=e[r]+t;return e},animationLoop:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a={start:performance.now(),total:n};requestAnimationFrame(function n(s){a.elapsed=s-a.start;var o=a.elapsed/a.total;r&&(o=function(e){return Math.pow(--e,3)+1}(o)),o<0&&(o=0),o>1&&(o=1),t.apply(e,[e,o]),o<1&&requestAnimationFrame(n)})},GetInstance:function(e){e._methods.Log(e,e)},Destroy:function(t){t.settings.elements.container.remove(),e.removeData(t.$element,"plugin_"+t._name)},Update:function(e){e._methods.calculateDataValues(e);var t=e.settings.data,n=e.settings.values;switch(e.settings.appearance.type){case"donut":e.settings.appearance.animated&&e._methods.animationLoop(e,function(e,r){e._methods.drawBodySegmentDonut(e,t,n,{type:e.settings.appearance.subType,updateOnly:!0,modifier:r})});break;case"pie":e.settings.appearance.animated&&e._methods.animationLoop(e,function(e,r){e._methods.drawBodySegmentPie(e,t,n,{updateOnly:!0,modifier:r})})}},Refresh:function(t){t._methods.initElement(t),t.settings.callbacks.onRefresh&&e.isFunction(t.settings.callbacks.onRefresh)&&t.settings.callbacks.onRefresh.call(t)},Log:function(e,t){if(console.log("*** "+e._name+" ***"),t instanceof Array){var n=!0,r=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var i=s.value;console.log(i)}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}}else console.log(t)},objSortByPositionInDOM:function(e,t,n){var r=e;return t&&n?r.sort(function(e,r){return e[t][n][0]===r[t][n][0]?0:e[t][n][0].compareDocumentPosition?2&e[t][n][0].compareDocumentPosition(r[t][n][0])?1:-1:e[t][n][0].sourceIndex-r[t][n][0].sourceIndex}):t?r.sort(function(e,n){return e[t][0]===n[t][0]?0:e[t][0].compareDocumentPosition?2&e[t][0].compareDocumentPosition(n[t][0])?1:-1:e[t][0].sourceIndex-n[t][0].sourceIndex}):r.sort(function(e,t){return e[0]===t[0]?0:e[0].compareDocumentPosition?2&e[0].compareDocumentPosition(t[0])?1:-1:e[0].sourceIndex-t[0].sourceIndex})},numberFormat:function(e,t,n,r){e=(e+"").replace(/[^0-9+\-Ee.]/g,"");var a=isFinite(+e)?+e:0,s=isFinite(+t)?Math.abs(t):0,o=void 0===r?",":r,i=void 0===n?".":n,l="";return(l=(s?function(e,t){var n=Math.pow(10,t);return""+Math.round(e*n)/n}(a,s):""+Math.round(a)).split("."))[0].length>3&&(l[0]=l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,o)),(l[1]||"").length<s&&(l[1]=l[1]||"",l[1]+=new Array(s-l[1].length+1).join("0")),l.join(i)}};e.fn[a]=function(t){var n=[];return this.each(function(){if(!e.data(this,"plugin_"+a)){var r=new l(this,t);e.data(this,"plugin_"+a,r),n.push(r)}}),1===n.length?n[0]:null}}(jQuery,window,document)},function(e,t){for(var n=document.querySelectorAll(".pie_chart_item"),r=null,a=0;a<n.length;a++){var s=n[a].attributes["data-pracent"].value,o=n[a].attributes["data-boolean"].value;r=n[a],i(s,o)}function i(e,t){(e=Math.round(e))>100?e=100:e<0&&(e=0);var n=Math.round(e/100*360),a=r.querySelector(".pie"),s=r.querySelector(".right-side"),o=r.querySelector(".left-side"),i=r.querySelector(".shadow"),l=r.querySelector(".num");e>50?(a.style.clip="rect(auto, auto, auto, auto)",s.style.transform="rotate(180deg)"):(a.style.clip="rect(0, 1em, 1em, 0.5em)",s.style.transform="rotate(0deg)"),t?(s.style.borderWidth="0.053em",o.style.borderWidth="0.053em",i.style.borderWidth="0.053em"):(s.style.borderWidth="0.5em",o.style.borderWidth="0.5em",i.style.borderWidth="0.5em"),l.innerHTML=e,o.style.transform="rotate("+n+"deg)"}},function(e,t){$("#elem-jchart").jChart({data:[{value:100,color:{normal:"#747474"}},{value:200,color:{normal:"#e75735"}},{value:150,color:{normal:"#e5e5e5"}},{value:100,color:{normal:"#4eb7a8"}}],appearance:{type:"donut",baseColor:"transparent",gap:0,baseStrokeWidth:3}})},function(e,t){var n=document.querySelectorAll(".range-slide__circle");if(n)for(var r=function(e){var t=n[e],r=t.previousElementSibling.innerText,a=t.parentNode.querySelector(".range-slide__row").clientWidth-n[e].clientWidth;t.style.left=a/100*r+"px",t.previousElementSibling.style.left=a/100*r+"px",t.addEventListener("touchstart",function(){function e(e){u(e.touches[0].pageX)}document.body.addEventListener("touchmove",e),document.body.addEventListener("touchend",function(){document.body.removeEventListener("touchmove",e)})}),t.addEventListener("mousedown",function(){function e(e){u(e.pageX)}document.body.addEventListener("mousemove",e),document.body.addEventListener("mouseup",function(){document.body.removeEventListener("mousemove",e)})});var s=t.clientWidth,o=t.parentElement,i=o.querySelector(".range-slide__row").clientWidth,l=o.querySelector(".range-slide__num"),c=o.offsetLeft;function u(e){var n=e-c;n>0&&e<c+i&&(t.style.left=n-s/2+"px",l.style.left=n-s/2+"px",l.innerText=Math.round(100*n/i))}o.addEventListener("click",function(e){document.innerWidth<1025?u(e.touches[0].pageX):u(e.pageX)})},a=0;a<n.length;a++)r(a)},function(e,t){var n=document.querySelectorAll(".range-slide2__btn");if(n)for(var r=function(e){var t=n[e],r=t.clientWidth,a=t.parentNode,s=t.parentNode.parentNode,o=s.clientWidth,i=s.offsetLeft,l=o/4;function c(e){if(e-i>0&&e<i+o){var t=e-i;t>3*l+l/2&&(a.style.width="100%"),t>2*l+l/2&&t<3*l+l/2&&(a.style.width="75%"),t>l+l/2&&t<2*l+l/2&&(a.style.width="50%"),t>l/2&&t<l+l/2&&(a.style.width="25%"),t<l/2&&(a.style.width=r/2+"px")}}s.addEventListener("click",function(e){document.innerWidth<1025?c(e.touches[0].pageX):c(e.pageX)}),a.style.width=a.attributes["data-level"].value+"%",t.addEventListener("touchstart",function(){function e(e){c(e.touches[0].pageX)}document.body.addEventListener("touchmove",e),document.body.addEventListener("touchend",function(){document.body.removeEventListener("touchmove",e)})}),t.addEventListener("mousedown",function(e){function t(e){c(e.pageX)}document.addEventListener("mousemove",t),document.addEventListener("mouseup",function(){document.removeEventListener("mousemove",t)})})},a=0;a<n.length;a++)r(a)},function(e,t){for(var n=document.querySelectorAll(".st-btn"),r=0;r<n.length;r++)n[r].addEventListener("mousemove",function(e){var t=this.querySelector("span");t.style.left=e.offsetX+"px",t.style.top=e.offsetY+"px"})},function(e,t){var n=document.querySelectorAll(".stages");if(n)for(var r=0;r<n.length;r++)n[r].addEventListener("click",function(e){if(e.target.className.match("stages__item")){var t=e.target.innerHTML,n=this.querySelectorAll(".stages__item");this.querySelector(".stages__level").style.width=(t-1)*(100/(n.length-1))+"%";for(var r=0;r<n.length;r++)r<t&&1!=t?n[r].classList.add("stages__item-active"):n[r].classList.remove("stages__item-active")}})},function(e,t){var n=/^[a-zA-Zа-яёА-ЯЁ ]+(([',. -][a-zA-Zа-яёА-ЯЁ ])?[a-zA-Zа-яёА-ЯЁ]*)*$/g,r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a=document.querySelectorAll("input.inp_item"),s=document.querySelectorAll("form.form_elements");if(a)for(var o=0;o<a.length;o++)a[o].addEventListener("focus",function(){this.addEventListener("input",function(){this.value.trim().length>1?("text"===this.type&&l(this,n),"email"===this.type&&l(this,r)):(this.nextElementSibling.nextElementSibling.classList.remove("msg-active"),this.nextElementSibling.classList.remove("msg-active"))})});if(s)for(var i=0;i<s.length;i++)s[i].addEventListener("submit",function(e){for(var t=this.querySelectorAll("input.inp_item"),n=0;n<t.length;n++)(t[n].value.trim().length<2||t[n].nextElementSibling.classList.contains("msg-active"))&&(e.preventDefault(),t[n].nextElementSibling.classList.add("msg-active"))});function l(e,t){return e.value.trim().match(t)?(e.nextElementSibling.nextElementSibling.classList.add("msg-active"),e.nextElementSibling.classList.remove("msg-active"),!0):(e.nextElementSibling.nextElementSibling.classList.remove("msg-active"),e.nextElementSibling.classList.add("msg-active"),!1)}},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r,a,s={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,u=[],d=n(11);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=s[r.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](r.parts[o]);for(;o<r.parts.length;o++)a.parts.push(y(r.parts[o],t))}else{var i=[];for(o=0;o<r.parts.length;o++)i.push(y(r.parts[o],t));s[r.id]={id:r.id,refs:1,parts:i}}}}function m(e,t){for(var n=[],r={},a=0;a<e.length;a++){var s=e[a],o=t.base?s[0]+t.base:s[0],i={css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(i):n.push(r[o]={id:o,parts:[i]})}return n}function g(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=i(e.insertAt.before,n);n.insertBefore(t,a)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),g(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,a,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var o=c++;n=l||(l=h(t)),r=_.bind(null,n,o,!1),a=_.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),g(e,t),t}(t),r=function(e,t,n){var r=n.css,a=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||s)&&(r=d(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var o=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}.bind(null,n,t),a=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){f(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return p(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var o=n[a];(i=s[o.id]).refs--,r.push(i)}e&&p(m(e,t),t);for(a=0;a<r.length;a++){var i;if(0===(i=r[a]).refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete s[i.id]}}}};var w,b=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function _(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var s=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(a=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8)}]);