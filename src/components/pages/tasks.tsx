import { selectTasks } from '@/redux/features/task/taskSlice';
import { useAppSelector } from '@/redux/hook';
import { Button } from '../ui/button';
import { Trash } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import TaskCard from '../module/tasks/TaskCard';
import AddTaskModal from '../module/tasks/AddTaskModal';

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1>Tasks</h1>
      </div>
      <AddTaskModal />
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
