"use client";

import { RightArrow } from "../Icon";

const ButtonWhite = (props) => {
  const { content } = props;
  return (
    <div className="group inline-block">
      <button
        className={`font-Inter font-normal sm:text-xl text-lg !duration-300 group-hover:text-white group-hover:bg-tia-maria flex items-center gap-2 bg-white text-shark rounded-[70px] p-[15px_27px] relative z-10 `}
      >
        <span>
          <RightArrow />
        </span>
        {content}
      </button>
    </div>
  );
};

export default ButtonWhite;
