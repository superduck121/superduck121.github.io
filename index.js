const avatar_size = "250";
const scary_stuff_api = "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=5&playlistId=PLB-N7HCHfAKkwAsEGI-qxi7rtFvpRNVdp&key=AIzaSyCbC_OKrob1ihx37UXgCMcFQD273dvm3MU";
let scary_stuff = document.getElementById("scary-stuff");
let video_container = document.getElementById("video-container");

function load_avatar() {
    let roblox_avatar = document.getElementById("roblox_avatar");
    roblox_avatar.src = "https://www.roblox.com/Thumbs/Avatar.ashx?x=" + avatar_size
        + "&y=" + avatar_size + "&username=SuperDuck121";
}

function load_videos(resp) {
    let videos = resp.items;
    videos.map(function (video) {
        let div_player = document.createElement('div');
        let iframe_player = document.createElement('iframe');

        div_player.className = "embed-responsive embed-responsive-16by9 mb-3";
        iframe_player.className = "embed-responsive-item";
        iframe_player.src = "https://www.youtube.com/embed/" + video.contentDetails.videoId;

        video_container.appendChild(div_player).appendChild(iframe_player);

    })

}

function load_audio() {
    let left_side = document.getElementById("music_box");
    left_side.innerHTML = "\<audio src = \"sounds/are_you.ogg\" autoplay >";
}

function get_videos() {
    fetch(scary_stuff_api)
        .then(resp => resp.json())
        .then(json => load_videos(json))
        .catch(
        function (err) {
            let scary_stuff = document.getElementById("scary-stuff-error");
            scary_stuff.innerText = err.message;
        });
}

load_avatar();
// load_audio();
get_videos();