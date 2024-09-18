
import { Link } from "react-router-dom";

export default function CustomButton(props: {
  to: string;
  text: string;
  active?: boolean;
  href?: string;
}) {
  return (
    <div>
        {props.href?
        <a target="_blank" href={props.href} className={
            !props.active
              ? `rounded-3xl text-black py-2 px-4 w-28 hover:bg-[#008069] hover:text-white`
              : `rounded-3xl text-white py-2 px-4 w-28 bg-[#008069] hover:bg-inherit hover:text-black`
          }>{props.text}</a>        
        :<Link
        className={
          !props.active
            ? `rounded-3xl text-black py-2 px-4 w-28 hover:bg-[#008069] hover:text-white`
            : `rounded-3xl text-white py-2 px-4 w-28 bg-[#008069] hover:bg-inherit hover:text-black`
        }
        to={props.to}
      >
        {props.text}
      </Link>}
      
    </div>
  );
}
