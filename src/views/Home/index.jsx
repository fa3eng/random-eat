import React from "react";
import PropTypes from "prop-types";

// 这些个@就是别名, 脚手架默认的配置罢了默认路径为 project_name/src
import { Welcome } from "@/components/Welcome";

// 感觉分层比较清晰的, 组件层/视图层, 现在是视图层,给的prop是不一样
const Home = ({ meta }) => <Welcome pageName={meta.name} />;

Home.propTypes = {
  // 这里的意思就是自定义的类型
  // An object taking on a particular shape
  meta: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export { Home };
