import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Move } from "lucide-react"; // icon from lucide-react

const LeftProductsTable = ({ data = [], setProducts, onEdit, onDelete }) => {
  // Handle drag end
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setProducts(items);
  };

  return (
    <div className="overflow-x-auto">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="products">
          {(provided) => (
            <table
              className="w-full border text-sm text-center"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">S.No</th>
                  <th className="border p-2">Drag</th>
                  <th className="border p-2">Product Name</th>
                  <th className="border p-2">Code</th>
                  <th className="border p-2">FG Code</th>
                  <th className="border p-2">Product Type</th>
                  <th className="border p-2">Traceability</th>
                  <th className="border p-2">Added On</th>
                  <th className="border p-2">Status</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan="10" className="p-4 text-center">
                      No Products Added
                    </td>
                  </tr>
                ) : (
                  data.map((item, index) => (
                    <Draggable
                      key={item.id?.toString() || index.toString()}
                      draggableId={item.id?.toString() || index.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={`${snapshot.isDragging ? "bg-gray-100" : ""}`}
                        >
                          <td className="border p-2">{index + 1}</td>

                          {/* Drag handle with lucide icon */}
                          <td
                            className="border p-2 cursor-grab"
                            {...provided.dragHandleProps}
                          >
                            <Move className="w-5 h-5 text-gray-500 mx-auto" />
                          </td>

                          <td className="border p-2">{item.productName || "-"}</td>
                          <td className="border p-2">{item.code || "-"}</td>
                          <td className="border p-2">{item.fgCode || "-"}</td>
                          <td className="border p-2">{item.productType || "-"}</td>
                          <td className="border p-2">{item.traceability || "-"}</td>
                          <td className="border p-2">{item.addedOn || "-"}</td>
                          <td className="border p-2">
                            <span
                              className={`font-medium ${
                                item.status ? "text-green-600" : "text-red-500"
                              }`}
                            >
                              ● {item.status ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td className="border p-2">
                            <button
                              onClick={() => onEdit(index)}
                              className="px-2 py-1 text-blue-600 hover:underline"
                            >
                              Edit
                            </button>
                            {" | "}
                            <button
                              onClick={() => onDelete(index)}
                              className="px-2 py-1 text-red-500 hover:underline"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      )}
                    </Draggable>
                  ))
                )}
                {provided.placeholder}
              </tbody>
            </table>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default LeftProductsTable;
