import { gql } from "@apollo/client";

export const GET_VISITORS = gql`
  query MyQuery {
    visitors {
      id
      name
      gender
    }
  }
`;

export const GET_VISITORS_BYTICKETCLASS = gql`
  query MyQuery($ticket_id: Int!) {
    visitors(where: { ticket_id: { _eq: $ticket_id } }) {
      id
      name
      gender
    }
  }
`;
