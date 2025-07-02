import { useRef } from 'react';
import { MainButton } from '@/components/ui-kits/main-button';
import styles from './style.module.scss';
import { Text } from '../../ui-kits/text';

export default function LinkFormBlock(): React.ReactElement {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity();
      return;
    }

    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const body = encodeURIComponent(
      `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nСообщение: ${message}`
    );
    const subject = encodeURIComponent('Обращение с сайта');

    window.location.href = `mailto:support@dataeli.com?subject=${subject}&body=${body}`;
  };

  return (
    <form ref={formRef} className={styles.wrapper} onSubmit={handleSubmit}>
      <Text size={'xl'} className={styles.title}>
        остались вопросы?
      </Text>
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="name"
          placeholder="имя"
          className={styles.input}
          maxLength={20}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="email"
          name="email"
          placeholder="e-mail"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="tel"
          name="phone"
          placeholder="+7 999 999 99 99"
          className={styles.input}
          minLength={12}
          maxLength={12}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="message"
          placeholder="сообщение"
          className={styles.input}
          maxLength={500}
          required
        />
      </div>
      <MainButton type={'submit'} className={styles.submitButton}>
        отправить
      </MainButton>
      <Text size={'s'} className={styles.warnMessage}>
        Отправляя форму, вы даете согласие на обработку персональных данных и
        соглашаетесь c <a href={''}>политикой конфиденциальности</a>
      </Text>
    </form>
  );
}
