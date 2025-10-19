import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/constants'
import { OrderDialog } from '../ui/orderdialog'
const CTASection = () => {
  return (
    <section id='contact' className='py-26 px-6 bg-[#181717] '>
      <div className='max-w-7xl mx-auto text-center'>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl uppercase text-foreground mb-8 leading-tight tracking-tight">
              Visit <span className="text-brand-primary">Us</span>
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl  text-brand-secondary mb-6 text-left">Hadramout  is conveniently located on 3200 N Holland Sylvania Rd in Toledo, Ohio, offering a central and accessible location for our guests to enjoy their dining experience.
                  <br />Have any questions or inquiries? Feel free to reach out to us. We would love to hear from you.</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-secondary mb-1 text-left">Address</h4>
                      <p className="text-brand-secondary/80 text-left">
                        3200 N Holland Sylvania Rd
                        <br />
                        Downtown District
                        <br />
                        Toledo, OH 43615-1408
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-secondary mb-1 text-left">Phone</h4>
                      <p className="text-brand-secondary/80">(419) 441-0029</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-secondary mb-1 text-left">Email</h4>
                      <p className="text-brand-secondary/80 text-left">{CONTACT_EMAIL}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-secondary mb-1 text-left">Hours</h4>
                      <div className="text-brand-secondary/80 space-y-1 text-left">
                        <p>Monday - Thursday: 11:00 AM - 8:40 PM</p>
                        <p>Friday - Saturday: 11:00 AM - 9:40 PM</p>
                        <p>Sunday: 12:00 PM - 8:40 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <OrderDialog 
                               doorDashUrl="https://www.doordash.com/en/store/hadramout-restaurant-toledo-29921082/?srsltid=AfmBOoqeItcuGNjdkUoJW1tY00nTATc1Zq5Eh565CAayuWUsHNDPXlQ5"
                               uberEatsUrl="https://www.ubereats.com/store/hadramout-restaurants/CvqtjKNqUay4t8YSau_1iQ?ps=1"
                                 triggerClassName="px-8 py-4 rounded-lg w-full font-bold text-md"

                             />

              </div>
            </div>

            {/* Google Maps */}
            <div className="h-full rounded-lg overflow-hidden border border-brand-primary/20">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.966898989492!2d-83.6823896!3d41.6780583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883c7c1c9f513951%3A0xe40956d0c2c90da8!2s3200%20N%20Holland%20Sylvania%20Rd%2C%20Toledo%2C%20OH%2043615%2C%20USA!5e0!3m2!1sen!2sae!4v1760814830864!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hadramout Restaurant Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection