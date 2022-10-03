import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000";

const getStudents = async (cb) => {
  try {
    let students = await axios({
      method: "GET",
      url: `${URL}/students`,
    });

    cb(students.data);
  } catch (err) {
    Swal.fire("Error get students", "Get method is not workind", "error");
  }
};

const getStudentById = async (id, cb) => {
  try {
    let student = await axios({
      method: "get",
      url: `${URL}/students/${Number(id)}`,
    });
    cb(student.data);
  } catch (err) {
    Swal.file("Error get student by Id", "get student by id", "error");
  }
};

const addStudent = async (param) => {
  try {
    const { name, age, avatar, major } = param;
    let result = await axios({
      method: "POST",
      url: `${URL}/students`,
      data: {
        name,
        age,
        avatar,
        major,
      },
    });

    if (result) {
      Swal.fire("Student created", "A new student has been created", "success");
    }
  } catch (err) {
    Swal.fire("Error create", "Create student got error", "error");
  }
};

const deleteStudent = async (id, cb) => {
  try {
    Swal.fire({
      title: "Do you want to delete this id?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios({
          method: "delete",
          url: `${URL}/students/${+id}`,
        });

        getStudents(cb);
        Swal.fire("Deleted!", "Your student has been deleted.", "success");
      }
    });
  } catch (err) {
    Swal.fire("Error delete", "Delete id error", "error");
  }
};

const updateStudent = async (id, params) => {
  try {
    // const { name, age, avatar, major } = params;
    const result = await axios({
      method: "put",
      url: `${URL}/students/update/${Number(id)}`,
      data: params,
    });
    Swal.fire("Student created", "A new student has been created", "success");
  } catch (err) {
    Swal.fire("Error Update", "Student update error", "error");
  }
};

export { getStudents, getStudentById, addStudent, deleteStudent, updateStudent };
