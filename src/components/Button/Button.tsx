import styles from "./Button.module.css";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: (() => void) | undefined;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.button, styles[size], primary ? styles.primary : styles.secondary].join(
        " ",
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
