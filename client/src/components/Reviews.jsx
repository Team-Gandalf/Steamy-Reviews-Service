/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Imported Components
import ReviewList from './ReviewList.jsx';
import ReviewSummaryBar from './ReviewSummaryBar.jsx';
import ReviewFilter from './ReviewFilter.jsx';

// Styled Components
import {
  ReviewsBackground,
  Title,
  LeftCol,
  MostHelpfulReviews,
  MostHelpfulDays,
} from './styles/styles.jsx';

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [viewActive, setView] = useState(false);
  const [filteredReviews, setFilter] = useState([]);
  const id = window.location.search.substring(2);

  const getAllReviews = () => {
    axios.get(`/api/reviews/${id}`)
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

    axios.patch(`/api/reviews/${id}`, {
      field,
      value: val,
      reviewId,
    })
      .then((results) => {
        getAllReviews();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const changeView = (view) => {
    let oldReviews;
    let filtered;

    if (view === 'positive') {
      oldReviews = allReviews;
      filtered = allReviews.filter((review) => review.user.recommended);
      setView(true);
    } else if (view === 'negative') {
      oldReviews = allReviews;
      filtered = allReviews.filter((review) => !review.user.recommended);
      setView(true);
    } else {
      filtered = allReviews;
      setView(false);
    }

    setFilter(filtered);
  };

  return (
    <ReviewsBackground>
      <Title>Customer Reviews</Title>
      <ReviewSummaryBar allReviews={allReviews} />
      <ReviewFilter
        review={allReviews[0] ? allReviews[0] : null}
        changeView={changeView}
      />
      <LeftCol>
        <MostHelpfulReviews>
          {'Most Helpful Reviews '}
          <MostHelpfulDays>
            In the past 30 days
          </MostHelpfulDays>
        </MostHelpfulReviews>
        <ReviewList
          allReviews={viewActive ? filteredReviews.slice(0, 8) : allReviews.slice(0, 8)}
          key={id}
          handleVote={updateVotes}
        />
      </LeftCol>
    </ReviewsBackground>
  );
};

export default Reviews;
