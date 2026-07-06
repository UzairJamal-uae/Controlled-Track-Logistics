export default function Map() {
  return (
    <section className="h-[500px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
      <iframe
        src="https://maps.google.com/maps?q=232%20Park%20Ville,%20Ave2,%20Brooklyn%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Controlled Track Logistics Location"
      ></iframe>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
    </section>
  );
}
