'use strict'

import request from 'request';
import cheerio from 'cheerio';

export default class GoogleScraper {
  constructor() {
    request('http://www.google.com', (error, response, responseHtml) => {
      let html = responseHtml;
      this.html = html;
    });
  }

  getHtml() {
    return this.html;
  }
}
