import { useJsonFetch } from '../_hooks/useJsonFetch';
import { FC } from 'react';

interface ComponentProps {
  url: string;
  title: string;
}

export const DataComponent: FC<ComponentProps> = ({ url, title }) => {
  const [data, loading, error] = useJsonFetch(url, {});

  return (
    <div style={{ border: '1px solid', margin: '3px' }}>
      <h2>{title}</h2>

      {loading && <div>Loading...</div>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <>
          <pre style={{ textAlign: 'left' }}>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </div>
  );
};
