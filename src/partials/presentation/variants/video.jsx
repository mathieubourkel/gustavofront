import { useState, useRef, useEffect } from 'react'
import { css } from '@emotion/react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import ImageVariant from './image'

export const Video = () => {
  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const handlePlayerReady = (player) => {
    playerRef.current = player
    player.on('canplay', () => {
      setVideoLoaded(true)
    })
  }

  useEffect(() => {
    const options = {
      autoplay: true,
      muted: true,
      preload: 'auto',
      controls: false,
      loop: true,
      sources: [
        {
          src: 'publicpartialshero\video.mp4',
          type: 'video/mp4',
        },
      ],
    }
    if (!playerRef.current) {
      const videoElement = document.createElement('video')
      videoElement.classList.add('video-js')
      videoRef.current.appendChild(videoElement)
      playerRef.current = videojs(videoElement, options, () => {
        if (handlePlayerReady) handlePlayerReady(playerRef.current)
      })
    } else {
      const player = playerRef.current
      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
  }, [videoRef])

  useEffect(() => {
    const player = playerRef.current
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <>
      <ImageVariant />
      <div
        css={css`
          visibility: ${videoLoaded ? 'visible' : 'hidden'};
          video {
            object-fit: cover;
            height: 100%;
            width: 100%;
            filter: brightness(40%);
            position: absolute;
            top: 0;
            left: 0;
          }
          video-js {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
          }
        `}
        data-vjs-player
      >
        <div ref={videoRef} />
      </div>
    </>
  )
}

export default Video