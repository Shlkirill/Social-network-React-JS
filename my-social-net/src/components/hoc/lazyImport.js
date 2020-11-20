import React, { Suspense } from 'react';

export const lazyImport = (Component) => {
    return (props) => {
        return <Suspense fallback={<di>Загрузка</di>}><Component {...props} /></Suspense>
    }
}