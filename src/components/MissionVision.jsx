const MissionVision = () => {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-5xl px-4">
        <section className="rounded-2xl py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-extrabold text-gray-800">
                আমাদের লক্ষ্য ও উদ্দেশ্য
              </h2>
              <p className="text-lg text-gray-600">
                ডিজিটাল বাংলাদেশের পথে একটি নিরাপদ ও সহজ বিল ব্যবস্থাপনার
                ভবিষ্যৎ গড়ার প্রত্যয়ে আমরা কাজ করছি
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Card 1 */}
              <div className="rounded-2xl bg-white p-8 shadow-xl transition hover:shadow-2xl md:p-12">
                <p className="text-lg leading-relaxed text-gray-700">
                  আমরা চাই প্রতিটি বাংলাদেশি সহজে ও নিরাপদে তাদের দৈনন্দিন বিল
                  পরিশোধ করতে পারুক। এটি আমাদের প্রধান লক্ষ্য এবং আমরা সেই
                  লক্ষ্য পূরণে প্রযুক্তিকে কাজে লাগাচ্ছি
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-white p-8 shadow-xl transition hover:shadow-2xl md:p-12">
                <p className="text-lg leading-relaxed text-gray-700">
                  দেশের প্রত্যন্ত অঞ্চলের মানুষ যেন ডিজিটাল বিল ব্যবস্থাপনার
                  সুযোগ পায়, সে লক্ষ্যে আমরা সহজ ও সবার জন্য উপযোগী একটি
                  প্ল্যাটফর্ম তৈরি করছি
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl bg-white p-8 shadow-xl transition hover:shadow-2xl md:p-12">
                <p className="text-lg leading-relaxed text-gray-700">
                  আমাদের উদ্দেশ্য শুধুই বিল ম্যানেজমেন্ট নয়, বরং একটি সচেতন ও
                  ডিজিটাল ভবিষ্যৎ গড়ে তোলা— যেখানে সুরক্ষা ও স্বাচ্ছন্দ্য থাকবে
                  একসাথে
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-2xl bg-white p-8 shadow-xl transition hover:shadow-2xl md:p-12">
                <p className="text-lg leading-relaxed text-gray-700">
                  আমরা এমন একটি সিস্টেম তৈরি করছি, যা ব্যবহারকারী-বান্ধব, নিরাপদ
                  এবং দ্রুত— যেন আপনি ঘরে বসেই সকল বিল সহজে ও সময়মতো পরিশোধ করতে
                  পারেন
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MissionVision;
