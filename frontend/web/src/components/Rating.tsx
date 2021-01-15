import { Rate } from "antd";

type RateProps = {
  rating: number;
  reviews?: number;
};

export const Rating = ({ rating, reviews }: RateProps) => {
  return (
    <>
      <Rate allowHalf defaultValue={rating} />
      {reviews ? <span>{reviews} Reviews</span> : null}
    </>
  );
};
