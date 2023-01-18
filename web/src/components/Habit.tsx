interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {

    return (
        <div className="bg-zinc-900 text-center w-10 h-10 text- rounded m-2 items-center justify-center">{props.completed}</div>
    )
}