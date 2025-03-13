import { ITask } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  tasks: ITask[];
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
  ],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
