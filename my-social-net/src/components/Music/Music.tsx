import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styles from './Music.module.css'

const Music = () => {
  return (
    <div className={styles.container}>
      <h3>Music</h3>
      <ReactAudioPlayer
        src="my_audio_file.ogg"
        autoPlay
        controls
      />
    </div>
  )
}

export default Music;