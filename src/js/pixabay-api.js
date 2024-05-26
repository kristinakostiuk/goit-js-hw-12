import axios from "axios";

const API_KEY = '43997870-ac002090f9f8b16e802d8cd1f';
axios.defaults.baseURL = 'https://pixabay.com/api/'; 

export const fetchPhotosByPixabay = async (query, page = 1) => {
    const searchParams = {
        q: query,
        key: API_KEY,
        image_type: 'photo',
        safesearch: 'true',
        orientation: 'horizontal',
        per_page: 15,
        page: page,
    };

    try {
        const response = await axios.get('', { params: { ...searchParams } });
        return response.data;
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw new Error('Failed to fetch photos from Pixabay API');
    }
}
