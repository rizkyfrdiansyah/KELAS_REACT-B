import React from "react";
import { GET_VISITORS_BYTICKETCLASS } from "../apollo-client/gql";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import LoadingAnimation from "./LoadingAnimation";

function SearchPassanger() {
  const [ticketId, setTicketId] = useState("");
  const [getVisitorByTicketClass, { loading, error, data: dataByClass }] = useLazyQuery(GET_VISITORS_BYTICKETCLASS);

  const getData = () => {
    getVisitorByTicketClass({
      variables: { ticket_id: ticketId },
    });
  };

  const handleOnChange = (e) => {
    setTicketId(e.target.value);
  };

  const handleSubmit = () => {
    ticketId !== "" ? getData() : alert("SILAHKAN PILIH CLASS");
  };

  if (loading) return <LoadingAnimation />;
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <p>Tampilkan Data Berdasarkan Kelas Tiket</p>
      <form onSubmit={handleSubmit}>
        <select value={ticketId} onChange={handleOnChange}>
          <option value="" disabled>
            --- Pilih Kelas Ticket ---
          </option>
          <option value="1">Premium</option>
          <option value="2">Bussiness</option>
          <option value="3">Economy</option>
        </select>
        <button type="submit">GET DATA BY CLASS</button>
      </form>
      <div>
        <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
          <tbody>
            {dataByClass?.visitors.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SearchPassanger;
