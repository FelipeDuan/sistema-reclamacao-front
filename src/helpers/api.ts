// obs: como essa é uma aplicação para o teste técnico, deixei a url da api aqui e o token para que possam rodar localmente sem problemas também.
export const BASE_URL = "http://localhost:8080";
export const TOKEN_KEY = "reclame.token";

interface FetchProps {
  url: string;
  options?: RequestInit;
}

export async function publicFetch({ url, options }: FetchProps) {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    throw (
      new Error(await res.text()) ||
      "Erro ao fazer requisição nessa rota pública."
    );
  }

  return res.json();
}

export async function authFetch({ url, options }: FetchProps) {
  const token = localStorage.getItem(TOKEN_KEY);

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options?.headers || {}),
    },
  });

  if (res.status === 401 || res.status === 403) {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = "/login";
    throw new Error("Sessão expirada. Faça login novamente.");
  }

  if (!res.ok) {
    const text = await res.text();
    let json;

    try {
      json = JSON.parse(text);
    } catch {
      throw new Error(text || "Erro ao fazer requisição.");
    }

    throw json;
  }

  if (!res.headers.get("content-type")?.includes("application/json")) {
    return null;
  }

  return res.json();
}

export async function verifyToken() {
  try {
    const res = await fetch(`${BASE_URL}/api/reclamacoes/hello`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
    });

    if (!res.ok) {
      throw new Error("Token inválido");
    }

    return true;
  } catch {
    localStorage.removeItem(TOKEN_KEY);
    return false;
  }
}

export function handleApiError(
  error: any,
  defaultMessage = "Erro inesperado."
) {
  if (error && typeof error === "object" && error.fields) {
    return Object.values(error.fields).join("\n");
  }

  if (error && typeof error === "object" && error.message) {
    return error.message;
  }

  return defaultMessage;
}
