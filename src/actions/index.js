//Action creator
export const selectSong = (song) => {
	// returnm an action
	return {
		type: "SONG_SELECTED",
		payload: song,
	};
};

export const selectDate = (newDate) => {
	return {
		type: "DATE_SELECTED",
		payload: newDate,
	};
};
