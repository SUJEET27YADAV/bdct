export default function ContactUs() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 sm:pb-26">
      <h1 className="w-full text-3xl text-center font-bold mb-6 sm:mb-10">
        Contact Us
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-evenly gap-5">
        <a
          href="mailto:support@bdcs.com"
          className="flex items-center justify-center gap-1"
        >
          <span className="material-icons-outlined">email</span>
          <span>support@bdcs.com</span>
        </a>
        <a
          href="tel:support@bdcs.com"
          className="flex items-center justify-center gap-1"
        >
          <span className="material-icons-outlined">phone</span>
          <span>+91-9999999999</span>
        </a>
      </div>
    </main>
  );
}
