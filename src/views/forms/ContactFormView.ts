import { html } from "scu-ssg";



export async function renderContactFormView() {
  return html`
    <script>
      const urlParams = new URLSearchParams(window.location.search);
      console.log('urlParams', urlParams);
    </script>
    <form
      name="contact"
      action="/?form=contact&success=true#contact"
      netlify>
      <label>Name<input type="text" name="name" /></label>
      <button type="submit">Send</button>
    </form>
  `;
}