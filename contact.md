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
    <hr style="margin:18px 0;">
    <strong>Jak dojechać?</strong><br>
    <ul style="margin-left: 1em; padding-left: 0.5em;">
      <li><b>Samochodem:</b> Wjazd od ul. Fikcyjnej, bezpłatny parking przed budynkiem.</li>
      <li><b>Komunikacją miejską:</b> Autobusy 123, 456 oraz tramwaj 7 – przystanek "Fikcyjna".</li>
      <li><b>Rowerem:</b> Stacja rowerów miejskich naprzeciwko wejścia.</li>
    </ul>
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
