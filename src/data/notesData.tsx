export type Note = {
  id: string,
  title: string,
  content: string,
  createdAt: string
}


export const dummyNotes: Note[] = [
  
  {
    id: "note-001",
    title: "Grocery & Household List",
    content: "1. Oat milk\n2. Whole wheat bread\n3. Coffee beans (espresso roast)\n4. Olive oil\n5. Dish soap",
    createdAt: "2026-07-10T08:30:00Z"
  },
  {
    id: "note-002",
    title: "Project Ideas - Q3",
    content: "Explore building a lightweight Markdown editor component in React. Focus on live preview, auto-save functionality, and offline support using LocalStorage.",
    createdAt: "2026-07-12T14:15:22Z"
  },
  {
    id: "note-003",
    title: "Weekly Workouts",
    content: "Mon: Upper Body + 20min Cardio\nWed: Lower Body & Core\nFri: Full Body Circuit\nSat: Light Yoga / Stretching",
    createdAt: "2026-07-13T09:00:00Z"
  },
  {
    id: "note-004",
    title: "Book Recommendations",
    content: "• Designing Data-Intensive Applications by Martin Kleppmann\n• Atomic Habits by James Clear\n• The Pragmatic Programmer",
    createdAt: "2026-07-14T18:45:10Z"
  },
  {
    id: "note-005",
    title: "Meeting Notes - Sprint Planning",
    content: "Discussed backlog items for the next two weeks. Agreed to prioritize bug fixes on the authentication flow before shipping the user profile feature.",
    createdAt: "2026-07-15T11:20:00Z"
  },
  {
    id: "note-006",
    title: "Quick Wi-Fi Passwords",
    content: "Home: BlueSky#8842\nOffice Guest: Welcome2026!",
    createdAt: "2026-07-16T16:00:00Z"
  }
];