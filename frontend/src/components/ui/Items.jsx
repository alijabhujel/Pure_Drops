import React from "react";
import { useSortable } from "@dnd-kit/sortable";

const imageMap = {
  1: "images/cotton.jpg",
  2: "images/sand.jpg",
  3: "images/charcoal.webp",
  4: "images/gravel.jpg",
  5: "images/pebbles.jpg",
};

const Items = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)`,
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="flex items-center justify-center"
    >
      <img
        src={imageMap[id]}
        alt={`Item ${id}`}
        className="w-64 h-24 object-cover"
      />
    </div>
  );
};

export default Items;
