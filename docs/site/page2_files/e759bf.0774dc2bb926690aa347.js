(window.serpWebpackJsonp=window.serpWebpackJsonp||[]).push([["e759bf"],{"9wFV":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var l=t("cDcd"),c=t.n(l),s=t("ENTq"),i=t("1/1c"),r=t("eJro"),o=t("F0+J"),n=t("BOZk"),d=t("gpc5"),m=t("3mCK"),u=t("MHpE"),b=t("F1oq"),p=function(e){var a=e.visible,t=e.metaFields,l=e.closeModal,p=e.scopeRef,h=e.checkBoxLabels,k=e.title,v=e.selectParams,E=e.feature,F=e.reactBus,f=e.uploadScreenshot,B=e.textareas,g=void 0===B?["message"]:B,j=e.disableAttachField,x=e.additionalFields,O=e.skipEmail,C=e.restoreFocusRef,w=Object(o.h)(),I=w.email,M=w.resetEmail,D=w.changeEmail,T=Object(o.k)(h),A=T.check,L=T.checkedItems,N=T.setCheckedItems,J=Object(o.m)(),S=J.files,W=J.setFiles,R=Object(o.l)(g),q=R.props,P=R.resetTextareas,V=Object(o.p)((null==v?void 0:v.items)||[]),y=Object(s.useBaobab)(m.l),H=y.node,K=y.nextContext,Z=y.BaobabProvider,z="FeedbackDrawerTitleForA11y-"+H.id,G=Object(o.e)({metaFields:t,email:I,checkedItems:L,checkBoxLabels:h,feature:E,select:v&&{fieldName:v.fieldName,value:v.items[parseInt(V.value)]},uploadScreenshot:f,textareas:q,reactBus:F,additionalFields:x}),Q=G.createTicketIfNeed,U=G.upload,X=G.removeFile,Y=G.ajaxWrapper,$=G.setAttachments,_=G.onChangeEmailView,ee=Object(o.i)({resetTextareas:P,resetEmail:M,ajaxWrapper:Y,setAttachments:$,setCheckedItems:N,checkBoxLabels:h,createTicketIfNeed:Q,closeModal:l,setFiles:W,viewsCount:2}),ae=ee.resetModal,te=ee.closeDialog,le=ee.currentDialog,ce=ee.setCurrentDialog;return Object(o.g)({callback:te,reactBus:F}),Object(o.o)({callback:ae,reactBus:F}),c.a.createElement(Z,{value:K},c.a.createElement(o.a,{value:z},c.a.createElement(i.a,{scope:p,visible:a,restoreFocusRef:C,onClose:function(){var e;l(),null===(e=null==F?void 0:F.emit)||void 0===e||e.call(F,m.a.CLOSE)}},c.a.createElement("div",{"aria-live":"polite"},c.a.createElement(r.a,{currentDialog:le,setCurrentDialog:ce},c.a.createElement(b.a,{title:k||Object(o.c)(),files:S,changeFiles:W,check:A,checkedItems:L,checkBoxLabels:h,uploadFile:U,removeFile:X,select:V,textareas:q,disableAttachField:j,skipEmail:O,reactBus:F,closeModal:l}),c.a.createElement(n.a,{email:I,changeEmail:D,onChangeSlide:_,reactBus:F,closeModal:l}),c.a.createElement(d.a,{email:I,reactBus:F,closeModal:l}),c.a.createElement(u.a,{reactBus:F,closeModal:l}))))))}}}]);