import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';


const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  let id = window.location.search.substring(2);

  const getAllReviews = () => {
    axios.get(`http://localhost:4200/api/reviews/${id}`)
      .then(({ data }) => {
        setAllReviews(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  const updateVotes = (e) => {
    let value = 0;
    let field = 'helpful';
    if (e === 'voteDown') {
      value = 1;
    } else if (e === 'voteDown') {
      value = -1;
    } else {
      value = 1;
      field = 'funny';
    }

    axios.post
  };

  return (
    <div className="left-col">
      <div className="user_reviews_sub_header">
        {`Most Helpful Reviews `}
        <span className="user_reviews_most_helpful_days">
          {`In the past 30 days`}
        </span>
      </div>
      <ReviewList allReviews={allReviews} key={id} handleVote={updateVotes} />
    </div>
  );
};

export default Reviews;
