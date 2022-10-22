const ListPassenger = ({ data }) => {
  return (
    <div>
      <table cellPadding="10px" className="m-auto">
        <thead className="bg-danger text-light">
          <tr>
            <th>Id</th>
            <th>Nama</th>
            <th>Umur</th>
            <th>Jenis Kelamin</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data[0] === null ? (
            <tr>
              <td colSpan="5">Data tidak ada</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.umur}</td>
                <td>{item.jenisKelamin}</td>
                <td>
                  <button className="rounded border-0 btn-danger">Hapus</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListPassenger;
