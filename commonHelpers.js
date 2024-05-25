import{a as u,S as p,i as y}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const g="43997870-ac002090f9f8b16e802d8cd1f";u.defaults.baseURL="https://pixabay.com/api/";const m=(t,e)=>{const i={q:t,key:g,image_type:"photo",safesearch:"true",orientation:"horizontal",per_page:15,page:e};return u.get("",{params:{...i}}).then(a=>a.data).catch(a=>{throw console.error("Error fetching photos:",a),new Error("Failed to fetch photos from Pixabay API")})},h=t=>t.map(e=>`<li class="img-card">
            <a href="${e.largeImageURL}" class="card-link">
                <img 
                class="img"
                src="${e.largeImageURL}" 
                alt="${e.tags}">
            </a>
        <ul class="params-list">
            <li class="params-items"> 
                <h2 class="item-subtitle">Likes</h2> 
                <p class="item-counter">${e.likes}</p>
            </li>
            <li class="params-items">
                <h2 class="item-subtitle">Views</h2>
                <p class="item-counter">${e.views}</p>
            </li>
            <li class="params-items">
                <h2 class="item-subtitle">Comments</h2>
                <p class="item-counter">${e.comments}</p>
            </li>
            <li class="params-items">
                <h2 class="item-subtitle">Downloads</h2>
                <p class="item-counter">${e.downloads}</p>
            </li>
        </ul>`).join(""),s={form:document.querySelector(".form"),galleryList:document.querySelector(".card-list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")},f=new p(".card-list a");let d=1,l="";s.loadMoreBtn.style.display="none";function n(){y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"300px"})}async function L(t){if(t.preventDefault(),l=t.target.elements.searchKeywords.value.trim(),l===""){n(),s.galleryList.innerHTML="";return}s.loader.classList.remove("is-hidden");try{const e=await m(l);if(e.hits.length===0){n(),s.galleryList.innerHTML="";return}const i=h(e.hits);s.galleryList.innerHTML=i,f.refresh(),s.loadMoreBtn.style.display="block"}catch(e){console.error("Error:",e)}finally{t.target.reset(),s.loader.classList.add("is-hidden")}}async function b(){s.loader.classList.remove("is-hidden");try{const t=await m(l,d+1);if(t.hits.length>0){const e=h(t.hits);s.galleryList.insertAdjacentHTML("beforeend",e),f.refresh(),d+=1,d*15>=t.totalHits&&(s.loadMoreBtn.style.display="none",n("We're sorry, but you've reached the end of search results.")),w()}else n()}catch(t){console.error("Error:",t)}finally{s.loader.classList.add("is-hidden")}}function w(){const t=s.galleryList.querySelector(".img-card").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}s.form.addEventListener("submit",L);s.loadMoreBtn.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
