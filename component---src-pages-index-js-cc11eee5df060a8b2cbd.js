(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(e,a,t){"use strict";t.r(a);var n=t(7),i=t.n(n),l=t(0),o=t.n(l),s=function(e){var a=e.visible;return void 0!==a&&a&&o.a.createElement("div",{className:"preloader"},o.a.createElement("div",{className:"centrize full-width"},o.a.createElement("div",{className:"vertical-center"},o.a.createElement("div",{className:"spinner"},o.a.createElement("div",{className:"double-bounce1"}),o.a.createElement("div",{className:"double-bounce2"})))))||null},r=(t(31),t(138),{particles:{number:{value:75,density:{enable:!1,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"../images/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}),c=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(a=e.call.apply(e,[this].concat(n))||this).particleEl=o.a.createRef(),a}i()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this.props.particleNumber,a=Object.assign({},r);a.particles.number.value=e||75,window.particlesJS(this.particleEl.current.id,a)},t.render=function(){var e=this.props.id;void 0===e&&Math.random().toString(36).substring(7);return o.a.createElement("div",{className:"started-bg"},o.a.createElement("div",{ref:this.particleEl,id:"hero-particles",className:"slide"}))},a}(o.a.Component),m=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(a=e.call.apply(e,[this].concat(n))||this).state={isActive:!1,isFixed:!1},a.handleScroll=function(){var e=window.scrollY>100,t=a.state.isFixed;e&&!t&&a.setState({isFixed:!0}),!e&&t&&a.setState({isFixed:!1})},a.handleClick=function(){a.setState({isActive:!a.state.isActive})},a}i()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){var e=this.props.links,a=this.state,t=a.isActive,n=a.isFixed;return o.a.createElement("header",null,o.a.createElement("div",{className:"top-menu "+(t&&"active")+" "+(n&&"fixed")},o.a.createElement("ul",null,e.map(function(e){return o.a.createElement("li",{key:e.href,className:e.isActive||""},o.a.createElement("a",{className:"btn_animated",href:"#"+e.href},o.a.createElement("span",{className:"circle"},e.label)))})),o.a.createElement("a",{className:"menu-btn",onClick:this.handleClick},o.a.createElement("span",null))))},a}(o.a.Component),d=function(e){var a=e.email,t=e.title,n=e.subtitle,i=e.avatarUrl,l=e.social;return o.a.createElement("div",{className:"section started"},o.a.createElement("div",{className:"st-box"},o.a.createElement("div",{className:"st-bts"},o.a.createElement("a",{href:"mailto:"+a,className:"btn_animated"},o.a.createElement("span",{className:"circle"},o.a.createElement("i",{className:"icon ion ion-android-send"})))),o.a.createElement("div",{className:"st-image"},o.a.createElement("img",{src:i,alt:""})),o.a.createElement("div",{className:"st-title"},t),o.a.createElement("div",{className:"st-subtitle"},n),o.a.createElement("div",{className:"st-soc"},l.map(function(e){return o.a.createElement("a",{key:e.url,target:"bank",href:e.url,className:"btn_animated"},o.a.createElement("span",{className:"circle"},o.a.createElement("i",{className:e.iconClass})))}))))},u=(t(32),t(71),function(e){var a=e.birthday,t=e.citizenship,n=e.address,i=e.phones,l=e.email,s=e.job,r=e.title,c=e.paragraphs;e.donwloadUrl,e.contactUrl;return o.a.createElement("div",{className:"section about",id:"about-section"},o.a.createElement("div",{className:"content-box"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col-m-12 col-t-5 col-d-5"},o.a.createElement("div",{className:"info-list"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("strong",null,o.a.createElement("span",null,"Age:"))," ",function(e){void 0===e&&(e="");var a=e.split("-"),t=a[0],n=a[1],i=a[2],l=new Date(t,n+1,i),o=Date.now()-l.getTime(),s=new Date(o);return Math.abs(s.getUTCFullYear()-1970)}(a)+" Years"),o.a.createElement("li",null,o.a.createElement("strong",null,o.a.createElement("span",null,"Job:"))," ",s),o.a.createElement("li",null,o.a.createElement("strong",null,o.a.createElement("span",null,"Citizenship:"))," ",t),o.a.createElement("li",null,o.a.createElement("strong",null,o.a.createElement("span",null,"Address:"))," ",n),o.a.createElement("li",null,o.a.createElement("strong",null,o.a.createElement("span",null,"Phone:"))," ",i.map(function(e){return o.a.createElement(o.a.Fragment,{key:e},o.a.createElement("a",{href:"tel:"+e.replace(/[0-9\s()\-+]/g,"")},e),o.a.createElement("br",null))})),o.a.createElement("li",null,o.a.createElement("strong",null,o.a.createElement("span",null,"E-mail:"))," ",o.a.createElement("a",{href:"mailto:"+l},l))))),o.a.createElement("div",{className:"col col-m-12 col-t-7 col-d-7"},o.a.createElement("div",{className:"text-box"},o.a.createElement("p",null,o.a.createElement("strong",null,r)),c.map(function(e,a){return o.a.createElement("p",{key:"about-"+a},e)})),o.a.createElement("div",{className:"bts"},o.a.createElement("a",{href:"#",className:"btn btn_animated"},o.a.createElement("span",{className:"circle"},"Download CV")),o.a.createElement("a",{href:"#",className:"btn extra contact-btn btn_animated"},o.a.createElement("span",{className:"circle"},"Contact Me")))))))}),p=function(e,a){return o.a.createElement("div",{key:"skill-row-"+a,className:"row skill-row"},e.map(function(e,t){return o.a.createElement("div",{key:"skill-row-"+a+"-"+t,className:"col col-m-12 col-t-6 col-d-6"},o.a.createElement("div",{className:"content-box animated"},o.a.createElement("div",{className:"i_title"},o.a.createElement("div",{className:"icon"},o.a.createElement("i",{className:e.iconClass})),o.a.createElement("div",{className:"name"},e.categoryName)),o.a.createElement("div",{className:"skills"},o.a.createElement("ul",null,e.items.map(function(a){return t=Object.assign({},a,{key:e.categoryName+"-"+a.title}),n=t.title,i=t.value,l=t.key,o.a.createElement("li",{key:l},o.a.createElement("div",{className:"name"},n),o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"percentage",style:{width:i+"%"}},o.a.createElement("span",{className:"percent"},o.a.createElement("i",{className:"icon ion ion-ios-checkmark-empty"})))));var t,n,i,l})))))}))},v=function(e){var a=e.skills,t=void 0===a?[]:a;if(0===t.length)return null;var n=[].concat(t);n.reverse();for(var i=n.splice(-2),l=[];i.length>1;)i.reverse(),l.push(i),i=n.splice(-2);return i.length>0&&l.push(i),o.a.createElement("div",{className:"section skills",id:"skills-section"},o.a.createElement("div",{className:"title"},"Skills"),l.map(p))},b=function(e){var a=e.items,t=e.className,n=e.id,i=e.title,l=e.iconClass;return o.a.createElement("div",{className:"section "+t,id:n},o.a.createElement("div",{className:"title"},i,o.a.createElement("span",{className:"circle"},o.a.createElement("i",{className:"icon ion "+l}))),o.a.createElement("div",{className:"cd-timeline"},a.map(function(e,a){return o.a.createElement("div",{key:e.title+"-"+a,className:"cd-timeline-block animated"},o.a.createElement("div",{className:"cd-timeline-point"},o.a.createElement("i",{className:"icon ion ion-ios-checkmark-empty"})),o.a.createElement("div",{className:"cd-timeline-content"},o.a.createElement("div",{className:"content-box"},o.a.createElement("div",{className:"date"},e.label),o.a.createElement("div",{className:"name"},e.title),o.a.createElement("div",{className:"category"},e.subtitle),e.paragraphs.map&&e.paragraphs.map(function(e,a){return o.a.createElement("p",{key:n+"-"+a},e)}))))})))},g=function(e){var a=e.experiences;return o.a.createElement(b,{items:a,title:"Experience",id:"experience-section",className:"experience",iconClass:"icon ion ion-ios-briefcase"})},h=function(e){var a=e.educations;return o.a.createElement(b,{items:a,title:"Education",id:"education-section",className:"education",iconClass:"icon ion ion-university"})},E={avatarUrl:"https://s.gravatar.com/avatar/be0092cca8e839e1c83b492dfb630d7c?s=200",email:"tiago.bnobrega@gmail.com",title:"Tiago Nobrega",subtitle:"Solution Architect | Full Stack Developer",social:[{iconClass:"icon ion ion-social-facebook",url:"https://www.facebook.com/tiago.nobrega.18"},{iconClass:"icon ion ion-social-github",url:"https://github.com/tiagobnobrega"},{iconClass:"icon ion ion-social-twitter",url:"https://twitter.com/tbnobrega"},{iconClass:"icon ion ion-social-skype",url:"skype:tiagobnobrega"}],about:{birthday:"1987-06-07",citizenship:"Brazil",address:"Av. General Felicíssimo Cardoso, 835",phones:["+55 21 97273-4321"],email:"tiago.bnobrega@gmail.com",job:"Full Stack Developer",title:"Hello, I'm Tiago",paragraphs:["Tech enthusiast, javascript fan & coffee addicted. I belive you can do anything with just a screwdriver and enough will power, but you can definitely do a better job with the right tool.","Over twelve years acting as coffee to code transpiler."],donwloadUrl:"",contactUrl:""},skills:[{categoryName:"Coding",iconClass:"icon ion ion-code",items:[{title:"Javascript (client)",value:95},{title:"Javascript (Node.js)",value:90},{title:"CSS",value:95},{title:"Java",value:90},{title:"SQL",value:75},{title:"Shell",value:75}]},{categoryName:"Personal",iconClass:"icon ion ion-person",items:[{title:"Communication",value:90},{title:"Team Work",value:85},{title:"Proactive",value:95},{title:"English",value:85},{title:"Portuguese",value:100}]},{categoryName:"Front End Stack",iconClass:"icon ion ion-social-html5-outline",items:[{title:"ReactJS",value:95},{title:"Redux",value:90},{title:"SASS",value:90},{title:"ES7",value:95},{title:"Jest/Enzime",value:80}]},{categoryName:"Back End Stack",iconClass:"icon ion ion-android-settings",items:[{title:"Express",value:90},{title:"Spring",value:90},{title:"SQL",value:75},{title:"MongoDB",value:50},{title:"ElasticSearch",value:60},{title:"Microservices Architecture",value:70}]},{categoryName:"Other",iconClass:"icon ion ion-ios-infinite",items:[{title:"Cognitive Services",value:75},{title:"AWS",value:60},{title:"Jenkins",value:80},{title:"Docker",value:50},{title:"Linux OS Admin",value:40},{title:"Network",value:70},{title:"Documentation",value:40}]}],experiences:[{label:"2014-2018",title:"Ninebee",subtitle:"CTO",paragraphs:["Solution architect for many projects in several languages. Implemented archetype using Spring Framework and ReactJs for single page apps.","Boilerplate project using ReactJs, webpack and Express for NodeJs applications.","CI/CD using jenkins to deploy maven and grails based java applications to Weblogic web container.","Chatbot project using NodeJs botkitframework, IBM Watson cognitive services and Microsoft Teams.","In-store map for product location with PostgreSQL, arcgis. Developed pathfinder algorithm base on A* in javascript.","Developed Several apps for android and ios using ReactNative.","Implemented log environment using ELK Stack(Elasticsearch, logstash and kibana)."]},{label:"2013-2014",title:"wdev (Ebix)",subtitle:"Senior Full Stack Developer",paragraphs:["Lotus Notes client and web application development. ","For Bradesco Insurance: Worked developing new Doimno and Java applications. Developed application using IBM XPages framework in server-side javascript and java. Managed to change entire legacy application design with only sass in about 3 days."]},{label:"2012-2013",title:"Lojas Americanas SA",subtitle:"Senior Java Developer",paragraphs:["Worked developing new applications using Spring framework. Also defined java development architecture used and created maven archetypes for the development team."]},{label:"2011-2012",title:"wdev (Ebix)",subtitle:"Senior Lotus Notes Developer",paragraphs:["Lotus Notes client and web application development. ","For Bradesco Insurance: Worked developing new Doimno application both for Lotus Notes Client R8 and web access. Developed application using XPages framework in server-side javascript and java. Also developed a C++ DSAPI (Domino Server API) to integrate google reCaptcha in Domino Authentication."]},{label:"2010-2011",title:"ANP – Nation Oil Agency",subtitle:"Senior Lotus Notes Developer",paragraphs:["Worked developing new Doimno application both for Lotus Notes Client R7 and R8 and web access. Data modeling for ORACLE Database. Writing Queries in PL/SQL. Developed application using Dojo toolkit javascript framework."]},{label:"2009-2010",title:"Quatro Seniors Informática",subtitle:"Senior Lotus Notes Developer",paragraphs:["Lotus Notes client and web application development.","For Souza Cruz (British American Tobacco): Support for legacy applications developed in IBM Lotus Notes R6 for Lotus Notes Client and Web. Also worked creating new web applications and writing their documentation. Troubleshooting for integration in custom telephony solution between Domino/Cisco.","For Wilson Sons Logistic: Support for legacy application applications developed in IBM Lotus Notes R6.","For ANP – Nation Oil Agency: Developed a Domino application to serve file and manage access in a Linux server. Used for contingency plan in national seismic and oil data auction Project."]},{label:"2007-2009",title:"Running",subtitle:"Senior Lotus Notes Developer",paragraphs:["Lotus Notes client and web application development.","For Merk Pharmaceuticals: Support for legacy applications developed in IBM Lotus Notes R6 for Lotus Notes Client and Web. Also worked creating new web applications and writing their documentation"]},{label:"2005-2006",title:"Some Companies",subtitle:"Lotus Notes Developer",paragraphs:["Several past experiences with Lotus Notes on clients like: Golden Cross Insurance Brazil, Brascan Bank (BRKB), Merk Pharmaceuticals"]}],services:[{iconClass:"icon ion ion-gear-b",title:"Service 1",abstract:"Lorem ipsum"},{iconClass:"icon ion ion-gear-b",title:"Service 2",abstract:"Lorem ipsum"},{iconClass:"icon ion ion-gear-b",title:"Service 3",abstract:"Lorem ipsum"}],educations:[{label:"Always",title:"YouTube, Tutorials, Stack Overflow & Podcasts",subtitle:"Self-taught developer ;-)",paragraphs:""},{label:"2014",title:"Industrial Design — Visual Design",subtitle:"Universidade Federal do Rio de Janeiro (Rio de Janeiro Federal College)",paragraphs:""}],works:[],clients:[{avatarUrl:"",title:"",abstract:""},{avatarUrl:"",title:"",abstract:""},{avatarUrl:"",title:"",abstract:""}],pricing:[],contact:{}};t.d(a,"default",function(){return f});var f=function(e){function a(a){var t;return(t=e.call(this,a)||this).setScrollReveal=function(){window.innerWidth>720&&t.sr.reveal(".animated",{delay:200,distance:"50px",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:.8})},t.state={loaded:!1},t}i()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.sr=window.scrollReveal(),this.setScrollReveal(),this.setState({loaded:!0})},t.componentDidUpdate=function(){this.setScrollReveal()},t.render=function(){var e=this.state.loaded;return o.a.createElement("div",{className:"page",id:"home-section"},o.a.createElement(s,{visible:!e}),o.a.createElement(c,null),o.a.createElement(m,{links:[{href:"home-section",label:"Home"},{href:"about-section",label:"About"},{href:"skills-section",label:"Skills"},{href:"experience-section",label:"Experience"},{href:"service-section",label:"Services"},{href:"education-section",label:"Education"},{href:"works-section",label:"Portifolio"},{href:"clients-section",label:"Clients"},{href:"blog-section",label:"Blog"},{href:"contact-section",label:"Contact Me"}]}),o.a.createElement("div",{className:"container"},o.a.createElement(d,E),o.a.createElement("div",{className:"wrapper"},o.a.createElement(u,E.about),o.a.createElement(v,E),o.a.createElement(g,E),o.a.createElement(h,E)),o.a.createElement("footer",null,o.a.createElement("div",{className:"copy"},o.a.createElement("i",{className:"ion-android-star"}),o.a.createElement("i",{className:"ion-android-star"}),o.a.createElement("i",{className:"ion-android-star"})))))},a}(o.a.Component)},138:function(e,a,t){"use strict";t(139);var n=t(5),i=t(70),l=t(16),o=/./.toString,s=function(e){t(17)(RegExp.prototype,"toString",e,!0)};t(24)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?i.call(e):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},139:function(e,a,t){t(16)&&"g"!=/./g.flags&&t(23).f(RegExp.prototype,"flags",{configurable:!0,get:t(70)})}}]);
//# sourceMappingURL=component---src-pages-index-js-cc11eee5df060a8b2cbd.js.map