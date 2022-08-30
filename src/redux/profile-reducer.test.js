import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
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
};

test("Lenght of posts should be incremented", () => {
  // 1. Test data
  let action = addPostActionCreator("it-course");

  // 2. Action
  let newState = profileReducer(state, action);

  // 3. Expectation
  expect(newState.postsData.length).toBe(3);
});

test("Message of new post should be correct", () => {
  // 1. Test data
  let action = addPostActionCreator("it-course");

  // 2. Action
  let newState = profileReducer(state, action);

  // 3. Expectation
  expect(newState.postsData[2].message).toBe("it-course");
});

test("After deleting length of messages should be decrement", () => {
  // 1. Test data
  let action = deletePost(1);

  // 2. Action
  let newState = profileReducer(state, action);

  // 3. Expectation
  expect(newState.postsData.length).toBe(1);
});

test("After deleting length shouldn't be decrement if id is incorrect", () => {
  // 1. Test data
  let action = deletePost(1000);

  // 2. Action
  let newState = profileReducer(state, action);

  // 3. Expectation
  expect(newState.postsData.length).toBe(2);
});
