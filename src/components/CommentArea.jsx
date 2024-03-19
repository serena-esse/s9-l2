// import { Component } from "react";
// import CommentList from "../components/CommentsList";
// import AddComment from "../components/AddComment";
// import Loading from "../components/Loading";
// import Error from "../components/Error";

// class CommentArea extends Component {
//   state = {
//     comments: [],
//     isLoading: false,
//     isError: false,
//   };

//   // componentDidMount = async () => {
//   //   try {
//   //     let response = await fetch(
//   //       'https://striveschool-api.herokuapp.com/api/comments/' +
//   //         this.props.asin,
//   //       {
//   //         headers: {
//   //           Authorization:
//   //             'Bearer inserisci-qui-il-tuo-token',
//   //         },
//   //       }
//   //     )
//   //     console.log(response)
//   //     if (response.ok) {
//   //       let comments = await response.json()
//   //       this.setState({ comments: comments, isLoading: false, isError: false })
//   //     } else {
//   //       console.log('error')
//   //       this.setState({ isLoading: false, isError: true })
//   //     }
//   //   } catch (error) {
//   //     console.log(error)
//   //     this.setState({ isLoading: false, isError: true })
//   //   }
//   // }

//   componentDidUpdate = async (prevProps) => {
//     if (prevProps.asin !== this.props.asin) {
//       this.setState({
//         isLoading: true,
//       });
//       try {
//         let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
//           headers: {
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY5OTVhYjA0NTg5ZjAwMTk0OGU1ODgiLCJpYXQiOjE3MTA4NTU1OTUsImV4cCI6MTcxMjA2NTE5NX0.5OLB34UswXxXcEZnSHSpNicW-mLv5uKo5Z9_JGeNXmg",
//           },
//         });
//         console.log(response);
//         if (response.ok) {
//           let comments = await response.json();
//           this.setState({
//             comments: comments,
//             isLoading: false,
//             isError: false,
//           });
//         } else {
//           this.setState({ isLoading: false, isError: true });
//         }
//       } catch (error) {
//         console.log(error);
//         this.setState({ isLoading: false, isError: true });
//       }
//     }
//   };

//   render() {
//     return (
//       <div className="text-center">
//         {this.state.isLoading && <Loading />}
//         {this.state.isError && <Error />}
//         <AddComment asin={this.props.asin} />
//         <CommentList commentsToShow={this.state.comments} />
//       </div>
//     );
//   }
// }

// export default CommentArea;

import React, { useState, useEffect } from "react";
import CommentList from "../components/CommentsList";
import AddComment from "../components/AddComment";
import Loading from "../components/Loading";
import Error from "../components/Error";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY5OTVhYjA0NTg5ZjAwMTk0OGU1ODgiLCJpYXQiOjE3MTA4NTU1OTUsImV4cCI6MTcxMjA2NTE5NX0.5OLB34UswXxXcEZnSHSpNicW-mLv5uKo5Z9_JGeNXmg",
          },
        });
        if (response.ok) {
          let commentsData = await response.json();
          setComments(commentsData);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    if (props.asin) {
      fetchComments();
    }
  }, [props.asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
