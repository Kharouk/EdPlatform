import {
  getAllVideos,
  getTopRatedTutorialsForTags,
  searchForTutorials,
} from '../fetchData';

import mockVideos from '../__mocks__/mockedData';

describe('get all videos', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockVideos),
    })
  );

  beforeEach(() => {
    fetch.mockClear();
  });

  it('gets all the videos from the API', async () => {
    const videos = await getAllVideos();
    expect(videos).toHaveLength(7);
    expect(videos[0]).toHaveProperty('videoTitle');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://lingumi-take-home-test-server.herokuapp.com/videoTutorials'
    );
  });
});

describe('fetching videos by search term', () => {
  it('searches for tutorial based on name', () => {
    const foundMatches = searchForTutorials(mockVideos, 'Places');
    expect(foundMatches).toHaveLength(2);
    expect(foundMatches[0]).toHaveProperty('videoTitle', 'Practice: Places');
  });

  it('searches for tutorial based on teacher', () => {
    const foundMatches = searchForTutorials(mockVideos, 'Trev');
    expect(foundMatches).toHaveLength(1);
    expect(foundMatches[0]).toHaveProperty('teacherName', 'Trevor');
  });

  it('fails to find tutorial due to bad search', () => {
    const noMatches = searchForTutorials(mockVideos, 'Alex');
    expect(noMatches).toHaveLength(0);
  });
});

describe('fetching videos by tag', () => {
  it('searches for video based on tag', () => {
    const foundMatches = getTopRatedTutorialsForTags(mockVideos, 'Exciting');
    expect(foundMatches).toHaveLength(2);
    expect(foundMatches[0].tags).toEqual(expect.arrayContaining(['Exciting']));
  });

  it('fails to find video due to non-existing tag', () => {
    const noMatches = getTopRatedTutorialsForTags(mockVideos, 'Extreme');
    expect(noMatches).toHaveLength(0);
  });

  it('ranks the returned videos correctly based on rating', () => {
    const foundMatches = getTopRatedTutorialsForTags(mockVideos, 'Passive');
    expect(foundMatches).toHaveLength(4);
    const topMatch = foundMatches[0];
    const secondMatch = foundMatches[1];

    expect(
      topMatch.averageUserRating > secondMatch.averageUserRating
    ).toBeTruthy();
  });
});
