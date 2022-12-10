import "./ErrorMessage.css";

const ErrorMessage = (props: { text: string }) => {
    return <div className="error-message">{props.text}</div>;
};

export default ErrorMessage;
