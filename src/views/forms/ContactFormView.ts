import { html } from "scu-ssg";



export async function renderContactFormView() {
  return html`
    <form name="contact" netlify>
      <label>Name<input type="text" name="name" /></label>
      <button type="submit">Send</button>
    </form>
  `;
}