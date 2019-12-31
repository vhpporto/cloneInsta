import { ADD_POST } from '../actions/actionTypes'


const initialState = {
    posts : [{
        id: Math.random(),
        nickname: 'Rafael Pereira',
        email: 'rafarepe@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [{
          nickname: 'Joan Araujo',
          comment: 'Stunnig!'
        }, {
          nickname: 'JOao da silva',
          comment: 'TOp da balada',
        }]
      }, {
        id: Math.random(),
        nickname: 'Paulo araruo',
        email: 'paulo@hotmail.com',
        image: require('../../../assets/imgs/bw.jpg'),
        comments: []
  
      }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer