'use client';

import { toast } from 'react-toastify';

type RevalidateCardProps = {
  name: string;
  path: string;
};

async function revalidatePath(path: string) {
  const endpoint = '/api/revalidate';
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ path }),
  });
  const { revalidated, message } = await res.json();
  if (revalidated) {
    toast.success(message);
  } else {
    toast.error(message);
  }
}

export default function RevalidateCard({ name, path }: RevalidateCardProps) {
  return (
    <article className="flex justify-between">
      <div className="text-sm">
        <h2>{name}</h2>
        <span>{path}</span>
      </div>
      <button onClick={() => revalidatePath(path)} type="button" className="btn bg-primary-600 px-3.5 py-2.5">
        Refresh
      </button>
    </article>
  );
}
