(this.webpackJsonptwitter=this.webpackJsonptwitter||[]).push([[6],{177:function(e,t,s){"use strict";s(1);var a=s(189),o=(s(182),s(0));t.a=function(e){var t=e.imageUrl,s=e.className;return Object(o.jsx)(a.a,{small:t,large:t,hideDownload:"true",hideZoom:"true",className:s})}},180:function(e,t,s){"use strict";var a=s(2),o=s(21),c=s(11),n=s(1),r=s(14),i=s(38),l=s(6),d=s(13),m=s(28),j=s(23),u=s(0);t.a=function(e){var t=e.post,s=e.postData,_=e.likes,p=e.setLikes,b=e.setPostData,O=Object(n.useContext)(l.a),h=O.isLightTheme,x=O.light,g=O.dark,f=h?x:g,N=Object(n.useContext)(d.a),v=N.userData,k=N.setUserData,y=Object(n.useContext)(m.a),C=y.posts,I=y.setPostsData,w=Object(n.useContext)(j.a),D=w.userProfileData,S=w.setUserProfileData,P=Object(n.useState)(!1),B=Object(c.a)(P,2),J=B[0],L=B[1],M=Object(n.useState)(t.likeCount?t.likeCount:0),A=Object(c.a)(M,2),E=A[0],T=A[1],U=Object(r.g)(),z=v.isAuth?v.user.likes:"";Object(n.useEffect)((function(){T(t.likeCount),L(!1),v.isAuth&&v.user.likes.map((function(e){t.postId===e.postId&&L(!0)}))}),[t.likeCount,t.postId,v.isAuth,z]);return Object(u.jsxs)("div",{className:"postCard__content__line4__like",children:[J?Object(u.jsxs)("div",{className:"like__box unlike",onClick:function(e){e.stopPropagation(),v.isAuth?i.a.unlikePost(t.postId,v.token).then((function(e){T(e.data.likeCount),L(!1),C.map((function(t,s){if(t.postId===e.data.postId){var a=Object(o.a)(C);a[s]=e.data,I(a),window.sessionStorage.setItem("posts",JSON.stringify(a))}}));var c=v.user.likes.filter((function(e){return e.postId!==t.postId}));k(Object(a.a)(Object(a.a)({},v),{},{user:Object(a.a)(Object(a.a)({},v.user),{},{likes:c})})),window.sessionStorage.setItem("CacheUserData",JSON.stringify(Object(a.a)(Object(a.a)({},v),{},{user:Object(a.a)(Object(a.a)({},v.user),{},{likes:c})})));var n=JSON.parse(window.sessionStorage.getItem(e.data.postId));if(n){var r=n.postLikes.filter((function(e){return e.userName!==v.user.credentials.userName}));window.sessionStorage.setItem(e.data.postId,JSON.stringify({postContent:e.data,postComments:n.postComments,postLikes:r}))}D.user.userName===e.data.userName&&D.posts.map((function(t,s){if(t.postId===e.data.postId){var c=Object(o.a)(D.posts);c[s]=e.data,S(Object(a.a)(Object(a.a)({},D),{},{posts:c}))}}));var i,l=JSON.parse(window.sessionStorage.getItem(t.userName));l&&l.posts.map((function(s,c){if(s.postId===e.data.postId){var n=Object(o.a)(l.posts);n[c]=e.data,window.sessionStorage.setItem(t.userName,JSON.stringify(Object(a.a)(Object(a.a)({},l),{},{posts:n})))}})),s&&b(e.data),_&&(i=Object(o.a)(_).filter((function(e){return e.userName!==v.user.credentials.userName})),p(i))})).catch((function(e){console.log(e)})):U.push("/login")},children:[Object(u.jsx)("i",{className:"fas fa-heart",style:{color:f.error}}),Object(u.jsx)("div",{className:"like__background",style:{background:f.errorBackground}})]}):Object(u.jsxs)("div",{className:"like__box like",onClick:function(e){e.stopPropagation(),v.isAuth?i.a.LikePost(t.postId,v.token).then((function(e){T(e.data.likeCount),L(!0),C.map((function(t,s){if(t.postId===e.data.postId){var a=Object(o.a)(C);a[s]=e.data,I(a),window.sessionStorage.setItem("posts",JSON.stringify(a))}}));var c=v.user.likes;c.push({postId:t.postId,profilePicture:v.user.credentials.profilePicture,userName:v.user.credentials.userName}),k(Object(a.a)(Object(a.a)({},v),{},{user:Object(a.a)(Object(a.a)({},v.user),{},{likes:c})})),window.sessionStorage.setItem("CacheUserData",JSON.stringify(Object(a.a)(Object(a.a)({},v),{},{user:Object(a.a)(Object(a.a)({},v.user),{},{likes:c})})));var n=JSON.parse(window.sessionStorage.getItem(e.data.postId));n&&window.sessionStorage.setItem(e.data.postId,JSON.stringify({postContent:e.data,postComments:n.postComments,postLikes:n.postLikes.concat({postId:t.postId,profilePicture:v.user.credentials.profilePicture,userName:v.user.credentials.userName})})),D.user.userName===e.data.userName&&D.posts.map((function(t,s){if(t.postId===e.data.postId){var c=Object(o.a)(D.posts);c[s]=e.data,S(Object(a.a)(Object(a.a)({},D),{},{posts:c}))}}));var r=JSON.parse(window.sessionStorage.getItem(t.userName));if(r&&r.posts.map((function(s,c){if(s.postId===e.data.postId){var n=Object(o.a)(r.posts);n[c]=e.data,window.sessionStorage.setItem(t.userName,JSON.stringify(Object(a.a)(Object(a.a)({},r),{},{posts:n})))}})),s&&b(e.data),_){var i=Object(o.a)(_);i.unshift({postId:t.postId,profilePicture:v.user.credentials.profilePicture,userName:v.user.credentials.userName}),p(i)}})).catch((function(e){console.log(e)})):U.push("/login")},children:[Object(u.jsx)("i",{className:"fal fa-heart",style:{color:f.mobileNavIcon}}),Object(u.jsx)("div",{className:"like__background",style:{background:f.errorBackground}})]}),Object(u.jsx)("div",{className:"likesCount",style:{color:J?f.error:f.mobileNavIcon},children:0===E?"":E})]})}},181:function(e,t,s){"use strict";var a=s(1),o=s(6),c=s(28),n=s(0);t.a=function(e){var t=e.post,s=Object(a.useContext)(o.a),r=s.isLightTheme,i=s.light,l=s.dark,d=r?i:l,m=Object(a.useContext)(c.a).posts;return Object(a.useEffect)((function(){}),[m]),Object(n.jsxs)("div",{className:"postCard__content__line4__comment",children:[Object(n.jsxs)("div",{className:"comment__box",children:[Object(n.jsx)("i",{className:"fal fa-comment"}),Object(n.jsx)("div",{className:"comment__background",style:{background:d.secondaryColor}})]}),0===t.commentCount?"":t.commentCount]})}},182:function(e,t,s){},183:function(e,t,s){"use strict";var a=s(2),o=s(11),c=s(1),n=(s(184),s(112)),r=s(38),i=s(6),l=s(12),d=s(13),m=s(28),j=s(23),u=s(0);t.a=function(e){var t=e.post,s=Object(c.useContext)(i.a),_=s.isLightTheme,p=s.light,b=s.dark,O=_?p:b,h=Object(c.useContext)(l.a),x=h.isEnglish,g=h.english,f=h.german,N=x?g:f,v=Object(c.useContext)(d.a).userData,k=Object(c.useContext)(m.a),y=k.posts,C=k.setPostsData,I=Object(c.useContext)(j.a),w=I.userProfileData,D=I.setUserProfileData,S=Object(c.useState)(!1),P=Object(o.a)(S,2),B=P[0],J=P[1],L=function(){document.body.style.pointerEvents="all",J(!1)};return v.isAuth&&t.userName===v.user.credentials.userName?Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("div",{className:"deleteIconBox",onClick:function(e){e.stopPropagation(),document.body.style.pointerEvents="none",J(!0)},children:Object(u.jsx)("i",{className:"far fa-trash-alt",style:{color:O.error}})}),Object(u.jsx)("div",{className:"background",style:{backgroundColor:O.errorBackground}}),Object(u.jsx)(n.a,{show:B,centered:"true",className:"deletePost__main__modal",children:Object(u.jsxs)(n.a.Body,{onClick:function(e){return e.stopPropagation()},style:{background:O.background},className:"deletePost__main__modal__body",children:[Object(u.jsx)("div",{style:{color:O.typoMain},className:"deletePost__main__modal__body__title",children:N.deletePostModal.title}),Object(u.jsx)("div",{className:"deletePost__main__modal__body__message",style:{color:O.typoSecondary},children:N.deletePostModal.message}),Object(u.jsxs)("div",{className:"deletePost__main__modal__body__buttonsBox",children:[Object(u.jsx)("button",{onClick:function(e){e.stopPropagation(),L()},style:{background:O.border,color:O.typoMain},children:N.deletePostModal.cancelButton}),Object(u.jsx)("button",{onClick:function(e){e.stopPropagation(),r.a.deletePost(t.postId,v.token).then((function(){var e=y.filter((function(e){return e.postId!==t.postId}));if(C(e),window.sessionStorage.setItem("posts",JSON.stringify(e)),window.sessionStorage.removeItem(t.postId),w.user.userName===v.user.credentials.userName){var s=w.posts.filter((function(e){return e.postId!==t.postId}));D(Object(a.a)(Object(a.a)({},w),{},{posts:s}))}var o=JSON.parse(window.sessionStorage.getItem(v.user.credentials.userName));if(o){var c=o.posts.filter((function(e){return e.postId!==t.postId}));window.sessionStorage.setItem(v.user.credentials.userName,JSON.stringify(Object(a.a)(Object(a.a)({},o),{},{posts:c})))}L()})).catch((function(e){console.log(e),L()}))},style:{background:O.error,color:"#fff"},children:N.deletePostModal.deleteButton})]})]})})]}):""}},184:function(e,t,s){},185:function(e,t,s){"use strict";t.a=s.p+"static/media/empty.3c76405f.svg"},186:function(e,t,s){var a={"./ar":114,"./ar-ma":115,"./ar-ma.js":115,"./ar.js":114,"./bg":116,"./bg.js":116,"./br":117,"./br.js":117,"./bs":118,"./bs.js":118,"./ca":119,"./ca.js":119,"./cs":120,"./cs.js":120,"./cv":121,"./cv.js":121,"./cy":122,"./cy.js":122,"./da":123,"./da.js":123,"./de":124,"./de.js":124,"./el":125,"./el.js":125,"./en-au":126,"./en-au.js":126,"./en-ca":127,"./en-ca.js":127,"./en-gb":128,"./en-gb.js":128,"./eo":129,"./eo.js":129,"./es":130,"./es.js":130,"./et":131,"./et.js":131,"./eu":132,"./eu.js":132,"./fa":133,"./fa.js":133,"./fi":134,"./fi.js":134,"./fo":135,"./fo.js":135,"./fr":136,"./fr-ca":137,"./fr-ca.js":137,"./fr.js":136,"./gl":138,"./gl.js":138,"./he":139,"./he.js":139,"./hi":140,"./hi.js":140,"./hr":141,"./hr.js":141,"./hu":142,"./hu.js":142,"./id":143,"./id.js":143,"./is":144,"./is.js":144,"./it":145,"./it.js":145,"./ja":146,"./ja.js":146,"./ka":147,"./ka.js":147,"./ko":148,"./ko.js":148,"./lt":149,"./lt.js":149,"./lv":150,"./lv.js":150,"./ml":151,"./ml.js":151,"./mr":152,"./mr.js":152,"./ms-my":153,"./ms-my.js":153,"./nb":154,"./nb.js":154,"./ne":155,"./ne.js":155,"./nl":156,"./nl.js":156,"./nn":157,"./nn.js":157,"./pl":158,"./pl.js":158,"./pt":159,"./pt-br":160,"./pt-br.js":160,"./pt.js":159,"./ro":161,"./ro.js":161,"./ru":162,"./ru.js":162,"./sk":163,"./sk.js":163,"./sl":164,"./sl.js":164,"./sq":165,"./sq.js":165,"./sv":166,"./sv.js":166,"./th":167,"./th.js":167,"./tl-ph":168,"./tl-ph.js":168,"./tr":169,"./tr.js":169,"./tzm":170,"./tzm-la":171,"./tzm-la.js":171,"./tzm.js":170,"./uk":172,"./uk.js":172,"./uz":173,"./uz.js":173,"./vn":174,"./vn.js":174,"./zh-cn":175,"./zh-cn.js":175,"./zh-tw":176,"./zh-tw.js":176};function o(e){var t=c(e);return s(t)}function c(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=c,e.exports=o,o.id=186},205:function(e,t,s){},206:function(e,t,s){},207:function(e,t,s){},208:function(e,t,s){},209:function(e,t,s){},224:function(e,t,s){"use strict";s.r(t);var a=s(21),o=s(11),c=s(1),n=(s(205),s(185)),r=s(38),i=s(8),l=(s(206),s(178)),d=s.n(l),m=s(179),j=s.n(m),u=s(6),_=s(12),p=s(29),b=s(13),O=s(0),h=function(e){var t=e.comment,s=e.authorName,a=Object(c.useContext)(u.a),o=a.isLightTheme,n=a.light,r=a.dark,l=o?n:r,m=Object(c.useContext)(_.a),h=m.isEnglish,x=m.english,g=m.german,f=h?x:g,N=Object(c.useContext)(b.a).userData,v=/[\u0600-\u06FF]/,k=N.isAuth&&t.userName===N.user.credentials.userName?N.user.credentials.profilePicture:t.profilePicture;return Object(O.jsxs)("div",{className:"commentCard",style:{borderBottom:"1px solid ".concat(l.border)},children:[Object(O.jsx)("div",{className:"commentCard__userImage",children:Object(O.jsx)("div",{className:"commentCard__userImage__wrapper",children:Object(O.jsx)(i.a,{to:"/users/"+t.userName,children:Object(O.jsx)("img",{className:"commentCard__userImage__wrapper__image",src:k,alt:"profile"})})})}),Object(O.jsxs)("div",{className:"commentCard__content",children:[Object(O.jsx)("div",{className:"commentCard__content__line1",children:Object(O.jsxs)("div",{className:"commentCard__content__line1__box",children:[Object(O.jsx)(i.a,{to:"/users/"+t.userName,style:{color:l.typoMain,direction:"".concat(v.test(t.userName)?"rtl":"ltr")},className:"commentCard__content__line1__userName",children:Object(O.jsx)(p.a,{userName:t.userName})}),Object(O.jsx)("span",{style:{color:l.typoSecondary},className:"commentCard__content__line1__time",children:d()(t.createdAt).twitterShort()})]})}),Object(O.jsx)("div",{className:"commentCard__content__line2",children:Object(O.jsxs)("div",{className:"commentCard__content__line2__box",children:[Object(O.jsx)("span",{style:{color:l.typoSecondary},className:"commentCard__content__line2__text",children:f.postDetails.replyingTo}),Object(O.jsxs)(i.a,{to:"/users/"+s,style:{color:l.mainColor},className:"commentCard__content__line2__authorName",children:["@",Object(O.jsx)(p.a,{userName:s})]})]})}),Object(O.jsx)("div",{className:"commentCard__content__line2__content",style:{color:l.typoMain,textAlign:"".concat(v.test(t.commentContent)?"right":"left"),direction:"".concat(v.test(t.commentContent)?"rtl":"ltr")},children:Object(O.jsx)(j.a,{children:t.commentContent})})]})]})},x=s(2),g=(s(207),s(30)),f=s(28),N=s(23),v=function(e){var t=e.postId,s=e.comments,n=e.setComments,i=e.postData,l=e.setPostData,d=Object(c.useContext)(u.a),m=d.isLightTheme,j=d.light,p=d.dark,h=m?j:p,v=Object(c.useContext)(_.a),k=v.isEnglish,y=v.english,C=v.german,I=k?y:C,w=Object(c.useContext)(b.a).userData,D=Object(c.useContext)(f.a),S=D.posts,P=D.setPostsData,B=Object(c.useContext)(N.a),J=B.userProfileData,L=B.setUserProfileData,M=Object(c.useState)({value:"",rows:1,minRows:1,maxRows:5}),A=Object(o.a)(M,2),E=A[0],T=A[1],U=!(E.value.trim().length>0);return Object(O.jsxs)("div",{className:"addCommentBox",style:{borderBottom:"1px solid ".concat(h.border)},children:[Object(O.jsx)("div",{className:"addCommentBox__userImageBox",children:Object(O.jsx)("div",{children:Object(O.jsx)("img",{className:"addCommentBox__userImageBox__image",src:w.user.credentials.profilePicture?w.user.credentials.profilePicture:g.a,alt:"Profile"})})}),Object(O.jsx)("div",{className:"addCommentBox__inputBox",children:Object(O.jsx)("textarea",{style:{backgroundColor:h.secondaryColor,color:h.typoMain,border:"1px solid ".concat(h.border)},rows:E.rows,value:E.value,placeholder:I.postDetails.commentPlaceholder,className:"addCommentBox__inputBox__textarea",onChange:function(e){return function(e){var t=E.minRows,s=E.maxRows,a=e.target.rows;e.target.rows=t;var o=~~(e.target.scrollHeight/24);o===a&&(e.target.rows=o),o>=s&&(e.target.rows=s,e.target.scrollTop=e.target.scrollHeight),T(Object(x.a)(Object(x.a)({},E),{},{value:e.target.value,rows:o<s?o:s}))}(e)}})}),Object(O.jsx)("div",{className:"addCommentBox__buttonBox",children:Object(O.jsx)("button",{disabled:U,onClick:function(){return function(){var e={commentContent:E.value.trim()};r.a.addComment(t,e,w.token).then((function(e){var t=Object(a.a)(s);t.unshift(e.data),n(t),T(Object(x.a)(Object(x.a)({},E),{},{rows:1,value:""}));var o=Object(x.a)({},i);o.commentCount=o.commentCount+1,l(o);var c=JSON.parse(window.sessionStorage.getItem(e.data.postId));window.sessionStorage.setItem(e.data.postId,JSON.stringify({postContent:o,postComments:t,postLikes:c.postLikes})),S.map((function(t,s){if(t.postId===e.data.postId){var c=Object(a.a)(S);c[s]=o,P(c),window.sessionStorage.setItem("posts",JSON.stringify(c))}})),J.user.userName===e.data.userName&&J.posts.map((function(t,s){if(t.postId===e.data.postId){var c=Object(a.a)(J.posts);c[s]=o,L(Object(x.a)(Object(x.a)({},J),{},{posts:c}))}}));var r=JSON.parse(window.sessionStorage.getItem(w.user.credentials.userName));r&&r.posts.map((function(t,s){if(t.postId===e.data.postId){var c=Object(a.a)(J.posts);c[s]=o,window.sessionStorage.setItem(w.user.credentials.userName,JSON.stringify(Object(x.a)(Object(x.a)({},r),{},{posts:c})))}}))})).catch((function(e){console.log(e),T(Object(x.a)(Object(x.a)({},E),{},{rows:1,value:""}))}))}()},style:{opacity:U?.6:1},children:Object(O.jsx)("i",{className:"fas fa-paper-plane send",style:{color:U?h.mobileNavIcon:h.mainColor}})})})]})},k=(s(208),s(183)),y=s(181),C=s(180),I=(s(209),s(112)),w=s(43),D=function(e){var t=e.postData,s=e.likes,a=Object(c.useContext)(u.a),n=a.isLightTheme,r=a.light,l=a.dark,d=n?r:l,m=Object(c.useContext)(_.a),j=m.isEnglish,h=m.english,x=m.german,g=j?h:x,f=Object(c.useContext)(b.a).userData,N=Object(c.useState)(!1),v=Object(o.a)(N,2),k=v[0],y=v[1],C=function(){return y(!1)};return Object(O.jsxs)(c.Fragment,{children:[Object(O.jsxs)("div",{className:"postDetails__post__content__counters__likes",onClick:function(){0!==t.likeCount&&y(!0)},style:{color:d.typoMain},children:[Object(O.jsx)("span",{className:"postDetails__post__content__counters__numbers",style:{color:"".concat(d.typoMain)},children:t.likeCount}),Object(O.jsx)("span",{style:{color:"".concat(d.typoSecondary)},children:g.postDetails.likes})]}),Object(O.jsxs)(I.a,{show:k,onHide:C,keyboard:!1,centered:"true",className:"likes__main__modal",children:[Object(O.jsx)(I.a.Header,{style:{background:d.background,borderBottom:"1px solid ".concat(d.border)},className:"likes__main__modal__header",children:Object(O.jsxs)("div",{className:"left",children:[Object(O.jsxs)("div",{className:"likes__main__modal__header__iconBox",onClick:function(){return C()},children:[Object(O.jsx)("i",{className:"fal fa-times",style:{color:d.mainColor}}),Object(O.jsx)("div",{className:"likes__main__modal__header__iconBox__background",style:{background:d.secondaryColor}})]}),Object(O.jsx)("h2",{className:"likes__main__modal__header__title",style:{color:d.typoMain},children:g.postDetails.likesModalTitle})]})}),Object(O.jsx)(I.a.Body,{style:{background:d.background},children:Object(O.jsx)("div",{className:"likesBox",children:s.map((function(e){return Object(O.jsxs)("div",{className:"likesBox__like",style:{borderBottom:"1px solid ".concat(d.border)},children:[Object(O.jsxs)("div",{className:"likesBox__like__leftSide",children:[Object(O.jsx)("div",{className:"likesBox__like__leftSide__userImageBox",children:Object(O.jsx)(i.a,{to:"/users/"+e.userName,children:Object(O.jsx)("img",{src:e.profilePicture,alt:"profile"})})}),Object(O.jsxs)("div",{className:"likesBox__like__leftSide__userName",style:{color:d.typoMain},children:[Object(O.jsx)(i.a,{to:"/users/"+e.userName,style:{color:d.typoMain},children:Object(O.jsx)(p.a,{userName:e.userName})}),Object(O.jsxs)("p",{style:{color:d.typoSecondary},children:["@",e.userName]})]})]}),f.isAuth?e.userName!==f.user.credentials.userName?Object(O.jsx)("div",{className:"likesBox__like__rightSide",style:{color:d.typoMain},children:Object(O.jsx)(w.a,{userName:e.userName})}):"":Object(O.jsx)(i.a,{to:"/login",children:Object(O.jsx)(w.a,{userName:"",userProfileData:"",setUserProfileData:""})})]},e.userName)}))})})]})]})},S=s(177),P=function(e){var t=e.postData,s=e.likes,a=e.setLikes,o=e.setPostData,n=Object(c.useContext)(u.a),r=n.isLightTheme,l=n.light,m=n.dark,h=r?l:m,x=Object(c.useContext)(_.a),g=x.isEnglish,f=x.english,N=x.german,v=g?f:N,I=Object(c.useContext)(b.a).userData,w=/[\u0600-\u06FF]/,P=I.isAuth&&t.userName===I.user.credentials.userName?I.user.credentials.profilePicture:t.profilePicture;return Object(O.jsxs)("div",{className:"postDetails__post",style:{borderBottom:"1px solid ".concat(h.border)},children:[Object(O.jsxs)("div",{className:"postDetails__post__header",children:[Object(O.jsx)("div",{className:"postDetails__post__header__userImage",children:Object(O.jsx)("div",{className:"postDetails__post__header__userImage__wrapper",children:Object(O.jsx)(i.a,{to:"/users/"+t.userName,children:Object(O.jsx)("img",{className:"postDetails__post__header__userImage__wrapper__image",src:P,alt:"profile"})})})}),Object(O.jsxs)("div",{className:"postDetails__post__header__col2",children:[Object(O.jsxs)("div",{className:"postDetails__post__header__col2__box",children:[Object(O.jsx)(i.a,{to:"/users/"+t.userName,style:{color:h.typoMain,direction:"".concat(w.test(t.userName)?"rtl":"ltr")},className:"postDetails__post__header__col2__userName",children:Object(O.jsx)(p.a,{userName:t.userName})}),Object(O.jsx)("span",{style:{color:h.typoSecondary},className:"postDetails__post__header__col2__time",children:d()(t.createdAt).twitterShort()})]}),Object(O.jsx)("div",{className:"postDetails__post__header__col2__delete",children:Object(O.jsx)(k.a,{post:t})})]})]}),Object(O.jsxs)("div",{className:"postDetails__post__content",children:[Object(O.jsx)("div",{className:"postDetails__post__content__line2",style:{color:h.typoMain,textAlign:"".concat(w.test(t.postContent)?"right":"left"),direction:"".concat(w.test(t.postContent)?"rtl":"ltr")},children:Object(O.jsx)(j.a,{children:t.postContent})}),t.postImage?Object(O.jsx)("div",{className:"postDetails__post__content__line3",style:{color:h.typoSecondary,border:"1px solid ".concat(h.border)},onClick:function(e){e.stopPropagation()},children:Object(O.jsx)(S.a,{imageUrl:t.postImage,className:"postDetails__post__content__line3__image"})}):"",Object(O.jsxs)("div",{className:"postDetails__post__content__counters",style:{borderBottom:"1px solid ".concat(h.border)},children:[Object(O.jsxs)("div",{className:"postDetails__post__content__counters__comments",children:[Object(O.jsx)("span",{className:"postDetails__post__content__counters__numbers",style:{color:"".concat(h.typoMain)},children:t.commentCount}),Object(O.jsx)("span",{style:{color:"".concat(h.typoSecondary)},children:v.postDetails.comments})]}),Object(O.jsx)(D,{likes:s,postData:t})]}),Object(O.jsxs)("div",{className:"postDetails__post__content__line4",style:{color:h.mobileNavIcon},children:[Object(O.jsx)(y.a,{post:t}),Object(O.jsx)(C.a,{post:t,postData:t,likes:s,setPostData:o,setLikes:a})]})]})]})},B=s(26);t.default=function(e){var t=Object(c.useContext)(u.a),s=t.isLightTheme,i=t.light,l=t.dark,d=s?i:l,m=Object(c.useContext)(_.a),j=m.isEnglish,p=m.english,x=m.german,g=j?p:x,f=Object(c.useContext)(b.a).userData,N=Object(c.useState)(e.match.params.postId?e.match.params.postId:""),k=Object(o.a)(N,2),y=k[0],C=k[1],I=Object(c.useState)([]),w=Object(o.a)(I,2),D=w[0],S=w[1],J=Object(c.useState)([]),L=Object(o.a)(J,2),M=L[0],A=L[1],E=Object(c.useState)([]),T=Object(o.a)(E,2),U=T[0],z=T[1],F=Object(c.useState)(!1),H=Object(o.a)(F,2),R=H[0],q=H[1];document.title=g.postDetails.pageTitle,Object(c.useEffect)((function(){C(e.match.params.postId);var t=e.match.params.postId,s=JSON.parse(window.sessionStorage.getItem(t));s?(S(s.postContent),z(s.postComments),A(s.postLikes),q(!1)):(q(!0),t&&r.a.getPostDetails(t).then((function(e){var s=e.data.post;s.postId=e.data.postId,S(s),z(e.data.comments),A(e.data.likes),window.sessionStorage.setItem(t,JSON.stringify({postContent:s,postComments:e.data.comments,postLikes:e.data.likes})),q(!1)})).catch((function(e){console.log(e),q(!1)})))}),[e.match.params.postId]);return Object(O.jsxs)("div",{className:"postDetails__main",style:{background:"".concat(d.background)},children:[Object(O.jsxs)("div",{className:"postDetails__main__title",style:{borderBottom:"1px solid ".concat(d.border),background:"".concat(d.background)},children:[Object(O.jsxs)("div",{className:"postDetails__main__title__iconBox",onClick:function(){e.history.goBack()},children:[Object(O.jsx)("i",{className:"far fa-arrow-left",style:{color:d.mainColor}}),Object(O.jsx)("div",{className:"postDetails__main__title__iconBox__background",style:{background:d.secondaryColor}})]}),Object(O.jsx)("h1",{style:{color:"".concat(d.typoMain)},children:g.postDetails.title})]}),R?Object(O.jsx)(B.a,{}):Object(O.jsxs)(c.Fragment,{children:[Object(O.jsx)("div",{className:"postDetails",children:Object(O.jsx)(P,{postData:D,setPostData:S,likes:M,setLikes:A})}),f.isAuth?Object(O.jsx)(v,{postId:y,comments:U,setComments:z,postData:D,setPostData:S}):"",Object(O.jsx)("div",{className:"postComments",children:U.length>0?Object(a.a)(U).map((function(e){return Object(O.jsx)(h,{comment:e,authorName:D.userName},e.createdAt)})):Object(O.jsxs)("div",{className:"postComments__empty",children:[Object(O.jsx)("img",{src:n.a,alt:"empty"}),Object(O.jsx)("p",{style:{color:"".concat(d.typoSecondary)},children:g.postDetails.noCommentHint})]})})]})]})}}}]);