<template>
  <main>
    <PageHero name="Privacy Policy" />
    <div class="policies">
      <p>Biya maintains strict privacy policies to reasonably safeguard customer information from unauthorized intrusions and employ best practices from around the world like the compliance with the UK Data Protection Act 1998 in dealing with our teeming users. </p>
      <p>Online Privacy concerns focus majorly on the protection of user personal information which users understandably expect to be kept private and in confidence. Customer personal information is information that when associated with a particular customer, identifies that customer directly to the exclusion of others. We take precautions to protect your information. When you submit personal information via the website, your information is protected both online and offline. Wherever we collect sensitive information (such as debit card data), that information is encrypted and transmitted to us in a secure way. </p>
      <p>Please note that it is necessary for Biya to collect customer information in order to conduct business and offer services which you enjoy. We usually collect customer personal information in accordance with our Know Your Customer (KYC) policy and for other purposes listed below to make our services better for you. When you apply for a product or service on Biya, you will be asked for personal information that is required to process your application. The information that you provide will only be used for the purposes described at the time of your application and where applicable in the terms and conditions that apply to the relevant product or service. </p>
      <p>Be rest assured, Biya does not compromise any security policies and your security is always considered highly important. </p>
      <p>For sake of clarity, here is what Biya does with your personal information that it collects: </p>
      <ul>
        <li>
          Provide services and customer support;
        </li>
        <li>
          Help process transactions and send notices about your transactions;
        </li>
        <li>
          To verify your identity, including during account creation and password reset processes;
        </li>
        <li>
          To resolve disputes, collect fees, and troubleshoot problems you might hardly have;
        </li>
        <li>
          To assist us manage risk, or to detect, prevent, and/or remediate fraud or other potentially prohibited or illegal activities;
        </li>
        <li>
          To detect, prevent or remediate violations of policies or applicable user agreements;
        </li>
        <li>
          Improve the our Services by customizing your user experience;
        </li>
        <li>
          To measure the performance of the Biya Services and improve their content and layout;
        </li>
        <li>
          To manage and protect our information technology infrastructure;
        </li>
        <li>
          To market to you our products and services (and those of third parties) that we believe may interest you, and to permit third parties to market such products and services to you
        </li>
        <li>
          Enable us provide targeted marketing and advertising, provide service update notices, and deliver promotional offers based on your communication preferences;
        </li>
        <li>
          To reach you at any email address, as authorized by you;
        </li>
      </ul>
      <p>We may contact you via electronic means or postal mail to notify you regarding your account, to troubleshoot problems with your account, to resolve a dispute, to poll your opinions and thoughts through surveys to make Biya better, or as otherwise necessary to service your account. Furthermore, we may contact you as necessary to enforce our policies, applicable law, or any agreement we may have with you. </p>
      <p>You will agree that all those listed are basically to serve you better but be totally rest assured that your security and privacy is our utmost priority. We will not share any of your information with unauthorized persons and adequate safeguards have been put in place to prevent unauthorized access and to ensure confidentiality of your personal information. </p>
    </div>
  </main>
</template>

<script>
import PageHero from '@/components/PageHero'
export default {
  components: {
    PageHero
  }
}
</script>

<style lang="scss" scoped>
p,
li {
  color: var(--secondary-color);
  font-size: 1.6rem;
  letter-spacing: 0.005em;
  margin-bottom: 4rem;
  line-height: 170%;
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
