import { Admin, Resource, ListGuesser } from "react-admin";

import { UserList } from "./users";
import { PostList } from "./posts";

import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} recordRepresentation="name" />
  </Admin>
);
