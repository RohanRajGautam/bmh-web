import React from "react";
import ModalVideo from "react-modal-video";

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
