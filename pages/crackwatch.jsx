import React from 'react';
import dynamic from 'next/dynamic';

const CrackWatchDynamic = dynamic(() => import('../components/CrackWatch/CrackWatch.container'), {
	loading: () => <p>Loading...</p>,
});

const CrackWatchView = () => {
	return <CrackWatchDynamic />;
};

export default CrackWatchView;
