import chai from "chai";
import sinon from 'sinon';
import videoController from '../controllers/videos.js';

const expect = chai.expect;

describe('Video controller Health check', () => {
    let videoStub;
    let controllerStub;

    beforeEach(() => {
      videoStub = [
        {
          cid: 3,
          title: 'Wheels on the Bus',
          link: 'https://www.youtube.com/watch?v=WRVsOCh907o',
          videoid: '123456891',
          thumbnail: 'someUrl'
        },
        {
            cid: 3,
            title: 'Baby Shark Dance',
            link: 'https://www.youtube.com/watch?v=XqZsoesa55w',
            videoid: '54678390',
            thumbnail: 'someUrl2'
          }];

      controllerStub = sinon.stub(videoController, 'getVideos').resolves(videoStub);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('checks the controller', async() => {
      const video = await videoController.getVideos();
      expect(video).to.equal(videoStub);
    });
  });
