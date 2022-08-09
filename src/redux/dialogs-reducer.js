const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    {
      id: "1",
      name: "Masha",
      ava: "https://pic.sport.ua/images/news/0/12/155/orig_511003.jpg",
    },
    {
      id: "2",
      name: "Artem",
      ava: "https://1tb.favim.com/preview/7/791/7914/79140/7914042.jpg",
    },
    {
      id: "3",
      name: "Lena",
      ava: "https://i.pinimg.com/736x/b4/72/a1/b472a1234f0fad2a6bd45750c14e7bec.jpg",
    },
    {
      id: "4",
      name: "Oleg",
      ava: "https://vjoy.cc/wp-content/uploads/2020/10/1132239.jpg",
    },
    {
      id: "5",
      name: "Sveta",
      ava: "https://pbs.twimg.com/profile_images/1251950132020592640/hO_9ZKkJ_400x400.jpg",
    },
    {
      id: "6",
      name: "Denys",
      ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjX4xY4hHG3RXO0vy-1Bm26lwdRztqLI0-w&usqp=CAU",
    },
  ],
  messagesData: [
    { id: "1", message: "Hi" },
    { id: "2", message: "How is you IT course?" },
    { id: "3", message: "Yo" },
    { id: "4", message: "Yo" },
    { id: "5", message: "Yo" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let body = action.newMessageText;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: "6", message: body }],
      };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });



export default dialogsReducer;
