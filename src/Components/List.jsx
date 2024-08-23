import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
const List = (props) => {
    const {todo,deleteItem,clearAll}=props
  return (
    <>
    {todo.length == 0 ? (
            <div>
              <div className=" flex justify-center uppercase text-blue-800 font-bold from-neutral-900  text-6xl">
                welcome
              </div>
              <div className=" flex  justify-center mt-16 text-4xl uppercase font-semibold text-blue-900 ">
                add today task
              </div>
            </div>
          ) : (
            <div>
              <div className="w-[95%] md:w-[80%] h-[100%]">
                {todo.map((item, index) => (
                  <div
                    key={index}
                    className=" flex justify-between rounded-lg bg-slate-200 mb-3 h-[40px] items-center capitalize px-2"
                  >
                    <div> {item}</div>
                    <div className=" flex items-center ">
                      <button className=" text-blue-800 hover:text-blue-500 text-xl">
                        <FaCircleCheck />
                      </button>
                      <button
                        type="submit"
                        onClick={() => deleteItem(item)}
                        className=" text-base font-semibold capitalize w-[50px] h-[30px] bg-blue-700 ms-5 text-slate-50 rounded-lg"
                      >
                        del
                      </button>
                    </div>
                  </div>
                ))}
                <div className=" flex justify-center">
                  <button
                    onClick={clearAll}
                    className=" text-base font-semibold capitalize w-[100px] h-[30px] bg-blue-800 ms-5 text-slate-50 rounded-lg"
                  >
                    clear all
                  </button>
                </div>
              </div>
            </div>
          )}
    </>
  )
}

export default List