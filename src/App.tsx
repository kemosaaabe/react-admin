import { Admin, Resource, ShowGuesser } from "react-admin";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import { Dashboard } from "./Dashboard";

import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      show={ShowGuesser}
      recordRepresentation="name"
      icon={UserIcon}
    />
  </Admin>
);
