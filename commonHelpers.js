import{a as m,S as f,i as y}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const g="43997870-ac002090f9f8b16e802d8cd1f";m.defaults.baseURL="https://pixabay.com/api/";const u=async(t,e=1)=>{const a={q:t,key:g,image_type:"photo",safesearch:"true",orientation:"horizontal",per_page:15,page:e};try{return(await m.get("",{params:{...a}})).data}catch(i){throw console.error("Error fetching photos:",i),new Error("Failed to fetch photos from Pixabay API")}},h=t=>t.map(e=>`<li class="img-card">
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
        </ul>`).join(""),r={form:document.querySelector(".form"),galleryList:document.querySelector(".card-list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")},p=new f(".card-list a");let l=1,n="";r.loadMoreBtn.style.display="none";function d(){y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"300px"})}async function L(t){if(t.preventDefault(),n=t.target.elements.searchKeywords.value.trim(),n===""){r.loadMoreBtn.style.display="none",d(),r.galleryList.innerHTML="";return}l=1,r.loader.classList.remove("is-hidden");try{const e=await u(n,l);if(e.hits.length===0){d(),r.galleryList.innerHTML="",r.loadMoreBtn.style.display="none";return}const a=h(e.hits);r.galleryList.innerHTML=a,p.refresh(),r.loadMoreBtn.style.display="block"}catch(e){console.error("Error:",e)}finally{t.target.reset(),r.loader.classList.add("is-hidden")}}async function b(){r.loader.classList.remove("is-hidden");try{const t=await u(n,l+1);if(l*15>=t.totalHits&&(r.loadMoreBtn.style.display="none"),t.hits.length>0){const e=h(t.hits);r.galleryList.insertAdjacentHTML("beforeend",e),p.refresh(),l+=1,w()}else d()}catch(t){console.error("Error:",t)}finally{r.loader.classList.add("is-hidden")}}function w(){const t=r.galleryList.querySelector(".img-card").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}r.form.addEventListener("submit",L);r.loadMoreBtn.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
