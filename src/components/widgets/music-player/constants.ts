import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "Hybrid song",
		artist: "Quazar of Sanxion",
		cover: "assets/music/cover/Hybrid song_cover.jpg",
		url: "assets/music/url/Hybrid_song.mp3",
		duration: 0,
	},
	{
		id: 2,
		title: "トリックハート (feat. 重音テト)",
		artist: "MIMI,重音テト",
		cover: "assets/music/cover/トリックハート.jpg",
		url: "assets/music/url/トリックハート.mp3",
		duration: 0,
	},
	{
		id: 3,
		title: "ループザルーム (feat. 初音ミク)",
		artist: "ルシノ,初音ミク",
		cover: "assets/music/cover/ループザルーム.jpg",
		url: "assets/music/url/ループザルーム.mp3",
		duration: 0,
	},
	{
		id: 4,
		title: "ちっちゃな私",
		artist: "重音テト,マサラダ",
		cover: "assets/music/cover/ちっちゃな私.png",
		url: "assets/music/url/ちっちゃな私.mp3",
		duration: 0,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: "/favicon/favicon.ico",
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
