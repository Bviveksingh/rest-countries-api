!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=311)}({308:function(e,n,t){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],i=0;i<e.length;i++){var o=e[i],l=n.base?o[0]+n.base:o[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var d=c(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:h(f,n),references:1}),r.push(u)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,m=0;function h(e,n){var t,r,i;if(n.singleton){var o=m++;t=g||(g=s(n)),r=f.bind(null,t,o,!1),i=f.bind(null,t,o,!0)}else t=s(n),r=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=c(t[r]);a[i].references--}for(var o=l(e,n),s=0;s<t.length;s++){var u=c(t[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=o}}}},309:function(e,n,t){(n=t(310)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap);"]),n.push([e.i,"*{font-size:20px;margin:0;padding:0;box-sizing:border-box}body{font-family:'Nunito Sans', sans-serif;height:100%;background-color:#fafafa}#main{width:100%;color:#111517}@media screen and (max-width: 1440px){#header{width:100%;height:100%;height:60px;display:flex;justify-content:space-between;align-items:center;background-color:#fff;box-shadow:0px 1px 1px 2px #f5f5f5}}@media screen and (max-width: 1440px){#header #header-main{margin-left:70px;cursor:pointer}#header #header-main h3{font-weight:800}}@media screen and (max-width: 425px){#header #header-main{margin-left:20px}#header #header-main h3{font-size:0.9rem}}@media screen and (max-width: 1440px){#header #header-mode{margin-right:70px;cursor:pointer}#header #header-mode #moon-icon{font-size:12px;margin-right:5px}#header #header-mode h4{display:inline;font-size:0.7rem;font-weight:600}}@media screen and (max-width: 425px){#header #header-mode{margin-right:20px}}#loader{display:none;position:absolute;width:60px;height:60px;top:50%;left:50%;border:7px solid #f3f3f3;border-top:7px solid #2574a9;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}@media screen and (max-width: 1440px){#toggle-section{padding:20px 70px;width:100%;height:100%}}@media screen and (max-width: 425px){#toggle-section{padding:20px 20px}}@media screen and (max-width: 1440px){#toggle-section #countries-list{width:100%;height:100%;display:flex;flex-direction:column}}@media screen and (max-width: 1440px){#toggle-section #single-country-detail{width:100%;height:100vh}}#countries-list{width:100%;height:100%}@media screen and (max-width: 1440px){#countries-list #search_filter-container{width:100%;height:70px;display:flex;justify-content:space-between;align-items:center}}@media screen and (max-width: 425px){#countries-list #search_filter-container{height:100px;flex-direction:column;justify-content:space-between;align-items:flex-start;margin-bottom:20px}}@media screen and (max-width: 1440px){#countries-list #search_filter-container #search-container{position:relative;width:100%;height:100%;max-width:350px;height:40px;background-color:#fff;border-radius:3px;display:flex;justify-content:space-evenly;align-items:center;box-shadow:2px 1px 5px 1px #f5f5f5}}#countries-list #search_filter-container #search-container #search-input{width:80%;font-size:0.67rem;color:#858585;font-weight:300;border:transparent}#countries-list #search_filter-container #search-container #search-icon{font-size:0.8rem}@media screen and (max-width: 1440px){#countries-list #search_filter-container #filter-container{width:100%;height:100%;max-width:170px;height:45px;background-color:#fff;display:flex;flex-direction:column;border-radius:3px;box-shadow:2px 1px 5px 1px #f5f5f5}}#countries-list #search_filter-container #filter-container #select-element{width:100%;height:100%;cursor:pointer;display:flex;align-items:center;justify-content:space-evenly}#countries-list #search_filter-container #filter-container #select-element #selected-value{font-size:0.7rem;font-weight:600}#countries-list #search_filter-container #filter-container #select-element #down-icon{font-size:0.7rem}@media screen and (max-width: 1440px){#countries-list #search_filter-container #filter-container #select-options{display:none;box-shadow:2px 1px 5px 1px #f5f5f5;margin-top:7px;cursor:pointer;padding:15px 20px;width:100%;max-width:170px;position:absolute;top:21%;background:#fff;flex-direction:column;align-items:flex-start;border-radius:4px}}@media screen and (max-width: 425px){#countries-list #search_filter-container #filter-container #select-options{margin-top:55px}}#countries-list #search_filter-container #filter-container #select-options .select-option{margin-bottom:5px;font-size:0.7rem;font-weight:600}#countries-list #search_filter-container #filter-container #select-options .select-option:last-child{margin-bottom:0px}#countries-list #countries{margin-top:20px;width:100%;height:100%;display:grid;justify-content:center;justify-items:center;grid-template-columns:repeat(auto-fit, minmax(12rem, 1fr));column-gap:70px;row-gap:70px}#countries-list #countries .country{width:250px;height:290px;display:flex;flex-direction:column;border-radius:12px;box-shadow:2px 2px 2px 0px #f5f5f5;background-color:#fff}#countries-list #countries .country .country-flag{width:100%;height:45%;cursor:pointer}#countries-list #countries .country .country-flag .flag-image{width:100%;height:100%;object-fit:cover;border-bottom-left-radius:0px;border-bottom-right-radius:0px;border-top-left-radius:12px;border-top-right-radius:12px}#countries-list #countries .country .country-details{padding:25px 20px}#countries-list #countries .country .country-details .country-region,#countries-list #countries .country .country-details .country-capital,#countries-list #countries .country .country-details .country-population,#countries-list #countries .country .country-details .population-number,#countries-list #countries .country .country-details .region-name,#countries-list #countries .country .country-details .capital-name{font-size:0.65rem;font-weight:600;margin-bottom:5px}#countries-list #countries .country .country-details .capital-name{margin-bottom:0px}#countries-list #countries .country .country-details .country-name{font-weight:800;font-size:0.8rem;margin-bottom:15px;cursor:pointer}#countries-list #countries .country .country-details .region-name,#countries-list #countries .country .country-details .capital-name,#countries-list #countries .country .country-details .population-number{font-weight:300}#countries-list #countries .country:last-child{margin-right:0px}@media screen and (max-width: 1440px){#single-country-detail{width:100%;height:100vh;padding-top:20px;display:flex;flex-direction:column;display:none}}@media screen and (max-width: 425px){#single-country-detail{padding-top:5px;justify-content:space-between}}@media screen and (max-width: 1440px){#single-country-detail #back-button-container{width:120px;height:40px;display:flex;justify-content:center;align-items:center;background-color:#fff;border-radius:5px;box-shadow:2px 2px 7px 4px #f5f5f5;border:0.5px solid #f5f5f5;cursor:pointer}}@media screen and (max-width: 425px){#single-country-detail #back-button-container{padding:10px 20px}}@media screen and (max-width: 1440px){#single-country-detail #back-button-container #back-icon{margin-right:15px;font-size:0.8rem}}@media screen and (max-width: 1440px){#single-country-detail #back-button-container #back-button{font-size:0.7rem;font-weight:300}}@media screen and (max-width: 1440px){#single-country-detail #flag_info{padding-top:50px;width:100%;height:500px;display:flex;justify-content:space-between;flex-wrap:wrap}}@media screen and (max-width: 425px){#single-country-detail #flag_info{flex-direction:column;justify-content:space-evenly;height:auto;padding-top:20px}}@media screen and (max-width: 1440px){#single-country-detail #flag_info #flag{width:42%;height:80%}#single-country-detail #flag_info #flag #flag-image{width:100%;height:100%}}@media screen and (max-width: 425px){#single-country-detail #flag_info #flag{width:100%;height:200px}}@media screen and (max-width: 1440px){#single-country-detail #flag_info #info{width:50%;display:flex;flex-direction:column;padding-top:60px}}@media screen and (max-width: 425px){#single-country-detail #flag_info #info{width:100%}}@media screen and (max-width: 1440px){#single-country-detail #flag_info #info #name{margin-bottom:25px;font-size:1.2rem;font-weight:800}}@media screen and (max-width: 425px){#single-country-detail #flag_info #info #name{font-size:1rem}}@media screen and (max-width: 1440px){#single-country-detail #flag_info #info #details{display:flex;justify-content:space-between}}@media screen and (max-width: 425px){#single-country-detail #flag_info #info #details{flex-direction:column}}@media screen and (max-width: 425px){#single-country-detail #flag_info #info #details-2{margin-top:30px}}@media screen and (max-width: 1440px){#single-country-detail #flag_info #info #native-name,#single-country-detail #flag_info #info #native-name-value,#single-country-detail #flag_info #info #population,#single-country-detail #flag_info #info #population-value,#single-country-detail #flag_info #info #region,#single-country-detail #flag_info #info #region-value,#single-country-detail #flag_info #info #sub-region,#single-country-detail #flag_info #info #sub-region-value,#single-country-detail #flag_info #info #capital,#single-country-detail #flag_info #info #capital-value,#single-country-detail #flag_info #info #top-level-domain,#single-country-detail #flag_info #info #top-level-domain-value,#single-country-detail #flag_info #info #currencies,#single-country-detail #flag_info #info #currencies-value,#single-country-detail #flag_info #info #languages,#single-country-detail #flag_info #info #languages-value,#single-country-detail #flag_info #info #borders p{font-size:0.7rem}}@media screen and (max-width: 425px){#single-country-detail #flag_info #info #native-name,#single-country-detail #flag_info #info #native-name-value,#single-country-detail #flag_info #info #population,#single-country-detail #flag_info #info #population-value,#single-country-detail #flag_info #info #region,#single-country-detail #flag_info #info #region-value,#single-country-detail #flag_info #info #sub-region,#single-country-detail #flag_info #info #sub-region-value,#single-country-detail #flag_info #info #capital,#single-country-detail #flag_info #info #capital-value,#single-country-detail #flag_info #info #top-level-domain,#single-country-detail #flag_info #info #top-level-domain-value,#single-country-detail #flag_info #info #currencies,#single-country-detail #flag_info #info #currencies-value,#single-country-detail #flag_info #info #languages,#single-country-detail #flag_info #info #languages-value,#single-country-detail #flag_info #info #borders p{font-size:0.6rem}}@media screen and (max-width: 1440px){#single-country-detail #flag_info #info #native-name,#single-country-detail #flag_info #info #population,#single-country-detail #flag_info #info #region,#single-country-detail #flag_info #info #sub-region,#single-country-detail #flag_info #info #capital,#single-country-detail #flag_info #info #top-level-domain,#single-country-detail #flag_info #info #currencies,#single-country-detail #flag_info #info #languages,#single-country-detail #flag_info #info #borders p{margin-bottom:8px;font-weight:600}}@media screen and (max-width: 1440px){#single-country-detail #flag_info #info #native-name-value,#single-country-detail #flag_info #info #population-value,#single-country-detail #flag_info #info #region-value,#single-country-detail #flag_info #info #sub-region-value,#single-country-detail #flag_info #info #capital-value,#single-country-detail #flag_info #info #top-level-domain-value,#single-country-detail #flag_info #info #currencies-value,#single-country-detail #flag_info #info #languages-value{font-weight:300}}@media screen and (max-width: 1440px){#single-country-detail #flag_info #info #borders{margin-top:50px;display:flex;justify-content:flex-start;align-items:center;width:100%}}@media screen and (max-width: 425px){#single-country-detail #flag_info #info #borders{margin-top:20px;flex-direction:column;align-items:flex-start}}@media screen and (max-width: 1440px){#single-country-detail #flag_info #info #borders #border-countries{margin-left:10px}}@media screen and (max-width: 1440px){#single-country-detail #flag_info #info #borders #border-countries .border-country{font-size:0.5rem;padding:10px 30px;font-weight:300;margin-left:5px;background:transparent;border:0px;box-shadow:3px 3px 3px 2px #f5f5f5;cursor:pointer}}\n",""]),n.locals={"lightMode-background":"#fafafa","lightMode-text":"#111517","lightMode-elements":"#fff","lightMode-input":"#858585","darkMode-background":"#202c37","darkMode-elements":"#2b3945","darkMode-text":"#fff"},e.exports=n},310:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([i]).join("\n")}var a,c,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},311:function(e,n,t){"use strict";t.r(n);var r=t(5),i=t.n(r);function o(e,n,t,r,i,o,a){try{var c=e[o](a),l=c.value}catch(e){return void t(e)}c.done?n(l):Promise.resolve(l).then(r,i)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function c(e){o(a,r,i,c,l,"next",e)}function l(e){o(a,r,i,c,l,"throw",e)}c(void 0)}))}}function c(){return l.apply(this,arguments)}function l(){return(l=a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return u.apply(this,arguments)}function u(){return(u=a(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://restcountries.eu/rest/v2/region/".concat(n)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=a(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://restcountries.eu/rest/v2/name/".concat(n)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return g.apply(this,arguments)}function g(){return(g=a(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://restcountries.eu/rest/v2/name/".concat(n,"?fullText=true")).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=a(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://restcountries.eu/rest/v2/alpha/".concat(n)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){for(var n=e.toString().split("."),t=n[0],r=n.length>1?"."+n[1]:"",i=/(\d+)(\d{3})/;i.test(t);)t=t.replace(i,"$1,$2");return t+r}var y=function(e){return new Promise((function(n){var t=document.getElementById("countries");t.innerHTML="";for(var r=0;r<e.length;r++){var i=document.createElement("div");i.className="country";var o=document.createElement("div");o.className="country-flag";var a=document.createElement("img");a.className="flag-image",a.src=e[r].flag,o.appendChild(a);var c=document.createElement("div");c.className="country-details";var l=document.createElement("p");l.className="country-name",l.textContent=e[r].name;var s=document.createElement("p");s.className="country-population",s.innerHTML="Population:&nbsp";var u=document.createElement("span");u.className="population-number",u.innerHTML=x(e[r].population),s.appendChild(u);var d=document.createElement("p");d.className="country-region",d.innerHTML="Region:&nbsp";var f=document.createElement("span");f.className="region-name",f.innerHTML=e[r].region,d.appendChild(f);var p=document.createElement("p");p.className="country-capital",p.innerHTML="Capital:&nbsp";var g=document.createElement("span");g.className="capital-name",g.innerHTML=e[r].capital,p.appendChild(g),i.appendChild(o),i.appendChild(c),c.appendChild(l),c.appendChild(s),c.appendChild(d),c.appendChild(p),t.append(i)}n(!0)}))};function v(e,n,t,r,i,o,a){try{var c=e[o](a),l=c.value}catch(e){return void t(e)}c.done?n(l):Promise.resolve(l).then(r,i)}function w(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){v(o,r,i,a,c,"next",e)}function c(e){v(o,r,i,a,c,"throw",e)}a(void 0)}))}}function b(){return(b=w(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=w(regeneratorRuntime.mark((function e(t){var r,i,o,a,c,l,s,u,d,f,p,g,m,h,y,v,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:if(r=e.sent,i=Array.isArray(n)?n[0]:n,r){for(o=document.getElementById("name"),a=document.getElementById("flag-image"),c=document.getElementById("native-name-value"),l=document.getElementById("population-value"),s=document.getElementById("region-value"),u=document.getElementById("sub-region-value"),d=document.getElementById("capital-value"),f=document.getElementById("top-level-domain-value"),p=document.getElementById("currencies-value"),g=document.getElementById("languages-value"),m=document.getElementById("border-countries"),o.innerHTML=i.name,a.src=i.flag,c.innerHTML=i.nativeName,l.innerHTML=x(i.population),s.innerHTML=i.region,u.innerHTML=i.subregion,d.innerHTML=i.capital,f.innerHTML=i.topLevelDomain[0],h=0;h<i.currencies.length;h++)h>0&&h<i.currencies.length&&(p.innerHTML+=", "),p.innerHTML+=i.currencies[h].name;for(y=0;y<i.languages.length;y++)y>0&&y<i.languages.length&&(g.innerHTML+=", "),g.innerHTML+=i.languages[y].name;for(v=0;v<i.borders.length;v++)(w=document.createElement("button")).className="border-country",w.innerHTML=i.borders[v],m.appendChild(w)}t(i.name);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return new Promise((function(e){var n=document.getElementById("name"),t=document.getElementById("flag-image"),r=document.getElementById("native-name-value"),i=document.getElementById("population-value"),o=document.getElementById("region-value"),a=document.getElementById("sub-region-value"),c=document.getElementById("capital-value"),l=document.getElementById("top-level-domain-value"),s=document.getElementById("currencies-value"),u=document.getElementById("languages-value"),d=document.getElementById("border-countries");n.innerHTML="",t.src="",r.innerHTML="",i.innerHTML="",o.innerHTML="",a.innerHTML="",c.innerHTML="",l.innerHTML="",s.innerHTML="",u.innerHTML="",d.innerHTML="",e(!0)}))}var k=function(e){return b.apply(this,arguments)};function M(e){if(sessionStorage.getItem("country")){var n=sessionStorage.getItem("country").split(",");n.push(e),sessionStorage.setItem("country",n)}else sessionStorage.setItem("country",e)}function E(){return sessionStorage.getItem("country").split(",")}function I(){var e=sessionStorage.getItem("country").split(",");e.pop(),sessionStorage.setItem("country",e)}function L(){sessionStorage.removeItem("country")}function B(){return sessionStorage.getItem("mode")}function C(){var e,n,t,r;e=B(),n=document.body,t=document.getElementById("main"),r=document.getElementById("header"),t.style.color="0"===e?i.a["lightMode-text"]:i.a["darkMode-text"],n.style.backgroundColor="0"===e?i.a["lightMode-background"]:i.a["darkMode-background"],r.style.backgroundColor="0"===e?i.a["lightMode-elements"]:i.a["darkMode-elements"],r.style.boxShadow="0"===e?"0px 1px 1px 2px #f5f5f5":"0px 0.1px 3px 2px #202020",r.style.color="0"===e?i.a["lightMode-text"]:i.a["darkMode-text"],function(){var e=B(),n=document.getElementById("search-container"),t=document.getElementById("search-input"),r=document.getElementById("filter-container"),o=document.getElementById("select-options");r.style.backgroundColor="0"===e?i.a["lightMode-elements"]:i.a["darkMode-elements"],r.style.boxShadow="0"===e?"2px 1px 5px 1px #f5f5f5":"2px 1px 5px 1px ".concat(i.a["darkMode-elements"]),o.style.backgroundColor="0"===e?i.a["lightMode-elements"]:i.a["darkMode-elements"],o.style.boxShadow="0"===e?"2px 1px 5px 1px #f5f5f5":"2px 1px 5px 1px ".concat(i.a["darkMode-elements"]),n.style.backgroundColor="0"===e?i.a["lightMode-elements"]:i.a["darkMode-elements"],n.style.boxShadow="0"===e?"2px 1px 5px 1px #f5f5f5":"2px 1px 5px 1px ".concat(i.a["darkMode-elements"]),t.style.color="0"===e?i.a["lightMode-text"]:i.a["darkMode-text"],t.style.backgroundColor="0"===e?i.a["lightMode-elements"]:i.a["darkMode-elements"]}(),S(),T()}function S(){var e,n=B(),t=document.getElementsByClassName("country");e=n?"0"===n?i.a["lightMode-elements"]:i.a["darkMode-elements"]:i.a["lightMode-elements"];for(var r=0;r<t.length;r++)t[r].style.backgroundColor=e,t[r].style.boxShadow="2px 2px 2px 0px ".concat(e)}function T(){var e=B(),n=e&&"1"===e?i.a["darkMode-elements"]:i.a["lightMode-elements"],t=document.getElementById("back-button-container");t.style.boxShadow=e&&"1"===e?"none":"2px 2px 7px 4px #f5f5f5",t.style.backgroundColor=n,t.style.border=e&&"1"===e?"0.5px solid ".concat(i.a["darkMode-elements"]):"0.5px solid #f5f5f5";for(var r=document.getElementsByClassName("border-country"),o=0;o<r.length;o++)r[o].style.boxShadow="3px 3px 3px 2px ".concat(n)}function j(e,n,t,r,i,o,a){try{var c=e[o](a),l=c.value}catch(e){return void t(e)}c.done?n(l):Promise.resolve(l).then(r,i)}function R(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){j(o,r,i,a,c,"next",e)}function c(e){j(o,r,i,a,c,"throw",e)}a(void 0)}))}}function H(){return N.apply(this,arguments)}function N(){return(N=R(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q("loader"),L(),e.next=4,c();case 4:if(!(n=e.sent)){e.next=11;break}return Q("loader"),e.next=9,y(n);case 9:e.sent&&(S(),G());case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return P.apply(this,arguments)}function P(){return(P=R(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q("loader"),t=n.target.innerText.toLowerCase(),e.next=4,s(t);case 4:if(!(r=e.sent)){e.next=11;break}return Q("loader"),e.next=9,y(r);case 9:e.sent&&(S(),G());case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return A.apply(this,arguments)}function A(){return(A=R(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.target.value<1)){e.next=2;break}return e.abrupt("return");case 2:return Q("loader"),t=n.target.value.toLowerCase(),e.next=6,d(t);case 6:if(!(r=e.sent)){e.next=13;break}return Q("loader"),e.next=11,y(r);case 11:e.sent&&(S(),G());case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return q.apply(this,arguments)}function q(){return(q=R(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Q("loader"),"border-countries"!==n.target.parentElement.id){e.next=7;break}return e.next=4,F(n.target);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,D(n.target);case 9:t=e.sent;case 10:if(!t){e.next=16;break}return Q("loader"),e.next=14,k(t);case 14:(r=e.sent)&&(T(),$(),M(r.toLowerCase()));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return new Promise(function(){var n=R(regeneratorRuntime.mark((function n(t){var r,i,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Q("countries-list","flex"),r=e.parentElement.parentElement,i=r.querySelector(".country-name").innerHTML.toLowerCase(),n.next=5,p(i);case 5:o=n.sent,Q("single-country-detail","flex"),t(o);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}function F(e){return new Promise(function(){var n=R(regeneratorRuntime.mark((function n(t){var r,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.innerHTML.toLowerCase(),n.next=3,m(r);case 3:i=n.sent,t(i);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}function J(){return V.apply(this,arguments)}function V(){return(V=R(regeneratorRuntime.mark((function e(){var n,t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=E(),t=n[n.length-2]){e.next=8;break}Q("single-country-detail","flex"),Q("countries-list","flex"),H(),e.next=17;break;case 8:return I(),e.next=11,p(t);case 11:if(!(r=e.sent)){e.next=17;break}return e.next=15,k(r);case 15:e.sent&&(T(),$());case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){for(var e=document.getElementById("border-countries"),n=document.getElementById("back-button-container"),t=0;t<e.children.length;t++)e.children[t].addEventListener("click",U);n.addEventListener("click",J)}function G(){for(var e=document.getElementsByClassName("flag-image"),n=document.getElementsByClassName("country-name"),t=0;t<e.length;t++)e[t].addEventListener("click",U),n[t].addEventListener("click",U)}function K(){window.sessionStorage.getItem("mode")?"0"==window.sessionStorage.getItem("mode")?window.sessionStorage.setItem("mode","1"):"1"==window.sessionStorage.getItem("mode")&&window.sessionStorage.setItem("mode","0"):window.sessionStorage.setItem("mode","1"),C()}function Q(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"block",t=document.getElementById("".concat(e)),r=window.getComputedStyle(t,null).getPropertyValue("display");t.style.display=r===n?"none":n}window.onload=function(e){document.getElementById("header-mode").addEventListener("click",K),function(){document.getElementById("select-element").addEventListener("click",(function(){Q("select-options","flex")}));for(var e=document.getElementsByClassName("select-option"),n=0;n<e.length;n++)e[n].addEventListener("click",z),e[n].addEventListener("click",(function(){Q("select-options","flex")}))}(),document.getElementById("search-input").addEventListener("change",O),document.getElementById("header-main").addEventListener("click",(function(){var e=document.getElementById("countries-list");"none"===window.getComputedStyle(e,null).getPropertyValue("display")&&(Q("single-country-detail",flex),Q("countries-list","flex")),H()})),H()}},5:function(e,n,t){var r=t(308),i=t(309);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}}});