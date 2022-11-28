import { useState } from 'react';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { sortOptimal, sortPrice, sortSpeed } from '../../redux/actions/actionCreators';
import styles from './SortButtons.module.scss';

function SortButtons() {
  const [activeSortButton, setActiveSortButton] = useState<'cheap' | 'speed' | 'optimal'>('cheap');

  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <button
        className={classnames(styles.button, activeSortButton === 'cheap' && styles.buttonActive)}
        type="button"
        aria-label="cheap"
        onClick={() => {
          setActiveSortButton('cheap');
          dispatch(sortPrice());
        }}
      >
        Самые дешевые
      </button>
      <button
        className={classnames(styles.button, activeSortButton === 'speed' && styles.buttonActive)}
        type="button"
        aria-label="speed"
        onClick={() => {
          setActiveSortButton('speed');
          dispatch(sortSpeed());
        }}
      >
        Самые быстрые
      </button>
      <button
        className={classnames(styles.button, activeSortButton === 'optimal' && styles.buttonActive)}
        type="button"
        aria-label="optimal"
        onClick={() => {
          setActiveSortButton('optimal');
          dispatch(sortOptimal());
        }}
      >
        Оптимальные
      </button>
    </div>
  );
}

export default SortButtons;
