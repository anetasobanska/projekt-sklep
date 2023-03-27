import { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary, ErrorBoundaryPropsWithRender } from 'react-error-boundary';

interface ErrorBoundaryProps {
  children: ReactNode;
  onReset: ErrorBoundaryPropsWithRender['onReset'];
}
export const ErrorBoundary = ({ children, onReset }: ErrorBoundaryProps) => {
  return (
    <ReactErrorBoundary onReset={onReset} fallbackRender={FallbackRender}>
      {children}
    </ReactErrorBoundary>
  );
};

const FallbackRender: ErrorBoundaryPropsWithRender['fallbackRender'] = ({ resetErrorBoundary }) => {
  return (
    <div className="self-center">
      <div className="text-center">

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>

        <p className="mt-4 text-gray-500">Coś poszło nie tak!</p>
      </div>
    </div>
  );
};