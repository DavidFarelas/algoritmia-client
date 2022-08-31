import axios from "axios";
import Swal from "sweetalert2";

/* Constants */
const initialData = {
  fetching: false,
};

const FETCHING_DATA = "[MAIN] FETCHING_DATA";
/* Reducer */

export const mainReducer = (state = initialData, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { fetching: action.payload };
    default:
      return { ...state };
  }
};

/* Actions */

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
