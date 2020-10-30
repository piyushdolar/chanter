import { useSelector } from 'react-redux';
import CrackWatch from './CrackWatch';

const CrackWatchContainer = () => {
	const CrackWatchGames = useSelector((state) => state.Games);
	return <CrackWatch games={CrackWatchGames} />;
};

export default CrackWatchContainer;
