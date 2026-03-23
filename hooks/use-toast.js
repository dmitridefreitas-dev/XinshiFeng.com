'use client';
import { useState, useCallback, useRef } from 'react';

let toastCount = 0;
const listeners = new Set();
let memoryState = { toasts: [] };

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TOAST':
      return { ...state, toasts: [action.toast, ...state.toasts].slice(0, 1) };
    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };
    case 'DISMISS_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toastId || action.toastId === undefined
            ? { ...t, open: false }
            : t
        ),
      };
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) return { ...state, toasts: [] };
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state;
  }
}

function toast({ ...props }) {
  const id = String(toastCount++);

  const update = (updateProps) =>
    dispatch({ type: 'UPDATE_TOAST', toast: { ...updateProps, id } });
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id });

  dispatch({
    type: 'ADD_TOAST',
    toast: { ...props, id, open: true, onOpenChange: (open) => !open && dismiss() },
  });

  return { id, dismiss, update };
}

function useToast() {
  const [state, setState] = useState(memoryState);

  const callbackRef = useRef(setState);
  callbackRef.current = setState;

  if (!listeners.has(callbackRef.current)) {
    listeners.add(callbackRef.current);
  }

  const dismiss = useCallback((toastId) => {
    dispatch({ type: 'DISMISS_TOAST', toastId });
  }, []);

  return {
    ...state,
    toast,
    dismiss,
  };
}

export { useToast, toast };
