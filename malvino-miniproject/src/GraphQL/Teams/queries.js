import { gql } from "@apollo/client";

export const GET_TEAMS_FOR_ADMIN = gql`
  query getTeams {
    teams(order_by: { id: asc }) {
      id
      id_user
      teamName
      university
    }
  }
`;

export const GET_TEAMS_FOR_COACH = gql`
  query getTeams($id: Int) {
    teams(where: { id_user: { _eq: $id } }, order_by: { id: asc }) {
      id
      id_user
      teamName
      university
    }
  }
`;

export const INSERT_TEAM = gql`
  mutation insertTeam($id_user: Int, $teamName: String, $university: String) {
    insert_teams_one(object: { id_user: $id_user, teamName: $teamName, university: $university }) {
      id
      id_user
      teamName
      university
    }
  }
`;

export const DELETE_TEAM_BY_ID = gql`
  mutation deleteTeam($id: Int!) {
    delete_teams_by_pk(id: $id) {
      id
    }
  }
`;

export const UPDATE_TEAM_FILES_BY_ID = gql`
  mutation updateFiles($id: Int, $ktm: String, $buktiPembayaran: String) {
    update_teams(_set: { ktm: $ktm, buktiPembayaran: $buktiPembayaran }, where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export const UPDATE_TEAM_STATUS = gql`
  mutation updateStatus($id: Int, $status: Boolean) {
    update_teams(where: { id: { _eq: $id } }, _set: { status: $status }) {
      returning {
        id
      }
    }
  }
`;
