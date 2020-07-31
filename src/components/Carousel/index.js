import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import SliderResponsive from './components/SliderResponsive';

function VideoCardGroup({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )}
        </>
      )}
      <SliderResponsive>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <VideoCard
              key={video.titulo}
              videoTitle={video.titulo}
              videoURL={video.url}
              categoryColor={categoryColor}
            />
          );
        })}
      </SliderResponsive>
    </VideoCardGroupContainer>
  );
}

VideoCardGroup.defaultProps = {
  ignoreFirstVideo: true,
};

VideoCardGroup.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    cor: PropTypes.string.isRequired,
    link_extra: PropTypes.string,
    videos: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
};

export default VideoCardGroup;
