import { useReducer, useCallback } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      // review: calculating form validity
      let formISValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue; // this block used for auth page switch mode to avoid validation of undefined fields.
        }
        if (inputId === action.inputId) {
          formISValid = formISValid && action.isValid;
        } else {
          formISValid = formISValid && state.inputs[inputId].isValid;
        }
      }
      // review: returning overall form states and validity
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formISValid,
      };
    // section: case for update existing form data with async operation
    case "SET_DATA":
      return {
        // review: as we overwriting form inputs, so we are not extracting old form states
        inputs: action.inputs,
        isValid: action.formISValid,
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,

    // review: so we can use this hook for any kind of form inputs and any number of inputs
    isValid: initialFormValidity,

    //review: if we don't provide this value by default it will be false as a falsy value
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);
  //  <!-- As we are using onInput as dependency in useEffect, it will create a new function object.Coz here I created a function in a function. This will lead to a infinite loop. So wrapping it with useCallback hook it will render once, as no dependency declared here. So if component function is re-rendered this function will stored, will not create new function object.  -->

  // review: this function is used for async operation as data is not available from the beginning.so we gave useForm hook(when is it called in parent) empty initial value, when we using this hook for updating form input value. and by using this hook we can setting new data to form fields
  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formISValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
