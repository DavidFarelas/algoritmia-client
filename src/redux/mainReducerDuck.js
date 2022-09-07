import axios from "axios";
import Swal from "sweetalert2";

const students = [
  {
    id: 1,
    fullName: "Farelas David",
    studentNumber: "2014110374",
  },
  {
    id: 2,
    fullName: "Mora León",
    studentNumber: "2014110375",
  },
  {
    id: 3,
    fullName: "Hernández Cbas",
    studentNumber: "2014110376",
  },
  {
    id: 4,
    fullName: "Javier xd",
    studentNumber: "2014110377",
  },
];

/* Constants */
const initialData = {
  isLoggedIn: false,
  fetching: false,
  students: [],
};

const FETCHING_DATA = "[MAIN] FETCHING_DATA";
const START_LOGIN = "[MAIN] START_LOGIN";
const LOGIN_SUCCESS = "[MAIN] LOGIN_SUCCESS";
const LOGIN_FAILURE = "[MAIN] LOGIN_FAILURE";

/* Reducer */

export const mainReducer = (state = initialData, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        isLoggedIn: state.isLoggedIn,
        fetching: action.payload,
        students: state.students,
      };
    case START_LOGIN:
      return { isLoggedIn: false, fetching: true };
    case LOGIN_SUCCESS:
      return { isLoggedIn: true, fetching: false, students: action.payload };
    case LOGIN_FAILURE:
      return { isLoggedIn: false, fetching: false };
    default:
      return { ...state };
  }
};

/* Actions */

export const startLoginAction = (credentials) => (dispatch) => {
  console.log(credentials);
  dispatch({
    type: START_LOGIN,
  });

  /*
   * Obtener los estudiantes y agregarlos al estado
   */

  const studentsData = [...students];

  setTimeout(() => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: studentsData,
    });
    localStorage.setItem(
      "userData",
      JSON.stringify({ isLoggedIn: true, fetching: false })
    );
  }, 1000);
};

export const startSendFormAction = (studentData) => (dispatch) => {
  dispatch({
    type: FETCHING_DATA,
    payload: true,
  });

  axios
    .post(
      "https://frozen-citadel-06983.herokuapp.com/api/v1/students/register",
      studentData,
      {
        "Content-Type": "application/json",
      }
    )
    .then((response) => {
      //console.log(response);
      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Registro exitoso",
      });
    })
    .catch((e) => {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Ocurrió un error inesperado",
      });
    });
  dispatch({
    type: FETCHING_DATA,
    payload: false,
  });
};

export const getAttendanceAction = (studentNumber) => (dispatch) => {
  dispatch({
    type: FETCHING_DATA,
    payload: true,
  });

  axios
    .patch(
      "https://frozen-citadel-06983.herokuapp.com/api/v1/students/attendance",
      { studentNumber },
      {
        "Content-Type": "application/json",
      }
    )
    .then((response) => {
      if (response.data.attendance) {
        Swal.fire({
          icon: "success",
          title: "Correcto",
          text: "Registro de asistencia exitoso",
        });
      }
    })
    .catch((e) => {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Ocurrió un error inesperado",
      });
    });
  dispatch({
    type: FETCHING_DATA,
    payload: false,
  });
};

export const persistentLoginAction = () => (dispatch) => {
  /*
   * * Obtener los estudiantes y agregarlos al estado
   */

  const studentsData = [...students];
  dispatch({
    type: LOGIN_SUCCESS,
    payload: studentsData,
  });
};
