import "./styles.css";
import { ReactComponent as StarImage } from "assets/images/star.svg";
import { Review } from "types/review";

type ListingReviews = {
    reviews: Review[];
  };
  
  const ReviewListing = ({ reviews }: ListingReviews) => {
    
    return (
      <div className="review-main-container">
        {reviews?.map(review =>(
          <div className="member-name-container" key={review.id}>
            <h3>{review.user.name}</h3>
            <div className="star-image-container">
          <StarImage />
        </div>
            <div className="post-review-container base-card">
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
export default ReviewListing;
