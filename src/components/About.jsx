
const About = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="bg-background  rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-primary mb-4">
          ABOUT THIS NAVIGATOR
        </h2>
        <p className="text-text mb-4">
          <strong>NO INFORMATION COLLECTED:</strong> Any answers you provide are
          anonymous. No personally identifiable information, including IP
          address, is collected from this application, and the Agency has no way
          of connecting responses to any individual.
        </p>
        <p className="text-text mb-4">
          The Navigator is not an online application. Completing the navigator
          does not entitle you to a visa or any other immigration benefit. The
          Agency or consulate may require you to provide additional information
          or supporting documents before acting on your request.
        </p>
        <h3 className="text-lg font-medium text-primary mb-2">ACCESSIBILITY</h3>
        <p className="text-text mb-2">
          Google Forms has certain software limitations. We have provided
          alternatives throughout for the following issues that users will
          encounter:
        </p>
        <ul className="list-disc list-inside text-text">
          <li>Repeated page titles when using screen readers</li>
          <li>Color contrast for buttons</li>
          <li>Areas where screen readers announce additional blank spaces</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
