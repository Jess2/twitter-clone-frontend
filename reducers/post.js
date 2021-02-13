export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'Jess2',
      },
      content: 'Hello World! #FE #Develop',
      Images: [
        {
          src: 'https://jess2.xyz/static/584023ee1dabc7f3956f1a976b084a60/5f652/react.png',
        },
        {
          src: 'https://jess2.xyz/static/4b58b5ea6328ddeedbeca8e420229939/5f652/vue.png',
        },
        {
          src: 'https://jess2.xyz/static/a57cee6fedec9eb2dcb707f33708f676/5f652/css.png',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'Justin',
          },
          content: '멋져요',
        },
        {
          User: {
            nickname: 'Lia',
          },
          content: '제시 짱!',
        },
      ]
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: 'Jess2',
  },
  content: '두 번째 글',
  Images: [],
  Comments: [],
};

const ADD_POST = 'ADD_POST';
export const addPostAction = () => {
  return {
    type: ADD_POST,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state;
  }
};

export default reducer;