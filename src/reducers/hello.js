const SAY_HELLOO = 'SAY_HELLOO';

const initialState = {
  text: 'Hello',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLOO: {
      return {
        ...state,
        text: `${state.text}o`,
      };
    }
    default: {
      return state;
    }
  }
};

export const sayHelloo = (text) => ({ type: SAY_HELLOO });
