import { useEffect, useState } from "react";
import '../css/style.css';

function Home() {
    const [project, setproject] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8000/api/get_data")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setproject(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted.");
          }
        });
    }, []);

    return (
      <div className="App">
        <h3>List project</h3>
        <table border='1'>
          <tr>
            <th>ID project</th>
            <th>Judul project</th>
            <th>Deskripsi</th>
            <th>Dibuat</th>
            <th>Diubah</th>
          </tr>

            {project.map((prj) => {
            return (
              <tr key={prj.id}>
                <td>{prj.id} </td>
                <td>{prj.title} </td>
                <td>{prj.description} </td>
                <td>{prj.created_at} </td>
                <td>{prj.updated_at} </td>
              </tr>
            )
            })}

        </table>
      </div>
    );
  }

  export default Home;
