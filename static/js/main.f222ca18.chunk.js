(this["webpackJsonpout-and-about"]=this["webpackJsonpout-and-about"]||[]).push([[0],{11:function(e,t,a){e.exports=a(26)},18:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),i=a.n(o),l=a(2),s=(a(18),a(6)),c=a(7),m=a(10),u=a(9),p=a(8);var h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).requestOSMData=function(e){var t=e.coords.latitude,a=e.coords.longitude;n.setState({userLat:t,userLon:a}),p.NominatimJS.search({q:"".concat(n.props.targetEntity," near ").concat(t,", ").concat(a)}).then((function(e){n.setState({nearby:e})})).catch((function(e){console.log(e),n.setState({errored:!0})}))},n.getGMapsLink=function(e){return"https://www.google.com/maps/search/?api=1&query=".concat(e.lat,",").concat(e.lon)},n.getItemNameDisplay=function(e){return e.display_name.split(", ").slice(n.props.sliceItemNameFrom,n.props.sliceItemNameTo).join(", ")},n.getItemDistanceDisplay=function(e){var t=function(e,t,a,n){if(e===a&&t===n)return 0;var r=Math.PI*e/180,o=Math.PI*a/180,i=t-n,l=Math.PI*i/180,s=Math.sin(r)*Math.sin(o)+Math.cos(r)*Math.cos(o)*Math.cos(l);s>1&&(s=1);var c=1.609344*(s=60*(s=180*(s=Math.acos(s))/Math.PI)*1.1515);return{miles:s.toFixed(2),kilometers:c.toFixed(2)}}(n.state.userLat,n.state.userLon,e.lat,e.lon);return"".concat(t.miles," miles away")},n.getItemDisplay=function(e){return"".concat(n.getItemNameDisplay(e)," -- ").concat(n.getItemDistanceDisplay(e))},n.state={nearby:[],userLat:0,userLon:0,errored:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition(this.requestOSMData)}},{key:"render",value:function(){var e=this;return 0===this.state.nearby.length?r.a.createElement("div",{className:"osm-results-container"},r.a.createElement("h3",null,"Nearby ",this.props.displayName,":"),r.a.createElement("p",null,"Loading...")):this.state.errored?r.a.createElement("div",{className:"osm-results-container"},r.a.createElement("h3",null,"Nearby ",this.props.displayName,":"),r.a.createElement("p",null,"Something went wrong...")):r.a.createElement("div",{className:"osm-results-container"},r.a.createElement("h3",null,"Nearby ",this.props.displayName,":"),r.a.createElement("ul",null,this.state.nearby.length>0&&this.state.nearby.map((function(t){return r.a.createElement("li",{key:t.osm_id},r.a.createElement("a",{href:e.getGMapsLink(t),target:"_blank",rel:"noopener noreferrer"},e.getItemDisplay(t)))}))))}}]),a}(r.a.Component);var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Out and About"),r.a.createElement("p",null,"Public amenities near you.",r.a.createElement("br",null),"All links below route to Google Maps.")),r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{className:"wrap-container"},r.a.createElement(h,{targetEntity:"toilet",displayName:"Restrooms",sliceItemNameFrom:1,sliceItemNameTo:3}),r.a.createElement(h,{targetEntity:"drinking water",displayName:"Water Fountains",sliceItemNameFrom:0,sliceItemNameTo:2})),r.a.createElement("footer",null,r.a.createElement("p",null,"Help make this better --"," ",r.a.createElement("a",{href:"https://github.com/JacksonMaxfield/out-and-about",target:"_blank",rel:"noopener noreferrer"},"Contribute on Github!")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.initialize("UA-145893191-1"),l.a.pageview(window.location.pathname+window.location.search),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.f222ca18.chunk.js.map