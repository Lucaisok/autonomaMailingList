import React from "react";
import { useStatefulFields } from "./useStatefulFields";
import { useAuthSubmit } from "./useAuthSubmit";

export default function Unsubscribe() {
    const [values, handleChange] = useStatefulFields();
    const [thanks, isVisib, error, handleClick] = useAuthSubmit(
        "/unsubscribe",
        values
    );

    return (
        <div className="app">
            {isVisib && (
                <div className="header">
                    <img src="/images/logoAutonoma%20copy.png" />
                </div>
            )}
            {isVisib && (
                <div className="content">
                    {error && (
                        <p className="error">
                            Looks like your email is not here
                        </p>
                    )}
                    <input
                        name="mail"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>Unsubscribe</button>
                </div>
            )}
            {thanks && <h2 className="seeya">GoodBye</h2>}
        </div>
    );
}
