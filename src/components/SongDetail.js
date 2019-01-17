import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    console.log(props);
    if (!props.song){
        return <div>Select a Song</div>;
    }
    return (
        <div>
            <h1> Details for: </h1>
            <p>
                Title: {props.song.title}
                <br/>
                Duration: {props.song.duration}
            </p>
        </div>
    )
}

const mapStateToProps = state => {
    return { song: state.selected }
}

export default connect(mapStateToProps)(SongDetail);