import styles from './Comment.module.css'

export default function Comment () {
  return (
    <div className={styles.newsletterWrap}>
      <p className={styles.commentTitle}>
        <b>
          We want to hear from you. Share your thoughts about A Wearable World.
        </b>
      </p>
      <form className={styles.form} action={process.env.COMMENT_URL} acceptCharset='UTF-8' method='post'>
        <div className={styles.formContainer}>
          <input name='utf8' type='hidden' value='&#x2713;' />
          <input id="form_submission_email" className={styles.inputEmail} type='email' size='30' required maxLength='256' name='form_submission[email]' placeholder='Enter your email...' />
          <textarea id="form_submission_custom_1" className={styles.inputComment} required name="form_submission[custom_1]" placeholder="Enter your comment..." />
          <input className={styles.inputSubmit} type='submit' value='Send' />
        </div>
      </form>
    </div>
  )
};
