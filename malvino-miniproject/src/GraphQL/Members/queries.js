import { gql } from "@apollo/client";

export const GET_MEMBER_BY_ID = gql`
  query getMember($id: Int) {
    members(where: { id: { _eq: $id } }) {
      email
      id
      name
      nim
      noHandphone
    }
  }
`;

export const GET_TEAM_AND_MEMBERS_BY_ID = gql`
  query getTeamAndMembers($id: Int) {
    teams(where: { id: { _eq: $id } }) {
      id
      teamName
      university
      ktm
      buktiPembayaran
      status
    }
    members(where: { id_team: { _eq: $id } }, order_by: { id: asc }) {
      email
      id
      id_team
      name
      nim
      noHandphone
    }
  }
`;

export const INSERT_MEMBER = gql`
  mutation insertMember($id_team: Int, $name: String, $nim: String, $email: String, $noHandphone: String) {
    insert_members_one(object: { id_team: $id_team, name: $name, nim: $nim, email: $email, noHandphone: $noHandphone }) {
      id
    }
  }
`;

export const DELETE_MEMBER_BY_ID = gql`
  mutation deleteMemberById($id: Int!) {
    delete_members_by_pk(id: $id) {
      id
    }
  }
`;

export const DELETE_MEMBERS_BY_ID_TEAM = gql`
  mutation deleteMembersByIdTeam($id: Int) {
    delete_members(where: { id_team: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export const UPDATE_MEMBER_BY_ID = gql`
  mutation updateMemberById($id: Int!, $name: String, $nim: String, $email: String, $noHandphone: String) {
    update_members_by_pk(pk_columns: { id: $id }, _set: { name: $name, nim: $nim, email: $email, noHandphone: $noHandphone }) {
      id
    }
  }
`;
