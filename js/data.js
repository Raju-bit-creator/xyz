const chats = [
  {
    isGroupChat: false,
    user: [
      {
        name: "Jhon",
        email: "jhon@gmail.com",
      },
      {
        name: "Doe",
        email: "doe@gmail.com",
      },
    ],
    _id: "1",
    chatName: "chat1",
  },
  {
    isGroupChat: false,
    user: [
      {
        name: "Guest User",
        email: "guest@gmail.com",
      },
      {
        name: "sachin",
        email: "sachin@gmail.com",
      },
    ],
    _id: "2",
    chatName: "chat2",
  },
  {
    isGroupChat: true,
    user: [
      {
        name: "Jhon",
        email: "jhon@gmail.com",
      },
      {
        name: "Doe",
        email: "doe@gmail.com",
      },
      {
        name: "sagar",
        email: "sagar@gmail.com",
      },
    ],
    _id: "3",
    chatName: "chat3",
    groupAdmin: {
      name: "jhon",
      email: "jhon@gmail.com",
    },
  },
];

const singleChat = chats.find((c) => c._id === "3");
console.log(singleChat);
console.log(chats);

///
