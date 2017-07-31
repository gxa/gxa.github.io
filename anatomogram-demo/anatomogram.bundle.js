var anatomogram=webpackJsonp_name_([1],Array(25).concat([/*!***********************!*\
  !*** ./src/Assets.js ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultView=t.getAnatomogramViews=void 0;var s=n(/*! ./json/svgsMetadata.json */34),r=function(e){return e&&e.__esModule?e:{default:e}}(s),i=function(e,t,n){return n.indexOf(e)===t},o=function(e){return"string"==typeof e&&""!==e},a=r.default.map(function(e){return e.species}).filter(i).reduce(function(e,t){return e[t]=r.default.filter(function(e){return e.species===t}).map(function(e){return e.view}).filter(o).sort().reverse(),e},{}),_=function(e){var t="string"==typeof e?e.trim().toLowerCase().replace(/ +/,"_"):"";return a[t]||[]},u=function(e){return _(e)[0]};t.getAnatomogramViews=_,t.getDefaultView=u},/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=s(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function s(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var s=n(t,e);return t[2]?"@media "+t[2]+"{"+s+"}":s}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(s[i]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&s[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){function s(e,t){for(var n=0;n<e.length;n++){var s=e[n],r=p[s.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](s.parts[i]);for(;i<s.parts.length;i++)r.parts.push(c(s.parts[i],t))}else{for(var o=[],i=0;i<s.parts.length;i++)o.push(c(s.parts[i],t));p[s.id]={id:s.id,refs:1,parts:o}}}}function r(e,t){for(var n=[],s={},r=0;r<e.length;r++){var i=e[r],o=t.base?i[0]+t.base:i[0],a=i[1],_=i[2],u=i[3],c={css:a,media:_,sourceMap:u};s[o]?s[o].parts.push(c):n.push(s[o]={id:o,parts:[c]})}return n}function i(e,t){var n=R(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var s=N[N.length-1];if("top"===e.insertAt)s?s.nextSibling?n.insertBefore(t,s.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),N.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=N.indexOf(e);t>=0&&N.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),i(e,t),t}function _(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),i(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,s,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=U++;n=E||(E=a(t)),s=l.bind(null,n,u,!1),r=l.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=_(t),s=O.bind(null,n,t),r=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),s=f.bind(null,n),r=function(){o(n)});return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else r()}}function l(e,t,n,s){var r=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function f(e,t){var n=t.css,s=t.media;if(s&&e.setAttribute("media",s),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function O(e,t,n){var s=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(s=B(s)),r&&(s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([s],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var p={},d=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),R=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),E=null,U=0,N=[],B=n(/*! ./urls */58);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=d()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return s(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var a=n[o],_=p[a.id];_.refs--,i.push(_)}if(e){s(r(e,t),t)}for(var o=0;o<i.length;o++){var _=i[o];if(0===_.refs){for(var u=0;u<_.parts.length;u++)_.parts[u]();delete p[_.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},,,,,,,/*!************************************!*\
  !*** ./src/json/svgsMetadata.json ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
function(e,t){e.exports=[{filename:"anolis_carolinensis.svg",species:"anolis_carolinensis",view:"",ids:["UBERON_0000955","UBERON_0000948","UBERON_0002113","UBERON_0014892"]},{filename:"arabidopsis_thaliana.svg",species:"arabidopsis_thaliana",view:"",ids:["PO_0025034","PO_0009005","PO_0009046","PO_0009001"]},{filename:"bos_taurus.svg",species:"bos_taurus",view:"",ids:["UBERON_0001013","UBERON_0014892","UBERON_0002114","UBERON_0000955","UBERON_0002113","UBERON_0002048","UBERON_0001155","UBERON_0000948","UBERON_0002107","UBERON_0002016","UBERON_0001898"]},{filename:"brachypodium_distachyon.flower_parts.svg",species:"brachypodium_distachyon",view:"flower_parts",ids:["PO_0009066","PO_0009030","PO_0009001","PO_0009009","PO_0009089"]},{filename:"brachypodium_distachyon.whole_plant.svg",species:"brachypodium_distachyon",view:"whole_plant",ids:["PO_0009010","PO_0009049","PO_0025034"]},{filename:"gallus_gallus.svg",species:"gallus_gallus",view:"",ids:["UBERON_0000955","UBERON_0000948","UBERON_0002113","UBERON_0002107","UBERON_0001155","UBERON_0002106","UBERON_0002048","UBERON_0014892"]},{filename:"homo_sapiens.brain.svg",species:"homo_sapiens",view:"brain",ids:["UBERON_0002148","UBERON_0001894","UBERON_0001896","UBERON_0002771","UBERON_0002702","UBERON_0002021","UBERON_0001905","UBERON_0001897","UBERON_0001898","UBERON_0002421","UBERON_0003027","UBERON_0001876","UBERON_0001870","UBERON_0001871","UBERON_0001882","UBERON_0002285","UBERON_0001873","UBERON_0001872","UBERON_0002038","UBERON_0001874","UBERON_0001875","UBERON_0002360","UBERON_0000451","UBERON_0000956","UBERON_0002037","UBERON_0002363","UBERON_0001954","UBERON_0002245"]},{filename:"homo_sapiens.female.svg",species:"homo_sapiens",view:"female",ids:["UBERON_0001981","UBERON_0000178","UBERON_0001637","CL_0000236","CL_0000084","CL_0000623","CL_0000576","CL_0000233","UBERON_0000966","UBERON_0001831","UBERON_0001013","UBERON_0000948","UBERON_0001135","UBERON_0000955","UBERON_0000310","UBERON_0002369","UBERON_0000029","UBERON_0001134","UBERON_0000992","CL_0000738","UBERON_0001044","UBERON_0003889","UBERON_0000995","UBERON_0000002","UBERON_0001021","UBERON_0006618","UBERON_0012249","UBERON_0002421","UBERON_0000977","UBERON_0002185","UBERON_0003126","UBERON_0002048","UBERON_0002372","UBERON_0000970","UBERON_0001876","UBERON_0001736","UBERON_0001264","UBERON_0002107","UBERON_0001155","UBERON_0002371","UBERON_0001255","UBERON_0000945","UBERON_0002114","UBERON_0001043","UBERON_0002110","UBERON_0002106","UBERON_0002108","UBERON_0001987","UBERON_0001295","UBERON_0000996","UBERON_0000947","UBERON_0000007","UBERON_0007650","UBERON_0001153","UBERON_0001154","UBERON_0002116","UBERON_0002079","UBERON_0002084","UBERON_0002146","UBERON_0002135","UBERON_0001103","UBERON_0002481","UBERON_0007844","UBERON_0000341","UBERON_0001052","UBERON_0001706","UBERON_0001728","UBERON_0002037","UBERON_0002245","UBERON_0000451","UBERON_0001870","UBERON_0000004","UBERON_0001871","UBERON_0000956","UBERON_0002113","UBERON_0001225","UBERON_0001621","UBERON_0002134","UBERON_0002046","UBERON_0000014","UBERON_0000167","UBERON_0001723"]},{filename:"homo_sapiens.male.svg",species:"homo_sapiens",view:"male",ids:["UBERON_0000956","UBERON_0000977","UBERON_0000955","UBERON_0000948","UBERON_0000310","UBERON_0002369","UBERON_0000029","UBERON_0001013","UBERON_0001134","CL_0000738","UBERON_0001871","UBERON_0006618","UBERON_0001621","UBERON_0002421","UBERON_0001000","UBERON_0000998","UBERON_0000473","UBERON_0001301","UBERON_0000970","UBERON_0002372","UBERON_0002048","UBERON_0001876","UBERON_0003126","UBERON_0002185","UBERON_0001021","UBERON_0002037","UBERON_0002245","UBERON_0002113","UBERON_0001225","UBERON_0002046","UBERON_0002371","UBERON_0001870","UBERON_0000451","UBERON_0000007","UBERON_0000947","UBERON_0007650","UBERON_0002084","UBERON_0001153","UBERON_0002116","UBERON_0001052","UBERON_0000004","UBERON_0001723","UBERON_0002079","UBERON_0002146","UBERON_0002135","UBERON_0000989","UBERON_0001728","UBERON_0002240","UBERON_0000341","UBERON_0002134","UBERON_0001103","UBERON_0002107","UBERON_0000945","UBERON_0002106","UBERON_0002114","UBERON_0002110","UBERON_0001264","UBERON_0001155","UBERON_0002108","UBERON_0001154","UBERON_0001135","UBERON_0001255","UBERON_00024818","UBERON_0007844","UBERON_0001043","UBERON_0001044","UBERON_0001831","UBERON_0001736","UBERON_0000014","UBERON_0000178","UBERON_0001981","UBERON_0001637","CL_0000236","CL_0000084","CL_0000623","CL_0000576","CL_0000233","UBERON_0001954","UBERON_0000966","UBERON_0001706","UBERON_0000167","UBERON_0002367"]},{filename:"hordeum_vulgare.flower_parts.svg",species:"hordeum_vulgare",view:"flower_parts",ids:["PO_0009001","PO_0009030","PO_0009073","PO_0009072","PO_0009009","PO_0009066"]},{filename:"hordeum_vulgare.whole_plant.svg",species:"hordeum_vulgare",view:"whole_plant",ids:["PO_0020142","PO_0009005","PO_0009006","PO_0009049","PO_0025034"]},{filename:"macaca_mulatta.svg",species:"macaca_mulatta",view:"",ids:["UBERON_0000955","UBERON_0000451","UBERON_0002037","UBERON_0000948","UBERON_0002113","UBERON_0002107","UBERON_0000473"]},{filename:"monodelphis_domestica.svg",species:"monodelphis_domestica",view:"",ids:["UBERON_0000955","UBERON_0002037","UBERON_0000948","UBERON_0002113","UBERON_0002107","UBERON_0000473"]},{filename:"mus_musculus.brain.svg",species:"mus_musculus",view:"brain",ids:["UBERON_0001896","UBERON_0000956","UBERON_0000369","UBERON_0001894","UBERON_0000007","UBERON_0002037","UBERON_0002298","UBERON_0001891","UBERON_0001897","UBERON_0001898","UBERON_0000004","UBERON_0002259","EFO_0000530"]},{filename:"mus_musculus.female.svg",species:"mus_musculus",view:"female",ids:["UBERON_0000947","UBERON_0001009","UBERON_0001348","UBERON_0001347","UBERON_0000945","UBERON_0002114","UBERON_0001264","UBERON_0002106","UBERON_0002369","UBERON_0002113","UBERON_0001155","UBERON_0002108","UBERON_0001153","UBERON_0002115","UBERON_0002116","UBERON_0001043","UBERON_0002110","UBERON_0000996","UBERON_0000995","UBERON_0001255","UBERON_0001831","UBERON_0001736","UBERON_0001723","UBERON_0001211","UBERON_0000981","UBERON_0002371","UBERON_0007844","UBERON_0001377","UBERON_0014892","UBERON_0002240","UBERON_0001103","UBERON_0002103","UBERON_0001645","UBERON_0000970","UBERON_0001242","UBERON_0000955","UBERON_0000948","UBERON_0002107","UBERON_0001322","UBERON_0001981","UBERON_0000014","UBERON_0001911","UBERON_0003134","UBERON_0000990","UBERON_0000029","UBERON_0001132","UBERON_0002370","UBERON_0002046","UBERON_0002048","UBERON_0000010","UBERON_0003126"]},{filename:"mus_musculus.male.svg",species:"mus_musculus",view:"male",ids:["UBERON_0000947","UBERON_0001348","UBERON_0001347","UBERON_0000945","UBERON_0002114","UBERON_0001264","UBERON_0002106","UBERON_0002369","UBERON_0002113","UBERON_0001155","UBERON_0002108","UBERON_0001153","UBERON_0002115","UBERON_0002116","UBERON_0001043","UBERON_0002110","UBERON_0001831","UBERON_0001736","UBERON_0000029","UBERON_0000998","UBERON_0000989","UBERON_0000981","UBERON_0002371","UBERON_0007844","UBERON_0001377","UBERON_0002240","UBERON_0002048","UBERON_0001103","UBERON_0003126","UBERON_0002103","UBERON_0001645","UBERON_0001322","UBERON_0001242","UBERON_0002107","UBERON_0000948","UBERON_0000955","UBERON_0014892","UBERON_0001009","UBERON_0001981","UBERON_0000014","UBERON_0001132","UBERON_0001211","UBERON_0002367","UBERON_0001000","UBERON_0001301","UBERON_0000473","UBERON_0001255","UBERON_0002370","UBERON_0000010","UBERON_0000970","UBERON_0001723"]},{filename:"oryza_sativa.flower_parts.svg",species:"oryza_sativa",view:"flower_parts",ids:["PO_0009010","PO_0009009","PO_0009089","PO_0009030","PO_0009066"]},{filename:"oryza_sativa.whole_plant.svg",species:"oryza_sativa",view:"whole_plant",ids:["PO_0025034","PO_0009005","PO_0009049","PO_0009006","PO_0005052"]},{filename:"papio_anubis.svg",species:"papio_anubis",view:"",ids:["UBERON_0000948","UBERON_0002107","UBERON_0000945","UBERON_0001155","UBERON_0002371","UBERON_0002113","UBERON_0002106","UBERON_0014892","UBERON_0002370","UBERON_0000955","UBERON_0001871","UBERON_0001870","UBERON_0000007","UBERON_0002048","UBERON_0000029","UBERON_0002037"]},{filename:"rattus_norvegicus.svg",species:"rattus_norvegicus",view:"",ids:["UBERON_0000955","UBERON_0002113","CL_0000336","UBERON_0001388","UBERON_0000948","UBERON_0002107","UBERON_0002048","UBERON_0002106","UBERON_0002370","UBERON_0000995","UBERON_0000473","UBERON_0001155"]},{filename:"solanum_lycopersicum.flower_parts.svg",species:"solanum_lycopersicum",view:"flower_parts",ids:["PO_0009084","PO_0009030","PO_0009072","PO_0009073","PO_0009074","PO_0009066","PO_0009010"]},{filename:"solanum_lycopersicum.whole_plant.svg",species:"solanum_lycopersicum",view:"whole_plant",ids:["PO_0025034","PO_0000056","PO_0009046","PO_0009001","PO_0009005"]},{filename:"solanum_tuberosum.svg",species:"solanum_tuberosum",view:"",ids:[]},{filename:"sorghum_bicolor.flower_parts.svg",species:"sorghum_bicolor",view:"flower_parts",ids:["PO_0009049","PO_0009051","PO_0009001","PO_0009009","PO_0009089","PO_0009066","PO_0009030"]},{filename:"sorghum_bicolor.whole_plant.svg",species:"sorghum_bicolor",view:"whole_plant",ids:["PO_0009006","PO_0006079","PO_0009047","PO_0000230","PO_0009049","PO_0025034","PO_0009005"]},{filename:"tetraodon_nigroviridis.svg",species:"tetraodon_nigroviridis",view:"",ids:["UBERON_0000955","UBERON_0000948","UBERON_0002113","UBERON_0014892"]},{filename:"triticum_aestivum.flower_parts.svg",species:"triticum_aestivum",view:"flower_parts",ids:["PO_0020033","PO_0020031","PO_0009089","PO_0009085","PO_0009086","PO_0009084","PO_0009009","PO_0009001","PO_0009088","PO_0009030","PO_0009066"]},{filename:"triticum_aestivum.whole_plant.svg",species:"triticum_aestivum",view:"whole_plant",ids:["PO_0009047","PO_0009005","PO_0009049","PO_0025034"]},{filename:"xenopus_tropicalis.svg",species:"xenopus_tropicalis",view:"",ids:["UBERON_0000955","UBERON_0002113","UBERON_0014892","UBERON_0000948","UBERON_0002107"]},{filename:"zea_mays.flower_parts.svg",species:"zea_mays",view:"flower_parts",ids:["PO_0009001","PO_0020033","PO_0020031","PO_0020136","PO_0025597","PO_0009066","PO_0009009","PO_0009089","PO_0009084"]},{filename:"zea_mays.whole_plant.svg",species:"zea_mays",view:"whole_plant",ids:["PO_0020126","PO_0020136","PO_0020142","PO_0020127","PO_0009005","PO_0009074","PO_0025034"]}]},,,,,,,,,,,,,,,,,,,/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.default=void 0;var r=n(/*! react */8),i=s(r),o=n(/*! react-dom */28),a=s(o),_=n(/*! ./Anatomogram */54),u=s(_),c=function(e,t){a.default.render(i.default.createElement(u.default,e),document.getElementById(t))};t.default=u.default,t.render=c},/*!****************************!*\
  !*** ./src/Anatomogram.js ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),u=n(/*! react */8),c=s(u),l=n(/*! prop-types */12),f=s(l),O=n(/*! ./Switcher */55),p=s(O),d=n(/*! ./AnatomogramSvg */70),R=s(d),E=n(/*! ./Assets */25),U=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectedView:(0,E.getDefaultView)(e.species)},n._switchAnatomogramView=n._switchAnatomogramView.bind(n),n}return o(t,e),_(t,[{key:"_switchAnatomogramView",value:function(e){this.setState({selectedView:e})}},{key:"componentWillReceiveProps",value:function(e){e.species!==this.props.species&&this.setState({selectedView:(0,E.getDefaultView)(e.species)})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(p.default,{species:this.props.species,selectedView:this.state.selectedView,onChangeView:this._switchAnatomogramView}),c.default.createElement(R.default,a({},this.props,{selectedView:this.state.selectedView})))}}]),t}(c.default.Component);U.propTypes={species:f.default.string.isRequired,showIds:f.default.arrayOf(f.default.string),highlightIds:f.default.arrayOf(f.default.string),selectIds:f.default.arrayOf(f.default.string),showColour:f.default.string,highlightColour:f.default.string,selectColour:f.default.string,onMouseOver:f.default.func,onMouseOut:f.default.func,onClick:f.default.func},U.defaultProps={showColour:"grey",highlightColour:"red",selectColour:"purple",showOpacity:.4,highlightOpacity:.4,selectOpacity:.4,onMouseOver:function(){},onMouseOut:function(){},onClick:function(){}},t.default=U},/*!*************************!*\
  !*** ./src/Switcher.js ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(/*! react */8),i=s(r),o=n(/*! prop-types */12),a=s(o),_=n(/*! ./Assets */25);n(/*! ./Switcher.css */56);var u=function(e,t){/*! ./img */
return n(59)("./"+e+"."+(e===t?"":"un")+"selected.png")},c=function(e){var t=e.species,n=e.selectedView,s=e.onChangeView;return i.default.createElement("div",{className:"gxa-anatomogram-switcher"},(0,_.getAnatomogramViews)(t).map(function(e){return i.default.createElement("img",{key:e,className:"gxa-anatomogram-switcher-icon",onClick:function(){return s(e)},src:u(e,n)})}))};c.propTypes={species:a.default.string.isRequired,selectedView:a.default.string,onChangeView:a.default.func.isRequired},t.default=c},/*!**************************!*\
  !*** ./src/Switcher.css ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){var s=n(/*! !../node_modules/css-loader!./Switcher.css */57);"string"==typeof s&&(s=[[e.i,s,""]]);var r={};r.transform=void 0;n(/*! ../node_modules/style-loader/lib/addStyles.js */27)(s,r);s.locals&&(e.exports=s.locals)},/*!****************************************************!*\
  !*** ./node_modules/css-loader!./src/Switcher.css ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){t=e.exports=n(/*! ../node_modules/css-loader/lib/css-base.js */26)(void 0),t.push([e.i,".gxa-anatomogram-switcher{display:inline-block;vertical-align:top;width:10%;max-width:44px}.gxa-anatomogram-switcher-icon{border:1px solid #ccc;border-radius:4px;width:100%;height:auto;padding:2px}.gxa-anatomogram-switcher-icon:hover{border:1px solid orange;background:#fafad2;cursor:pointer}",""])},/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,s=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:s+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},/*!***************************************!*\
  !*** ./src/img ^\.\/.*selected\.png$ ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){function s(e){return n(r(e))}function r(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./brain.selected.png":60,"./brain.unselected.png":61,"./female.selected.png":62,"./female.unselected.png":63,"./flower_parts.selected.png":64,"./flower_parts.unselected.png":65,"./male.selected.png":66,"./male.unselected.png":67,"./whole_plant.selected.png":68,"./whole_plant.unselected.png":69};s.keys=function(){return Object.keys(i)},s.resolve=r,e.exports=s,s.id=59},/*!************************************!*\
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
function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */8),o=s(i),a=n(/*! prop-types */12),_=s(a),u=n(/*! react-svg */71),c=s(u);n(/*! ./AnatomogramSvg.css */72);var l=function(e,t){return Array.isArray(e)&&Array.isArray(t)?e.filter(function(e){return!t.includes(e)}):e},f=function(e){function t(e){if(n)for(var s=0;s<n.children.length;s++)if(n.children[s].id===e)return n.children[s].attributes["xlink:href"]?t(n.children[s].attributes["xlink:href"].value.substring(1)):n.children[s]}var n=function(e){for(var t=e.getElementsByTagName("g"),n=0;n<t.length;n++)if("LAYER_EFO"===t[n].id)return t[n]}(e);return t},O=function(e,t,n,s){e.forEach(function(e){var r=s(e);r&&(r.style.fill=t,r.style.opacity=n)})},p=function(e,t,n,s,r,i){e.forEach(function(e){var o=i(e);if(o){o.addEventListener("mouseover",function(){o.style.fill=t,o.style.opacity=n,s(e)});var a=o.style.fill,_=o.style.opacity;o.addEventListener("mouseout",function(){o.style.fill=a,o.style.opacity=_,r(e)})}})},d=function(e,t,n,s){e.forEach(function(e){var r=s(e);r&&r.addEventListener(t,function(){n(e)})})},R=function(e,t){var n=t.showIds,s=t.showColour,i=t.showOpacity,o=t.highlightIds,a=t.highlightColour,_=t.highlightOpacity,u=t.selectIds,c=t.selectColour,f=t.selectOpacity,R=t.onMouseOver,E=t.onMouseOut,U=t.onClick,N=l(n,[].concat(r(o),r(u))),B=l(o,u);O(N,s,i,e),O(B,a,_,e),O(u,c,f,e),p(N,a,_,R,E,e),p(B,a,_+.2,R,E,e),p(u,c,f+.2,R,E,e),d([].concat(r(N),r(B),r(u)),"click",U,e)},E=function(e,t){/*! ./svg */
return n(74)("./"+e+(t?"."+t:"")+".svg")},U=function(e){return o.default.createElement("div",{className:"gxa-anatomogram-svg-wrapper"},o.default.createElement(c.default,{path:E(e.species,e.selectedView),callback:function(t){R(f(t),e)},className:"gxa-anatomogram-svg",style:{paddingLeft:e.selectedView?"10px":""}}))};U.propTypes={species:_.default.string.isRequired,selectedView:_.default.string,showIds:_.default.arrayOf(_.default.string).isRequired,highlightIds:_.default.arrayOf(_.default.string).isRequired,selectIds:_.default.arrayOf(_.default.string).isRequired,showColour:_.default.string.isRequired,highlightColour:_.default.string.isRequired,selectColour:_.default.string.isRequired,showOpacity:_.default.number.isRequired,highlightOpacity:_.default.number.isRequired,selectOpacity:_.default.number.isRequired,onMouseOver:_.default.func.isRequired,onMouseOut:_.default.func.isRequired,onClick:_.default.func.isRequired},t.default=U},,/*!********************************!*\
  !*** ./src/AnatomogramSvg.css ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){var s=n(/*! !../node_modules/css-loader!./AnatomogramSvg.css */73);"string"==typeof s&&(s=[[e.i,s,""]]);var r={};r.transform=void 0;n(/*! ../node_modules/style-loader/lib/addStyles.js */27)(s,r);s.locals&&(e.exports=s.locals)},/*!**********************************************************!*\
  !*** ./node_modules/css-loader!./src/AnatomogramSvg.css ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){t=e.exports=n(/*! ../node_modules/css-loader/lib/css-base.js */26)(void 0),t.push([e.i,".gxa-anatomogram-svg-wrapper{display:inline-block;vertical-align:top;width:90%}.gxa-anatomogram-svg{width:100%;height:auto}",""])},/*!*******************************!*\
  !*** ./src/svg ^\.\/.*\.svg$ ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
function(e,t,n){function s(e){return n(r(e))}function r(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./anolis_carolinensis.svg":75,"./arabidopsis_thaliana.svg":76,"./bos_taurus.svg":77,"./brachypodium_distachyon.flower_parts.svg":78,"./brachypodium_distachyon.whole_plant.svg":79,"./gallus_gallus.svg":80,"./homo_sapiens.brain.svg":81,"./homo_sapiens.female.svg":82,"./homo_sapiens.male.svg":83,"./hordeum_vulgare.flower_parts.svg":84,"./hordeum_vulgare.whole_plant.svg":85,"./macaca_mulatta.svg":86,"./monodelphis_domestica.svg":87,"./mus_musculus.brain.svg":88,"./mus_musculus.female.svg":89,"./mus_musculus.male.svg":90,"./oryza_sativa.flower_parts.svg":91,"./oryza_sativa.whole_plant.svg":92,"./papio_anubis.svg":93,"./rattus_norvegicus.svg":94,"./solanum_lycopersicum.flower_parts.svg":95,"./solanum_lycopersicum.whole_plant.svg":96,"./solanum_tuberosum.svg":97,"./sorghum_bicolor.flower_parts.svg":98,"./sorghum_bicolor.whole_plant.svg":99,"./tetraodon_nigroviridis.svg":100,"./triticum_aestivum.flower_parts.svg":101,"./triticum_aestivum.whole_plant.svg":102,"./xenopus_tropicalis.svg":103,"./zea_mays.flower_parts.svg":104,"./zea_mays.whole_plant.svg":105};s.keys=function(){return Object.keys(i)},s.resolve=r,e.exports=s,s.id=74},/*!*****************************************!*\
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
function(e,t,n){e.exports=n.p+"9c89f587f71426483e6bfe764220aa18.svg"}]),[53]);