'use client';

import { usePageLoader } from '../../context/pageLoaderContext/PageLoaderContext';
import './pageLoader.css';

const PageLoader = () => {
    const { show } = usePageLoader();

    return show ? <Loader /> : null;
};

export default PageLoader;

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    );
};
