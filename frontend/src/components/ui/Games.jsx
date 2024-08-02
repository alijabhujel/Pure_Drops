import React, { useState } from "react";
import { closestCorners, DndContext } from "@dnd-kit/core";
import Column from "./Column";
import { arrayMove } from "@dnd-kit/sortable";

const correctOrder = [5, 4, 3, 2, 1];

export default function Games() {
  const [tasks, setTasks] = useState([
    { id: 3, title: "Charcoal" },
    { id: 1, title: "Cotton" },
    { id: 2, title: "Sand" },
    { id: 4, title: "Gravel" },
    { id: 5, title: "Pebble" },
  ]);

  const [isCorrectOrder, setIsCorrectOrder] = useState(false);

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      const newTasks = arrayMove(tasks, originalPos, newPos);

      const newOrder = newTasks.map((task) => task.id);
      setIsCorrectOrder(
        JSON.stringify(newOrder) === JSON.stringify(correctOrder)
      );

      return newTasks;
    });
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 to-green-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Filtration Game</h1>
      <p className="text-lg mb-6 text-gray-600">
        Rearrange the components in the correct order.
      </p>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column tasks={tasks} />
      </DndContext>
      {isCorrectOrder && (
        <div className="mt-4 p-4 bg-green-300 text-green-800 rounded-lg shadow-lg flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-xl font-semibold">Correct Order! 🎉</span>
        </div>
      )}
    </div>
  );
}
