import { selectTasks } from '@/redux/features/task/taskSlice';
import { useAppSelector } from '@/redux/hook';
import { Button } from '../ui/button';
import { Trash } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import TaskCard from '../module/tasks/taskCard';

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1>Tasks</h1>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
