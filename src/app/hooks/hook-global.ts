import { notifyError, notifySuccess } from "@/ultil/toast";
import { useCallback, useEffect, useRef, useState } from "react";

export const UseEventClickOutside = (AutoCloseClickInsite: boolean) => {
  const [isShow, setIsShow] = useState(false)

  const refPopup = useRef<null | HTMLElement>(null)

  const changeShow = useCallback((status: boolean) => {
    setIsShow(status)
  }, [])

  const documentListener = useCallback((e: MouseEvent) => {
    if(refPopup.current && !refPopup.current.contains(e.target as Node)) {
      setIsShow(false)
    }

    if(refPopup.current && refPopup.current.contains(e.target as Node) && AutoCloseClickInsite) {
      setIsShow(false)
    }
  }, [])

  useEffect(() => {
    if(isShow) {
      document.addEventListener('click', documentListener)
    } else {
      document.removeEventListener('click', documentListener)
    }

    return () => {
      document.removeEventListener('click', documentListener)
    }
  }, [
    isShow,
    documentListener
  ])

  return {
    isShow,
    changeShow,
    refPopup
  }
}

export const UseCopyToClipboard = () => {

  const copyToClipboard = async(text: string) => {
    if(!text) return

    try {
      await navigator.clipboard.writeText(text);
      notifySuccess('Copied to clipboard');

    } catch(error) {
      notifyError('Failed to copy to clipboard');
    }
  }
  return {
    copyToClipboard
  }
}