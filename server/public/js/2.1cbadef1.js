(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"8b24":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"column items-stretch",staticStyle:{height:"100%"}},[a("Leaflet"),a("Forecast")],1)},s=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column",staticStyle:{"flex-grow":"1"}},[a("div",{attrs:{id:"leaflet-container"}})])}],n=(a("e6cf"),a("ded3")),c=a.n(n),l=(a("6cc5"),a("e11e")),h=a.n(l),m=a("c26a"),p=a("2f62");const d={color:"#000",fillColor:"#000",opacity:1,fillOpacity:0,weight:.5},u={radius:3,fillColor:"#ffffff",color:"#000",weight:1.5,opacity:.5,fillOpacity:.2,className:"geojson-point"};var f={data(){return{shapefiles:{}}},computed:c()({},Object(p["d"])({activeShapefile:t=>t.ui.activeShapefile,activeForecast:t=>t.forecasts.activeForecast})),watch:{activeShapefile(t,e){this.removeForecastLayer(),e&&this.map.removeLayer(this.shapefiles[e]),t&&(t in this.shapefiles?this.shapefiles[t].addTo(this.map):this.registerShapefile(t))},activeForecast(){this.removeForecastLayer()}},methods:c()(c()(c()({},Object(p["c"])(["mutateDownloadState","mutateShapefilesList","mutateForecastPointData","mutateForecastDialog"])),Object(p["b"])(["getAreaPoints","getPointForecast"])),{},{initiateMap(){this.map=h.a.map("leaflet-container",{attributionControl:!1,zoomControl:!1,zoomSnap:.25}),this.map.fitBounds(h.a.latLngBounds([[26.63407326,92.67366028],[20.74111176,88.01056671]])),h.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map),h.a.control.zoom({position:"bottomright"}).addTo(this.map)},async registerShapefile(t){try{this.mutateDownloadState(!0);const e=await Object(m["a"])("/shp/"+t);this.shapefiles[t]=h.a.geoJson(e.features,{style:d,onEachFeature:(t,e)=>{t.properties.NAME_2&&e.on({click:({target:t})=>{this.onMapFeatureClick(t.feature)}})}}),this.shapefiles[t].addTo(this.map),this.mutateDownloadState(!1),this.mutateShapefilesList(t)}catch(e){console.log(e),this.mutateDownloadState(!1)}},async onMapFeatureClick(t){try{const e=h.a.geoJson(t).getBounds(),a=await this.getAreaPoints([e.getWest(),e.getEast(),e.getSouth(),e.getNorth()]);this.removeForecastLayer(),this.forecastLayer=h.a.geoJSON(a.features,{pointToLayer:(t,e)=>{const a=h.a.circleMarker(e,u);return a.on({click:({target:t})=>{this.onGridPointClick(t.feature)}}),a}}),this.map.addLayer(this.forecastLayer)}catch(e){console.log(e)}},onGridPointClick({properties:t}){this.getPointForecast({file:this.activeForecast,iLon:t.iLon,iLat:t.iLat})},removeForecastLayer(){"forecastLayer"in this&&(this.map.removeLayer(this.forecastLayer),delete this.forecastLayer,this.mutateForecastPointData(null),this.mutateForecastDialog(!1))}}),mounted(){setTimeout(this.initiateMap,100)}},g=f,y=(a("b07c"),a("2877")),v=Object(y["a"])(g,r,o,!1,null,null,null),w=v.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{"full-height":"","no-backdrop-dismiss":"",seamless:"",position:"right"},model:{value:t.forecastDialog,callback:function(e){t.forecastDialog=e},expression:"forecastDialog"}},[t.data?[a("q-card",{staticClass:"overflow-hidden",staticStyle:{width:"640px"}},[a("q-card-section",{staticClass:"row items-center q-pb-none"},[a("div",{staticClass:"text-h6"},[t._v(t._s(t.data.filename))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),a("q-card-section",[a("div",{staticClass:"text-body1"},[t._v("Longitude: "+t._s(t.data.lon)+", Latitude: "+t._s(t.data.lat))])]),t.prec?a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("prec: Rainfall (mm)")]),a("PrecipitationChart",{attrs:{series:t.prec}})],1):t._e(),t.t2m?a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("t2m: Temperature (°C)")]),a("TemperatureChart",{attrs:{series:t.t2m}})],1):t._e(),t.rh2m?a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("rh2m: Relative Humidity (%)")]),a("HumidityChart",{attrs:{series:t.rh2m}})],1):t._e()],1)]:t._e()],2)},D=[],_=(a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("apexchart",{attrs:{width:"100%",height:"180",type:"bar",options:t.options,series:t.series}})}),x=[],C={data(){return{options:{chart:{id:"chart-rh2m",toolbar:{show:!1}},colors:["#2E93fA"],xaxis:{type:"datetime"},tooltip:{x:{format:"yyyy-MM-dd HH:mm"}}}}},props:{series:{type:Array,required:!0}}},L=C,F=Object(y["a"])(L,_,x,!1,null,null,null),S=F.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("apexchart",{attrs:{width:"100%",height:"180",type:"line",options:t.options,series:t.series}})},M=[],q={data(){return{options:{chart:{id:"chart-t2m",toolbar:{show:!1}},colors:["#F44336"],xaxis:{type:"datetime"},tooltip:{x:{format:"yyyy-MM-dd HH:mm"}}}}},props:{series:{type:Array,required:!0}}},P=q,O=Object(y["a"])(P,T,M,!1,null,null,null),j=O.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("apexchart",{attrs:{width:"100%",height:"180",type:"line",options:t.options,series:t.series}})},E=[],$={data(){return{options:{chart:{id:"chart-rh2m",toolbar:{show:!1}},colors:["#66DA26"],xaxis:{type:"datetime"},tooltip:{x:{format:"yyyy-MM-dd HH:mm"}}}}},props:{series:{type:Array,required:!0}}},H=$,A=Object(y["a"])(H,k,E,!1,null,null,null),Q=A.exports,J={name:"ForecastDialog",components:{TemperatureChart:j,PrecipitationChart:S,HumidityChart:Q},computed:{forecastDialog:{get(){return this.$store.state.ui.forecastDialog},set(t){this.$store.commit("mutateForecastDialog",t)}},data(){return this.$store.getters.forecastPointData},prec(){return this.data?[{name:"prec",data:[[new Date(this.data.time[0]).getTime()+18e6,null],...this.data.time.map(((t,e)=>[new Date(t).getTime()+216e5,Math.round(this.data.prec[e])])),[new Date(this.data.time[this.data.time.length-1]).getTime()+252e5,null]]}]:null},t2m(){return this.data?[{name:"t2m",data:[[new Date(this.data.time[0]).getTime()+18e6,null],...this.data.time.map(((t,e)=>[new Date(t).getTime()+216e5,Math.round(10*this.data.t2m[e])/10])),[new Date(this.data.time[this.data.time.length-1]).getTime()+252e5,null]]}]:null},rh2m(){return this.data?[{name:"rh2m",data:[[new Date(this.data.time[0]).getTime()+18e6,null],...this.data.time.map(((t,e)=>[new Date(t).getTime()+216e5,Math.round(100*this.data.rh2m[e])/100])),[new Date(this.data.time[this.data.time.length-1]).getTime()+252e5,null]]}]:null}},watch:{forecastDialog(t,e){e&&!t&&this.$store.commit("mutateForecastPointData",null)}}},N=J,z=a("24e8"),B=a("f09f"),G=a("a370"),R=a("2c91"),W=a("9c40"),I=a("7f67"),K=a("eebe"),U=a.n(K),V=Object(y["a"])(N,b,D,!1,null,null,null),X=V.exports;U()(V,"components",{QDialog:z["a"],QCard:B["a"],QCardSection:G["a"],QSpace:R["a"],QBtn:W["a"]}),U()(V,"directives",{ClosePopup:I["a"]});var Y={components:{Leaflet:w,Forecast:X}},Z=Y,tt=a("9989"),et=Object(y["a"])(Z,i,s,!1,null,null,null);e["default"]=et.exports;U()(et,"components",{QPage:tt["a"]})},b07c:function(t,e,a){"use strict";a("c03d")},c03d:function(t,e,a){}}]);