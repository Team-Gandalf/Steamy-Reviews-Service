import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReviewSummaryBar from './ReviewSummaryBar.jsx';

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

  const updateVotes = (e, val, reviewId) => {
    let field = 'helpful';
    if (e === 'voteUp') {
      val += 1;
    } else if (e === 'voteDown') {
      val -= 1;
    } else {
      val += 1;
      field = 'funny';
    }

    axios.patch(`http://localhost:4200/api/reviews/${id}`, {
      field: field,
      value: val,
      reviewId: reviewId,
    })
      .then((results) => {
        getAllReviews();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="user_reviews">
      <h2>Customer Reviews</h2>
      <ReviewSummaryBar allReviews={allReviews} />
      <div className="left-col">
        <div className="user_reviews_sub_header">
          {`Most Helpful Reviews `}
          <span className="user_reviews_most_helpful_days">
            {`In the past 30 days`}
          </span>
        </div>
        <ReviewList allReviews={allReviews} key={id} handleVote={updateVotes} />
      </div>
    </div>
  );
};

export default Reviews;
