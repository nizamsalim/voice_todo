export interface Todo {
  id: number; // Unique identifier for each Todo
  title: string; // Title of the Todo
  description: string; // Description of the Todo
  reminder: Date; // Reminder date and time
  completed: boolean;
}

export const todos: Todo[] = [
  {
    id: 1,
    title: "Grocery Shopping",
    description: "Buy vegetables and fruits for the week.",
    reminder: new Date("2024-10-10T10:00:00"),
    completed: false,
  },
  {
    id: 2,
    title: "Doctor's Appointment",
    description: "Visit Dr. Smith for a check-up.",
    reminder: new Date("2024-10-12T15:30:00"),
    completed: true,
  },
  {
    id: 3,
    title: "Gym Session",
    description: "Workout session at the gym.",
    reminder: new Date("2024-10-13T18:00:00"),
    completed: true,
  },
  {
    id: 4,
    title: "Read a Book",
    description: "Read 'The Great Gatsby'.",
    reminder: new Date("2024-10-15T20:00:00"),
    completed: true,
  },
  {
    id: 5,
    title: "Finish Project",
    description: "Complete the final report for the project.",
    reminder: new Date("2024-10-17T17:00:00"),
    completed: true,
  },
  {
    id: 6,
    title: "Plan Weekend Trip",
    description: "Organize itinerary for the weekend trip.",
    reminder: new Date("2024-10-19T14:00:00"),
    completed: true,
  },
  {
    id: 7,
    title: "Call Mom",
    description: "Check in on Mom and see how she's doing.",
    reminder: new Date("2024-10-10T11:30:00"),
    completed: false,
  },
  {
    id: 8,
    title: "Update Resume",
    description: "Revise and update my resume for job applications.",
    reminder: new Date("2024-10-11T16:00:00"),
    completed: true,
  },
  {
    id: 9,
    title: "Attend Meeting",
    description: "Zoom meeting with the project team.",
    reminder: new Date("2024-10-14T09:00:00"),
    completed: false,
  },
  {
    id: 10,
    title: "Volunteer at Shelter",
    description: "Help out at the local animal shelter.",
    reminder: new Date("2024-10-16T10:00:00"),
    completed: false,
  },
];
