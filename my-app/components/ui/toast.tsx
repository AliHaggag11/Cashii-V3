// in the '@/components/ui/toast' file
import * as React from "react"

export interface ToastActionElement {
  label: string
  onClick: () => void
}

export interface ToastProps {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  duration?: number // Allow custom duration per toast
}

export const Toast = (props: ToastProps) => {
  const { title, description, action, duration } = props

  const [open, setOpen] = React.useState(true)

  React.useEffect(() => {
    if (duration) {
      setTimeout(() => {
        setOpen(false)
      }, duration)
    }
  }, [duration])

  return (
    <div className="toast">
      <div className="toast-header">
        {title && <h4>{title}</h4>}
        {description && <p>{description}</p>}
      </div>
      {action && (
        <div className="toast-action">
          <button className="btn btn-primary" onClick={action.onClick}>
            {action.label}
          </button>
        </div>
      )}
      <button className="btn btn-close" onClick={() => setOpen(false)}></button>
    </div>
  )
}
