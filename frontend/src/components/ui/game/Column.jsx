import React from "react";
import { SortableContext } from "@dnd-kit/sortable";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";
import Items from "./Items"; // Adjust import path as necessary

const Column = ({ tasks }) => {
  return (
    <div className="w-64 mx-auto p-4 bg-gray-100 border rounded shadow-md">
      <SortableContext
        items={tasks.map((task) => task.id)}
        strategy={verticalListSortingStrategy}
      >
        {tasks.map((task) => (
          <div key={task.id} className="mb-2">
            <Items id={task.id} title={task.title} />
          </div>
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
