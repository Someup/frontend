import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';

interface SpinnerProps {
  className?: string;
  showText?: boolean;
}

export default function Spinner({
  className = '',
  showText = true,
}: SpinnerProps) {
  return (
    <div
      className={`m-auto flex flex-col items-center justify-center ${className}`}
    >
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="44"
          width="8"
          height="24"
          rx="4"
          className="spinner-bar animate-color-change"
          style={{ animationDelay: '-1.75s' }}
        />
        <rect
          x="67.7969"
          y="33.8577"
          width="8"
          height="24"
          rx="4"
          transform="rotate(-135 67.7969 33.8577)"
          className="spinner-bar animate-color-change"
          style={{ animationDelay: '-1.5s' }}
        />
        <rect
          x="72"
          y="52"
          width="8"
          height="24"
          rx="4"
          transform="rotate(-90 72 52)"
          className="spinner-bar animate-color-change"
          style={{ animationDelay: '-1.25s' }}
        />
        <rect
          x="62.1406"
          y="67.7991"
          width="8"
          height="24"
          rx="4"
          transform="rotate(-45 62.1406 67.7991)"
          className="spinner-bar animate-color-change"
          style={{ animationDelay: '-1s' }}
        />
        <rect
          x="44"
          y="72"
          width="8"
          height="24"
          rx="4"
          className="spinner-bar animate-color-change"
          style={{ animationDelay: '-0.75s' }}
        />
        <rect
          x="16.8867"
          y="84.7695"
          width="8"
          height="24"
          rx="4"
          transform="rotate(-135 16.8867 84.7695)"
          className="spinner-bar animate-color-change"
          style={{ animationDelay: '-0.5s' }}
        />
        <rect
          y="52"
          width="8"
          height="24"
          rx="4"
          transform="rotate(-90 0 52)"
          className="spinner-bar animate-color-change"
          style={{ animationDelay: '-0.25s' }}
        />
        <rect
          x="11.2305"
          y="16.8872"
          width="8"
          height="24"
          rx="4"
          transform="rotate(-45 11.2305 16.8872)"
          className="spinner-bar animate-color-change"
          style={{ animationDelay: '0s' }}
        />
      </svg>
      {showText && (
        <span
          className={cn(typography({ scale: 'body-1' }), 'mt-11 text-gray-500')}
        >
          잠시만 기다려주세요.
        </span>
      )}
    </div>
  );
}
