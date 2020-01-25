import { NewsRoomPage } from './app.po';

describe('news-room App', function() {
  let page: NewsRoomPage;

  beforeEach(() => {
    page = new NewsRoomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
