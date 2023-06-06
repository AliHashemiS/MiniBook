import styles from './Subscription.module.css'

export default function Subscription () {
  return (
    <div className={styles.newsletterWrap}>
      <p className={styles.subscriptionTitle}>
        <b>
          Subscribe to get our latest content by email.
        </b>
      </p>
      <form className={styles.form} action='https://ali-hashemi.mykajabi.com/forms/2148168308/form_submissions' acceptCharset='UTF-8' method='post'>
        <div className={styles.formContainer}>
          <input name='utf8' type='hidden' value='&#x2713;' />
          <input type='hidden' name='authenticity_token' value={process.env.TOKEN_KAJABI} />
          <input className={styles.inputEmail} type='email' size='30' required maxLength='256' name='form_submission[email]' placeholder='Enter your email...' />
          <input className={styles.inputSubmit} type='submit' value='Subscribe' />
        </div>
      </form>
    </div>
  )
};
