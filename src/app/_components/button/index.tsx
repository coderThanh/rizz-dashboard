import {
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactElement,
} from 'react'

import React from 'react'
import SystemLink from '@/app/_components/link/index'
import styles from './button.module.scss'

export enum SystemButtonKind {
  text = 'text',
  outline = 'outline',
  default = 'default',
}

export enum SystemButtonColor {
  primary = 'primary',
  primaryTransparent = 'primaryTransparent',
  white = 'white',
  whiteTransparent = 'whiteTransparent',
  dark = 'dark',
  darkTransparent = 'darkTransparent',
  error = 'error',
  errorTransparent = 'errorTransparent',
  tertiary = 'tertiary',
  secondary = 'secondary',
}

export enum SystemButtonSize {
  default = 'default',
  small = 'small',
}

export type SystemButtonProps = {
  kind?: SystemButtonKind
  color?: SystemButtonColor
  url?: string
  target?: HTMLAttributeAnchorTarget
  className?: string
  classText?: string
  classInner?: string
  text?: string
  size?: SystemButtonSize
  children?: ReactElement
  onClick?: MouseEventHandler<HTMLDivElement>
}

// HTMLDivElement
export default function SystemButton(
  {
    kind,
    color,
    url,
    target,
    className,
    classText,
    classInner,
    text,
    size,
    children,
    onClick,
  }: SystemButtonProps
) {
  return (
    <>
      <SystemLink
        className={`btn ${className ?? ''} ${styles.wrap} ${
          styles[kind || 'default']
        } ${styles[color || 'primary']} ${styles[size || '']}`}
        url={url as any}
        target={target}
      >
        <div
          className={`btn-inner ${styles.inner}  ${classInner ?? ''}`}
          onClick={(event) => onClick && onClick(event)}
        >
          {children}
          {text && (
            <span className={`${styles.textWrap} ${classText ?? ''} btn-title`}>
              {text}
            </span>
          )}
        </div>
      </SystemLink>
    </>
  )
}

export const SystemButtonIcon = (props: SystemButtonProps) => {
  return <SystemLink
    className={`${props?.className ?? ''} `}
    url={props?.url as any}
    target={props?.target}>
    <div
      className={`${props?.classInner ?? ''} ${styles.btnIcon} ${styles[props?.color || 'primary']} `}
      onClick={(event) => props?.onClick && props?.onClick(event)}>
      {props?.children}
    </div>
  </SystemLink>
}
