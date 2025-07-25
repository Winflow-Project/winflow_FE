'use client';

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react';
import { usePathname } from 'next/navigation';

// 1. Define types
type PageLoaderContextType = {
    show: boolean;
    loading: boolean;
    updateShow: (newShowState: boolean) => void;
};

// 2. Create the context
const PageLoaderContext = createContext<PageLoaderContextType | undefined>(undefined);

// 3. Provider component
export const PageLoaderProvider = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const [show, setShow] = useState(true); // Initially show loader
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setShow(true);

        const timer = setTimeout(() => {
            setShow(false);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [pathname]);

    const updateShow = useCallback((newShowState: boolean) => {
        setShow(newShowState);
    }, []);

    return (
        <PageLoaderContext.Provider value={{ show, updateShow, loading }}>
            {children}
        </PageLoaderContext.Provider>
    );
};

// 4. Custom hook to use the context
export const usePageLoader = () => {
    const context = useContext(PageLoaderContext);
    if (!context) {
        throw new Error('usePageLoader must be used within a PageLoaderProvider');
    }
    return context;
};
