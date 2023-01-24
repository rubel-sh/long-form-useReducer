import React, { useReducer } from "react";
import { actionTypes } from "../state/actionTypes";
import { initialState, reducer } from "../state/formReducer";

const LongForm = () => {
  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Form Handler
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-auto">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between"
        onSubmit={submit}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            onInput={(e) =>
              dispatch({
                type: actionTypes.INPUT,
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            onInput={(e) =>
              dispatch({
                type: actionTypes.INPUT,
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            type="text"
            name="lastName"
            id="lastName"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            onBlur={(e) =>
              dispatch({
                type: actionTypes.INPUT,
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h1 className="mb-3">Gender</h1>
          <div className="flex gap-3">
            <div>
              <input
                onClick={(e) =>
                  dispatch({
                    type: actionTypes.INPUT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                type="radio"
                id="male"
                name="gender"
                value="male"
              />
              <label className="ml-2 text-lg" for="male">
                Male
              </label>
            </div>
            <div>
              <input
                onClick={(e) =>
                  dispatch({
                    type: actionTypes.INPUT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                type="radio"
                id="female"
                name="gender"
                value="female"
              />
              <label className="ml-2 text-lg" for="female">
                Female
              </label>
            </div>
            <div>
              <input
                onClick={(e) =>
                  dispatch({
                    type: actionTypes.INPUT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                type="radio"
                id="other"
                name="gender"
                value="other"
              />
              <label className="ml-2 text-lg" for="other">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" for="education">
            Education
          </label>
          <select
            onChange={(e) =>
              dispatch({
                type: actionTypes.INPUT,
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            name="education"
            id="education"
          >
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="underGrad">Under Graduate</option>
            <option value="graduate">Graduate</option>
          </select>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3">Number of PCs</label>
          <div className="flex justify-between items-center gap-2 ">
            <button
              onClick={() => dispatch({ type: actionTypes.DECREMENT })}
              className="bg-indigo-500 text-lg text-white rounded h-10 w-10 "
            >
              -
            </button>
            <div className="border flex-1 flex justify-center items-center h-10 rounded-md border-gray-300">
              <span className="text-lg">{state.quantity}</span>
            </div>
            <button
              onClick={() => dispatch({ type: actionTypes.INCREMENT })}
              className="bg-indigo-500 text-lg text-white rounded h-10 w-10"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" for="feedback">
            Feedback
          </label>
          <textarea
            onBlur={(e) =>
              dispatch({
                type: actionTypes.INPUT,
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            name="feedback"
            id="feedback"
            cols="30"
            rows="4"
          ></textarea>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex  w-full max-w-xs">
            <input
              onClick={() => dispatch({ type: actionTypes.TERM })}
              className="mr-3"
              type="checkbox"
              name="term"
              id="terms"
            />
            <label for="terms">I agree to terms and conditions</label>
          </div>
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
            disabled={!state.term}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LongForm;
