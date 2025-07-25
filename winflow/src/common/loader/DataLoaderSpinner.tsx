'use client';

import './dataLoader.css';

type DataLoadingSpinnerProps = {
    main?: boolean;
    small?: boolean;
    noPadding?: boolean;
};

const DataLoadingSpinner = ({
    main = true,
    small,
    noPadding,
}: DataLoadingSpinnerProps) => {
    const spinnerSize = small
        ? { width: '20px', height: '20px' }
        : { width: '30px', height: '30px' };

    return (
        <div
            className={`flex items-center justify-center ${noPadding ? '' : 'py-4'
                } ${main ? 'w-full h-40' : ''}`}
        >
            <div className="custom-spinner" style={spinnerSize}></div>
        </div>
    );
};

export default DataLoadingSpinner;
