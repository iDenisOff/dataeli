import classNames from 'classnames';
import styles from './style.module.scss';

type MainButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  type?: 'submit' | 'button';
};

export function MainButton({
  children,
  type = 'button',
  ...props
}: MainButtonProps): React.ReactElement {
  return (
    <button
      type={type}
      className={classNames(styles.container, props.className)}
    >
      <span className={styles.text}>{children}</span>
    </button>
  );
}
