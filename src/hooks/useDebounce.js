import { useEffect, useState } from 'react';

function UseDeboune(value, deplay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), deplay);
        return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
}

export default UseDeboune;
