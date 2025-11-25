import { useId, type ComponentProps, type FC } from "react";
import { twMerge } from "tailwind-merge";

interface BaseProps extends ComponentProps<"input"> {
  className?: string;
}

interface LabelProps extends BaseProps {
  label: string;
  id?: never;
}

type Props = LabelProps | BaseProps;

const Input: FC<Props> = ({ ...props }) => {
  const id = useId();

  const className = twMerge(props.className, "border px-4 py-1 rounded");

  if ("label" in props) {
    const { label, ...rest } = props;
    return (
      <div>
        {label && (
          <div className="mb-1">
            <label htmlFor={id}>{label}</label>
          </div>
        )}
        <input {...rest} id={id} className={className} />
      </div>
    );
  }

  return <input {...props} className={className} />;
};

export default Input;
