

const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-background rounded-lg shadow-lg mt-14">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        Frequently Asked Questions
      </h2>
      <div className="collapse collapse-arrow bg-accent text-background">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is the purpose of this navigator?
        </div>
        <div className="collapse-content">
          <p>
            This navigator provides information and guidance for users. It is
            not an official application for any visa or immigration benefit.
          </p>
        </div>
      </div>
      {/* FAQ 1 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is the purpose of this navigator?
        </div>
        <div className="collapse-content">
          <p>
            This navigator provides information and guidance for users. It is
            not an official application for any visa or immigration benefit.
          </p>
        </div>
      </div>

      {/* FAQ 2 */}
      <div className="collapse collapse-arrow bg-base-200 mt-4">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Is my information collected or stored?
        </div>
        <div className="collapse-content">
          <p>
            No, this navigator does not collect or store any personally
            identifiable information, including your IP address.
          </p>
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="collapse collapse-arrow bg-base-200 mt-4">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Does completing the navigator guarantee a visa?
        </div>
        <div className="collapse-content">
          <p>
            No, completing the navigator does not guarantee a visa or any
            immigration benefit. Additional documents or information may be
            required by the embassy or consulate.
          </p>
        </div>
      </div>

      {/* FAQ 4 */}
      <div className="collapse collapse-arrow bg-base-200 mt-4">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          What are the accessibility features of this navigator?
        </div>
        <div className="collapse-content">
          <p>
            The navigator addresses issues like repeated page titles for screen
            readers, improved color contrast for buttons, and adjustments for
            spaces announced by screen readers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
