// React
import { FC } from "react";

// UI Library
import { Rate } from "antd";

type Props = {
  rating: number;
  reviews?: number;
};

export const Rating: FC<Props> = ({ rating, reviews }: Props) => {
  return (
    <>
      <Rate allowHalf defaultValue={rating} />
      {reviews ? <span> of {reviews} Reviews</span> : null}
    </>
  );
};
