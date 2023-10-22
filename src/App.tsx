import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin";

import { UserList } from "./users";
import { PostList, PostEdit } from "./posts";

import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} />
    <Resource
      name="users"
      list={UserList}
      show={ShowGuesser}
      recordRepresentation="name"
    />
  </Admin>
);
