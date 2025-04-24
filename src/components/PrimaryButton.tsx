import type React from "react"

import { Link } from "react-router"

interface PrimaryButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
}

const PrimaryButton = ({ children, to, href, onClick, type = "button", className = "" }: PrimaryButtonProps) => {
  const classes = `btn-primary ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default PrimaryButton
