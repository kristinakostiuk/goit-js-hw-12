export const createGallery = (images) => {
    return images.map((image) => {
    return `<li class="img-card">
            <a href="${image.largeImageURL}" class="card-link">
                <img 
                class="img"
                src="${image.largeImageURL}" 
                alt="${image.tags}">
            </a>
        <ul class="params-list">
            <li class="params-items"> 
                <h2 class="item-subtitle">Likes</h2> 
                <p class="item-counter">${image.likes}</p>
            </li>
            <li class="params-items">
                <h2 class="item-subtitle">Views</h2>
                <p class="item-counter">${image.views}</p>
            </li>
            <li class="params-items">
                <h2 class="item-subtitle">Comments</h2>
                <p class="item-counter">${image.comments}</p>
            </li>
            <li class="params-items">
                <h2 class="item-subtitle">Downloads</h2>
                <p class="item-counter">${image.downloads}</p>
            </li>
        </ul>`
    }).join('');
}
