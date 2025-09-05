import PropTypes from 'prop-types';
import { MusicalNoteIcon, FilmIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { moodResources } from '../const/data';

const MusicResources = ({ music }) => {
  if (!music?.length) return null;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-600">
        <MusicalNoteIcon className="w-6 h-6" />
        Recommended Music
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {music.map((track, index) => (
          <a
            key={index}
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <MusicalNoteIcon className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-medium">{track.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const VideoResources = ({ videos }) => {
  if (!videos?.length) return null;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-600">
        <FilmIcon className="w-6 h-6" />
        Helpful Videos
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <FilmIcon className="w-5 h-5 text-purple-600" />
              </div>
              <span className="font-medium">{video.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const ContentResources = ({ contents }) => {
  if (!contents?.length) return null;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-600">
        <BookOpenIcon className="w-6 h-6" />
        Reading Materials
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {contents.map((content, index) => (
          <a
            key={index}
            href={content.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <BookOpenIcon className="w-5 h-5 text-green-600" />
              </div>
              <span className="font-medium">{content.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const MoodResources = ({ moodResult }) => {
  const moodData = moodResources.find(resource => 
    resource.mood.toLowerCase() === moodResult.toLowerCase()
  );

  if (!moodData) {
    return (
      <div className="p-8 text-center text-gray-500">
        No resources found for this mood
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Resources for <span className='text-blue-500'> {moodData.mood}</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Curated content to help you navigate your current mood
        </p>
      </div>

      <div className="space-y-12">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <MusicResources music={moodData.music} />
          <VideoResources videos={moodData.videos} />
          <ContentResources contents={moodData.contents} />
        </div>
      </div>
    </div>
  );
};

// Prop type validation
MusicResources.propTypes = {
  music: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

VideoResources.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

ContentResources.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

MoodResources.propTypes = {
  moodResult: PropTypes.string.isRequired,
};

export default MoodResources;