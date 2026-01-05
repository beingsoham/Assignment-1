import { useEffect, useState } from "react";
import "./Student.css";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  
  return (
    <div className="student-container">
      <h2>Students List</h2>

      <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Submission</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.course}</td>
              <td>{s.submission}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
