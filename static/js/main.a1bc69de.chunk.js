(this["webpackJsonptts-w03-d04-react-tic-tac-toe"]=this["webpackJsonptts-w03-d04-react-tic-tac-toe"]||[]).push([[0],{12:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var s=r(8),n=r(2),a=r(3),i=r(5),c=r(4),u=r(0),o=(r(11),r(12),r(13),r(1)),l=r.n(o),h=r(7),d=r.n(h);var j=function(e){return Object(u.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})},b=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(u.jsx)(j,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(u.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(u.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(l.a.Component),x=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},s}return Object(a.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],n=v(s.squares),a=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start";return Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:s})},r)}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),Object(u.jsxs)("div",{className:"game",children:[Object(u.jsx)("div",{className:"game-board",children:Object(u.jsx)(b,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(u.jsxs)("div",{className:"game-info",children:[Object(u.jsx)("div",{children:e}),Object(u.jsx)("ol",{children:a})]})]})}}]),r}(l.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(s.a)(t[r],3),a=n[0],i=n[1],c=n[2];if(e[a]&&e[a]===e[i]&&e[a]===e[c])return e[a]}return null}d.a.render(Object(u.jsx)(l.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("game"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a1bc69de.chunk.js.map