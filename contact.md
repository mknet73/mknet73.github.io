---
layout: default
title: Kontakt
permalink: /contact/
---

## Skontaktuj się z nami

<div class="contact-form-container">
  <div class="contact-info-block" style="margin-bottom: 0; margin-right: 32px; min-width:220px;">
    <strong>Przykładowa Firma Sp. z o.o.</strong><br>
    ul. Fikcyjna 123<br>
    00-000 Warszawa<br>
    tel: 123 456 789<br>
    email: kontakt@przykladowa.pl<br>
  </div>
  <form class="contact-form" method="POST" action="https://formspree.io/f/your-form-id">
    <label for="name">Imię i nazwisko</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Adres e-mail</label>
    <input type="email" id="email" name="_replyto" required>

    <label for="message">Wiadomość</label>
    <textarea id="message" name="message" rows="6" required></textarea>

    <button type="submit">Wyślij</button>
  </form>
</div>
