import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  tracesSampleRate: 1.0,
});

export const logError = (error, context = {}) => {
  console.error('An error occurred:', error);
  Sentry.withScope((scope) => {
    Object.keys(context).forEach((key) => {
      scope.setExtra(key, context[key]);
    });
    Sentry.captureException(error);
  });
};

export const ErrorBoundary = ({ children }) => {
  return (
    <Sentry.ErrorBoundary fallback={<ErrorFallback />}>
      {children}
    </Sentry.ErrorBoundary>
  );
};

const ErrorFallback = ({ error }) => {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry for the inconvenience. Please try again later or contact support if the problem persists.</p>
    </div>
  );
};
