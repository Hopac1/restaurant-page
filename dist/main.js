(()=>{"use strict";function e(e){let t=document.createElement("div");t.className="main";let n=document.createElement("div");n.className="info-div";let a=document.createElement("h2");a.textContent="From chocolate frogs to butterbeer, we sell it all!";let l=document.createElement("p");l.className="description",l.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",n.appendChild(a),n.appendChild(l),t.appendChild(n),e.appendChild(t)}function t(e,t){const n=document.createElement("img");return n.className="menu-item",n.src="/dist/images/"+e+t,n.alt=e+"-image",n}function n(e){const t=document.createElement("div");t.className="item-name-container";const n=document.createElement("h2");return n.className="item-name",n.textContent=e,t.appendChild(n),t}let a=document.getElementById("content");const l=document.getElementsByClassName("nav-btn");function o(l){const o=l.textContent;"Home"===o?e(a):"Menu"===o?function(e){const a=document.createElement("div");a.className="menu-container";let l=t("chocolate-frog",".png"),o=n("Chocolate Frog - 4.95");o.appendChild(l),a.appendChild(o),l=t("bertie-botts-beans",".png"),o=n("Bertie Bott's Every Flavour Beans - 8.95"),o.appendChild(l),a.appendChild(o),l=t("exploding-bon-bons",".png"),o=n("Exploding Bon Bons - 8.00"),o.appendChild(l),a.appendChild(o),l=t("fizzing-whizzbees",".png"),o=n("Fizzing Whizzbees - 8.00"),o.appendChild(l),a.appendChild(o),l=t("butterbeer",".png"),o=n("Butterbeer - 3.95"),o.appendChild(l),a.appendChild(o),l=t("butterbeer-4-pack",".png"),o=n("Butterbeer 4 Pack - 11.95"),o.appendChild(l),a.appendChild(o),e.appendChild(a)}(a):"Contact"===o&&function(e){let t=document.createElement("div");t.className="contact-container";let n=document.createElement("p");n.textContent="Contact Us",n.className="title";let a=document.createElement("p");a.textContent="mustnotbenamed@email.com",a.className="contact";let l=document.createElement("p");l.textContent="Where We Are",l.className="title";let o=document.createElement("p");o.textContent="93 Diagon Alley, London, England, Great Britain",o.className="contact";const i=document.createElement("img");i.className="map",i.src="images/map.png",i.alt="map-of-shop",t.appendChild(n),t.appendChild(a),t.appendChild(l),t.appendChild(o),t.appendChild(i),e.appendChild(t)}(a)}!function(e){let t=document.createElement("div");t.className="header-div";let n=document.createElement("h1");n.textContent="Weasleys' Wizard Wheezes";let a=document.createElement("img");a.className="shop-logo",a.src="images/shop-logo.png",a.alt="shop-logo",t.appendChild(a),t.appendChild(n);let l=document.createElement("div");l.className="nav-bar";let o=document.createElement("button");o.className="nav-btn",o.textContent="Home",l.appendChild(o);let i=document.createElement("button");i.className="nav-btn",i.textContent="Menu",l.appendChild(i);let d=document.createElement("button");d.className="nav-btn",d.textContent="Contact",l.appendChild(d),t.appendChild(l),e.appendChild(t),console.log("loaderJS")}(a),e(a);for(var i=0;i<l.length;i++)l[i].addEventListener("click",(function(){a.children[1]&&a.removeChild(a.children[1]),o(this)}))})();