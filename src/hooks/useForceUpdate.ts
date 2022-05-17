import { useState, useCallback } from 'react'

export default function useForceUpdate() {
    const [state, updateState] = useState({});

    return useCallback(() => {
        updateState({})
    }, [])
}