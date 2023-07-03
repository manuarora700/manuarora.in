export const EmailTemplate = ({ email, message }) => (
  <div>
    <p>Hello, {email} 👋</p>

    <p>
      Thankyou for contacting me through my website! I'm excited to work with
      you.
    </p>

    <p>Message body: </p>
    <p>{message} </p>
  </div>
);
