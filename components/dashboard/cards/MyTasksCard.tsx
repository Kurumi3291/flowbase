// MyTasksCard.tsx

export type TaskPriority = 'urgent' | 'normal' | 'optional';

export interface Task {
  id: string;
  title: string;
  meta: string;
  priority: TaskPriority;
}


interface MyTasksCardProps {
  tasks: Task[];
}

const priorityDot: Record<TaskPriority, string> = {
  urgent: 'bg-red-500',
  normal: 'bg-yellow-500',
  optional: 'bg-gray-300',
};

const metaText: Record<TaskPriority, string> = {
  urgent: 'text-red-600',
  normal: 'text-gray-500',
  optional: 'text-gray-400',
};

export default function MyTasksCard({ tasks }: MyTasksCardProps) {
  return (
    <section className="rounded-xl border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">
          My Tasks
        </h2>
        <span className="text-xs text-gray-500">
          {tasks.length} pending
        </span>
      </div>

      {/* Task list */}
      <ul className="divide-y border-t">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="px-5 py-4 hover:bg-gray-50"
            >
            <div className="flex items-start gap-3">
                <span
                className={`mt-1.5 h-2 w-2 rounded-full ${priorityDot[task.priority]}`}
                />
                <div>
                <p className="text-sm font-medium text-gray-900">
                    {task.title}
                </p>
                <p className={`text-xs ${metaText[task.priority]}`}>
                    {task.meta}
                </p>
                </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="px-5 py-3">
        <button className="text-xs text-gray-500 hover:text-gray-900">
            View all tasks
        </button>
      </div>
    </section>
  );
}
