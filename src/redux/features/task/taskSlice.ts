import { RootState } from '@/redux/store';
import { ITask } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  tasks: ITask[];
  filter: 'all' | 'high' | 'low';
}

// Schema
const initialState: InitialState = {
  tasks: [],
  filter: 'all',
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      // Add business logic / modify action.payload / add custom properties in action.payload object / business logic in reducer level
      const id = '123456';
      // ... add more

      // Modified data
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };

      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
