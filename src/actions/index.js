
//Action Creator
export const songSelect = (song) => {
    //Return an action
    return{
        type: 'SONG_SELECTED',
        payload: song
    };
}