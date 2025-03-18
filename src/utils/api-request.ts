export const ApiRequest = async <T>({
  endpoint,
  method = "GET",
  body,
  onSuccess,
  onFailure,
}: {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, unknown>;
  onSuccess?: (data: T) => void;
  onFailure?: () => void;
}): Promise<T> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BACKEND_URL}${endpoint}`,
      {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      }
    );

    const data: T = await response.json();

    if (!response.ok) {
      if (typeof data === "object" && data !== null && "message" in data) {
        throw new Error((data as { message: string }).message);
      }
      throw new Error("Something went wrong");
    }

    if (onSuccess) onSuccess(data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("API Request Error:", error.message);
    }

    if (
      error instanceof Error &&
      (error.message.includes("NetworkError") ||
        error.message.includes("Failed to fetch"))
    ) {
      window.location.href = "/server-down";
    }

    if (onFailure) onFailure();

    throw error;
  }
};
