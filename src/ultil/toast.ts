import toast, { ToastOptions } from 'react-hot-toast'

export const notifySuccess = (message: string, options?: ToastOptions) => toast.success(message, {
  style: {fontSize: '14px'}, ...options,
})

export const notifyError = (message: string, options?: ToastOptions) => toast.error(message, {
  style: {fontSize: '14px'}, ...options,
})

export const notifyLoading = (message: string, options?: ToastOptions) => toast.loading(message, {
  style: {fontSize: '14px'}, ...options,
})

export const notifyInfo = (message: string, options?: ToastOptions) => toast(message, {
  style: {fontSize: '14px'}, ...options,
  icon: '👋',
})

export const notifyWarning = (message: string, options?: ToastOptions) => toast(message, {
  style: {fontSize: '14px'}, ...options,
  icon: '⚠️',
})
