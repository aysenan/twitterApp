import { createStore } from 'redux';

const defaultState = {
    members: []
}
let configureStore = createStore((state = defaultState, action)=>{


    if(action.type == 'ADD_MEMBER'){
        if(action.member){
            state.members.push(action.member);
            return state;
        }
    }else if(action.type == 'REMOVE_MEMBER'){
        let tempMembersList = [];
        if(action.id){
            state.members.filter(member => member.id !== action.id)
        }

        return { ...state,  members : tempMembersList}
    
    }else if(action.type == 'UPDATE_MEMBER'){
        if(action.member){
            var index = state.members.findIndex(member => member.id == action.member.id);
            if(index !== -1){
                state.members[index] = action.member;
            }
            return state;
        }
    }
    return state;
});


export default configureStore;


