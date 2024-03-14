import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  showComment = (clicked) => {
    return <SingleComment click={clicked.comment} />;
  };

  render() {
    return (
      <ul>
        {this.props.comments.map((el, n) => {
          return (
            <li key={el.elementId + n} onClick={() => this.showComment(el)}>
              {el.comment} - {el.rate} | {el.elementId}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CommentsList;
