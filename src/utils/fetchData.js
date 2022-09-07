// import * as dotenv from 'dotenv';
// dotenv.config();
const {REACT_APP_RAPID_API_KEY}=process.env;
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '15790f43edmsh3525ea70576ee79p1baf06jsn9976e1f1ae43',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

// process.env.REACT_APP_RAPID_API_KEY
