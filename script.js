const apiKey = 'AIzaSyAeDYnV9HfM1Powpy07Vqs5LG75UqhrPMA';
const videoId = 'G52dUQLxPzg';

function onYouTubeIframeAPIReady() {
    const player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}
