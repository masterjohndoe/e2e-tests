(window.serpWebpackJsonp=window.serpWebpackJsonp||[]).push([["4a590d"],{Rrue:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return s})),o.d(t,"c",(function(){return r})),o.d(t,"d",(function(){return d})),o.d(t,"e",(function(){return c})),o.d(t,"f",(function(){return l})),o.d(t,"g",(function(){return a}));var i=o("yn3j"),n=Object(i.cn)("Fold"),s=n(),r=n("Body"),d=n("More"),c=n("MoreArrow"),l=n("MoreIcon"),a=n("MoreText")},fEZv:function(e,t,o){"use strict";o.d(t,"a",(function(){return h}));var i=o("nimY"),n=o("nAbZ"),s=o("cDcd"),r=o.n(s),d=o("ENTq"),c=o("Rrue"),l=function(e){function t(t){var o=e.call(this,t)||this;return o.state={unfolded:Boolean(o.props.unfolded),moreHidden:Boolean(o.props.checkHeight)},o.bodyRef=r.a.createRef(),o.toggleFold=o.toggleFold.bind(o),o}return Object(n.d)(t,e),t.prototype.componentDidMount=function(){this.checkFoldMoreVisibility()},t.prototype.componentDidUpdate=function(e,t){e.visibleHeight!==this.props.visibleHeight&&this.recheckFoldMoreVisibility(),e.unfolded!==this.props.unfolded&&(this.props.onlyExpandFromOutside?this.props.unfolded&&this.setState({unfolded:Boolean(this.props.unfolded)}):this.setState({unfolded:Boolean(this.props.unfolded)})),t.unfolded!==this.state.unfolded&&this.props.toggleCallback&&this.props.toggleCallback(this.state.unfolded,this.bodyRef)},t.prototype.hasMoreVisible=function(){var e=this.bodyRef&&this.bodyRef.current;if(e){var t=Math.ceil(e.scrollHeight),o=this.props.visibleHeight;return"string"==typeof o&&(o=o.includes("vh")?window.innerHeight*parseInt(o)/100:parseInt(o)),t>o}},t.prototype.checkFoldMoreVisibility=function(){if(this.props.checkHeight&&!this.state.unfolded&&this.state.moreHidden&&(this.bodyRef&&this.bodyRef.current)){var e=this.hasMoreVisible();void 0!==e&&e&&this.setState({moreHidden:!1})}},t.prototype.recheckFoldMoreVisibility=function(){if(this.props.checkHeight&&(this.bodyRef&&this.bodyRef.current)){var e=this.hasMoreVisible();void 0===e||e||this.setState({moreHidden:!0})}},t.prototype.toggleFold=function(){this.setState({unfolded:!this.state.unfolded})},t.prototype.render=function(){var e,t=this.props,o=t.className,i=t.visibleHeight,n=t.children,s=t.moreBtn,d=t.counter,l=this.state,a=l.unfolded,h=l.moreHidden;return a||(e="string"==typeof i?i:"".concat(i,"px")),r.a.createElement("div",{className:Object(c.a)({unfolded:a,moreHidden:h},[o])},r.a.createElement("div",{className:c.c,ref:this.bodyRef,style:{maxHeight:e}},n),s&&s({className:c.d,onClick:this.toggleFold,unfolded:a,counter:d}))},t}(r.a.PureComponent),a=Object(d.withBaobab)({name:"fold"})(l),h=Object(i.d)({desktop:a},{file:"web4/src/components/Fold/index.ts"})}}]);