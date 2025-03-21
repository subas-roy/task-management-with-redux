import { RootState } from '@/redux/store';
import { ITask } from '@/types';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  tasks: ITask[];
  filter: 'high' | 'medium' | 'low' | 'all';
}

type DraftTask = Pick<
  ITask,
  'title' | 'description' | 'dueDate' | 'priority' | 'assignedTo'
>;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

// Schema
const initialState: InitialState = {
  tasks: [
    {
      id: 'rJFErexdeoCb0t7rTVyml',
      isCompleted: false,
      title: 'Create github repository',
      description: 'Lorem ipsum dolor sit amet',
      priority: 'high',
      dueDate: '2025-03-16T18:00:00.000Z',
      assignedTo: 'Mezba',
    },
  ],
  filter: 'all',
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },

    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id == action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },

    // ...updateTask

    updateFilter: (
      state,
      action: PayloadAction<'high' | 'medium' | 'low' | 'all'>
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter == 'high') {
    return state.todo.tasks.filter((task) => task.priority == 'high');
  } else if (filter == 'medium') {
    return state.todo.tasks.filter((task) => task.priority == 'medium');
  } else if (filter == 'low') {
    return state.todo.tasks.filter((task) => task.priority == 'low');
  }
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
