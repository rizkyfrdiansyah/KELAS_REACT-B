/** Generate Random ID */
import { v4 as uuidv4 } from "uuid";

const dataTodos = [
  {
    id: uuidv4(),
    title: "Mengerjakan Exercise",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Mengerjakan Assignment",
    completed: false,
  },
];

export { dataTodos };
