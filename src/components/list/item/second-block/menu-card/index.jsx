// Modules
import React, { memo } from "react";
import { Typography } from 'antd';
// Styles
import { styles } from "./styles";

const { Text, Link } = Typography;

const MenuCardComponent = ({ item }) => {
  return (
    <>
      <div className="menu-card">
        <div className="menu-card__item">
          <a href="#">Меню</a>
        </div>
        <div className="menu-card__item">
          <a href="#">Инфо</a>
        </div>
        <div className="menu-card__item">
          <a href="#">Отзывы</a> 
          <span className="counter">
            <Text type="secondary">{item.ReviewsCount}</Text>
          </span>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const MenuCard = memo(MenuCardComponent);
