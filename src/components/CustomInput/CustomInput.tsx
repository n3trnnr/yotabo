import { ICustomInput } from "./CustomInput.props";

const CustomInput = ({ children, register, inputName, labelClassName, ...props }: ICustomInput) => {

    const { ref, ...rest } = register(inputName)
    return (
        <label className={labelClassName}>
            <input
                {...rest}
                ref={ref}
                {...props} />
            {children}
        </label>
    );
}

export default CustomInput;