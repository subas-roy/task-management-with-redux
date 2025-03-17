import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { toggleCompleteState } from '@/redux/features/task/taskSlice';
import { useAppDispatch } from '@/redux/hook';
import { ITask } from '@/types';
import { Trash } from 'lucide-react';

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn('size-3 rounded-full', {
              'bg-red-500': task.priority == 'high',
              'bg-yellow-500': task.priority == 'medium',
              'bg-green-500': task.priority == 'low',
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <Trash />
          </Button>
          <Checkbox onClick={() => dispatch(toggleCompleteState(task.id))} />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
