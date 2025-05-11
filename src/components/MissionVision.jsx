import React from "react";

const MissionVision = () => {
  return (
    <section className="pb-20">
      <div className="max-w-5xl mx-auto px-4">        
        <section className="py-20 rounded-2xl">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                আমাদের লক্ষ্য ও উদ্দেশ্য
              </h2>
              <p className="text-gray-600 text-lg">
                ডিজিটাল বাংলাদেশের পথে একটি নিরাপদ ও সহজ বিল ব্যবস্থাপনার
                ভবিষ্যৎ গড়ার প্রত্যয়ে আমরা কাজ করছি।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition hover:shadow-2xl">
                <p className="text-gray-700 text-lg leading-relaxed">
                  আমরা চাই প্রতিটি বাংলাদেশি সহজে ও নিরাপদে তাদের দৈনন্দিন বিল
                  পরিশোধ করতে পারুক। এটি আমাদের প্রধান লক্ষ্য এবং আমরা সেই
                  লক্ষ্য পূরণে প্রযুক্তিকে কাজে লাগাচ্ছি।
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition hover:shadow-2xl">
                <p className="text-gray-700 text-lg leading-relaxed">
                  দেশের প্রত্যন্ত অঞ্চলের মানুষ যেন ডিজিটাল বিল ব্যবস্থাপনার
                  সুযোগ পায়, সে লক্ষ্যে আমরা সহজ ও সবার জন্য উপযোগী একটি
                  প্ল্যাটফর্ম তৈরি করছি।
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition hover:shadow-2xl">
                <p className="text-gray-700 text-lg leading-relaxed">
                  আমাদের উদ্দেশ্য শুধুই বিল ম্যানেজমেন্ট নয়, বরং একটি সচেতন ও
                  ডিজিটাল ভবিষ্যৎ গড়ে তোলা— যেখানে সুরক্ষা ও স্বাচ্ছন্দ্য থাকবে
                  একসাথে।
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition hover:shadow-2xl">
                <p className="text-gray-700 text-lg leading-relaxed">
                  আমরা এমন একটি সিস্টেম তৈরি করছি, যা ব্যবহারকারী-বান্ধব, নিরাপদ
                  এবং দ্রুত— যেন আপনি ঘরে বসেই সকল বিল সহজে ও সময়মতো পরিশোধ করতে
                  পারেন।
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
