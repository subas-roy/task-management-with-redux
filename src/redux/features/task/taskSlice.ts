import { RootState } from '@/redux/store';
import { ITask } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  tasks: ITask[];
  filter: 'all' | 'high' | 'low';
}

// Schema
const initialState: InitialState = {
  tasks: [
    {
      id: 'asdfjklmn',
      title: 'Initial frontend',
      description: 'Create Home page and routing',
      dueDate: '2025-3',
      isCompleted: false,
      priority: 'High',
    },
    {
      id: 'asdfjklmn',
      title: 'Initial frontend',
      description: 'Create Home page and routing',
      dueDate: '2025-3',
      isCompleted: false,
      priority: 'Medium',
    },
  ],
  filter: 'all',
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
