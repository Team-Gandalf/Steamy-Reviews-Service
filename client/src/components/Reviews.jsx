import React, { useState, useEffect, useCallback } from 'react';

const Reviews = () => {
  return (
    <div className="left-col">
      <div className="user_reviews_sub_header">
        Most Helpful Reviews
        <span className="user_reviews_most_helpful_days">
          In the past 30 days
        </span>
      </div>
    </div>
  );
};

export default Reviews;
