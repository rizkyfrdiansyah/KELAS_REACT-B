import { gql } from "@apollo/client";

export const GET_TODOLIST = gql`
  query getTodolist {
    todolist(order_by: { id: asc }) {
      id
      title
      is_done
    }
  }
`;

export const GET_TODOLIST_BY_ID = gql`
  query getTodolistById($id: Int!) {
    todolist(where: { id: { _eq: $id } }) {
      id
      title
      is_done
    }
  }
`;
