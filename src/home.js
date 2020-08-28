import React from "react";
import { useStatefulFields } from "./useStatefulFields";
import { useAuthSubmit } from "./useAuthSubmit";

export default function Home() {
    const [values, handleChange] = useStatefulFields();
    const [thanks, isVisib, error, handleClick] = useAuthSubmit(
        "/subscribe",
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
                            Something went wrong, please try again
                        </p>
                    )}
                    <input
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>Submit</button>
                </div>
            )}
            {thanks && <h2 className="seeya">See you soon</h2>}
        </div>
    );
}
