import {
  HTMLAttributeAnchorTarget, MouseEventHandler, ReactElement, ReactNode,
} from 'react'

import React from 'react'
import SystemLink from '@/app/_components/link/index'
import styles from './button.module.scss'


export enum SystemButtonKindEnum {
  text    = 'text',
  outline = 'outline',
  filled  = 'filled',
  default = 'default'
}

type SystemButtonKind = keyof typeof SystemButtonKindEnum

export enum SystemButtonColorEnum {
  primary   = 'primary',
  bg        = 'bg',
  opposite  = 'opposite',
  error     = 'error',
  process   = 'process',
  warning   = 'warning',
  success   = 'success',
  secondary = 'secondary',
  tertiary  = 'tertiary',
  white     = 'white',
  dark      = 'dark',
}

type SystemButtonColor = keyof typeof SystemButtonColorEnum

export enum SystemButtonSizeEnum {
  small        = 'small',
  'very-small' = 'very-small',
  default      = 'default',
}

type SystemButtonSize = keyof typeof SystemButtonSizeEnum


type SystemButtonShape = 'default' | 'circle'

export type SystemButtonProps = {
  kind?: SystemButtonKind
  color?: SystemButtonColor
  url?: string
  target?: HTMLAttributeAnchorTarget
  className?: string
  classText?: string
  text?: string
  size?: SystemButtonSize
  children?: ReactNode
  isNoPadding?: boolean
  shape?: SystemButtonShape
  onClick?: MouseEventHandler<HTMLDivElement>
}

// HTMLDivElement
export default function SystemButton({
  kind,
  color,
  url,
  target,
  className,
  classText,
  isNoPadding,
  text,
  size,
  children,
  shape,
  onClick,
}: SystemButtonProps) {
  const propsClient = {onClick}
  return (<>
    <SystemLink
      className={` ${className ?? ''} ${styles.wrap} ${styles[kind || 'default']} ${styles[shape || 'default']} ${styles[color || 'primary']} ${styles[size || '']} ${isNoPadding && styles.noPadding}`}
      url={url as any}
      target={target}
      {...propsClient}
    >
      {children}
      {text && (<span className={` ${classText ?? ''}`}>
              {text}
            </span>)}
    </SystemLink>
  </>)
}
