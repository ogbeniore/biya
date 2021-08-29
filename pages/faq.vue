<template>
  <main>
    <PageHero name="Frequently Asked Questions" />
    <div class="policies">
      <Accordion :items="questions" />
    </div>
    <Questions />
  </main>
</template>

<script>
import PageHero from '@/components/PageHero'
import Questions from '@/components/Homepage/Questions'
import Accordion from '@/components/Accordion'
export default {
  components: {
    PageHero,
    Questions,
    Accordion
  },
  data: () => ({
    questions: [
      {
        question: 'What is Biya ? ',
        answer: 'Biya is a smart chat bot that helps you buy airtime, transfer funds and pay bills without the need to download any extra apps once you have one of Facebook Messenger, Telegram, Slack or Skype. '
      },
      {
        question: 'How does Biya work ? ',
        answer: 'Biya lives in messaging apps like Messenger and Telegram. The first time you use Biya, Biya will introduce herself and ask you for your email and phone number. Once you’ve done that, you can send a her message like “menu” and it will guide you through the process of making your first transaction. '
      },
      {
        question: 'What can I ask Biya ? ',
        answer: 'You can always follow prompts by using the MENU keyword but here are a few sample things you can text to Biya;',
        bills: true
      },
      {
        question: 'How secure is Biya ?',
        answer: 'We take your privacy and the security of your data very seriously. We use a variety of security measures to ensure the safety of your personal information and financial transactions. Communication between Biya and your messaging apps are encrypted using SSL.'
      },
      {
        question: 'Is Biya free to use?',
        answer: 'Airtime recharges on Biya are at face value but we charge 100 naira service fee for other transactions like bill payments and money transfers. '
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
p,
li ,
h3{
  color: var(--secondary-color);
  font-size: 1.6rem;
  letter-spacing: 0.005em;
  margin-bottom: 4rem;
  line-height: 170%;
  a {
    color: var(--pink);
    &:hover {
      color: var(--primary-color);
    }
  }
}
h3 {
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--primary-color);
}
li {
  margin-bottom: 1rem;
}
ul {
  margin-bottom: 3rem;
}
.policies {
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 2rem 6rem 2rem;
}
</style>
