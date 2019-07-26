console.log('Welcome to webpack 4');
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './reducers/reducer'
import { Provider } from 'react-redux';
import RegisterMember from './components/RegisterMember';


configureStore.subscribe(()=>{
    console.log(configureStore.getState());
})


configureStore.dispatch({ type: 'ADD_MEMBER',
    member: {id: 123456, name: 'Savan Kumar', address: 'Himachal Pradesh', contact: '9023209889'}
})

// configureStore.dispatch({ type: 'REMOVE_MEMBER',
//     id: 123456
// })
configureStore.dispatch({ type: 'UPDATE_MEMBER',
    member: {id: 123456, name: 'Gaurish Kamat', address: 'Himachal Pradesh', contact: '9023209889'}
})


ReactDOM.render(<Provider store={configureStore}>
    <RegisterMember />
</Provider>, document.getElementById('app'));

