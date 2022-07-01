const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    {
      id: "1",
      message: "Hi, how ary you?",
      likes: "15",
      image:
        "https://cdns-images.dzcdn.net/images/artist/4099da261a61666f58bb3598f0c4c37f/500x500.jpg",
    },
    {
      id: "2",
      message: "It`s my first post",
      likes: "15",
      image:
        "https://pbs.twimg.com/profile_images/1119181254002466818/wkr0oSKZ_400x400.jpg",
    },
  ],
  newPostText: "It-course.com",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: "5",
        message: state.newPostText,
        likes: "0",
        image:
          "https://gate.undelete.news/uploads/titsoutkickedout/aSaCyrrSkgD_TTSTLhvjp.jpg",
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
