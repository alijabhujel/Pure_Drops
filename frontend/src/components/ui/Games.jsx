import React, { useState } from "react";
import { closestCorners, DndContext } from "@dnd-kit/core";
import Column from "./Column";
import { arrayMove } from "@dnd-kit/sortable";

const correctOrder = [1, 2, 3];

export default function Games() {
  const [tasks, setTasks] = useState([
    { id: 2, title: "Cotton" },
    { id: 3, title: "Wool" },
    { id: 1, title: "Sand" },
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
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-screen">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Filtration</h1>
        <p className="text-lg mb-6">Rearrange in correct order</p>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <Column tasks={tasks} />
        </DndContext>
        {isCorrectOrder && (
          <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-lg shadow-md">
            Correct Order!
          </div>
        )}
      </div>
    </div>
  );
}
