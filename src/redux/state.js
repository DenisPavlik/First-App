import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
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
  },
  dialogsPage: {
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
    newMessageText: "It`s a new message",
  },
};

export let addPost = () => {
  let newPost = {
    id: "5",
    message: state.profilePage.newPostText,
    likes: "0",
    image:
      "https://ic.pics.livejournal.com/psyteaman/11355449/783618/783618_800.jpg",
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let addMessage = () => {
  let newMessage = {
    id: "6",
    message: state.dialogsPage.newMessageText,
  }
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) =>{
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}

export default state;
