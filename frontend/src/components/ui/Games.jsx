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
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Filtration</h1>
      <p>Rearrange in correct order</p>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column tasks={tasks} />
      </DndContext>
      {isCorrectOrder && (
        <div className="mt-4 p-2 bg-green-200 text-green-800 rounded">
          Correct Order!
        </div>
      )}
    </div>
  );
}
