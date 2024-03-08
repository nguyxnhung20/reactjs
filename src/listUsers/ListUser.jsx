import { useEffect, useState } from 'react';
function ListUser() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    // call api user
    const api = `https://jsonplaceholder.typicode.com/users/`;
    const data = fetch(api)
      .then((res) => res.json()) // conver json
      .then((res) => {
        // setUser here
        setUser(res);
      }) // result here
      .catch((err) => console.log(err, 'err')); // fetch err
  }, []);

  const showmodal = () => {
    //
  };
  return (
    <>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">stt</th>
            <th scope="col">name</th>
            <th scope="col">phone</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 &&
            user.map((el) => {
              return (
                <tr key={el?.id} onClick={() => showmodal()}>
                  <th scope="row">{el?.id}</th>
                  <td>{el?.name}</td>
                  <td>{el?.phone}</td>
                  <td>{el?.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default ListUser;
