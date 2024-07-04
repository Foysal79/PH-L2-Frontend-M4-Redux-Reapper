import React from "react";

class CounterWithClass extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <button className="bg-slate-500 p-4 m-4">0</button>
    }
}

export default CounterWithClass;