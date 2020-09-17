import React, { useState, useEffect } from 'react';

function ItemCount() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>Count: {count}</div>
            <div>
                <button onClick={() => setCount(count + 1)}>Increment Counter</button>
            </div>
            <div>
                <button onClick={() => setCount(count - 1)}>Decrease Counter</button>
            </div>
        </div>
    )
}

export default ItemCount;