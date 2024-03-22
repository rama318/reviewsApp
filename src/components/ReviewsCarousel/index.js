import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndexReview: 0,
  }

  onClickRight = () => {
    const {activeIndexReview} = this.state
    const {reviewsList} = this.props

    if (activeIndexReview < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeIndexReview: prevState.activeIndexReview + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="user-profile">
        <img src={imgUrl} alt={username} />
        <h1 className="profile-heading">{username}</h1>
        <p className="description">{companyName}</p>
        <p className="description-2">{description}</p>
      </div>
    )
  }

  onClickLeft = () => {
    const {activeIndexReview} = this.state

    if (activeIndexReview > 0) {
      this.setState(prevState => ({
        activeIndexReview: prevState.activeIndexReview - 1,
      }))
    }
  }

  render() {
    const {activeIndexReview} = this.state
    const {reviewsList} = this.props
    const currentReviewsDetails = reviewsList[activeIndexReview]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            className="left-button"
            onClick={this.onClickLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewsDetails)}
          <button
            type="button"
            className="right-button"
            data-testid="rightArrow"
            onClick={this.onClickRight}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
