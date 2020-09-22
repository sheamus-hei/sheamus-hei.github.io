(this["webpackJsonperik-portfolio"]=this["webpackJsonperik-portfolio"]||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(9),i=a.n(l),o=(a(28),a(29),a(41));function c(e){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"header-img",style:{backgroundImage:"url(../city.jpg)"}}),n.a.createElement(o.a,{direction:"left",in:"true",timeout:{enter:1e3}},n.a.createElement("div",{className:"header-text"},n.a.createElement("h1",{className:"fancy"},"Erik Heikkila"),n.a.createElement("h2",null,"Full Stack Web Developer"))))}var s=a(11);function m(e){return n.a.createElement(o.a,{direction:"up",in:"true",timeout:{enter:2e3}},n.a.createElement("nav",null,n.a.createElement("ul",{class:"sticky"},n.a.createElement(s.HashLink,{to:"/#about"},n.a.createElement("li",null,"About")),n.a.createElement(s.HashLink,{to:"/#projects"},n.a.createElement("li",null,"Projects")),n.a.createElement(s.HashLink,{to:"/#blog"},n.a.createElement("li",null,"Blog")),n.a.createElement(s.HashLink,{to:"/#skills"},n.a.createElement("li",null,"Skills")),n.a.createElement(s.HashLink,{to:"/#contact"},n.a.createElement("li",null,"Contact & Resume")))))}function p(e){return n.a.createElement("div",{className:"section about"},n.a.createElement("div",{style:{backgroundImage:"url(../erik.jpeg)"},className:"about-image"}),n.a.createElement("div",{className:"about-text"},n.a.createElement("h1",{className:"fancy"},"About"),n.a.createElement("p",null,"I am a Seattle-based full-stack developer with a strong technical industrial engineering background. My experience solving a diverse range of engineering problems and knowledge of human factors add to my statistical research background for a full stack mindset. Experience with Javascript, Python, React.js, SQL dialects, and Java.")))}function u(e){var t={backgroundImage:"url("+e.project.img+")"},a={backgroundImage:"url("+e.project.gif+")",backgroundPosition:"left"},r=e.project.imgs?e.project.imgs.map((function(e){return n.a.createElement("img",{src:e})})):"",l=e.project.img?n.a.createElement("div",{style:t,className:"proj-img"},n.a.createElement("div",{style:a,className:"proj-img"})):n.a.createElement("div",{className:"mobile-images proj-img"},r),i=e.project.link?n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{href:e.project.link,target:"_blank",rel:"noopener noreferrer"},"View ",e.project.name," live"),n.a.createElement("span",{className:"divider"},"|")):"";return n.a.createElement("div",{className:"section"},l,n.a.createElement("div",{className:"proj-text"},n.a.createElement("h2",{className:"fancy"},e.project.name),n.a.createElement("p",null,e.project.description),e.project.quote?n.a.createElement("blockquote",null,e.project.quote):"",n.a.createElement("p",null,n.a.createElement("strong",null,"Tech: "),n.a.createElement("span",{className:"tech"},e.project.tech)),n.a.createElement("div",{className:"proj-links"},i,n.a.createElement("a",{href:e.project.github,target:"_blank",rel:"noopener noreferrer"},"Project GitHub"))))}function g(e){var t={backgroundImage:"url("+e.blog.img+")"};return n.a.createElement("div",{className:"section"},n.a.createElement("div",{style:t,className:"proj-img"}),n.a.createElement("div",{className:"proj-text"},n.a.createElement("h2",{className:"fancy"},e.blog.name),n.a.createElement("p",null,e.blog.description),n.a.createElement("div",{className:"proj-links"},n.a.createElement("a",{href:e.blog.link,target:"_blank",rel:"noopener noreferrer"},"Check it out on Dev.To"))))}function d(e){var t=Object.keys(e.skills.skills).map((function(t){var a=e.skills.skills[t].map((function(e){return n.a.createElement("li",null,e)}));return n.a.createElement("div",null,n.a.createElement("h4",{className:"skill-title"},t),n.a.createElement("ul",null,a))})),a=e.skills.pics.map((function(e){return n.a.createElement("img",{src:e,className:"skill-pic"})}));return n.a.createElement("div",{className:"section skills"},n.a.createElement("div",null,n.a.createElement("h1",{className:"fancy proj-title"},"Skills"),n.a.createElement("div",{className:"skill-text"},n.a.createElement("div",{className:"skill-list"},t),n.a.createElement("div",{className:"skill-pics"},a))))}var h=a(8);function E(e){return n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",{alt:"email"},n.a.createElement(h.e,{icon:h.b}),n.a.createElement("div",{className:"spacer"}),"erikjheikkila@gmail.com"),n.a.createElement("li",null,n.a.createElement(h.e,{icon:h.d}),n.a.createElement("div",{className:"spacer"}),n.a.createElement("a",{href:"https://www.linkedin.com/in/erik-hei/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),n.a.createElement("li",{alt:"github"},n.a.createElement(h.e,{icon:h.c}),n.a.createElement("div",{className:"spacer"}),"GitHub: ",n.a.createElement("div",{className:"spacer"}),n.a.createElement("a",{href:"https://github.com/erik-hei",target:"_blank",rel:"noopener noreferrer"},"erik-hei")),n.a.createElement("li",null,n.a.createElement(h.e,{icon:h.a}),n.a.createElement("div",{className:"spacer"}),n.a.createElement("a",{href:"https://www.dropbox.com/s/r2dwp94mivkkp01/Erik-Heikkila-Resume.pdf?dl=0",target:"_blank",rel:"noopener noreferrer"},"Resume"))))}var f=function(e){var t=[{name:"Frogcraft",description:"You\u2019re a little frog in a big world, and the rest is up to you! In this 2D platformer, hop around and flick your tongue to manipulate terrain.",tech:"Javascript, CSS, HTML5 Canvas",link:"https://erik-hei.github.io/frogcraft/",github:"https://github.com/erik-hei/frogcraft",img:"./frogcraft.png",gif:"./frogcraft.gif"},{name:"NatureFinder",description:"Looking for wildlife in your area? NatureFinder allows you to search for any location worldwide and see animals that were spotted recently nearby.",tech:"Express.js, Node.js, PostGreSQL(Sequelize), EJS, HTML, CSS, Bootstrap, Mapbox",link:"http://naturefinder.herokuapp.com/",github:"https://github.com/erik-hei/nature-finder",img:"./naturefinder.png",gif:"./naturefinder.gif"},{name:"No Scroll Recipes",description:"Are you tired of scrolling past a food blogger\u2019s life story to get to their recipe? This app is for you. No Scroll is a micro-blogging platform for recipes that limits recipe descriptions to the length of a tweet.",tech:"MERN - MongoDB (Mongoose), Express.js, React, Node.js, CSS",link:"https://recipe-app-29.herokuapp.com/",github:"https://github.com/erik-hei/recipe-app-project3",img:"./noscroll.png",gif:"./noscroll.gif"},{name:"Lyrical",description:"Create poetry using your favorite song lyrics. Make new poems and then search lyrics from Genius to add fresh phrases to your creations.",quote:"\u201cThis app sparks joy.\u201d - Sarah King, GA Instructor",tech:"Flask (Python), React, PostGreSQL (SQLALchemy), Material-UI, CSS",link:"https://erik-hei.github.io/lyrical/",github:"https://github.com/erik-hei/lyrical",img:"./lyrical.png",gif:"./lyrical.gif"},{name:"InJoy",description:"This social networking app suggests different activities to do in quarantine. Then, post about your experience and view the feed to see what your friends have done.",tech:"GraphQL, React, PostGreSQL (Sequelize), Material-UI, CSS",github:"https://github.com/melissay94/InJoy",imgs:["./injoyHomepage.png","injoy-prompts.gif"]}];return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement(c,{className:"header"}),n.a.createElement(m,null)),n.a.createElement("main",null,n.a.createElement("div",{id:"about"},n.a.createElement(p,null)),n.a.createElement("div",{id:"projects"},n.a.createElement("h1",{className:"fancy proj-title"},"Projects"),n.a.createElement(u,{project:t[3]}),n.a.createElement(u,{project:t[4]}),n.a.createElement(u,{project:t[2]}),n.a.createElement(u,{project:t[1]}),n.a.createElement(u,{project:t[0]})),n.a.createElement("div",{id:"blog"},n.a.createElement("h1",{className:"fancy proj-title"},"Blog"),n.a.createElement(g,{blog:{name:"Whiteboarding with Erik",description:"Every week, I publish articles on my blog where I explain data structures and algorithms in Python. Working as a TA, I noticed that many of my students wanted more resources for learning how to do problems on technical interviews. Typically, these concepts are taught using Java, but my students had learned Python instead. So, I started a blog on Dev.To that explains these problems in an easy-to-understand, step-by-step manner designed specifically for bootcamp grads and other individuals from non-traditional backgrounds.",img:"./wb.jpg",link:"https://dev.to/erikhei"}})),n.a.createElement("div",{id:"skills"},n.a.createElement(d,{skills:{skills:{languages:["JavaScript","Python","Java","R"],structures:["SQL (PostGreSQL, MySQL)","NoSQL (MongoDB)","REST APIs","GraphQL"],libraries:["React","Express","Node","Sequelize","SQLAlchemy","Mongoose","Flask"]},pics:["./jslogo.png","./logo-python.png","./logo-java.png","./logo-react.png","./logo-node.png","./logo-express.png","./logo-flask.png","./logo-psql.png","./logo-mongo.png","./logo-r.png"]}}))),n.a.createElement("div",{id:"contact"},n.a.createElement("h1",{className:"fancy proj-title contact"},"Contact"),n.a.createElement(E,null)),n.a.createElement("footer",null,n.a.createElement("p",null,"This portfolio was handcrafted in React by Erik Heikkila, \xa9 2020")))},k=a(13),b=a(2);var v=function(){return n.a.createElement(k.HashRouter,null,n.a.createElement(b.d,{exact:!0,path:"/",component:f}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.82fdb2f2.chunk.js.map