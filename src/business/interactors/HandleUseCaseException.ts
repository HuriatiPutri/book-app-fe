type ErrorWithMessage = {
  code: number;
  message: string;
};

export const handleUseCaseError = (error: unknown) => {
  const errorState = {
    code: toErrorWithMessage(error).code,
    message: toErrorWithMessage(error).message,
  };
  return errorState;
};

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    const errorWithMessage: ErrorWithMessage = JSON.parse(JSON.stringify(maybeError));
    return errorWithMessage;
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return { code: 500, message: String(maybeError) };
  }
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}
