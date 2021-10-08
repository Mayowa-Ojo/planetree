import { reactive, computed } from "vue";
import { nanoid } from "nanoid";
import { boards } from "../../constants/data";

const state = reactive({
   boards: boards
});

const themes = {
   design: "bg-blue-400",
   research: "bg-pink-400",
   planning: "bg-green-400",
   content: "bg-yellow-400",
   dev: "bg-red-400"
}

export const useBoard = () => {
   const createCard = ({ board, title, description, category }) => {
      const data = {
         id: nanoid(10),
         title,
         description,
         category,
         participants: Math.floor(Math.random() * (10 - 1) + 1),
         tasks: {
            total: Math.floor(Math.random() * (25 - 9) + 9),
            completed: Math.floor(Math.random() * 8)
         },
         attachments: Math.floor(Math.random() * 10),
         comments: Math.floor(Math.random() * 100),
         theme: themes[category],
         due: ""
      }

      state.boards[board].unshift(data);
   }

   const createBoard = ({ title }) => {
      state.boards = {...state.boards, [title]: []}
   }

   return {
      createCard,
      createBoard,
      boards: computed(() => state.boards)
   }
}