import News from './news/news';
import Sources from './sources/sources';
import { mainResponse, sourceResponse } from './news/interfaces';

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: mainResponse): void {
    const values = data.articles ? data.articles : [];
    this.news.draw(values);
  }

  drawSources(data: sourceResponse): void {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
