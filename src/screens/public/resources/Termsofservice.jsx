import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export default function TermsService() {
        useEffect(() => {
            const handleSmoothScroll = (event) => {
              const targetId = event.target.getAttribute("href");
              if (targetId.startsWith("#")) {
                event.preventDefault();
                const targetElement = document.querySelector(targetId);
        
                if (targetElement) {
                  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 120; // Offset -20px
        
                  window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                  });
                }
              }
            };
        
            // Attach event listener to all anchor tags with #
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach((link) => link.addEventListener("click", handleSmoothScroll));
        
            return () => {
              // Cleanup event listeners
              links.forEach((link) => link.removeEventListener("click", handleSmoothScroll));
            };
          }, []);
  return (
    
    <React.Fragment>
      <Row>
        {/* <Col lg={12} xl="auto" className="w-calc-100-258"> */}
        <Col lg={12} xl={12}>
          <div className="resources-body">
            <div className="resources-heading mb-4">
              <h1>Terms of Service</h1>
              <small><b>Last updated January 24, 2025</b>
              </small>
            </div>

            <div className="resources-content mb-2">
              <h2>AGREEMENT TO OUR LEGAL TERMS</h2>
              <p>
                We are Van Welder LLC, doing business as Laser Bros ("
                <strong>Company</strong>," "<strong>we</strong>," "
                <strong>us</strong>," "<strong>our</strong>"), a
                company registered in North Carolina, United States at 219 Ward
                St, Graham<span>, NC 27253</span>.
              </p>
              <p>
                We operate the website 
                <a href="https://staging.laserbros.com/">
                  https://staging.laserbros.com
                </a>
                 (the "<strong>Site</strong>"), as well as any other related
                products and services that refer or link to these legal terms
                (the "<strong>Legal Terms</strong>") (collectively, the "
                <strong>Services</strong>").
              </p>
              <p>
                We provide an easy to use platform for user to upload their
                parts in order to receive a quote. The files you upload are DXF
                (flat, 2D designs). Our platform parses the DXF data in order to
                accurately price out your parts. The price you receive is based
                on the design of the part(s), the material you select, plus the
                quantity and any additional services. All price are subject to
                change based on current material pricing, or changes in rates.
              </p>
              <p>
                You can contact us by phone at (+1)919-495-2902, email at 
                <a href="mailto:info@LaserBros.com">info@LaserBros.com</a>, or
                by mail to 909 E Elm St., Suite 102, Graham, NC 27253, United
                States.
              </p>
              <p>
                These Legal Terms constitute a legally binding agreement made
                between you, whether personally or on behalf of an entity ("
                <strong>you</strong>"), and Van Welder LLC, concerning your
                access to and use of the Services. You agree that by accessing
                the Services, you have read, understood, and agreed to be bound
                by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF
                THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING
                THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
              <p>
                Supplemental terms and conditions or documents that may be
                posted on the Services from time to time are hereby expressly
                incorporated herein by reference. We reserve the right, in our
                sole discretion, to make changes or modifications to these Legal
                Terms at any time and for any reason. We will alert you about
                any changes by updating the "Last updated" date of these Legal
                Terms, and you waive any right to receive specific notice of
                each such change. It is your responsibility to periodically
                review these Legal Terms to stay informed of updates. You will
                be subject to, and will be deemed to have been made aware of and
                to have accepted, the changes in any revised Legal Terms by your
                continued use of the Services after the date such revised Legal
                Terms are posted.
              </p>
              <p>
                The Services are intended for users who are at least 18 years
                old. Persons under the age of 18 are not permitted to use or
                register for the Services.
              </p>
              <p>
                We recommend that you print a copy of these Legal Terms for your
                records.
              </p>
              <h2>TABLE OF CONTENTS</h2>
              <ol>
                <li>
                  <a href="#services">
                     OUR SERVICES
                  </a>
                </li>
                <li>
                  <a href="#ip">
                     INTELLECTUAL PROPERTY RIGHTS
                  </a>
                </li>
                <li>
                  <a href="#userreps">
                     USER REPRESENTATIONS
                  </a>
                </li>
                <li>
                  <a href="#userreg">
                     USER REGISTRATION
                  </a>
                </li>
                <li>
                  <a href="#purchases">
                     PURCHASES AND PAYMENT
                  </a>
                </li>
                <li>
                  <a href="#returnno">
                    POLICY
                  </a>
                </li>
                <li>
                  <a href="#prohibited">
                     PROHIBITED ACTIVITIES
                  </a>
                </li>
                <li>
                  <a href="#ugc">
                     USER GENERATED CONTRIBUTIONS
                  </a>
                </li>
                <li>
                  <a href="#license">
                     CONTRIBUTIONLICENSE
                  </a>
                </li>
                <li>
                  <a href="#thirdparty">
                     THIRD-PARTY WEBSITES AND CONTENT
                  </a>
                </li>
                <li>
                  <a href="#sitemanage">
                     SERVICES MANAGEMENT
                  </a>
                </li>
                <li>
                  <a href="#ppyes">
                     PRIVACY POLICY
                  </a>
                </li>
                <li>
                  <a href="#copyrightyes">
                     COPYRIGHT INFRINGEMENTS
                  </a>
                </li>
                <li>
                  <a href="#terms">
                     TERM AND TERMINATION
                  </a>
                </li>
                <li>
                  <a href="#modifications">
                     MODIFICATIONS AND INTERRUPTIONS
                  </a>
                </li>
                <li>
                  <a href="#law">
                     GOVERNING LAW
                  </a>
                </li>
                <li>
                  <a href="#disputes">
                     DISPUTE RESOLUTION
                  </a>
                </li>
                <li>
                  <a href="#corrections">
                     CORRECTIONS
                  </a>
                </li>
                <li>
                  <a href="#disclaimer">
                     DISCLAIMER
                  </a>
                </li>
                <li>
                  <a href="#liability">
                     LIMITATIONS OF LIABILITY
                  </a>
                </li>
                <li>
                  <a href="#indemnification">
                     INDEMNIFICATION
                  </a>
                </li>
                <li>
                  <a href="#userdata">
                     USER DATA
                  </a>
                </li>
                <li>
                  <a href="#electronic">
                    
                      {" "}
                      ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                    
                  </a>
                </li>
                <li>
                  <a href="#california">
                     CALIFORNIA USERS AND RESIDENTS
                  </a>
                </li>
                <li>
                  <a href="#misc">
                     MISCELLANEOUS
                  </a>
                </li>
                <li>
                  <a href="#contact">
                   CONTACT US
                  </a>
                </li>
              </ol>
              <h5 className="mb-2" id="services">
                1. OUR SERVICES
              </h5>
              <p>
                The information provided when using the Services is not intended
                for distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
                Accordingly, those persons who choose to access the Services
                from other locations do so on their own initiative and are
                solely responsible for compliance with local laws, if and to the
                extent local laws are applicable.
              </p>
              <p>
                The Services are not tailored to comply with industry-specific
                regulations (Health Insurance Portability and Accountability Act
                (HIPAA), Federal Information Security Management Act (FISMA),
                etc.), so if your interactions would be subjected to such laws,
                you may not use the Services. You may not use the Services in a
                way that would violate the Gramm-Leach-Bliley Act (GLBA).
              </p>
              <h5 className="mb-2" id="ip">
                2. INTELLECTUAL PROPERTY RIGHTS
              </h5>
              <h6>Our intellectual property</h6>
              <p>
                We are the owner or the licensee of all intellectual property
                rights in our Services, including all source code, databases,
                functionality, software, website designs, audio, video, text,
                photographs, and graphics in the Services (collectively,
                the "Content"), as well as the trademarks, service marks, and
                logos contained therein (the "Marks").
              </p>
              <p>
                Our Content and Marks are protected by copyright and trademark
                laws (and various other intellectual property rights and unfair
                competition laws) and treaties in the United States and around
                the world.
              </p>
              <p>
                The Content and Marks are provided in or through the
                Services "AS IS" for your personal, non-commercial use or
                internal business purpose only.
              </p>
              <h6>Your use of our Services</h6>
              <p>
                Subject to your compliance with these Legal Terms, including
                the "<a href="#prohibited">PROHIBITED ACTIVITIES</a>" section
                below, we grant you a non-exclusive, non-transferable,
                revocable license to:
              </p>
              <ul className="table-less-format">
                <li>access the Services; and</li>
                <li>
                  download or print a copy of any portion of the Content to
                  which you have properly gained access,
                </li>
              </ul>
              <p>
                solely for your personal, non-commercial use or internal
                business purpose.
              </p>
              <p>
                Except as set out in this section or elsewhere in our Legal
                Terms, no part of the Services and no Content or Marks may be
                copied, reproduced, aggregated, republished, uploaded, posted,
                publicly displayed, encoded, translated, transmitted,
                distributed, sold, licensed, or otherwise exploited for any
                commercial purpose whatsoever, without our express prior written
                permission.
              </p>
              <p>
                If you wish to make any use of the Services, Content, or Marks
                other than as set out in this section or elsewhere in our Legal
                Terms, please address your request to: 
                <a href="mailto:info@LaserBros.com">info@LaserBros.com</a>. If
                we ever grant you the permission to post, reproduce, or publicly
                display any part of our Services or Content, you must identify
                us as the owners or licensors of the Services, Content, or Marks
                and ensure that any copyright or proprietary notice appears or
                is visible on posting, reproducing, or displaying our Content.
              </p>
              <p>
                We reserve all rights not expressly granted to you in and to the
                Services, Content, and Marks.
              </p>
              <p>
                Any breach of these Intellectual Property Rights will constitute
                a material breach of our Legal Terms and your right to use our
                Services will terminate immediately.
              </p>
              <h6>
                <strong>Your submissions</strong>
              </h6>
              <p>
                Please review this section and the "
                <a href="#prohibited">PROHIBITED ACTIVITIES</a>" section
                carefully prior to using our Services to understand the (a)
                rights you give us and (b) obligations you have when you post or
                upload any content through the Services.
              </p>
              <p>
                <strong>Submissions:</strong> By directly sending us any
                question, comment, suggestion, idea, feedback, or other
                information about the Services ("Submissions"), you agree to
                assign to us all intellectual property rights in such
                Submission. You agree that we shall own this Submission and be
                entitled to its unrestricted use and dissemination for any
                lawful purpose, commercial or otherwise, without acknowledgment
                or compensation to you.
              </p>
              <p>
                <strong>
                  You are responsible for what you post or upload:
                </strong>
                 By sending us Submissions through any part of the Services you:
              </p>
              <ul className="table-less-format">
                <li>
                  confirm that you have read and agree with our "
                  <a href="#prohibited">PROHIBITED ACTIVITIES</a>" and will not
                  post, send, publish, upload, or transmit through the Services
                  any Submission that is illegal, harassing, hateful, harmful,
                  defamatory, obscene, bullying, abusive, discriminatory,
                  threatening to any person or group, sexually explicit, false,
                  inaccurate, deceitful, or misleading;
                </li>
                <li>
                  to the extent permissible by applicable law, waive any and all
                  moral rights to any such Submission;
                </li>
                <li>
                  warrant that any such Submission are original to you or that
                  you have the necessary rights and licenses to submit such
                  Submissions and that you have full authority to grant us the
                  above-mentioned rights in relation to your Submissions; and
                </li>
                <li>
                  warrant and represent that your Submissions do not constitute
                  confidential information.
                </li>
              </ul>
              <p>
                You are solely responsible for your Submissions and you
                expressly agree to reimburse us for any and all losses that we
                may suffer because of your breach of (a) this section, (b) any
                third party’s intellectual property rights, or (c) applicable
                law.
              </p>
              <h6>Copyright infringement</h6>
              <p>
                We respect the intellectual property rights of others. If you
                believe that any material available on or through the Services
                infringes upon any copyright you own or control, please
                immediately refer to the "
                <a href="#copyrightyes">COPYRIGHT INFRINGEMENTS</a>" section
                below.
              </p>
              <p></p>
              <h5 className="mb-2" id="userreps">3. USER REPRESENTATIONS</h5>
              <p>
                By using the Services, you represent and warrant that: (1) all
                registration information you submit will be true, accurate,
                current, and complete; (2) you will maintain the accuracy of
                such information and promptly update such registration
                information as necessary; (3) you have the legal capacity and
                you agree to comply with these Legal Terms; (4) you are not a
                minor in the jurisdiction in which you reside; (5) you will not
                access the Services through automated or non-human means,
                whether through a bot, script or otherwise; (6) you will not use
                the Services for any illegal or unauthorized purpose; and (7)
                your use of the Services will not violate any applicable law or
                regulation.
              </p>
              <p>
                If you provide any information that is untrue, inaccurate, not
                current, or incomplete, we have the right to suspend or
                terminate your account and refuse any and all current or future
                use of the Services (or any portion thereof).
              </p>
              <h5 className="mb-2" id="userreg">4. USER REGISTRATION</h5>
              <p>
                You may be required to register to use the Services. You agree
                to keep your password confidential and will be responsible for
                all use of your account and password. We reserve the right to
                remove, reclaim, or change a username you select if we
                determine, in our sole discretion, that such username is
                inappropriate, obscene, or otherwise objectionable.
              </p>
              <p></p>
              <h5 className="mb-2" id="purchases">5. PURCHASES AND PAYMENT</h5>
              <p>We accept the following forms of payment:</p>
              <ul className="table-less-format">
                <li>  Visa</li>
                <li>  Mastercard</li>
                <li>  American Express</li>
                <li>  Discover</li>
                <li>  Purchase Order</li>
              </ul>
              <p>
                You agree to provide current, complete, and accurate purchase
                and account information for all purchases made via the Services.
                You further agree to promptly update account and payment
                information, including email address, payment method, and
                payment card expiration date, so that we can complete your
                transactions and contact you as needed. Sales tax will be added
                to the price of purchases as deemed required by us. We may
                change prices at any time. All payments shall be in US dollars.
              </p>
              <p>
                You agree to pay all charges at the prices then in effect for
                your purchases and any applicable shipping fees, and
                you authorize us to charge your chosen payment provider for any
                such amounts upon placing your order. We reserve the right to
                correct any errors or mistakes in pricing, even if we have
                already requested or received payment.
              </p>
              <p>
                We reserve the right to refuse any order placed through the
                Services. We may, in our sole discretion, limit or cancel
                quantities purchased per person, per household, or per order.
                These restrictions may include orders placed by or under the
                same customer account, the same payment method, and/or orders
                that use the same billing or shipping address. We reserve the
                right to limit or prohibit orders that, in our sole judgment,
                appear to be placed by dealers, resellers, or distributors.
              </p>
              <h5 className="mb-2" id="returnno">6. POLICY</h5>
              <p>All sales are final and no refund will be issued.</p>
              <h5 className="mb-2" id="prohibited">7. PROHIBITED ACTIVITIES</h5>
              <p>
                You may not access or use the Services for any purpose other
                than that for which we make the Services available. The Services
                may not be used in connection with any
                commercial endeavors except those that are specifically endorsed
                or approved by us.
              </p>
              <p>As a user of the Services, you agree not to:</p>
              <ul className="table-less-format">
                <li>
                  <span>
                    Systematically retrieve data or other content from the
                    Services to create or compile, directly or indirectly, a
                    collection, compilation, database, or directory without
                    written permission from us.
                  </span>
                </li>
                <li>
                  <span>
                    Trick, defraud, or mislead us and other users, especially in
                    any attempt to learn sensitive account information such as
                    user passwords.
                  </span>
                </li>
                <li>
                  <span>
                    Circumvent, disable, or otherwise interfere with
                    security-related features of the Services, including
                    features that prevent or restrict the use or copying of any
                    Content or enforce limitations on the use of the Services
                    and/or the Content contained therein.
                  </span>
                </li>
                <li>
                  <span>
                    Disparage, tarnish, or otherwise harm, in our opinion, us
                    and/or the Services.
                  </span>
                </li>
                <li>
                  <span>
                    Use any information obtained from the Services in order to
                    harass, abuse, or harm another person.
                  </span>
                </li>
                <li>
                  <span>
                    Make improper use of our support services or submit false
                    reports of abuse or misconduct.
                  </span>
                </li>
                <li>
                  <span>
                    Use the Services in a manner inconsistent with any
                    applicable laws or regulations.
                  </span>
                </li>
                <li>
                  <span>
                    Engage in unauthorized framing of or linking to the
                    Services.
                  </span>
                </li>
                <li>
                  <span>
                    Upload or transmit (or attempt to upload or to transmit)
                    viruses, Trojan horses, or other material, including
                    excessive use of capital letters and spamming (continuous
                    posting of repetitive text), that interferes with any
                    party’s uninterrupted use and enjoyment of the Services or
                    modifies, impairs, disrupts, alters, or interferes with the
                    use, features, functions, operation, or maintenance of the
                    Services.
                  </span>
                </li>
                <li>
                  <span>
                    Engage in any automated use of the system, such as using
                    scripts to send comments or messages, or using any data
                    mining, robots, or similar data gathering and extraction
                    tools.
                  </span>
                </li>
                <li>
                  <span>
                    Delete the copyright or other proprietary rights notice from
                    any Content.
                  </span>
                </li>
                <li>
                  <span>
                    Attempt to impersonate another user or person or use the
                    username of another user.
                  </span>
                </li>
                <li>
                  <span>
                    Upload or transmit (or attempt to upload or to transmit) any
                    material that acts as a passive or active information
                    collection or transmission mechanism, including without
                    limitation, clear graphics interchange formats ("gifs"), 1×1
                    pixels, web bugs, cookies, or other similar devices
                    (sometimes referred to as "spyware" or "passive collection
                    mechanisms" or "pcms").
                  </span>
                </li>
                <li>
                  <span>
                    Interfere with, disrupt, or create an undue burden on the
                    Services or the networks or services connected to the
                    Services.
                  </span>
                </li>
                <li>
                  <span>
                    Harass, annoy, intimidate, or threaten any of our employees
                    or agents engaged in providing any portion of the Services
                    to you.
                  </span>
                </li>
                <li>
                  <span>
                    Attempt to bypass any measures of the Services designed to
                    prevent or restrict access to the Services, or any portion
                    of the Services.
                  </span>
                </li>
                <li>
                  <span>
                    Copy or adapt the Services' software, including but not
                    limited to Flash, PHP, HTML, JavaScript, or other code.
                  </span>
                </li>
                <li>
                  <span>
                    Except as permitted by applicable law, decipher, decompile,
                    disassemble, or reverse engineer any of the software
                    comprising or in any way making up a part of the Services.
                  </span>
                </li>
                <li>
                  <span>
                    Except as may be the result of standard search engine or
                    Internet browser usage, use, launch, develop, or distribute
                    any automated system, including without limitation, any
                    spider, robot, cheat utility, scraper, or offline reader
                    that accesses the Services, or use or launch
                    any unauthorized script or other software.
                  </span>
                </li>
                <li>
                  <span>
                    Use a buying agent or purchasing agent to make purchases on
                    the Services.
                  </span>
                </li>
                <li>
                  <span>
                    Make any unauthorized use of the Services, including
                    collecting usernames and/or email addresses of users by
                    electronic or other means for the purpose of sending
                    unsolicited email, or creating user accounts by automated
                    means or under false pretenses.
                  </span>
                </li>
                <li>
                  <span>
                    Use the Services as part of any effort to compete with us or
                    otherwise use the Services and/or the Content for any
                    revenue-generating endeavor or commercial enterprise.
                  </span>
                </li>
                <li>
                  Use the Services to advertise or offer to sell goods and
                  services.
                </li>
                <li>Sell or otherwise transfer your profile.</li>
              </ul>
              <h5 className="mb-2" id="ugc">8. USER GENERATED CONTRIBUTIONS</h5>
              <p>
                The Services does not offer users to submit or post content. We
                may provide you with the opportunity to create, submit, post,
                display, transmit, perform, publish, distribute, or broadcast
                content and materials to us or on the Services, including but
                not limited to text, writings, video, audio, photographs,
                graphics, comments, suggestions, or personal information or
                other material (collectively, "Contributions"). Contributions
                may be viewable by other users of the Services and through
                third-party websites. As such, any Contributions you transmit
                may be treated in accordance with the Services' Privacy
                Policy. When you create or make available any Contributions, you
                thereby represent and warrant that:
              </p>
              <ul className="table-less-format">
                <li>
                  <span>
                    The creation, distribution, transmission, public display, or
                    performance, and the accessing, downloading, or copying of
                    your Contributions do not and will not infringe the
                    proprietary rights, including but not limited to the
                    copyright, patent, trademark, trade secret, or moral rights
                    of any third party.
                  </span>
                </li>
                <li>
                  <span>
                    You are the creator and owner of or have the
                    necessary licenses, rights, consents, releases, and
                    permissions to use and to authorize us, the Services, and
                    other users of the Services to use your Contributions in any
                    manner contemplated by the Services and these Legal Terms.
                  </span>
                </li>
                <li>
                  <span>
                    You have the written consent, release, and/or permission of
                    each and every identifiable individual person in your
                    Contributions to use the name or likeness of each and every
                    such identifiable individual person to enable inclusion and
                    use of your Contributions in any manner contemplated by the
                    Services and these Legal Terms.
                  </span>
                </li>
                <li>
                  <span>
                    Your Contributions are not false, inaccurate, or misleading.
                  </span>
                </li>
                <li>
                  <span>
                    Your Contributions are not unsolicited
                    or unauthorized advertising, promotional materials, pyramid
                    schemes, chain letters, spam, mass mailings, or other forms
                    of solicitation.
                  </span>
                </li>
                <li>
                  <span>
                    Your Contributions are not obscene, lewd, lascivious,
                    filthy, violent, harassing, libelous, slanderous, or
                    otherwise objectionable (as determined by us).
                  </span>
                </li>
                <li>
                  <span>
                    Your Contributions do not ridicule, mock, disparage,
                    intimidate, or abuse anyone.
                  </span>
                </li>
                <li>
                  <span>
                    Your Contributions are not used to harass or threaten (in
                    the legal sense of those terms) any other person and to
                    promote violence against a specific person or class of
                    people.
                  </span>
                </li>
                <li>
                  <span>
                    Your Contributions do not violate any applicable law,
                    regulation, or rule.
                  </span>
                </li>
                <li>
                  <span>
                    Your Contributions do not violate the privacy or publicity
                    rights of any third party.
                  </span>
                </li>
                <li>
                  <span>
                    Your Contributions do not violate any applicable law
                    concerning child pornography, or otherwise intended to
                    protect the health or well-being of minors.
                  </span>
                </li>
                <li>
                  <span>
                    Your Contributions do not include any offensive comments
                    that are connected to race, national origin, gender, sexual
                    preference, or physical handicap.
                  </span>
                </li>
                <li>
                  <span>
                    Your Contributions do not otherwise violate, or link to
                    material that violates, any provision of these Legal Terms,
                    or any applicable law or regulation.
                  </span>
                </li>
              </ul>
              <p>
                Any use of the Services in violation of the foregoing violates
                these Legal Terms and may result in, among other things,
                termination or suspension of your rights to use the Services.
              </p>
              <h5 className="mb-2" id="license">9. CONTRIBUTION LICENSE</h5>
              <p>
                You and Services agree that we may access, store, process, and
                use any information and personal data that you provide following
                the terms of the Privacy Policy and your choices (including
                settings).
              </p>
              <p>
                By submitting suggestions or other feedback regarding the
                Services, you agree that we can use and share such feedback for
                any purpose without compensation to you.
              </p>
              <p>
                We do not assert any ownership over your Contributions. You
                retain full ownership of all of your Contributions and any
                intellectual property rights or other proprietary rights
                associated with your Contributions. We are not liable for any
                statements or representations in your Contributions provided by
                you in any area on the Services. You are solely responsible for
                your Contributions to the Services and you expressly agree to
                exonerate us from any and all responsibility and to refrain from
                any legal action against us regarding your Contributions.
              </p>
              <h5 className="mb-2" id="thirdparty">10. THIRD-PARTY WEBSITES AND CONTENT</h5>
              <p>
                The Services may contain (or you may be sent via the Site) links
                to other websites ("Third-Party Websites") as well as articles,
                photographs, text, graphics, pictures, designs, music, sound,
                video, information, applications, software, and other content or
                items belonging to or originating from third parties
                ("Third-Party Content"). Such Third-Party Websites
                and Third-Party Content are not investigated, monitored, or
                checked for accuracy, appropriateness, or completeness by us,
                and we are not responsible for any Third-Party Websites accessed
                through the Services or any Third-Party Content posted on,
                available through, or installed from the Services, including the
                content, accuracy, offensiveness, opinions, reliability, privacy
                practices, or other policies of or contained in
                the Third-Party Websites or the Third-Party Content. Inclusion
                of, linking to, or permitting the use or installation of
                any Third-Party Websites or any Third-Party Content does not
                imply approval or endorsement thereof by us. If you decide to
                leave the Services and access the Third-Party Websites or to use
                or install any Third-Party Content, you do so at your own risk,
                and you should be aware these Legal Terms no longer govern. You
                should review the applicable terms and policies, including
                privacy and data gathering practices, of any website to which
                you navigate from the Services or relating to any applications
                you use or install from the Services. Any purchases you make
                through Third-Party Websites will be through other websites and
                from other companies, and we take no responsibility whatsoever
                in relation to such purchases which are exclusively between you
                and the applicable third party. You agree and acknowledge that
                we do not endorse the products or services offered
                on Third-Party Websites and you shall hold us blameless from any
                harm caused by your purchase of such products or services.
                Additionally, you shall hold us blameless from any losses
                sustained by you or harm caused to you relating to or resulting
                in any way from any Third-Party Content or any contact
                with Third-Party Websites.
              </p>
              <h5 className="mb-2" id="sitemanage">11. SERVICES MANAGEMENT</h5>
              <p>
                We reserve the right, but not the obligation, to: (1) monitor
                the Services for violations of these Legal Terms; (2) take
                appropriate legal action against anyone who, in our sole
                discretion, violates the law or these Legal Terms, including
                without limitation, reporting such user to law enforcement
                authorities; (3) in our sole discretion and without limitation,
                refuse, restrict access to, limit the availability of, or
                disable (to the extent technologically feasible) any of your
                Contributions or any portion thereof; (4) in our sole discretion
                and without limitation, notice, or liability, to remove from the
                Services or otherwise disable all files and content that are
                excessive in size or are in any way burdensome to our systems;
                and (5) otherwise manage the Services in a manner designed to
                protect our rights and property and to facilitate the proper
                functioning of the Services.
              </p>
              <h5 className="mb-2" id="ppyes">12. PRIVACY POLICY</h5>
              <p>
                We care about data privacy and security. Please review our
                Privacy Policy:
                <strong>
                   
                  <a href="https://staging.laserbros.com/laser-bros/resources/privacy-policy">
                    https://staging.laserbros.com/laser-bros/resources/privacy-policy
                  </a>
                </strong>
                . By using the Services, you agree to be bound by our Privacy
                Policy, which is incorporated into these Legal Terms. Please be
                advised the Services are hosted in the United States. If you
                access the Services from any other region of the world with laws
                or other requirements governing personal data collection, use,
                or disclosure that differ from applicable laws in the United
                States, then through your continued use of the Services, you are
                transferring your data to the United States, and you expressly
                consent to have your data transferred to and processed
                in the United States.
              </p>
              <h5 className="mb-2" id="copyrightyes">13. COPYRIGHT INFRINGEMENTS</h5>
              <p>
                We respect the intellectual property rights of others. If you
                believe that any material available on or through the Services
                infringes upon any copyright you own or control, please
                immediately notify us using the contact information provided
                below (a "Notification"). A copy of your Notification will be
                sent to the person who posted or stored the material addressed
                in the Notification. Please be advised that pursuant to
                applicable law you may be held liable for damages if you make
                material misrepresentations in a Notification. Thus, if you are
                not sure that material located on or linked to by the Services
                infringes your copyright, you should consider first contacting
                an attorney.
              </p>
              <h5 className="mb-2" id="terms">14. TERM AND TERMINATION</h5>
              <p>
                These Legal Terms shall remain in full force and effect while
                you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF
                THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE
                DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES),
                TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT
                LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
                COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW
                OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE
                SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION
                THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
                DISCRETION.
              </p>
              <p>
                If we terminate or suspend your account for any reason, you are
                prohibited from registering and creating a new account under
                your name, a fake or borrowed name, or the name of any third
                party, even if you may be acting on behalf of the third party.
                In addition to terminating or suspending your account, we
                reserve the right to take appropriate legal action, including
                without limitation pursuing civil, criminal, and injunctive
                redress.
              </p>
              <h5 className="mb-2" id="modifications">15. MODIFICATIONS AND INTERRUPTIONS</h5>
              <p>
                We reserve the right to change, modify, or remove the contents
                of the Services at any time or for any reason at our sole
                discretion without notice. However, we have no obligation to
                update any information on our Services. We also reserve the
                right to modify or discontinue all or part of the Services
                without notice at any time. We will not be liable to you or any
                third party for any modification, price change, suspension, or
                discontinuance of the Services.
              </p>
              <p>
                We cannot guarantee the Services will be available at all times.
                We may experience hardware, software, or other problems or need
                to perform maintenance related to the Services, resulting in
                interruptions, delays, or errors. We reserve the right to
                change, revise, update, suspend, discontinue, or otherwise
                modify the Services at any time or for any reason without notice
                to you. You agree that we have no liability whatsoever for any
                loss, damage, or inconvenience caused by your inability to
                access or use the Services during any downtime or discontinuance
                of the Services. Nothing in these Legal Terms will be construed
                to obligate us to maintain and support the Services or to supply
                any corrections, updates, or releases in connection therewith.
              </p>
              <h5 className="mb-2" id="law">16. GOVERNING LAW</h5>
              <p>
                These Legal Terms and your use of the Services are governed by
                and construed in accordance with the laws of the State of North
                Carolina applicable to agreements made and to be entirely
                performed within the State of North Carolina, without regard to
                its conflict of law principles.
              </p>
              <h5 className="mb-2" id="disputes">17. DISPUTE RESOLUTION</h5>
              <p>
                Any legal action of whatever nature brought by either you or us
                (collectively, the "Parties" and individually, a "Party") shall
                be commenced or prosecuted in the state and federal
                courts located in Alamance , North Carolina, and the Parties
                hereby consent to, and waive all defenses of lack of personal
                jurisdiction and forum non conveniens with respect to venue and
                jurisdiction in such state and federal courts. Application of
                the United Nations Convention on Contracts for the International
                Sale of Goods and the Uniform Computer Information Transaction
                Act (UCITA) are excluded from these Legal Terms. In no event
                shall any claim, action, or proceeding brought by either Party
                related in any way to the Services be commenced more than one
                (1) years after the cause of action arose.
              </p>
              <h5 className="mb-2" id="corrections">18. CORRECTIONS</h5>
              <p>
                There may be information on the Services that contains
                typographical errors, inaccuracies, or omissions, including
                descriptions, pricing, availability, and various other
                information. We reserve the right to correct any errors,
                inaccuracies, or omissions and to change or update the
                information on the Services at any time, without prior notice.
              </p>
              <h5 className="mb-2" id="disclaimer">19. DISCLAIMER</h5>
              <p>
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS.
                YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE
                RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES
                AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
                ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR
                THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
                SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR
                ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND
                MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
                WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
                SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
                SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
                INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
                TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES,
                TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
                THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS
                OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR
                DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
                CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
                SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED
                BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE,
                OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR
                OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY
                BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
                ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
                PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
                ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
                CAUTION WHERE APPROPRIATE.
              </p>
              <h5 className="mb-2" id="liability">20. LIMITATIONS OF LIABILITY</h5>
              <p>
                <span>
                  IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                  LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                  CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                  DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                  OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF
                  WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </span>
                 
                <span>
                  NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
                  LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF
                  THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE
                  AMOUNT PAID, IF ANY, BY YOU TO US DURING THE six (6) mONTH
                  PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
                </span>
                 
                <span>
                  CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW
                  LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR
                  LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU,
                  SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT
                  APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                </span>
              </p>
              <h5 className="mb-2" id="indemnification">21. INDEMNIFICATION</h5>
              <p>
                You agree to defend, indemnify, and hold us harmless, including
                our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any
                loss, damage, liability, claim, or demand, including reasonable
                attorneys’ fees and expenses, made by any third party due to or
                arising out of: (1) use of the Services; (2) breach of these
                Legal Terms; (3) any breach of your representations and
                warranties set forth in these Legal Terms; (4) your violation of
                the rights of a third party, including but not limited to
                intellectual property rights; or (5) any overt harmful act
                toward any other user of the Services with whom you connected
                via the Services. Notwithstanding the foregoing, we reserve the
                right, at your expense, to assume the exclusive defense and
                control of any matter for which you are required to indemnify
                us, and you agree to cooperate, at your expense, with
                our defense of such claims. We will use reasonable efforts to
                notify you of any such claim, action, or proceeding which is
                subject to this indemnification upon becoming aware of it.
              </p>
              <h5 className="mb-2" id="userdata">22. USER DATA</h5>
              <p>
                We will maintain certain data that you transmit to the Services
                for the purpose of managing the performance of the Services, as
                well as data relating to your use of the Services. Although we
                perform regular routine backups of data, you are solely
                responsible for all data that you transmit or that relates to
                any activity you have undertaken using the Services. You agree
                that we shall have no liability to you for any loss or
                corruption of any such data, and you hereby waive any right of
                action against us arising from any such loss or corruption of
                such data.
              </p>
              <h5 className="mb-2" id="electronic">
                23. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
              </h5>
              <p>
                Visiting the Services, sending us emails, and completing online
                forms constitute electronic communications. You consent to
                receive electronic communications, and you agree that all
                agreements, notices, disclosures, and other communications we
                provide to you electronically, via email and on the Services,
                satisfy any legal requirement that such communication be in
                writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY
                OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
                COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights
                or requirements under any statutes, regulations, rules,
                ordinances, or other laws in any jurisdiction which require an
                original signature or delivery or retention of non-electronic
                records, or to payments or the granting of credits by any means
                other than electronic means.
              </p>
              <h5 className="mb-2" id="california">24. CALIFORNIA USERS AND RESIDENTS</h5>
              <p>
                If any complaint with us is not satisfactorily resolved, you can
                contact the Complaint Assistance Unit of the Division of
                Consumer Services of the California Department of Consumer
                Affairs in writing at 1625 North Market Blvd., Suite N 112,
                Sacramento, California 95834 or by telephone at (800) 952-5210
                or (916) 445-1254.
              </p>
              <h5 className="mb-2" id="misc">25. MISCELLANEOUS</h5>
              <p>
                These Legal Terms and any policies or operating rules posted by
                us on the Services or in respect to the Services constitute the
                entire agreement and understanding between you and us. Our
                failure to exercise or enforce any right or provision of these
                Legal Terms shall not operate as a waiver of such right or
                provision. These Legal Terms operate to the fullest extent
                permissible by law. We may assign any or all of our rights and
                obligations to others at any time. We shall not be responsible
                or liable for any loss, damage, delay, or failure to act caused
                by any cause beyond our reasonable control. If any provision or
                part of a provision of these Legal Terms is determined to be
                unlawful, void, or unenforceable, that provision or part of the
                provision is deemed severable from these Legal Terms and does
                not affect the validity and enforceability of any remaining
                provisions. There is no joint venture, partnership, employment
                or agency relationship created between you and us as a result of
                these Legal Terms or use of the Services. You agree that these
                Legal Terms will not be construed against us by virtue of having
                drafted them. You hereby waive any and all defenses you may have
                based on the electronic form of these Legal Terms and the lack
                of signing by the parties hereto to execute these Legal Terms.
              </p>
              <h5 className="mb-2" id="contact">26. CONTACT US</h5>
              <p>
                In order to resolve a complaint regarding the Services or to
                receive further information regarding use of the Services,
                please contact us at:
              </p>
              <p>
                <strong>Van Welder LLC</strong>
                <br />
                <strong>909 E Elm St.</strong>
                <br />
                <strong>Suite 102</strong>
                <br />
                <strong>Graham, NC 27253</strong>
                <br />
                <strong>United States</strong>
                <br />
                <strong>Phone: (+1)919-495-2902</strong>
                <br />
                <strong>
                  <a href="mailto:info@LaserBros.com">info@LaserBros.com</a>
                </strong>
              </p>
            </div>
            <div className="resources-pagination d-flex align-items-center">
              <Link className="pagination-prev" to="/resources/refund-policy">
                <span>
                  <Icon icon="streamline:next" />
                </span>
                Refund Policy
              </Link>
            </div>
          </div>
        </Col>
        {/* <Col lg={12} xl="auto" className="d-none d-xl-block width-258">
                    <div className="resources-right">
                        <h2>Table of Contents</h2>
                        <a href="#payment1">Overview</a>
                        <a href="#payment2">Personal Information</a>
                        <a href="#payment3">Entire Agreement</a>
                        <a href="#payment4">Changes To Terms Of Service</a>
                        <a href="#payment5">Contact Information</a>
                    </div>
                </Col> */}
      </Row>
    </React.Fragment>
  );
}
