import { toast } from 'react-toastify';

export function toastSuccess(message) {
  if (message) {
    toast.success(message, { autoClose: 1000 });
  }
}
export function toastError(error) {
  let toastData = '';
  if (typeof error === 'string') {
    toastData = error;
  } else if (typeof error === 'object' && error.message) {
    toastData = error.message;
  } else if (error && error instanceof Array) {
    toastData = error;
  }
  if (toastData && typeof toastData === 'string' && toastData !== '') {
    toast.error(toastData, { autoClose: 1500 });
  } else if (toastData && toastData instanceof Array) {
    toastData.forEach((err) => {
      toastError(err);
    });
  }
}
