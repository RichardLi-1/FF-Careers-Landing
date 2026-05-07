import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { usePageViewTracker } from "../hooks/usePageViewTracker"

export function Privacy() {
  usePageViewTracker("/privacy")

  return (
    <>
      <Navbar />

      <section style={{ textAlign: "center", maxWidth: 1250, margin: "0 auto", padding: "40px 30px", backgroundColor: "#0B0A2B" }}>
        <h1 style={{ fontSize: 56, fontWeight: "bold", color: "white", fontFamily: "'Glacial Indifference', sans-serif" }}>Privacy Policy</h1>
      </section>

      <div style={{ position: "relative", width: "100%", height: 10, backgroundColor: "white" }}>
        <div style={{ position: "absolute", top: -50, left: 0, width: "100%", height: 100, backgroundColor: "#0B0A2B", borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }} />
      </div>

      <br /><br /><br /><br /><br />

      <div style={{ backgroundColor: "white", display: "flex", justifyContent: "center" }}>
        <section style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 18, lineHeight: 1.6, color: "#333", backgroundColor: "white", padding: "0 20px", maxWidth: 1250 }}>
          <h1 style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 24, marginBottom: 15 }}>1. Introduction</h1>
          <p>Future Forward ("Company" or "We") respects your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website www.ffcareers.co (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
          <p>Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy.</p>

          <h2 style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 24, marginBottom: 15 }}>2. Children Under the Age of 13</h2>
          <p>Our Website is not intended for children under 13 years of age. No one under age 13 may provide any information to or on the Website. We do not knowingly collect personal information from children under 13. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. Contact us at <a href="mailto:contact@futureforward.info" style={{ color: "#9b2429" }}>contact@futureforward.info</a>.<br /><br />California residents under 16 years of age may have additional rights regarding the collection and sale of their personal information.</p>

          <h2 style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 24, marginBottom: 15 }}>3. Information We Collect About You and How We Collect It</h2>
          <p>We collect several types of information from and about users of our Website, including information:<br /><br />
            • By which you may be personally identified, such as name, postal address, e-mail address, telephone number ("personal information");<br />
            • That is about you but individually does not identify you; and/or<br />
            • About your internet connection, the equipment you use to access our Website, and usage details.<br /><br />
            We collect this information:<br /><br />
            • Directly from you when you provide it to us.<br />
            • Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.<br />
            • From third parties, for example, our business partners.<br /><br />
            <strong>Information You Provide to Us</strong><br /><br />
            The information we collect on or through our Website may include:<br /><br />
            • Information that you provide by filling in forms on our Website.<br />
            • Records and copies of your correspondence (including email addresses), if you contact us.<br />
            • Details of transactions you carry out through our Website.<br />
            • Your search queries on the Website.<br /><br />
            <strong>Information We Collect Through Automatic Data Collection Technologies</strong><br /><br />
            As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:<br /><br />
            • Details of your visits to our Website, including traffic data, location data, logs, and other communication data.<br />
            • Information about your computer and internet connection, including your IP address, operating system, and browser type.<br /><br />
            The technologies we use for this automatic data collection may include:<br /><br />
            • <strong>Cookies (or browser cookies):</strong> A cookie is a small file placed on the hard drive of your computer.<br /><br />
            • <strong>Flash Cookies:</strong> Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences.<br /><br />
            • <strong>Web Beacons:</strong> Pages of our Website and our e-mails may contain small electronic files known as web beacons that permit the Company to count users who have visited those pages or opened an email.
          </p>

          <h2 style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 24, marginBottom: 15 }}>4. Third-Party Use of Cookies and Other Tracking Technologies</h2>
          <p>The App may employ cookies, device identifiers, web beacons, and other tracking technologies to enhance user experience and optimize the functionality of AI-assisted features. In connection therewith, the App may collect and transmit certain user-provided or behaviorally-inferred data to third-party artificial intelligence systems ("AI Providers") for the purposes of content generation, personalization, and service improvement.<br /><br />By using the App, you acknowledge and consent to the disclosure of such data to AI Providers, who may process, store, or otherwise use said data in accordance with their own terms and privacy policies, over which the App Owner exercises no control.<br /><br />The App Owner disclaims all responsibility for the acts or omissions of such third parties, including any further use or dissemination of your personal data.</p>

          <h2 style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 24, marginBottom: 15 }}>5. How We Use Your Information</h2>
          <p>We use information that we collect about you or that you provide to us, including any personal information:<br /><br />
            • To present our Website and its contents to you.<br />
            • To provide you with information, products, or services that you request from us.<br />
            • To fulfill any other purpose for which you provide it.<br />
            • To notify you about changes to our Website or any products or services we offer or provide through it.<br />
            • For any other purpose with your consent.
          </p>

          <h2 style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 24, marginBottom: 15 }}>6. Disclosure of Your Information</h2>
          <p>We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.<br /><br />We may disclose personal information that we collect or you provide as described in this privacy policy:<br /><br />
            • To our subsidiaries and affiliates.<br />
            • To contractors, service providers, and other third parties we use to support our business.<br />
            • To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Company's assets.<br />
            • To comply with any court order, law, or legal process, including to respond to any government or regulatory request.<br />
            • To enforce or apply our <a href="/terms" style={{ color: "#9b2429" }}>Terms of Use</a>.<br />
            • If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.
          </p>

          <h2 style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 24, marginBottom: 15 }}>7. Choices About How We Use and Disclose Your Information</h2>
          <p>We strive to provide you with choices regarding the personal information you provide to us.<br /><br />
            • <strong>Tracking Technologies and Advertising:</strong> You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent.<br />
            • If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly.
          </p>

          <h2 style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 24, marginBottom: 15 }}>8. Your California Privacy Rights</h2>
          <p>If you are a California resident, California law may provide you with additional rights regarding our use of your personal information.</p>

          <h2 style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 24, marginBottom: 15 }}>9. Changes to Our Privacy Policy</h2>
          <p>It is our policy to post any changes we make to our privacy policy on this page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.</p>

          <h2 style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: 24, marginBottom: 15 }}>10. Contact Information</h2>
          <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at: <br /><br /><a href="mailto:contact@futureforward.info" style={{ color: "#9b2429" }}>contact@futureforward.info</a>.</p>
        </section>
      </div>

      <Footer />
    </>
  )
}
