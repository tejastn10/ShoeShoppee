import { Rate } from "antd";

type RateProps = {
  rating: number;
  reviews: number;
};

export const Rating = ({ rating, reviews }: RateProps) => {
  return (
    <p>
      <Rate allowHalf defaultValue={rating} />
      <p>{reviews} Reviews</p>
    </p>
  );
};
