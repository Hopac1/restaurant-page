(()=>{"use strict";function e(e){let t=document.createElement("div");t.className="main";let n=document.createElement("div");n.className="info-div";let a=document.createElement("h2");a.textContent='"I\'m Commander Shepard, and this is my favourite cafe on the Citadel!" - Commander Shepard';let d=document.createElement("p");d.textContent="The cafe endorsed by the legendary Commander Shepard is here to bring you the best food on the entire Citadel!",n.appendChild(a),n.appendChild(d),t.appendChild(n),e.appendChild(t)}let t=document.getElementById("content");const n=document.getElementsByClassName("nav-btn");function a(n){const a=n.textContent;"Home"===a?e(t):"Menu"===a?console.log("menu page"):"Contact"===a&&function(e){let t=document.createElement("div"),n=document.createElement("p");n.textContent="email: commandershepard@codex.com";let a=document.createElement("p");a.textContent="address: 123 Example Road, London, England",t.appendChild(n),t.appendChild(a),e.appendChild(t)}(t)}!function(e){let t=document.createElement("div");t.className="header-div";let n=document.createElement("h1");n.textContent="Zakera Cafe",t.appendChild(n);let a=document.createElement("div");a.className="nav-bar";let d=document.createElement("button");d.className="nav-btn",d.textContent="Home",a.appendChild(d);let o=document.createElement("button");o.className="nav-btn",o.textContent="Menu",a.appendChild(o);let l=document.createElement("button");l.className="nav-btn",l.textContent="Contact",a.appendChild(l),t.appendChild(a),e.appendChild(t),console.log("loaderJS")}(t),e(t);for(var d=0;d<n.length;d++)n[d].addEventListener("click",(function(){t.children[1]&&t.removeChild(t.children[1]),a(this)}))})();