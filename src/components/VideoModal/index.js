import React, { useState } from "react";
import ModalVideo from "react-modal-video";
// import "react-modal-video/scss/modal-video.scss";

const VideoModal = props => {
  const { channel, videoId, open, handleClose } = props;

  return (
    <>
      <ModalVideo
        channel={channel || "custom"}
        autoplay
        isOpen={open}
        videoId={videoId}
        onClose={handleClose}
      />
    </>
  );
};

export default VideoModal;
