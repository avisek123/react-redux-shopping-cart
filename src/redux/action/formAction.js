// create type
export const CREATE_FORM = "CREATE_FORM";

// create action

export const addForm = (form) => {
  return {
    type: CREATE_FORM,
    payload: { response: form.response },
  };
};
