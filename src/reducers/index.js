import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const songsReducer = () => {
	return [
		{ title: "No Scrubs", duration: "4:05" },
		{ title: "Macarena", duration: "2:30" },
		{ title: "All Star", duration: "3:15" },
		{ title: "I want it that way", duration: "1:45" },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}
	return selectedSong;
};

const selectedDateReducer = (selectedDate = null, action) => {
	if (action.type === "DATE_SELECTED") {
		return action.payload;
	}
	return selectedDate;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
	selectedDate: selectedDateReducer,
	form: formReducer,
});
