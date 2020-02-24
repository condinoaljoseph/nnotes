import React, { useEffect, useState } from 'react';
import LabelItem from './LabelItem';

const Labels = () => {
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLabels();
    // eslint-disable-next-line
  }, []);

  const getLabels = async () => {
    setLoading(true);

    const res = await fetch('/labels');
    const data = await res.json();

    setLabels(data);
    setLoading(false);
  };

  return (
    <ul className='labelItems'>
      {!loading && labels.length === 0 ? (
        <li>Add labels</li>
      ) : (
        labels.map(label => <LabelItem label={label} key={label.id} />)
      )}
    </ul>
  );
};

export default Labels;
