var anatomogramDemo=webpackJsonp_name_([0,1],Array(25).concat([/*!***********************!*\
  !*** ./src/Assets.js ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultView=t.getAnatomogramViews=void 0;var s=n(/*! ./json/svgsMetadata.json */34),a=function(e){return e&&e.__esModule?e:{default:e}}(s),i=function(e,t,n){return n.indexOf(e)===t},r=function(e){return"string"==typeof e&&""!==e},o=a.default.map(function(e){return e.species}).filter(i).reduce(function(e,t){return e[t]=a.default.filter(function(e){return e.species===t}).map(function(e){return e.view}).filter(r).sort().reverse(),e},{}),l=function(e){var t="string"==typeof e?e.trim().toLowerCase().replace(/ +/,"_"):"";return o[t]||[]},c=function(e){return l(e)[0]};t.getAnatomogramViews=l,t.getDefaultView=c},/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=s(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function s(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var s=n(t,e);return t[2]?"@media "+t[2]+"{"+s+"}":s}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(s[i]=!0)}for(a=0;a<e.length;a++){var r=e[a];"number"==typeof r[0]&&s[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){function s(e,t){for(var n=0;n<e.length;n++){var s=e[n],a=O[s.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](s.parts[i]);for(;i<s.parts.length;i++)a.parts.push(u(s.parts[i],t))}else{for(var r=[],i=0;i<s.parts.length;i++)r.push(u(s.parts[i],t));O[s.id]={id:s.id,refs:1,parts:r}}}}function a(e,t){for(var n=[],s={},a=0;a<e.length;a++){var i=e[a],r=t.base?i[0]+t.base:i[0],o=i[1],l=i[2],c=i[3],u={css:o,media:l,sourceMap:c};s[r]?s[r].parts.push(u):n.push(s[r]={id:r,parts:[u]})}return n}function i(e,t){var n=E(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var s=U[U.length-1];if("top"===e.insertAt)s?s.nextSibling?n.insertBefore(t,s.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),U.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function r(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=U.indexOf(e);t>=0&&U.splice(t,1)}function o(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,s,a,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=N++;n=R||(R=o(t)),s=_.bind(null,n,c,!1),a=_.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),s=d.bind(null,n,t),a=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(t),s=f.bind(null,n),a=function(){r(n)});return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else a()}}function _(e,t,n,s){var a=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=h(t,a);else{var i=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function f(e,t){var n=t.css,s=t.media;if(s&&e.setAttribute("media",s),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var s=n.css,a=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||i)&&(s=B(s)),a&&(s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var r=new Blob([s],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var O={},p=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),E=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),R=null,N=0,U=[],B=n(/*! ./urls */58);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=p()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=a(e,t);return s(n,t),function(e){for(var i=[],r=0;r<n.length;r++){var o=n[r],l=O[o.id];l.refs--,i.push(l)}if(e){s(a(e,t),t)}for(var r=0;r<i.length;r++){var l=i[r];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete O[l.id]}}}};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},,,,,,,/*!************************************!*\
  !*** ./src/json/svgsMetadata.json ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
function(e,t){e.exports=[{filename:"anolis_carolinensis.svg",species:"anolis_carolinensis",view:"",ids:["UBERON_0000955","UBERON_0000948","UBERON_0002113","UBERON_0014892"]},{filename:"arabidopsis_thaliana.svg",species:"arabidopsis_thaliana",view:"",ids:["PO_0025034","PO_0009005","PO_0009046","PO_0009001"]},{filename:"bos_taurus.svg",species:"bos_taurus",view:"",ids:["UBERON_0001013","UBERON_0014892","UBERON_0002114","UBERON_0000955","UBERON_0002113","UBERON_0002048","UBERON_0001155","UBERON_0000948","UBERON_0002107","UBERON_0002016","UBERON_0001898"]},{filename:"brachypodium_distachyon.flower_parts.svg",species:"brachypodium_distachyon",view:"flower_parts",ids:["PO_0009066","PO_0009030","PO_0009001","PO_0009009","PO_0009089"]},{filename:"brachypodium_distachyon.whole_plant.svg",species:"brachypodium_distachyon",view:"whole_plant",ids:["PO_0009010","PO_0009049","PO_0025034"]},{filename:"gallus_gallus.svg",species:"gallus_gallus",view:"",ids:["UBERON_0000955","UBERON_0000948","UBERON_0002113","UBERON_0002107","UBERON_0001155","UBERON_0002106","UBERON_0002048","UBERON_0014892"]},{filename:"homo_sapiens.brain.svg",species:"homo_sapiens",view:"brain",ids:["UBERON_0002148","UBERON_0001894","UBERON_0001896","UBERON_0002771","UBERON_0002702","UBERON_0002021","UBERON_0001905","UBERON_0001897","UBERON_0001898","UBERON_0002421","UBERON_0003027","UBERON_0001876","UBERON_0001870","UBERON_0001871","UBERON_0001882","UBERON_0002285","UBERON_0001873","UBERON_0001872","UBERON_0002038","UBERON_0001874","UBERON_0001875","UBERON_0002360","UBERON_0000451","UBERON_0000956","UBERON_0002037","UBERON_0002363","UBERON_0001954","UBERON_0002245"]},{filename:"homo_sapiens.female.svg",species:"homo_sapiens",view:"female",ids:["UBERON_0001981","UBERON_0000178","UBERON_0001637","CL_0000236","CL_0000084","CL_0000623","CL_0000576","CL_0000233","UBERON_0000966","UBERON_0001831","UBERON_0001013","UBERON_0000948","UBERON_0001135","UBERON_0000955","UBERON_0000310","UBERON_0002369","UBERON_0000029","UBERON_0001134","UBERON_0000992","CL_0000738","UBERON_0001044","UBERON_0003889","UBERON_0000995","UBERON_0000002","UBERON_0001021","UBERON_0006618","UBERON_0012249","UBERON_0002421","UBERON_0000977","UBERON_0002185","UBERON_0003126","UBERON_0002048","UBERON_0002372","UBERON_0000970","UBERON_0001876","UBERON_0001736","UBERON_0001264","UBERON_0002107","UBERON_0001155","UBERON_0002371","UBERON_0001255","UBERON_0000945","UBERON_0002114","UBERON_0001043","UBERON_0002110","UBERON_0002106","UBERON_0002108","UBERON_0001987","UBERON_0001295","UBERON_0000996","UBERON_0000947","UBERON_0000007","UBERON_0007650","UBERON_0001153","UBERON_0001154","UBERON_0002116","UBERON_0002079","UBERON_0002084","UBERON_0002146","UBERON_0002135","UBERON_0001103","UBERON_0002481","UBERON_0007844","UBERON_0000341","UBERON_0001052","UBERON_0001706","UBERON_0001728","UBERON_0002037","UBERON_0002245","UBERON_0000451","UBERON_0001870","UBERON_0000004","UBERON_0001871","UBERON_0000956","UBERON_0002113","UBERON_0001225","UBERON_0001621","UBERON_0002134","UBERON_0002046","UBERON_0000014","UBERON_0000167","UBERON_0001723"]},{filename:"homo_sapiens.male.svg",species:"homo_sapiens",view:"male",ids:["UBERON_0000956","UBERON_0000977","UBERON_0000955","UBERON_0000948","UBERON_0000310","UBERON_0002369","UBERON_0000029","UBERON_0001013","UBERON_0001134","CL_0000738","UBERON_0001871","UBERON_0006618","UBERON_0001621","UBERON_0002421","UBERON_0001000","UBERON_0000998","UBERON_0000473","UBERON_0001301","UBERON_0000970","UBERON_0002372","UBERON_0002048","UBERON_0001876","UBERON_0003126","UBERON_0002185","UBERON_0001021","UBERON_0002037","UBERON_0002245","UBERON_0002113","UBERON_0001225","UBERON_0002046","UBERON_0002371","UBERON_0001870","UBERON_0000451","UBERON_0000007","UBERON_0000947","UBERON_0007650","UBERON_0002084","UBERON_0001153","UBERON_0002116","UBERON_0001052","UBERON_0000004","UBERON_0001723","UBERON_0002079","UBERON_0002146","UBERON_0002135","UBERON_0000989","UBERON_0001728","UBERON_0002240","UBERON_0000341","UBERON_0002134","UBERON_0001103","UBERON_0002107","UBERON_0000945","UBERON_0002106","UBERON_0002114","UBERON_0002110","UBERON_0001264","UBERON_0001155","UBERON_0002108","UBERON_0001154","UBERON_0001135","UBERON_0001255","UBERON_00024818","UBERON_0007844","UBERON_0001043","UBERON_0001044","UBERON_0001831","UBERON_0001736","UBERON_0000014","UBERON_0000178","UBERON_0001981","UBERON_0001637","CL_0000236","CL_0000084","CL_0000623","CL_0000576","CL_0000233","UBERON_0001954","UBERON_0000966","UBERON_0001706","UBERON_0000167","UBERON_0002367"]},{filename:"hordeum_vulgare.flower_parts.svg",species:"hordeum_vulgare",view:"flower_parts",ids:["PO_0009001","PO_0009030","PO_0009073","PO_0009072","PO_0009009","PO_0009066"]},{filename:"hordeum_vulgare.whole_plant.svg",species:"hordeum_vulgare",view:"whole_plant",ids:["PO_0020142","PO_0009005","PO_0009006","PO_0009049","PO_0025034"]},{filename:"macaca_mulatta.svg",species:"macaca_mulatta",view:"",ids:["UBERON_0000955","UBERON_0000451","UBERON_0002037","UBERON_0000948","UBERON_0002113","UBERON_0002107","UBERON_0000473"]},{filename:"monodelphis_domestica.svg",species:"monodelphis_domestica",view:"",ids:["UBERON_0000955","UBERON_0002037","UBERON_0000948","UBERON_0002113","UBERON_0002107","UBERON_0000473"]},{filename:"mus_musculus.brain.svg",species:"mus_musculus",view:"brain",ids:["UBERON_0001896","UBERON_0000956","UBERON_0000369","UBERON_0001894","UBERON_0000007","UBERON_0002037","UBERON_0002298","UBERON_0001891","UBERON_0001897","UBERON_0001898","UBERON_0000004","UBERON_0002259","EFO_0000530"]},{filename:"mus_musculus.female.svg",species:"mus_musculus",view:"female",ids:["UBERON_0000947","UBERON_0001009","UBERON_0001348","UBERON_0001347","UBERON_0000945","UBERON_0002114","UBERON_0001264","UBERON_0002106","UBERON_0002369","UBERON_0002113","UBERON_0001155","UBERON_0002108","UBERON_0001153","UBERON_0002115","UBERON_0002116","UBERON_0001043","UBERON_0002110","UBERON_0000996","UBERON_0000995","UBERON_0001255","UBERON_0001831","UBERON_0001736","UBERON_0001723","UBERON_0001211","UBERON_0000981","UBERON_0002371","UBERON_0007844","UBERON_0001377","UBERON_0014892","UBERON_0002240","UBERON_0001103","UBERON_0002103","UBERON_0001645","UBERON_0000970","UBERON_0001242","UBERON_0000955","UBERON_0000948","UBERON_0002107","UBERON_0001322","UBERON_0001981","UBERON_0000014","UBERON_0001911","UBERON_0003134","UBERON_0000990","UBERON_0000029","UBERON_0001132","UBERON_0002370","UBERON_0002046","UBERON_0002048","UBERON_0000010","UBERON_0003126"]},{filename:"mus_musculus.male.svg",species:"mus_musculus",view:"male",ids:["UBERON_0000947","UBERON_0001348","UBERON_0001347","UBERON_0000945","UBERON_0002114","UBERON_0001264","UBERON_0002106","UBERON_0002369","UBERON_0002113","UBERON_0001155","UBERON_0002108","UBERON_0001153","UBERON_0002115","UBERON_0002116","UBERON_0001043","UBERON_0002110","UBERON_0001831","UBERON_0001736","UBERON_0000029","UBERON_0000998","UBERON_0000989","UBERON_0000981","UBERON_0002371","UBERON_0007844","UBERON_0001377","UBERON_0002240","UBERON_0002048","UBERON_0001103","UBERON_0003126","UBERON_0002103","UBERON_0001645","UBERON_0001322","UBERON_0001242","UBERON_0002107","UBERON_0000948","UBERON_0000955","UBERON_0014892","UBERON_0001009","UBERON_0001981","UBERON_0000014","UBERON_0001132","UBERON_0001211","UBERON_0002367","UBERON_0001000","UBERON_0001301","UBERON_0000473","UBERON_0001255","UBERON_0002370","UBERON_0000010","UBERON_0000970","UBERON_0001723"]},{filename:"oryza_sativa.flower_parts.svg",species:"oryza_sativa",view:"flower_parts",ids:["PO_0009010","PO_0009009","PO_0009089","PO_0009030","PO_0009066"]},{filename:"oryza_sativa.whole_plant.svg",species:"oryza_sativa",view:"whole_plant",ids:["PO_0025034","PO_0009005","PO_0009049","PO_0009006","PO_0005052"]},{filename:"papio_anubis.svg",species:"papio_anubis",view:"",ids:["UBERON_0000948","UBERON_0002107","UBERON_0000945","UBERON_0001155","UBERON_0002371","UBERON_0002113","UBERON_0002106","UBERON_0014892","UBERON_0002370","UBERON_0000955","UBERON_0001871","UBERON_0001870","UBERON_0000007","UBERON_0002048","UBERON_0000029","UBERON_0002037"]},{filename:"rattus_norvegicus.svg",species:"rattus_norvegicus",view:"",ids:["UBERON_0000955","UBERON_0002113","CL_0000336","UBERON_0001388","UBERON_0000948","UBERON_0002107","UBERON_0002048","UBERON_0002106","UBERON_0002370","UBERON_0000995","UBERON_0000473","UBERON_0001155"]},{filename:"solanum_lycopersicum.flower_parts.svg",species:"solanum_lycopersicum",view:"flower_parts",ids:["PO_0009084","PO_0009030","PO_0009072","PO_0009073","PO_0009074","PO_0009066","PO_0009010"]},{filename:"solanum_lycopersicum.whole_plant.svg",species:"solanum_lycopersicum",view:"whole_plant",ids:["PO_0025034","PO_0000056","PO_0009046","PO_0009001","PO_0009005"]},{filename:"solanum_tuberosum.svg",species:"solanum_tuberosum",view:"",ids:[]},{filename:"sorghum_bicolor.flower_parts.svg",species:"sorghum_bicolor",view:"flower_parts",ids:["PO_0009049","PO_0009051","PO_0009001","PO_0009009","PO_0009089","PO_0009066","PO_0009030"]},{filename:"sorghum_bicolor.whole_plant.svg",species:"sorghum_bicolor",view:"whole_plant",ids:["PO_0009006","PO_0006079","PO_0009047","PO_0000230","PO_0009049","PO_0025034","PO_0009005"]},{filename:"tetraodon_nigroviridis.svg",species:"tetraodon_nigroviridis",view:"",ids:["UBERON_0000955","UBERON_0000948","UBERON_0002113","UBERON_0014892"]},{filename:"triticum_aestivum.flower_parts.svg",species:"triticum_aestivum",view:"flower_parts",ids:["PO_0020033","PO_0020031","PO_0009089","PO_0009085","PO_0009086","PO_0009084","PO_0009009","PO_0009001","PO_0009088","PO_0009030","PO_0009066"]},{filename:"triticum_aestivum.whole_plant.svg",species:"triticum_aestivum",view:"whole_plant",ids:["PO_0009047","PO_0009005","PO_0009049","PO_0025034"]},{filename:"xenopus_tropicalis.svg",species:"xenopus_tropicalis",view:"",ids:["UBERON_0000955","UBERON_0002113","UBERON_0014892","UBERON_0000948","UBERON_0002107"]},{filename:"zea_mays.flower_parts.svg",species:"zea_mays",view:"flower_parts",ids:["PO_0009001","PO_0020033","PO_0020031","PO_0020136","PO_0025597","PO_0009066","PO_0009009","PO_0009089","PO_0009084"]},{filename:"zea_mays.whole_plant.svg",species:"zea_mays",view:"whole_plant",ids:["PO_0020126","PO_0020136","PO_0020142","PO_0020127","PO_0009005","PO_0009074","PO_0025034"]}]},,,,,,,,,,,,,,,,,,,/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.default=void 0;var a=n(/*! react */8),i=s(a),r=n(/*! react-dom */28),o=s(r),l=n(/*! ./Anatomogram */54),c=s(l),u=function(e,t){o.default.render(i.default.createElement(c.default,e),document.getElementById(t))};t.default=c.default,t.render=u},/*!****************************!*\
  !*** ./src/Anatomogram.js ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),c=n(/*! react */8),u=s(c),_=n(/*! prop-types */12),f=s(_),d=n(/*! ./Switcher */55),O=s(d),p=n(/*! ./AnatomogramSvg */70),E=s(p),R=n(/*! ./Assets */25),N=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectedView:(0,R.getDefaultView)(e.species)},n._switchAnatomogramView=n._switchAnatomogramView.bind(n),n}return r(t,e),l(t,[{key:"_switchAnatomogramView",value:function(e){this.setState({selectedView:e})}},{key:"componentWillReceiveProps",value:function(e){e.species!==this.props.species&&this.setState({selectedView:(0,R.getDefaultView)(e.species)})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(O.default,{species:this.props.species,selectedView:this.state.selectedView,onChangeView:this._switchAnatomogramView}),u.default.createElement(E.default,o({},this.props,{selectedView:this.state.selectedView})))}}]),t}(u.default.Component);N.propTypes={species:f.default.string.isRequired,showIds:f.default.arrayOf(f.default.string),highlightIds:f.default.arrayOf(f.default.string),selectIds:f.default.arrayOf(f.default.string),showColour:f.default.string,highlightColour:f.default.string,selectColour:f.default.string,onMouseOver:f.default.func,onMouseOut:f.default.func,onClick:f.default.func},N.defaultProps={showColour:"grey",highlightColour:"red",selectColour:"purple",showOpacity:.4,highlightOpacity:.4,selectOpacity:.4,onMouseOver:function(){},onMouseOut:function(){},onClick:function(){}},t.default=N},/*!*************************!*\
  !*** ./src/Switcher.js ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(/*! react */8),i=s(a),r=n(/*! prop-types */12),o=s(r),l=n(/*! ./Assets */25);n(/*! ./Switcher.css */56);var c=function(e,t){/*! ./img */
return n(59)("./"+e+"."+(e===t?"":"un")+"selected.png")},u=function(e){var t=e.species,n=e.selectedView,s=e.onChangeView;return i.default.createElement("div",{className:"gxa-anatomogram-switcher"},(0,l.getAnatomogramViews)(t).map(function(e){return i.default.createElement("img",{key:e,className:"gxa-anatomogram-switcher-icon",onClick:function(){return s(e)},src:c(e,n)})}))};u.propTypes={species:o.default.string.isRequired,selectedView:o.default.string,onChangeView:o.default.func.isRequired},t.default=u},/*!**************************!*\
  !*** ./src/Switcher.css ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){var s=n(/*! !../node_modules/css-loader!./Switcher.css */57);"string"==typeof s&&(s=[[e.i,s,""]]);var a={};a.transform=void 0;n(/*! ../node_modules/style-loader/lib/addStyles.js */27)(s,a);s.locals&&(e.exports=s.locals)},/*!****************************************************!*\
  !*** ./node_modules/css-loader!./src/Switcher.css ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){t=e.exports=n(/*! ../node_modules/css-loader/lib/css-base.js */26)(void 0),t.push([e.i,".gxa-anatomogram-switcher{display:inline-block;vertical-align:top;width:10%;max-width:44px}.gxa-anatomogram-switcher-icon{border:1px solid #ccc;border-radius:4px;width:100%;height:auto;padding:2px}.gxa-anatomogram-switcher-icon:hover{border:1px solid orange;background:#fafad2;cursor:pointer}",""])},/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,s=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a))return e;var i;return i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:s+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},/*!***************************************!*\
  !*** ./src/img ^\.\/.*selected\.png$ ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){function s(e){return n(a(e))}function a(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./brain.selected.png":60,"./brain.unselected.png":61,"./female.selected.png":62,"./female.unselected.png":63,"./flower_parts.selected.png":64,"./flower_parts.unselected.png":65,"./male.selected.png":66,"./male.unselected.png":67,"./whole_plant.selected.png":68,"./whole_plant.unselected.png":69};s.keys=function(){return Object.keys(i)},s.resolve=a,e.exports=s,s.id=59},/*!************************************!*\
  !*** ./src/img/brain.selected.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"cbe297d1ea7bf5aac3cfcd540c8be570.png"},/*!**************************************!*\
  !*** ./src/img/brain.unselected.png ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"bc6cb140072af5b41e6dc150228f8735.png"},/*!*************************************!*\
  !*** ./src/img/female.selected.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"a9cbc6e400cd961706ef5e528563fe6d.png"},/*!***************************************!*\
  !*** ./src/img/female.unselected.png ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"7f876a7270e2c70bc575970c544e758b.png"},/*!*******************************************!*\
  !*** ./src/img/flower_parts.selected.png ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"406cf6d89ab420802fb26b22c5ffa994.png"},/*!*********************************************!*\
  !*** ./src/img/flower_parts.unselected.png ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"cbab05b12c35d377aa6c047cd47d935c.png"},/*!***********************************!*\
  !*** ./src/img/male.selected.png ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"ef28de891e5f4ac45b23ffbb6e6e2194.png"},/*!*************************************!*\
  !*** ./src/img/male.unselected.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"e489bf5dc0b662fd5516779442d4c046.png"},/*!******************************************!*\
  !*** ./src/img/whole_plant.selected.png ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"b6434f2d694b9cf3070660a5d0fb7ad3.png"},/*!********************************************!*\
  !*** ./src/img/whole_plant.unselected.png ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"780ef37f46c8cdb539dd2c5c4dfd348a.png"},/*!*******************************!*\
  !*** ./src/AnatomogramSvg.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */8),r=s(i),o=n(/*! prop-types */12),l=s(o),c=n(/*! react-svg */71),u=s(c);n(/*! ./AnatomogramSvg.css */72);var _=function(e,t){return Array.isArray(e)&&Array.isArray(t)?e.filter(function(e){return!t.includes(e)}):e},f=function(e){function t(e){if(n)for(var s=0;s<n.children.length;s++)if(n.children[s].id===e)return n.children[s].attributes["xlink:href"]?t(n.children[s].attributes["xlink:href"].value.substring(1)):n.children[s]}var n=function(e){for(var t=e.getElementsByTagName("g"),n=0;n<t.length;n++)if("LAYER_EFO"===t[n].id)return t[n]}(e);return t},d=function(e,t,n,s){e.forEach(function(e){var a=s(e);a&&(a.style.fill=t,a.style.opacity=n)})},O=function(e,t,n,s,a,i){e.forEach(function(e){var r=i(e);if(r){r.addEventListener("mouseover",function(){r.style.fill=t,r.style.opacity=n,s(e)});var o=r.style.fill,l=r.style.opacity;r.addEventListener("mouseout",function(){r.style.fill=o,r.style.opacity=l,a(e)})}})},p=function(e,t,n,s){e.forEach(function(e){var a=s(e);a&&a.addEventListener(t,function(){n(e)})})},E=function(e,t){var n=t.showIds,s=t.showColour,i=t.showOpacity,r=t.highlightIds,o=t.highlightColour,l=t.highlightOpacity,c=t.selectIds,u=t.selectColour,f=t.selectOpacity,E=t.onMouseOver,R=t.onMouseOut,N=t.onClick,U=_(n,[].concat(a(r),a(c))),B=_(r,c);d(U,s,i,e),d(B,o,l,e),d(c,u,f,e),O(U,o,l,E,R,e),O(B,o,l+.2,E,R,e),O(c,u,f+.2,E,R,e),p([].concat(a(U),a(B),a(c)),"click",N,e)},R=function(e,t){/*! ./svg */
return n(74)("./"+e+(t?"."+t:"")+".svg")},N=function(e){return r.default.createElement("div",{className:"gxa-anatomogram-svg-wrapper"},r.default.createElement(u.default,{path:R(e.species,e.selectedView),callback:function(t){E(f(t),e)},className:"gxa-anatomogram-svg",style:{paddingLeft:e.selectedView?"10px":""}}))};N.propTypes={species:l.default.string.isRequired,selectedView:l.default.string,showIds:l.default.arrayOf(l.default.string).isRequired,highlightIds:l.default.arrayOf(l.default.string).isRequired,selectIds:l.default.arrayOf(l.default.string).isRequired,showColour:l.default.string.isRequired,highlightColour:l.default.string.isRequired,selectColour:l.default.string.isRequired,showOpacity:l.default.number.isRequired,highlightOpacity:l.default.number.isRequired,selectOpacity:l.default.number.isRequired,onMouseOver:l.default.func.isRequired,onMouseOut:l.default.func.isRequired,onClick:l.default.func.isRequired},t.default=N},,/*!********************************!*\
  !*** ./src/AnatomogramSvg.css ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){var s=n(/*! !../node_modules/css-loader!./AnatomogramSvg.css */73);"string"==typeof s&&(s=[[e.i,s,""]]);var a={};a.transform=void 0;n(/*! ../node_modules/style-loader/lib/addStyles.js */27)(s,a);s.locals&&(e.exports=s.locals)},/*!**********************************************************!*\
  !*** ./node_modules/css-loader!./src/AnatomogramSvg.css ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){t=e.exports=n(/*! ../node_modules/css-loader/lib/css-base.js */26)(void 0),t.push([e.i,".gxa-anatomogram-svg-wrapper{display:inline-block;vertical-align:top;width:90%}.gxa-anatomogram-svg{width:100%;height:auto}",""])},/*!*******************************!*\
  !*** ./src/svg ^\.\/.*\.svg$ ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){function s(e){return n(a(e))}function a(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./anolis_carolinensis.svg":75,"./arabidopsis_thaliana.svg":76,"./bos_taurus.svg":77,"./brachypodium_distachyon.flower_parts.svg":78,"./brachypodium_distachyon.whole_plant.svg":79,"./gallus_gallus.svg":80,"./homo_sapiens.brain.svg":81,"./homo_sapiens.female.svg":82,"./homo_sapiens.male.svg":83,"./hordeum_vulgare.flower_parts.svg":84,"./hordeum_vulgare.whole_plant.svg":85,"./macaca_mulatta.svg":86,"./monodelphis_domestica.svg":87,"./mus_musculus.brain.svg":88,"./mus_musculus.female.svg":89,"./mus_musculus.male.svg":90,"./oryza_sativa.flower_parts.svg":91,"./oryza_sativa.whole_plant.svg":92,"./papio_anubis.svg":93,"./rattus_norvegicus.svg":94,"./solanum_lycopersicum.flower_parts.svg":95,"./solanum_lycopersicum.whole_plant.svg":96,"./solanum_tuberosum.svg":97,"./sorghum_bicolor.flower_parts.svg":98,"./sorghum_bicolor.whole_plant.svg":99,"./tetraodon_nigroviridis.svg":100,"./triticum_aestivum.flower_parts.svg":101,"./triticum_aestivum.whole_plant.svg":102,"./xenopus_tropicalis.svg":103,"./zea_mays.flower_parts.svg":104,"./zea_mays.whole_plant.svg":105};s.keys=function(){return Object.keys(i)},s.resolve=a,e.exports=s,s.id=74},/*!*****************************************!*\
  !*** ./src/svg/anolis_carolinensis.svg ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"42e11a1afb321056726cb714fc2b29ed.svg"},/*!******************************************!*\
  !*** ./src/svg/arabidopsis_thaliana.svg ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"9e029162d2d2fca8137ab8fd3cf12ffc.svg"},/*!********************************!*\
  !*** ./src/svg/bos_taurus.svg ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"1f0105bc3a6666729c11d80ffa1ae919.svg"},/*!**********************************************************!*\
  !*** ./src/svg/brachypodium_distachyon.flower_parts.svg ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"1de18558e556536a227801779aa94771.svg"},/*!*********************************************************!*\
  !*** ./src/svg/brachypodium_distachyon.whole_plant.svg ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"9ca356010afccc1946b8290847dc90bf.svg"},/*!***********************************!*\
  !*** ./src/svg/gallus_gallus.svg ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"13d5276968b2bdba1c6d83dbc4892cc6.svg"},/*!****************************************!*\
  !*** ./src/svg/homo_sapiens.brain.svg ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"f7155367498db4e86049d705e91b8956.svg"},/*!*****************************************!*\
  !*** ./src/svg/homo_sapiens.female.svg ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"52fda97ce0f3cbfac07626e56daead32.svg"},/*!***************************************!*\
  !*** ./src/svg/homo_sapiens.male.svg ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"4626c730027e5ff70254d23451537f9a.svg"},/*!**************************************************!*\
  !*** ./src/svg/hordeum_vulgare.flower_parts.svg ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"81117fe192f85492d5a0a4e2465b11d0.svg"},/*!*************************************************!*\
  !*** ./src/svg/hordeum_vulgare.whole_plant.svg ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"5614d388d36f6cab27fa6de4fdbac6de.svg"},/*!************************************!*\
  !*** ./src/svg/macaca_mulatta.svg ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"6dc6fed18ecfbebfbf9403a6c7df6515.svg"},/*!*******************************************!*\
  !*** ./src/svg/monodelphis_domestica.svg ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"7b27468902ba520db2e27431e247547c.svg"},/*!****************************************!*\
  !*** ./src/svg/mus_musculus.brain.svg ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"bbbcce33c7259be34c77037843606255.svg"},/*!*****************************************!*\
  !*** ./src/svg/mus_musculus.female.svg ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"f950766239d4c1005b43ec60a19f212a.svg"},/*!***************************************!*\
  !*** ./src/svg/mus_musculus.male.svg ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"236878cf36edd206f852c1c86a98ec2c.svg"},/*!***********************************************!*\
  !*** ./src/svg/oryza_sativa.flower_parts.svg ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"eef5a18199939d306c11b75323c7fe5c.svg"},/*!**********************************************!*\
  !*** ./src/svg/oryza_sativa.whole_plant.svg ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"feb47a20dd2a281a55f6521928d5759b.svg"},/*!**********************************!*\
  !*** ./src/svg/papio_anubis.svg ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"63fff6b7536e843452ae95b82b28402d.svg"},/*!***************************************!*\
  !*** ./src/svg/rattus_norvegicus.svg ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"28ac5ad41796711bfe061af787b1bc7e.svg"},/*!*******************************************************!*\
  !*** ./src/svg/solanum_lycopersicum.flower_parts.svg ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"bd5b384f4015e57ab394bf1a0e60b208.svg"},/*!******************************************************!*\
  !*** ./src/svg/solanum_lycopersicum.whole_plant.svg ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"0f358510861736791edc8f91eb88aa27.svg"},/*!***************************************!*\
  !*** ./src/svg/solanum_tuberosum.svg ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"2c3a60abb1fd4675c939f2623f939379.svg"},/*!**************************************************!*\
  !*** ./src/svg/sorghum_bicolor.flower_parts.svg ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"d716785b6df1eb3436ed0c8b083023df.svg"},/*!*************************************************!*\
  !*** ./src/svg/sorghum_bicolor.whole_plant.svg ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"120316d86001911ca318d627334d5074.svg"},/*!********************************************!*\
  !*** ./src/svg/tetraodon_nigroviridis.svg ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"9a5bda4d22d8db48509add286b5cd013.svg"},/*!****************************************************!*\
  !*** ./src/svg/triticum_aestivum.flower_parts.svg ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"3dbe683fb3d8d07aba0cc901ad694d7c.svg"},/*!***************************************************!*\
  !*** ./src/svg/triticum_aestivum.whole_plant.svg ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"eb959d9bbea6f5ee892ce2c7b045fb8d.svg"},/*!****************************************!*\
  !*** ./src/svg/xenopus_tropicalis.svg ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"98271459a68eef1b5b641ceb2fdf9e08.svg"},/*!*******************************************!*\
  !*** ./src/svg/zea_mays.flower_parts.svg ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"3f037101504d51568440b73cd5bd7808.svg"},/*!******************************************!*\
  !*** ./src/svg/zea_mays.whole_plant.svg ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){e.exports=n.p+"9c89f587f71426483e6bfe764220aa18.svg"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/*!*********************************!*\
  !*** ./html/AnatomogramDemo.js ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.default=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),u=n(/*! react */8),_=s(u),f=n(/*! react-dom */28),d=s(f),O=n(/*! prop-types */12),p=s(O),E=n(/*! ../src/index */53),R=s(E),N=n(/*! ../src/json/svgsMetadata.json */34),U=s(N),B=function(e,t,n){return n.indexOf(e)===t},h=U.default.map(function(e){return e.species}).filter(B).sort(),m=function(e){return U.default.filter(function(t){return t.species===e}).reduce(function(e,t){return e.concat(t.ids)},[]).filter(B).sort()},v=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),s=h[0];return n.state={selectedSpecies:s,allIds:m(s),showIds:[],highlightIds:[],selectIds:[]},n._handleSelectOnChange=n._handleSelectOnChange.bind(n),n._handleCheckboxOnChange=n._handleCheckboxOnChange.bind(n),n._handleOnClick=n._handleOnClick.bind(n),n._addRemoveFromSelectIds=n._addRemoveFromSelectIds.bind(n),n}return o(t,e),c(t,[{key:"_handleSelectOnChange",value:function(e){this.setState({selectedSpecies:e.target.value,allIds:m(e.target.value)})}},{key:"_handleCheckboxOnChange",value:function(e,t){var n=e.target.checked?this.state[t].concat(e.target.value):this.state[t].filter(function(t){return e.target.value!==t});this.setState(a({},t,n))}},{key:"_handleOnClick",value:function(e,t){this.setState(a({},t,e?Array.from(this.state.allIds):[]))}},{key:"_addRemoveFromSelectIds",value:function(e){var t=this.state.selectIds.includes(e)?this.state.selectIds.filter(function(t){return t!==e}):this.state.selectIds.concat(e);this.setState({selectIds:t})}},{key:"render",value:function(){var e=this;return _.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"small-3 small-centered columns"},_.default.createElement("select",{value:this.state.selectedSpecies,onChange:this._handleSelectOnChange},h.map(function(e){return _.default.createElement("option",{key:e},e)})))),_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"small-4 columns",id:"anatomogramContainer"},_.default.createElement(R.default,l({},this.props,{species:this.state.selectedSpecies,showIds:this.state.showIds,highlightIds:this.state.highlightIds,selectIds:this.state.selectIds,onClick:this._addRemoveFromSelectIds}))),_.default.createElement("div",{className:"small-8 columns"},_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"small-4 columns"},_.default.createElement("button",{className:"button",onClick:function(){e._handleOnClick(!0,"showIds")}},"Show all"),_.default.createElement("button",{className:"button",onClick:function(){e._handleOnClick(!1,"showIds")}},"Hide all")),_.default.createElement("div",{className:"small-4 columns"},_.default.createElement("button",{className:"button",onClick:function(){e._handleOnClick(!0,"highlightIds")}},"Highlight all"),_.default.createElement("button",{className:"button",onClick:function(){e._handleOnClick(!1,"highlightIds")}},"Unhighlight all")),_.default.createElement("div",{className:"small-4 columns"},_.default.createElement("button",{className:"button",onClick:function(){e._handleOnClick(!0,"selectIds")}},"Select all"),_.default.createElement("button",{className:"button",onClick:function(){e._handleOnClick(!1,"selectIds")}},"Unselect all"))),_.default.createElement("div",{className:"row column"},_.default.createElement("p",null,"Use the first checkbox to show the tissue, the second to highlight it, and the third to select it. Hover over a tissue to display its name. Click on it to select it.")),_.default.createElement("div",{className:"row column"},Array.from(this.state.allIds).sort().map(function(t){return _.default.createElement("div",{key:t,style:{display:"inline-block"}},_.default.createElement("input",{type:"checkbox",name:"showIds",value:t,onChange:function(t){e._handleCheckboxOnChange(t,"showIds")},checked:e.state.showIds.includes(t)}),_.default.createElement("input",{type:"checkbox",name:"highlightIds",value:t,onChange:function(t){e._handleCheckboxOnChange(t,"highlightIds")},checked:e.state.highlightIds.includes(t)}),_.default.createElement("input",{type:"checkbox",name:"selectIds",value:t,onChange:function(t){e._handleCheckboxOnChange(t,"selectIds")},checked:e.state.selectIds.includes(t)}),_.default.createElement("label",null,t))})))))}}]),t}(_.default.Component);v.propTypes={atlasUrl:p.default.string,pathToResources:p.default.string};var g=function(e,t){d.default.render(_.default.createElement(v,e),document.getElementById(t))};t.default=v,t.render=g}]),[143]);