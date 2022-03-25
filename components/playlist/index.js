import React, { useState } from 'react'
import Player from './player'
import { slugify } from './helpers'


const Playlist = ({ playlist }) => {
    const [currentPlayer, setCurrentPlayer] = useState()

    let current

    const togglePlay = (id) => {

        const currentAudio = document.getElementById(id)
        const players = document.getElementsByTagName('audio')
        const playersArray = [...players]

        const notPlaying = playersArray.filter(item => {
            if (item !== currentAudio) {
                return item
            }
            return null
        })

        if (!currentAudio.paused) {
            currentAudio.pause()
        } else {
            currentAudio.play()
            notPlaying.map(player => {
                player.pause()
                setCurrentPlayer(!player)
                return null
            })
        }

        current = currentAudio
        setCurrentPlayer(current)
    }

    return (
        <div>
            {playlist.map((track, index) => {
                const slug = slugify(
                    track.trackName + '-' + track.trackArtist + '-' + track.id
                )
                return (
                    <Player
                        key={track.id}
                        slug={slug}
                        index={index}
                        source={track.source}
                        togglePlay={togglePlay}
                        trackName={track.trackName}
                        loop={track.loop}
                        isCurrent={
                            currentPlayer && currentPlayer.id === slug
                                ? true
                                : false
                        }
                    />
                )
            })}
        </div>
    )
}

export default Playlist
