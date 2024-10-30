function selectVideo(video) {
    localStorage.setItem('selectedVideo', video);
    window.location.href = 'video.html';
}

const videoFile = localStorage.getItem('selectedVideo');
            if (videoFile) {
                const videoSource = document.getElementById('videoSource');
                videoSource.src = videoFile;
                document.getElementById('videoPlayer').load();
            }
