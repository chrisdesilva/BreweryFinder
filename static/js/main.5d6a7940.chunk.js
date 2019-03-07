(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(51)},26:function(e,a,t){},30:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(6),s=t.n(c),o=(t(26),t(9)),i=t.n(o),l=t(15),h=t(1),m=t(2),u=t(4),p=t(3),y=t(5),d=(t(30),function(e){function a(){return Object(h.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(m.a)(a,[{key:"displayWebsiteUrl",value:function(e){if(e)return n.a.createElement("a",{className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer",href:e,onMouseDown:function(e){return e.preventDefault()}},"Check Them Out")}},{key:"render",value:function(){var e=this.props.brewery,a=e.city,t=e.name,r=e.brewery_type,c=e.state,s=e.street,o=e.website_url;return n.a.createElement("div",{className:"col-10 mx-auto col-md-6 col-lg-4 my-3"},n.a.createElement("div",{className:"card h-100"},n.a.createElement("div",{className:"card-body flex-column h-100"},n.a.createElement("h5",{className:"Kreon-Text text-capitalize"},t),n.a.createElement("h6",{className:"text-capitalize"},n.a.createElement("strong",null,"Type: "),r),n.a.createElement("h6",{className:"text-capitalize"},s),n.a.createElement("h6",{className:"text-capitalize"},a,", ",c),this.displayWebsiteUrl(o))))}}]),a}(r.Component)),b=t(7),f=t.n(b),v=function(e){function a(){return Object(h.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(m.a)(a,[{key:"onClick",value:function(){this.props.backToSearch()}},{key:"displayResult",value:function(e,a,t){return e.length?e.map(function(e){return n.a.createElement(d,{key:e.id,brewery:e})}):n.a.createElement("h1",{className:"Kreon-Text text-center"},"Sorry, no results found for ",a," within the ",t," filter.")}},{key:"render",value:function(){var e=this,a=this.props,t=a.breweries,r=a.searchTerm,c=a.searchParam;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"pt-5"},n.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark py-2 mb-5"},n.a.createElement(f.a,{strings:["Time to drink","Time to party","Time to relax"],typeSpeed:70,startDelay:1200,backDelay:3e3,backSpeed:60,loop:!0,loopCount:30,showCursor:!0,className:"h4 mx-auto Quicksand-Text"}),n.a.createElement("form",{className:"form-inline my-2 my-lg-0"},n.a.createElement("button",{type:"button",className:"btn btn-outline-info",onClick:function(){return e.onClick()}},"Back to Search")))),n.a.createElement("div",{className:"container my-5"},n.a.createElement("div",{className:"row"},this.displayResult(t,r,c))))}}]),a}(r.Component),w=t(18),E=t.n(w),g=function(e){var a=e.val,t=e.searchBy,r=e.handleSearchChange,c=(e.identifier,e.tooltip);return n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"searchByOptions",id:"cityRadio",value:a,onChange:r,checked:t===a}),n.a.createElement("label",{className:"form-check-label text-capitalize",htmlFor:"cityRadio","data-tip":c},a),n.a.createElement(E.a,null))},k=function(e){function a(){var e,t;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).state={search:"",searchBy:"city"},t.updateSearch=function(e){t.setState({search:e.target.value})},t.onSearchClick=function(){""!==t.state.search&&t.props.handleSearch(t.state.search)},t.onSearchChange=function(e){t.setState({searchBy:e.target.value}),t.props.searchBy(e.target.value)},t}return Object(y.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"jumbotron text-center"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h1",{className:"Quicksand-Text Glow"},"Brewery Finder"),n.a.createElement(f.a,{strings:["Find a brewery in your hometown","Find your new hangout","Find your new favorite beer","Find the answer to your problems"],typeSpeed:70,startDelay:1200,backDelay:3e3,backSpeed:60,loop:!0,loopCount:30,showCursor:!0,className:"h4"})))),n.a.createElement("div",{className:"container mb-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-10 mx-auto col-md-8 mt-5 text-center"},n.a.createElement("h2",{className:"text-capitalize"},"search for breweries by ",this.state.searchBy),n.a.createElement("form",{className:"form input-group",onSubmit:this.onSearchClick},n.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search here...",onChange:this.updateSearch}),n.a.createElement("button",{className:"btn btn-primary mx-2"},"Search")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col text-center mt-2"},n.a.createElement(g,{val:"city",searchBy:this.state.searchBy,handleSearchChange:this.onSearchChange,identifier:"cityRadio",tooltip:"Search by city"}),n.a.createElement(g,{val:"state",searchBy:this.state.searchBy,handleSearchChange:this.onSearchChange,identifier:"stateRadio",tooltip:"Search by state"}),n.a.createElement(g,{val:"name",searchBy:this.state.searchBy,handleSearchChange:this.onSearchChange,identifier:"nameRadio",tooltip:"Search by brewery name"}),n.a.createElement(g,{val:"type",searchBy:this.state.searchBy,handleSearchChange:this.onSearchChange,identifier:"typeRadio",tooltip:"Types: micro, regional, brewpub, large, planning, bar, contract, proprietor"})))),n.a.createElement("footer",{className:"mx-auto py-3"},n.a.createElement("div",{className:"container text-center"},"Powered By"," ",n.a.createElement("span",{className:"text-muted"},n.a.createElement("a",{href:"https://www.openbrewerydb.org/",target:"_blank",rel:"noopener noreferrer"},"Open Brewery DB")))))}}]),a}(r.Component),S="home",N="search_results",B=function(e){function a(){var e,t;Object(h.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(c)))).state={breweries:[],isLoaded:!1,url:"https://api.openbrewerydb.org/breweries",searchTerm:"Boston",searchByParam:"city",page:S},t.filterResults=function(e){return e.filter(function(e){return!e.name.toLowerCase().includes("Brewery In Planning".toLowerCase())})},t.backToSearch=function(){t.setState({searchByParam:"city",page:S})},t.handleSearch=function(e){var a=t.state.searchByParam;t.setState({url:"https://api.openbrewerydb.org/breweries?by_".concat(a,"=").concat(e),searchTerm:e,page:N})},t.searchBy=function(e){t.setState({searchByParam:e})},t.whatToDisplay=function(e){var a=t.state,r=a.breweries,c=a.searchTerm,s=a.searchByParam;return e===N?n.a.createElement(v,{breweries:r,backToSearch:t.backToSearch,searchTerm:c,searchParam:s}):n.a.createElement(k,{handleSearch:t.handleSearch,searchBy:t.searchBy})},t}return Object(y.a)(a,e),Object(m.a)(a,[{key:"fetchBreweryData",value:function(){var e=Object(l.a)(i.a.mark(function e(){var a,t,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isLoaded:!1}),e.next=4,fetch(this.state.url);case 4:return a=e.sent,e.next=7,a.json();case 7:t=e.sent,r=this.filterResults(t),this.setState({isLoaded:!0,breweries:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,a){this.state.url!==a.url&&this.fetchBreweryData()}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,a=e.isLoaded,t=e.page;return this.state.page!==N||a?n.a.createElement(n.a.Fragment,null,this.whatToDisplay(t)):n.a.createElement("div",null,"Loading...")}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.5d6a7940.chunk.js.map