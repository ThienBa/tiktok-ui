import { useEffect, useState } from "react";

function useDebounce(value, delay) {
    // init state chỉ lấy value đầu là chuỗi '' 
    const [debouncedValue, setDebouncedValue] = useState(value);

    // Từ lần 2 value lọt vào dependency của useEffect nên set lại state sau 1 khoảng delay
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        // Mỗi lần value thay đổi nó sẽ clear 1 lần nên ta sẽ nhận được setTimeout cuối được gọi
        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    // Trước đó nó vẫn trả ra chuỗi rỗng sau setTimeout nó mới trả về state mới
    return debouncedValue;
}

export default useDebounce;