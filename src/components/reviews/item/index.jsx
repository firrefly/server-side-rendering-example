// Modules
import React, { memo, useCallback } from "react";
import moment from "moment";
// Modules Components
import { Comment, Tooltip, Avatar } from "antd";
// Styles
import { styles } from "./styles";

const ReviewsItemComponent = ({ item }) => {
  const getDate = useCallback(
    () => {
      const comment = moment(item.DateAdded);
      return {
        date: comment.format('YYYY-MM-DD HH:mm:ss'),
        now: comment.fromNow(),
      };
    },
    [item.DateAdded]
  );

  return (
    <>
      <div className="comments">
        <Comment
          author={
            <div>
              {item.UserFIO} о ресторане {item.RestaurantName}:
            </div>
          }
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt={item.UserFIO}
            />
          }
          content={
            <p>
              {item.Message}
            </p>
          }
          datetime={
            <Tooltip title={getDate().date}>
              <span>{getDate().now}</span>
            </Tooltip>
          }
        />
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const ReviewsItem = memo(ReviewsItemComponent);
