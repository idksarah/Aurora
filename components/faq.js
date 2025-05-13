export default function Faq() {
  return (
    <section className="flex w-11/12 flex-col items-center justify-center gap-4 lg:w-3/4">
      <div className="faq bg-[#1c1c19] p-8 rounded-2xl border border-[#dba7d0]/30 w-full hover:border-[#dba7d0] transition-all">
        <h4 className="text-2xl font-title italic mb-4">What's a Hackathon?</h4>
        <p className="text-lg font-body leading-relaxed">
          Aurora is a <span className="text-[#dba7d0] font-semibold">social coding event</span>—spend a day coding, learning,
          and creating with support from mentors, workshops, and lots of food and swag. No experience? No problem!
        </p>
      </div>

      <div className="faq bg-[#1c1c19] p-8 rounded-2xl border border-[#dba7d0]/30 w-full hover:border-[#dba7d0] transition-all">
        <h4 className="text-2xl font-title italic mb-4">Who Can Attend?</h4>
        <p className="text-lg font-body leading-relaxed">
          Aurora is open to all local girls and non-binary excited
          to learn and build, no matter their experience level.
        </p>
      </div>

      <div className="faq bg-[#1c1c19] p-8 rounded-2xl border border-[#dba7d0]/30 w-full hover:border-[#dba7d0] transition-all">
        <h4 className="text-2xl font-title italic mb-4">What If I've Never Coded Before?</h4>
        <p className="text-lg font-body leading-relaxed">
          Come join us! We'll have beginner-friendly workshops, mentors, and plenty of support to get you started.
        </p>
      </div>

      <div className="faq bg-[#1c1c19] p-8 rounded-2xl border border-[#dba7d0]/30 w-full hover:border-[#dba7d0] transition-all">
        <h4 className="text-2xl font-title italic mb-4">What Should I Bring?</h4>
        <p className="text-lg font-body leading-relaxed">
          A laptop, charger, and your excitement to learn! Food will be provided.
        </p>
      </div>

      <div className="faq bg-[#1c1c19] p-8 rounded-2xl border border-[#dba7d0]/30 w-full hover:border-[#dba7d0] transition-all">
        <h4 className="text-2xl font-title italic mb-4">Have Another Question?</h4>
        <p className="text-lg font-body leading-relaxed">
          You can find us in the #days-of-service channel on Hack Club Slack, or email us at{" "}
          <a href="mailto:sahiti@hackclub.com" className="text-[#dba7d0] hover:text-[#fcf7f0] transition-colors no-underline">
            sahiti@hackclub.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
