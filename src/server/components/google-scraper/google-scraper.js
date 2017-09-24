'use strict'

import request from 'request';
import cheerio from 'cheerio';

export default class GoogleScraper {
  // constructors should not have any methods, only call them.
  constructor() {
    this.html = '';
    this.scrapeData();
  }

  /**
   * Go to www.google.com and grabs the html data.
   */
  scrapeData() {
    request('http://www.google.com', (error, response, responseHtml) => {
      let html = responseHtml;
      this.html = html;
    });
  }

  getHtml() {
    return this.html;
  }
}
