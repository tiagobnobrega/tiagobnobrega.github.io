(window.webpackJsonp=window.webpackJsonp||[]).push([[1,2],{136:function(e,a,t){"use strict";t.r(a);t(72),t(73),t(31);var n,l,i=t(7),r=t.n(i),s=t(0),c=t.n(s),o=(t(140),t(141)),m=(t(70),function(e){var a=e.items,t=e.id,n=e.title,l=e.iconClass;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,c.a.createElement("i",{className:l})," ",n),a.map(function(e,a){return c.a.createElement("section",{key:n+"-"+a,className:"blocks"},c.a.createElement("div",{className:"tl-tag"},c.a.createElement("span",null,e.label.split("-")[0]),e.label.split("-")[1]&&c.a.createElement("span",null,e.label.split("-")[1])),c.a.createElement("div",{className:"decorator"}),c.a.createElement("div",{className:"details"},c.a.createElement("header",null,c.a.createElement("h3",null,e.title),c.a.createElement("span",{className:"place"},e.subtitle),e.location&&c.a.createElement("span",{className:"location"},c.a.createElement("i",{className:"fa fa-globe-americas"})," ",e.location)),c.a.createElement("div",null,c.a.createElement("ul",null,e.paragraphs.map&&e.paragraphs.map(function(e,a){return c.a.createElement("li",{key:t+"-"+a},e)})))))}))}),u=t(139);t.d(a,"default",function(){return E});var d=((n={})[u.a.ABOUT]=function(e){e.subtitle,e.title;var a=e.paragraphs;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,c.a.createElement("i",{className:"fa fa-user-circle"})," About Me"),c.a.createElement("section",{className:"blocks"},c.a.createElement("div",{className:"tl-tag"},c.a.createElement("span",null," ")),c.a.createElement("div",{className:"separator"}),c.a.createElement("div",{className:"details about"},c.a.createElement("div",null,a&&a.map(function(e,a){return c.a.createElement("p",{key:"print-about-"+a},e)})))))},n[u.a.EXPERIENCE]=function(e){var a=e.experiences;return c.a.createElement(m,{iconClass:"fa fa-suitcase",items:a,title:"Experience"})},n[u.a.EDUCATION]=function(e){var a=e.educations;return c.a.createElement(m,{iconClass:"fa fa-graduation-cap",items:a,title:"Education"})},n[u.a.SKILLS]=null,n[u.a.STARTED]=function(e){var a=e.title,t=e.subtitle;return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"title"},c.a.createElement("h1",null,a),c.a.createElement("span",{className:"subtitle"},t)))},n[u.a.TIMELINE]=m,n),p=((l={})[u.a.ABOUT]=function(e){var a=e.phones;return c.a.createElement(c.a.Fragment,null,a.map(function(e){return c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-phone"})," ",e)}))},l[u.a.EXPERIENCE]=null,l[u.a.EDUCATION]=null,l[u.a.SKILLS]=function(e){var a=e.skills;return a?c.a.createElement("div",{className:"side-block print-skills"},c.a.createElement("h1",null,"Skills"),a.map(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"skill-category"},e.categoryName),e.items.map(function(e){return c.a.createElement("li",null,c.a.createElement("span",{className:"skill-label"},e.title),c.a.createElement("span",{className:"skill-value"},(e.value/10).toFixed(1)))}))})):null},l[u.a.STARTED]=function(e){var a=e.email,t=e.social,n=e.site;return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-envelope"})," ",a),n&&c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-globe"})," ",n),t&&t.map(function(e){return c.a.createElement("li",null,c.a.createElement("i",{className:e.iconClass})," ",e.printed)}))},l[u.a.TIMELINE]=null,l),E=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.printOnly,a=void 0!==e&&e;return c.a.createElement("div",{className:"print "+(a&&"print-only")},c.a.createElement("section",{className:"main"},o.a.map(function(e){var a=d[e.type]||null;return a?c.a.createElement("section",{className:"main-block"},c.a.createElement(a,Object.assign({},e.props,{id:e.id}))):null})),c.a.createElement("aside",{className:"sidebar"},c.a.createElement("div",{className:"side-block contact"},c.a.createElement("h1",null,"Contact Info"),c.a.createElement("ul",null,o.a.map(function(e){if([u.a.STARTED,u.a.ABOUT].includes(e.type)){var a=p[e.type]||null;return a?c.a.createElement(a,Object.assign({},e.props,{id:e.id})):null}return null}))),o.a.map(function(e){if(![u.a.STARTED,u.a.ABOUT].includes(e.type)){var a=p[e.type]||null;return a?c.a.createElement(a,Object.assign({},e.props,{id:e.id})):null}return null})))},a}(c.a.Component)},138:function(e,a,t){"use strict";t.r(a);t(31);var n,l=t(7),i=t.n(l),r=t(0),s=t.n(r),c=(t(32),t(70),function(e){var a=e.items,t=e.className,n=e.id,l=e.title,i=e.iconClass;return s.a.createElement("div",{className:"section "+t,id:n},s.a.createElement("div",{className:"title"},l,s.a.createElement("span",{className:"circle"},s.a.createElement("i",{className:"icon ion "+i}))),s.a.createElement("div",{className:"cd-timeline"},a.map(function(e,a){return s.a.createElement("div",{key:e.title+"-"+a,className:"cd-timeline-block animated"},s.a.createElement("div",{className:"cd-timeline-point"},s.a.createElement("i",{className:"icon ion ion-ios-checkmark-empty"})),s.a.createElement("div",{className:"cd-timeline-content"},s.a.createElement("div",{className:"content-box"},s.a.createElement("div",{className:"date"},e.label),s.a.createElement("div",{className:"name"},e.title),s.a.createElement("div",{className:"category"},e.subtitle),e.paragraphs.map&&e.paragraphs.map(function(e,a){return s.a.createElement("p",{key:n+"-"+a},e)}))))})))}),o=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).state={isActive:!1,isFixed:!1},a.handleScroll=function(){var e=window.scrollY>100,t=a.state.isFixed;e&&!t&&a.setState({isFixed:!0}),!e&&t&&a.setState({isFixed:!1})},a.handleClick=function(){a.setState({isActive:!a.state.isActive})},a}i()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){var e=this.props.links,a=this.state,t=a.isActive,n=a.isFixed;return s.a.createElement("header",null,s.a.createElement("div",{className:"top-menu "+(t&&"active")+" "+(n&&"fixed")},s.a.createElement("ul",null,e.map(function(e){return s.a.createElement("li",{key:e.href,className:e.isActive||""},s.a.createElement("a",{className:"btn_animated",href:"#"+e.href},s.a.createElement("span",{className:"circle"},e.label)))})),s.a.createElement("a",{className:"menu-btn",onClick:this.handleClick},s.a.createElement("span",null))))},a}(s.a.Component),m=(t(142),{particles:{number:{value:75,density:{enable:!1,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"../images/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}),u=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).particleEl=s.a.createRef(),a}i()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this.props.particleNumber,a=Object.assign({},m);a.particles.number.value=e||75,window.particlesJS(this.particleEl.current.id,a)},t.render=function(){var e=this.props.id;void 0===e&&Math.random().toString(36).substring(7);return s.a.createElement("div",{className:"started-bg"},s.a.createElement("div",{ref:this.particleEl,id:"hero-particles",className:"slide"}))},a}(s.a.Component),d=function(e){var a=e.visible;return void 0!==a&&a&&s.a.createElement("div",{className:"preloader"},s.a.createElement("div",{className:"centrize full-width"},s.a.createElement("div",{className:"vertical-center"},s.a.createElement("div",{className:"spinner"},s.a.createElement("div",{className:"double-bounce1"}),s.a.createElement("div",{className:"double-bounce2"})))))||null},p=function(e,a){return s.a.createElement("div",{key:"skill-row-"+a,className:"row"},e.map(function(e,a){return s.a.createElement("div",{key:e.title+"-"+a,className:"col col-m-12 col-t-6 col-d-6"},s.a.createElement("div",{className:"content-box animated"},s.a.createElement("div",{className:"i_title"},s.a.createElement("div",{className:"icon"},s.a.createElement("i",{className:e.iconClass})),s.a.createElement("div",{className:"name"},e.title)),s.a.createElement("p",null,e.abstract)))}))},E=function(e,a){return s.a.createElement("div",{key:"skill-row-"+a,className:"row skill-row"},e.map(function(e,t){return s.a.createElement("div",{key:"skill-row-"+a+"-"+t,className:"col col-m-12 col-t-6 col-d-6"},s.a.createElement("div",{className:"content-box animated"},s.a.createElement("div",{className:"i_title"},s.a.createElement("div",{className:"icon"},s.a.createElement("i",{className:e.iconClass})),s.a.createElement("div",{className:"name"},e.categoryName)),s.a.createElement("div",{className:"skills"},s.a.createElement("ul",null,e.items.map(function(a){return t=Object.assign({},a,{key:e.categoryName+"-"+a.title}),n=t.title,l=t.value,i=t.key,s.a.createElement("li",{key:i},s.a.createElement("div",{className:"name"},n),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"percentage",style:{width:l+"%"}},s.a.createElement("span",{className:"percent"},s.a.createElement("i",{className:"icon ion ion-ios-checkmark-empty"})))));var t,n,l,i})))))}))},v=t(136),g=t(141),b=(t(144),t(140),t(139));t.d(a,"default",function(){return N});var f=((n={})[b.a.EDUCATION]=function(e){var a=e.educations,t=e.id;return s.a.createElement(c,{items:a,title:"Education",id:t,className:"education",iconClass:"icon ion ion-university"})},n[b.a.EXPERIENCE]=function(e){var a=e.experiences,t=e.id;return s.a.createElement(c,{items:a,title:"Experience",id:t,className:"experience",iconClass:"icon ion ion-ios-briefcase"})},n[b.a.SKILLS]=function(e){var a=e.skills,t=void 0===a?[]:a,n=e.id;if(0===t.length)return null;var l=[].concat(t);l.reverse();for(var i=l.splice(-2),r=[];i.length>1;)i.reverse(),r.push(i),i=l.splice(-2);return i.length>0&&r.push(i),s.a.createElement("div",{className:"section skills",id:n},s.a.createElement("div",{className:"title"},"Skills"),r.map(E))},n[b.a.ABOUT]=function(e){var a=e.birthday,t=e.citizenship,n=e.address,l=e.phones,i=e.email,r=e.job,c=e.title,o=e.paragraphs,m=e.donwloadUrl;e.contactUrl;return s.a.createElement("div",{className:"section about",id:"about-section"},s.a.createElement("div",{className:"content-box"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col-m-12 col-t-5 col-d-5"},s.a.createElement("div",{className:"info-list"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("strong",null,s.a.createElement("span",null,"Age:"))," ",function(e){void 0===e&&(e="");var a=e.split("-"),t=a[0],n=a[1],l=a[2],i=new Date(t,n+1,l),r=Date.now()-i.getTime(),s=new Date(r);return Math.abs(s.getUTCFullYear()-1970)}(a)+" Years"),s.a.createElement("li",null,s.a.createElement("strong",null,s.a.createElement("span",null,"Job:"))," ",r),s.a.createElement("li",null,s.a.createElement("strong",null,s.a.createElement("span",null,"Citizenship:"))," ",t),s.a.createElement("li",null,s.a.createElement("strong",null,s.a.createElement("span",null,"Address:"))," ",n),s.a.createElement("li",null,s.a.createElement("strong",null,s.a.createElement("span",null,"Phone:"))," ",l&&l.map(function(e){return s.a.createElement(s.a.Fragment,{key:e},s.a.createElement("a",{href:"tel:"+e.replace(/[0-9\s()\-+]/g,"")},e),s.a.createElement("br",null))})),s.a.createElement("li",null,s.a.createElement("strong",null,s.a.createElement("span",null,"E-mail:"))," ",s.a.createElement("a",{href:"mailto:"+i},i))))),s.a.createElement("div",{className:"col col-m-12 col-t-7 col-d-7"},s.a.createElement("div",{className:"text-box"},s.a.createElement("p",null,s.a.createElement("strong",null,c)),o&&o.map(function(e,a){return s.a.createElement("p",{key:"about-"+a},e)})),s.a.createElement("div",{className:"bts"},m&&s.a.createElement("a",{href:m,className:"btn btn_animated"},s.a.createElement("span",{className:"circle"},"Download CV")))))))},n[b.a.STARTED]=function(e){var a=e.email,t=e.title,n=e.subtitle,l=e.avatarUrl,i=e.social,r=e.id;return s.a.createElement("div",{className:"section started",id:r},s.a.createElement("div",{className:"st-box"},s.a.createElement("div",{className:"st-bts"},s.a.createElement("a",{href:"mailto:"+a,className:"btn_animated"},s.a.createElement("span",{className:"circle"},s.a.createElement("i",{className:"icon ion ion-android-send"}))),s.a.createElement("a",{href:"#",className:"btn_animated left",onClick:function(){return window.print()}},s.a.createElement("span",{className:"circle"},s.a.createElement("i",{className:"icon fa fa-print"})))),s.a.createElement("div",{className:"st-image"},s.a.createElement("img",{src:l,alt:""})),s.a.createElement("div",{className:"st-title"},t),s.a.createElement("div",{className:"st-subtitle"},n),s.a.createElement("div",{className:"st-soc"},i.map(function(e){return s.a.createElement("a",{key:e.url,target:"bank",href:e.url,className:"btn_animated"},s.a.createElement("span",{className:"circle"},s.a.createElement("i",{className:e.iconClass})))}))))},n[b.a.SERVICES]=function(e){var a=e.services,t=void 0===a?[]:a,n=e.id;if(0===t.length)return null;for(var l=[].concat(t),i=l.splice(-2),r=[];i.length>1;)r.push(i),i=l.splice(-2);return i.length>0&&r.push(i),s.a.createElement("div",{className:"section service",id:n},s.a.createElement("div",{className:"title"},"Services"),r.map(p))},n[b.a.TIMELINE]=c,n),N=function(e){function a(a){var t;return(t=e.call(this,a)||this).setScrollReveal=function(){window.innerWidth>720&&t.sr.reveal(".animated",{delay:200,distance:"50px",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:.8})},t.state={loaded:!1},t}i()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.sr=window.scrollReveal(),this.setScrollReveal(),this.setState({loaded:!0})},t.componentDidUpdate=function(){this.setScrollReveal()},t.render=function(){var e=this.state.loaded;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"page screen-only",id:"home-section"},s.a.createElement(d,{visible:!e}),s.a.createElement(u,null),s.a.createElement(o,{links:[{href:"home-section",label:"Home"}].concat(g.a.map(function(e){return{href:e.id,label:e.menuEntry}}))}),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"wrapper"},g.a.map(function(e){var a=f[e.type]||null;return a?s.a.createElement(a,Object.assign({},e.props,{id:e.id})):null})),s.a.createElement("footer",null,s.a.createElement("div",{className:"copy"},s.a.createElement("i",{className:"ion-android-star"}),s.a.createElement("i",{className:"ion-android-star"}),s.a.createElement("i",{className:"ion-android-star"}))))),s.a.createElement(v.default,{printOnly:!0}))},a}(s.a.Component)},139:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={ABOUT:"ABOUT",EDUCATION:"EDUCATION",EXPERIENCE:"EXPERIENCE",SERVICES:"SERVICES",SKILLS:"SKILLS",STARTED:"STARTED",TIMELINE:"TIMELINE"}},140:function(e,a,t){},141:function(e,a,t){"use strict";var n=t(139);a.a=[{type:n.a.STARTED,id:"started-section",menuEntry:null,props:{avatarUrl:"https://s.gravatar.com/avatar/be0092cca8e839e1c83b492dfb630d7c?s=200",email:"tiago.bnobrega@gmail.com",site:"http://tiagobnobrega.github.io",title:"Tiago Nobrega",subtitle:"Solution Architect | Full Stack Developer",social:[{iconClass:"icon ion ion-social-facebook",url:"https://www.facebook.com/tiago.nobrega.18",printed:"/tiago.nobrega.18"},{iconClass:"icon ion ion-social-github",url:"https://github.com/tiagobnobrega",printed:"/tiagobnobrega"},{iconClass:"icon ion ion-social-twitter",url:"https://twitter.com/tbnobrega",printed:"@tbnobrega"},{iconClass:"icon ion ion-social-skype",url:"skype:tiagobnobrega",printed:"tiagobnobrega"}]}},{type:n.a.ABOUT,id:"about-section",menuEntry:"About",props:{birthday:"1987-06-07",citizenship:"Brazil",address:"Av. General Felicíssimo Cardoso, 835",phones:["+55 21 97273-4321"],email:"tiago.bnobrega@gmail.com",job:"Full Stack Developer",title:"Hello, I'm Tiago",paragraphs:["Tech enthusiast, javascript fan & coffee addicted. I believe you can do anything with just a screwdriver and enough will power, but you can definitely do a better job with the right tool.","Over twelve years acting as coffee to code transpiler."],donwloadUrl:"",contactUrl:""}},{type:n.a.SKILLS,id:"skills-section",menuEntry:"Skills",props:{skills:[{categoryName:"Coding",iconClass:"icon ion ion-code",items:[{title:"Javascript (client)",value:95},{title:"Javascript (Node.js)",value:90},{title:"CSS",value:95},{title:"Java",value:90},{title:"SQL",value:75},{title:"Shell",value:75}]},{categoryName:"Personal",iconClass:"icon ion ion-person",items:[{title:"Communication",value:90},{title:"Team Work",value:85},{title:"Proactive",value:95},{title:"English",value:85},{title:"Portuguese",value:100}]},{categoryName:"Front End Stack",iconClass:"icon ion ion-social-html5-outline",items:[{title:"ReactJS",value:95},{title:"Redux",value:90},{title:"SASS",value:90},{title:"ES7",value:95},{title:"Jest/Enzime",value:80}]},{categoryName:"Back End Stack",iconClass:"icon ion ion-android-settings",items:[{title:"Express",value:90},{title:"Spring",value:90},{title:"SQL",value:75},{title:"MongoDB",value:50},{title:"ElasticSearch",value:60},{title:"Microservices Architecture",value:70}]},{categoryName:"Other",iconClass:"icon ion ion-ios-infinite",items:[{title:"Cognitive Services",value:75},{title:"AWS",value:60},{title:"Jenkins",value:80},{title:"Docker",value:50},{title:"Linux OS Admin",value:40},{title:"Network",value:70},{title:"Documentation",value:40}]}]}},{type:n.a.EXPERIENCE,id:"experiences-section",menuEntry:"Experiences",props:{experiences:[{label:"2014-2018",title:"Ninebee",location:"Rio de Janeiro",subtitle:"CTO",paragraphs:["Solution architect for many projects in several languages. Implemented archetype using Spring Framework and ReactJs for single page apps.","Boilerplate project using ReactJs, webpack and Express for NodeJs applications.","CI/CD using jenkins to deploy maven and grails based java applications to Weblogic web container.","Chatbot project using NodeJs botkitframework, IBM Watson cognitive services and Microsoft Teams.","In-store map for product location with PostgreSQL, arcgis. Developed pathfinder algorithm base on A* in javascript.","Developed Several apps for android and ios using ReactNative.","Implemented log environment using ELK Stack(Elasticsearch, logstash and kibana)."]},{label:"2013-2014",title:"wdev (Ebix)",location:"Rio de Janeiro",subtitle:"Senior Full Stack Developer",paragraphs:["Lotus Notes client and web application development. ","For Bradesco Insurance: Worked developing new Doimno and Java applications. Developed application using IBM XPages framework in server-side javascript and java. Managed to change entire legacy application design with only sass in about 3 days."]},{label:"2012-2013",title:"Lojas Americanas SA",location:"Rio de Janeiro",subtitle:"Senior Java Developer",paragraphs:["Worked developing new applications using Spring framework. Also defined java development architecture used and created maven archetypes for the development team."]},{label:"2011-2012",title:"wdev (Ebix)",location:"Rio de Janeiro",subtitle:"Senior Lotus Notes Developer",paragraphs:["Lotus Notes client and web application development. ","For Bradesco Insurance: Worked developing new Doimno application both for Lotus Notes Client R8 and web access. Developed application using XPages framework in server-side javascript and java. Also developed a C++ DSAPI (Domino Server API) to integrate google reCaptcha in Domino Authentication."]},{label:"2010-2011",title:"ANP – Nation Oil Agency",location:"Rio de Janeiro",subtitle:"Senior Lotus Notes Developer",paragraphs:["Worked developing new Doimno application both for Lotus Notes Client R7 and R8 and web access. Data modeling for ORACLE Database. Writing Queries in PL/SQL. Developed application using Dojo toolkit javascript framework."]},{label:"2009-2010",title:"Quatro Seniors Informática",location:"Rio de Janeiro",subtitle:"Senior Lotus Notes Developer",paragraphs:["Lotus Notes client and web application development.","For Souza Cruz (British American Tobacco): Support for legacy applications developed in IBM Lotus Notes R6 for Lotus Notes Client and Web. Also worked creating new web applications and writing their documentation. Troubleshooting for integration in custom telephony solution between Domino/Cisco.","For Wilson Sons Logistic: Support for legacy application applications developed in IBM Lotus Notes R6.","For ANP – Nation Oil Agency: Developed a Domino application to serve file and manage access in a Linux server. Used for contingency plan in national seismic and oil data auction Project."]},{label:"2007-2009",title:"Running",location:"Rio de Janeiro",subtitle:"Senior Lotus Notes Developer",paragraphs:["Lotus Notes client and web application development.","For Merk Pharmaceuticals: Support for legacy applications developed in IBM Lotus Notes R6 for Lotus Notes Client and Web. Also worked creating new web applications and writing their documentation"]},{label:"2005-2006",title:"Some Companies",location:"Rio de Janeiro",subtitle:"Lotus Notes Developer",paragraphs:["Several past experiences with Lotus Notes on clients like: Golden Cross Insurance Brazil, Brascan Bank (BRKB), Merk Pharmaceuticals"]}]}},{type:n.a.EDUCATION,id:"education-section",menuEntry:"Education",props:{educations:[{label:"Always",title:"YouTube, Tutorials, Stack Overflow & Podcasts",subtitle:"Self-taught developer ;-)",paragraphs:""},{label:"2014",title:"Industrial Design — Visual Design",subtitle:"Universidade Federal do Rio de Janeiro (Rio de Janeiro Federal College)",paragraphs:""}]}}]},142:function(e,a,t){"use strict";t(143);var n=t(5),l=t(71),i=t(16),r=/./.toString,s=function(e){t(17)(RegExp.prototype,"toString",e,!0)};t(24)(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?s(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?l.call(e):void 0)}):"toString"!=r.name&&s(function(){return r.call(this)})},143:function(e,a,t){t(16)&&"g"!=/./g.flags&&t(23).f(RegExp.prototype,"flags",{configurable:!0,get:t(71)})},144:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-1a58618c84a24e5fa2b9.js.map