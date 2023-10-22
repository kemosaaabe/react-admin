import { Admin, Resource, ShowGuesser } from "react-admin";

import { UserList } from "./users";
import { PostList } from "./posts";

import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    <Resource
      name="users"
      list={UserList}
      show={ShowGuesser}
      recordRepresentation="name"
    />
  </Admin>
);
