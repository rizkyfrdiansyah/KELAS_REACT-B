import { GET_VISITORS } from "../apollo-client/gql";
import { useQuery } from "@apollo/client";
import LoadingAnimation from "./LoadingAnimation";

const ListPassenger = () => {
  const { loading: loadingalldata, error: erroralldata, data: alldata } = useQuery(GET_VISITORS);

  if (loadingalldata) return <LoadingAnimation />;
  if (erroralldata) return `Error! ${erroralldata.message}`;

  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {alldata?.visitors.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPassenger;
