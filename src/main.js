const refs = {
    form: document.querySelector('.form'),
    galleryList: document.querySelector('.card-list'),
    loader: document.querySelector('.loader'),
    loadMoreBtn: document.querySelector('.load-more')
}

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"; 
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchPhotosByPixabay } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";

const lightbox = new SimpleLightbox('.card-list a');

let counterPages = 1;
let searchKeyword = '';

refs.loadMoreBtn.style.display = 'none';

function showMessage() {
    iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        maxWidth: '300px'
    });
}

async function onSearchFormSubmit(event) {
    event.preventDefault();
    searchKeyword = event.target.elements.searchKeywords.value.trim();
    if (searchKeyword === '') {
        showMessage();
        refs.galleryList.innerHTML = '';
        return;
    }
    counterPages = 1;
    refs.loader.classList.remove('is-hidden');

    try {
        const imagesData = await fetchPhotosByPixabay(searchKeyword, counterPages);
        if (imagesData.hits.length === 0) {
            refs.loadMoreBtn.style.display = 'none';
            showMessage();
            refs.galleryList.innerHTML = '';
            return;
        }
        const markup = createGallery(imagesData.hits);
        refs.galleryList.innerHTML = markup;
        lightbox.refresh();
        refs.loadMoreBtn.style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
    } finally {
        event.target.reset();
        refs.loader.classList.add('is-hidden');
    }
}

async function onLoadMoreClick() {
    refs.loader.classList.remove('is-hidden');
    try {
        const imagesData = await fetchPhotosByPixabay(searchKeyword, counterPages + 1);
        if (counterPages * 15 >= imagesData.totalHits) {
            refs.loadMoreBtn.style.display = 'none';
        }
        if (imagesData.hits.length > 0) {
            const markup = createGallery(imagesData.hits);
            refs.galleryList.insertAdjacentHTML('beforeend', markup);
            lightbox.refresh();
            counterPages += 1;
            smoothScroll();
        } else {
            showMessage();
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        refs.loader.classList.add('is-hidden');
    }
}

function smoothScroll() {
    const cardHeight = refs.galleryList.querySelector('.img-card').getBoundingClientRect().height;
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth'
    });
}





refs.form.addEventListener('submit', onSearchFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);

