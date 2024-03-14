import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  getComments = async () => {
    try {
      const { asin } = this.props;

      if (!asin) {
        console.error("Parametro asin non valido");
        return;
      }

      let response = await fetch(API_URL + asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTVkYTRjNTllYzAwMTk5MGQ3MmEiLCJpYXQiOjE3MTA0MTY2NjMsImV4cCI6MTcxMTYyNjI2M30.pvfes2FP1iRg4GHdSLyIg94si5qm6YBibaykPNHEuQg",
        },
      });

      if (response.ok) {
        let commentsData = await response.json();
        this.setState({ comments: commentsData });
        console.log(response);
      } else {
        console.error("Errore durante la richiesta:", response.status);
      }
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <div>
        <AddComment asin={this.props.asin} />
        <CommentsList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
