(this.webpackJsonptwitter=this.webpackJsonptwitter||[]).push([[9],{210:function(e,t,o){},220:function(e,t,o){"use strict";o.r(t);var a=o(11),s=o(1),r=o(14),l=o(8),n=(o(210),o(6)),c=o(12),i=o(13),u=o(25),d=o(0);t.default=function(){var e=Object(s.useContext)(n.a),t=e.isLightTheme,o=e.light,m=e.dark,b=t?o:m,p=Object(s.useContext)(c.a),j=p.isEnglish,g=p.english,h=p.german,x=j?g:h,f=Object(s.useContext)(i.a).setUserData,O=Object(s.useState)(""),y=Object(a.a)(O,2),_=y[0],N=y[1],v=Object(s.useState)(""),w=Object(a.a)(v,2),k=w[0],C=w[1],B=Object(s.useState)({}),S=Object(a.a)(B,2),I=S[0],U=S[1],E=Object(s.useState)(!1),H=Object(a.a)(E,2),M=H[0],A=H[1],D=Object(r.g)(),J="";document.title=x.login.pageTitle;return Object(d.jsx)("div",{className:"main-box ",style:{background:b.background},children:Object(d.jsxs)("div",{className:"main",style:{background:b.background},children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("svg",{viewBox:"0 0 24 24",className:"logo__svg",style:{fill:b.logo},children:Object(d.jsx)("g",{children:Object(d.jsx)("path",{d:"M 24 5 c -0.835 0.37 -1.732 0.62 -2.675 0.733 c 0.962 -0.576 1.7 -1.49 2.048 -2.578 c -0.9 0.534 -1.897 0.922 -2.958 1.13 c -0.85 -0.904 -2.06 -1.47 -3.4 -1.47 c -2.572 0 -4.658 2.086 -4.658 4.66 c 0 0.364 0.042 0.718 0 3.588 c -5.357 -0.063 -7.304 -2.05 -9.602 -4.868 c -0.4 0.69 -0.63 1.49 -0.63 2.342 c 0 1.616 0.823 3.043 2.072 3.878 c -0.764 -0.025 -1.482 -0.234 -2.11 -0.583 v 0.06 c 0 2.257 1.605 4.14 3.737 4.568 c -0.392 0.106 -0.803 0.162 -1.227 0.162 c -0.3 0 -0.593 -0.028 -0.877 -0.082 c 0.593 1.85 2.313 3.198 4.352 3.234 c -1.595 1.25 -3.604 1.995 -5.786 1.995 c -0.376 0 -0.747 -0.022 -1.112 -0.065 c 2.062 1.323 4.51 2.093 7.14 2.093 c 8.57 0 15.686 -5.797 13.255 -13.254 c 0 -0.2 -0.569 -0.543 0.431 -2.543 z"})})})}),Object(d.jsx)("h4",{className:"title",style:{color:b.typoMain},children:x.login.header}),I.general&&Object(d.jsx)("small",{id:"general-error",className:"form-text",style:{color:b.error},children:I.general}),Object(d.jsx)("div",{className:"form",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),A(!0),u.a.loginUser({email:_,password:k}).then((function(e){J=e.data.userToken,localStorage.setItem("auth-token",J)})).then((function(){J&&u.a.getAuthenticatedUser(J).then((function(e){f({token:J,user:e.data,isAuth:!0}),window.sessionStorage.setItem("CacheUserData",JSON.stringify({token:J,isAuth:!0,user:e.data}))})).then((function(){D.push("/")})).catch((function(e){return console.error("Error while get user data",e)}))})).then((function(){U({}),A(!1),C("")})).catch((function(e){console.error("Error while login",e.response.data),U(e.response.data),A(!1),C("")}))},children:[Object(d.jsxs)("div",{className:"form-group form__inputBox",style:{background:b.foreground,borderBottomColor:"".concat(I.email?b.error:b.mainColor)},children:[Object(d.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form__inputBox__label",style:{color:b.typoSecondary},children:x.login.emailLabel}),Object(d.jsx)("input",{type:"email",className:"form-control form__inputBox__input",id:"exampleInputEmail1",style:{color:b.typoMain},"aria-describedby":"emailHelp",autoComplete:"on",value:_,onChange:function(e){return N(e.target.value)}}),I.email&&Object(d.jsxs)("small",{id:"emailHelp",className:"form-text",style:{color:b.error},children:["* ",I.email]})]}),Object(d.jsxs)("div",{className:"form-group form__inputBox",style:{background:b.foreground,borderBottomColor:"".concat(I.password?b.error:b.mainColor)},children:[Object(d.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form__inputBox__label",style:{color:b.typoSecondary},children:x.login.passwordLabel}),Object(d.jsx)("input",{type:"password",className:"form-control form__inputBox__input",id:"exampleInputPassword1",style:{color:b.typoMain},onChange:function(e){return C(e.target.value)},value:k,"aria-describedby":"passHelp",autoComplete:"on"}),I.password&&Object(d.jsxs)("small",{id:"passHelp",className:"form-text",style:{color:b.error},children:["* ",I.password]})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary form__button",style:{background:b.mainColor},disabled:M,children:M?x.login.loading:x.login.logInButton})]})}),Object(d.jsx)("div",{className:"signUp",children:Object(d.jsxs)("span",{style:{color:b.mainColor},children:[x.login.question,"  ",Object(d.jsx)(l.a,{to:"/signup",className:"signUp__link",style:{color:b.mainColor},children:x.login.link})]})})]})})}}}]);