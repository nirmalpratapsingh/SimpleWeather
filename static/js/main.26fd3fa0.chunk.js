(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(46),o=c.n(r),i=c(10),n=c(45),s=c(68),l=c(69),d=c(31),u=c.n(d),j=c(37),p=c(6),f="SET_CITY",h="SET_WEATHER",b="CHANGE_TEMP_SCALE",m="SET_HOURLY_FORECAST",O="CHANGE_FORECAST_MODE",x=function(){var e=Object(j.a)(u.a.mark((function e(t,c){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/SimpleWeather",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY),e.next=4,fetch("https://api.weatherapi.com/v1/forecast.json?key=0f2c50e27cf144fa8c9160825232707&q=".concat(t,"&days=").concat(c,"&aqi=no&alerts=no"));case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,c){return e.apply(this,arguments)}}(),y=x,_=c(39),g=c.n(_),v=function(e,t,c){var a=function(e,t){for(var c=0,a=e.length-1;c<=a;){var r=Math.floor((c+a)/2),o=g()(e[r].time,"YYYY-MM-DD hh:mm").format("HH");if(o===t)return r;o>t?a=r-1:c=r+1}}(e,g()(c,"YYYY-MM-DD HH:mm").format("HH"));return e.slice(a).concat(t.slice(0,a))},S=function(e){return{type:f,payload:e}},D=function(e){return{type:h,payload:e}},w=function(e){return{type:b,payload:e}},F=function(e){return{type:O,payload:e}},C=function(e){return{type:m,payload:e.map((function(e){return{temp_c:e.temp_c,temp_f:e.temp_f,hour:e.time,isDay:e.is_day,code:e.condition.code,isRain:e.will_it_rain}}))}},N={location:"",responseLocation:"",country:"",temp_c:"",temp_f:"",condition:"",wind:"",pressure:"",humidity:"",code:"",isDay:"",tempScale:"celsius",hourlyForecast:[],threeDayForecast:[],forecastMod:"threeDay",localTime:""};var T=c(11),E="ADD_TO_FAVORITES",M="REMOVE_FROM_FAVORITES",I="GET_CITIES",k="UPDATE_TEMP",W=function(e){return{type:k,payload:e}},L={arrOfCities:[]};var R=function(e){return function(t){B.dispatch(function(e){return{type:E,payload:e}}(e))}},Y=function(e){return function(t){B.dispatch(function(e){return{type:M,payload:e}}(e))}},H=Object(l.composeWithDevTools)(Object(n.applyMiddleware)(s.a)),A=Object(n.combineReducers)({cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(p.a)(Object(p.a)({},e),{},{arrOfCities:[].concat(Object(T.a)(e.arrOfCities),[{city:t.payload.city,temp_c:t.payload.temp_c,temp_f:t.payload.temp_f,lastUpdated:t.payload.lastUpdated,isDay:t.payload.isDay,code:t.payload.code}])});case M:return Object(p.a)(Object(p.a)({},e),{},{arrOfCities:e.arrOfCities.filter((function(e){return e.city!==t.payload}))});case I:return Object(p.a)(Object(p.a)({},e),{},{arrOfCities:t.payload});case k:return Object(p.a)(Object(p.a)({},e),{},{arrOfCities:e.arrOfCities.map((function(e){return e.city===t.payload.location.name.toLowerCase()?Object(p.a)(Object(p.a)({},e),{},{temp_c:t.payload.current.temp_c.toFixed(),temp_f:t.payload.current.temp_f.toFixed(),lastUpdated:Date.now(),isDay:t.payload.current.is_day,code:t.payload.current.condition.code}):e}))});default:return e}},weatherData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(p.a)(Object(p.a)({},e),{},{location:t.payload.toLowerCase()});case h:return Object(p.a)(Object(p.a)({},e),{},{responseLocation:t.payload.location.name,country:t.payload.location.country,temp_c:t.payload.current.temp_c.toFixed(),temp_f:t.payload.current.temp_f.toFixed(),condition:t.payload.current.condition.text.toLowerCase(),wind:t.payload.current.wind_kph,pressure:t.payload.current.pressure_mb,humidity:t.payload.current.humidity,code:t.payload.current.condition.code,isDay:t.payload.current.is_day,threeDayForecast:t.payload.forecast.forecastday.map((function(e){return{date:e.date,temp_c:e.day.avgtemp_c,temp_f:e.day.avgtemp_f,isDay:"1",code:e.day.condition.code,condition:e.day.condition.text.toLowerCase()}})),localTime:t.payload.location.localtime});case m:return Object(p.a)(Object(p.a)({},e),{},{hourlyForecast:t.payload});case b:return Object(p.a)(Object(p.a)({},e),{},{tempScale:t.payload});case O:return Object(p.a)(Object(p.a)({},e),{},{forecastMod:t.payload});default:return e}}}),B=Object(n.createStore)(A,H),P=c(21),z=Object(P.a)(),U=c(14),V=(c(90),c(71)),J=c.n(V),K=c(125),G=c(1),q=function(e){return Object(G.jsx)(K.a,Object(p.a)(Object(p.a)({size:"large"},e),{},{children:Object(G.jsx)(J.a,{fontSize:"large"})}))},X=c(16),Q=function(){return Object(G.jsx)(X.b,{to:"/SimpleWeather",className:"cities-page__back-btn",children:Object(G.jsx)(q,{sx:{color:"#2D81FF","&.MuiIconButton-root:hover":{backgroundColor:"rgba(45, 129, 255, 0.02)"}}})})},Z=(c(94),c(25)),$=(c(60),c.p+"static/media/day-sprites.c832647d.svg"),ee=c.p+"static/media/night-sprites.9e480c26.svg",te=["color","code","isDay"],ce=function(e){var t=e.color,c=e.code,a=e.isDay,r=Object(Z.a)(e,te),o="".concat(a?$:ee,"#").concat(c);return Object(G.jsx)("svg",Object(p.a)(Object(p.a)({},r),{},{style:t,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:Object(G.jsx)("use",{href:o})}))},ae=Object(i.b)((function(e){return{cities:e.cities.arrOfCities,tempScale:e.weatherData.tempScale}}),(function(e){return{updateCityInStore:function(t){e(S(t))}}}))((function(e){var t=Object(U.g)();return e.cities.length>0?Object(G.jsxs)("div",{className:"flex cities-list",children:[Object(G.jsx)("div",{className:"blue-line"}),Object(G.jsx)("div",{className:"cities",children:e.cities.map((function(c){return Object(G.jsxs)("button",{onClick:function(){t.push("/SimpleWeather/cities/".concat(c.city)),e.updateCityInStore(c.city)},className:"cities__btn",children:[Object(G.jsx)("div",{children:c.city}),Object(G.jsxs)("div",{className:"cities__btn-group",children:[Object(G.jsx)(ce,{className:"cities__btn-icon",code:c.code,isDay:c.isDay,color:{fill:"#2D81FF"}}),Object(G.jsxs)("div",{children:["celsius"===e.tempScale?c.temp_c:c.temp_f,"\xb0"]})]})]},c.city)}))})]}):Object(G.jsxs)("div",{className:"flex cities-list",children:[Object(G.jsx)("div",{className:"blue-line"}),Object(G.jsxs)("div",{className:"cities-empty",children:[Object(G.jsx)("p",{children:"Oops!"}),Object(G.jsx)("p",{children:"You haven't added any city yet!"})]}),Object(G.jsx)("div",{className:"blue-line"})]})})),re=c(9),oe=c(124),ie=c(126),ne=Object(i.b)((function(e){return{tempScale:e.weatherData.tempScale}}),(function(e){return{changeTempScale:function(t){e(w(t))}}}))((function(e){localStorage.getItem("tempScale")||localStorage.setItem("tempScale","celsius");var t=Object(a.useState)(localStorage.getItem("tempScale")),c=Object(re.a)(t,2),r=c[0],o=c[1];return Object(G.jsxs)(oe.a,{color:"secondary",value:r,exclusive:!0,fullWidth:!0,sx:{"& .MuiToggleButton-root":{backgroundColor:"transparent",borderColor:"#F9FBFF",color:"#2d81ff",textTransform:"capitalize","&.Mui-selected":{backgroundColor:"#6BA6FF",color:"#ffffff"},"&.Mui-selected:hover":{backgroundColor:"#5096ff",color:"#ffffff"}},height:"24px"},onChange:function(){"celsius"===r?(o("fahrenheit"),e.changeTempScale("fahrenheit"),localStorage.setItem("tempScale","fahrenheit")):(o("celsius"),e.changeTempScale("celsius"),localStorage.setItem("tempScale","celsius"))},children:[Object(G.jsx)(ie.a,{value:"fahrenheit",sx:{borderRadius:"20px 0 0 20px"},children:"Fahrenheit"}),Object(G.jsx)(ie.a,{value:"celsius",sx:{borderRadius:"0 20px 20px 0"},children:"Celsius"})]})})),se=Object(i.b)((function(e){return{cities:e.cities.arrOfCities}}),(function(e){return{fetchCityTemp:function(t){e(function(e){return function(){var t=Object(j.a)(u.a.mark((function t(c){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:a=t.sent,B.dispatch(W(a)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Date.now();return Object(a.useEffect)((function(){e.cities.forEach((function(c){t-c.lastUpdated>9e4&&e.fetchCityTemp(c.city),localStorage.setItem("cities",JSON.stringify(e.cities))}))}),[]),Object(G.jsxs)("div",{className:"app app-outlined cities-page",children:[Object(G.jsx)(Q,{}),Object(G.jsxs)("div",{className:"cities-page__list",children:[Object(G.jsx)("h1",{className:"cities-page-header",children:"Favorite cities"}),Object(G.jsx)(ae,{})]}),Object(G.jsxs)("div",{className:"cities-page__settings",children:[Object(G.jsx)("h1",{className:"cities-page-header",children:"Settings"}),Object(G.jsx)(ne,{})]})]})})),le=c(119),de=c(120),ue=c(122),je=function(e){return Object(G.jsx)(ue.a,Object(p.a)(Object(p.a)({},e),{},{icon:Object(G.jsx)(le.a,{}),checkedIcon:Object(G.jsx)(de.a,{}),size:"large",sx:{color:"white","&.Mui-checked":{color:"white"},"&.Mui-disabled":{color:"transparent"}}}))},pe=Object(i.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation,temp_c:e.weatherData.temp_c,temp_f:e.weatherData.temp_f,cities:e.cities.arrOfCities,isDay:e.weatherData.isDay,code:e.weatherData.code}}),(function(e){return{addToFavorites:function(t){e(R(t))},removeFromFavorites:function(t){e(Y(t))}}}))((function(e){var t=Object(a.useState)(e.cities.find((function(t){return t.city===e.location}))),c=Object(re.a)(t,2),r=c[0],o=c[1],i=Object(a.useState)(!1),n=Object(re.a)(i,2),s=n[0],l=n[1];return Object(a.useEffect)((function(){o(e.cities.find((function(t){return t.city===e.location})))}),[e.location]),Object(a.useEffect)((function(){e.location&&e.location===e.responseLocation.toLowerCase()?l(!1):l(!0)}),[e.location,e.responseLocation]),Object(a.useEffect)((function(){localStorage.setItem("cities",JSON.stringify(e.cities))}),[e.cities]),Object(G.jsx)(je,{onClick:function(){r?(e.removeFromFavorites(e.location),o(!r)):(e.addToFavorites({city:e.location,temp_c:e.temp_c,temp_f:e.temp_f,lastUpdated:Date.now(),isDay:e.isDay,code:e.code}),o(!r))},disabled:s,checked:!!r})})),fe=c(73),he=c.n(fe),be=function(){return Object(G.jsx)(K.a,{size:"large",sx:{color:"white"},children:Object(G.jsx)(he.a,{fontSize:"large"})})},me=c(74),Oe=c.n(me);c(97);var xe=function(e,t){var c=Object(a.useState)(e),r=Object(re.a)(c,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){var c=setTimeout((function(){return i(e)}),t);return function(){return clearTimeout(c)}}),[t,e]),o},ye=Object(i.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation,favoriteCities:e.weatherData.favoriteCities}}),(function(e){return{onChange:function(t){e(S(t.target.value))}}}))((function(e){Object(a.useEffect)((function(){localStorage.getItem("location")&&""===e.location&&B.dispatch(S(localStorage.getItem("location")))}),[]),Object(a.useEffect)((function(){localStorage.setItem("location",e.location)}),[e.responseLocation]);var t=xe(e.location.trim(),700),c=Object(a.useCallback)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Object(j.a)(u.a.mark((function c(){var a,r;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,y(e,t);case 3:a=c.sent,B.dispatch(D(a)),r=v(a.forecast.forecastday[0].hour,a.forecast.forecastday[1].hour,a.location.localtime),B.dispatch(C(r)),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(0),console.error(c.t0);case 12:case"end":return c.stop()}}),c,null,[[0,9]])})))}(t),[t]);return Object(a.useEffect)((function(){t&&c()}),[t,c]),Object(G.jsxs)("div",{className:"search",children:[Object(G.jsx)("h1",{children:"Right now in"}),Object(G.jsx)(Oe.a,{type:"text",minWidth:"70",inputStyle:{fontSize:35,fontWeight:600,display:"block"},value:e.location,onChange:function(t){return e.onChange(t)}})]})})),_e=c(127),ge=["children"],ve=function(e){var t=e.children,c=Object(Z.a)(e,ge);return Object(G.jsx)(_e.a,Object(p.a)(Object(p.a)({},c),{},{variant:"outlined",fullWidth:!0,children:t}))},Se=["children"],De=function(e){var t=e.children,c=Object(Z.a)(e,Se);return Object(G.jsx)(ve,Object(p.a)(Object(p.a)({},c),{},{sx:{marginTop:"20px",borderRadius:"40px",boxShadow:"0px 1px 1px 0px #00000026"},children:t}))},we=Object(i.b)((function(e){return{tempScale:e.weatherData.tempScale,temp_c:e.weatherData.temp_c,temp_f:e.weatherData.temp_f}}))((function(e){return"celsius"===e.tempScale?Object(G.jsx)("h1",{className:"celsius",children:e.temp_c}):Object(G.jsx)("h1",{className:"fahrenheit",children:e.temp_f})})),Fe=Object(i.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation,condition:e.weatherData.condition}}))((function(e){return Object(G.jsxs)("div",{className:"condition",children:["it's ",e.condition]})})),Ce=Object(i.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation,wind:e.weatherData.wind,pressure:e.weatherData.pressure,humidity:e.weatherData.humidity,code:e.weatherData.code,isDay:e.weatherData.isDay}}))((function(e){var t=(1e3*e.wind/3600).toFixed(1),c=(.750063755419211*e.pressure).toFixed();return Object(G.jsxs)("div",{children:[Object(G.jsx)(Fe,{}),Object(G.jsxs)("div",{className:"weather grid",children:[Object(G.jsx)(ce,{className:"weather__icon",color:{fill:"#fff"},code:e.code,isDay:e.isDay}),Object(G.jsx)("div",{className:"weather__temp",children:Object(G.jsx)(we,{className:"weather__temp-scale"})}),Object(G.jsxs)("div",{className:"flex weather__properties",children:[Object(G.jsxs)("div",{className:"properties__value",children:[t,Object(G.jsx)("span",{children:"m/s"})]}),Object(G.jsxs)("div",{className:"properties__value",children:[c,Object(G.jsx)("span",{children:"mm Hg"})]}),Object(G.jsxs)("div",{className:"properties__value",children:[e.humidity,Object(G.jsx)("span",{children:"%"})]})]})]})]})})),Ne=Object(i.b)((function(e){return{location:e.weatherData.location}}))((function(e){var t=Object(U.h)(),c=Object(U.g)();return Object(a.useEffect)((function(){e.location!==t.city&&c.push("/SimpleWeather")}),[e.location]),Object(G.jsx)("div",{children:Object(G.jsxs)("div",{className:"app",children:[Object(G.jsx)(pe,{}),Object(G.jsx)(X.b,{to:"/SimpleWeather/cities",className:"app__list-button",children:Object(G.jsx)(be,{})}),Object(G.jsx)(ye,{}),Object(G.jsx)(Ce,{}),Object(G.jsx)(X.b,{to:"/SimpleWeather/forecast",children:Object(G.jsx)(De,{children:"Show me the forecast"})})]})})})),Te=["children"],Ee=function(e){var t=e.children,c=Object(Z.a)(e,Te);return Object(G.jsx)(ve,Object(p.a)(Object(p.a)({},c),{},{sx:{color:"#2d81ff",borderColor:"#2d81ff",borderRadius:"40px",boxShadow:"0px 1px 1px 0px #00000026","&.MuiButton-root:hover":{borderColor:"#08C8F6",color:"#08C8F6"}},children:t}))},Me=c(75),Ie=c(26),ke=c(40),We=(c(98),c(99),Object(i.b)((function(e){return{forecastMod:e.weatherData.forecastMod,threeDayForecast:e.weatherData.threeDayForecast,hourlyForecast:e.weatherData.hourlyForecast,tempScale:e.weatherData.tempScale}}))((function(e){if(Ie.b.use([Ie.a]),"threeDay"===e.forecastMod&&e.threeDayForecast.length)return Object(G.jsx)(ke.a,{slidesPerView:3,pagination:{clickable:!0},children:e.threeDayForecast.map((function(t){return Object(G.jsxs)(ke.b,{className:"swiper__item",children:[Object(G.jsx)("h3",{className:"item__date",children:g()(t.date,"YYYY-MM-DD").calendar({sameDay:"[Today]",nextDay:"[Tomorrow]",nextWeek:"dddd"})}),Object(G.jsx)(ce,{className:"item__icon",code:t.code,isDay:t.isDay,color:{fill:"#2D81FF"}}),Object(G.jsxs)("p",{className:"item__temp",children:["celsius"===e.tempScale?t.temp_c.toFixed():t.temp_f.toFixed(),"\xb0"]})]})}))});if("hourly"===e.forecastMod&&e.threeDayForecast.length){var t=Object(Me.a)(e.hourlyForecast),c=t[0],a=t.slice(1);return Object(G.jsxs)(ke.a,{slidesPerView:4,pagination:{clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},children:[Object(G.jsxs)(ke.b,{className:"swiper__item",children:[Object(G.jsx)("h3",{className:"item__date",children:"Now"}),Object(G.jsx)(ce,{className:"item__icon",code:c.code,isDay:c.isDay,color:{fill:"#2D81FF"}}),Object(G.jsxs)("p",{className:"item__temp",children:["celsius"===e.tempScale?c.temp_c.toFixed():c.temp_f.toFixed(),"\xb0"]})]}),a.map((function(t){return Object(G.jsxs)(ke.b,{className:(t.isRain,"swiper__item"),children:[Object(G.jsx)("h3",{className:"item__date",children:g()(t.hour,"YYYY-MM-DD HH").format("HH:mm")}),Object(G.jsx)(ce,{className:"item__icon",code:t.code,isDay:t.isDay,color:{fill:"#2D81FF"}}),Object(G.jsxs)("p",{className:"item__temp",children:["celsius"===e.tempScale?t.temp_c.toFixed():t.temp_f.toFixed(),"\xb0"]})]})}))]})}return Object(G.jsx)(U.a,{to:"/SimpleWeather"})}))),Le=(c(100),Object(i.b)((function(e){return{forecastMod:e.weatherData.forecastMod}}),(function(e){return{changeForecastMod:function(t){e(F(t))}}}))((function(e){localStorage.getItem("forecastScale")||localStorage.setItem("forecastScale","threeDay");var t=Object(a.useState)(localStorage.getItem("forecastScale")),c=Object(re.a)(t,2),r=c[0],o=c[1];return Object(G.jsx)("div",{className:"forecast-toggle-wrapper",children:Object(G.jsxs)(oe.a,{color:"secondary",value:r,exclusive:!0,sx:{"& .MuiToggleButton-root":{backgroundColor:"transparent",borderColor:"#F9FBFF",color:"#2d81ff",textTransform:"capitalize","&.Mui-selected":{backgroundColor:"#6BA6FF",color:"#ffffff"},"&.Mui-selected:hover":{backgroundColor:"#5096ff",color:"#ffffff"}},height:"24px"},fullWidth:!0,className:"forecast-toggle",onChange:function(){"threeDay"===r?(o("hourly"),e.changeForecastMod("hourly"),localStorage.setItem("forecastScale","hourly")):(o("threeDay"),e.changeForecastMod("threeDay"),localStorage.setItem("forecastScale","threeDay"))},children:[Object(G.jsx)(ie.a,{value:"hourly",sx:{borderRadius:"20px 0 0 20px"},children:"Hourly"}),Object(G.jsx)(ie.a,{value:"threeDay",sx:{borderRadius:"0 20px 20px 0"},children:"Three-day"})]})})}))),Re=Object(i.b)((function(e){return{location:e.weatherData.responseLocation,country:e.weatherData.country}}))((function(e){return Object(G.jsxs)("div",{className:"app app-outlined",children:[Object(G.jsx)(X.b,{to:"/SimpleWeather/",children:Object(G.jsx)(Ee,{children:"Back to home page"})}),Object(G.jsx)("h1",{style:{fontWeight:"normal",fontSize:"30px",marginTop:"10px",paddingTop:"5px",borderTop:"1px solid #F9FBFF"},children:e.location}),Object(G.jsx)("h2",{style:{fontWeight:"normal",fontSize:"20px",marginTop:"5px"},children:e.country}),Object(G.jsx)(We,{}),Object(G.jsx)(Le,{})]})})),Ye=Object(i.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation}}))((function(e){return e.responseLocation&&e.location===e.responseLocation.toLowerCase()?Object(G.jsx)("div",{children:Object(G.jsxs)("div",{className:"app",children:[Object(G.jsx)(pe,{}),Object(G.jsx)(X.b,{to:"/SimpleWeather/cities",className:"app__list-button",children:Object(G.jsx)(be,{})}),Object(G.jsx)(ye,{}),Object(G.jsx)(Ce,{}),Object(G.jsx)(X.b,{to:"/SimpleWeather/forecast",children:Object(G.jsx)(De,{children:"Show me the forecast"})})]})}):Object(G.jsx)("div",{children:Object(G.jsxs)("div",{className:"app",children:[Object(G.jsx)(pe,{}),Object(G.jsx)(X.b,{to:"/SimpleWeather/cities",className:"app__list-button",children:Object(G.jsx)(be,{})}),Object(G.jsx)(ye,{})]})})})),He=function(){return Object(G.jsx)(U.c,{history:z,children:Object(G.jsxs)(U.d,{children:[Object(G.jsx)(U.b,{exact:!0,path:"/SimpleWeather",children:Object(G.jsx)(Ye,{})}),Object(G.jsx)(U.b,{exact:!0,path:"/SimpleWeather/cities",children:Object(G.jsx)(se,{})}),Object(G.jsx)(U.b,{exact:!0,path:"/SimpleWeather/cities/:city",children:Object(G.jsx)(Ne,{})}),Object(G.jsx)(U.b,{exact:!0,path:"/SimpleWeather/forecast",children:Object(G.jsx)(Re,{})}),Object(G.jsx)(U.a,{to:"/SimpleWeather"})]})})},Ae=(c(101),c(102),c(76)),Be=c(19);if(localStorage.getItem("cities")){var Pe=localStorage.getItem("cities"),ze=JSON.parse(Pe);B.dispatch({type:I,payload:ze})}else localStorage.setItem("cities","[]");localStorage.getItem("tempScale")&&B.dispatch(w(localStorage.getItem("tempScale"))),localStorage.getItem("forecastScale")&&B.dispatch(F(localStorage.getItem("forecastScale")));var Ue=Object(Ae.a)({palette:{primary:{main:"#ffffff",darker:"#ffffff"},secondary:{main:"#2d81ff",darker:"#2d81ff"}}}),Ve=document.getElementById("root");o.a.render(Object(G.jsx)(i.a,{store:B,children:Object(G.jsx)(Be.c,{theme:Ue,children:Object(G.jsx)(X.a,{basename:"/SimpleWeather",children:Object(G.jsx)(He,{})})})}),Ve)},60:function(e,t,c){},90:function(e,t,c){},94:function(e,t,c){},97:function(e,t,c){},99:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.26fd3fa0.chunk.js.map