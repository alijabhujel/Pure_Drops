import React from "react";
import { SortableContext } from "@dnd-kit/sortable";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";
import Items from "./Items";

const Column = ({ tasks }) => {
  return (
    <div className="w-48 mx-auto p-0 bg-transparent border-none">
      <SortableContext
        items={tasks.map((task) => task.id)}
        strategy={verticalListSortingStrategy}
      >
        {tasks.map((task) => (
          <div key={task.id} className="mb-1">
            <Items id={task.id} />
          </div>
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
