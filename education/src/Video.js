import React from 'react'
import ReactPlayer from 'react-player';

const reduceOne = (prevState, groupName, otherGroupName) => {
    prevState[groupName].wasClicked
      ? prevState[groupName].count = prevState[groupName].count - 1
      : prevState[groupName].count = prevState[groupName].count + 1;
    prevState[groupName].wasClicked = !prevState[groupName].wasClicked;
    if (prevState[otherGroupName].wasClicked) {
      prevState[otherGroupName].count = prevState[otherGroupName].count - 1;
      prevState[otherGroupName].wasClicked = false;
    }
    return prevState;
  };
  
  const reducer = action =>
    (prevState, props) =>
      action.type === "TOGGLE_LIKE"
        ? reduceOne(prevState, "like", "dislike")
        : reduceOne(prevState, "dislike", "like");

function Video() {

    return (
        <div>
            <ReactPlayer url="https://youtu.be/lpcpsCY4Mco" />
            <div id="demo">
            <button className="like-button" onClick={this.toggleLike}>
                Like | {this.state.like.count}
            </button>
            <button className="dislike-button" onClick={this.toggleDislike}>
                Dislike | {this.state.dislike.count}
            </button>
            </div>
        </div>
    )
}

export default Video
