const initialState = [
  {
    id: 0,
    name: "Shaji",
    number: 9563258596,
    email: "shaji@gmail.com",
  },
  {
    id: 1,
    name: "Girish",
    number: 9563256396,
    email: "girish@gmail.com",
  },
  {
    id: 2,
    name: "John",
    number: 7845126389,
    email: "john@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload ? contact : null);
      state = filterContacts;
      return state;

    default:
      return state;
  }
};

export default contactReducer;
