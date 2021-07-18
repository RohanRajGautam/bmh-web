import React from "react";
import ModalVideo from "react-modal-video";
import styled from "styled-components";

const Wrapper = styled.div`
  .modal-video-close-btn {
    cursor: pointer;
  }
`;

const VideoModal = props => {
  const { channel, videoId, open, handleClose } = props;

  return (
    <Wrapper>
      <ModalVideo
        channel={channel || "custom"}
        autoplay
        isOpen={open}
        videoId={videoId}
        onClose={handleClose}
      />
    </Wrapper>
  );
};

export default VideoModal;
