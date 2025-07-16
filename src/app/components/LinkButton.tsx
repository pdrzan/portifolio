import {ReactComponent as Right} from '../icons/right.svg';

export default function LinkButton({ icon, text, hoverText, url }) {
  return (
    <a 
      href={url}
      className={`
        px-[20px] py-[10px] rounded-[5px] flex justify-between
        border border-(--primary-white) hover:bg-(--secondary-background)
        group
      `}
      >
      <div className="flex items-center gap-[10px]">
        <div className="*:w-[30px] *:text-(--primary-white)">
          {icon}
        </div>
        <div>
          {text}
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="opacity-0 text-(--primary-grey) group-hover:opacity-100">
          {hoverText}
        </div>
        <Right className="w-[20px] duration-100 rotate-270 transition-transform group-hover:transform-[rotate(90deg)]"/>
      </div>
    </a>
  );
}
