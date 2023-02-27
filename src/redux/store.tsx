import {createStore, combineReducers} from 'redux';
import investorDataReducer from './reducers/investorDataReducer';

import {TypedUseSelectorHook, useSelector} from 'react-redux';

const rootReducer = combineReducers({
  investorDataReducer,
});

export const store = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
