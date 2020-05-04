import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import ReviewList from './ReviewList.jsx';

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [id, setId] = useState(1);

  const getAllReviews = () => {
    axios.get(`127.0.0.1:4200/api/reviews/${id}`)
      .then((results) => {
        setAllReviews(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  return (
    <div className="left-col">
      <div className="user_reviews_sub_header">
        Most Helpful Reviews
        <span className="user_reviews_most_helpful_days">
          In the past 30 days
        </span>
      </div>
      <ReviewList allReviews={allReviews} />
    </div>
  );
};

export default Reviews;
