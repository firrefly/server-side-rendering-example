// Modules
import React, { memo } from "react";
// Modules Components
import { Typography } from "antd";
// Styles
import { styles } from "./styles";

const { Text } = Typography;

const ThirdBlockComponent = ({ item }) => {
  return (
    <>
      <div className="third-block__options">
        <div className="options options-inner">
          <div className="options-inner__item">
            <div className="options-inner__label">
              <Text type="secondary">Мин сумма заказа:</Text>
            </div>
            <div className="options-inner__label">
              <Text type="secondary">Стоимость доставки:</Text>
            </div>
            <div className="options-inner__label">
            <Text type="secondary">Время доставки:</Text>
            </div>
          </div>

          <div className="options-inner__item">
            <div className="options-inner__data">
              <Text strong>{item.MinCost}</Text>
            </div>
            <div className="options-inner__data">
              <Text strong>{item.DeliveryCost}</Text>
            </div>
            <div className="options-inner__data">
              <Text strong>{item.DeliveryTime} мин</Text>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const ThirdBlock = memo(ThirdBlockComponent);
