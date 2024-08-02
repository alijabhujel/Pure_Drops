import React from "react";
import { useSortable } from "@dnd-kit/sortable";

// Adjust these paths according to your file structure
// import sandImg from "images/sand.jpg";
// import charcoalImg from "images/charcoal.webp";
// import pebblesImg from "images/pebbles.jpg";

const imageMap = {
  1:'images/pebbles.jpg',
  2: 'images/gravel.jpg',
  3: 'images/charcoal.webp',
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
      className="flex items-center justify-center p-2 mb-2 bg-white border rounded shadow-lg cursor-move"
    >
      <img
        src={imageMap[id]}
        alt={`Item ${id}`}
        className="w-auto h-auto max-w-full max-h-full object-contain" // Ensure image scales correctly
      />
    </div>
  );
};

export default Items;
