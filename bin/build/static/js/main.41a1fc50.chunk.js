(this["webpackJsonptanjasenghaas.de"]=this["webpackJsonptanjasenghaas.de"]||[]).push([[0],{113:function(e,t,i){},114:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i.n(n),a=i(41),r=i.n(a),c=i(31),o=i(9),l=i(68),u=i.n(l),d=i(23),m=i.n(d),j=i(4),h=i(3),b=function(e){var t=e.links,i=Object(n.useState)(window.innerWidth),s=Object(j.a)(i,2),a=s[0],r=s[1],c=Object(n.useState)(!1),o=Object(j.a)(c,2),l=o[0],u=o[1];return Object(n.useEffect)((function(){var e=function(){r(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),document.body.style.overflowY=l?"hidden":"unset",a>1200?Object(h.jsx)("div",{className:"Navbar",children:Object(h.jsx)("div",{className:"menu",children:t.map((function(e,t){return Object(h.jsx)("div",{className:"link",children:Object(h.jsx)(m.a,{className:"a unselectable",href:"#".concat(e.toLowerCase()),onClick:function(){return u(!1)},children:e})},t)}))})}):Object(h.jsxs)("div",{className:"Navbar",children:[Object(h.jsxs)("div",{className:l?"burger-icon open":"burger-icon",onClick:function(){return u(!l)},children:[Object(h.jsx)("div",{className:"burger-line"}),Object(h.jsx)("div",{className:"burger-line"}),Object(h.jsx)("div",{className:"burger-line"})]}),Object(h.jsx)("div",{className:"menu-overlay",style:l?{transform:"translate(0%)"}:{transform:"translate(100%)"},children:Object(h.jsx)("div",{className:"menu",children:t.map((function(e,t){return Object(h.jsx)("div",{className:"link",children:Object(h.jsx)(m.a,{className:"a unselectable",href:"#".concat(e.toLowerCase()),onClick:function(){return u(!1)},children:e})},t)}))})})]})},p=function(e){var t=e.title,i=e.subtitle,n=e.links;return Object(h.jsxs)("div",{id:"Header",className:"Header main-container",children:[Object(h.jsxs)("div",{className:"logo",children:[Object(h.jsx)("div",{className:"row unselectable",children:t.split("").map((function(e,t){return" "===e?Object(h.jsx)("h2",{style:{padding:"0 3px"},children:" "},t):Object(h.jsx)("h2",{children:e},t)}))}),Object(h.jsx)("div",{className:"row unselectable",children:i.split("").map((function(e,t){return" "===e?Object(h.jsx)("h4",{style:{padding:"0 3px"},children:" "},t):Object(h.jsx)("h4",{children:e},t)}))})]}),Object(h.jsx)(b,{links:n})]})},x=i(21),g=function(e){var t=e.header_data,i=t.title,n=t.subtitle,s=t.links;return Object(h.jsxs)("div",{className:"Landing",children:[Object(h.jsx)(p,{title:i,subtitle:n,links:s}),Object(h.jsxs)("div",{className:"hero main-container",children:[Object(h.jsx)("h1",{children:"GUTES DESIGN LEBT"}),Object(h.jsx)("h3",{children:"immer von einer Haltung. Es macht sich unsichtbar, es l\xe4sst Dinge weg. Und doch \u2013 braucht es am Ende Details, die Bildern und Texten eine Visualit\xe4t und Typographie verleihen. So wird Gestaltung lebendig. Mit Neugier, \xc4sthetik und Stilsicherheit helfe ich auch Ihnen gerne bei der Gestaltung und Konzeption in den Bereichen Editorial Design, Corporate Design, Print und Webdesign."}),Object(h.jsx)("div",{className:"scroll-down-container",children:Object(h.jsx)(m.a,{href:"#projekte",className:"icon",children:Object(h.jsx)(x.o,{className:"icon"})})})]})]})},f=i(44),v=i(69),O=i.n(v),N=i(77);function w(e){return e?{scrollWidth:e.scrollWidth}:{scrollWidth:0}}var k=function(e){var t=e.children,i=Object(n.useRef)(null),s=Object(n.useRef)(null),a=Object(N.a)(60),r=i.current?i.current.offsetTop:0,c=1.05*function(e){var t=Object(n.useState)(w(e?e.current:null)),i=Object(j.a)(t,2),s=i[0],a=i[1],r=Object(n.useCallback)((function(){e.current&&a(w(e.current))}),[e]);return Object(n.useLayoutEffect)((function(){var t=e.current;if(t){if(r(),"function"===typeof ResizeObserver){var i=new ResizeObserver((function(){return r()}));return i.observe(t),function(){i&&(i.disconnect(),i=null)}}return window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}}),[e.current]),s}(s).scrollWidth,o=Object(f.useSpring)((function(){return{scrollX:0}})),l=Object(j.a)(o,2),u=l[0].scrollX,d=l[1];Object(n.useEffect)((function(){d({scrollX:a})}),[a,d]);var b=Object(f.to)([u],(function(e){var t=-(r-e);return t<0?"translate3d(0, 0, 0)":t>c?"translate3d(".concat(c,", 0, 0)"):"translate3d(".concat(-t,"px, 0, 0)")})),p=Object(n.useState)(!1),x=Object(j.a)(p,2),g=x[0],v=x[1],k=function(){-(r-a)>c-window.innerHeight?v(!1):v(!0)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",k),function(){window.removeEventListener("scroll",k)}})),Object(h.jsx)("div",{className:"ScrollCarousel",ref:i,style:{height:c,zIndex:-2},children:Object(h.jsx)(O.a,{stickyStyle:{opacity:g?1:0,zIndex:0},children:Object(h.jsxs)("div",{className:"sticky-box",children:[Object(h.jsx)(f.animated.div,{style:{transform:b},className:"transform-box",ref:s,children:t}),Object(h.jsx)(m.a,{className:"skip",href:"#philosophie",children:"SKIP"})]})})})},q=function(e){var t=e.projects;return Object(h.jsx)("div",{id:"projekte",className:"Projects main-container component",children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"component-header",children:[Object(h.jsx)(x.Al,{className:"component-icon"}),Object(h.jsx)("h1",{className:"component-title",children:"Projekte"}),Object(h.jsx)("p",{className:"component-subtitle"})]}),Object(h.jsx)("div",{className:"component-content",children:Object(h.jsx)(k,{children:t.map((function(e){return Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("img",{src:"/assets/images/".concat(e.name.toLowerCase().replace(" ","-"),"/").concat(e.images[0].name,".webp"),alt:e.images[0].name,className:"img"}),Object(h.jsx)("h4",{children:e.name.toUpperCase()}),Object(h.jsx)(c.b,{to:"/projects/".concat(e.name.toLowerCase().replace(" ","-")),className:"carousel-link",children:"Read More."})]},e.name.toLowerCase())}))})})]})})},S=i(28),_=i(76),y=function(e){var t=e.data,i=e.showLinks;return Object(h.jsx)("div",{className:"InfoContainers main-container",children:t.map((function(e,t){var n=_[e.icon];return Object(h.jsxs)("div",{className:"column",children:[Object(h.jsxs)("div",{className:"column-content",children:[Object(h.jsxs)("div",{className:"icon-container",children:[Object(h.jsx)("div",{className:"blob"}),e.icon&&Object(h.jsx)(n,{className:"content-icon"})]}),Object(h.jsx)("h3",{className:"unselectable",children:e.title}),Object(h.jsx)("h4",{className:"unselectable",children:e.text})]}),i&&Object(h.jsx)("h6",{href:"/",className:"read-more",children:"Read More"})]},t)}))})},M=function(e){var t=e.philosophy_data;return Object(h.jsx)("div",{id:"philosophie",className:"Philosophy main-container component",children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"component-header",children:[Object(h.jsx)(S.zg,{className:"component-icon"}),Object(h.jsx)("h1",{className:"component-title",children:"Meine Philosophie"}),Object(h.jsx)("p",{className:"component-subtitle",children:"Als diplomierte Grafikdesignerin arbeite ich seit mehr als 20 Jahrenin verantwortlichen Positionen als Art- und Kreativ Direktorin. Seit vielen Jahren entwickle und designe ich Magazine f\xfcr verschiedene Verlage und Unternehmen und erarbeite neue visuelle Konzepte."})]}),Object(h.jsx)("div",{className:"component-content",children:Object(h.jsx)(y,{data:t})})]})})},z=i(22),C=function(e){var t=e.delay,i=e.quotes,s=e.showDots,a=e.showNavigation,r=e.autoScroll,c=Object(n.useState)(0),o=Object(j.a)(c,2),l=o[0],u=o[1];Object(n.useEffect)((function(){if(r){var e=setInterval((function(){u(l===i.length-1?0:l+1)}),t);return function(){return clearInterval(e)}}}),[l]);return Object(h.jsxs)("div",{className:"QuoteSlider",children:[Object(h.jsxs)("div",{className:"wrapper",children:[a&&Object(h.jsx)(z.ub,{className:"icon",onClick:function(){u(0===l?i.length-1:l-1)}}),Object(h.jsx)("div",{className:"slides",children:Object(h.jsx)("div",{className:"slides-row",style:{transform:"translate(".concat(-100*l,"%)")},children:i.map((function(e,t){return Object(h.jsxs)("div",{className:"slide",children:[Object(h.jsx)("p",{children:e.quote}),Object(h.jsx)("h4",{children:e.author}),Object(h.jsx)("h5",{children:e.position}),Object(h.jsx)("h5",{children:e.company})]},t)}))})}),a&&Object(h.jsx)(z.wb,{className:"icon",onClick:function(){u(l===i.length-1?0:l+1)}})]}),s&&Object(h.jsx)("div",{className:"dots",children:i.map((function(e,t){return Object(h.jsx)("div",{className:l===t?"dot icon active":"dot icon",onClick:function(){u(t)}},t)}))})]})};C.defaultProps={delay:5e3,showDots:!0,showNavigation:!0,autoScroll:!1};var P,L,E,T=C,I=function(e){var t=e.quotes;return Object(h.jsx)("div",{id:"kunden",className:"CustomerFeedback main-container component",children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"component-header",children:[Object(h.jsx)(S.bb,{className:"component-icon"}),Object(h.jsx)("h1",{className:"component-title",children:"Kunden"})]}),Object(h.jsx)("div",{className:"component-content",children:Object(h.jsx)(T,{quotes:t,showNavigation:!1,autoScroll:!0})})]})})},D=function(e){var t=e.services;return Object(h.jsx)("div",{id:"services",className:"Services main-container component",children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"component-header",children:[Object(h.jsx)(z.Ai,{className:"component-icon"}),Object(h.jsx)("h1",{className:"component-title",children:"Leistungen"})]}),Object(h.jsx)("div",{className:"component-content",children:Object(h.jsx)(y,{data:t})})]})})},V=i(26),W=i(5),H=i.n(W),G=i(12),R=i(70),K=i(37),A=i(71),B=i.n(A),F=i(72),J=i.n(F),U=function(e){var t=e.img,i=e.img_alt,s=e.email,a=e.phone,r=e.maps_link,c=Object(n.useState)(!1),o=Object(j.a)(c,2),l=o[0],u=o[1],d=K.accountSid,m=K.authToken,b=K.outNumber,p=K.inNumber,x=function(){var e=Object(G.a)(H.a.mark((function e(t,i,n,s,a){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("https://api.twilio.com/2010-04-01/Accounts/"+t+"/Messages.json",J.a.stringify({Body:n,From:s,To:a}),{auth:{username:t,password:i}});case 2:case"end":return e.stop()}}),e)})));return function(t,i,n,s,a){return e.apply(this,arguments)}}(),g=Object(R.a)(),f=g.register,v=g.handleSubmit,O=g.reset;return Object(h.jsx)("div",{className:"ContactForm",children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("div",{className:"contact-image",children:Object(h.jsx)("img",{src:t,alt:i})}),Object(h.jsxs)("div",{className:"contact-form",children:[Object(h.jsx)("h3",{children:"Ich freue mich \xfcber ihre Nachricht!"}),Object(h.jsxs)("div",{className:"contact-links",children:[Object(h.jsx)("a",{href:"mailto:".concat(s),children:"tanja.senghaas@web.de"}),Object(h.jsx)("a",{href:r,target:"noopener",children:"Horandstieg 30, 22559 HH"}),Object(h.jsx)("a",{href:"tel:".concat(a),target:"noopener",children:"+49 151 22543476"})]}),Object(h.jsxs)("form",{className:"contact-inputs",onSubmit:v((function(e){var t="\n\nNEUE NACHRICHT\n--------------\nName: ".concat(e.name,"\nMail: ").concat(e.mail,"\n\n").concat(e.message,"\n\t\t");x(d,m,t,b,p),console.log("sent message"),O({name:"",mail:"",message:""}),u(!0);var i=setTimeout((function(){u(!1)}),5e3);return function(){clearTimeout(i)}})),children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("input",Object(V.a)(Object(V.a)({},f("name",{required:!0})),{},{placeholder:"Name"})),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("input",Object(V.a)(Object(V.a)({},f("mail",{required:!0})),{},{placeholder:"Mail"})),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("textarea",Object(V.a)(Object(V.a)({name:"message"},f("message")),{},{placeholder:"Schreiben Sie mir..."})),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsx)("input",{id:"submit",type:"submit",style:{zIndex:1}}),l&&Object(h.jsx)("p",{className:"user-message",children:"Danke f\xfcr ihre Nachricht. Ich melde mich so schnell wie m\xf6glich!"})]})]})]})})},Q=i(40),X=function(){return Object(h.jsxs)("div",{id:"kontakt",className:"Contact main-container component",children:[Object(h.jsxs)("div",{className:"component-header",children:[Object(h.jsx)(Q.Si,{className:"component-icon"}),Object(h.jsx)("h1",{className:"component-title",children:"Kontakt"})]}),Object(h.jsx)("div",{className:"component-content",children:Object(h.jsx)(U,{img:"/assets/images/portrait/tanja.jpg",alt:"tanja_portrait",email:"tanja.senghaas@web.de",phone:"+49 151 22543476",maps_link:"https://www.google.com/maps/place/Horandstieg+30,+22559+Hamburg,+Germany/@53.5725334,9.7440649,17z/data=!3m1!4b1!4m5!3m4!1s0x47b182443d0d0855:0x69b61617b923fb05!8m2!3d53.5725334!4d9.7462536"})})]})},Y=i(32),Z=function(){return Object(h.jsxs)("div",{className:"Footer main-container",children:[Object(h.jsxs)("div",{className:"links",children:[Object(h.jsx)("a",{href:"https://www.facebook.com/tanja.senghaas",target:"noopener",rel:"noreferrer",children:Object(h.jsx)(Y.ve,{className:"icon"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/tanja-senghaas-thomsen-1b224371/",target:"noopener",rel:"noreferrer",children:Object(h.jsx)(Y.He,{className:"icon"})}),Object(h.jsx)("a",{href:"https://github.com/jonas-mika/tanjasenghaas.de",target:"noopener",rel:"noreferrer",children:Object(h.jsx)(Y.ze,{className:"icon"})})]}),Object(h.jsx)("h4",{children:"\xa9 Tanja Senghaas Designs 2021"})]})},$=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),i=t[0],s=t[1];return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){window.pageYOffset>1e3?s(!0):s(!1)}))}),[]),Object(h.jsx)(h.Fragment,{children:i&&Object(h.jsx)("div",{className:"GoUp",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(h.jsx)(x.C,{id:"icon"})})})},ee=function(e){var t=e.data;return Object(h.jsxs)("div",{className:"Main",children:[Object(h.jsx)(g,{header_data:{title:"Tanja Senghaas Designs",subtitle:"Creative Direction | Magazinentwicklung",links:["Projekte","Philosophie","Kunden","Services","Kontakt"]}}),Object(h.jsx)(q,{projects:t.projects}),Object(h.jsx)(M,{philosophy_data:t.philosophie}),Object(h.jsx)(I,{quotes:t.quotes}),Object(h.jsx)(D,{services:t.leistungen}),Object(h.jsx)(X,{}),Object(h.jsx)(Z,{}),Object(h.jsx)($,{})]})},te=i(45),ie=i(46),ne=ie.a.div(P||(P=Object(te.a)(["\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n"]))),se=ie.a.div(L||(L=Object(te.a)(["\n    display: flex;\n    flex-wrap: nowrap;\n    height: 100%;\n    width: 100%;\n    transition: 1s ease;\n"]))),ae=ie.a.div(E||(E=Object(te.a)(["\n    width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n"]))),re={width:"100%",height:"100%",objectFit:"scale-down"},ce=function(e){var t=e.image;return Object(h.jsx)(ae,{children:Object(h.jsx)("img",{src:t,style:re})})},oe=function(e){var t=e.images,i=e.delay,s=Object(n.useState)(0),a=Object(j.a)(s,2),r=a[0],c=a[1],o=Object(n.useState)(t),l=Object(j.a)(o,2),u=l[0],d=l[1];Object(n.useEffect)((function(){var e=setInterval((function(){d(u.concat(u[r])),c(r+1)}),i);return function(){return clearInterval(e)}}),[r]);return Object(h.jsx)(ne,{children:Object(h.jsx)(se,{style:{transform:"translateX(".concat(-100*r,"%)")},children:u.map((function(e){return Object(h.jsx)(ce,{image:e},e)}))})})};oe.defaultProps={images:[],delay:5e3};var le=oe,ue=function(e){var t=e.project,i=t.images.map((function(e){return"/assets/images/".concat(t.name.toLowerCase().replace(" ","-"),"/").concat(e.name,".webp")}));return Object(h.jsx)("div",{className:"ProjectPage",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"image-slider",children:Object(h.jsx)(le,{images:i})}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{children:t.name}),Object(h.jsx)("h4",{children:t.date}),Object(h.jsxs)("p",{children:[t.description,")"]})]}),Object(h.jsx)(c.b,{to:"/",children:Object(h.jsx)("button",{className:"button",children:"Home"})})]})]})})},de=(i(113),i(38)),me=de.title,je=de.favicon_url,he=de.projects;var be=function(){return Object(n.useEffect)((function(){document.title=me}),[]),Object(n.useEffect)((function(){var e=document.body.classList,t=0,i=function(){t?(clearTimeout(t),t=null):e.add("stop-transitions"),t=setTimeout((function(){e.remove("stop-transitions"),t=null}),100)};return window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}}),[]),Object(h.jsx)(c.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u.a,{url:je}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:function(){return Object(h.jsx)(ee,{data:de})}}),he.map((function(e){return Object(h.jsx)(o.a,{path:"/projects/".concat(e.name.toLowerCase().replace(" ","-")),component:function(){return Object(h.jsx)(ue,{project:e})}},e.name.toLowerCase())}))]})]})})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(be,{})}),document.getElementById("root"))},37:function(e){e.exports=JSON.parse('{"accountSid":"AC33aa9d79221b0c1d66c48b2cd6705e8a","authToken":"66f49c1fa5e884acd3984d9407e531d2","outNumber":"+13107364301","inNumber":"+4560740477"}')},38:function(e){e.exports=JSON.parse('{"title":"Tanja Senghaas Designs","favicon_url":"./assets/favicon/tanja_favicon.png","projects":[{"id":1,"name":"Hygge","date":"November 2019","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur, mauris pretium venenatis tincidunt, ex justo maximus eros, eu efficitur libero nulla quis velit. Nullam ultricies sapien non quam egestas porttitor eu vel justo. Mauris sit amet elit erat. Vestibulum porta elementum massa ac tincidunt. Pellentesque aliquam leo a enim venenatis, a efficitur leo ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sagittis eget ex in tempus. Nunc a ipsum consequat, efficitur nisl eget, aliquam arcu. Sed pulvinar tellus semper sollicitudin pellentesque. Curabitur faucibus libero vitae gravida euismod. Quisque euismod urna eget interdum.","images":[{"name":"hygge_cover_optimised","description":"hygge_cover"},{"name":"hygge1_optimised","description":"xxx"},{"name":"hygge2_optimised","description":"xxx"},{"name":"hygge3_optimised","description":"xxx"}]},{"id":2,"name":"Holly","date":"April 2020","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur, mauris pretium venenatis tincidunt, ex justo maximus eros, eu efficitur libero nulla quis velit. Nullam ultricies sapien non quam egestas porttitor eu vel justo. Mauris sit amet elit erat. Vestibulum porta elementum massa ac tincidunt. Pellentesque aliquam leo a enim venenatis, a efficitur leo ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sagittis eget ex in tempus. Nunc a ipsum consequat, efficitur nisl eget, aliquam arcu. Sed pulvinar tellus semper sollicitudin pellentesque. Curabitur faucibus libero vitae gravida euismod. Quisque euismod urna eget interdum.","images":[{"name":"holly_cover_optimised","description":"xxx"},{"name":"holly1_optimised","description":"xxx"},{"name":"holly2_optimised","description":"xxx"},{"name":"holly3_optimised","description":"xxx"},{"name":"holly4_optimised","description":"xxx"}]},{"id":3,"name":"Wohllebens Welt","date":"August 2020","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur, mauris pretium venenatis tincidunt, ex justo maximus eros, eu efficitur libero nulla quis velit. Nullam ultricies sapien non quam egestas porttitor eu vel justo. Mauris sit amet elit erat. Vestibulum porta elementum massa ac tincidunt. Pellentesque aliquam leo a enim venenatis, a efficitur leo ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sagittis eget ex in tempus. Nunc a ipsum consequat, efficitur nisl eget, aliquam arcu. Sed pulvinar tellus semper sollicitudin pellentesque. Curabitur faucibus libero vitae gravida euismod. Quisque euismod urna eget interdum.","images":[{"name":"wohllebens-welt_cover_optimised","description":"xxx"},{"name":"wohllebens-welt1_optimised","description":"xxx"},{"name":"wohllebens-welt2_optimised","description":"xxx"},{"name":"wohllebens-welt3_optimised","description":"xxx"},{"name":"wohllebens-welt4_optimised","description":"xxx"}]},{"id":4,"name":"Wolf","date":"November 2019","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur, mauris pretium venenatis tincidunt, ex justo maximus eros, eu efficitur libero nulla quis velit. Nullam ultricies sapien non quam egestas porttitor eu vel justo. Mauris sit amet elit erat. Vestibulum porta elementum massa ac tincidunt. Pellentesque aliquam leo a enim venenatis, a efficitur leo ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sagittis eget ex in tempus. Nunc a ipsum consequat, efficitur nisl eget, aliquam arcu. Sed pulvinar tellus semper sollicitudin pellentesque. Curabitur faucibus libero vitae gravida euismod. Quisque euismod urna eget interdum.","images":[{"name":"wolf_cover_optimised","description":"xxx"},{"name":"wolf1_optimised","description":"xxx"},{"name":"wolf2_optimised","description":"xxx"},{"name":"wolf3_optimised","description":"xxx"},{"name":"wolf4_optimised","description":"xxx"},{"name":"wolf5_optimised","description":"xxx"},{"name":"wolf6_optimised","description":"xxx"}]},{"id":5,"name":"Modern Living","date":"Februar 2007","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur, mauris pretium venenatis tincidunt, ex justo maximus eros, eu efficitur libero nulla quis velit. Nullam ultricies sapien non quam egestas porttitor eu vel justo. Mauris sit amet elit erat. Vestibulum porta elementum massa ac tincidunt. Pellentesque aliquam leo a enim venenatis, a efficitur leo ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sagittis eget ex in tempus. Nunc a ipsum consequat, efficitur nisl eget, aliquam arcu. Sed pulvinar tellus semper sollicitudin pellentesque. Curabitur faucibus libero vitae gravida euismod. Quisque euismod urna eget interdum.","images":[{"name":"modern-living_cover_optimised","description":"xxx"},{"name":"modern-living1_optimised","description":"xxx"},{"name":"modern-living2_optimised","description":"xxx"},{"name":"modern-living3_optimised","description":"xxx"},{"name":"modern-living4_optimised","description":"xxx"}]},{"id":6,"name":"Gesund Leben","date":"Juni 2016","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur, mauris pretium venenatis tincidunt, ex justo maximus eros, eu efficitur libero nulla quis velit. Nullam ultricies sapien non quam egestas porttitor eu vel justo. Mauris sit amet elit erat. Vestibulum porta elementum massa ac tincidunt. Pellentesque aliquam leo a enim venenatis, a efficitur leo ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sagittis eget ex in tempus. Nunc a ipsum consequat, efficitur nisl eget, aliquam arcu. Sed pulvinar tellus semper sollicitudin pellentesque. Curabitur faucibus libero vitae gravida euismod. Quisque euismod urna eget interdum.","images":[{"name":"gesund-leben_cover_optimised","description":"xxx"}]},{"id":7,"name":"Robb","date":"M\xe4rz 2019","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur, mauris pretium venenatis tincidunt, ex justo maximus eros, eu efficitur libero nulla quis velit. Nullam ultricies sapien non quam egestas porttitor eu vel justo. Mauris sit amet elit erat. Vestibulum porta elementum massa ac tincidunt. Pellentesque aliquam leo a enim venenatis, a efficitur leo ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sagittis eget ex in tempus. Nunc a ipsum consequat, efficitur nisl eget, aliquam arcu. Sed pulvinar tellus semper sollicitudin pellentesque. Curabitur faucibus libero vitae gravida euismod. Quisque euismod urna eget interdum.","images":[{"name":"robb_cover_optimised","description":"xxx"},{"name":"robb1_optimised","description":"xxx"},{"name":"robb2_optimised","description":"xxx"}]}],"quotes":[{"quote":"Kreativ und organisiert \u2013 Tanja hat diese seltene Kombination! Sie kann sich nicht nur hervorragend in Zeitgeistthemen eindenken und die passende, eigenst\xe4ndige und neue Optik dazu erfinden, sie ist einfach ein gro\xdfartiger Sparringspartner, um Ideen weiterzuentwickeln und komplexe Formate  zu strukturieren. Tanja taucht in jedes Thema komplett ein, bleibt dran, bis die Optik wirklich sitzt \u2013 es ist dieses \u201aEin kleines St\xfcck weiter gehen als \xfcblich\u2018, das Tanja auszeichnet und jeden ihrer Entw\xfcrfe so au\xdfergew\xf6hnlich macht.","author":"Sinja Sch\xfctte","position":"Chefredakteurin Living at Home, Landlust, Hygge, Molly","company":"Deutsche Medien Manufaktur"},{"quote":"Wer eine ungemein kreative und meinungsstarke Sparringspartnerin sucht, ist bei Tanja genau richtig. Ich hatte das Vergn\xfcgen, gemeinsam mit ihr,ihrem Team und der GEOkompakt-Redaktion das optische und inhaltliche Konzept f\xfcr das Magazin \u201eWohllebens Welt\u201c zu entwickeln.Wir hatten intern daran schon viele Monate lang gearbeitet, ohne aber wirklich voranzukommen \u2013 erst Tanjas sowohl visueller als auch inhaltlicher Input brachte uns auf den richtigen Weg,und so entstand ein Magazin mit einer einzigartigen Bildsprache.","author":"Michael Schaper","position":"Chefredakteur Geo Wissen","company":"Gruner + Jahr"},{"quote":"F\xfcr mich geh\xf6rt Tanja Senghaas zu den gro\xdfen Talenten der Magazingestaltung. Und das seit mehreren Jahrzehnten. Inhaltliches Einf\xfchlungsverm\xf6gen, eine gro\xdfe visuelle Kraft, handwerkliche Pr\xe4zision und Geschwindigkeit zeichnen sie aus. Tanja verliert nie die Nerven, beh\xe4lt auch unter gr\xf6\xdftem Stress ihre gute Laune. Aber was besonders wichtig ist: Die unbedingte Leidenschaft f\xfcr das Sujet, ob nun Special Interest, Lifestyle-Magazin, Illustrierte oder Corporate Media \u2013 stets bestimmen Phantasie und Innovation ihre Arbeit. Tanja ahnt schon heute, was morgen cool sein wird.","author":"Prof. Dr. Thomas Garms","position":"Head of Editorial Team","company":"Jahreszeiten Verlag Hamburg"},{"quote":"Tanja Senghaas hat mit viel Gesp\xfcr das Logo f\xfcr unsere Praxis entworfen. Die Zusammenarbeit war sehr inspirierend und unkompliziert. Wir sind sehr gl\xfccklich mit unserem neuen Erscheinungsbild und k\xf6nnen Frau Senghaas nur empfehlen!","author":"Kristin Nowak","position":"Chef\xe4rztin","company":"Neurologische Praxis Kristin Nowak"},{"quote":"Ich durfte mit Tanja tolle Projekte machen und vermisse sowohl Tanja als auch die Projekte. Ich w\xfcrde mit Tanja auch Deppen-Projekte machen, einfach um wieder mit ihr arbeiten zu d\xfcrfen. Vier Worte: Sie. Hat. Es. Drauf.","author":"York Pijahn","position":"Gr\xfcnder und Partner","company":"Narrative Impact"}],"philosophie":[{"icon":"IoMdBook","title":"Editorial Design","text":"Durch den Blick auf das gro\xdfe Ganze unterst\xfctzt und bestimmt das Visuelle den Inhalt und pr\xe4gt wie nebenbei das gesamte Erscheinungsbild.","link_text":"Read More"},{"icon":"RiTeamFill","title":"Artdirektion","text":"Die kreative Umsetzung und Begleitung aller Produktionsvorg\xe4nge fu\xdft auf einer k\xfcnstlerischen Verantwortung.","link_text":"Read More"},{"icon":"IoIosColorPalette","title":"Grafikdesign","text":"Deren Komposition l\xe4sst gedankliche Zusammenh\xe4nge in visuell erfahrbarem Kontext entstehen und erlebbar machen.","link_text":"Read More"}],"leistungen":[{"icon":"FaLightbulb","title":"Branding","text":"Entwicklung von Logos. Corporate Design. Webauftritt","link_text":"Read More"},{"icon":"IoPeople","title":"Workshops","text":"Vortr\xe4ge und Workshops rund um das Thema Gestaltung und Magazinentwicklung. Online und Offline.","link_text":"Read More"},{"icon":"IoMdBook","title":"Magazindesign","text":"Neuentwicklung und \xdcberarbeitung von Magazinen, Brosch\xfcren und White Papers.","link_text":"Read More"},{"icon":"IoChatbubblesSharp","title":"Consulting","text":"Beratung zu grafischen und den damit relevanten organisatorischen Fragen in ihrem Unternehmen","link_text":"Read More"}]}')}},[[114,1,2]]]);
//# sourceMappingURL=main.41a1fc50.chunk.js.map