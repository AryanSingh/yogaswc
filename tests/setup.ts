import * as matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';

expect.extend(matchers);

// Mock scrollTo
window.scrollTo = vi.fn();

// Mock gtag
(window as any).gtag = vi.fn();
