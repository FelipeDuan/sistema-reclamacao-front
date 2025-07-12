interface PublicFetchProps {
  url: string;
  options?: RequestInit;
}

export async function publicFetch({ url, options }: PublicFetchProps) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (!response.ok) {
    throw (
      new Error(await response.text()) ||
      "Erro ao fazer requisição nessa rota pública"
    );
  }

  return response.json();
}
