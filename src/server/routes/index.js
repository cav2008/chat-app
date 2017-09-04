import express from 'express';
const routes = express.Router();

import GoogleScraper from '../components/google-scraper/google-scraper';

routes.get('/', (request, response) => {
  let googleScraper = new GoogleScraper();

  setTimeout(() => {
    response.send(googleScraper.getHtml());
  }, 5000);
});

module.exports = routes;