(window.serpWebpackJsonp=window.serpWebpackJsonp||[]).push([["7368d4"],{VHcp:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var n=t("nimY"),r=t("cDcd"),i=t.n(r),c=t("pzDr"),s=t("fMS1"),d=t("Inj6"),l=t("486F"),o=t("1th9"),u=t("dUJk"),m=t("Al7f"),b=Object(c.createClassNameModifier)(m.c,{theme:"white"}),h=Object(n.g)({desktop:b}),p=t("C0un"),w=Object(n.g)({desktop:function(e){return e}}),v=t("BVDi"),f=t("yn3j"),N=Object(f.cn)("FactRelated"),O=N("Item"),j=N("Button"),x={name:"related"},y=Object(c.compose)(o.a,u.a,h,p.a,w)(l.a),E=Object(n.d)({desktop:function(e){var a=e.items,t=e.theme,n=e.widthFull,r=e.isBetweenPluralFacts,c=e.hasArrows;if(!a.length)return null;var l=N({betweenPlural:r});return i.a.createElement(d.a,{logNode:x,className:l,scrollStep:200,widthFull:n,arrowsTheme:"grayShadow",hasArrows:c,hideArrowLine:!0},a.map((function(e,a){return i.a.createElement(s.a,{key:a},(function(n){var r=n.className;return i.a.createElement("div",{className:"".concat(O," ").concat(r),role:"listitem"},i.a.createElement(y,{className:j,text:e.hint?e.text:Object(v.b)(e.text),url:e.url,query:e.query,index:a,theme:t,icon:"search",withTextPre:!0,hint:e.hint,withHint:Boolean(e.hint),thumbUrl:e.imageUrl,withThumb:Boolean(e.imageUrl)}))}))})))}},{file:"web4/src/components/Fact/-Related/index.ts"})},lbno:function(e,a,t){"use strict";t.d(a,"a",(function(){return K}));var n={};t.r(n),t.d(n,"be",(function(){return v})),t.d(n,"en",(function(){return f})),t.d(n,"id",(function(){return N})),t.d(n,"kk",(function(){return O})),t.d(n,"ru",(function(){return j})),t.d(n,"tr",(function(){return x})),t.d(n,"tt",(function(){return y})),t.d(n,"uk",(function(){return E})),t.d(n,"uz",(function(){return k}));var r,i=t("nimY"),c=t("nAbZ"),s=t("cDcd"),d=t.n(s),l=t("gfRm"),o=t.n(l),u=t("ENTq"),m=t("Lbyd"),b=t("ROha"),h=t("FYdg"),p=t("HGJI"),w=t("YDXQ"),v={"Ответ одобрил":"Адказ ухваліў","Ответ одобрила":"Адказ ўхваліла","Ответил на Кью":"Адказаў на К’ю","Ответил эксперт Кью":"Адказаў эксперт К’ю","Эксперт Кью":"Эксперт Кью"},f={"Ответ одобрил":"Answer approved by","Ответ одобрила":"Answer approved by","Ответил на Кью":"Answered on Yandex.Q","Ответил эксперт Кью":"Answered by a Yandex.Q expert","Эксперт Кью":"Yandex.Q expert"},N={"Ответ одобрил":"Jawaban disetujui oleh","Ответ одобрила":"Jawaban disetujui oleh","Ответил на Кью":"Dijawab di Yandex.Q","Ответил эксперт Кью":"Dijawab oleh pakar Yandex.Q","Эксперт Кью":"ahli Yandex.Q"},O={"Ответ одобрил":"Жауап мақұлданды","Ответ одобрила":"Жауапты мақұлдаған","Ответил на Кью":"Кьюде жауап берді","Ответил эксперт Кью":"Кью сарапшысы жауап берді","Эксперт Кью":"Кью сарапшысы"},j={"Ответ одобрил":"Ответ одобрил","Ответ одобрила":"Ответ одобрила","Ответил на Кью":"Ответил на Кью","Ответил эксперт Кью":"Ответил эксперт Кью","Эксперт Кью":"Эксперт Кью"},x={"Ответ одобрил":"Yanıtı onaylayan:","Ответ одобрила":"Yanıt onaylandı","Ответил на Кью":"Yandex.Q'da yanıt verdi","Ответил эксперт Кью":"Yandex.Q uzmanı tarafından yanıtlandı","Эксперт Кью":"Yandex.Q uzmanı"},y={"Ответ одобрил":"Җавапны хуплады","Ответ одобрила":"Җавап хупланды","Ответил на Кью":"Кью'да җавап бирде","Ответил эксперт Кью":"Кью белгече җавап бирде","Эксперт Кью":"Кью белгече"},E={"Ответ одобрил":"Відповідь схвалив","Ответ одобрила":"Відповідь схвалила","Ответил на Кью":"Відповів на Кью","Ответил эксперт Кью":"Відповів експерт Кью","Эксперт Кью":"Експерт Кью"},k={"Ответ одобрил":"Javobni tasdiqadi:","Ответ одобрила":"Javobni tasdiqladi:","Ответил на Кью":"Kyuda javob berdi","Ответил эксперт Кью":"Kyu eksperti javob berdi","Эксперт Кью":"Kyu eksperti"},g=t("yn3j"),A=Object(g.cn)("AnswererHeader"),Y=A("DefaultAvatar"),T=A("Link"),D=A("Content"),Q=A("Container"),B=A("Icon"),J=A("Icon",{expert:!0}),F=A("TextContent"),M=A("Name"),P=A("Description"),q=A("Answered",{type:"green"}),z=A("Answered",{type:"black"}),C=A("About");!function(e){e[e.TOP=0]="TOP",e[e.BOTTOM=1]="BOTTOM"}(r||(r={}));var H=Object(h.a)(b.a),I=Object(w.a)(p.a),U=o()(n),R=Object(u.withBaobab)({name:"answerer-header"},(function(e){var a=e.isExpert,t=e.url,n=e.avatarUrl,i=e.name,s=e.about,l=e.extralinks,o=e.isAgreed,u=e.withDivider,b=e.gender,h=e.withMention,p=void 0===h||h,w=e.className,v=U("Ответил эксперт Кью"),f=U("Ответил на Кью"),N="";o&&(N=U("f"===b?"Ответ одобрила":"Ответ одобрил")+" ");var O=U("Эксперт Кью"),j=a?v:f,x=A({single:!p},[w]),y=A("Divider",{top:!0}),E=A("Divider",{bottom:!0});return d.a.createElement("div",{className:x},u===r.TOP&&d.a.createElement("div",{className:y}),d.a.createElement("div",{className:Q},d.a.createElement("div",{className:D},d.a.createElement(H,{url:t,className:T,logNode:{name:"author-link"}}),n?d.a.createElement(I,{className:a?J:B,image:n,width:38,height:38,shape:"circle",lazy:!0}):d.a.createElement("div",{className:Y}),d.a.createElement("div",{className:F},d.a.createElement("div",{className:M},N+i),d.a.createElement("div",{className:P},d.a.createElement("span",{className:o?z:q},p&&(o?O:j)),s&&d.a.createElement("span",{className:C},s)))),l&&d.a.createElement(m.a,Object(c.a)({},l))),u===r.BOTTOM&&d.a.createElement("div",{className:E}))})),K=Object(i.d)({desktop:R},{file:"web4/src/components/AnswererHeader/index.ts"})}}]);