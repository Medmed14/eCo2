(this["webpackJsonpreact-jeux-video"]=this["webpackJsonpreact-jeux-video"]||[]).push([[0],{34:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),i=s(16),r=s.n(i),l=(s(33),s(34),s(9)),n=s(3),o=s(26),d=s(24),j=s(11),m=s(12),b=s(14),h=s(13),u=s(10),x=s(18),p=(s(35),s(1)),O=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).handleChange=function(e){var t=e.target,s=t.name,c=t.type,i=t.checked,r=t.value,l="checkbox"===c?i:r;a.setState(Object(u.a)({},s,l))},a.handleSubmit=function(e){e.preventDefault();var t="";a.state.image&&(t=a.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0]);var s={titre:a.state.titre,editeur:a.state.editeur,date:a.state.date,prix:a.state.prix,image:t,disponible:a.state.disponible};a.props.ajouter(s),a.setState(a.initState),Object(x.b)("Voiture ajout\xe9e avec succ\xe8s!",{className:"bg-success text-white fw-bolder"}),window.location.reload(!0)},a.initState={titre:"",editeur:"",date:"",prix:0,image:"",disponible:!1},a.state=a.initState,a}return Object(m.a)(s,[{key:"render",value:function(){var e=this.state,t=e.titre,s=e.editeur,a=e.date,c=e.prix;e.disponible;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:" col-6 offset-3",children:[Object(p.jsxs)("div",{className:"bg-dark text-white border card",children:[Object(p.jsx)("div",{className:"card-header text-center",children:" Formulaire d'ajout de jeux"}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("form",{className:"row g-3 needs-validation",onSubmit:this.handleSubmit,children:[Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("label",{htmlFor:"titre",className:"form-label",children:"titre"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"titre",name:"titre",value:t,onChange:this.handleChange,placeholder:"Entrer le titre"})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("label",{htmlFor:"editeur",className:"form-label",children:"editeur"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"editeur",name:"editeur",value:s,onChange:this.handleChange,placeholder:"Entrer l'editeur'"})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("label",{htmlFor:"date",className:"form-label",children:"date"}),Object(p.jsx)("input",{type:"date",className:"form-control",id:"date",name:"date",value:a,onChange:this.handleChange,placeholder:"Entrer la date"})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("label",{htmlFor:"prix",className:"form-label",children:"Prix"}),Object(p.jsx)("input",{type:"number",className:"form-control",id:"prix",value:c,onChange:this.handleChange,name:"prix",placeholder:"Entrer le prix"})]}),Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("label",{htmlFor:"image",className:"form-label",children:"Image"}),Object(p.jsx)("input",{type:"file",className:"form-control",id:"image",onChange:this.handleChange,name:"image"})]}),Object(p.jsx)("div",{className:"col-12",children:Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("input",{className:"form-check-input",type:"checkbox",id:"disponible",onChange:this.handleChange,name:"disponible"}),Object(p.jsx)("label",{className:"form-check-label",htmlFor:"disponible",children:"Disponible"})]})}),Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("button",{className:"btn btn-success col-12",type:"submit",children:"Soumettre"})})]})})]}),Object(p.jsx)(l.b,{to:"/admin123/reload"})]})}),Object(p.jsx)(x.a,{})]})}}]),s}(a.Component),g=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).componentDidMount=function(){a.setState(a.props.jeuShared),console.log(a.props.jeuShared)},a.handleChange=function(e){var t=e.target,s=t.name,c=t.type,i=t.checked,r=t.value,l="checkbox"===c?i:r;a.setState(Object(u.a)({},s,l))},a.handleUpdateSubmit=function(e){e.preventDefault();var t=a.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0],s={id:a.state.id,titre:a.state.titre,editeur:a.state.editeur,date:a.state.date,prix:a.state.prix,image:t,disponible:a.state.disponible};a.props.remplacer(s)},a.initState={titre:"",editeur:"",date:"",prix:0,image:"",disponible:!1},a.state=a.initState,a}return Object(m.a)(s,[{key:"render",value:function(){var e=this.state,t=e.id,s=e.titre,a=e.editeur,c=e.date,i=e.prix;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-6 offset-3",children:Object(p.jsxs)("div",{className:"bg-dark text-white border card",children:[Object(p.jsx)("div",{className:"card-header text-center",children:" Formulaire de modification"}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("form",{className:"row g-3 needs-validation",onSubmit:this.handleUpdateSubmit,children:[Object(p.jsxs)("div",{className:"col-md-2",children:[Object(p.jsx)("label",{htmlFor:"id",className:"form-label",children:"id"}),Object(p.jsx)("input",{type:"text",readOnly:!0,className:"form-control",id:"id",name:"id",value:t,onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("label",{htmlFor:"titre",className:"form-label",children:"titre"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"titre",name:"titre",value:s,onChange:this.handleChange,placeholder:"Entrer le titre"})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("label",{htmlFor:"editeur",className:"form-label",children:"editeur"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"editeur",name:"editeur",value:a,onChange:this.handleChange,placeholder:"Entrer l'editeur'"})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("label",{htmlFor:"date",className:"form-label",children:"date"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"date",name:"date",value:c,onChange:this.handleChange,placeholder:"Entrer la date"})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("label",{htmlFor:"prix",className:"form-label",children:"Prix"}),Object(p.jsx)("input",{type:"number",className:"form-control",id:"prix",value:i,onChange:this.handleChange,name:"prix",placeholder:"Entrer le prix"})]}),Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("label",{htmlFor:"image",className:"form-label",children:"Image"}),Object(p.jsx)("input",{type:"file",className:"form-control",id:"image",onChange:this.handleChange,name:"image"})]}),Object(p.jsx)("div",{className:"col-12",children:Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("input",{className:"form-check-input",type:"checkbox",id:"disponible",onChange:this.handleChange,name:"disponible"}),Object(p.jsx)("label",{className:"form-check-label",htmlFor:"disponible",children:"Disponible"})]})}),Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("button",{className:"btn btn-success col-12",type:"submit",children:"Modifier l'article"})})]})})]})})}),Object(p.jsx)(x.a,{})]})}}]),s}(a.Component),f=s(7),v=function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("table",{id:"tableauAdm",className:"table",children:[Object(p.jsx)("thead",{className:"thead-dark text-center ",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Id"}),Object(p.jsx)("th",{children:"Titre"}),Object(p.jsx)("th",{children:"Editeur"}),Object(p.jsx)("th",{children:"date de sortie"}),Object(p.jsx)("th",{children:"prix"}),Object(p.jsx)("th",{children:"image"}),Object(p.jsx)("th",{children:"disponibilit\xe9"}),Object(p.jsx)("th",{children:"Actions"})]})}),Object(p.jsx)("tbody",{className:"text-center",children:e.jeux.map((function(t,s){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t.id}),Object(p.jsx)("td",{children:t.titre}),Object(p.jsx)("td",{children:t.editeur}),Object(p.jsx)("td",{children:t.date}),Object(p.jsxs)("td",{children:[t.prix," \u20ac"]}),Object(p.jsx)("td",{children:Object(p.jsx)("img",{src:"".concat(t.image),width:"55"})}),Object(p.jsx)("td",{children:t.disponible?Object(p.jsx)(f.a,{className:"mt-3 text-success"}):Object(p.jsx)(f.g,{className:"mt-3 text-danger"})}),Object(p.jsxs)("td",{children:[Object(p.jsx)("button",{id:"editeur","data-toggle":"modal","data-target":"#editModal",className:"btn btn-success",onClick:function(){e.editJeu(s)},children:"Editer"}),Object(p.jsx)("button",{id:"suppresseur",className:"btn btn-danger ",onClick:function(){window.confirm("Etes vous s\xfbr de vouloir supprimer cette r\xe9f\xe9rence ?")&&e.deleteJeu(s)},children:"Supprimer"})]})]},s)}))})]})})},N=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("jeuxVideos"));if(e&&0!==e.length){var t=JSON.parse(localStorage.getItem("jeuxVideos"));a.setState({jeuxVideos:t})}else{var s=localStorage.setItem("jeuxVideos",JSON.stringify(a.state.jeuxVideos));a.setState({jeuxVideos:s})}},a.removeJeu=function(e){var t=a.state.jeuxVideos;a.setState({jeuxVideos:t.filter((function(t,s){return s!==e}))},(function(){localStorage.setItem("jeuxVideos",JSON.stringify(this.state.jeuxVideos))}))},a.handleShow=function(e){a.setState({editForm:!0})},a.itemJeu=function(e){var t=a.state.jeuxVideos[e];a.setState({editJeu:t,indexJeu:e}),console.log(e)},a.addJeu=function(e){e.id=a.state.jeuxVideos[a.state.jeuxVideos.length-1].id+1;var t=[].concat(Object(d.a)(a.state.jeuxVideos),[e]);a.setState({jeuxVideos:t},(function(){localStorage.setItem("jeuxVideos",JSON.stringify(a.state.jeuxVideos))}))},a.updateJeu=function(e){var t=Object(d.a)(a.state.jeuxVideos);t[a.state.indexJeu]=Object(o.a)({},e),a.setState({jeuxVideos:t},(function(){localStorage.setItem("jeuxVideos",JSON.stringify(a.state.jeuxVideos))}))},a.handleRaz=function(){localStorage.clear(),window.location.reload(!0)},a.state={jeuxVideos:[{id:1,titre:"Everspace",editeur:"Rockfish Games",date:"25-05-2017",prix:30,image:"everspace.png",disponible:!0},{id:2,titre:"Duke Nukem 3D",editeur:"Apogee Software",date:"29-03-1996",prix:5,image:"duke.jpg",disponible:!0},{id:3,titre:"Fortnite",editeur:"Epic Gamess",date:"17-04-2017",prix:7,image:"fortnite.jpg",disponible:!0},{id:4,titre:"Gears of War",editeur:"Microsoft Game Studio",date:"7-11-2006",prix:9,image:"gearsofwar4.jpg",disponible:!1},{id:5,titre:"Control",editeur:"505 Games",date:"27-09-2019",prix:11,image:"control.jfif",disponible:!0},{id:6,titre:"Yakuza",editeur:"Sega",date:"15-12-2006",prix:11,image:"yakuza.png",disponible:!1},{id:7,titre:"Battlefield1",editeur:"Electronic Arts",date:"21-10-2016",prix:25,image:"battlefield1.jpg",disponible:!0}],editForm:!1,indexJeu:-1,editJeu:{id:-1,titre:"",editeur:"",date:"",prix:0,image:"",disponible:!1}},a}return Object(m.a)(s,[{key:"render",value:function(){return console.log(this.state.editJeu),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"bg-secondary text-white text-center",children:"Administration"}),!this.state.editForm&&-1===this.state.indexJeu&&Object(p.jsx)("button",{onClick:this.handleShow,className:"btn btn-warning offset-11 mb-1 ",children:"Ajouter"}),Object(p.jsx)("button",{className:"btn btn-primary",onClick:this.handleRaz,children:"Vide m\xe9moire"}),!this.state.editForm&&this.state.indexJeu>-1?Object(p.jsx)(g,{jeuShared:this.state.editJeu,remplacer:this.updateJeu}):this.state.editForm?Object(p.jsx)(O,{ajouter:this.addJeu}):Object(p.jsx)(v,{editJeu:this.itemJeu,deleteJeu:this.removeJeu,jeux:this.state.jeuxVideos})]})}}]),s}(a.Component),C=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).handleChange=function(e){var t=e.target,s=t.name,c=t.value,i="",r="";"login"===s?""===c&&(i=Object(p.jsx)("strong",{children:"Le champ login est requis"})):"pass"===s&&""===c&&(r=Object(p.jsx)("strong",{children:"Le champ mot de passe est requis"})),a.setState({loginError:i,passError:r}),a.setState(Object(u.a)({},s,c))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,s=t.login,c=t.pass;if(""!==s&&""!==c)if("Mehdi"===s&&"123"===c){var i=(new Date).toLocaleDateString();sessionStorage.setItem("token",i),a.props.history.push("/admin123"),window.location.reload()}else{a.setState({errorMessage:"Le login et/ou le mot de passe ne correspondent pas"})}else{a.setState({errorMessage:"Veuillez saisir les deux champs svp"})}},a.state={login:"",pass:"",loginError:"",passError:"",errorMessage:""},a}return Object(m.a)(s,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{id:"log",className:" bg-dark card top-50 start-50 translate-middle w-25 border",children:[this.state.errorMessage&&Object(p.jsx)("div",{className:"alert alert-danger",children:this.state.errorMessage}),Object(p.jsx)("div",{className:" card-header text-center text-white h4",children:"Formulaire de connexion"}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("div",{className:"mb-1",children:[Object(p.jsx)("label",{htmlFor:"login",className:"text-white form-label",children:"Login :"}),Object(p.jsx)("input",{type:"text",onChange:this.handleChange,className:"form-control",id:"login",name:"login"})]}),this.state.loginError,Object(p.jsxs)("div",{className:"mb-1",children:[Object(p.jsx)("label",{htmlFor:"pass",className:"text-white form-label",children:"Mot de passe :"}),Object(p.jsx)("input",{type:"password",onChange:this.handleChange,className:"form-control",id:"pass",name:"pass"})]}),this.state.passError,Object(p.jsx)("button",{type:"submit",className:"btn btn-success col-12",children:"Soumettre"})]})})]})})}}]),s}(a.Component),S=function(e){return sessionStorage.getItem("token")&&(sessionStorage.removeItem("token"),e.history.push("/login"),window.location.reload()),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{})})},y=s(28),w=(s(42),["https://s2.best-wallpaper.net/wallpaper/1920x1080/1704/Destiny-video-game_1920x1080.jpg","https://wallpaperaccess.com/full/38280.jpg","https://cdn.wallpapersafari.com/41/34/oIBw3S.jpg","https://www.wallpapertip.com/wmimgs/40-408667_call-of-duty-advanced-warfare-hd.jpg","https://s3.eu-west-3.amazonaws.com/dexertofr-assets-production-dda5f020/uploads/2020/11/28152034/cyberpunk-2077-3.jpg","https://image.jeuxvideo.com/medias/159974/1599744741-873-jaquette-avant.png","https://image.jeuxvideo.com/medias/159000/1589999270-8596-jaquette-avant.jpg","https://nintendolesite.com/images/news/galeries/2k_games_se_decide_a_profiter_du_succes_de_la_switch-1-xh7o85at24.jpg","https://s2.best-wallpaper.net/wallpaper/1920x1080/1208/Battlefield-3-game-HD_1920x1080.jpg"]),k=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(y.Slide,{easing:"text-center ease",children:[Object(p.jsx)("div",{className:" each-slide",children:Object(p.jsx)("div",{className:"imageCarou",style:{backgroundImage:"url(".concat(w[0],")")}})}),Object(p.jsx)("div",{className:" each-slide",children:Object(p.jsx)("div",{className:"imageCarou",style:{backgroundImage:"url(".concat(w[1],")")}})}),Object(p.jsx)("div",{className:" each-slide",children:Object(p.jsx)("div",{className:"imageCarou",style:{backgroundImage:"url(".concat(w[2],")")}})}),Object(p.jsx)("div",{className:" each-slide",children:Object(p.jsx)("div",{className:"imageCarou",style:{backgroundImage:"url(".concat(w[3],")")}})}),Object(p.jsx)("div",{className:" each-slide",children:Object(p.jsx)("div",{className:"imageCarou",style:{backgroundImage:"url(".concat(w[4],")")}})}),Object(p.jsx)("div",{className:" each-slide",children:Object(p.jsx)("div",{className:"imageCarou",style:{backgroundImage:"url(".concat(w[5],")")}})}),Object(p.jsx)("div",{className:" each-slide",children:Object(p.jsx)("div",{className:"imageCarou",style:{backgroundImage:"url(".concat(w[6],")")}})}),Object(p.jsx)("div",{className:" each-slide",children:Object(p.jsx)("div",{className:"imageCarou",style:{backgroundImage:"url(".concat(w[7],")")}})}),Object(p.jsx)("div",{className:" each-slide",children:Object(p.jsx)("div",{className:"imageCarou",style:{backgroundImage:"url(".concat(w[8],")")}})})]})})},F=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"text-white p-5",children:Object(p.jsx)("div",{className:"container text-center",children:Object(p.jsx)("h1",{className:"display-4",children:"Bienvenue"})})}),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(k,{})})]})},J=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"text-white p-5",children:Object(p.jsx)("div",{className:"container text-center",children:Object(p.jsx)("h1",{className:"display-4 mb-5",children:"Contact"})})}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-1",children:Object(p.jsx)("div",{id:"formulaire",className:"card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("form",{className:"row g-3 needs-validation",children:[Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("label",{htmlFor:"societe",className:"form-label",children:"Soci\xe9t\xe9"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"societe",name:"societe"})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("label",{htmlFor:"nom",className:"form-label",children:"Nom"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"nom",name:"nom"})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("label",{htmlFor:"prenom",className:"form-label",children:"Pr\xe9nom"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"prenom",name:"prenom"})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("label",{htmlFor:"tel",className:"form-label",children:"t\xe9l\xe9phone"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"tel",name:"tel"})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("label",{htmlFor:"prix",className:"form-label",children:"Mail"}),Object(p.jsx)("input",{type:"number",className:"form-control",id:"prix",name:"prix"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"exampleFormControlTextarea1",children:"Commentaire"}),Object(p.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})]}),Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("button",{className:"btn btn-secondary col-6",type:"submit",children:"envoyer"})})]})})})}),Object(p.jsx)("div",{id:"infosSte",className:"col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-2 pt-5 border border-white rounded",children:Object(p.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(p.jsx)("li",{className:"champ list-group-item",children:"eCo\xb2 Game Store S.A"}),Object(p.jsx)("li",{className:"champ list-group-item",children:"ecoGamesSystem@eco.com"}),Object(p.jsx)("li",{className:"champ list-group-item",children:"(+33) 1.25.45.87.32"}),Object(p.jsx)("li",{className:"champ list-group-item",children:"182 Avenue du Maine 75014 Paris France"}),Object(p.jsxs)("li",{className:"bg-dark text-white text-center list-group-item",children:[Object(p.jsx)(f.h,{className:"icone"})," ",Object(p.jsx)(f.b,{className:"icone"})," ",Object(p.jsx)(f.c,{className:"icone"})]})]})})]}),Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("iframe",{id:"carte",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1313.1974075338878!2d2.325305366774271!3d48.83160736751188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671b40139aaed%3A0x4fd6e73111363f74!2s182-186%20Avenue%20du%20Maine%2C%2075014%20Paris!5e0!3m2!1sfr!2sfr!4v1613127370872!5m2!1sfr!2sfr",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"})})]})},V=s(23),E=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"text-white container",children:[Object(p.jsx)("div",{className:"row mt-5",children:Object(p.jsxs)("div",{classname:"col-12",children:[Object(p.jsx)("h1",{className:"text-center mb-5 mt-2 display-4",children:"Ensemble, reprenons racine"}),Object(p.jsx)("div",{id:"leaf",className:"text-center col-md-5 col-sm-6 col-7",children:Object(p.jsx)(f.d,{})}),Object(p.jsx)("p",{className:"text text-justify col-md-5 col-sm-6 col-7",children:"Alors que le confinement nous a fait prendre conscience que nous vivions hors sol, Il est d\xe9sormais temps de nous reconnecter \xe0 nos racines et de revenir aux fondements de nos vies. Les for\xeats font ainsi partie des \xe9l\xe9ments essentiels \xe0 nos existences et doivent \xeatre pr\xe9serv\xe9es et restaur\xe9es \xe0 grande \xe9chelle"})]})}),Object(p.jsx)("div",{className:"row mt-5",children:Object(p.jsxs)("p",{className:"text text-justify col-md-5 col-sm-6 col-8 offset-sm-6 offset-md-6 offset-3",children:["Nous n'h\xe9ritons pas de la terre de nos parents, nous l'empruntons \xe0 nos enfants.",Object(p.jsx)("p",{id:"ital",children:"Antoine de Saint-Exup\xe9ry"})]})}),Object(p.jsxs)("div",{classname:"col-12",children:[Object(p.jsx)("div",{id:"control",className:"text-center col-md-5 col-sm-6 col-7 offset-md-3 offset-sm-2 offset-3 ",children:Object(p.jsx)(V.a,{})}),Object(p.jsx)("p",{className:"text text-justify col-md-5 col-sm-6 col-7 offset-md-3 offset-sm-2 offset-3",children:"Passionn\xe9 de jeux vid\xe9os et amoureux de la plan\xe8te, ce projet fou est n\xe9 en 2019 dans l'esprit d'une personne soucieuse de l'\xe9cologie. eCo\xb2 Game Store a pour ambition de planter des arbres! Et oui, pour chaque jeu achet\xe9 et t\xe9l\xe9charg\xe9 sur notre plateforme, 1\u20ac est consacr\xe9 \xe0 l'association \"Coeur de F\xf4rets\". Cette association agit activement \xe0 la reforestation \xe0 travers le monde. On ne peut pas nier que malgr\xe8s tous nos efforts, les serveurs informatiques rejettent \xe9norm\xe9ment de cO2 alors pourquoi ne pas compenser un peu notre pollution avec une belle action pour notre plan\xe8te Terre... "})]}),Object(p.jsx)("div",{className:"row mt-5",children:Object(p.jsxs)("p",{className:"text text-right col-md-5 col-sm-7 col-8 offset-sm-5 offset-md-7 offset-3",children:["Les petits ruisseaux font les grandes rivi\xe8res...",Object(p.jsx)("p",{id:"ital",children:"Ovide"})]})}),Object(p.jsxs)("div",{className:"col-12",children:[Object(p.jsx)("div",{id:"coeur",className:"text-center col-md-5 col-sm-6 col-7 offset-sm-1 offset-md-1 offset-1",children:Object(p.jsx)(V.b,{})}),Object(p.jsx)("p",{className:"text text-justify col-md-5 col-sm-6 col-7 offset-sm-1 offset-md-1 offset-1",children:"Alors n'h\xe9sitez plus, parce qu'acheter un jeu chez nous c'est voter pour un monde plus vert, parce qu'il est temps d'agir avant qu'il soit trop tard, parce qu'on a qu'une vie et qu'il est important de se faire plaisir... Cliquez et t\xe9l\xe9chargez le ou les titres de votre choix. Pour qu'il y en ait pour tous les go\xfbts nous avons choisi chez eCo\xb2 de vous proposer aussi bien des jeux derni\xe8re g\xe9n\xe9ration que des titres \" retro gaming \". On va de l'avant mais on n'oublie pas tous les jeux de notre enfance qui nous on fait vibrer \xe0 l'\xe9poque!"})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("p",{className:"text textder text-justify col-md-5 col-sm-6 col-7 offset-sm-5 offset-md-6 offset-4",children:"A tr\xe8s vite sur eCo\xb2 Game Store ! "})})]})})},I=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{id:"ErrorPage",children:[Object(p.jsx)("h1",{className:"display-1 text-center mt-5",children:"404 page non trouv\xe9e"}),Object(p.jsx)("p",{id:"contenuError",children:"Oups d\xe9sol\xe9 vous \xeates \xe9gar\xe9, cliquez sur le logo eCo\xb2 Game pour retourner \xe0 la maison. "})]})})},q=function(){var e=JSON.parse(localStorage.getItem("jeuxVideos"));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"text-white p-5",children:Object(p.jsxs)("div",{className:"container text-center",children:[Object(p.jsx)("h1",{className:"display-4",children:"eCo\xb2 Game Store"}),Object(p.jsx)("p",{className:"lead",children:" Un jeu achet\xe9, un arbre plant\xe9 ! "})]})}),Object(p.jsx)("div",{id:"contMag",className:"row row-cols-2 row-cols-md-2 g-4 mt-1",children:e.map((function(e,t){return Object(p.jsx)("div",{id:"card",className:"card mb-4",children:Object(p.jsxs)("div",{className:"col-sm-12 row no-gutters",children:[Object(p.jsx)("div",{className:" col-md-4",children:Object(p.jsx)("img",{className:"mt-2",src:"".concat(e.image),width:"150"})}),Object(p.jsx)("div",{className:"col-md-8",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:e.titre}),Object(p.jsxs)("p",{className:"card-text",children:["date de sortie: ",e.date]}),Object(p.jsxs)("p",{className:"card-text",children:["prix de vente: ",e.prix," \u20ac"]}),Object(p.jsx)("p",{className:"card-text",children:e.disponible?Object(p.jsxs)("button",{class:"btn border border-success",children:[Object(p.jsx)(f.e,{className:"text-success",size:"20"})," commander"]}):Object(p.jsxs)("p",{children:[Object(p.jsx)(f.f,{className:"text-danger",size:"20"})," rupture"]})})]})})]})})}))})]})},A=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{id:"footer",className:"page-footer font-small col-12 blue text-center",children:Object(p.jsx)("div",{className:"footer-copyright text-center text-white",children:"Copyright \xa9 2021"})})})},M=function(){return(new Date).toLocaleDateString()===sessionStorage.getItem("token")},z=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(l.a,{basename:"/eCo2",children:[Object(p.jsx)("header",{children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(p.jsxs)(l.c,{className:"navbar-brand",to:"/",children:[Object(p.jsx)("img",{src:"https://img2.freepng.fr/20180411/eoq/kisspng-leaf-plant-logo-root-plant-5ace75f3a9ada5.454160361523480051695.jpg",id:"logo",alt:"logo de l'entreprise eCo\xb2 Game Store, cercle blanc orn\xe9 d'une feuille",width:"60",height:"60",className:"align-middle"}),"eCo\xb2 Game Store "]}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(p.jsxs)("ul",{id:"navig",className:" navbar-nav me-auto mb-2 mb-lg-0",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(l.c,{className:"nav-link",activeClassName:"active","aria-current":"page",to:"/",exact:!0,children:"Accueil"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(l.c,{className:"nav-link",activeClassName:"active",to:"/magasin",children:"Magasin"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(l.c,{className:"nav-link",activeClassName:"active",to:"/presentation",children:"Pr\xe9sentation"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(l.c,{className:"nav-link",activeClassName:"active",to:"/contact",children:"Contact"})})]}),Object(p.jsx)("span",{className:"navbar-text",children:M()?Object(p.jsx)(l.c,{className:"nav-link",activeClassName:"active",to:"/logout",children:" D\xe9connexion"}):Object(p.jsx)(l.c,{className:"nav-link",activeClassName:"active",to:"/login",children:" Connexion"})}),Object(p.jsxs)("form",{className:"d-flex",children:[Object(p.jsx)("input",{className:"input form-control me-3",type:"search",placeholder:"Rechercher un jeu...","aria-label":"Search"}),Object(p.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}),Object(p.jsx)("main",{children:Object(p.jsxs)(n.d,{children:[Object(p.jsx)(n.b,{path:"/",component:F,exact:!0}),Object(p.jsx)(n.b,{path:"/magasin",component:q}),Object(p.jsx)(n.b,{path:"/presentation",component:E}),Object(p.jsx)(n.b,{path:"/contact",component:J}),Object(p.jsx)(n.b,{path:"/login",component:C}),Object(p.jsx)(n.b,{path:"/logout",component:S}),Object(p.jsx)(n.a,{from:"/admin123/reload",to:"/admin123"}),Object(p.jsx)(n.b,{path:"/admin123",render:function(){return M()?Object(p.jsx)(N,{}):Object(p.jsx)(n.a,{to:"/login"})}}),Object(p.jsx)(n.b,{path:"*",component:I})]})})]}),Object(p.jsx)("footer",{children:Object(p.jsx)(A,{})})]})};var D=function(){return Object(p.jsx)("div",{id:"conteneur",className:"App",children:Object(p.jsx)(z,{})})};s(43);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.73dc1169.chunk.js.map