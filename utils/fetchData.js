const API_URL =
  'https://lingumi-take-home-test-server.herokuapp.com/videoTutorials';

export const getAllVideos = () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => data);
};

export const getTopRatedTutorialsForTags = (videos, searchTerm) => {
  const filteredTagData = videos.filter((video) =>
    video.tags.includes(searchTerm)
  );

  const top20VideosBasedOnTag = filteredTagData
    .sort((a, b) => (a.averageUserRating > b.averageUserRating ? -1 : 1))
    .slice(0, 20);

  console.log(top20VideosBasedOnTag);
  return top20VideosBasedOnTag;
};

export const searchForTutorials = (videos, searchTerm) => {
  return videos.filter(
    (video) =>
      video.videoTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
