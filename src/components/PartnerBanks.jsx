import React from 'react'

const PartnerBanks = () => {
  return (
    <section className="mt-20 py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-20">আমাদের পার্টনার প্রতিষ্ঠান</h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {['https://analyzenbd.com/assets/images/clients/1.png','https://analyzenbd.com/assets/images/clients/2.png','https://analyzenbd.com/assets/images/clients/4.png','https://analyzenbd.com/assets/images/clients/5.png','https://analyzenbd.com/assets/images/clients/31.png','https://analyzenbd.com/assets/images/clients/32.png','https://analyzenbd.com/assets/images/clients/33.png','https://analyzenbd.com/assets/images/clients/old-clients/banglalink.png', 'https://analyzenbd.com/assets/images/clients/old-clients/grameenphone.png', 'https://analyzenbd.com/assets/images/clients/old-clients/pran-mago-fruit-drink.png','https://analyzenbd.com/assets/images/clients/old-clients/samsung.jpg','https://analyzenbd.com/assets/images/clients/old-clients/mrmango.png','https://analyzenbd.com/assets/images/clients/old-clients/nokia.png'].map((logo, idx) => (
          <img key={idx} src={logo} className="w-35 transition duration-300 animate-bounce" alt="partner logo" />
        ))}
      </div>
    </div>
  </section>
  )
}

export default PartnerBanks
// Our partner company logo