import React from 'react';

const AddItem = ({ inputItem, inputHandle, handleForm}) => {
  return (
    <>
      <div className="my-5">
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Enter items"
            value={inputItem} 
            onChange={inputHandle}
            className="w-[70%] h-[35px] outline-none border-2 rounded-md border-blue-800 ps-3"
          />
          <button
            type="submit"
            className="text-base font-semibold capitalize w-[80px] h-[35px] bg-blue-700 ms-5 text-slate-50 rounded-lg"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItem;
