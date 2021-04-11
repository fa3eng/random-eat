import { Home } from "@/views/Home";
import { User } from "@/views/User";

export const config = {
  routes: [
    {
      name: "Home",
      path: "/random-eat/dist/",
      component: Home,
      meta: { name: "今天吃点啥" },
    },
    {
      name: "User",
      path: "/user",
      component: User,
      meta: { name: "User" },
    },
  ],
};
