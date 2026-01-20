export type TaskPriority = 'urgent' | 'normal' | 'optional';

export interface Task {
  id: string;
  title: string;
  meta: string;
  priority: TaskPriority;
}

export const memberTasks: Task[] = [
  {
    id: '1',
    title: 'Submit ID document',
    meta: 'Due today',
    priority: 'urgent',
  },
  {
    id: '2',
    title: 'Complete profile',
    meta: '~ 3 min',
    priority: 'normal',
  },
  {
    id: '3',
    title: 'Read company policy',
    meta: 'Optional',
    priority: 'optional',
  },
];
