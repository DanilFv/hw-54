import * as React from "react";

interface Props {
    className?: string;
    text: string;
}

const Tries: React.FC<Props> = ({text, className}) => {
    return (
        <p className={className}>
            {text}
        </p>
    );
};

export default Tries;