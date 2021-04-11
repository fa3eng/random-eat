import React, { useState } from "react";
// 规定props类型,一般和组件一起用
import PropTypes from "prop-types";
// CSS 模块
import { AppWrapper, GuessButton } from "./index.css";

// 我不该这么做, 这里之后想明白了一定要重构
const foods = ["鸭血面", "番茄炒蛋", "黄焖鸡", "番茄/麻辣啵啵鱼", "鸡公煲", "皮蛋瘦肉粥"];

const randomIndex = () => {
  return Math.floor(Math.random() * foods.length);
};

// 这个写法, 好简洁, 不过目前看的还不是很习惯23333
const Welcome = ({ pageName }) => {
  const [food, setFood] = useState("______");

  const handleClick = () => {
    const index = randomIndex();
    setFood(foods[index]);
  };

  return (
    <AppWrapper>
      <header className="App-header">
        <h2>{pageName} ?</h2>
        👇👇👇👇👇👇
        <GuessButton type="button" onClick={handleClick}>
          🆘 SOS!!!
        </GuessButton>
        <div>
          要不今天就去吃 <span className="food-span">{food}</span>
        </div>
      </header>
    </AppWrapper>
  );
};

// 这个就是给他设置类型嘛
Welcome.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export { Welcome };
