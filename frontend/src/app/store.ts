import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from 'components/Custom/counterSlice';

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer
	}
});

// TODO: вынести в types.ts??
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
