import React, { Suspense } from 'react';

export const lazyImport = (Component) => {
    debugger;
    return (props) => {
        return <Suspense fallback={<di>Загрузка</di>}><Component {...props} /></Suspense>
    }
}